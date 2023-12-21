import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'

function Create({auth}) {
  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods Recieved</h2>}
            >
    <div>Create</div>
   </Authenticated>
  )
}

export default Create