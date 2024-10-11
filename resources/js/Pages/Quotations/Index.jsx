import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useDisclosure } from "@nextui-org/react";
import { fetchQuotations } from "@/Redux/slices/quotationSlice";
import { useSelector, useDispatch } from "react-redux";
import { quotationColumns } from "@/Utils/tableStructure/columns";
import AddModal from "@/Components/AddModal";
import ContentLayout from "@/Components/contentLayout";
import { router } from "@inertiajs/react";
import axios from "@/Axios/axiosConfig";
import { toast } from "sonner";
function Index({ auth }) {
    const INITIAL_VISIBLE_COLUMNS = [
        "company_name",
        "date",
        "vat",
        "subtotal",
        "total",
        "actions",
    ];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();

    const { quotations } = useSelector((state) => state.quotations);
    useEffect(() => {
        dispatch(fetchQuotations());
    }, [dispatch]);

    const redi = () => {
        router.visit("/quotations/create");
    };

    const handleDelete = async (id) => {
        try {
            if (confirm("are you sure you want to delete this Record")) {
                const response = await axios.delete(`/quotations/${id}`);
                console.log(response);
                toast.success("Record Deleted");
                dispatch(fetchQuotations());
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

    const baseurl = "/quotations/";

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Quotations
                </h2>
            }
        >
            <ContentLayout
                canView={true}
                canEdit={true}
                canDelete={true}
                onOpen={redi}
                currency={"ZMW"}
                baseurl={baseurl}
                handleDelete={handleDelete}
                title="quotations"
                tableObject={quotations}
                tableColumns={quotationColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Quotation"
                isSubmitting={false}
            >
                <form></form>
            </AddModal>
        </Authenticated>
    );
}

export default Index;
