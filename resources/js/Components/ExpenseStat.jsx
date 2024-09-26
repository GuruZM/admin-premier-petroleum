import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
const ExpenseStat = ({
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
            className="flex  flex-col rounded-md bg-white text-black shadow-md  h-full     flex-1"
        >
            <CardHeader className=" p-0 flex flex-col  items-start  ">
                <div className="w-full flex flex-col gap-3 p-3">
                    <div className="flex  gap-3 ">
                        <span className="">{icon}</span>
                        <p className="text-md font-medium">{label}</p>
                    </div>
                    <Divider />
                </div>

                {/* <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> */}
                <div className="   w-4/5 mx-auto   flex">
                    <div class="flex flex-col flex-1 gap-3 justify-center  ">
                        <small> {stat2label}</small>
                        <p class="mb-4 text-xl  font-black  leading-none">
                            {formatNumber(figure2)}
                        </p>
                    </div>

                    <div class="flex-1 flex flex-col gap-3  ">
                        <small> {stat3label}</small>
                        <p class="mb-4 text-xl  font-black  leading-none">
                            {formatNumber(figure3)}
                        </p>
                    </div>
                </div>
            </CardHeader>

            <CardBody className="px-0 flex rounded-t-2xl border-t-1 border-gray-200  ">
                <div class="     rounded-4xl shadow-8xl">
                    <div class="flex   flex-col ">
                        <p class="mb-4 w-4/5   mx-auto        font-semibold leading-normal">
                            {stat1label}
                        </p>
                        <div class=" w-4/5  mx-auto    rounded-lg flex  gap-3   items-center  md:flex-1">
                            <div className="gap-3 flex-1 flex flex-col">
                                <small>Credit</small>
                                <p class="mb-4 text-xl  font-black  leading-none">
                                    {formatNumber(stat1)}
                                </p>
                            </div>

                            <div className="gap-3 flex flex-1 flex-col">
                                <small>Cash</small>
                                <p class="mb-4 text-xl  font-black  leading-none">
                                    {/* <small>Cash</small> <br /> */}
                                    {formatNumber(stat2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ExpenseStat;
