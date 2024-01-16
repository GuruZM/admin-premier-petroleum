import{j as s,a as i}from"./app-77bbec4f.js";import{A as c}from"./AuthenticatedLayout-d0255b08.js";import{f as d}from"./methods-eae04d3a.js";import"./transition-0625b3d3.js";import"./chunk-NXTXE2B3-539b5766.js";const h=({stat1:e,stat2:t,stat3:a,title:l,desc:r})=>s.jsxs("div",{class:"grid grid-cols-1 flex-1 gap-2 rounded-x text-gray-500  p-2 shadow-blue-200 dark:shadow-blue-900 shadow-lg",children:[s.jsx("p",{className:"bg-white w-fit px-5 rounded-lg  ",children:l}),s.jsxs("div",{class:"flex gap-4 py-5",children:[s.jsxs("div",{class:"flex-1 px-4 bg-white rounded-lg shadow-lg flex flex-col gap-1 p-2",children:[s.jsx("small",{class:"text-2xl font-bold py-12  tracking-tight leading-none",children:d(e)}),s.jsx("span",{class:"text-xs font-bold text-gray-500",children:"Paid"})]}),s.jsxs("div",{class:"flex-1 flex bg-white rounded-lg shadow-lg  flex-col gap-1 p-2",children:[s.jsx("small",{class:"text-2xl font-bold py-12 tracking-tight leading-none",children:d(t)}),s.jsx("span",{class:"text-xs font-bold text-gray-500",children:"Pending"})]}),s.jsxs("div",{class:"flex-1 hidden bg-white rounded-lg shadow-lg lg:flex flex-col gap-1 p-2",children:[s.jsx("small",{class:"text-2xl font-bold py-12 tracking-tight leading-none",children:d(a)}),s.jsx("span",{class:"text-xs font-bold text-gray-500",children:"Total"})]})]})]}),x=h;function b({auth:e,paidInvoices:t,unpaidInvoices:a,totalInvoices:l,paidTotalExpenses:r,pendingTotalExpenses:n,totalExpenses:o}){return s.jsxs(c,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[s.jsx(i,{title:"Dashboard"}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:" mx-auto sm:px-6 lg:px-8",children:s.jsxs("div",{className:" flex flex-col md:flex-row space-y-5 md:space-y-0  md:space-x-5 overflow-hidden   sm:rounded-lg",children:[s.jsx(x,{stat1:t,stat2:a,stat3:l,title:"Invoice Stats",desc:"Invoice stats as recorded by the system"}),s.jsx(x,{title:"Expense Stats",stat1:r,stat2:n,stat3:o,desc:"Expense Stats as recorded by the system"})]})})})]})}export{b as default};
