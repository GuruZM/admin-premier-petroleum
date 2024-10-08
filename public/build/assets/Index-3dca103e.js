import{R as N,u as O,b as D,r as L,o as p,j as e,c as m}from"./app-4e6fcf28.js";import{A as v,d as w,a as r}from"./AuthenticatedLayout-d5372de6.js";import{u as U,C as _,s as T,A as V}from"./AddModal-24bdef7e.js";import{u as F}from"./index.esm-fbd9a623.js";import{I as l}from"./InputText-2f418a09.js";import{b as h}from"./chunk-NXTXE2B3-e6e7ffa8.js";import"./methods-a1c28160.js";function J({auth:S}){const j=["name","address","contact","tpin","actions"],[a,c]=N.useState(null),{register:o,reset:f,setValue:b,handleSubmit:g,getValues:M,formState:y}=F(),{isOpen:C,onOpen:x,onOpenChange:u}=U(),i=O(),{suppliers:A,status:W,error:$}=D(s=>s.suppliers);L.useEffect(()=>{i(p())},[i]);const E=async s=>{try{a?(await m.put(`/suppliers/${a}`,s),r.success("Supplier Updated Successfully"),c(null)):(await m.post("/suppliers",s),r.success("Supplier Added Successfully")),u(),i(p()),f()}catch(t){console.error("Error:",t),r.error("Failed to Add/Update Supplier")}},I=s=>{c(s.id),Object.entries(s).forEach(([t,n])=>{b(t,n)}),x()},R=async s=>{var t,n;try{if(confirm("are you sure you want to delete this Record")){const d=await m.delete(`/suppliers/${s}`);r.success("Record Deleted"),i(p())}else r.error("Request Cancelled")}catch(d){r("Somthing Went Wrong"),console.error("Error deleting:",((n=(t=d.response)==null?void 0:t.data)==null?void 0:n.error)||d.message)}};return e.jsxs(v,{user:S.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Suppliers"}),children:[e.jsx(_,{onOpen:x,baseurl:"none",editRecord:I,canEdit:!0,canDelete:!0,title:"Suppliers",handleDelete:R,tableObject:A,tableColumns:T,initialColumns:j}),e.jsx(V,{onOpenChange:u,isOpen:C,title:a?"Edit Supplier":"Add Supplier",isSubmitting:!1,children:e.jsx("form",{onSubmit:g(E),children:e.jsxs("div",{className:"flex flex-col space-y-8",children:[e.jsx(l,{title:"Name",name:"name",register:o}),e.jsx(l,{name:"address",register:o,title:"Address"}),e.jsx(l,{name:"contact",register:o,title:"Contact"}),e.jsx(l,{name:"tpin",register:o,title:"Tpin"}),e.jsx(w,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(h,{color:"danger",variant:"flat",onPress:()=>{f(),c(null),u()},children:"Close"}),e.jsx(h,{isLoading:y.isSubmitting,type:"submit",color:"primary",children:a?"Update":"Create"})]})]})})})]})}export{J as default};
