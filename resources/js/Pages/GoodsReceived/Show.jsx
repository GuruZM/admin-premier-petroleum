import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    useDisclosure,
    Divider,
    Button,
    Input as InputBox,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { fetchInvoices } from "@/Redux/slices/invoiceSlice";
import goodsreceivedbg from "../../../assets/images/goodsreceivedbg.png";
import { Head } from "@inertiajs/react";
import { formatCurrency } from "@/Utils/methods";

function Show({ auth, goodsRecieved }) {
    console.log(goodsRecieved);
    const handlePrint = (id) => {
        // const serializedData = JSON.stringify(Data);
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "/goods-recieved/print";
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
                    Goods Recieved
                </h2>
            }
            className="print:hidden"
        >
            <Head title="Delivery Note" />
            <div class="w-full p-5 bg-white px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
                <div class="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
                    <div>
                        <h2 class="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                            Goods Recieved
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
                            onClick={() => handlePrint(goodsRecieved.id)}
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
                                    Reference
                                </dt>
                                <dd class="text-gray-800 dark:text-neutral-200">
                                    {goodsRecieved.reference}
                                </dd>
                            </dl>
                            <dl class="grid sm:flex gap-x-3 text-sm">
                                <dt class="min-w-36 max-w-[200px] text-gray-500 dark:text-neutral-500">
                                    Order Number
                                </dt>
                                <dd class="text-gray-800 dark:text-neutral-200">
                                    {goodsRecieved.order_reference}
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
                                    {goodsRecieved.date}
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="mt-6 border border-gray-200 p-4 rounded-lg space-y-4 dark:border-neutral-700">
                    <div class="hidden sm:grid sm:grid-cols-5">
                        <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Reference
                        </div>
                        <div class="sm:col-span-2 text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Description
                        </div>
                        <div class="text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                            Quantity
                        </div>
                    </div>

                    <div class="hidden sm:block border-b border-gray-200 dark:border-neutral-700"></div>

                    {goodsRecieved.items &&
                        JSON.parse(goodsRecieved.items).map((item, index) => (
                            <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                <div class="col-span-full sm:col-span-2">
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Reference
                                    </h5>
                                    <p class="font-medium text-gray-800 dark:text-neutral-200">
                                        {item.order_ref}
                                    </p>
                                </div>
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
                            </div>
                        ))}
                </div>
            </div>
        </Authenticated>
    );
}

export default Show;
