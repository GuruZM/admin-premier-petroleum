import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Sidebar from "@/Components/SideBar";
import { ToastContainer } from "react-toastify";
import AdminNavbar from "@/Components/AdminNavbar";

import { Toaster } from "sonner";
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [showSidebar, setShowSidebar] = useState("left-0");
    return (
        <div className="relative bg-gray-200 pt-5   border-red-500 min-h-screen   flex flex-col   ">
            <div
                id="nav"
                className="flex-1 min-h-4/5 flex justify-center      w-11/12 mx-auto  border-pink-500"
            >
                <Sidebar
                    user={user}
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />

                <div className=" w-full md:pl-5">
                    <AdminNavbar
                        user={user}
                        showSidebar={showSidebar}
                        setShowSidebar={setShowSidebar}
                    />
                    <main className="print:bg-white min-h-fit    border-yellow-500  relative  bg-gray-200 ">
                        <Toaster position="top-right" richColors />
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
