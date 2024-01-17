import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal' 
import {  useDisclosure,Input ,Button,Divider} from "@nextui-org/react";
import { supplierColumns } from '@/Utils/tableStructure/columns';
import { fetchSuppliers } from '@/Redux/slices/supplierSlice';
import { useForm,  Controller, set,  } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import axios from '../../Axios/axiosConfig';
import {toast} from 'sonner'
function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["name","address", "contact", "tpin",'actions'];

  const { register,reset, handleSubmit, getValues,formState} = useForm();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const { suppliers, status, error } = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers())
    
  }, [dispatch])



  const onSubmit = async (data) => {
    
    axios.post('/suppliers',data).then((res)=>{
       toast.success('Supplier Added Successfully')
      onOpenChange()
      dispatch(fetchSuppliers())
      reset()
    }).catch((err)=>{ 
      toast.error('Failed to add Supplier')
    })
  }

  const handleDelete = async (id) => {
    
    try {        
        if(confirm("are you sure you want to delete this Record")){
         const response = await axios.delete(`/suppliers/${id}`);
        
         toast.success("Record Deleted")
         dispatch(fetchSuppliers())
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
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Suppliers</h2>}
        >
     <ContentLayout onOpen={onOpen} title="Suppliers" handleDelete={handleDelete} tableObject={suppliers} tableColumns={supplierColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Supplier" isSubmitting={false}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col space-y-8'>
        <Input 
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  label="Name"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('name', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<Input 
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Address"
                  placeholder=""
                  className="   "
                   {...register('address')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<Input 
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Contact"
                  placeholder=""
                  className="   "
                   {...register('contact')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<Input 
        style={{border:"none"}}
              
                  labelPlacement='outside'
                  label="Tpin"
                  placeholder=""
                  className="   "
                   {...register('tpin')}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

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