import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DashboardStartCard from "@/Components/DashboardStartCard";
import ExpenseStat from "@/Components/ExpenseStat";
import InvoiceStat from "@/Components/invoiceStat";
import BarChart from "@/Components/Charts/BarChart";
import PieChart from "@/Components/Charts/PieChart";
import {
    barChartDataDailyTraffic,
    barChartOptionsDailyTraffic,
    barChartOptions,
    pieChartData,
    pieChartOptions,
} from "@/Components/Charts/Variables";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function Dashboard({
    auth,
    paidInvoices,
    unpaidInvoices,
    totalInvoices,
    paidTotalExpenses,
    pendingTotalExpenses,
    totalExpenses,
    expenses,
    totalClearing,
    cashFuelExpensesTotal,
    creditFuelExpensesTotal,
    transportExpensesTotal,
}) {
    console.log("expn dash", expenses);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className=" mx-auto">
                    <div className=" flex flex-col md:flex-row space-y-6 md:space-y-0  md:space-x-6 overflow-hidden   sm:rounded-lg">
                        <div className=" md:w-2/5">
                            <InvoiceStat
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        color="#000000"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.016 2C18.9026 2 18 4.68629 18 8H20.016C20.9876 8 21.4734 8 21.7741 7.66455C22.0749 7.32909 22.0225 6.88733 21.9178 6.00381C21.6414 3.67143 20.8943 2 20.016 2Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                        />
                                        <path
                                            d="M18 8.05426V18.6458C18 20.1575 18 20.9133 17.538 21.2108C16.7831 21.6971 15.6161 20.6774 15.0291 20.3073C14.5441 20.0014 14.3017 19.8485 14.0325 19.8397C13.7417 19.8301 13.4949 19.9768 12.9709 20.3073L11.06 21.5124C10.5445 21.8374 10.2868 22 10 22C9.71321 22 9.45546 21.8374 8.94 21.5124L7.02913 20.3073C6.54415 20.0014 6.30166 19.8485 6.03253 19.8397C5.74172 19.8301 5.49493 19.9768 4.97087 20.3073C4.38395 20.6774 3.21687 21.6971 2.46195 21.2108C2 20.9133 2 20.1575 2 18.6458V8.05426C2 5.20025 2 3.77325 2.87868 2.88663C3.75736 2 5.17157 2 8 2H20"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6 6H14"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M8 10H6"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M12.5 10.875C11.6716 10.875 11 11.4626 11 12.1875C11 12.9124 11.6716 13.5 12.5 13.5C13.3284 13.5 14 14.0876 14 14.8125C14 15.5374 13.3284 16.125 12.5 16.125M12.5 10.875C13.1531 10.875 13.7087 11.2402 13.9146 11.75M12.5 10.875V10M12.5 16.125C11.8469 16.125 11.2913 15.7598 11.0854 15.25M12.5 16.125V17"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                }
                                label="Invoices"
                                paid={paidInvoices}
                                unpaid={unpaidInvoices}
                                stat1label={"Paid"}
                                stat2label={"Unpaid"}
                            />
                        </div>

                        <ExpenseStat
                            icon={
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
                            label="Expenses"
                            stat1label={"Fuel Expenses"}
                            desc1={"All fuel expenses"}
                            desc2={"All fuel expenses"}
                            fuel={true}
                            stat2label={"Transport"}
                            stat3label={"Clearing Fees"}
                            figure2={transportExpensesTotal}
                            stat1={creditFuelExpensesTotal}
                            stat2={cashFuelExpensesTotal}
                            figure3={totalClearing}
                        />

                        {/* <DashboardStartCard /> */}
                    </div>
                    <div className="my-6 flex sm:flex-row flex-col sm:space-x-6 space-x-0 space-y-5 md:space-y-0">
                        <div className="  sm:w-3/5 w-full   border-red-500">
                            <Card className="rounded-md">
                                <CardHeader className="flex flex-row  items-center p-3 space-x-4 px-5 py-5  space-y-0">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            color="#000000"
                                            fill="none"
                                        >
                                            <path
                                                d="M8 17L8 14"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12 14L12 9"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M16 9L16 6"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M20 10L20 4"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M3 3V14C3 17.2998 3 18.9497 4.02513 19.9749C5.05025 21 6.70017 21 10 21H21"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-md font-medium">
                                        Monthly Sales Stats
                                    </p>
                                </CardHeader>
                                <Divider />
                                <CardBody className="py-5">
                                    <BarChart
                                        options={barChartOptions}
                                        chartData={barChartDataDailyTraffic}
                                    />
                                </CardBody>
                            </Card>
                        </div>
                        <div className="  sm:w-2/5 ">
                            <Card className="rounded-md">
                                <CardHeader className="flex flex-row items-center p-3 space-x-4 px-5 py-5  space-y-0">
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            color="#000000"
                                            fill="none"
                                        >
                                            <path
                                                d="M20.5 15.8278C17.9985 21.756 9.86407 23.4835 5.20143 18.8641C0.629484 14.3347 2.04493 6.12883 8.05653 3.5"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                            />
                                            <path
                                                d="M17.6831 12.5C19.5708 12.5 20.5146 12.5 21.1241 11.655C21.1469 11.6234 21.1848 11.5667 21.2052 11.5336C21.7527 10.6471 21.4705 9.966 20.9063 8.60378C20.3946 7.36853 19.6447 6.24615 18.6993 5.30073C17.7538 4.35531 16.6315 3.60536 15.3962 3.0937C14.034 2.52946 13.3529 2.24733 12.4664 2.79477C12.4333 2.81523 12.3766 2.85309 12.345 2.87587C11.5 3.4854 11.5 4.42922 11.5 6.31686V8.42748C11.5 10.3473 11.5 11.3072 12.0964 11.9036C12.6928 12.5 13.6527 12.5 15.5725 12.5H17.6831Z"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                            />
                                        </svg>
                                    </span>
                                    <p className="text-md font-medium">
                                        Monthly Expense Stats
                                    </p>
                                </CardHeader>
                                <Divider />
                                <CardBody className="py-5">
                                    <PieChart
                                        pieChartData={expenses}
                                        chartOptions={pieChartOptions}
                                    />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
