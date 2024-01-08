import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { useDisclosure } from '@nextui-org/react';
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import { useSelector, useDispatch } from 'react-redux';
import { invoiceColumns } from '@/Utils/tableStructure/columns';
import AddModal from '@/Components/AddModal';
import ContentLayout from '@/Components/contentLayout';
import {  router  } from '@inertiajs/react';

function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["number","status","track_details","date","due_date","customer_name", "subtotal", "total","issued_by_name","actions"];
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const {invoices, status} = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchInvoices())
  }, [dispatch])


  const redi = () => {
    router.visit('/invoices/create')
  }

  const baseurl = "/invoices/"

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Invoice</h2>}
    >
    <ContentLayout onOpen={redi} baseurl={baseurl} title="Invoices" tableObject={invoices} tableColumns={invoiceColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Invoice" isSubmitting={false}
        >
        <form >
           
        </form>
        </AddModal>
    </Authenticated>
  )
}

export default Index