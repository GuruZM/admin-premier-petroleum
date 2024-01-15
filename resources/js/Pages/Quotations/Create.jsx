import React,{useEffect,useState} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { motion } from "framer-motion";
import { InvoiceField } from '@/Components/InvoiceField';
import { PlusIcon } from '@/Components/icons/PlusIcon';
import { fetchCustomers } from '@/Redux/slices/customerSlice';
import { useDispatch,useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { toast } from 'sonner';
import { Select, SelectSection, Input, SelectItem , Button, Divider} from "@nextui-org/react";
import axios from '@/Axios/axiosConfig';
import { router } from '@inertiajs/react';

function Create({auth}) {

    const dispatch = useDispatch();

    const items = [
        {
            description: "",
            quantity: 0,
            rate: 0,
            amount: 0,
     
          },
     ]

     const form = useForm({
        defaultValues: {
            tpin: 0,
            date: new Date().toISOString().slice(0, 10),
            subtotal: 0,
            total: 0,
            vat: 0,
            items: items,
        },
      });
      
      const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "items",
    });


    const { register,reset,setValue,getValues, handleSubmit } = form;

    const handlePriceChange = (index,  e ) => {

        const value = parseInt(e.target.value)
        setValue(`items.${index}.rate`, value);
        const qty = getValues(`items.${index}.quantity`);
        const price = getValues(`items.${index}.rate`);
        const total = qty * price;
        setValue(`items.${index}.amount`, total);
        setInvoiceTotal()
    } 


    const handleQuantityChange = (index ,e ) => {
    
        const value = parseInt(e.target.value)
        setValue(`items.${index}.quantity`, value);
        const qty = getValues(`items.${index}.quantity`);
        const price = getValues(`items.${index}.rate`);
        const total = qty * price;
        setValue(`items.${index}.amount`, total);
        setInvoiceTotal()
    }

    const setInvoiceTotal = () => {
        const items = getValues('items');
        const subtotal = items.reduce((acc , item  ) => acc + item.amount, 0);
        setValue('subtotal', subtotal);
        const quotationtotal = getValues('subtotal')+(getValues('subtotal') * 0.16);
        const vat = getValues('subtotal') * 0.16;
        setValue('vat', vat);
        setValue('total', quotationtotal);
    }
       
    const handleRemove = (index ) => {
        remove(index);
    };

    const handleAdd = () => {
        append({
            description: "",
            quantity: 0,
            rate: 0,
            amount: 0,
            id: "",
        });
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);


    const onSubmit = async (data) => {
        
        axios.post('/quotations',data).then((res)=>{
            toast.success('Quotation Added Successfully')
            router.visit('/quotations')
            reset()
          }).catch((err)=>{
            console.log('err :',err);
            toast.error('Failed to create an Quotation')
          })
    };

  
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const clients = useSelector((state) => state.customers.customers);


  return (
    <Authenticated
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Quotation</h2>}
    >
              <motion.div
        key="createQuote-sidebar"
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
          Create Quotation
        </h1>
        <form
        className="overflow-y-scroll relative scrollbar-hide "
        onSubmit={form.handleSubmit(onSubmit)}> 
        <div className="  ">
        <div className=" ">
          {/* Bill to Section */}

          {/* <h1 className="my-4 mt-5 font-medium">Bill To</h1> */}

          <Divider className="my-5"/>
            
          <div className=" grid grid-cols-1   gap-3   ">
        
            <div className="  col-span-1">
              <Select
                labelPlacement="outside"
                label="Tpin"
                className=" "
                startContent="👤"
                {...register("tpin")}
              >
                {
                    clients.map((client) => (
                        <SelectItem key={client.tpin} value={client.tpin}>
                        {client.tpin}
                        </SelectItem>
                    ))
                }
                
              </Select>
            </div>
          </div>

          <div className=" flex justify-center space-x-5 items-center mt-8 ">
            <div className=" flex-1  ">
              <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="date"
                label="Quotation Date"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("date")}
              />
             
            </div>

        
          </div>

         

          {/* Item List Section */}

          <h2 className=" font-medium text-gray-500 mt-10 ">Item List</h2>
                    
         <Divider className="my-5"/>

          {fields.map(({id}, index) => (
            <div 
            key={index}
            className=" border-b pb-2 border-gray-300 mb-4 ">
              <InvoiceField
                handleRemove={handleRemove}
                handlePriceChange={handlePriceChange}
                key={index}
                getValues={getValues}            
                control={form.control}
                handleQuantityChange={handleQuantityChange}
                index={index}
                name={`items.${index}.name`}
                register={register}
                    
              />
            </div>
          ))}
     
<div className='flex flex-col   items-end'>

  <div className='flex flex-col '>
  <span className='text-sm text-left'>Sub Total</span>

  <input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="Sub Total"
              type="text"
              readOnly           
              className="bg-gray-100 w-fit mt-1 p-2 rounded-xl"
                {...register("subtotal")}
            />
  </div>
          

       <div className='flex flex-col my-3'>
       <span className='text-sm text-left'>VAT (16%)</span>
        
       <input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="vat"
              type="text"
                value={"16"}
              readOnly
              className="bg-gray-100 w-fit mt-1 p-2 rounded-xl"
           
            />
       </div>
     
     <div className='flex flex-col'>
     <span className='text-sm text-left'>Quotation Total</span>
     <input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="invoiceTotal"
              readOnly
             
              className="bg-gray-100 w-fit mt-1 p-2 rounded-xl"
                {...register("total")}
            />
     </div>
        
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