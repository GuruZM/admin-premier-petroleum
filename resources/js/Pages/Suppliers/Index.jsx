import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ContentLayout from "@/Components/contentLayout";
import AddModal from "@/Components/AddModal";
import { useDisclosure, Input, Button, Divider } from "@nextui-org/react";
import { supplierColumns } from "@/Utils/tableStructure/columns";
import { fetchSuppliers } from "@/Redux/slices/supplierSlice";
import { useForm, Controller, set } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../Axios/axiosConfig";
import InputText from "@/Components/InputText";
import { toast } from "sonner";
function Index({ auth }) {
    const INITIAL_VISIBLE_COLUMNS = [
        "name",
        "address",
        "contact",
        "tpin",
        "actions",
    ];
    const [record, setRecord] = React.useState(null);
    const { register, reset, setValue, handleSubmit, getValues, formState } =
        useForm();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { suppliers, status, error } = useSelector(
        (state) => state.suppliers
    );

    useEffect(() => {
        dispatch(fetchSuppliers());
    }, [dispatch]);

    const onSubmit = async (data) => {
        try {
            if (record) {
                await axios.put(`/suppliers/${record}`, data);
                toast.success("Supplier Updated Successfully");
                setRecord(null);
            } else {
                await axios.post("/suppliers", data);
                toast.success("Supplier Added Successfully");
            }

            onOpenChange();
            dispatch(fetchSuppliers());
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to Add/Update Supplier");
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
                const response = await axios.delete(`/suppliers/${id}`);
                toast.success("Record Deleted");
                dispatch(fetchSuppliers());
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
                    Suppliers
                </h2>
            }
        >
            <ContentLayout
                onOpen={onOpen}
                baseurl="none"
                editRecord={editRecord}
                canEdit={true}
                canDelete={true}
                title="Suppliers"
                handleDelete={handleDelete}
                tableObject={suppliers}
                tableColumns={supplierColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title={record ? "Edit Supplier" : "Add Supplier"}
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-8">
                        <InputText
                            title="Name"
                            name="name"
                            register={register}
                        />

                        <InputText
                            name="address"
                            register={register}
                            title="Address"
                        />

                        <InputText
                            name="contact"
                            register={register}
                            title="Contact"
                        />

                        <InputText
                            name="tpin"
                            register={register}
                            title="Tpin"
                        />

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
                    </div>
                </form>
            </AddModal>
        </Authenticated>
    );
}

export default Index;
