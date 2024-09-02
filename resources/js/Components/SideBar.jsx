import { useState } from "react";
import { Link } from "@inertiajs/react";
import AdminNavbar from "./AdminNavbar";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";

export default function Sidebar({ user, showSidebar, setShowSidebar }) {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: " py-0  rounded-lg h-14 flex items-center",
        indicator: "",
        content: "text-small ",
    };

    return (
        <div
            className={`md:flex fixed md:relative z-50 ${
                showSidebar === "left-0" ? "-left-64 md:left-0 " : "left-0"
            }  bg-white md:bg-transparent  transition-all duration-300   `}
        >
            <div
                className={`sm:h-fit sm:min-h-fit min-h-screen sticy border-b-2 border-black shadow-md   bg-white  z-50 rounded-r-lg md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden    w-64 z-10 py-4 px-6 transition-all duration-300`}
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
                                    className="flex font-bold   border-black items-center gap-3 px-2   text-black  py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                    >
                                        <path
                                            d="M22 6L14 6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li className="rounded-lg mb-2 w-full">
                                <Accordion itemClasses={itemClasses}>
                                    <AccordionItem
                                        key="1"
                                        aria-label="Accordion 1"
                                        startContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                color="#000000"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21 11V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2L11.4706 2C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10L3 14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M8 7H16"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M8 12H13"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M21 20.6471L21 17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17L15 20.5C15 21.2797 15.7326 22 16.6364 22C17.5401 22 18.2727 21.2797 18.2727 20.5L18.2727 17.7647"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                            </svg>
                                        }
                                        subtitle={
                                            <small className="italic">
                                                Invoices, etc
                                            </small>
                                        }
                                        title={
                                            <span className="  text-md flex space-x-4">
                                                <p className="text-[17px] font-bold">
                                                    Documents
                                                </p>
                                            </span>
                                        }
                                        className="text-sm  "
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
                                <Accordion itemClasses={itemClasses}>
                                    <AccordionItem
                                        key="1"
                                        aria-label="Accordion 1"
                                        startContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                color="#000000"
                                                fill="none"
                                            >
                                                <path
                                                    d="M20.3927 8.03168L18.6457 6.51461C17.3871 5.42153 16.8937 4.83352 16.2121 5.04139C15.3622 5.30059 15.642 6.93609 15.642 7.48824C14.3206 7.48824 12.9468 7.38661 11.6443 7.59836C7.34453 8.29742 6 11.3566 6 14.6525C7.21697 13.9065 8.43274 13.0746 9.8954 12.7289C11.7212 12.2973 13.7603 12.5032 15.642 12.5032C15.642 13.0554 15.3622 14.6909 16.2121 14.9501C16.9844 15.1856 17.3871 14.5699 18.6457 13.4769L20.3927 11.9598C21.4642 11.0293 22 10.564 22 9.99574C22 9.4275 21.4642 8.96223 20.3927 8.03168Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M10.5676 3C6.70735 3.00694 4.68594 3.10152 3.39411 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.3941 20.6087C4.78821 22 7.03198 22 11.5195 22C16.0071 22 18.2509 22 19.645 20.6087C20.6156 19.64 20.9104 18.2603 21 16"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        }
                                        subtitle={
                                            <small className=" italic">
                                                Fuel, Transport, etc...
                                            </small>
                                        }
                                        title={
                                            <p className="text-[17px] font-bold">
                                                Expenses
                                            </p>
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
                                            <li>
                                                <Link
                                                    href="/clearance-fees"
                                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                                >
                                                    {/* <Icon name="toc" size="2xl" /> */}
                                                    Clearance Fees
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/duties"
                                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                                >
                                                    {/* <Icon name="toc" size="2xl" /> */}
                                                    Duty
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
                                    className="flex items-center gap-4 font-bold text-gray-700  px-2 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                    >
                                        <path
                                            d="M15.5 6.5C15.5 8.433 13.933 10 12 10C10.067 10 8.5 8.433 8.5 6.5C8.5 4.567 10.067 3 12 3C13.933 3 15.5 4.567 15.5 6.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M22 17.5C22 19.433 20.433 21 18.5 21C16.567 21 15 19.433 15 17.5C15 15.567 16.567 14 18.5 14C20.433 14 22 15.567 22 17.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M9 17.5C9 19.433 7.433 21 5.5 21C3.567 21 2 19.433 2 17.5C2 15.567 3.567 14 5.5 14C7.433 14 9 15.567 9 17.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                    <span>Suppliers</span>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/customers"
                                    className="flex items-center gap-4 font-bold   px-2 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                    </svg>
                                    <span>Customers</span>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/newsletter"
                                    className="flex items-center gap-4 font-bold px-2 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                    >
                                        <path
                                            d="M10.5 8H18.5M10.5 12H13M18.5 12H16M10.5 16H13M18.5 16H16"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M7 7.5H6C4.11438 7.5 3.17157 7.5 2.58579 8.08579C2 8.67157 2 9.61438 2 11.5V18C2 19.3807 3.11929 20.5 4.5 20.5C5.88071 20.5 7 19.3807 7 18V7.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M16 3.5H11C10.07 3.5 9.60504 3.5 9.22354 3.60222C8.18827 3.87962 7.37962 4.68827 7.10222 5.72354C7 6.10504 7 6.57003 7 7.5V18C7 19.3807 5.88071 20.5 4.5 20.5H16C18.8284 20.5 20.2426 20.5 21.1213 19.6213C22 18.7426 22 17.3284 22 14.5V9.5C22 6.67157 22 5.25736 21.1213 4.37868C20.2426 3.5 18.8284 3.5 16 3.5Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <span>Newsletter</span>
                                </Link>
                            </li>

                            {/* <li className="rounded-lg mb-2 text-gray-700">
                                <Link
                                    href="/reports"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-medium px-4 py-3 rounded-lg"
                                    // activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                   Reports
                                </Link>
                            </li> */}
                            <hr />
                            <li className="rounded-lg my-5 text-gray-700">
                                <Button
                                    className="bg-transparent border-2 md:hidden z-10  cursor-pointer  "
                                    onClick={() => setShowSidebar("left-0")}
                                    startContent={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            color="#000000"
                                            fill="none"
                                        >
                                            <path
                                                d="M15 9L12 12M12 12L9 15M12 12L15 15M12 12L9 9"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47714 17.5228 1.99998 12 1.99998"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M2.5 8.49998C2.86239 7.67055 3.3189 6.89164 3.85601 6.17676M6.17681 3.85597C6.89168 3.31886 7.67058 2.86237 8.5 2.49998"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    }
                                >
                                    <span>Close</span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
