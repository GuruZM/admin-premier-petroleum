import{j as e,u as E,R as I,r as C,f as A,i as k,b as f,c as p,y as h}from"./app-5602ef07.js";import{A as F,d as j,a as d}from"./AuthenticatedLayout-9d092e7a.js";import{I as r}from"./InputText-b9c27cc7.js";import{u as O,a as R}from"./index.esm-abcc67b5.js";import{j as V,b as y}from"./chunk-NXTXE2B3-35aac85c.js";function $({register:n,index:s,handleRemove:c,getValues:u}){return e.jsx("div",{children:e.jsx("div",{className:" flex dark:text-white justify-between space-x-5 items-center",children:e.jsxs("div",{className:" flex flex-wrap  w-full   ",children:[e.jsx("div",{className:" flex-1 flex px-2   flex-col  ",children:e.jsx("div",{className:" flex px-2   flex-1  flex-col items-start",children:e.jsx(r,{title:"Description",type:"text",register:n,name:`items.${s}.description`})})}),e.jsx("div",{className:" flex px-2   flex-1  flex-col items-start",children:e.jsx(r,{title:"Qty",type:"number",register:n,name:`items.${s}.quantity`})})]})})})}function G({auth:n,deliveryNote:s}){const c=E(),u=[{description:"",quantity:0}],o=O({defaultValues:{invoice:s?s.invoice_id:0,client:s?s.client_id:0,date:s?s.date:new Date().toISOString().slice(0,10),issue_date:s?s.issue_date:new Date().toISOString().slice(0,10),number:s?s.number:"",items:s?JSON.parse(s.items):u}}),{fields:v,append:q,remove:b}=R({control:o.control,name:"items"}),{register:a,reset:m,setValue:J,getValues:g,handleSubmit:L}=o,N=t=>{b(t)},[D,P]=I.useState(!1),S=async t=>{if(s&&s.id){const i=new FormData;Object.entries(t).forEach(([l,x])=>{l==="items"&&Array.isArray(x)?i.append(l,JSON.stringify(x)):i.append(l,x)}),i.append("_method","PUT"),p.post(`/delivery-notes/${s.id}`,i).then(l=>{d.success("Delivery Note Edited Successfully"),m(),h.visit("/delivery-notes")}).catch(l=>{console.error("Error editing delivery note:",l),d.error("Failed to edit delivery note")})}else p.post("/delivery-notes",t).then(i=>{d.success("Delivery Note Added Successfully"),m(),h.visit("/delivery-notes")}).catch(i=>{console.error("Error adding delivery note:",i),d.error("Failed to add delivery note")})};C.useEffect(()=>{c(A()),c(k())},[c]);const w=f(t=>t.customers.customers),_=f(t=>t.invoices.invoices);return console.log("invoices",_),e.jsx(F,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:s?"Edit Delivery Note":"Create Delivery Note"}),children:e.jsxs(V.div,{initial:{x:-500,opacity:0},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:40,duration:.4}},exit:{x:-700,transition:{duration:.2}},className:"  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-fit md:w-full md:rounded-r-3xl",children:[e.jsx("h1",{className:" font-semibold dark:text-white  text-3xl",children:s?"Edit Delivery Note":"Create Delivery Note"}),e.jsxs("form",{className:"overflow-y-scroll relative scrollbar-hide ",onSubmit:o.handleSubmit(S),children:[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:" ",children:[e.jsx(j,{className:"my-5"}),e.jsxs("div",{className:"  col-span-1",children:[e.jsx("span",{children:"Client"}),e.jsxs("select",{labelPlacement:"outside",label:"Client Name",className:"bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",...a("client"),children:[e.jsx("option",{value:""}),w.map(t=>e.jsx("option",{value:t.id,children:t.company_name},t.id))]})]}),e.jsx(r,{title:"truck details",type:"text",register:a,name:"truck_details"}),e.jsxs("div",{className:" flex justify-center space-x-5 items-center mt-8 ",children:[e.jsx("div",{className:" flex-1  ",children:e.jsx(r,{title:"Delivery Note Date",type:"date",register:a,name:"date"})}),e.jsx("div",{className:"flex-1  ",children:e.jsx(r,{title:"Issue Date",type:"date",register:a,name:"issue_date"})})]}),e.jsx("h2",{className:" font-medium text-gray-500 mt-10 ",children:"Item List"}),e.jsx(j,{className:"my-5"}),v.map(({id:t},i)=>e.jsx("div",{className:" border-b pb-2 border-gray-300 mb-4 ",children:e.jsx($,{handleRemove:N,getValues:g,control:o.control,index:i,name:`items.${i}.name`,register:a},i)},i)),e.jsx("div",{className:"flex flex-col   items-end",children:e.jsx("input",{type:"hidden",...a("issued_by",{value:n.user.id})})})]})}),e.jsx("div",{className:"sticky space-y-4",children:e.jsxs("div",{className:" flex  justify-end gap-4",children:[e.jsx("div",{children:e.jsx(y,{onClick:()=>{m()},className:"  ",color:"primary",children:"Discard"})}),e.jsx("div",{children:e.jsx(y,{className:"  ",color:"primary",type:"submit",isLoading:D,children:"Submit"})})]})})]})]},"createDeliverynote-sidebar")})}export{G as default};
