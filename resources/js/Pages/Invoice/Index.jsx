import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
function Index() {
  return (
    <Authenticated
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Invoice</h2>}
    >
    <div>Invoice Index</div>
    </Authenticated>
  )
}

export default Index