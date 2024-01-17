import{u as O,R as q,r as E,f as F,b as P,j as e,c as j,y as N}from"./app-0d5eb950.js";import{A as R,d as g,a as u}from"./AuthenticatedLayout-4acdf0ce.js";import{I as V}from"./InvoiceField-8b6984ad.js";import{I as x,P as J}from"./PlusIcon-40247266.js";import{u as L,a as U}from"./index.esm-422847e9.js";import{m as B,b as h}from"./chunk-NXTXE2B3-6027dece.js";import"./transition-6b970b42.js";function Z({auth:f,invoice:t}){const b=O(),v=[{description:"",quantity:0,rate:0,amount:0}],m=L({defaultValues:{invoiceNumber:t&&t.number?t.number:0,client:t&&t.customer?t.customer:0,date:t&&t.date?t.date:new Date().toISOString().slice(0,10),due_date:t&&t.due_date?t.due_date:new Date().toISOString().slice(0,10),truck_plate:t&&t.track_details?t.track_details:"",subtotal:t&&t.subtotal?t.subtotal:0,invoicetotal:t&&t.total?t.total:0,items:t&&t.line_items?JSON.parse(t.line_items):v,vat:t&&t.vat?t.subtotal*.16:0}}),{register:r,reset:p,setValue:i,getValues:n,handleSubmit:Q}=m,{fields:I,append:S,remove:w}=U({control:m.control,name:"items"}),_=(s,a)=>{const l=parseInt(a.target.value);i(`items.${s}.rate`,l);const o=n(`items.${s}.quantity`),c=n(`items.${s}.rate`),d=o*c;i(`items.${s}.amount`,d),y()},C=(s,a)=>{const l=parseInt(a.target.value);i(`items.${s}.quantity`,l);const o=n(`items.${s}.quantity`),c=n(`items.${s}.rate`),d=o*c;i(`items.${s}.amount`,d),y()},y=()=>{const a=n("items").reduce((c,d)=>c+d.amount,0);i("subtotal",a);const l=n("subtotal")+n("subtotal")*.16,o=n("subtotal")*.16;i("vat",o),i("invoicetotal",l)},A=s=>{w(s)},T=()=>{S({description:"",quantity:0,rate:0,amount:0,id:""})},[$,z]=q.useState(!1),k=async s=>{if(t&&t.id){const a=new FormData;Object.entries(s).forEach(([l,o])=>{l==="items"&&Array.isArray(o)?a.append(l,JSON.stringify(o)):a.append(l,o)}),a.append("_method","PUT"),j.post(`/invoices/${t.id}`,a).then(l=>{console.log("res:",l),u.success("Invoice Edited Successfully"),p(),N.visit("/invoices")}).catch(l=>{console.error("err:",l),u.error("Failed to edit the Invoice")})}else j.post("/invoices",s).then(a=>{u.success("Invoice Added Successfully"),N.visit("/invoices"),p()}).catch(a=>{console.error("err:",a),u.error("Failed to create an Invoice")})};E.useEffect(()=>{b(F())},[b]);const D=P(s=>s.customers.customers);return e.jsx(R,{user:f.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[t?"Edit":"Create"," Invoice"]}),children:e.jsxs(B.div,{initial:{x:-500,opacity:0},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:40,duration:.4}},exit:{x:-700,transition:{duration:.2}},className:"  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-screen md:w-full md:rounded-r-3xl",children:[e.jsxs("h1",{className:" font-semibold dark:text-white  text-3xl",children:[t?"Edit":"Create"," Invoice"]}),e.jsxs("form",{className:"overflow-y-scroll relative scrollbar-hide ",onSubmit:m.handleSubmit(k),children:[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:" ",children:[e.jsx("h1",{className:"my-4 mt-5 font-medium",children:"Bill To"}),e.jsx(g,{className:"my-5"}),e.jsxs("div",{className:" grid grid-cols-2   gap-3   ",children:[e.jsx("div",{className:" mx-1 col-span-1 ",children:e.jsx(x,{title:"Inoivce Number",type:"text",register:r,name:"invoiceNumber"})}),e.jsxs("div",{className:"  col-span-1",children:[e.jsx("span",{children:"Client"}),e.jsx("select",{labelPlacement:"outside",label:"Client Name",className:"bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",...r("client"),children:D.map(s=>e.jsx("option",{value:s.id,children:s.company_name},s.id))})]})]}),e.jsxs("div",{className:" flex justify-center space-x-5 items-center mt-8 ",children:[e.jsx("div",{className:" flex-1  ",children:e.jsx(x,{title:"Date ",className:"flex-1",type:"date",register:r,name:"date"})}),e.jsx("div",{className:"flex-1  ",children:e.jsx(x,{title:"Due Date",className:"flex-1",type:"date",register:r,name:"due_date"})})]}),e.jsx("div",{className:" mx-1 mt-6 flex flex-col ",children:e.jsx(x,{title:"Truck Plate Number",className:"flex-1",type:"text",register:r,name:"truck_plate"})}),e.jsx("h2",{className:" font-medium text-gray-500 mt-10 ",children:"Item List"}),e.jsx(g,{className:"my-5"}),I.map(({id:s},a)=>e.jsx("div",{className:" border-b pb-2 border-gray-300 mb-4 ",children:e.jsx(V,{handleRemove:A,handlePriceChange:_,getValues:n,control:m.control,handleQuantityChange:C,index:a,name:`items.${a}.name`,register:r},a)},a)),e.jsxs("div",{className:"flex flex-col text-left   items-end",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm float-left",children:"Sub Total"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:"bg-gray-100  mt-1 p-2 rounded-xl w-fit float-right",...r("subtotal")},"Sub Total")]}),e.jsxs("div",{className:"flex my-3 flex-col",children:[e.jsx("span",{className:"text-sm text-left",children:"VAT (16%)"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:" bg-gray-100 w-fit mt-1 p-2 rounded-xl  float-right",...r("vat")},"vat")]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm",children:"Invoice Total"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},isReadOnly:!0,readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl float-right",...r("invoicetotal")},"invoiceTotal")]}),e.jsx("input",{type:"hidden",...r("issued_by",{value:f.user.id})})]})]})}),e.jsxs("div",{className:"sticky space-y-4",children:[e.jsx(h,{onClick:()=>{T()},className:"  w-full mt-4",color:"primary",endContent:e.jsx(J,{}),children:"Add New Item"}),e.jsxs("div",{className:" flex  justify-between",children:[e.jsx("div",{children:e.jsx(h,{onClick:()=>{p()},className:"  ",color:"primary",children:"Discard"})}),e.jsx("div",{children:e.jsx(h,{className:"  ",color:"primary",type:"submit",isLoading:$,children:t?"Update":"Create"})})]})]})]})]},"createInvoice-sidebar")})}export{Z as default};