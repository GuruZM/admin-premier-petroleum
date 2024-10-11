import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import quotationbg from "../../../assets/images/quotationbg.png";
import { Button } from "@nextui-org/react";
import axios from "../../Axios/axiosConfig";
import { toast } from "sonner";
import { Head } from "@inertiajs/react";
import { formatCurrency } from "@/Utils/methods";
const Show = ({ auth, quotation }) => {
    const handlePrint = (id) => {
        // const serializedData = JSON.stringify(Data);
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "/quotation/print";
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

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Quotation
                </h2>
            }
            className="print:hidden"
        >
            <Head title="Quotion" />
            <div class="w-full p-5 bg-white px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                <div class="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                            Quotation
                        </h2>
                    </div>

                    <div class="inline-flex gap-x-2">
                        <div className="print:hidden"></div>
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
                            onClick={() => handlePrint(quotation.id)}
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
                                    {quotation.company_name}
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div>
                        <div class="grid space-y-3">
                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Date:
                                </dt>
                                <dd class="font-medium text-gray-800 dark:text-neutral-200">
                                    {quotation.date}
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

                    {quotation.items &&
                        JSON.parse(quotation.items).map((item, index) => (
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
                                        {formatCurrency(item.amount, "ZMW")}
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
                                    {formatCurrency(quotation.subtotal, "ZMW")}
                                </dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt class="col-span-3 text-gray-500 dark:text-neutral-500">
                                    Vat:
                                </dt>
                                <dd class="col-span-2 font-medium text-gray-800 dark:text-neutral-200">
                                    {formatCurrency(
                                        quotation.subtotal * 0.16,
                                        "ZMW"
                                    )}
                                </dd>
                            </dl>

                            <dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
                                <dt class="col-span-3 text-gray-500 dark:text-neutral-500">
                                    Total:
                                </dt>
                                <dd class="col-span-2 font-medium text-gray-800 dark:text-neutral-200">
                                    {formatCurrency(quotation.total, "ZMW")}
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
