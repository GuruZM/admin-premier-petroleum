import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Sidebar from '@/Components/SideBar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (

        <div className='relative'>
          <Sidebar user={user} />
        <main className="print:bg-white max-h-fit relative md:ml-64 bg-gray-200 ">
            <div className="px-10 print:py-0 print:px-0 md:px-10 py-10 md:py-10 mx-auto w-full h-full min-h-screen">
                <ToastContainer/>
                {children}
            </div>
            <Footer/>
        </main>
        </div>
    );
}
