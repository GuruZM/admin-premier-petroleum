import{u as S,b as _,r as v,j as e,c as E}from"./app-792d2e2c.js";import{A as P,d as O}from"./AuthenticatedLayout-ab7bcd82.js";import{u as A,C as I,f as L,A as w}from"./AddModal-3dd4d699.js";import{u as D}from"./index.esm-905f454a.js";import{i as u}from"./chunk-TC4QW7OA-26568b59.js";import{s as F,l as c}from"./chunk-ZFWMN6TD-7cc2bb5b.js";import{b as d}from"./chunk-NXTXE2B3-563f658a.js";import"./transition-a184b337.js";import"./import-98b18112.js";const T=["quantity","price","total","status","duty","actions"];function K({auth:m}){const{register:a,reset:p,handleSubmit:x,setValue:n,watch:l,getValues:o,formState:b}=D(),{isOpen:y,onOpen:f,onOpenChange:r}=A(),h=S(),{suppliers:j,status:V,error:M}=_(t=>t.suppliers);v.useEffect(()=>{},[h]);const g=()=>{console.log("watch :",l("quantity"));const t=l("quantity"),s=l("price"),i=t*s;console.log("total :",l("total")),n("total",i)},N=()=>{const t=o("quantity"),s=o("price"),i=t*s;n("total",i),C()},C=()=>{const s=18e4/o("quantity");n("duty",s)},q=async t=>{console.log("data :",t),E.post("/fuel-expenses",t).then(s=>{console.log("res :",s),r(),p()}).catch(s=>{console.log("err :",s),toast.error("Failed to add Supplier")})};return e.jsxs(P,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Fuel Expense"}),children:[e.jsx(I,{onOpen:f,title:"Fuel Expenses",tableObject:j,tableColumns:L,initialColumns:T}),e.jsx(w,{onOpenChange:r,isOpen:y,title:"Add Expense",isSubmitting:!1,children:e.jsx("form",{onSubmit:x(q),children:e.jsxs("div",{className:"flex flex-col space-y-8",children:[e.jsx(u,{style:{border:"none",outline:"none",":focus":{outline:"none"}},type:"number",labelPlacement:"outside",label:"Quantity",placeholder:"",className:"border-none outline-none  ",...a("quantity",{onChange:N}),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(u,{style:{border:"none"},type:"number",labelPlacement:"outside",label:"Price",placeholder:"",className:"   ",...a("price",{required:!0,onChange:g}),startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsxs("div",{children:[e.jsx("small",{className:"font-semibold",children:"Total"}),e.jsx("input",{style:{border:"none"},type:"number",labelPlacement:"outside",label:"Total",readOnly:!0,className:"bg-gray-100 w-full p-2 rounded-xl",...a("total",{required:!0}),startContent:e.jsx("span",{className:"text-default-400 text-small"})})]}),e.jsxs("div",{children:[e.jsx("small",{className:"font-semibold",children:"Duty"}),e.jsx("input",{style:{border:"none"},type:"number",placeholder:"",className:"bg-gray-100 w-full p-2 rounded-xl",readOnly:!0,...a("duty",{required:!0}),startContent:e.jsx("span",{className:"text-default-400 text-small"})})]}),e.jsxs(F,{labelPlacement:"outside",label:"Status",className:" ",startContent:"👤",...a("status",{required:!0}),children:[e.jsx(c,{id:"pending",value:"pending",children:"Pending"},"pending"),e.jsx(c,{id:"paid",value:"paid",children:"Paid"},"paid")]}),e.jsx(O,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(d,{color:"danger",variant:"flat",onPress:()=>{r()},children:"Close"}),e.jsx(d,{isLoading:b.isSubmitting,type:"submit",color:"primary",children:"Submit"})]})]})})})]})}export{K as default};