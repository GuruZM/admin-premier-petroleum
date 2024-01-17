
import React,{useEffect,useState} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { motion } from "framer-motion";
import { GoodsReceivedField } from '@/Components/GoodsReceivedField';
import { PlusIcon } from '@/Components/icons/PlusIcon';
import { fetchCustomers } from '@/Redux/slices/customerSlice';
import { useDispatch,useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { toast } from 'sonner';
import { Select, SelectSection, Input, SelectItem , Button, Divider} from "@nextui-org/react";
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import { router } from '@inertiajs/react';
import axios from '@/Axios/axiosConfig';
import InputText from '@/Components/InputText';


function Create({auth,goodsRecieved}) {
  
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
      reference: goodsRecieved ? goodsRecieved.reference : "",
      order_ref: goodsRecieved ? goodsRecieved.order_reference : "",
      received_by: goodsRecieved ? goodsRecieved.received_by : "",
      checked_by: goodsRecieved ? goodsRecieved.checked_by : "",
      goods_condition: goodsRecieved ? goodsRecieved.goods_condition : "",
      date: goodsRecieved ? goodsRecieved.date : new Date().toISOString().slice(0, 10),
      items: goodsRecieved ? JSON.parse(goodsRecieved.items) : items,
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
    if (goodsRecieved && goodsRecieved.id) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          if (key === 'items' && Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else {
            formData.append(key, value);
          }
        });
        formData.append('_method', 'PUT');
      axios.post(`/good-received/${goodsRecieved.id}`, formData)
        .then((res) => {
           
          toast.success('Goods Received Edited Successfully');
          reset();  
          router.visit('/good-received');
        })
        .catch((err) => {
          console.error('Error editing goods received:', err);
          toast.error('Failed to edit goods received');
        });
    } else {
      // If goodReceived is not set, send to add
      axios.post('/good-received', data)
        .then((res) => {
          
          toast.success('Goods Received Added Successfully');
          // reset(); // Uncomment this line if you want to reset the form after successful add
          router.visit('/good-received');
        })
        .catch((err) => {
          console.error('Error adding goods received:', err);
          toast.error('Failed to add goods received');
        });
    }
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
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{ goodsRecieved ? "Edit Goods Receievd" : "Create Goods Received"}</h2>}
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
          { goodsRecieved ? "Edit Goods Receievd" : "Create Goods Received"}
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
              <InputText
                label="Reference"
                name="reference"
                register={register}
                title="Reference"
                errors={form.formState.errors}
              />
             
            </div>

            <div className="flex-1  ">
         
              <InputText
                label="Order Reference"
                name="order_ref"
                register={register}
                title="Order Reference"
                errors={form.formState.errors}
              />
            </div>
          </div>

          <div className="flex-1 pt-3  ">
            
              <InputText
                label="Date"
                name="date"
                type="date"
                register={register}
                title="Date"
                errors={form.formState.errors}
              />
            </div>
          

            <div className=" flex justify-center mb-5 space-x-5 items-center mt-8 ">
            <div className=" flex-1  ">
              
              <InputText
                label="Received By"
                name="received_by"
                register={register}
                title="Received By"
                errors={form.formState.errors}
              />
             
            </div>

            <div className="flex-1  ">
           
              <InputText
                label="Checked By"
                name="checked_by"
                register={register}
                title="Checked By"
                errors={form.formState.errors}
              />
            </div>

           
          </div>

          <div className="flex-1 pt-3  ">
              <InputText
                label="Goods Condition"
                name="goods_condition"
                register={register}
                title="Goods Condition"
                errors={form.formState.errors}
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