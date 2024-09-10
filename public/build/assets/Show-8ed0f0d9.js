import{j as e,a as o,c as h}from"./app-188785ec.js";import{A as m,a as n}from"./AuthenticatedLayout-bd273315.js";import{f as a}from"./methods-a1c28160.js";import{b as l}from"./chunk-NXTXE2B3-645217aa.js";const k=({auth:i,invoice:t})=>{const x=()=>{try{h.put(`/invoices/${t.id}/status`).then(s=>{n.success("Invoice status updated successfully"),window.location.reload()})}catch(s){n.error("Something went wrong"),console.log(s)}},c=s=>{const r=document.createElement("form");r.method="POST",r.action="/invoice/print",r.target="_blank";const d=document.createElement("input");d.type="hidden",d.name="id",d.value=s,r.appendChild(d),document.body.appendChild(r),r.submit(),document.body.removeChild(r)};return console.log(t),e.jsxs(m,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Invoice"}),className:"print:hidden",children:[e.jsx(o,{title:"Invoice"}),e.jsxs("div",{class:"w-full p-5 bg-white px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10",children:[e.jsxs("div",{class:"mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700",children:[e.jsx("div",{children:e.jsx("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-neutral-200",children:"Tax Invoice"})}),e.jsxs("div",{class:"inline-flex gap-x-2",children:[e.jsx("div",{className:"print:hidden",children:t.status==="paid"?e.jsx(l,{disabled:!0,endContent:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",color:"#ffffff",fill:"none",children:[e.jsx("path",{d:"M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044",stroke:"currentColor","stroke-width":"1.5","stroke-linejoin":"round"}),e.jsx("path",{d:"M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z",stroke:"currentColor","stroke-width":"1.5"}),e.jsx("path",{d:"M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),className:"bg-green-500 text-white",children:"Paid"}):e.jsxs("div",{className:"space-x-2",children:[" ",e.jsx(l,{disabled:!0,className:"bg-red-500 text-white  ",endContent:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",color:"#ffffff",fill:"none",children:[e.jsx("path",{d:"M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e.jsx("path",{d:"M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044",stroke:"currentColor","stroke-width":"1.5","stroke-linejoin":"round"}),e.jsx("path",{d:"M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z",stroke:"currentColor","stroke-width":"1.5"}),e.jsx("path",{d:"M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),children:"Unpaid"})," ",e.jsx(l,{className:"bg-black text-white  ",endContent:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",color:"#ffffff",fill:"none",children:e.jsx("path",{d:"M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})}),onClick:x,children:"Mark As Paid"})]})}),e.jsx(l,{endContent:e.jsxs("svg",{class:"flex-shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{width:"12",height:"8",x:"6",y:"14"})]}),onClick:()=>c(t.id),className:"bg-black text-white  print:hidden",children:"Print"})]})]}),e.jsxs("div",{class:"grid md:grid-cols-2 gap-3",children:[e.jsx("div",{children:e.jsxs("div",{class:"grid space-y-3",children:[e.jsxs("dl",{class:"grid sm:flex gap-x-3 text-sm",children:[e.jsx("dt",{class:"min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500",children:"Billed to:"}),e.jsx("dd",{class:"text-gray-800 dark:text-neutral-200",children:t.customer_name})]}),e.jsxs("div",{class:"grid sm:flex gap-x-3 text-sm",children:[e.jsx("dt",{class:"min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500",children:"Shipping details:"}),e.jsx("div",{class:"font-medium max-w-[200px] text-gray-800 dark:text-neutral-200",children:t.customer_address})]})]})}),e.jsx("div",{children:e.jsxs("div",{class:"grid space-y-3",children:[e.jsxs("dl",{class:"grid sm:flex gap-x-3 text-sm",children:[e.jsx("dt",{class:"min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500",children:"Invoice number:"}),e.jsxs("dd",{class:"font-medium text-gray-800 dark:text-neutral-200",children:["#",t.number]})]}),e.jsxs("dl",{class:"grid sm:flex gap-x-3 text-sm",children:[e.jsx("dt",{class:"min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500",children:"Date:"}),e.jsx("dd",{class:"font-medium text-gray-800 dark:text-neutral-200",children:t.date})]}),e.jsxs("dl",{class:"grid sm:flex gap-x-3 text-sm",children:[e.jsx("dt",{class:"min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500",children:"Due date:"}),e.jsx("dd",{class:"font-medium text-gray-800 dark:text-neutral-200",children:t.due_date})]})]})})]}),e.jsxs("div",{class:"mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700",children:[e.jsxs("div",{class:"hidden sm:grid sm:grid-cols-5",children:[e.jsx("div",{class:"sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Description"}),e.jsx("div",{class:"text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Quantity"}),e.jsx("div",{class:"text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Rate"}),e.jsx("div",{class:"text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Amount"})]}),e.jsx("div",{class:"hidden sm:block border-b border-gray-200 dark:border-neutral-700"}),t.line_items&&JSON.parse(t.line_items).map((s,r)=>e.jsxs("div",{class:"grid grid-cols-3 sm:grid-cols-5 gap-2",children:[e.jsxs("div",{class:"col-span-full sm:col-span-2",children:[e.jsx("h5",{class:"sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Description"}),e.jsx("p",{class:"font-medium text-gray-800 dark:text-neutral-200",children:s.description})]}),e.jsxs("div",{children:[e.jsx("h5",{class:"sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Quantity"}),e.jsx("p",{class:"text-gray-800 dark:text-neutral-200",children:s.quantity})]}),e.jsxs("div",{children:[e.jsx("h5",{class:"sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Rate"}),e.jsx("p",{class:"text-gray-800 dark:text-neutral-200",children:s.rate})]}),e.jsxs("div",{children:[e.jsx("h5",{class:"sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Amount"}),e.jsx("p",{class:"sm:text-end text-gray-800 dark:text-neutral-200",children:a(s.amount)})]})]}))]}),e.jsx("div",{class:"mt-8 flex sm:justify-end",children:e.jsx("div",{class:"w-full max-w-2xl sm:text-end space-y-2",children:e.jsxs("div",{class:"grid grid-cols-2    sm:grid-cols-1 gap-3 sm:gap-2",children:[e.jsxs("dl",{class:"grid sm:grid-cols-5  text-sm",children:[e.jsx("dt",{class:"col-span-3  text-gray-500 dark:text-neutral-500",children:"Subotal:"}),e.jsx("dd",{class:"col-span-2   font-medium text-gray-800 dark:text-neutral-200",children:a(t.subtotal)})]}),e.jsxs("dl",{class:"grid sm:grid-cols-5 gap-x-3 text-sm",children:[e.jsx("dt",{class:"col-span-3 text-gray-500 dark:text-neutral-500",children:"Vat:"}),e.jsx("dd",{class:"col-span-2 font-medium text-gray-800 dark:text-neutral-200",children:a(t.vat)})]}),e.jsxs("dl",{class:"grid sm:grid-cols-5 gap-x-3 text-sm",children:[e.jsx("dt",{class:"col-span-3 text-gray-500 dark:text-neutral-500",children:"Total:"}),e.jsx("dd",{class:"col-span-2 font-medium text-gray-800 dark:text-neutral-200",children:a(t.total)})]})]})})})]})]})};export{k as default};
