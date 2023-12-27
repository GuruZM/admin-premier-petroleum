import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal'
import {  useDisclosure,Input ,Divider,Button,Select,SelectItem} from "@nextui-org/react";
import { useSelector,useDispatch } from 'react-redux';
import { deliveryNoteColumns } from '@/Utils/tableStructure/columns';
import { fetchDeliveryNotes } from '@/Redux/slices/deliveryNoteSlice';
import { toast } from 'react-toastify';
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import { useForm,  Controller, set,  } from 'react-hook-form';
import axios from '../../Axios/axiosConfig';
import {  router  } from '@inertiajs/react';
function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["client","invoice_number","date","issue_date","actions"];

  const baseurl = "/delivery-notes/"
  const { register,reset, handleSubmit, getValues,formState} = useForm();
 
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const { deliveryNotes, status, error } = useSelector((state) => state.deliveryNotes);
  const { invoices } = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchDeliveryNotes())
    dispatch(fetchInvoices())
    
  }, [])

  
  const onSubmit = async (data) => {
   
     
    axios.post('/delivery-notes',data).then((res)=>{
      console.log('res :',res);
      toast.success('Delivery Note Added Successfully')
      onOpenChange()
      dispatch(fetchDeliveryNotes())
      reset()
    }).catch((err)=>{
    
      console.log('err :',err);
      toast.error('Failed to add Delivery Note')
    })
  }

  const redi = () => {
    router.visit('/delivery-notes/create')
  }

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Delivery Note</h2>}
    >
     <ContentLayout onOpen={redi} baseurl={baseurl} title="Delivery Note" tableObject={deliveryNotes} tableColumns={deliveryNoteColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Delivery Note" isSubmitting={false}
        >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-8'>

         
        <Input
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  label="Address"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('address', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
                   <Input
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  label="Title"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('title', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
                   <Input
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  label="Number"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('number', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />

<Input
         style={{ border: "none", outline: "none", ":focus": { outline: "none" } }}
              
                  labelPlacement='outside'
                  type='date'
                  label="Issue Date"
                  placeholder=""
                  className="border-none outline-none  "
                   {...register('issue_date', { required: true })}
                  startContent={<span className="text-default-400 text-small"></span>}
                />
                   <Select
                labelPlacement="outside"
                label="Invoice Number"
                className=" "
                startContent=""
                {...register("invoice_number")}
              >
                {
                    invoices.map((invoice) => (
                        <SelectItem key={invoice.id} value={invoice.number}>
                        {invoice.number}
                        </SelectItem>
                    ))
                }
                
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