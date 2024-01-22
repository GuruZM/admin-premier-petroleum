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
import { toast } from "sonner";
import InputText from "@/Components/InputText";
const INITIAL_VISIBLE_COLUMNS = ["quantity", "price", "status", "actions"];

function Index({ auth }) {
    const [record, setRecord] = React.useState({});
    const { register, reset, setValue, handleSubmit, getValues, formState } =
        useForm({
            defaultValues: {
                quantity: record.quantity || 0,
                price: record.price || 0,
                exchange_rate: record.exchange_rate || 0,
                total: record.total || 0,
                status: "pending",
            },
        });

        useEffect(() => {
            // if (Object.keys(record).length > 0) {
            //     console.log('record :',record);
            //     onOpen();
            //   }
          }, [record]);
          
    
  const editRecord = (obj) => {
    console.log("Editing record:", obj);
    setRecord(obj, () => {
      // Check if the record has values before opening the model
      if (Object.keys(obj).length > 0) {
        onOpen();
      }
    });
  };


    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const { transportExpense } = useSelector((state) => state.transport);
    useEffect(() => {
        dispatch(fetchTransportExpense());
    }, [dispatch]);




    const onSubmit = async (data) => {
        axios
            .post("/transport-expenses", data)
            .then((res) => {
                toast.success("Fuel Expense Added Successfully");
                onOpenChange();
                dispatch(fetchTransportExpense());
                reset();
            })
            .catch((err) => {
                console.log("err :", err);
                toast.error("Something Went wrong");
            });
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
        const exchange_rate = getValues("exchange_rate");
        const total = quantity * price * exchange_rate;
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
                title="Add Transport Expense"
                isSubmitting={false}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-8">
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
                            labelPlacement="outside"
                            title="Price"
                            register={register}
                            name="price"
                            onChange={calculateTotal}
                        />
                        <InputText
                            type="number"
                            labelPlacement="outside"
                            title="Exchange Rate"
                            register={register}
                            name="exchange_rate"
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
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </AddModal>
        </Authenticated>
    );
}

export default Index;
