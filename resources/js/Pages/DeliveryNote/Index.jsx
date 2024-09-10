import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ContentLayout from "@/Components/contentLayout";
import AddModal from "@/Components/AddModal";
import {
    useDisclosure,
    Input,
    Divider,
    Button,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { deliveryNoteColumns } from "@/Utils/tableStructure/columns";
import { fetchDeliveryNotes } from "@/Redux/slices/deliveryNoteSlice";
import { toast } from "sonner";
import { fetchInvoices } from "@/Redux/slices/invoiceSlice";
import { useForm, Controller, set } from "react-hook-form";
import axios from "../../Axios/axiosConfig";
import { router } from "@inertiajs/react";
function Index({ auth }) {
    const INITIAL_VISIBLE_COLUMNS = [
        "client",
        "number",
        "invoice_number",
        "date",
        "issue_date",
        "actions",
    ];

    const baseurl = "/delivery-notes/";
    const { register, reset, handleSubmit, getValues, formState } = useForm();

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { deliveryNotes, status, error } = useSelector(
        (state) => state.deliveryNotes
    );
    const { invoices } = useSelector((state) => state.invoices);

    useEffect(() => {
        dispatch(fetchDeliveryNotes());
        dispatch(fetchInvoices());
    }, []);

    const handleDelete = async (id) => {
        try {
            if (confirm("are you sure you want to delete this Record")) {
                const response = await axios.delete(`/delivery-notes/${id}`);
                console.log(response);
                toast.success("Record Deleted");
                dispatch(fetchDeliveryNotes());
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

    const onSubmit = async (data) => {
        axios
            .post("/delivery-notes", data)
            .then((res) => {
                console.log("res :", res);
                toast.success("Delivery Note Added Successfully");
                onOpenChange();
                dispatch(fetchDeliveryNotes());
                reset();
            })
            .catch((err) => {
                console.log("err :", err);
                toast.error("Failed to add Delivery Note");
            });
    };

    const redi = () => {
        router.visit("/delivery-notes/create");
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Delivery Note
                </h2>
            }
        >
            <ContentLayout
                canView={true}
                canEdit={true}
                canDelete={true}
                onOpen={redi}
                baseurl={baseurl}
                title="Delivery Note"
                handleDelete={handleDelete}
                tableObject={deliveryNotes}
                tableColumns={deliveryNoteColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Delivery Note"
                isSubmitting={false}
            ></AddModal>
        </Authenticated>
    );
}

export default Index;
