import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DashboardStartCard from '@/Components/DashboardStartCard';
export default function Dashboard({ auth,paidInvoices,unpaidInvoices,totalInvoices,paidTotalExpenses,pendingTotalExpenses,totalExpenses}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <div className=" flex flex-col md:flex-row space-y-5 md:space-y-0  md:space-x-5 overflow-hidden   sm:rounded-lg">
                        <DashboardStartCard stat1={paidInvoices} stat2={unpaidInvoices} stat3={totalInvoices} title="Invoice Stats" desc="Invoice stats as recorded by the system" />
                        <DashboardStartCard title="Expense Stats" stat1={paidTotalExpenses} stat2={pendingTotalExpenses} stat3={totalExpenses} desc="Expense Stats as recorded by the system" />
                        {/* <DashboardStartCard /> */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
