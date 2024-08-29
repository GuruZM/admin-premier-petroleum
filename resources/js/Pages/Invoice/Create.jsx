import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { motion } from "framer-motion";
import { InvoiceField } from "@/Components/InvoiceField";
import { PlusIcon } from "@/Components/icons/PlusIcon";
import { fetchCustomers } from "@/Redux/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Head } from "@inertiajs/react";
import {
    Select,
    SelectSection,
    Input,
    SelectItem,
    Button,
    Divider,
} from "@nextui-org/react";
import axios from "@/Axios/axiosConfig";
import { router } from "@inertiajs/react";
import InputText from "@/Components/InputText";
function Create({ auth, invoice }) {
    const dispatch = useDispatch();

    const items = [
        {
            description: "",
            quantity: 0,
            rate: 0,
            amount: 0,
        },
    ];

    const form = useForm({
        defaultValues: {
            invoiceNumber: invoice && invoice.number ? invoice.number : 0,
            client: invoice && invoice.customer ? invoice.customer : 0,
            date:
                invoice && invoice.date
                    ? invoice.date
                    : new Date().toISOString().slice(0, 10),
            due_date:
                invoice && invoice.due_date
                    ? invoice.due_date
                    : new Date().toISOString().slice(0, 10),
            truck_plate:
                invoice && invoice.track_details ? invoice.track_details : "",
            subtotal: invoice && invoice.subtotal ? invoice.subtotal : 0,
            invoicetotal: invoice && invoice.total ? invoice.total : 0,
            items:
                invoice && invoice.line_items
                    ? JSON.parse(invoice.line_items)
                    : items,
            vat: invoice && invoice.vat ? invoice.subtotal * 0.16 : 0,
        },
    });
    const { register, reset, setValue, getValues, handleSubmit } = form;

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "items",
    });

    const handlePriceChange = (index, e) => {
        const value = parseFloat(e.target.value);
        setValue(`items.${index}.rate`, value);
        const qty = getValues(`items.${index}.quantity`);
        const price = getValues(`items.${index}.rate`);
        const total = roundToDecimalPlaces(qty * price, 3);
        setValue(`items.${index}.amount`, total);
        setInvoiceTotal();
    };

    const handleQuantityChange = (index, e) => {
        const value = parseInt(e.target.value);
        setValue(`items.${index}.quantity`, value);
        const qty = getValues(`items.${index}.quantity`);
        const price = getValues(`items.${index}.rate`);
        const total = roundToDecimalPlaces(qty * price, 3);
        setValue(`items.${index}.amount`, total);
        setInvoiceTotal();
    };

    const roundToDecimalPlaces = (number, decimalPlaces) => {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(number * factor) / factor;
    };
    const setInvoiceTotal = () => {
        const items = getValues("items");
        const subtotal = roundToDecimalPlaces(
            items.reduce((acc, item) => acc + item.amount, 0),
            3
        );
        setValue("subtotal", subtotal);
        const invoicetotal = roundToDecimalPlaces(
            getValues("subtotal") + getValues("subtotal") * 0.16,
            3
        );
        const vat = roundToDecimalPlaces(getValues("subtotal") * 0.16, 2);
        setValue("vat", vat);
        setValue("invoicetotal", invoicetotal);
    };

    const handleRemove = (index) => {
        remove(index);
    };

    const handleAdd = () => {
        append({
            description: "",
            quantity: 0,
            rate: 0,
            amount: 0,
            id: "",
        });
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (data) => {
        if (invoice && invoice.id) {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                if (key === "items" && Array.isArray(value)) {
                    formData.append(key, JSON.stringify(value));
                } else {
                    formData.append(key, value);
                }
            });
            formData.append("_method", "PUT");
            axios
                .post(`/invoices/${invoice.id}`, formData)
                .then((res) => {
                    console.log("res:", res);
                    toast.success("Invoice Edited Successfully");
                    reset();
                    router.visit("/invoices");
                })
                .catch((err) => {
                    console.error("err:", err);
                    toast.error("Failed to edit the Invoice");
                });
        } else {
            axios
                .post("/invoices", data)
                .then((res) => {
                    toast.success("Invoice Added Successfully");
                    router.visit("/invoices");
                    reset();
                })
                .catch((err) => {
                    console.error("err:", err);
                    toast.error("Failed to create an Invoice");
                });
        }
    };

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    const clients = useSelector((state) => state.customers.customers);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {invoice ? "Edit" : "Create"} Invoice
                </h2>
            }
        >
            <Head title={invoice ? "Edit" : "Create"} />
            <motion.div
                key="createInvoice-sidebar"
                initial={{ x: -500, opacity: 0 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 40,
                        duration: 0.4,
                    },
                }}
                exit={{ x: -700, transition: { duration: 0.2 } }}
                className="  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-8 px-6  md:w-full md:rounded-r-3xl"
            >
                <h1 className=" font-semibold dark:text-white  text-3xl">
                    {/* {type == 'edit' ? 'Edit' : 'Create'}  */}
                    {invoice ? "Edit" : "Create"} Invoice
                </h1>
                <form
                    className="overflow-y-scroll relative scrollbar-hide "
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="  ">
                        <div className=" ">
                            {/* Bill to Section */}

                            <h1 className="my-4 mt-5 font-medium">Bill To</h1>

                            <Divider className="my-5" />

                            {/* Clent Selection */}
                            <div className=" grid grid-cols-1   gap-3   ">
                                <div className="  col-span-1">
                                    <span>Client</span>

                                    <select
                                        labelPlacement="outside"
                                        label="Client Name"
                                        className="bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0"
                                        startContent="👤"
                                        {...register("client")}
                                    >
                                        <option value=""></option>
                                        {clients.map((client) => (
                                            <option
                                                key={client.id}
                                                value={client.id}
                                            >
                                                {client.company_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Date and Due Date */}
                            <div className=" flex justify-center space-x-5 items-center mt-8 ">
                                <div className=" flex-1  ">
                                    <InputText
                                        title="Date "
                                        className="flex-1"
                                        type="date"
                                        register={register}
                                        name="date"
                                    />
                                </div>

                                <div className="flex-1  ">
                                    <InputText
                                        title="Due Date"
                                        className="flex-1"
                                        type="date"
                                        register={register}
                                        name="due_date"
                                    />
                                </div>
                            </div>
                            {/* plate number  */}
                            <div className=" mx-1 mt-6 flex flex-col ">
                                <InputText
                                    title="Truck Plate Number"
                                    className="flex-1"
                                    type="text"
                                    register={register}
                                    name="truck_plate"
                                />
                            </div>

                            {/* Item List Section */}

                            <h2 className=" font-medium text-gray-500 mt-10 ">
                                Item List
                            </h2>

                            <Divider className="my-5" />

                            {fields.map(({ id }, index) => (
                                <div
                                    key={index}
                                    className=" border-b pb-2 border-gray-300 mb-4 "
                                >
                                    <InvoiceField
                                        handleRemove={handleRemove}
                                        handlePriceChange={handlePriceChange}
                                        key={index}
                                        getValues={getValues}
                                        control={form.control}
                                        handleQuantityChange={
                                            handleQuantityChange
                                        }
                                        index={index}
                                        name={`items.${index}.name`}
                                        register={register}
                                    />
                                </div>
                            ))}

                            <div className="flex    justify-end  items-center space-x-3 ">
                                <div className="flex flex-col">
                                    <span className="text-sm float-left">
                                        Sub Total
                                    </span>

                                    <input
                                        style={{
                                            border: "none",
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                        key="Sub Total"
                                        type="text"
                                        readOnly
                                        className="bg-gray-100  mt-1 p-2 rounded-xl w-fit float-right"
                                        {...register("subtotal")}
                                    />
                                </div>

                                <div className="flex my-3 flex-col">
                                    <span className="text-sm text-left">
                                        VAT (16%)
                                    </span>

                                    <input
                                        style={{
                                            border: "none",
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                        key="vat"
                                        type="text"
                                        readOnly
                                        className=" bg-gray-100 w-fit mt-1 p-2 rounded-xl  float-right"
                                        {...register("vat")}
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-sm">
                                        Invoice Total
                                    </span>
                                    <input
                                        style={{
                                            border: "none",
                                            outline: "none",
                                            boxShadow: "none",
                                        }}
                                        key="invoiceTotal"
                                        isReadOnly
                                        readOnly
                                        className="bg-gray-100 w-fit mt-1 p-2 rounded-xl float-right"
                                        {...register("invoicetotal")}
                                    />
                                </div>

                                <input
                                    type="hidden"
                                    {...register("issued_by", {
                                        value: auth.user.id,
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sticky space-y-4">
                        <Button
                            onClick={() => {
                                handleAdd();
                            }}
                            className="  w-full mt-4"
                            color="primary"
                            endContent={<PlusIcon />}
                        >
                            Add New Item
                        </Button>
                        <div className=" flex  justify-between">
                            <div>
                                <Button
                                    onClick={() => {
                                        reset();
                                    }}
                                    className="  "
                                    color="primary"
                                >
                                    Discard
                                </Button>
                            </div>

                            <div>
                                <Button
                                    className="  "
                                    color="primary"
                                    type="submit"
                                    isLoading={isSubmitting}
                                >
                                    {invoice ? "Update" : "Create"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </motion.div>
        </Authenticated>
    );
}

export default Create;
