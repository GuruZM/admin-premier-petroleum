import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    useDisclosure,
    Divider,
    Button,
    Input as InputBox,
} from "@nextui-org/react";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "@/Redux/slices/customerSlice";
import { customerColumns } from "@/Utils/tableStructure/columns";
import ContentLayout from "@/Components/contentLayout";
import AddModal from "@/Components/AddModal";
import TextInput from "@/Components/TextInput";
import { useForm, Controller, set } from "react-hook-form";
import axios from "../../Axios/axiosConfig";
import InputText from "@/Components/InputText";

const INITIAL_VISIBLE_COLUMNS = [
    "firstname",
    "tpin",
    "lastname",
    "company_name",
    "contact",
    "address",
    "actions",
];

function Index({ auth }) {
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
                await axios.put(`/customers/${record}`, data);
                toast.success("Customer Updated Successfully");
                reset();
                setRecord(null);
            } else {
                // If record is not set or doesn't have an ID, add a new customer
                await axios.post("/customers", data);
                toast.success("Customer Added Successfully");
            }

            // Close the modal, fetch updated data, and reset the form
            onOpenChange();
            dispatch(fetchCustomers());
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to Add/Update Customer");
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
                const response = await axios.delete(`/customers/${id}`);

                toast.success("Record Deleted");
                dispatch(fetchCustomers());
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
                title={record ? "Edit Customer" : "Add Customer"}
                handleDelete={handleDelete}
                tableObject={customers}
                tableColumns={customerColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Customer"
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-8">
                        <InputText
                            style={{
                                border: "none",
                                outline: "none",
                                ":focus": { outline: "none" },
                            }}
                            title="Firstname"
                            name="firstname"
                            register={register}
                        />

                        <InputText
                            name="lastname"
                            register={register}
                            title="Lastname"
                        />

                        <InputText
                            name="company_name"
                            register={register}
                            title="Company Name"
                        />

                        <InputText
                            name="tpin"
                            register={register}
                            title="Tpin"
                        />
                        <InputText
                            name="contact"
                            register={register}
                            title="Contact"
                        />

                        <InputText
                            name="address"
                            register={register}
                            title="Address"
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
