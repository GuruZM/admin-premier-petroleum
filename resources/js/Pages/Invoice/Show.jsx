import React, { useState } from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import invoicebg from '../../../assets/images/invoicebg.png';
import { Button } from '@nextui-org/react';



const Show = ({auth , invoice}) => {
  // Logic for handling page reload
   console.log('invoice is',invoice)
  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Invoice</h2>}
        className="print:hidden"
    >
        <div className='text-white  flex justify-end'>
        <Button color="primary" endContent={ <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" color='white' class="pe-3 text-white ">
                        <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>} onClick={() => window.print()} className="bg-primary ml-auto  print:hidden">
            Print
            </Button>
        </div>
     
            
           
  <section class="py-2 print:py-0 print:min-h-full overflow-hidden relative">
        <div class="inline-block absolute 2xl:end-60 bottom-3 xl:bottom-auto">
           
        </div>

        


        <div class="containe mx-auto">
            <div>
                <div class="flex     gap-6   relative ">
                <div className='  w-full'>
            <img src={invoicebg} className='w-full'   alt="" srcset="" />
        </div>
                    {/* <h4 class="text-5xl font-semibold uppercase tracking-widest text-white float-right">Invoice</h4> */}
                </div>
                <div class="bg-white md:p-16 p-10">
                    <div class="flex   items-center justify-between gap-6">
                        <div class="  gap-3">
                            <h2 class="text-lg print:text-sm font-semibold tracking-widest uppercase">PREMIER PETROLEUM LIMITED
</h2>
<h3 class="text-lg tracking-widest uppercase print:text-sm">TPIN: 2566221102
</h3>
                            {/* <div>
                                <h4 class="text-lg font-semibold">Dwyane Clark</h4>
                                <p class="w-52 text-sm font-medium text-gray-500 mt-2">24 Dummy Street Area, Location, Lorem Ipsum, 570xx59x</p>
                            </div> */}
                        </div>

                        <div>
                        <h2 class="text-lg font-semibold print:text-sm tracking-widest uppercase">INVOICE NO: {invoice.number}
</h2>
                            {/* <p class="text-xl font-semibold">Date: <span class="ps-5 text-gray-500">01 / 02 / 2020</span></p> */}
                        </div>
                    </div>

                    <div className="grid print:grid-cols-3 grid-cold-1   md:grid-cols-3 gap-5  print:gap-8 mt-14">
                        <div>
                        <h2 class="text-lg print:text-xs font-semibold tracking-widest ">
                            Bill To: <br/>
                            {invoice.customer_name}
</h2>
<h3 class="text-lg print:text-xs tracking-widest uppercase">TPIN:{invoice.customer_tpin}</h3>

                        </div>

                        <div>
                        <h2 class="text-lg print:text-xs  font-semibold   tracking-widest ">
                            Ship To: <br/>
                            {invoice.customer_address}
</h2>

{/* <h3 class="text-lg tracking-widest uppercase print:text-xs">Heavy Industrial Area
Lusaka</h3> */}
                        </div>

                        <div className='  flex flex-col print:text-xs items-end'>
                            <div className='flex'>
                                <h2 class="text-lg font-semibold print:text-xs tracking-widest  ">  Date: <span class="ps-5 text-gray-500">{invoice.date}</span></h2>
                            </div>
                            <div className='flex'>
                                <h2 class="text-lg font-semibold print:text-xs tracking-widest  ">Due Date: <span class="ps-5 text-gray-500">{invoice.due_date}</span></h2>
                            </div>

                            <div className='flex'>
                                <h2 class="text-lg font-semibold print:text-xs tracking-widest  ">Truck Details: <span class="ps-5 text-gray-500">{invoice.track_details}</span></h2>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="border-gray-400 table-auto w-full text-sm mt-14 mb-12 whitespace-pre">
                            <thead>
                                <tr className='bg-prime-blue text-white'>
                                    <th class="p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg   text-start">NO.</th>
                                    <th class="p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg  text-start"> Description</th>
                                    <th class="p-4  print:text-xs  font-bold  uppercase tracking-widest text-lg   text-start">Quantity</th>
                                    <th class="p-4 print:text-xs  font-bold   pe-7 uppercase tracking-widest text-lg  text-center">Rate</th>
                                    <th class="p-4 print:text-xs   font-bold  uppercase tracking-widest text-lg   text-end">Amount</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                               
                            {invoice.line_items && JSON.parse(invoice.line_items).map((item, index) => (
    <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{index + 1}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{item.description}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{item.quantity}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium text-center">{item.rate}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium text-end">{item.amount}</td>
    </tr>
))}


                            
                             
                                
                            
                                
                            </tbody>
                        </table>
                    </div>

                    <div class="flex flex-wrap justify-between gap-6 mb-5">
                        <div>
                            <h1 class="text-xl print:text-xs font-semibold">BANKING DETAILS:</h1>

                            
                            <p class="text-sm  print:text-xs font-normal pt-2">Name of Bank: STANBIC BANK</p>
                            <p class="text-sm  print:text-xs font-normal">Payment to: PREMIER PETROLEUM LIMITED</p>
                            <p class="text-sm  print:text-xs font-normal">Account No. 9130005329888</p>


                            <h1 class="text-xl  print:text-xs mt-5 font-semibold">Order issued and approved by:
</h1>

                            <p class="text-sm  print:text-xs font-normal">Issued by: {invoice.issued_by_name}</p>

                            <p class="text-sm mt-5 print:text-xs font-normal">Approved By: K.C</p>
                        </div>

                        <div>
                            <div class="flex flex-wrap items-center justify-end">
                                <div>
                                    <h2 class="pb-1  print:text-xs text-base font-bold uppercase">Sub total:</h2>
                                    <h2 class="pb-4  print:text-xs text-base font-bold uppercase">Value ADDED TAX (16%):</h2>
                                    <h2 class=" py-3  print:text-xs text-white font-extrabold bg-prime-orange   border-gray-500 pl-5  ">Total:</h2>
                                </div>
                                <div className=''>
                                    <h4 class="ps-7  print:text-xs pb-1 text-base font-bold text-end">ZMW {invoice.subtotal}</h4>
                                    <h4 class="ps-7  print:text-xs pb-4 text-base font-bold text-end"> {invoice.subtotal * 0.16}</h4>
                                    <h4 class="py-3  print:text-xs bg-prime-orange text-white font-extrabold text-end  pr-5 ">ZMW  {invoice.total}</h4>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <hr class="w-40 border border-gray-500 mt-1"/> */}
                    {/* <h3 class="text-xl font-semibold border-gray-500">Authorised Sign</h3> */}

                </div>

                {/* <div class="bg-indigo-400 p-6 relative rounded-3xl after:-rotate-45 rounded-tr-none rounded-ss-none after:-top-3 after:start-[50%] after:absolute after:border-[25px] after:border-t-indigo-400 after:border-e-indigo-400 after:border-transparent"></div> */}
            </div>
        </div>
    </section>
    
    </Authenticated>
  );
};

export default Show;
