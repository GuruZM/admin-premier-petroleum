import{u as f,b as x,r as v,m as a,j as s,c as y,y as R}from"./app-9a7a5901.js";import{A as b,a as r}from"./AuthenticatedLayout-63a88b06.js";import{u as A,C,g as j,A as I}from"./AddModal-eae80d23.js";import"./chunk-NXTXE2B3-0282a286.js";import"./methods-a1c28160.js";function w({auth:d}){const i=["reference","date","received_by","checked_by","order_reference","actions"],{isOpen:l,onOpen:E,onOpenChange:u}=A(),t=f(),{goodsReceived:m,status:O}=x(o=>o.goodsReceived);v.useEffect(()=>{t(a())},[t]);const g=async o=>{var n,c;try{if(confirm("Are you sure you want to delete this Record")){const e=await y.delete(`/good-received/${o}`);console.log(e),r.success("Record Deleted"),t(a())}else r.error("Request Cancelled")}catch(e){r("Somthing Went Wrong"),console.error("Error deleting:",((c=(n=e.response)==null?void 0:n.data)==null?void 0:c.error)||e.message)}},p=()=>{R.visit("/good-received/create")},h="/good-received/";return s.jsxs(b,{user:d.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Goods Recieved"}),children:[s.jsx(C,{canView:!0,canEdit:!0,canDelete:!0,onOpen:p,baseurl:h,title:"Goods Received",handleDelete:g,tableObject:m,tableColumns:j,initialColumns:i}),s.jsx(I,{onOpenChange:u,isOpen:l,title:"Add Goods",isSubmitting:!1})]})}export{w as default};
