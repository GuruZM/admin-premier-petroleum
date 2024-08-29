import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import invoicebg from "../../../assets/images/invoicebg.png";
import { Button } from "@nextui-org/react";
import axios from "../../Axios/axiosConfig";
import { toast } from "sonner";
import { formatCurrency } from "@/Utils/methods";
import { Head } from "@inertiajs/react";

const Show = ({ auth, invoice }) => {
    const updateInvoiceStatus = () => {
        try {
            axios.put(`/invoices/${invoice.id}/status`).then((response) => {
                toast.success("Invoice status updated successfully");
                window.location.reload();
            });
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    };

    const handlePrint = (id) => {
        // const serializedData = JSON.stringify(Data);
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "/invoice/print";
        form.target = "_blank"; // Open in a new tab

        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "id";
        input.value = id;

        form.appendChild(input);

        document.body.appendChild(form);
        form.submit();

        document.body.removeChild(form);
    };

    const roundToDecimalPlaces = (number, decimalPlaces) => {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(number * factor) / factor;
    };

    console.log(invoice);
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Invoice
                </h2>
            }
            className="print:hidden"
        >
            <Head title="Invoice" />

            <div class="w-full p-5 bg-white px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                <div class="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                            Tax Invoice
                        </h2>
                    </div>

                    <div class="inline-flex gap-x-2">
                        <div className="print:hidden">
                            {invoice.status === "paid" ? (
                                <Button
                                    disabled
                                    endContent={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            height="20"
                                            color="#ffffff"
                                            fill="none"
                                        >
                                            <path
                                                d="M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15"
                                                stroke="currentColor"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    }
                                    className="bg-green-500 text-white"
                                >
                                    Paid
                                </Button>
                            ) : (
                                <div className="space-x-2">
                                    {" "}
                                    <Button
                                        disabled
                                        className="bg-red-500 text-white  "
                                        endContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                height="20"
                                                color="#ffffff"
                                                fill="none"
                                            >
                                                <path
                                                    d="M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        }
                                    >
                                        Unpaid
                                    </Button>{" "}
                                    <Button
                                        className="bg-black text-white  "
                                        endContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="20"
                                                height="20"
                                                color="#ffffff"
                                                fill="none"
                                            >
                                                <path
                                                    d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        }
                                        onClick={updateInvoiceStatus}
                                    >
                                        Mark As Paid
                                    </Button>
                                </div>
                            )}
                        </div>
                        <Button
                            endContent={
                                <svg
                                    class="flex-shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <polyline points="6 9 6 2 18 2 18 9" />
                                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                    <rect width="12" height="8" x="6" y="14" />
                                </svg>
                            }
                            onClick={() => handlePrint(invoice.id)}
                            className="bg-black text-white  print:hidden"
                        >
                            Print
                        </Button>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-3">
                    <div>
                        <div class="grid space-y-3">
                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Billed to:
                                </dt>
                                <dd class="text-gray-800 dark:text-neutral-200">
                                    {invoice.customer_name}
                                </dd>
                            </dl>

                            <div class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Shipping details:
                                </dt>
                                <div class="font-medium max-w-[200px] text-gray-800 dark:text-neutral-200">
                                    {invoice.customer_address}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="grid space-y-3">
                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Invoice number:
                                </dt>
                                <dd class="font-medium text-gray-800 dark:text-neutral-200">
                                    #{invoice.number}
                                </dd>
                            </dl>
                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Date:
                                </dt>
                                <dd class="font-medium text-gray-800 dark:text-neutral-200">
                                    {invoice.date}
                                </dd>
                            </dl>

                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Due date:
                                </dt>
                                <dd class="font-medium text-gray-800 dark:text-neutral-200">
                                    {invoice.due_date}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                    <div class="hidden sm:grid sm:grid-cols-5">
                        <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Description
                        </div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Quantity
                        </div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Rate
                        </div>
                        <div class="text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Amount
                        </div>
                    </div>

                    <div class="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

                    {invoice.line_items &&
                        JSON.parse(invoice.line_items).map((item, index) => (
                            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                <div class="col-span-full sm:col-span-2">
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Description
                                    </h5>
                                    <p class="font-medium text-gray-800 dark:text-neutral-200">
                                        {item.description}
                                    </p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Quantity
                                    </h5>
                                    <p class="text-gray-800 dark:text-neutral-200">
                                        {item.quantity}
                                    </p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Rate
                                    </h5>
                                    <p class="text-gray-800 dark:text-neutral-200">
                                        {item.rate}
                                    </p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Amount
                                    </h5>
                                    <p class="sm:text-end text-gray-800 dark:text-neutral-200">
                                        {formatCurrency(item.amount)}
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>

                <div class="mt-8 flex sm:justify-end">
                    <div class="w-full max-w-2xl sm:text-end space-y-2">
                        <div class="grid grid-cols-2    sm:grid-cols-1 gap-3 sm:gap-2">
                            <dl class="grid sm:grid-cols-5  text-sm">
                                <dt class="col-span-3  text-gray-500 dark:text-neutral-500">
                                    Subotal:
                                </dt>
                                <dd class="col-span-2   font-medium text-gray-800 dark:text-neutral-200">
                                    {formatCurrency(invoice.subtotal)}
                                </dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt class="col-span-3 text-gray-500 dark:text-neutral-500">
                                    Vat:
                                </dt>
                                <dd class="col-span-2 font-medium text-gray-800 dark:text-neutral-200">
                                    {formatCurrency(
                                        (invoice.total * 0.16).toFixed(2)
                                    )}
                                </dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt class="col-span-3 text-gray-500 dark:text-neutral-500">
                                    Total:
                                </dt>
                                <dd class="col-span-2 font-medium text-gray-800 dark:text-neutral-200">
                                    {formatCurrency(invoice.total)}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Show;
