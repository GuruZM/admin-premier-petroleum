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
            invoiceNumber: 0,
            client: 0,
            date: new Date().toISOString().slice(0, 10),
            due_date: new Date().toISOString().slice(0, 10),
            truck_plate: "",
            subtotal: 0,
            invoicetotal: 0,
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
        console.log('total :','qty',qty,total);
        setValue(`items.${index}.amount`, total);
        setInvoiceTotal()
    }

    const setInvoiceTotal = () => {
        const items = getValues('items');
        const subtotal = items.reduce((acc , item  ) => acc + item.amount, 0);
        setValue('subtotal', subtotal);
        const invoicetotal = getValues('subtotal')+(getValues('subtotal') * 0.16);
        setValue('invoicetotal', invoicetotal);
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
        
        console.log(data)
        axios.post('/invoices',data).then((res)=>{
            console.log('res :',res);
            toast.success('Invoice Added Successfully')
            router.visit('/invoices')
            reset()
          }).catch((err)=>{
            console.log('err :',err);
            toast.error('Failed to create an Invoice')
          })
    };

  
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const clients = useSelector((state) => state.customers.customers);


  return (
    <Authenticated
    user={auth.user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Invoice</h2>}
    >
              <motion.div
        key="createInvoice-sidebar"
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
          Create Invoice
        </h1>
        <form
        className="overflow-y-scroll relative scrollbar-hide "
        onSubmit={form.handleSubmit(onSubmit)}> 
        <div className="  ">
        <div className=" ">
          {/* Bill to Section */}

          <h1 className="my-4 mt-5 font-medium">Bill To</h1>

          <Divider className="my-5"/>
            
          <div className=" grid grid-cols-2   gap-3   ">
          <div className=" mx-1 col-span-1 ">

            <Input
             style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="invoiceNumber"
              type="text"
              label="Invoice No#"
              labelPlacement="outside"
              startContent="#"
              className=" "
                {...register("invoiceNumber")}
            />
          </div>
            <div className="  col-span-1">
              <Select
                labelPlacement="outside"
                label="Client Name"
                className=" "
                startContent="👤"
                {...register("client")}
              >
                {
                    clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                        {client.company_name}
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
                label="Invoice Date"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("date")}
              />
             
            </div>

            <div className="flex-1  ">
            <Input
                   style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                key="date"
                type="date"
                label="Due Date"
                labelPlacement="outside"
                startContent="🗓️"
                {...register("due_date")}
              />
            </div>
          </div>

          <div className=" mx-1 mt-6 flex flex-col ">
            <Input
                 style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="transport"
              type="text"
              label="Truck Plate Number"
              labelPlacement="outside"
              startContent="🚚"
              className=""
                {...register("truck_plate")}
            />
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
          
<Input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="Sub Total"
              type="text"
              isReadOnly
              label="Sub Total"
              labelPlacement="outside"
              startContent="K"
              className="w-fit float-right"
                {...register("subtotal")}
            />
       
       <Input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="vat"
              type="text"
                value={"16"}
              labelPlacement="outside"
              startContent="%"
              className="w-fit my-5 float-right"
           
            />
            <Input
                    style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              key="invoiceTotal"
              isReadOnly
              type="text"
              label="Invoice Total"
              labelPlacement="outside"
              startContent="K"
              className="w-fit float-right"
                {...register("invoicetotal")}
            />
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