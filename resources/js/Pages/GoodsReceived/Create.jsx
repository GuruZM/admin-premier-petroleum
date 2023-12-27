
import React,{useEffect,useState} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { motion } from "framer-motion";
import { GoodsReceivedField } from '@/Components/GoodsReceivedField';
import { PlusIcon } from '@/Components/icons/PlusIcon';
import { fetchCustomers } from '@/Redux/slices/customerSlice';
import { useDispatch,useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { toast } from 'react-toastify';
import { Select, SelectSection, Input, SelectItem , Button, Divider} from "@nextui-org/react";
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import { router } from '@inertiajs/react';
import axios from '@/Axios/axiosConfig';


function Create({auth}) {
  
  const dispatch = useDispatch();
 
 
  const items = [
      {
          order_ref: "",
          description: "",
          quantity: 0,
        },
   ]

   const form = useForm({
      defaultValues: {
          reference: "",
          order_ref:"",
          received_by:"",
          checked_by:"",
          goods_condition:"",
          date: new Date().toISOString().slice(0, 10),
          items: items,
      },
    });
    
    const { fields, append, remove } = useFieldArray({
      control: form.control,
      name: "items",
  });


  const { register,reset,setValue,getValues, handleSubmit } = form;


  const handleRemove = (index ) => {
      remove(index);
  };

  const handleAdd = () => {
      append({
          order_ref: "",
          description: "",
          quantity: 0,
          id: "",
      });
  };

  const [isSubmitting, setIsSubmitting] = React.useState(false);


  const onSubmit = async (data) => {
      axios.post('/good-received',data).then((res)=>{
        console.log('res :',res);
          toast.success('Goods Recieved Added Successfully')

          // reset()
          router.visit('/good-received');
        }).catch((err)=>{
          console.log('err :',err);
          toast.error('Failed to create a Goods Recieved')
        })
  };


useEffect(() => {
  dispatch(fetchCustomers());
  dispatch(fetchInvoices());
}, [dispatch]);

const clients = useSelector((state) => state.customers.customers);
const invoices = useSelector((state) => state.invoices.invoices); 

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods Recieved</h2>}
            >
   <motion.div
        key="createDeliverynote-sidebar"
        initial={{ x: -500, opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 40,
            duration: 0.4,
          },
        }}
        exit={{ x: -700, transition: { duration: 0.2 } }}
        className="  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-screen md:w-full md:rounded-r-3xl"
      >
        <h1 className=" font-semibold dark:text-white  text-3xl">
          {/* {type == 'edit' ? 'Edit' : 'Create'}  */}
         Goods Recieved
        </h1>
        <form
        className="overflow-y-scroll relative scrollbar-hide "
        onSubmit={form.handleSubmit(onSubmit)}> 
        <div className="  ">
        <div className=" ">
          <Divider className="my-5"/>         
          <div className=" grid grid-cols-2   gap-5   ">     
          </div>

          <div className=" flex justify-center mb-5 space-x-5 items-center mt-8 ">
            <div className=" flex-1  ">
              <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="text"
                label="Reference"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("reference")}
              />
             
            </div>

            <div className="flex-1  ">
            <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="text"
                type="text"
                label="Order Number"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("order_reference")}
              />
            </div>
          </div>

          <div className="flex-1 pt-3  ">
            <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="date"
                label="Date"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("date")}
              />
            </div>
          

            <div className=" flex justify-center mb-5 space-x-5 items-center mt-8 ">
            <div className=" flex-1  ">
              <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="text"
                label="Received By"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("received_by")}
              />
             
            </div>

            <div className="flex-1  ">
            <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="text"
                type="text"
                label="Checked By"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("checked_by")}
              />
            </div>

           
          </div>

          <div className="flex-1 pt-3  ">
            <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="textarea"
                label="Goods Condition"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("goods_condition")}
              />
            </div>
          {/* Item List Section */}

          <h2 className=" font-medium text-gray-500 mt-10 ">Item List</h2>
                    
         <Divider className="my-5"/>

          {fields.map(({id}, index) => (
            <div 
            key={index}
            className=" border-b pb-2 border-gray-300 mb-4 ">
              <GoodsReceivedField
                handleRemove={handleRemove}       
                key={index}
                getValues={getValues}            
                control={form.control}
                index={index}
                name={`items.${index}.name`}
                register={register}
                    
              />
            </div>
          ))}
     
<div className='flex flex-col   items-end'>
          
 
       
        
          
    <input
    type='hidden'
    
    {...register('issued_by', { value: auth.user.id })}
    />
</div>
  
        </div>
        </div>
        <div className="sticky space-y-4">

        <Button
            onClick={() => {
                handleAdd();
                }}
            className="  w-full mt-4"
            color="primary" endContent={<PlusIcon />} 
          >
            Add New Item 
          </Button>
        <div className=" flex  justify-between">
          <div>
            <Button
              onClick={() => {reset()}}
              className="  "
              color="primary"
            >
              Discard
            </Button>
          </div>

          <div>
            <Button
              className="  "
              color="primary"
               type="submit"
                isLoading={isSubmitting}
            >
              Submit
            </Button>
          </div>
          
        </div>
        </div>
       
        
        
        </form>
        </motion.div>

            </Authenticated>
  )
}

export default Create