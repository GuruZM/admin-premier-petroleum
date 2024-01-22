import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal' 
import {  useDisclosure,Input ,SelectSection,Select,  SelectItem , Button,Divider} from "@nextui-org/react";
import { fuelExpenseColumns } from '@/Utils/tableStructure/columns';
import { fetchSuppliers } from '@/Redux/slices/supplierSlice';
import {fetchFuelExpense} from '@/Redux/slices/fuelExpenseSlice';
import { useForm,  Controller, set, get,  } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import axios from '../../Axios/axiosConfig';
import { toast } from 'sonner';
import InputText from '@/Components/InputText';
const INITIAL_VISIBLE_COLUMNS = ["quantity","price", "total","status", "duty","actions"];

function index({auth}) {

const { register,reset, handleSubmit,setValue,watch, getValues,formState} = useForm();
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const dispatch = useDispatch()
const { suppliers, status, error } = useSelector((state) => state.suppliers);
const { fuelExpenses } = useSelector((state) => state.fuelExpenses);

useEffect(() => {
  dispatch(fetchFuelExpense())
}, [dispatch])

const calculateTotal = () => {
  console.log('watch :',watch('quantity'));
  const quantity = watch('quantity');
  const price = watch('price');
  const exchange_rate = watch('exchange_rate');
  const total = (quantity * price) * exchange_rate;
  // console.log('total :',watch('total'));
  setValue('total', total);
};

// multiply quantity and price to get total
const handleQuantityChange = () => {
  const quantity = getValues('quantity');
  const price = getValues('price');
  const total = quantity * price;
  setValue('total', total);
  calculateDuty();
};
// handle price change 
const handlePriceChange = () => {
  const quantity = getValues('quantity');
  const price = getValues('price');
  const total = quantity * price;
  setValue('total', total);
};

// calculate duty
const calculateDuty = () => {
  const quantity = getValues('quantity');
  const duty = 180000/quantity;
  setValue('duty', duty);
};


const handleDelete = async (id) => {
    
  try {        
      if(confirm("are you sure you want to delete this Record")){
       const response = await axios.delete(`/fuel-expenses/${id}`);      
       toast.success("Record Deleted")
       dispatch(fetchFuelExpense());
      }else{
      toast.error("Request Cancelled")
      }
  } catch (error) {

      toast("Somthing Went Wrong")
    console.error('Error deleting:', error.response?.data?.error || error.message);
  }
};

const onSubmit = async (data) => {
    axios.post('/fuel-expenses',data).then((res)=>{
      console.log('res :',res);
      toast.success('Fuel Expense Successfully')
      onOpenChange()
      dispatch(fetchFuelExpense());
      reset()
    }).catch((err)=>{
      console.log('err :',err);
      toast.error('Something Went Wrong')
    })
  }

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fuel Expense</h2>}
        >
                 <ContentLayout onOpen={onOpen} title="Fuel Expenses" handleDelete={handleDelete} tableObject={fuelExpenses} tableColumns={fuelExpenseColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Expense" isSubmitting={false}
        >

<form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-8'>
        <InputText 
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
                  type='number'
                  title="Quantity"
                  className="border-none outline-none  "
                  register={register}
                  name="quantity"
                  onChange={handleQuantityChange}
         
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<InputText 
        style={{border:"none"}}
                  type='number'
                  title="Price"
                  placeholder=""
                  className="   "
                 register={register}
                  name="price"
                  onChange={calculateTotal}
              
                  
                />

<InputText 
        style={{border:"none"}}
                  type='number'
                  title="Exchange Rate"
                  placeholder=""
                  className="   "
                 register={register}
                  name="exchange_rate"
                  onChange={calculateTotal}           
                />

<div>
          <InputText 
                  title="Total"
                  readOnly
                  className="bg-gray-100 w-full p-2 rounded-xl"
                  register={register}
                  name="total"
                  startContent={<span className="text-default-400 text-small"></span>}
                />
</div>

                <div>
 
<InputText
        style={{border:"none"}}
                  type='number'
                  title="Duty"
                  register={register}
                  name="duty"
                  readOnly
                  startContent={<span className="text-default-400 text-small"></span>}
                />
                </div>


 

<select
                labelPlacement="outside"
                label="Status"
                className=" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0 "
                startContent="👤"
                {...register("status",{required:true})}
              >
               
                        <option
                        id='pending'
                        value="pending"
                        key='pending'
                        >
                          Pending 
                        </option>
                
                        <option
                        key='paid'
                        id='paid'
                        value="paid"
                        >
                          Paid
                        </option>
                
              </select>

<Divider className='my-5'/>
                <div className="buttonSection flex  justify-end gap-1">
                  <Button 
                
                color="danger" variant="flat"  onPress={()=>{
              
                  onOpenChange()  
                }}>
                  Close
                </Button>

                <Button 
                isLoading={formState.isSubmitting}
                type='submit'
                color="primary" >
                 Submit
                </Button>
                </div>
          </div>

        </form>
        </AddModal>

    </Authenticated>
  )
}

export default index