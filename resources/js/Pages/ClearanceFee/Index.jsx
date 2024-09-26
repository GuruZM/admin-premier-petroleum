import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import {
    useDisclosure,
    Divider,
    Button,
    Input as InputBox,
} from "@nextui-org/react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "@/Redux/slices/customerSlice";
import {
    customerColumns,
    clearanceFeesColumns,
} from "@/Utils/tableStructure/columns";
import ContentLayout from "@/Components/contentLayout";

import AddModal from "@/Components/AddModal";
import TextInput from "@/Components/TextInput";
import { useForm, Controller, set } from "react-hook-form";
import axios from "../../Axios/axiosConfig";
import InputText from "@/Components/InputText";

const INITIAL_VISIBLE_COLUMNS = [
    "logistics",
    "clearing_fee",
    "zcsa",
    "actions",
];

function Index({ auth, clearanceFees }) {
    const [record, setRecord] = React.useState(null);
    const { register, reset, setValue, handleSubmit, getValues, formState } =
        useForm();
    const dispatch = useDispatch();
    const { customers, status, error } = useSelector(
        (state) => state.customers
    );

    useEffect(() => {
        dispatch(fetchCustomers());
    }, []);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const onSubmit = async (data) => {
        try {
            if (record) {
                await axios.put(`/clearance-fees/${record}`, data);
                toast.success("Clearance Fee Updated Successfully");
                reset();
                setRecord(null);
            } else {
                // If record is not set or doesn't have an ID, add a new customer
                await axios.post("/clearance-fees", data);

                toast.success("Clearance Fee Added Successfully");
                router.visit("/clearance-fees");
            }

            // Close the modal, fetch updated data, and reset the form
            onOpenChange();
            dispatch(fetchCustomers());
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to Add/Update Clearance Fee");
        }
    };

    const editRecord = (obj) => {
        setRecord(obj.id);
        Object.entries(obj).forEach(([key, value]) => {
            setValue(key, value);
        });
        onOpen();
    };

    const handleDelete = async (id) => {
        try {
            if (confirm("are you sure you want to delete this Record")) {
                const response = await axios.delete(`/clearance-fees/${id}`);
                router.visit("/clearance-fees");
                toast.success("Record Deleted");
                router.visit("/clearance-fees");
            } else {
                toast.error("Request Cancelled");
            }
        } catch (error) {
            toast("Somthing Went Wrong");
            console.error(
                "Error deleting:",
                error.response?.data?.error || error.message
            );
        }
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Clearance Fee
                </h2>
            }
        >
            <ContentLayout
                baseurl="none"
                editRecord={editRecord}
                onOpen={onOpen}
                title={record ? "Edit Clearance Fee" : "Add Clearance Fee"}
                handleDelete={handleDelete}
                canDelete={true}
                tableObject={clearanceFees}
                tableColumns={clearanceFeesColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Clearance Fee"
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-8">
                        <InputText
                            title="Logistics"
                            name="logistics"
                            type="number"
                            register={register}
                        />

                        <InputText
                            type="number"
                            name="clearing_fee"
                            register={register}
                            title="Clearing Fee"
                        />

                        <InputText
                            type="number"
                            name="zcsa"
                            register={register}
                            title="ZCSA"
                        />
                    </div>

                    <Divider className="my-5" />
                    <div className="buttonSection flex  justify-end gap-1">
                        <Button
                            color="danger"
                            variant="flat"
                            onPress={() => {
                                reset();
                                setRecord(null);
                                onOpenChange();
                            }}
                        >
                            Close
                        </Button>

                        <Button
                            isLoading={formState.isSubmitting}
                            type="submit"
                            color="primary"
                        >
                            {record ? "Update" : "Create"}
                        </Button>
                    </div>
                </form>
            </AddModal>
        </Authenticated>
    );
}

export default Index;
