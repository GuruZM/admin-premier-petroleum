import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useDisclosure } from "@nextui-org/react";
import { fetchInvoices } from "@/Redux/slices/invoiceSlice";
import { useSelector, useDispatch } from "react-redux";
import { invoiceColumns } from "@/Utils/tableStructure/columns";
import AddModal from "@/Components/AddModal";
import ContentLayout from "@/Components/contentLayout";
import { router } from "@inertiajs/react";
import axios from "@/Axios/axiosConfig";
import { toast } from "sonner";
function Index({ auth }) {
    const INITIAL_VISIBLE_COLUMNS = [
        "number",
        "status",
        "track_details",
        "date",
        "due_date",
        "customer_name",
        "subtotal",
        "total",
        "issued_by_name",
        "actions",
    ];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { invoices, status } = useSelector((state) => state.invoices);

    useEffect(() => {
        dispatch(fetchInvoices());
    }, [dispatch]);

    const redi = () => {
        router.visit("/invoices/create");
    };

    const baseurl = "/invoices/";

    const handleDelete = async (id) => {
        try {
            if (confirm("are you sure you want to delete this Record")) {
                const response = await axios.delete(`/invoices/${id}`);
                console.log(response);
                toast.success("Record Deleted");
                dispatch(fetchInvoices());
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
    console.log("invoices", invoices);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Invoice
                </h2>
            }
        >
            <ContentLayout
                onOpen={redi}
                baseurl={baseurl}
                canView={true}
                canEdit={true}
                canDelete={true}
                title="Invoices"
                handleDelete={handleDelete}
                tableObject={invoices}
                tableColumns={invoiceColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Invoice"
                isSubmitting={false}
            >
                <form></form>
            </AddModal>
        </Authenticated>
    );
}

export default Index;
