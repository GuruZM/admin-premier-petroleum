import{u as l,b as u,r as m,h as p,j as e,y as f}from"./app-792d2e2c.js";import{A as h}from"./AuthenticatedLayout-ab7bcd82.js";import{u as x,C as g,g as v,A as b}from"./AddModal-3dd4d699.js";import"./transition-a184b337.js";import"./chunk-NXTXE2B3-563f658a.js";import"./import-98b18112.js";import"./chunk-TC4QW7OA-26568b59.js";function G({auth:t}){const o=["reference","date","received_by","checked_by","order_reference","actions"],{isOpen:i,onOpen:j,onOpenChange:r}=x(),s=l(),{goodsReceived:d,status:C}=u(a=>a.goodsReceived);m.useEffect(()=>{s(p())},[s]);const c=()=>{f.visit("/good-received/create")},n="/good-received/";return e.jsxs(h,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Goods Recieved"}),children:[e.jsx(g,{onOpen:c,baseurl:n,title:"Goods Received",tableObject:d,tableColumns:v,initialColumns:o}),e.jsx(b,{onOpenChange:r,isOpen:i,title:"Add Goods",isSubmitting:!1,children:e.jsx("form",{children:"form as"})})]})}export{G as default};