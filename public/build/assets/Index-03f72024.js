import{u as f,b as g,r as q,m as i,j as t,y,c as b}from"./app-c89cab4b.js";import{A as j,a}from"./AuthenticatedLayout-de4faf09.js";import{u as C,C as A,q as I,A as O}from"./AddModal-0367f929.js";import"./transition-3771e3c6.js";import"./chunk-NXTXE2B3-ffd1b7a1.js";import"./methods-6cb0a051.js";function _({auth:c}){const u=["company_name","date","vat","subtotal","total","actions"],{isOpen:l,onOpen:E,onOpenChange:d}=C(),o=f(),{quotations:m}=g(s=>s.quotations);q.useEffect(()=>{o(i())},[o]);const p=()=>{y.visit("/quotations/create")},h=async s=>{var n,r;try{if(confirm("are you sure you want to delete this Record")){const e=await b.delete(`/quotations/${s}`);console.log(e),a.success("Record Deleted"),o(i())}else a.error("Request Cancelled")}catch(e){a("Somthing Went Wrong"),console.error("Error deleting:",((r=(n=e.response)==null?void 0:n.data)==null?void 0:r.error)||e.message)}},x="/quotations/";return t.jsxs(j,{user:c.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Quotations"}),children:[t.jsx(A,{onOpen:p,baseurl:x,handleDelete:h,title:"quotations",tableObject:m,tableColumns:I,initialColumns:u}),t.jsx(O,{onOpenChange:d,isOpen:l,title:"Add Quotation",isSubmitting:!1,children:t.jsx("form",{})})]})}export{_ as default};