import{u as k,R as A,r as E,f as O,b as P,j as e,a as R,c as j,y as g}from"./app-188785ec.js";import{A as V,d as N,a as u}from"./AuthenticatedLayout-bd273315.js";import{I as J}from"./InvoiceField-4e7adeab.js";import{u as L,a as M}from"./index.esm-750e1807.js";import{I as h}from"./InputText-23cc3ce1.js";import{j as U,b as v}from"./chunk-NXTXE2B3-645217aa.js";function Z({auth:f,invoice:t}){const b=k(),S=[{description:"",quantity:0,rate:0,amount:0}],x=L({defaultValues:{invoiceNumber:t&&t.number?t.number:0,client:t&&t.customer?t.customer:0,date:t&&t.date?t.date:new Date().toISOString().slice(0,10),due_date:t&&t.due_date?t.due_date:new Date().toISOString().slice(0,10),truck_plate:t&&t.track_details?t.track_details:"",subtotal:t&&t.subtotal?t.subtotal:0,invoicetotal:t&&t.total?t.total:0,items:t&&t.line_items?JSON.parse(t.line_items):S,vat:t&&t.vat?t.vat:0}}),{register:i,reset:p,setValue:n,getValues:o,handleSubmit:B}=x,{fields:I,append:Q,remove:w}=M({control:x.control,name:"items"}),_=(s,a)=>{if(!parseFloat(a.target.value)){u.error("Please enter a valid number");return}const l=a.target.value;n(`items.${s}.rate`,l);const r=o(`items.${s}.quantity`),d=o(`items.${s}.rate`),m=c(r*parseFloat(d),3);n(`items.${s}.amount`,m),y()},C=s=>{if(!o("items.0.quantity")){u.error("Please enter quantity first");return}const l=parseFloat(s.target.value),r=c(parseFloat(l)*100/116,2),d=c(parseFloat(l)-r,2),m=c(r/o("items.0.quantity"),3);n("items.0.rate",m),n("items.0.amount",r),n("subtotal",r),n("invoicetotal",l),n("vat",d)},$=(s,a)=>{const l=parseInt(a.target.value);n(`items.${s}.quantity`,l);const r=o(`items.${s}.quantity`),d=o(`items.${s}.rate`),m=c(r*d,3);n(`items.${s}.amount`,m),y()},c=(s,a)=>{const l=Math.pow(10,a);return Math.round(s*l)/l},y=()=>{const s=o("items"),a=c(s.reduce((d,m)=>d+m.amount,0),3);n("subtotal",a);const l=c(o("subtotal")+o("subtotal")*.16,3),r=c(o("subtotal")*.16,2);n("vat",r),n("invoicetotal",l)},T=s=>{w(s)},[F,z]=A.useState(!1),D=async s=>{if(t&&t.id){const a=new FormData;Object.entries(s).forEach(([l,r])=>{l==="items"&&Array.isArray(r)?a.append(l,JSON.stringify(r)):a.append(l,r)}),a.append("_method","PUT"),j.post(`/invoices/${t.id}`,a).then(l=>{console.log("res:",l),u.success("Invoice Edited Successfully"),p(),g.visit("/invoices")}).catch(l=>{console.error("err:",l),u.error("Failed to edit the Invoice")})}else j.post("/invoices",s).then(a=>{u.success("Invoice Added Successfully"),g.visit("/invoices"),p()}).catch(a=>{console.error("err:",a),u.error("Failed to create an Invoice")})};E.useEffect(()=>{b(O())},[b]);const q=P(s=>s.customers.customers);return e.jsxs(V,{user:f.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:[t?"Edit":"Create"," Invoice"]}),children:[e.jsx(R,{title:t?"Edit":"Create"}),e.jsxs(U.div,{initial:{x:-500,opacity:0},animate:{opacity:1,x:0,transition:{type:"spring",stiffness:300,damping:40,duration:.4}},exit:{x:-700,transition:{duration:.2}},className:"  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-8 px-6  md:w-full md:rounded-r-3xl",children:[e.jsxs("h1",{className:" font-semibold dark:text-white  text-3xl",children:[t?"Edit":"Create"," Invoice"]}),e.jsxs("form",{className:"overflow-y-scroll relative scrollbar-hide ",onSubmit:x.handleSubmit(D),children:[e.jsx("div",{className:"  ",children:e.jsxs("div",{className:" ",children:[e.jsx("h1",{className:"my-4 mt-5 font-medium",children:"Bill To"}),e.jsx(N,{className:"my-5"}),e.jsx("div",{className:" grid grid-cols-1   gap-3   ",children:e.jsxs("div",{className:"  col-span-1",children:[e.jsx("span",{children:"Client"}),e.jsxs("select",{labelPlacement:"outside",label:"Client Name",className:"bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",...i("client"),children:[e.jsx("option",{value:""}),q.map(s=>e.jsx("option",{value:s.id,children:s.company_name},s.id))]})]})}),e.jsxs("div",{className:" flex justify-center space-x-5 items-center mt-8 ",children:[e.jsx("div",{className:" flex-1  ",children:e.jsx(h,{title:"Date ",className:"flex-1",type:"date",register:i,name:"date"})}),e.jsx("div",{className:"flex-1  ",children:e.jsx(h,{title:"Due Date",className:"flex-1",type:"date",register:i,name:"due_date"})})]}),e.jsx("div",{className:" mx-1 mt-6 flex flex-col ",children:e.jsx(h,{title:"Truck Plate Number",className:"flex-1",type:"text",register:i,name:"truck_plate"})}),e.jsx("h2",{className:" font-medium text-gray-500 mt-10 ",children:"Item List"}),e.jsx(N,{className:"my-5"}),I.map(({id:s},a)=>e.jsx("div",{className:" border-b pb-2 border-gray-300 mb-4 ",children:e.jsx(J,{handleRemove:T,handlePriceChange:_,getValues:o,control:x.control,handleQuantityChange:$,index:a,name:`items.${a}.name`,register:i},a)},a)),e.jsxs("div",{className:"flex    justify-end  items-center space-x-3 ",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm float-left",children:"Sub Total"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:"bg-gray-100  mt-1 p-2 rounded-xl w-fit float-right",...i("subtotal")},"Sub Total")]}),e.jsxs("div",{className:"flex my-3 flex-col",children:[e.jsx("span",{className:"text-sm text-left",children:"VAT (16%)"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},type:"text",readOnly:!0,className:" bg-gray-100 w-fit mt-1 p-2 rounded-xl  float-right",...i("vat")},"vat")]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-sm",children:"Invoice Totall"}),e.jsx("input",{style:{border:"none",outline:"none",boxShadow:"none"},onChange:s=>C(s),className:"bg-gray-100 w-fit mt-1 p-2 rounded-xl float-right"},"invoiceTotal")]}),e.jsx("input",{type:"hidden",...i("issued_by",{value:f.user.id})})]})]})}),e.jsxs("div",{className:"sticky space-y-4",children:[e.jsx("hr",{}),e.jsxs("div",{className:" flex  justify-end gap-3",children:[e.jsx("div",{children:e.jsx(v,{onClick:()=>{p()},className:"  ",color:"primary",children:"Discard"})}),e.jsx("div",{children:e.jsx(v,{className:"  ",color:"primary",type:"submit",isLoading:F,children:t?"Update":"Create"})})]})]})]})]},"createInvoice-sidebar")]})}export{Z as default};