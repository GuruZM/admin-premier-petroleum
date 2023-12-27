import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal' 
import {  useDisclosure,Input ,Select,SelectItem,Button,Divider} from "@nextui-org/react";
import { transportExpenseColumns } from '@/Utils/tableStructure/columns';
import { fetchSuppliers } from '@/Redux/slices/supplierSlice';
import { useForm,  Controller, set,  } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import axios from '../../Axios/axiosConfig'

const INITIAL_VISIBLE_COLUMNS = ["quantity","price", "status","actions" ];


function Index({auth}) {


const { register,reset, handleSubmit, getValues,formState} = useForm();
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const dispatch = useDispatch()
const { suppliers, status, error } = useSelector((state) => state.suppliers);

useEffect(() => {
  dispatch(fetchSuppliers())
}, [dispatch])




const onSubmit = async (data) => {
   
    console.log('data :',data);
    axios.post('/suppliers',data).then((res)=>{
      console.log('res :',res);
      // toast.success('Supplier Added Successfully')
      onOpenChange()
      dispatch(fetchSuppliers())
      reset()
    }).catch((err)=>{
    
      console.log('err :',err);
      toast.error('Failed to add Supplier')
    })
  }

  const calculateTotal = () => {
    console.log('watch :',watch('quantity'));
    const quantity = watch('quantity');
    const price = watch('price');
    const total = quantity * price;
    console.log('total :',watch('total'));
    setValue('total', total);
  };
  

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Transport Expense</h2>}
        >
                 <ContentLayout onOpen={onOpen} title="Transport Expenses" tableObject={suppliers} tableColumns={transportExpenseColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Transport Expense" isSubmitting={false}
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
                  {...register('quantity', { onChange: calculateTotal })}
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

<Input 
        style={{border:"none"}}
                  type='number'
                  labelPlacement='outside'
                  label="Total"
                  readOnly
                  placeholder=""
                  disabled
                  className="   "
                   {...register('total', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

 

 

<Select
                labelPlacement="outside"
                label="Status"
                className=" "
                startContent="👤"
                {...register("status")}
              >
               
                        <SelectItem
                        id='pending'
                        value="pending"
                        >
                          Pending 
                        </SelectItem>
                
                        <SelectItem
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

export default Index