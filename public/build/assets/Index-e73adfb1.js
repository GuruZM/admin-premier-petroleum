import{u as l,b as u,r as m,h as p,j as e,y as f}from"./app-ea79898d.js";import{A as h}from"./AuthenticatedLayout-f288b57f.js";import{u as x,C as g,g as v,A as b}from"./AddModal-b1aab034.js";import"./transition-0b40ee33.js";import"./chunk-NXTXE2B3-9935a125.js";import"./import-d434d177.js";import"./chunk-TC4QW7OA-a4b172da.js";function G({auth:t}){const o=["reference","date","received_by","checked_by","order_reference","actions"],{isOpen:i,onOpen:j,onOpenChange:r}=x(),s=l(),{goodsReceived:d,status:C}=u(a=>a.goodsReceived);m.useEffect(()=>{s(p())},[s]);const c=()=>{f.visit("/good-received/create")},n="/good-received/";return e.jsxs(h,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Goods Recieved"}),children:[e.jsx(g,{onOpen:c,baseurl:n,title:"Goods Received",tableObject:d,tableColumns:v,initialColumns:o}),e.jsx(b,{onOpenChange:r,isOpen:i,title:"Add Goods",isSubmitting:!1,children:e.jsx("form",{children:"form as"})})]})}export{G as default};