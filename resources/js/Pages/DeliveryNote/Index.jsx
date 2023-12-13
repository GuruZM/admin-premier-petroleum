import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal'
import {  useDisclosure } from "@nextui-org/react";
import { useSelector,useDispatch } from 'react-redux';
import { deliveryNoteColumns } from '@/Utils/tableStructure/columns';
import { fetchDeliveryNotes } from '@/Redux/slices/deliveryNoteSlice';
function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["address","title","number","issue_date","invoice_number"];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const { deliveryNotes, status, error } = useSelector((state) => state.deliveryNotes);

  useEffect(() => {
    dispatch(fetchDeliveryNotes())
    
  }, [])


  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Delivery Note</h2>}
    >
     <ContentLayout onOpen={onOpen} title="Suppliers" tableObject={deliveryNotes} tableColumns={deliveryNoteColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Supplier" isSubmitting={false}
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