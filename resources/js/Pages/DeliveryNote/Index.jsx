import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

function Index({auth}) {
  return (
    <Authenticated
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Delivery Note</h2>}
    >
    <div>
       Delivery Note Index

    </div>

    </Authenticated>
  )
}

export default Index