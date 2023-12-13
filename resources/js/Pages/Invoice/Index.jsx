import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { useDisclosure } from '@nextui-org/react';
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import { useSelector, useDispatch } from 'react-redux';
import { invoiceColumns } from '@/Utils/tableStructure/columns';
import AddModal from '@/Components/AddModal';
import ContentLayout from '@/Components/contentLayout';


function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["number","track_details","date","due_date","customer", "subtotal","vat","total","issued_by","approved_by"];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const {invoices, status} = useSelector((state) => state.invoices);

  useEffect(() => {
    dispatch(fetchInvoices())
    
  }, [])


  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Invoice</h2>}
    >
    <ContentLayout onOpen={onOpen} title="Invoices" tableObject={invoices} tableColumns={invoiceColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Invoice" isSubmitting={false}
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