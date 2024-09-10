import{R as A,u as I,b as g,r as O,l as m,j as e,c as x}from"./app-9a7a5901.js";import{A as R,d as T,a}from"./AuthenticatedLayout-63a88b06.js";import{u as L,C as _,f as U,A as W}from"./AddModal-eae80d23.js";import{u as V}from"./index.esm-73533353.js";import{I as f}from"./InputText-e50b33ee.js";import{r as $}from"./methods-a1c28160.js";import{b}from"./chunk-NXTXE2B3-0282a286.js";const M=["quantity","price","total","status","type","actions"];function X({auth:j}){const[i,d]=A.useState(null),{register:l,reset:h,handleSubmit:C,setValue:c,watch:Q,getValues:r,formState:E}=V(),S=t=>{d(t.id),Object.entries(t).forEach(([s,n])=>{c(s,n)}),y()},{isOpen:N,onOpen:y,onOpenChange:p}=L(),u=I();g(t=>t.suppliers);const{fuelExpenses:q}=g(t=>t.fuelExpenses);O.useEffect(()=>{u(m())},[u]);const F=()=>{const t=r("quantity"),s=r("price"),n=$(t*s,3);c("total",n),w()},v=()=>{const t=r("quantity"),s=r("price"),n=t*s;c("total",n)},w=()=>{const s=18e4/r("quantity");c("duty",s)},D=async t=>{var s,n;try{if(confirm("are you sure you want to delete this Record")){const o=await x.delete(`/fuel-expenses/${t}`);a.success("Record Deleted"),u(m())}else a.error("Request Cancelled")}catch(o){a("Somthing Went Wrong"),console.error("Error deleting:",((n=(s=o.response)==null?void 0:s.data)==null?void 0:n.error)||o.message)}},P=async t=>{try{if(i){const s=new FormData;Object.entries(t).forEach(([n,o])=>{s.append(n,o)}),s.append("_method","PUT"),await x.put(`/fuel-expenses/${i}`,t),a.success("Fuel Expense Updated Successfully"),d(null)}else await x.post("/fuel-expenses",t),a.success("Fuel Expense Added Successfully");p(),u(m()),h()}catch(s){console.error("Error:",s),a.error("Something Went Wrong")}};return e.jsxs(R,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Fuel Expense"}),children:[e.jsx(_,{onOpen:y,editRecord:S,title:"Fuel Expenses",baseurl:"none",handleDelete:D,canEdit:!0,canDelete:!0,tableObject:q,tableColumns:U,initialColumns:M}),e.jsx(W,{onOpenChange:p,isOpen:N,title:i?"Edit Fuel Expense":"Add Fuel Expense",isSubmitting:!1,children:e.jsx("form",{onSubmit:C(P),children:e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsx(f,{style:{border:"none",outline:"none",":focus":{outline:"none"}},type:"number",title:"Quantity",className:"border-none outline-none  ",register:l,name:"quantity",onChange:F,startContent:e.jsx("span",{className:"text-default-400 text-small"})}),e.jsx(f,{style:{border:"none"},step:".02",pattern:"^\\d*(\\.\\d{0,2})?$",type:"number",title:"Price",placeholder:"",className:"   ",register:l,name:"price",onChange:v}),e.jsx("label",{htmlFor:"",children:e.jsx("p",{className:"text-black text-small",children:"Type"})}),e.jsxs("select",{labelPlacement:"outside",label:"Status",className:" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0 ",startContent:"👤",...l("type",{required:!0}),children:[e.jsx("option",{id:"credit",value:"credit",children:"Credit"},"credit"),e.jsx("option",{id:"cash",value:"cash",children:"Cash"},"cash")]}),e.jsx("div",{children:e.jsx(f,{title:"Total",readOnly:!0,className:"bg-gray-100 w-full p-2 rounded-xl",register:l,name:"total",startContent:e.jsx("span",{className:"text-default-400 text-small"})})}),e.jsxs("select",{labelPlacement:"outside",label:"Status",className:" bg-gray-100 flex-1 mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0 ",startContent:"👤",...l("status",{required:!0}),children:[e.jsx("option",{id:"pending",value:"pending",children:"Pending"},"pending"),e.jsx("option",{id:"paid",value:"paid",children:"Paid"},"paid")]}),e.jsx(T,{className:"my-5"}),e.jsxs("div",{className:"buttonSection flex  justify-end gap-1",children:[e.jsx(b,{color:"danger",variant:"flat",onPress:()=>{d(null),h(),p()},children:"Close"}),e.jsx(b,{isLoading:E.isSubmitting,type:"submit",color:"primary",children:i?"Update":"Create"})]})]})})})]})}export{X as default};
