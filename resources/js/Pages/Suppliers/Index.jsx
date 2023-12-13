import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import ContentLayout from '@/Components/contentLayout'
import AddModal from '@/Components/AddModal' 
import {  useDisclosure } from "@nextui-org/react";
import { supplierColumns } from '@/Utils/tableStructure/columns';
import { fetchSuppliers } from '@/Redux/slices/supplierSlice';
import { useSelector,useDispatch } from 'react-redux';
function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["name","address", "contact", "tpin"];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const { suppliers, status, error } = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(fetchSuppliers())
    
  }, [])

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods Recieved</h2>}
        >
     <ContentLayout onOpen={onOpen} title="Suppliers" tableObject={suppliers} tableColumns={supplierColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
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