import { useState } from "react";
import { Link } from "@inertiajs/react";
import AdminNavbar from "./AdminNavbar";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";

export default function Sidebar({ user }) {
    const [showSidebar, setShowSidebar] = useState("-left-64");
    return (
        <>
            <AdminNavbar
                user={user}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed z-50 rounded-lg top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden   bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full font-medium flex-nowrap px-0 relative">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h3 color="gray" className="font-bold">
                            Premier Petroleum
                        </h3>
                    </a>
                    <div className="flex flex-col">
                        <Divider className="my-5" />

                        <ul className="flex-col min-w-full  flex list-none">
                            
                            <li className="rounded-lg mb-4">
                                <Link
                                    href="/dashboard"
                                    className="flex font-medium items-center gap-4 text-sm text-gray-700  px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    Dashboard 
                                </Link>
                            </li>

                            <li className="rounded-lg mb-2">
                                <Accordion> 
                                   <AccordionItem
                                   key="1"
                                   aria-label="Accordion 1"
                                   title={
                                       <small className="ml-2">
                                          Documents
                                       </small>
                                   }
                                   className="text-sm"
                               >
                                <ul>
                                <li className="rounded-lg ">
                                <Link
                                    href="/invoices"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    Invoices
                                </Link>
                            </li>

                            <li className="rounded-lg ">
                                <Link
                                    href="/quotations"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    Quotation
                                </Link>
                            </li>

                            <li className="rounded-lg my-2">
                                <Link
                                    href="/delivery-notes"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    Delivery Notes
                                </Link>
                            </li>
                            <li className="rounded-lg  text-gray-700">
                                <Link
                                    href="/good-received"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="map" size="2xl" /> */}
                                    Goods Recieved
                                </Link>
                            </li>
                                </ul>
                                </AccordionItem>
                         
                                </Accordion>

                            </li>

                         

                           
                            <li className="rounded-lg mb-2">
                                <Accordion>
                                    <AccordionItem
                                        key="1"
                                        aria-label="Accordion 1"
                                        title={
                                            <small className="ml-2">
                                                Expenses 
                                            </small>
                                        }
                                        className="text-sm"
                                    >
                                        <ul>
                                            <li>
                                                <Link
                                                    href="/fuel-expenses"
                                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4   rounded-lg"
                                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                                >
                                                    {/* <Icon name="toc" size="2xl" /> */}
                                                    Fuel
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/transport-expenses"
                                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                                >
                                                    {/* <Icon name="toc" size="2xl" /> */}
                                                    Transport
                                                </Link>
                                            </li>
                                            <li></li>
                                        </ul>
                                    </AccordionItem>
                                </Accordion>
                            </li>
                            

                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/suppliers"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="map" size="2xl" /> */}
                                    Suppliers
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/customers"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="map" size="2xl" /> */}
                                    Customers
                                </Link>
                            </li>
                            
                            {/* 
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/reports"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                   Reports
                                </Link>
                            </li> */}
                        </ul>

                        <Button
                            className="bg-transparent md:hidden border-none absolute bottom-5"
                            onClick={() => setShowSidebar("-left-64")}
                        >
                            <svg
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                stroke-linejoin="round"
                                stroke-miterlimit="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m2 17.75c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm2.474-3.249s-.501-.505-2.254-2.259c-.147-.146-.22-.338-.22-.53s.073-.384.22-.53c1.752-1.754 2.254-2.258 2.254-2.258.145-.145.335-.217.526-.217.192 0 .384.074.53.221.293.292.295.766.004 1.057l-.977.977h4.693c.414 0 .75.336.75.75s-.336.75-.75.75h-4.693l.978.979c.289.289.287.761-.006 1.054-.147.147-.339.221-.53.222-.191 0-.38-.071-.525-.216zm6.526-.751c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm0-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75z" />
                            </svg>
                            here
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
