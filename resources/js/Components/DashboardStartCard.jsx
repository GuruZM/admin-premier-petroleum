import React from 'react'
import { formatCurrency } from '@/Utils/methods';
const DashboardStartCard = ({stat1,stat2,stat3,title,desc}) => {
   
  return (
    <div
        class="grid grid-cols-1 flex-1 gap-2 rounded-x text-gray-500       ">
            <p className='bg-orange-500 text-white w-fit p-3 border-2 border-orange-500 rounded-lg   '>{title}</p> 
    <div class="flex gap-4 ">
        <div class="flex-1 px-4 bg-white rounded-lg shadow-md flex flex-col gap-1 ">
            <small class="text-xl px-2 font-bold py-12  tracking-tight leading-none">{formatCurrency(stat1)}</small><span class="text-md font-bold text-gray-500">Paid</span>
        </div>
        <div class="flex-1 flex bg-white rounded-lg shadow-md  flex-col gap-1 ">
            <small class="text-xl px-2 font-bold py-12 tracking-tight leading-none">{formatCurrency(stat2)}</small>
            <span class="text-md bg-orange-500 font-bold text-center text-white  ">Pending</span>
        </div>
        <div class=" animate-in flex-1 hidden bg-white rounded-lg shadow-md lg:flex flex-col gap-1 p-2">
            <small class="text-xl px-2 font-bold py-12 tracking-tight leading-none">{formatCurrency(stat3)}</small><span class="text-md font-bold text-gray-500">Total</span>
        </div>
    </div>
</div>
  )
}

export default DashboardStartCard