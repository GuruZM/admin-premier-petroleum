import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'

function Index() {
  return (
    <Authenticated
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods Recieved</h2>}
    >
    <div>Goods Recieved Index</div>
    </Authenticated>
  )
}

export default Index