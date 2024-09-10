import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useDisclosure } from "@nextui-org/react";
import { fetchGoodsReceived } from "@/Redux/slices/goodsRecievedSlice";
import { useSelector, useDispatch } from "react-redux";
import { goodsReceivedColumns } from "@/Utils/tableStructure/columns";
import AddModal from "@/Components/AddModal";
import ContentLayout from "@/Components/contentLayout";
import { router } from "@inertiajs/react";
import axios from "@/Axios/axiosConfig";
import { toast } from "sonner";

function Index({ auth }) {
    const INITIAL_VISIBLE_COLUMNS = [
        "reference",
        "date",
        "received_by",
        "checked_by",
        "order_reference",
        "actions",
    ];

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { goodsReceived, status } = useSelector(
        (state) => state.goodsReceived
    );

    useEffect(() => {
        dispatch(fetchGoodsReceived());
    }, [dispatch]);

    const handleDelete = async (id) => {
        try {
            if (confirm("Are you sure you want to delete this Record")) {
                const response = await axios.delete(`/good-received/${id}`);
                console.log(response);
                toast.success("Record Deleted");
                dispatch(fetchGoodsReceived());
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

    const redi = () => {
        router.visit("/good-received/create");
    };
    const baseurl = "/good-received/";
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Goods Recieved
                </h2>
            }
        >
            <ContentLayout
                canView={true}
                canEdit={true}
                canDelete={true}
                onOpen={redi}
                baseurl={baseurl}
                title="Goods Received"
                handleDelete={handleDelete}
                tableObject={goodsReceived}
                tableColumns={goodsReceivedColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title="Add Goods"
                isSubmitting={false}
            ></AddModal>
        </Authenticated>
    );
}

export default Index;
