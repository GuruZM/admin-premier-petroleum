import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { motion } from "framer-motion";
import { DeliveryNoteField } from "@/Components/DeliveryNoteField";
import { PlusIcon } from "@/Components/icons/PlusIcon";
import { fetchCustomers } from "@/Redux/slices/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
    Select,
    SelectSection,
    Input,
    SelectItem,
    Button,
    Divider,
} from "@nextui-org/react";
import { fetchInvoices } from "@/Redux/slices/invoiceSlice";
import { router } from "@inertiajs/react";
import axios from "@/Axios/axiosConfig";
import InputText from "@/Components/InputText";
import { toast } from "sonner";

function Create({ auth, deliveryNote }) {
    const dispatch = useDispatch();
    const items = [
        {
            description: "",
            quantity: 0,
        },
    ];

    const form = useForm({
        defaultValues: {
            invoice: deliveryNote ? deliveryNote.invoice_id : 0,
            client: deliveryNote ? deliveryNote.client_id : 0,
            date: deliveryNote
                ? deliveryNote.date
                : new Date().toISOString().slice(0, 10),
            issue_date: deliveryNote
                ? deliveryNote.issue_date
                : new Date().toISOString().slice(0, 10),
            number: deliveryNote ? deliveryNote.number : "",
            items: deliveryNote ? JSON.parse(deliveryNote.items) : [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "items",
    });

    const { register, reset, setValue, getValues, handleSubmit } = form;

    const handleRemove = (index) => {
        remove(index);
    };

    const handleAdd = () => {
        append({
            description: "",
            quantity: 0,
            id: "",
        });
    };

    const selectedInvoice = (id) => {
        const selectedInvoice = invoices.filter(
            (invoice) => invoice.id === parseInt(id)
        )[0];

        if (selectedInvoice) {
            setValue("invoice", selectedInvoice.id);
            setValue("client", selectedInvoice.customer);
            setValue("number", selectedInvoice.track_details);
            setValue("items", JSON.parse(selectedInvoice.line_items));
            // setLineItems(JSON.parse(selectedInvoice.line_items));
            // setValue("items.0.description", JSON.parse(selectedInvoice.line_items));
        }
        console.log("items :", getValues("items"));
    };

    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (data) => {
        if (deliveryNote && deliveryNote.id) {
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
                .post(`/delivery-notes/${deliveryNote.id}`, formData)
                .then((res) => {
                    toast.success("Delivery Note Edited Successfully");
                    reset();
                    router.visit("/delivery-notes");
                })
                .catch((err) => {
                    console.error("Error editing delivery note:", err);
                    toast.error("Failed to edit delivery note");
                });
        } else {
            // If deliveryNote is not set, send to add
            axios
                .post("/delivery-notes", data)
                .then((res) => {
                    toast.success("Delivery Note Added Successfully");
                    reset();
                    router.visit("/delivery-notes");
                })
                .catch((err) => {
                    console.error("Error adding delivery note:", err);
                    toast.error("Failed to add delivery note");
                });
        }
    };

    useEffect(() => {
        dispatch(fetchCustomers());
        dispatch(fetchInvoices());
    }, [dispatch]);

    const clients = useSelector((state) => state.customers.customers);
    const invoices = useSelector((state) => state.invoices.invoices);

    console.log("invoices", invoices);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {deliveryNote
                        ? "Edit Delivery Note"
                        : "Create Delivery Note"}
                </h2>
            }
        >
            <motion.div
                key="createDeliverynote-sidebar"
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
                className="  scrollbar-hide flex flex-col dark:text-white dark:bg-[#141625] bg-white my-5  md:pl-[50px] py-16 px-6 h-fit md:w-full md:rounded-r-3xl"
            >
                <h1 className=" font-semibold dark:text-white  text-3xl">
                    {deliveryNote
                        ? "Edit Delivery Note"
                        : "Create Delivery Note"}
                </h1>
                <form
                    className="overflow-y-scroll relative scrollbar-hide "
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="  ">
                        <div className=" ">
                            <Divider className="my-5" />

                            <div className=" grid grid-cols-1   gap-3   ">
                                <div className=" mx-1 col-span-1">
                                    <span>Invoice Number</span>
                                    <select
                                        labelPlacement="outside"
                                        label="Select Invoice"
                                        className="bg-gray-100  mt-1 p-2 rounded-xl w-full border-none outline-none focus:ring-0"
                                        startContent="⚅"
                                        onChange={(e) =>
                                            selectedInvoice(e.target.value)
                                        }
                                        // {...register("invoice")}
                                    >
                                        {invoices.map((invoice) => (
                                            <option
                                                key={invoice.id}
                                                value={invoice.id}
                                            >
                                                {invoice.number}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className=" flex justify-center space-x-5 items-center mt-8 ">
                                <div className=" flex-1  ">
                                    <InputText
                                        title="Delivery Note Date"
                                        type="date"
                                        register={register}
                                        name="date"
                                    />
                                </div>

                                <div className="flex-1  ">
                                    <InputText
                                        title="Issue Date"
                                        type="date"
                                        register={register}
                                        name="issue_date"
                                    />
                                </div>
                            </div>

                            <h2 className=" font-medium text-gray-500 mt-10 ">
                                Item List
                            </h2>

                            <Divider className="my-5" />

                            {fields.map(({ id }, index) => (
                                <div
                                    key={index}
                                    className=" border-b pb-2 border-gray-300 mb-4 "
                                >
                                    <DeliveryNoteField
                                        handleRemove={handleRemove}
                                        key={index}
                                        getValues={getValues}
                                        control={form.control}
                                        index={index}
                                        name={`items.${index}.name`}
                                        register={register}
                                    />
                                </div>
                            ))}

                            <div className="flex flex-col   items-end">
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
                        {/* <Button
                            onClick={() => {
                                handleAdd();
                            }}
                            className="  w-full mt-4"
                            color="primary"
                            endContent={<PlusIcon />}
                        >
                            Add New Item
                        </Button> */}

                        <div className=" flex  justify-end gap-4">
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
                                    Submit
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
