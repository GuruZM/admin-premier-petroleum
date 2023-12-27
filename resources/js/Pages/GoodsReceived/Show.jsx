import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import {useDisclosure , Divider,Button,Input as InputBox} from "@nextui-org/react";
import { toast } from 'react-toastify';
import { useSelector,useDispatch } from 'react-redux';
import { fetchInvoices } from '@/Redux/slices/invoiceSlice';
import goodsreceivedbg from '../../../assets/images/goodsreceivedbg.png';

function Show({auth, goodsRecieved}) {

    console.log(goodsRecieved)
  return (
    <Authenticated
    user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Delivery Note</h2>}
        className="print:hidden"
    >
        <div className='text-white  flex justify-end'>
        <Button  endContent={ <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" color='white' class="pe-3  text-white ">
                        <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                    </svg>} onClick={() => window.print()} className="bg-prime-blue text-white ml-auto  print:hidden">
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
            <img src={goodsreceivedbg} className='w-full'   alt="" srcset="" />
        </div>
                    {/* <h4 class="text-5xl font-semibold uppercase tracking-widest text-white float-right">Invoice</h4> */}
                </div>
                <div class="bg-white md:p-16 p-10">
                    <div class="flex   items-center justify-between gap-6">
                        <div class="  gap-3">
                             
                            {/* <div>
                                <h4 class="text-lg font-semibold">Dwyane Clark</h4>
                                <p class="w-52 text-sm font-medium text-gray-500 mt-2">24 Dummy Street Area, Location, Lorem Ipsum, 570xx59x</p>
                            </div> */}
                        </div>

                        <div className='  text-right'>
                        <h2 class="text-lg font-bold print:font-bold print:text-sm tracking-widest uppercase">PREMIER PETROLEUM 
</h2>
                            <p class="text-xl print:text-xs " >
                            4 on Bishops Road Kabulonga<br/>
 
10101 Lusaka Zambia<br/>
info@premier-petroleum.com
                            </p>
                        </div>
                    </div>

                    <div className="grid print:grid-cols-3 grid-cold-1   md:grid-cols-3 gap-5  print:gap-8 mt-14">
                        <div>
                        <h2 class="text-lg print:text-xs font-semibold tracking-widest ">
                            REFERENCE: <br/>
                            {goodsRecieved.reference}
</h2>
{/* <h3 class="text-lg print:text-xs tracking-widest uppercase">TPIN: </h3> */}

                        </div>

                        <div>
                        <h2 class="text-lg print:text-xs  font-semibold   tracking-widest ">
                            {/* Ship To: <br/> */}
                            {/* {invoice.customer_address} */}
</h2>

{/* <h3 class="text-lg tracking-widest uppercase print:text-xs">Heavy Industrial Area
Lusaka</h3> */}
                        </div>

                        <div className='  flex flex-col print:text-xs items-end'>
                            <div className='flex'>
                                <h2 class="text-lg font-bold print:text-xs tracking-widest uppercase ">Order No <span class="ps-5 text-gray-500"> 
                                {goodsRecieved.order_reference} 
                                </span></h2>
                            </div>
                            <div className='flex'>
                                <h2 class="text-lg font-bold print:text-xs tracking-widest  uppercase ">Date <span class="ps-5 text-gray-500"> 
                                {goodsRecieved.date}
                                </span></h2>
                            </div>

                           
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="border-gray-400 table-auto w-full text-sm mt-14 mb-12 whitespace-pre">
                            <thead>
                                <tr className='bg-prime-blue text-white'>
                                    <th class="p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg   text-start">NO.</th>
                                    <th class="p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg   text-start"> Order Ref</th>
                                    <th class="p-4  print:text-xs  font-bold  uppercase tracking-widest text-lg   text-start">Quantity</th>
                                    <th class="p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg  text-start"> Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {goodsRecieved.items && JSON.parse(goodsRecieved.items).map((item, index) => (
    <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{index + 1}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{item.order_ref}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{item.quantity}</td>
        <td class="p-5 print:text-xs border-b border-gray-400 text-base font-medium">{item.description}</td>

    </tr>
))}
                            </tbody>
                            <tbody class="bg-white">
                               
                            

 
                            
                                
                            </tbody>
                        </table>
                    </div>

                  


                    {/* <hr class="w-40 border border-gray-500 mt-1"/> */}
                    {/* <h3 class="text-xl font-semibold border-gray-500">Authorised Sign</h3> */}

                </div>

                {/* <div class="bg-indigo-400 p-6 relative rounded-3xl after:-rotate-45 rounded-tr-none rounded-ss-none after:-top-3 after:start-[50%] after:absolute after:border-[25px] after:border-t-indigo-400 after:border-e-indigo-400 after:border-transparent"></div> */}
            </div>
        </div>
    </section>
    
    </Authenticated>
  )
}

export default Show