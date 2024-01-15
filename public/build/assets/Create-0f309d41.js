import{u as A,R as Q,r as _,f as T,b as k,j as t,c as P,y as D}from"./app-17e246d1.js";import{A as F,d as f,a as b}from"./AuthenticatedLayout-a6959aa6.js";import{I as O}from"./InvoiceField-daa22c7e.js";import{P as R}from"./PlusIcon-0cb64382.js";import{u as V,a as E}from"./index.esm-f740782c.js";import{m as L,b as m}from"./chunk-NXTXE2B3-77b93743.js";import{s as z,l as B}from"./chunk-ZFWMN6TD-23fed9b0.js";import{i as G}from"./chunk-TC4QW7OA-f7f8009b.js";import"./transition-619f3d46.js";import"./import-cb6b87a3.js";function at({auth:u}){const x=A(),y=[{description:"",quantity:0,rate:0,amount:0}],d=V({defaultValues:{tpin:0,date:new Date().toISOString().slice(0,10),subtotal:0,total:0,vat:0,items:y}}),{fields:j,append:v,remove:N}=E({control:d.control,name:"items"}),{register:l,reset:p,setValue:o,getValues:a,handleSubmit:H}=d,g=(e,s)=>{const n=parseInt(s.target.value);o(`items.${e}.rate`,n);const i=a(`items.${e}.quantity`),r=a(`items.${e}.rate`),c=i*r;o(`items.${e}.amount`,c),h()},S=(e,s)=>{const n=parseInt(s.target.value);o(`items.${e}.quantity`,n);const i=a(`items.${e}.quantity`),r=a(`items.${e}.rate`),c=i*r;o(`items.${e}.amount`,c),h()},h=()=>{const s=a("items").reduce((r,c)=>r+c.amount,0);o("subtotal",s);const n=a("subtotal")+a("subtotal")*.16,i=a("subtotal")*.16;o("vat",i),o("total",n)},w=e=>{N(e)},C=()=>{v({description:"",quantity:0,rate:0,amount:0,id:""})},[I,J]=Q.useState(!1),q=async e=>{P.post("/quotations",e).then(s=>{b.success("Quotation Added Successfully"),D.visit("/quotations"),p()}).catch(s=>{console.log("err :",s),b.error("Failed to create an Quotation")})};_.useEffect(()=>{x(T())},[x]);const $=k(e=>e.customers.customers);return t.jsx(F,{user:u.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Quotation"}),children:t.jsxs(L.div,{initial:{x:-500,opacity:0},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:40,duration:.4}},exit:{x:-700,transition:{duration:.2}},className:"  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-screen md:w-full md:rounded-r-3xl",children:[t.jsx("h1",{className:" font-semibold dark:text-white  text-3xl",children:"Create Quotation"}),t.jsxs("form",{className:"overflow-y-scroll relative scrollbar-hide ",onSubmit:d.handleSubmit(q),children:[t.jsx("div",{className:"  ",children:t.jsxs("div",{className:" ",children:[t.jsx(f,{className:"my-5"}),t.jsx("div",{className:" grid grid-cols-1   gap-3   ",children:t.jsx("div",{className:"  col-span-1",children:t.jsx(z,{labelPlacement:"outside",label:"Tpin",className:" ",startContent:"👤",...l("tpin"),children:$.map(e=>t.jsx(B,{value:e.tpin,children:e.tpin},e.tpin))})})}),t.jsx("div",{className:" flex justify-center space-x-5 items-center mt-8 ",children:t.jsx("div",{className:" flex-1  ",children:t.jsx(G,{style:{border:"none",outline:"none",boxShadow:"none"},type:"date",label:"Quotation Date",labelPlacement:"outside",startContent:"🗓️",...l("date")},"date")})}),t.jsx("h2",{className:" font-medium text-gray-500 mt-10 ",children:"Item List"}),t.jsx(f,{className:"my-5"}),j.map(({id:e},s)=>t.jsx("div",{className:" border-b pb-2 border-gray-300 mb-4 ",children:t.jsx(O,{handleRemove:w,handlePriceChange:g,getValues:a,control:d.control,handleQuantityChange:S,index:s,name:`items.${s}.name`,register:l},s)},s)),t.jsxs("div",{className:"flex flex-col   items-end",children:[t.jsxs("div",{className:"flex flex-col ",children:[t.jsx("span",{className:"text-sm text-left",children:"Sub Total"}),t.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl",...l("subtotal")},"Sub Total")]}),t.jsxs("div",{className:"flex flex-col my-3",children:[t.jsx("span",{className:"text-sm text-left",children:"VAT (16%)"}),t.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",value:"16",readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl"},"vat")]}),t.jsxs("div",{className:"flex flex-col",children:[t.jsx("span",{className:"text-sm text-left",children:"Quotation Total"}),t.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},readOnly:!0,className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl",...l("total")},"invoiceTotal")]}),t.jsx("input",{type:"hidden",...l("issued_by",{value:u.user.id})})]})]})}),t.jsxs("div",{className:"sticky space-y-4",children:[t.jsx(m,{onClick:()=>{C()},className:"  w-full mt-4",color:"primary",endContent:t.jsx(R,{}),children:"Add New Item"}),t.jsxs("div",{className:" flex  justify-between",children:[t.jsx("div",{children:t.jsx(m,{onClick:()=>{p()},className:"  ",color:"primary",children:"Discard"})}),t.jsx("div",{children:t.jsx(m,{className:"  ",color:"primary",type:"submit",isLoading:I,children:"Submit"})})]})]})]})]},"createQuote-sidebar")})}export{at as default};
