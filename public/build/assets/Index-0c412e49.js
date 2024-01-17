import{u as C,b as A,r as I,n as c,j as e,c as u}from"./app-0d5eb950.js";import{A as E,d as L,a as t}from"./AuthenticatedLayout-4acdf0ce.js";import{u as O,C as P,s as _,A as v,i as n}from"./AddModal-aa972d27.js";import{u as D}from"./index.esm-422847e9.js";import{b as p}from"./chunk-NXTXE2B3-6027dece.js";import"./transition-6b970b42.js";import"./methods-eae04d3a.js";function $({auth:m}){const x=["name","address","contact","tpin","actions"],{register:a,reset:f,handleSubmit:b,getValues:R,formState:h}=D(),{isOpen:j,onOpen:S,onOpenChange:o}=O(),l=C(),{suppliers:y,status:q,error:w}=A(s=>s.suppliers);I.useEffect(()=>{l(c())},[l]);const g=async s=>{u.post("/suppliers",s).then(r=>{t.success("Supplier Added Successfully"),o(),l(c()),f()}).catch(r=>{t.error("Failed to add Supplier")})},N=async s=>{var r,d;try{if(confirm("are you sure you want to delete this Record")){const i=await u.delete(`/suppliers/${s}`);t.success("Record Deleted"),l(c())}else t.error("Request Cancelled")}catch(i){t("Somthing Went Wrong"),console.error("Error deleting:",((d=(r=i.response)==null?void 0:r.data)==null?void 0:d.error)||i.message)}};return e.jsxs(E,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Suppliers"}),children:[e.jsx(P,{onOpen:S,title:"Suppliers",handleDelete:N,tableObject:y,tableColumns:_,initialColumns:x}),e.jsx(v,{onOpenChange:o,isOpen:j,title:"Add Supplier",isSubmitting:!1,children:e.jsx("form",{onSubmit:b(g),children:e.jsxs("div",{className:"flex flex-col space-y-8",children:[e.jsx(n,{style:{border:"none",outline:"none",":focus":{outline:"none"}},labelPlacement:"outside",label:"Name",placeholder:"",className:"border-none outline-none  ",...a("name",{required:!0}),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(n,{style:{border:"none"},labelPlacement:"outside",label:"Address",placeholder:"",className:"   ",...a("address"),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(n,{style:{border:"none"},labelPlacement:"outside",label:"Contact",placeholder:"",className:"   ",...a("contact"),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(n,{style:{border:"none"},labelPlacement:"outside",label:"Tpin",placeholder:"",className:"   ",...a("tpin"),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(L,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(p,{color:"danger",variant:"flat",onPress:()=>{o()},children:"Close"}),e.jsx(p,{isLoading:h.isSubmitting,type:"submit",color:"primary",children:"Submit"})]})]})})})]})}export{$ as default};
