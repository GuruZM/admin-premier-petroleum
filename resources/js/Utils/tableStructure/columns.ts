import React from "react";
const categoryColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const productColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "DESCRIPTION", uid: "description", sortable: true},
  {name: "CATEGORY", uid: "category", sortable: true},
  {name: "SUPPLIER", uid: "supplier", sortable: true},
  {name: "BASE PRICE", uid: "base_price", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const goodsReceivedColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "REFERENCE", uid: "reference", sortable: true},
  {name: "NUMBER", uid: "number", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "RECEiVED BY", uid: "received", sortable: true},
  {name: "CHECKED BY", uid: "checked_by", sortable: true},
  {name: "ORDER REFERENCE", uid: "order_reference", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];


const supplierColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "ADDRESS", uid: "address", sortable: true},
  {name: "CONTACT", uid: "contact", sortable: true},
  {name: "TPIN", uid: "tpin", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];
const newsletterColumns = [
  {name: "SUBSCRIBER EMAIL", uid: "email", sortable: true},
];
const customerColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "FIRSTNAME", uid: "firstname", sortable: true},
  {name: "LASTNAME", uid: "lastname", sortable: true},
  {name: "COMPANY NAME", uid: "company_name", sortable: true},
  {name: "TPIN", uid: "tpin", sortable: true},
  {name: "CONTACT", uid: "contact", sortable: true},
  {name: "ADDRESS", uid: "address", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const deliveryNoteColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "CUSTOMER", uid: "client", sortable: true},
  {name: "INVOICE NUMBER", uid: "invoice_number", sortable: true},
  {name: "DELIVERY NOTE NO#", uid: "number", sortable: true},
  {name: "ISSUE DATE", uid: "issue_date", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

// fuel expense 

const fuelExpenseColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "QUANTITY", uid: "quantity", sortable: true},
  {name: "PRICE", uid: "price", sortable: true},
  {name: "TOTAL", uid: "total", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "DUTY", uid: "duty", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

// transport expense

const transportExpenseColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "QUANTITY", uid: "quantity", sortable: true},
  {name: "PRICE", uid: "price", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];  
 
 

const invoiceColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "INVOICE NUMBER", uid: "number", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "TRUCK NUMBER", uid: "track_details", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "DUE DATE", uid: "due_date", sortable: true},
  {name: "CUSTOMER", uid: "customer_name", sortable: true},
  {name: "SUB TOTAL", uid: "sub_total", sortable: true},
  {name: "TOTAL", uid:  "total", sortable: true},
  {name: "ISSUED BY", uid: "issued_by_name", sortable: true},
  // {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const quotationColumns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "CUSTOMER", uid: "company_name", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "VAT", uid: "vat", sortable: true},
  {name: "SUB TOTAL", uid: "sub_total", sortable: true},
  {name: "TOTAL", uid:  "total", sortable: true},
 
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "Paused", uid: "paused"},
    {name: "Vacation", uid: "vacation"},
  ];

  const users = [
    {
      id: 1,
      name: "Tony Reichert",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
    },
    
  ];


  export {categoryColumns,newsletterColumns,quotationColumns,transportExpenseColumns,fuelExpenseColumns,goodsReceivedColumns,customerColumns,deliveryNoteColumns,supplierColumns,users,productColumns,invoiceColumns,statusOptions};