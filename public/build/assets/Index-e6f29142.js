import{u,b as l,r as d,h as m,j as t}from"./app-bcd260d2.js";import{A as p}from"./AuthenticatedLayout-29a77268.js";import{u as h,C as x,i as f,A as b}from"./AddModal-cf7597b4.js";import"./transition-fbc910d1.js";import"./chunk-NXTXE2B3-2b07633a.js";function g({auth:e}){const s=["number","track_details","date","due_date","customer","subtotal","vat","total","issued_by","approved_by"],{isOpen:o,onOpen:i,onOpenChange:a}=h(),n=u(),{invoices:r,status:I}=l(c=>c.invoices);return d.useEffect(()=>{n(m())},[]),t.jsxs(p,{user:e.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Invoice"}),children:[t.jsx(x,{onOpen:i,title:"Invoices",tableObject:r,tableColumns:f,initialColumns:s}),t.jsx(b,{onOpenChange:a,isOpen:o,title:"Add Invoice",isSubmitting:!1,children:t.jsx("form",{children:"form as"})})]})}export{g as default};
