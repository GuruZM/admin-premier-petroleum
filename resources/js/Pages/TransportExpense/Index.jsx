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
import {fetchTransportExpense} from '@/Redux/slices/transportSlice'
import { toast } from "sonner";
const INITIAL_VISIBLE_COLUMNS = ["quantity", "price", "status", "actions"];

function Index({ auth }) {
    const { register, reset,setValue, handleSubmit, getValues, formState } = useForm();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
        const { transportExpense } = useSelector(
        (state) => state.transport
    );
    useEffect(() => {
        dispatch(fetchTransportExpense());
    }, [dispatch]);

    const onSubmit = async (data) => {
 
        axios
            .post("/transport-expenses", data)
            .then((res) => {            
                toast.success('Fuel Expense Added Successfully')
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
            if(confirm("are you sure you want to delete this Record")){
             const response = await axios.delete(`/transport-expenses/${id}`);
              console.log(response)
             toast.success("Record Deleted")
             dispatch(fetchTransportExpense());
            }else{
            toast.error("Request Cancelled")
            }
        } catch (error) {
      
            toast("Somthing Went Wrong")
          console.error('Error deleting:', error.response?.data?.error || error.message);
        }
      };
      

    const calculateTotal = () => {      
        const quantity = getValues("quantity");
        const price = getValues("price");
        const total = quantity * price; 
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
                title="Transport Expenses"
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
                        <Input
                            style={{
                                border: "none",
                                outline: "none",
                                ":focus": { outline: "none" },
                            }}
                            type="number"
                            labelPlacement="outside"
                            label="Quantity"
                            placeholder=""
                            className="border-none outline-none  "
                            {...register("quantity", {
                                onChange: calculateTotal,
                            })}
                            startContent={
                                <span className="text-default-400 text-small"></span>
                            }
                        />

                        <Input
                            style={{ border: "none" }}
                            type="number"
                            labelPlacement="outside"
                            label="Price"
                            placeholder=""
                            className="   "
                            {...register("price", {
                                required: true,
                                onChange: calculateTotal,
                            })}
                            //  {...register('price', { required: true })}
                            startContent={
                                <span className="text-default-400 text-small"></span>
                            }
                        />

<div>
<small className='font-semibold'>Total</small>
<input 
        style={{border:"none"}}
                  type='number'
                  labelPlacement='outside'
                  label="Total"
                  readOnly
                  className="bg-gray-100 w-full p-2 rounded-xl"
                   {...register('total', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
</div>

                        <Select
                            labelPlacement="outside"
                            label="Status"
                            className=" "
                            startContent="👤"
                            {...register("status")}
                        >
                            <SelectItem
                                id="pending"
                                value="pending"
                                key="pending"
                            >
                                Pending
                            </SelectItem>

                            <SelectItem id="paid" value="paid" key="paid">
                                Paid
                            </SelectItem>
                        </Select>

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
