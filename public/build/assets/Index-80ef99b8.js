import{u,b as d,r as c,e as m,j as e}from"./app-bcd260d2.js";import{A as p}from"./AuthenticatedLayout-29a77268.js";import{u as x,C as f,d as h,A as b}from"./AddModal-cf7597b4.js";import"./transition-fbc910d1.js";import"./chunk-NXTXE2B3-2b07633a.js";function S({auth:t}){const s=["address","title","number","issue_date","invoice_number"],{isOpen:r,onOpen:i,onOpenChange:o}=x(),a=u(),{deliveryNotes:n,status:j,error:N}=d(l=>l.deliveryNotes);return c.useEffect(()=>{a(m())},[]),e.jsxs(p,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Delivery Note"}),children:[e.jsx(f,{onOpen:i,title:"Suppliers",tableObject:n,tableColumns:h,initialColumns:s}),e.jsx(b,{onOpenChange:o,isOpen:r,title:"Add Supplier",isSubmitting:!1,children:e.jsx("form",{children:"form as"})})]})}export{S as default};
