import{j as s}from"./app-5c83318e.js";import{A as l}from"./AuthenticatedLayout-fb2a297c.js";import{b as a}from"./chunk-NXTXE2B3-cdc76e59.js";const n="/build/assets/deliverybg-7d40495c.png";function o({auth:r,deliveryNote:t}){return console.log(t),s.jsxs(l,{user:r.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Delivery Note"}),className:"print:hidden",children:[s.jsx("div",{className:"text-white  flex justify-end",children:s.jsx(a,{endContent:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",color:"white",class:"pe-3  text-white ",children:s.jsx("path",{d:"M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})}),onClick:()=>window.print(),className:"bg-prime-blue text-white ml-auto  print:hidden",children:"Print"})}),s.jsxs("section",{class:"py-2 print:py-0 print:min-h-full overflow-hidden relative",children:[s.jsx("div",{class:"inline-block absolute 2xl:end-60 bottom-3 xl:bottom-auto"}),s.jsx("div",{class:"containe mx-auto",children:s.jsxs("div",{children:[s.jsx("div",{class:"flex     gap-6   relative ",children:s.jsx("div",{className:"  w-full",children:s.jsx("img",{src:n,className:"w-full",alt:"",srcset:""})})}),s.jsxs("div",{class:"bg-white md:p-16 p-10",children:[s.jsxs("div",{class:"flex   items-center justify-between gap-6",children:[s.jsx("div",{class:"  gap-3"}),s.jsxs("div",{className:"  text-right",children:[s.jsx("h2",{class:"text-lg font-bold print:font-bold print:text-sm tracking-widest uppercase",children:"PREMIER PETROLEUM"}),s.jsxs("p",{class:"text-xl print:text-xs ",children:["4 on Bishops Road ",s.jsx("br",{}),"Kabulonga ",s.jsx("br",{}),"10101 Lusaka",s.jsx("br",{}),"Zambia",s.jsx("br",{}),"Business ID: 120210025710 ",s.jsx("br",{}),"Tax Id: :2566221102",s.jsx("br",{}),"premierpetroleum21@gmail.co"]})]})]}),s.jsxs("div",{className:"grid print:grid-cols-3 grid-cold-1   md:grid-cols-3 gap-5  print:gap-8 mt-14",children:[s.jsx("div",{children:s.jsxs("h2",{class:"text-lg print:text-xs font-semibold tracking-widest ",children:["For: ",s.jsx("br",{}),t.client]})}),s.jsx("div",{children:s.jsx("h2",{class:"text-lg print:text-xs  font-semibold   tracking-widest "})}),s.jsxs("div",{className:"  flex flex-col print:text-xs items-end",children:[s.jsx("div",{className:"flex",children:s.jsxs("h2",{class:"text-lg font-bold print:text-xs tracking-widest  ",children:["Delivery Note No: ",s.jsxs("span",{class:" text-gray-500",children:[" ",t.number," "]})]})}),s.jsx("div",{className:"flex",children:s.jsxs("h2",{class:"text-lg font-bold print:text-xs tracking-widest  ",children:["Date Issue: ",s.jsxs("span",{class:"ps-5 text-gray-500",children:[" ",t.issue_date]})]})})]})]}),s.jsx("div",{class:"overflow-x-auto",children:s.jsxs("table",{class:"border-gray-400 table-auto w-full text-sm mt-14 mb-12 whitespace-pre",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"bg-prime-blue text-white",children:[s.jsx("th",{class:"p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg   text-start",children:"NO."}),s.jsx("th",{class:"p-4 print:text-xs  font-bold   uppercase tracking-widest text-lg  text-start",children:" Description"}),s.jsx("th",{class:"p-4  print:text-xs  font-bold  uppercase tracking-widest text-lg   text-start",children:"Quantity"})]})}),s.jsx("tbody",{children:t.items&&JSON.parse(t.items).map((i,e)=>s.jsxs("tr",{className:e%2===0?"bg-gray-200":"bg-white",children:[s.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:e+1}),s.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:i.description}),s.jsx("td",{class:"p-5 print:text-xs border-b border-gray-400 text-base font-medium",children:i.quantity})]},e))}),s.jsx("tbody",{class:"bg-white"})]})})]})]})})]})]})}export{o as default};
