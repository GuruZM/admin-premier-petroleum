import{u as f,b as g,r as q,t as i,j as t,y,c as b}from"./app-59929f65.js";import{A as j,a}from"./AuthenticatedLayout-684dc111.js";import{u as C,C as A,q as I,A as O}from"./AddModal-e6fe579e.js";import"./chunk-NXTXE2B3-2d9f27a1.js";import"./methods-a1c28160.js";function Q({auth:c}){const u=["company_name","date","vat","subtotal","total","actions"],{isOpen:l,onOpen:E,onOpenChange:d}=C(),s=f(),{quotations:m}=g(o=>o.quotations);q.useEffect(()=>{s(i())},[s]);const p=()=>{y.visit("/quotations/create")},h=async o=>{var n,r;try{if(confirm("are you sure you want to delete this Record")){const e=await b.delete(`/quotations/${o}`);console.log(e),a.success("Record Deleted"),s(i())}else a.error("Request Cancelled")}catch(e){a("Somthing Went Wrong"),console.error("Error deleting:",((r=(n=e.response)==null?void 0:n.data)==null?void 0:r.error)||e.message)}},x="/quotations/";return t.jsxs(j,{user:c.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Quotations"}),children:[t.jsx(A,{onOpen:p,baseurl:x,handleDelete:h,title:"quotations",tableObject:m,tableColumns:I,initialColumns:u}),t.jsx(O,{onOpenChange:d,isOpen:l,title:"Add Quotation",isSubmitting:!1,children:t.jsx("form",{})})]})}export{Q as default};