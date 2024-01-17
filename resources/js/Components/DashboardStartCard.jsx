import React from 'react'
import { formatCurrency } from '@/Utils/methods';
const DashboardStartCard = ({stat1,stat2,stat3,title,desc}) => {
   
  return (
    <div
        class="grid grid-cols-1 flex-1 gap-2 rounded-x text-gray-500  p-2      ">
            <p className='bg-white w-fit px-5 rounded-lg  '>{title}</p> 
    <div class="flex gap-4 py-5">
        <div class="flex-1 px-4 bg-white rounded-lg shadow-md flex flex-col gap-1 p-2">
            <small class="text-2xl font-bold py-12  tracking-tight leading-none">{formatCurrency(stat1)}</small><span class="text-xs font-bold text-gray-500">Paid</span>
        </div>
        <div class="flex-1 flex bg-white rounded-lg shadow-md  flex-col gap-1 p-2">
            <small class="text-2xl font-bold py-12 tracking-tight leading-none">{formatCurrency(stat2)}</small><span class="text-xs font-bold text-gray-500">Pending</span>
        </div>
        <div class=" animate-in flex-1 hidden bg-white rounded-lg shadow-md lg:flex flex-col gap-1 p-2">
            <small class="text-2xl font-bold py-12 tracking-tight leading-none">{formatCurrency(stat3)}</small><span class="text-xs font-bold text-gray-500">Total</span>
        </div>
    </div>
</div>
  )
}

export default DashboardStartCard