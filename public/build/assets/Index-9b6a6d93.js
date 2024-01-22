import{R as T,r as g,u as q,b as N,o as m,j as e,c as h}from"./app-c89cab4b.js";import{A as O,d as v,a as r}from"./AuthenticatedLayout-de4faf09.js";import{u as L,C as w,t as D,A as V}from"./AddModal-0367f929.js";import{u as W}from"./index.esm-319e7f92.js";import{I as c}from"./InputText-0d641fe4.js";import{b as f}from"./chunk-NXTXE2B3-ffd1b7a1.js";import"./transition-3771e3c6.js";import"./methods-6cb0a051.js";const F=["quantity","price","status","actions"];function H({auth:y}){const[a,b]=T.useState({}),{register:o,reset:j,setValue:S,handleSubmit:E,getValues:u,formState:C}=W({defaultValues:{quantity:a.quantity||0,price:a.price||0,exchange_rate:a.exchange_rate||0,total:a.total||0,status:"pending"}});g.useEffect(()=>{},[a]);const I=t=>{console.log("Editing record:",t),b(t,()=>{Object.keys(t).length>0&&x()})},{isOpen:R,onOpen:x,onOpenChange:d}=L(),i=q(),{transportExpense:_}=N(t=>t.transport);g.useEffect(()=>{i(m())},[i]);const A=async t=>{h.post("/transport-expenses",t).then(s=>{r.success("Fuel Expense Added Successfully"),d(),i(m()),j()}).catch(s=>{console.log("err :",s),r.error("Something Went wrong")})},P=async t=>{var s,l;try{if(confirm("are you sure you want to delete this Record")){const n=await h.delete(`/transport-expenses/${t}`);console.log(n),r.success("Record Deleted"),i(m())}else r.error("Request Cancelled")}catch(n){r("Somthing Went Wrong"),console.error("Error deleting:",((l=(s=n.response)==null?void 0:s.data)==null?void 0:l.error)||n.message)}},p=()=>{const t=u("quantity"),s=u("price"),l=u("exchange_rate"),n=t*s*l;S("total",n)};return e.jsxs(O,{user:y.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Transport Expense"}),children:[e.jsx(w,{onOpen:x,editRecord:I,title:"Transport Expenses",baseurl:"none",tableObject:_,tableColumns:D,initialColumns:F,handleDelete:P}),e.jsx(V,{onOpenChange:d,isOpen:R,title:"Add Transport Expense",isSubmitting:!1,children:e.jsx("form",{onSubmit:E(A),children:e.jsxs("div",{className:"flex flex-col space-y-8",children:[e.jsx(c,{type:"number",labelPlacement:"outside",title:"Quantity",register:o,name:"quantity",onChange:p}),e.jsx(c,{type:"number",labelPlacement:"outside",title:"Price",register:o,name:"price",onChange:p}),e.jsx(c,{type:"number",labelPlacement:"outside",title:"Exchange Rate",register:o,name:"exchange_rate",onChange:p}),e.jsx(c,{title:"Total",readOnly:!0,register:o,name:"total"}),e.jsxs("select",{labelPlacement:"outside",label:"Status",className:" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0",startContent:"👤",...o("status"),children:[e.jsx("option",{id:"pending",value:"pending",children:"Pending"},"pending"),e.jsx("option",{id:"paid",value:"paid",children:"Paid"},"paid")]}),e.jsx(v,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(f,{color:"danger",variant:"flat",onPress:()=>{d()},children:"Close"}),e.jsx(f,{isLoading:C.isSubmitting,type:"submit",color:"primary",children:"Submit"})]})]})})})]})}export{H as default};