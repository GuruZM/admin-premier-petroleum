import React,{useEffect} from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { useDisclosure } from '@nextui-org/react';
import { fetchGoodsReceived } from '@/Redux/slices/goodsRecievedSlice';
import { useSelector, useDispatch } from 'react-redux';
import { goodsReceivedColumns } from '@/Utils/tableStructure/columns';
import AddModal from '@/Components/AddModal';
import ContentLayout from '@/Components/contentLayout';
import {  router  } from '@inertiajs/react';

function Index({auth}) {

  const INITIAL_VISIBLE_COLUMNS = ["reference","number","date","received_by","checked_by","order_reference"];

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch()
  const {goodsReceived, status} = useSelector((state) => state.goodsReceived);

  useEffect(() => {
    dispatch(fetchGoodsReceived())
    
  }, [dispatch])

  const redi = () => {
    router.visit('/good-received/create')
  }

  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods Recieved</h2>}
    >
      <ContentLayout onOpen={redi} title="Goods Received" tableObject={goodsReceived} tableColumns={goodsReceivedColumns} initialColumns={INITIAL_VISIBLE_COLUMNS}/>    
        <AddModal 
          onOpenChange={onOpenChange} isOpen={isOpen} title="Add Goods" isSubmitting={false}
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