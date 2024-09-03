import React, { useEffect } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ContentLayout from "@/Components/contentLayout";
import AddModal from "@/Components/AddModal";
import {
    useDisclosure,
    Input,
    Select,
    SelectItem,
    Button,
    Divider,
} from "@nextui-org/react";
import { transportExpenseColumns } from "@/Utils/tableStructure/columns";
import { fetchSuppliers } from "@/Redux/slices/supplierSlice";
import { useForm, Controller, set } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../Axios/axiosConfig";
import { fetchTransportExpense } from "@/Redux/slices/transportSlice";
import { roundToDecimalPlaces } from "@/Utils/methods";
import { toast } from "sonner";
import InputText from "@/Components/InputText";
const INITIAL_VISIBLE_COLUMNS = ["quantity", "price", "status", "actions"];

function Index({ auth, invoice_quantity }) {
    const [record, setRecord] = React.useState(null);
    const { register, reset, setValue, handleSubmit, getValues, formState } =
        useForm();

    const editRecord = (obj) => {
        setRecord(obj.id);
        Object.entries(obj).forEach(([key, value]) => {
            setValue(key, value);
        });
        onOpen();
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { transportExpense } = useSelector((state) => state.transport);

    console.log("transportExpense :", transportExpense);
    useEffect(() => {
        dispatch(fetchTransportExpense());
    }, [dispatch]);

    const onSubmit = async (data) => {
        try {
            if (record) {
                const response = await axios.put(
                    `/transport-expenses/${record}`,
                    data
                );
                console.log(response);
                toast.success("Transport Expense Updated Successfully");
                setRecord(null);
            } else {
                await axios.post("/transport-expenses", data);
                toast.success("Transport Expense Added Successfully");
            }
            onOpenChange();
            dispatch(fetchTransportExpense());
            reset();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Something Went Wrong");
        }
    };
    const handleDelete = async (id) => {
        try {
            if (confirm("are you sure you want to delete this Record")) {
                const response = await axios.delete(
                    `/transport-expenses/${id}`
                );
                console.log(response);
                toast.success("Record Deleted");
                dispatch(fetchTransportExpense());
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

    const calculateTotal = () => {
        const quantity = getValues("quantity");
        const price = getValues("price");
        const total = roundToDecimalPlaces(quantity * price, 3);
        setValue("total", total);
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Transport Expense
                </h2>
            }
        >
            <ContentLayout
                onOpen={onOpen}
                editRecord={editRecord}
                title="Transport Expenses"
                baseurl="none"
                tableObject={transportExpense}
                tableColumns={transportExpenseColumns}
                initialColumns={INITIAL_VISIBLE_COLUMNS}
                handleDelete={handleDelete}
            />
            <AddModal
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                title={
                    record ? "Edit Transport Expense" : "Add Transport Expense"
                }
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-4">
                        <select
                            labelPlacement="outside"
                            label="Status"
                            className=" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0"
                            startContent="👤"
                            onChange={(e) =>
                                setValue("quantity", e.target.value)
                            }
                        >
                            {invoice_quantity.map((invoice) => (
                                <option
                                    id="pending"
                                    value={invoice.quantity}
                                    key="pending"
                                >
                                    {invoice.invoice_number}
                                </option>
                            ))}
                        </select>

                        <InputText
                            type="number"
                            labelPlacement="outside"
                            title="Quantity"
                            register={register}
                            name="quantity"
                            onChange={calculateTotal}
                        />

                        <InputText
                            type="number"
                            step="any"
                            pattern="^\d*(\.\d+)?$"
                            labelPlacement="outside"
                            title="Price"
                            register={register}
                            name="price"
                            onChange={calculateTotal}
                        />

                        <InputText
                            title="Total"
                            readOnly
                            register={register}
                            name="total"
                        />

                        <select
                            labelPlacement="outside"
                            label="Status"
                            className=" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0"
                            startContent="👤"
                            {...register("status")}
                        >
                            <option id="pending" value="pending" key="pending">
                                Pending
                            </option>

                            <option id="paid" value="paid" key="paid">
                                Paid
                            </option>
                        </select>

                        <Divider className="my-5" />
                        <div className="buttonSection flex  justify-end gap-1">
                            <Button
                                color="danger"
                                variant="flat"
                                onPress={() => {
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
