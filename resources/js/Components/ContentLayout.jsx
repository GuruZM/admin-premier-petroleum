import React from 'react'
import { Head } from '@inertiajs/react';
import TableData from './TableData';
function ContentLayout({title, tableObject,editRecord, onOpen,handleDelete, tableColumns,initialColumns,baseurl}) {
  return (
    <div> 
        <Head title={title} />

        <div className="py-12">
        <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">            
            <TableData onOpen={onOpen} editRecord={editRecord} handleDelete={handleDelete} baseurl={baseurl} modelObject={tableObject} objectColumn={tableColumns} initialColumns={initialColumns}/>                   
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ContentLayout