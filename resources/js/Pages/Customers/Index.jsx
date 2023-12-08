import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'

function Index({auth}) {
  return (
    <Authenticated
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>} 
    >
        <div> Customer Index</div>
        </Authenticated>
  )
}

export default Index