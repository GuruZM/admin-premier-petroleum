import{j as t}from"./app-0d5eb950.js";import{A as x}from"./AuthenticatedLayout-4acdf0ce.js";import{f as r}from"./methods-eae04d3a.js";import{b as n}from"./chunk-NXTXE2B3-6027dece.js";import"./transition-6b970b42.js";const a="/build/assets/quotationbg-17e6ad14.png",m=({auth:l,quotation:s})=>(console.log("quote",s),t.jsxs(x,{user:l.user,header:t.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Quotation"}),className:"print:hidden",children:[t.jsx("div",{className:"text-white   border-red-500 items-end  flex justify-end",children:t.jsx(n,{color:"primary",endContent:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",color:"white",class:"pe-3 text-white ",children:t.jsx("path",{d:"M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})}),onClick:()=>window.print(),className:"bg-primary ml-auto  print:hidden",children:"Print"})}),t.jsxs("section",{class:"py-2 print:py-0 print:min-h-full overflow-hidden relative",children:[t.jsx("div",{class:"inline-block absolute 2xl:end-60 bottom-3 xl:bottom-auto"}),t.jsx("div",{class:"containe mx-auto",children:t.jsxs("div",{children:[t.jsx("div",{class:"flex     gap-6   relative ",children:t.jsx("div",{className:"  w-full",children:t.jsx("img",{src:a,className:"w-full",alt:"",srcset:""})})}),t.jsxs("div",{class:"bg-white md:p-16 p-10",children:[t.jsxs("div",{class:"flex   items-center justify-between gap-6",children:[t.jsxs("div",{class:"  gap-3",children:[t.jsx("h2",{class:"text-lg print:text-sm font-semibold tracking-widest uppercase",children:"PREMIER PETROLEUM LIMITED"}),t.jsx("h3",{class:"text-lg tracking-widest uppercase print:text-sm",children:"TPIN: 2566221102"})]}),t.jsxs("div",{children:[t.jsx("h2",{class:"text-lg font-bold print:font-bold print:text-sm tracking-widest uppercase",children:"PREMIER PETROLEUM"}),t.jsxs("p",{class:"text-xl print:text-xs ",children:["4 on Bishops Road Kabulonga",t.jsx("br",{}),"Bishops Office Park, Suite GF05 Block C",t.jsx("br",{}),"10101 Lusaka Zambia",t.jsx("br",{}),"Business ID: 120210025710",t.jsx("br",{}),"Tax Id: :2566221102",t.jsx("br",{}),"sales@premier-petroleum.com"]})]})]}),t.jsxs("div",{className:"grid print:grid-cols-3 grid-cold-1   md:grid-cols-3 gap-5  print:gap-8 mt-14",children:[t.jsxs("div",{children:[t.jsxs("h2",{class:"text-lg print:text-xs font-semibold tracking-widest ",children:["Quotation To:",s.company_name]}),t.jsxs("h3",{class:"text-lg print:text-xs tracking-widest uppercase",children:["TPIN:",s.tpin]})]}),t.jsx("div",{}),t.jsxs("div",{className:"  flex flex-row   items-start print:text-xs ",children:[t.jsx("div",{className:"",children:t.jsx("div",{className:"flex",children:t.jsxs("h2",{class:"text-lg font-semibold print:text-xs tracking-widest  ",children:[" ","Date:"," "]})})}),t.jsx("div",{className:"text-right flex-col justify-end  flex-1",children:t.jsx("div",{className:"",children:t.jsxs("h2",{class:"text-lg font-semibold print:text-xs tracking-widest  ",children:[" ",t.jsx("span",{class:"ps-5 text-gray-500",children:s.date})]})})})]})]}),t.jsx("div",{class:"overflow-x-auto",children:t.jsxs("table",{class:"border-gray-400 table-auto w-full text-sm mt-14 mb-12 whitespace-pre",children:[t.jsx("thead",{children:t.jsxs("tr",{className:"bg-prime-blue text-white",children:[t.jsx("th",{class:"p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg   text-start",children:"NO."}),t.jsxs("th",{class:"p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg  text-start",children:[" ","Description"]}),t.jsx("th",{class:"p-4  print:text-xs  font-bold  uppercase tracking-widest text-lg   text-start",children:"Quantity"}),t.jsx("th",{class:"p-4 print:text-xs  font-bold   pe-7 uppercase tracking-widest text-lg  text-center",children:"Rate"}),t.jsx("th",{class:"p-4 print:text-xs   font-bold  uppercase tracking-widest text-lg   text-end",children:"Amount"})]})}),t.jsx("tbody",{class:"bg-white",children:s.items&&JSON.parse(s.items).map((e,i)=>t.jsxs("tr",{className:i%2===0?"bg-gray-200":"bg-white",children:[t.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:i+1}),t.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:e.description}),t.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:e.quantity}),t.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium text-center",children:e.rate}),t.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium text-end",children:r(e.amount)})]},i))})]})}),t.jsxs("div",{class:"flex flex-wrap justify-between gap-6 mb-5",children:[t.jsxs("div",{children:[t.jsx("h1",{class:"text-xl print:text-xs font-semibold",children:"BANKING DETAILS:"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal pt-2",children:"Name of Bank: STANBIC BANK"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal",children:"Payment to: PREMIER PETROLEUM LIMITED"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal",children:"Account No: 9130005329888 (ZMW)"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal",children:"Account No: 9130005451004 (USD)"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal",children:"Branch Code: 040002"}),t.jsx("p",{class:"text-sm  print:text-xs font-normal",children:"Swift Code: SBICZMLX"}),t.jsx("h1",{class:"text-xl  print:text-xs mt-5 font-semibold",children:"Prepared by:"}),t.jsx("p",{class:"text-sm mt-5 print:text-xs border-b-2 pt-8 font-normal",children:" "})]}),t.jsx("div",{children:t.jsxs("div",{class:"flex flex-wrap items-center justify-end",children:[t.jsxs("div",{children:[t.jsx("h2",{class:"pb-1  print:text-xs text-base font-bold uppercase",children:"Sub total:"}),t.jsx("h2",{class:"pb-4  print:text-xs text-base font-bold uppercase",children:"Value ADDED TAX (16%):"}),t.jsx("h2",{class:" py-3  print:text-xs text-white font-extrabold bg-prime-orange   border-gray-500 pl-5  ",children:"Total:"})]}),t.jsxs("div",{className:"",children:[t.jsx("h4",{class:"ps-7  print:text-xs pb-1 text-base font-bold text-end",children:r(s.subtotal)}),t.jsxs("h4",{class:"ps-7  print:text-xs pb-4 text-base font-bold text-end",children:[" ",r(s.subtotal*.16)]}),t.jsxs("h4",{class:"py-3  print:text-xs bg-prime-orange text-white font-extrabold text-end  pr-5 ",children:[" ",r(s.total)]})]})]})})]})]})]})})]})]}));export{m as default};
