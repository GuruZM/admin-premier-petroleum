import{R,u as E,b as F,r as N,f as d,j as e,c as m}from"./app-4e12c00d.js";import{A as O,d as L,a as r}from"./AuthenticatedLayout-f2e2f604.js";import{u as v,C as w,b as U,A as _}from"./AddModal-7b174d67.js";import"./TextInput-6606a2f6.js";import{u as V}from"./index.esm-c51ed377.js";import{I as x}from"./InputText-dd637a64.js";import{b as h}from"./chunk-NXTXE2B3-6965e889.js";import"./methods-a1c28160.js";const M=["description","rate"];function H({auth:y,duties:b}){const[o,n]=R.useState(null),{register:p,reset:i,setValue:j,handleSubmit:g,getValues:T,formState:S}=V(),c=E();F(s=>s.customers),N.useEffect(()=>{c(d())},[]);const{isOpen:C,onOpen:f,onOpenChange:l}=v(),D=async s=>{try{o?(await m.put(`/duties/${o}`,s),r.success("Duty Fees Updated Successfully"),i(),n(null)):(await m.post("/duties",s),r.success("Duty Fees Added Successfully")),l(),c(d()),i()}catch(t){console.error("Error:",t),r.error("Failed to Add/Update Duty Fees")}},A=s=>{n(s.id),Object.entries(s).forEach(([t,a])=>{j(t,a)}),f()},I=async s=>{var t,a;try{if(confirm("are you sure you want to delete this Record")){const u=await m.delete(`/customers/${s}`);r.success("Record Deleted"),c(d())}else r.error("Request Cancelled")}catch(u){r("Somthing Went Wrong"),console.error("Error deleting:",((a=(t=u.response)==null?void 0:t.data)==null?void 0:a.error)||u.message)}};return e.jsxs(O,{user:y.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Customers"}),children:[e.jsx(w,{baseurl:"none",editRecord:A,onOpen:f,title:o?"Edit Duty Fees":"Add Duty Fees",handleDelete:I,tableObject:b,tableColumns:U,initialColumns:M}),e.jsx(_,{onOpenChange:l,isOpen:C,title:"Add Duty Fees",isSubmitting:!1,children:e.jsxs("form",{onSubmit:g(D),children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx(x,{title:"Description",name:"description",register:p}),e.jsx(x,{name:"rate",register:p,title:"Rate"})]}),e.jsx(L,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(h,{color:"danger",variant:"flat",onPress:()=>{i(),n(null),l()},children:"Close"}),e.jsx(h,{isLoading:S.isSubmitting,type:"submit",color:"primary",children:o?"Update":"Create"})]})]})})]})}export{H as default};
