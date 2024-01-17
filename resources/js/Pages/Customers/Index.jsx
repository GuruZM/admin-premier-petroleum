import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react';
import {useDisclosure , Divider,Button,Input as InputBox} from "@nextui-org/react";
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { fetchCustomers } from '@/Redux/slices/customerSlice';
import { customerColumns } from '@/Utils/tableStructure/columns';
import ContentLayout from '@/Components/contentLayout';
import AddModal from '@/Components/AddModal';
import TextInput from '@/Components/TextInput';
import { useForm,  Controller, set,  } from 'react-hook-form';
import axios from '../../Axios/axiosConfig';

const INITIAL_VISIBLE_COLUMNS = ["firstname","tpin","lastname", "company_name", "contact", "address",'actions'];

function Index({auth}) {
  
  const { register,reset, handleSubmit, getValues,formState} = useForm();
  const dispatch = useDispatch()
  const { customers, status, error } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers())
  }, [])


  const {isOpen, onOpen, onOpenChange} = useDisclosure();
 


  const onSubmit = async (data) => {
   
     
    axios.post('/customers',data).then((res)=>{
    
      toast.success('Customer Added Successfully')
      onOpenChange()
      dispatch(fetchCustomers())
      reset()
    }).catch((err)=>{
    
      console.log('err :',err);
      toast.error('Failed to add Customer')
    })
  }
  const handleDelete = async (id) => {
    
    try {        
        if(confirm("are you sure you want to delete this Record")){
         const response = await axios.delete(`/customers/${id}`);

         toast.success("Record Deleted")
         dispatch(fetchCustomers())
        }else{
        toast.error("Request Cancelled")
        }
    } catch (error) {
  
        toast("Somthing Went Wrong")
      console.error('Error deleting:', error.response?.data?.error || error.message);
    }
  };
  return (
    <Authenticated
    user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>}> 
        <ContentLayout onOpen={onOpen} title="Customers" handleDelete={handleDelete} tableObject={customers} tableColumns={customerColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Customer" isSubmitting={false}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col space-y-8'>
          <InputBox
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  label="Firstname"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('firstname')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<InputBox
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Lastname"
                  placeholder=""
                  className="   "
                   {...register('lastname')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<InputBox
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Company"
                  placeholder=""
                  className="   "
                   {...register('company_name', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<InputBox
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Tpin"
                  placeholder=""
                  className="   "
                   {...register('tpin' )}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
<InputBox
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Contact"
                  placeholder=""
                  className="   "
                   {...register('contact')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<InputBox
        style={{border:"none",focus:"none"}}
              
                  labelPlacement='outside'
                  label="Address"
                  placeholder=""
                  className="   "
                   {...register('address')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

          </div>
        
  
                
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
        </form>
        </AddModal>
        </Authenticated>
  )
}

export default Index