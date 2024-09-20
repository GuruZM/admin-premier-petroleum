import{R as A,u as N,b as q,r as O,v as x,j as e,c as g}from"./app-396de1cd.js";import{A as w,d as D,a}from"./AuthenticatedLayout-6178460a.js";import{u as _,C as L,t as W,A as $}from"./AddModal-881f6dcc.js";import{u as U}from"./index.esm-0bbaf095.js";import{r as V}from"./methods-a1c28160.js";import{I as c}from"./InputText-d8ce4c5d.js";import{b as y}from"./chunk-NXTXE2B3-af8b5c1c.js";const M=["quantity","price","status","actions"];function J({auth:j,invoice_quantity:E}){const[o,u]=A.useState(null),{register:r,reset:S,setValue:d,handleSubmit:C,getValues:f,formState:T}=U(),P=t=>{u(t.id),Object.entries(t).forEach(([s,n])=>{d(s,n)}),h()},{isOpen:v,onOpen:h,onOpenChange:p}=_(),l=N(),{transportExpense:b}=q(t=>t.transport);console.log("transportExpense :",b),O.useEffect(()=>{l(x())},[l]);const I=async t=>{try{if(o){const s=await g.put(`/transport-expenses/${o}`,t);console.log(s),a.success("Transport Expense Updated Successfully"),u(null)}else await g.post("/transport-expenses",t),a.success("Transport Expense Added Successfully");p(),l(x()),S()}catch(s){console.error("Error:",s),a.error("Something Went Wrong")}},R=async t=>{var s,n;try{if(confirm("are you sure you want to delete this Record")){const i=await g.delete(`/transport-expenses/${t}`);console.log(i),a.success("Record Deleted"),l(x())}else a.error("Request Cancelled")}catch(i){a("Somthing Went Wrong"),console.error("Error deleting:",((n=(s=i.response)==null?void 0:s.data)==null?void 0:n.error)||i.message)}},m=()=>{const t=f("quantity"),s=f("price"),n=V(t*s,3);d("total",n)};return e.jsxs(w,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Transport Expense"}),children:[e.jsx(L,{onOpen:h,editRecord:P,title:"Transport Expenses",baseurl:"none",canEdit:!0,canDelete:!0,tableObject:b,tableColumns:W,initialColumns:M,handleDelete:R}),e.jsx($,{onOpenChange:p,isOpen:v,title:o?"Edit Transport Expense":"Add Transport Expense",isSubmitting:!1,children:e.jsx("form",{onSubmit:C(I),children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx("select",{labelPlacement:"outside",label:"Status",className:" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",onChange:t=>d("quantity",t.target.value),children:E.map(t=>e.jsx("option",{id:"pending",value:t.quantity,children:t.invoice_number},"pending"))}),e.jsx(c,{type:"number",labelPlacement:"outside",title:"Quantity",register:r,name:"quantity",onChange:m}),e.jsx(c,{type:"number",step:"any",pattern:"^\\d*(\\.\\d+)?$",labelPlacement:"outside",title:"Price",register:r,name:"price",onChange:m}),e.jsx(c,{type:"number",step:"any",pattern:"^\\d*(\\.\\d+)?$",labelPlacement:"outside",title:"Exchange Rate",register:r,name:"exchange_rate",onChange:m}),e.jsx(c,{title:"Total",readOnly:!0,register:r,name:"total"}),e.jsxs("select",{labelPlacement:"outside",label:"Status",className:" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",...r("status"),children:[e.jsx("option",{id:"pending",value:"pending",children:"Pending"},"pending"),e.jsx("option",{id:"paid",value:"paid",children:"Paid"},"paid")]}),e.jsx(D,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(y,{color:"danger",variant:"flat",onPress:()=>{u(null),p()},children:"Close"}),e.jsx(y,{isLoading:T.isSubmitting,type:"submit",color:"primary",children:o?"Update":"Create"})]})]})})})]})}export{J as default};
