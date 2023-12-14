import{r as n,j as e,d as a}from"./app-4a9fa6aa.js";import{e as v}from"./transition-0f787092.js";import{t as j,l as y,j as b,b as u}from"./chunk-NXTXE2B3-b4f87d06.js";var w=j({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}});function N(t){let s=y(t,{enabled:typeof t.elementType=="string"}),r;return t.orientation==="vertical"&&(r="vertical"),t.elementType!=="hr"?{separatorProps:{...s,role:"separator","aria-orientation":r}}:{separatorProps:s}}function k(t){const{as:s,className:r,orientation:l,...o}=t;let i=s||"hr";i==="hr"&&l==="vertical"&&(i="div");const{separatorProps:d}=N({elementType:typeof i=="string"?i:"hr",orientation:l}),c=n.useMemo(()=>w({orientation:l,className:r}),[l,r]),p=n.useCallback((g={})=>({className:c,role:"separator","data-orientation":l,...d,...o,...g}),[c,l,d,o]);return{Component:i,getDividerProps:p}}var f=b((t,s)=>{const{Component:r,getDividerProps:l}=k({...t});return e.jsx(r,{ref:s,...l()})});f.displayName="NextUI.Divider";var C=f;const h=n.createContext(),x=({children:t})=>{const[s,r]=n.useState(!1),l=()=>{r(o=>!o)};return e.jsx(h.Provider,{value:{open:s,setOpen:r,toggleOpen:l},children:e.jsx("div",{className:"relative",children:t})})},z=({children:t})=>{const{open:s,setOpen:r,toggleOpen:l}=n.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:l,children:t}),s&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},D=({align:t="right",width:s="48",contentClasses:r="py-1 bg-white",children:l})=>{const{open:o,setOpen:i}=n.useContext(h);let d="origin-top";t==="left"?d="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(d="ltr:origin-top-right rtl:origin-top-left end-0");let c="";return s==="48"&&(c="w-48"),e.jsx(e.Fragment,{children:e.jsx(v,{as:n.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${d} ${c}`,onClick:()=>i(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:l})})})})},P=({className:t="",children:s,...r})=>e.jsx(a,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:s});x.Trigger=z;x.Content=D;x.Link=P;const m=x;function S(){return e.jsxs("footer",{className:"py-6 px-16 border-t border-gray-200 bg-white font-light flex flex-col lg:flex-row justify-between items-center",children:[e.jsxs("p",{className:"text-gray-700 hover:text-gray-900 opacity-60 font-medium block text-sm",children:["Copyright © ",new Date().getFullYear()," ",e.jsx("a",{href:"",target:"_blank",rel:"noreferrer",className:" ",children:"Premier Petreoleum"})]}),e.jsx("ul",{className:"list-unstyled flex",children:e.jsx("li",{children:e.jsx("a",{className:"text-gray-700 hover:text-gray-900 opacity-60 font-medium block text-sm",target:"_blank",rel:"noreferrer",href:"",children:"Crafted by Resonantt"})})})]})}function F({user:t,showSidebar:s,setShowSidebar:r}){return e.jsx("nav",{className:"bg-light-blue-500   bg-white  z-50 md:ml-64 py-6 px-3",children:e.jsxs("div",{className:"container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10",children:[e.jsxs("div",{className:"md:hidden pl-3 absolute   border-red left-0",children:[e.jsx(u,{className:"bg-transparent border-none",onClick:()=>r("left-0"),children:e.jsx("svg",{"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"m2 17.75c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm5.526-8.828s.501.505 2.254 2.259c.147.147.22.339.22.53 0 .192-.073.384-.22.531-1.752 1.753-2.254 2.258-2.254 2.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.53-.221-.293-.293-.295-.766-.004-1.057l.977-.978h-4.693c-.414 0-.75-.336-.75-.75 0-.413.336-.75.75-.75h4.693l-.978-.978c-.289-.289-.287-.762.006-1.055.147-.146.339-.22.53-.221s.38.071.525.215zm3.474 4.828c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm0-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75z"})})}),e.jsx("div",{className:`absolute top-2  md:hidden ${s==="left-0"?"left-64":"-left-64"} z-50 transition-all duration-300`})]}),e.jsx("div",{className:"flex justify-end items-center w-full  px-10",children:e.jsx("div",{className:"flex ",children:e.jsx("div",{className:" ",children:e.jsxs(m,{children:[e.jsx(m.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(m.Content,{children:[e.jsx(m.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(m.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})})})]})})}function O({user:t}){const[s,r]=n.useState("-left-64");return e.jsxs(e.Fragment,{children:[e.jsx(F,{user:t,showSidebar:s,setShowSidebar:r}),e.jsx("div",{className:`h-screen fixed z-50  rounded-lg   top-0 md:left-0 ${s} overflow-y-auto flex-row flex-nowrap overflow-hidden   bg-white w-64 z-10 py-4 px-6 transition-all duration-300`,children:e.jsxs("div",{className:"flex-col items-stretch min-h-full font-medium flex-nowrap px-0 relative",children:[e.jsx("a",{target:"_blank",rel:"noreferrer",className:"mt-2 text-center w-full inline-block",children:e.jsx("h3",{color:"gray",className:"font-bold",children:"Premier Petroleum"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(C,{className:"my-5"}),e.jsxs("ul",{className:"flex-col min-w-full  flex list-none",children:[e.jsx("li",{className:"rounded-lg mb-4",children:e.jsx(a,{href:"/dashboard",className:"flex font-medium items-center gap-4 text-sm text-gray-700  px-4 py-3 rounded-lg",children:"Dashboard"})}),e.jsx("li",{className:"rounded-lg mb-2",children:e.jsx(a,{href:"/invoices",className:"flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg",children:"Invoices"})}),e.jsx("li",{className:"rounded-lg mb-2",children:e.jsx(a,{href:"/delivery-notes",className:"flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg",children:"Delivery Notes"})}),e.jsx("li",{className:"rounded-lg mb-2 text-gray-700",children:e.jsx(a,{href:"/suppliers",className:"flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg",children:"Suppliers"})}),e.jsx("li",{className:"rounded-lg mb-2 text-gray-700",children:e.jsx(a,{href:"/customers",className:"flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg",children:"Customers"})}),e.jsx("li",{className:"rounded-lg mb-2 text-gray-700",children:e.jsx(a,{href:"/good-received",className:"flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg",children:"Goods Recieved"})})]}),e.jsx(u,{className:"bg-transparent md:hidden border-none absolute bottom-5",onClick:()=>r("-left-64"),children:e.jsx("svg",{"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"m2 17.75c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm2.474-3.249s-.501-.505-2.254-2.259c-.147-.146-.22-.338-.22-.53s.073-.384.22-.53c1.752-1.754 2.254-2.258 2.254-2.258.145-.145.335-.217.526-.217.192 0 .384.074.53.221.293.292.295.766.004 1.057l-.977.977h4.693c.414 0 .75.336.75.75s-.336.75-.75.75h-4.693l.978.979c.289.289.287.761-.006 1.054-.147.147-.339.221-.53.222-.191 0-.38-.071-.525-.216zm6.526-.751c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm0-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75z"})})})]})]})})]})}function _({user:t,header:s,children:r}){return n.useState(!1),e.jsxs("div",{className:"relative",children:[e.jsx(O,{user:t}),e.jsxs("main",{className:" max-h-fit relative md:ml-64 bg-gray-200",children:[e.jsx("div",{className:"px-10 md:px-10 py-10 md:py-10 mx-auto w-full h-full min-h-screen",children:r}),e.jsx(S,{})]})]})}export{_ as A,C as d};
