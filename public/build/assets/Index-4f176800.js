import{R as E,u as R,b as L,r as N,f as m,j as e,c as f,y as O}from"./app-adc48ae7.js";import{A as _,d as v,a}from"./AuthenticatedLayout-a111fece.js";import{u as w,C as D,c as U,A as V}from"./AddModal-71b132c2.js";import"./TextInput-d38e530d.js";import{u as z}from"./index.esm-4cef220c.js";import{I as p}from"./InputText-e79ba361.js";import{b as h}from"./chunk-NXTXE2B3-1caf704e.js";import"./methods-a1c28160.js";const M=["logistics","clearing_fee","zcsa"];function H({auth:g,clearanceFees:y}){const[r,c]=E.useState(null),{register:o,reset:l,setValue:C,handleSubmit:b,getValues:T,formState:j}=z(),i=R();L(s=>s.customers),N.useEffect(()=>{i(m())},[]);const{isOpen:S,onOpen:x,onOpenChange:d}=w(),A=async s=>{try{r?(await f.put(`/clearance-fees/${r}`,s),a.success("Clearance Fee Updated Successfully"),l(),c(null)):(await f.post("/clearance-fees",s),O.visit("/clearance-fees"),a.success("Clearance Fee Added Successfully")),d(),i(m()),l()}catch(t){console.error("Error:",t),a.error("Failed to Add/Update Clearance Fee")}},F=s=>{c(s.id),Object.entries(s).forEach(([t,n])=>{C(t,n)}),x()},I=async s=>{var t,n;try{if(confirm("are you sure you want to delete this Record")){const u=await f.delete(`/clearance-fees/${s}`);a.success("Record Deleted"),i(m())}else a.error("Request Cancelled")}catch(u){a("Somthing Went Wrong"),console.error("Error deleting:",((n=(t=u.response)==null?void 0:t.data)==null?void 0:n.error)||u.message)}};return e.jsxs(_,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Clearance Fee"}),children:[e.jsx(D,{baseurl:"none",editRecord:F,onOpen:x,title:r?"Edit Clearance Fee":"Add Clearance Fee",handleDelete:I,tableObject:y,tableColumns:U,initialColumns:M}),e.jsx(V,{onOpenChange:d,isOpen:S,title:"Add Clearance Fee",isSubmitting:!1,children:e.jsxs("form",{onSubmit:b(A),children:[e.jsxs("div",{className:"flex flex-col space-y-8",children:[e.jsx(p,{title:"Logistics",name:"logistics",type:"number",register:o}),e.jsx(p,{type:"number",name:"clearing_fee",register:o,title:"Clearing Fee"}),e.jsx(p,{type:"number",name:"zcsa",register:o,title:"ZCSA"})]}),e.jsx(v,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(h,{color:"danger",variant:"flat",onPress:()=>{l(),c(null),d()},children:"Close"}),e.jsx(h,{isLoading:j.isSubmitting,type:"submit",color:"primary",children:r?"Update":"Create"})]})]})})]})}export{H as default};