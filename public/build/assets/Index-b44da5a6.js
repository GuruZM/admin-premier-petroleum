import{u as f,b as v,r as g,i as c,j as e,y as I,c as b}from"./app-8f4d3859.js";import{A as y,a as n}from"./AuthenticatedLayout-7f460c47.js";import{u as j,C,i as A,A as _}from"./AddModal-974e602a.js";import"./chunk-NXTXE2B3-260b1d2b.js";import"./methods-a1c28160.js";function N({auth:l}){const u=["number","status","track_details","date","due_date","customer_name","subtotal","total","issued_by_name","actions"],{isOpen:d,onOpen:E,onOpenChange:m}=j(),t=f(),{invoices:a,status:O}=v(o=>o.invoices);g.useEffect(()=>{t(c())},[t]);const p=()=>{I.visit("/invoices/create")},h="/invoices/",x=async o=>{var i,r;try{if(confirm("are you sure you want to delete this Record")){const s=await b.delete(`/invoices/${o}`);console.log(s),n.success("Record Deleted"),t(c())}else n.error("Request Cancelled")}catch(s){n("Somthing Went Wrong"),console.error("Error deleting:",((r=(i=s.response)==null?void 0:i.data)==null?void 0:r.error)||s.message)}};return console.log("invoices",a),e.jsxs(y,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Invoice"}),children:[e.jsx(C,{onOpen:p,baseurl:h,canView:!0,canEdit:!0,canDelete:!0,title:"Invoices",handleDelete:x,tableObject:a,tableColumns:A,initialColumns:u}),e.jsx(_,{onOpenChange:m,isOpen:d,title:"Add Invoice",isSubmitting:!1,children:e.jsx("form",{})})]})}export{N as default};