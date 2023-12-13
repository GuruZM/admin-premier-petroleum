import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react';

import {useDisclosure} from "@nextui-org/react";
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { fetchCustomers } from '@/Redux/slices/customerSlice';
import { customerColumns } from '@/Utils/tableStructure/columns';
import ContentLayout from '@/Components/contentLayout';
import AddModal from '@/Components/AddModal';
 
function Index({auth}) {
  
  const dispatch = useDispatch()
  const { customers, status, error } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers())
    
  }, [])

  const INITIAL_VISIBLE_COLUMNS = ["firstname","lastname", "company", "contact", "address"];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Authenticated
    user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>}> 
        <ContentLayout onOpen={onOpen} title="Customers" tableObject={customers} tableColumns={customerColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Product" isSubmitting={false}
        >
        <form >
          form
          as
        </form>
        </AddModal>
        </Authenticated>
  )
}

export default Index