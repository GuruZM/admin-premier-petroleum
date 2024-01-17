import{b as O,u as Q,R as D,r as k,f as P,j as e,c as b,y as j}from"./app-0d5eb950.js";import{A as R,d as g,a as u}from"./AuthenticatedLayout-4acdf0ce.js";import{I as V}from"./InvoiceField-8b6984ad.js";import{I as _,P as J}from"./PlusIcon-40247266.js";import{u as L,a as U}from"./index.esm-422847e9.js";import{m as z,b as p}from"./chunk-NXTXE2B3-6027dece.js";import"./transition-6b970b42.js";function q({auth:h,quotation:s}){const v=O(t=>t.customers.customers),f=Q();console.log("quotation :",s);const N=[{description:"",quantity:0,rate:0,amount:0}],m=L({defaultValues:{tpin:s?parseInt(s.tpin):0,date:s?s.date:new Date().toISOString().slice(0,10),subtotal:s?s.subtotal:0,total:s?s.total:0,vat:s?parseFloat(s.subtotal)*.16:0,items:s?JSON.parse(s.items):N}}),{fields:S,append:w,remove:I}=U({control:m.control,name:"items"}),{register:o,reset:x,setValue:r,getValues:i,handleSubmit:B}=m,A=(t,a)=>{const l=parseInt(a.target.value);r(`items.${t}.rate`,l);const n=i(`items.${t}.quantity`),c=i(`items.${t}.rate`),d=n*c;r(`items.${t}.amount`,d),y()},C=(t,a)=>{const l=parseInt(a.target.value);r(`items.${t}.quantity`,l);const n=i(`items.${t}.quantity`),c=i(`items.${t}.rate`),d=n*c;r(`items.${t}.amount`,d),y()},y=()=>{const a=i("items").reduce((c,d)=>c+d.amount,0);r("subtotal",a);const l=i("subtotal")+i("subtotal")*.16,n=i("subtotal")*.16;r("vat",n),r("total",l)},$=t=>{I(t)},E=()=>{w({description:"",quantity:0,rate:0,amount:0,id:""})},[T,G]=D.useState(!1),F=async t=>{if(s&&s.id){const a=new FormData;Object.entries(t).forEach(([l,n])=>{l==="items"&&Array.isArray(n)?a.append(l,JSON.stringify(n)):a.append(l,n)}),a.append("_method","PUT"),b.post(`/quotations/${s.id}/`,a).then(l=>{console.log("res :",l),u.success("Quotation Edited Successfully"),j.visit("/quotations"),x()}).catch(l=>{console.error("Error editing quotation:",l),u.error("Failed to edit quotation")})}else b.post("/quotations",t).then(a=>{u.success("Quotation Added Successfully"),j.visit("/quotations"),x()}).catch(a=>{console.error("Error adding quotation:",a),u.error("Failed to add quotation")})};return k.useEffect(()=>{f(P())},[f]),e.jsx(R,{user:h.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[s?"Edit":"Create"," Quotation"]}),children:e.jsxs(z.div,{initial:{x:-500,opacity:0},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:40,duration:.4}},exit:{x:-700,transition:{duration:.2}},className:"  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-screen md:w-full md:rounded-r-3xl",children:[e.jsxs("h1",{className:" font-semibold dark:text-white  text-3xl",children:[s?"Edit":"Create"," Quotation"]}),e.jsxs("form",{className:"overflow-y-scroll relative scrollbar-hide ",onSubmit:m.handleSubmit(F),children:[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:" ",children:[e.jsx(g,{className:"my-5"}),e.jsx("div",{className:" grid grid-cols-1   gap-3   ",children:e.jsx("div",{className:"  col-span-1",children:e.jsx("select",{className:"bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",...o("tpin"),children:v.map(t=>e.jsx("option",{value:t.tpin,children:t.tpin},t.tpin))})})}),e.jsx("div",{className:" flex justify-center space-x-5 items-center mt-8 ",children:e.jsx("div",{className:" flex-1  ",children:e.jsx(_,{title:"Date",type:"date",register:o,name:"date"})})}),e.jsx("h2",{className:" font-medium text-gray-500 mt-10 ",children:"Item List"}),e.jsx(g,{className:"my-5"}),S.map(({id:t},a)=>e.jsx("div",{className:" border-b pb-2 border-gray-300 mb-4 ",children:e.jsx(V,{handleRemove:$,handlePriceChange:A,getValues:i,control:m.control,handleQuantityChange:C,index:a,name:`items.${a}.name`,register:o},a)},a)),e.jsxs("div",{className:"flex flex-col   items-end",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx("span",{className:"text-sm text-left",children:"Sub Total"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl",...o("subtotal")},"Sub Total")]}),e.jsxs("div",{className:"flex flex-col my-3",children:[e.jsx("span",{className:"text-sm text-left",children:"VAT (16%)"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",value:"16",readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl",...o("vat")},"vat")]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm text-left",children:"Quotation Total"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl",...o("total")},"invoiceTotal")]}),e.jsx("input",{type:"hidden",...o("issued_by",{value:h.user.id})})]})]})}),e.jsxs("div",{className:"sticky space-y-4",children:[e.jsx(p,{onClick:()=>{E()},className:"  w-full mt-4",color:"primary",endContent:e.jsx(J,{}),children:"Add New Item"}),e.jsxs("div",{className:" flex  justify-between",children:[e.jsx("div",{children:e.jsx(p,{onClick:()=>{x()},className:"  ",color:"primary",children:"Discard"})}),e.jsx("div",{children:e.jsx(p,{className:"  ",color:"primary",type:"submit",isLoading:T,children:s?"Update":"Create"})})]})]})]})]},"createQuote-sidebar")})}export{q as default};
