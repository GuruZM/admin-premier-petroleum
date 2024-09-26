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
import { dutyColumns } from "@/Utils/tableStructure/columns";
import ContentLayout from "@/Components/contentLayout";
import AddModal from "@/Components/AddModal";
import TextInput from "@/Components/TextInput";
import { useForm, Controller, set } from "react-hook-form";
import axios from "../../Axios/axiosConfig";
import InputText from "@/Components/InputText";

const INITIAL_VISIBLE_COLUMNS = ["description", "rate", "actions"];

function Index({ auth, duties }) {
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
                // If record is set and has an ID, update the existing customer
                await axios.put(`/duties/${record}`, data);
                toast.success("Duty Fees Updated Successfully");
                router.visit("/duties");
                reset();
                setRecord(null);
            } else {
                // If record is not set or doesn't have an ID, add a new customer
                await axios.post("/duties", data);
                router.visit("/duties");
                toast.success("Duty Fees Added Successfully");
            }

            // Close the modal, fetch updated data, and reset the form
            onOpenChange();
            dispatch(fetchCustomers());
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to Add/Update Duty Fees");
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
                const response = await axios.delete(`/duties/${id}`);

                toast.success("Record Deleted");
                router.visit("/duties");
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
                    Customers
                </h2>
            }
        >
            <ContentLayout
                baseurl="none"
                editRecord={editRecord}
                onOpen={onOpen}
                title={record ? "Edit Duty Fees" : "Add Duty Fees"}
                handleDelete={handleDelete}
                canDelete={true}
                tableObject={duties}
                tableColumns={dutyColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Duty Fees"
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2">
                        <InputText
                            title="Description"
                            name="description"
                            register={register}
                        />

                        <InputText
                            name="rate"
                            register={register}
                            title="Rate"
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
