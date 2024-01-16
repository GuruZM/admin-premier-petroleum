import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal' 
import {  useDisclosure,Input ,SelectSection,Select,  SelectItem , Button,Divider} from "@nextui-org/react";
import { fuelExpenseColumns } from '@/Utils/tableStructure/columns';
import { fetchSuppliers } from '@/Redux/slices/supplierSlice';
import { useForm,  Controller, set, get,  } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import axios from '../../Axios/axiosConfig';

const INITIAL_VISIBLE_COLUMNS = ["quantity","price", "total","status", "duty","actions"];

function index({auth}) {

const { register,reset, handleSubmit,setValue,watch, getValues,formState} = useForm();
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const dispatch = useDispatch()
const { suppliers, status, error } = useSelector((state) => state.suppliers);

useEffect(() => {
  // dispatch(fetchSuppliers())
  
}, [dispatch])

const calculateTotal = () => {
  console.log('watch :',watch('quantity'));
  const quantity = watch('quantity');
  const price = watch('price');
  const total = quantity * price;
  console.log('total :',watch('total'));
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

const onSubmit = async (data) => {
   
    console.log('data :',data);
    axios.post('/fuel-expenses',data).then((res)=>{
      console.log('res :',res);
      // toast.success('Supplier Added Successfully')
      onOpenChange()
      // dispatch(fetchSuppliers())
      reset()
    }).catch((err)=>{
    
      console.log('err :',err);
      toast.error('Failed to add Supplier')
    })
  }

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fuel Expense</h2>}
        >
                 <ContentLayout onOpen={onOpen} title="Fuel Expenses" tableObject={suppliers} tableColumns={fuelExpenseColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Expense" isSubmitting={false}
        >

<form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-8'>
        <Input 
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
                  type='number'
                  labelPlacement='outside'
                  label="Quantity"
                  placeholder=""
                  className="border-none outline-none  "
                  {...register('quantity', { onChange: handleQuantityChange })}
                  //  {...register('quantity', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<Input 
        style={{border:"none"}}
                  type='number'
                  labelPlacement='outside'
                  label="Price"
                  placeholder=""
                  className="   "
                {...register('price', {required: true, onChange: calculateTotal })}
                  //  {...register('price', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
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

                <div>
                <small className='font-semibold'>Duty</small>
<input
        style={{border:"none"}}
                  type='number'
                
              
                  placeholder=""
                  className="bg-gray-100 w-full p-2 rounded-xl"
                  readOnly
                   {...register('duty', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
                </div>


 

<Select
                labelPlacement="outside"
                label="Status"
                className=" "
                startContent="👤"
                {...register("status",{required:true})}
              >
               
                        <SelectItem
                        id='pending'
                        value="pending"
                        key='pending'
                        >
                          Pending 
                        </SelectItem>
                
                        <SelectItem
                        key='paid'
                        id='paid'
                        value="paid"
                        >
                          Paid
                        </SelectItem>
                
              </Select>

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