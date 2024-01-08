import React from 'react'

const DashboardStartCard = ({stat1,stat2,stat3,title,desc}) => {
  return (
    <div
        class="grid grid-cols-1 flex-1 gap-2 rounded-xl bg-white text-gray-500  p-2 shadow-blue-200 dark:shadow-blue-900 shadow-lg">
    <div class="flex gap-4 py-5">
        <div class="flex-1 flex flex-col gap-1 p-2">
            <small class="text-lg tracking-tight leading-none">K{stat1}</small><span class="text-xs font-bold text-gray-500">Paid</span>
        </div>
        <div class="flex-1 flex flex-col gap-1 p-2">
            <small class="text-lg tracking-tight leading-none">K{stat2}</small><span class="text-xs font-bold text-gray-500">Pending</span>
        </div>
        <div class="flex-1 hidden lg:flex flex-col gap-1 p-2">
            <small class="text-lg tracking-tight leading-none">K{stat3}</small><span class="text-xs font-bold text-gray-500">Total</span>
        </div>
    </div>
    <div class="bg-orange-500 p-2 rounded-lg">
        <div class="flex flex-col gap-1 ">
           
            <span class="text-3xl font-extrabold tracking-tight text-white leading-none">{title}</span>
            <span class="text-xs font-bold text-white">{desc}</span>
        </div>
    </div>
</div>
  )
}

export default DashboardStartCard