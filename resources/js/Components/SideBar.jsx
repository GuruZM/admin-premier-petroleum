
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import AdminNavbar from './AdminNavbar';
import {Accordion, AccordionItem, Divider} from "@nextui-org/react";


export default function Sidebar({user}) {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                user={user}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed z-50  rounded-lg   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden   bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full font-medium flex-nowrap px-0 relative">
                    <a
               
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h3 color="gray" className='font-bold'>Premier Petroleum</h3>
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
                                <Link
                                    href="/invoices"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    Invoices
                                </Link>
                            </li>
                       
                            <li className="rounded-lg mb-2">
                                <Link
                                    href="/delivery-notes"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                   Delivery Notes 
                                </Link>
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
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/good-received"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="map" size="2xl" /> */}
                                   Goods Recieved
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
 
                    </div>
                </div>
            </div>
        </>
    );
}
