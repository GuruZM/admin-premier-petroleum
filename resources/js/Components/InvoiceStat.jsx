import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
const InvoiceStat = ({
    paid,
    unpaid,
    label,
    fuel,
    figure,
    desc1,
    desc2,
    stat1,
    stat2,
    figure2,
    figure3,
    stat1label,
    stat2label,
    icon,
    stat3label,
}) => {
    const formatNumber = (number) => {
        // Convert to number if not already a number
        const parsedNumber =
            typeof number === "number" ? number : parseFloat(number);

        if (isNaN(parsedNumber)) {
            return "";
        }

        return parsedNumber.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    return (
        <Card
            isBlurred
            className="flex  flex-col rounded-md bg-white text-black shadow-md gap-1 h-full   flex-1"
        >
            <CardHeader className="p-0 flex flex-col  items-start  ">
                <div className="w-full flex flex-col gap-3 p-3">
                    <div className="flex  gap-3 ">
                        <span className="">{icon}</span>
                        <p className="text-md font-medium">{label}</p>
                    </div>
                    <Divider />
                </div>
            </CardHeader>

            <CardBody className="px-0 flex">
                <div class="md:max-w-full   bg-white rounded-4xl shadow-8xl">
                    <div class="flex sm:flex-row flex-col justify-center items-center">
                        <div class="w-full md:flex-1">
                            <div class="text-center p-3 md:px-2 md:pt-9 md:pb-11">
                                <p class="mb-4  text-xl  font-black  leading-none">
                                    {formatNumber(paid)}
                                </p>
                                <small>{stat1label}</small>
                            </div>
                        </div>
                        <div class="w-auto md:mx-5  ">
                            <div class="h-px w-14 md:w-px md:h-14 bg-gray-200"></div>
                        </div>
                        <div class="w-full md:flex-1  ">
                            <div class="text-center p-3 md:px-2 md:pt-9 md:pb-11">
                                <p class="mb-4  text-xl  font-black  leading-none">
                                    {formatNumber(unpaid)}
                                </p>
                                <small>{stat2label}</small>
                            </div>
                        </div>
                        {figure3 && (
                            <div class="w-full md:flex-1  ">
                                <div class="text-center p-3 md:px-2 md:pt-9 md:pb-11">
                                    <p class="mb-4 text-black font-semibold leading-normal">
                                        {stat3label}
                                    </p>
                                    <p class="mb-4  font-black  leading-none">
                                        {formatNumber(figure3)}
                                    </p>
                                    <p class="text-gray-900 font-medium leading-snug">
                                        {desc2}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default InvoiceStat;
