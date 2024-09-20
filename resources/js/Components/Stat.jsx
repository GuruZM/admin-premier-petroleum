import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
const Stat = ({
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
            className="flex  flex-col rounded-md bg-white text-black shadow-md gap-1 h-full  p-4 px-5  flex-1"
        >
            <CardHeader className="flex flex-row items-center p-3 space-x-4   space-y-0">
                <span className="">{icon}</span>
                <p className="text-md font-medium">{label}</p>
                {/* <CreditCardIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> */}
            </CardHeader>
            <Divider />
            <CardBody className="px-0 flex">
                <div class="md:max-w-full   bg-white rounded-4xl shadow-8xl">
                    <div class="flex sm:flex-row flex-col justify-center items-center">
                        <div class="w-full md:flex-1">
                            <div class="text-center p-3 md:px-2   flex-1   md:pb-11">
                                <p class="mb-4 text-black text-center   mx-auto font-semibold leading-normal">
                                    {stat1label}
                                </p>
                                <h2 class="mb-4 text-1xl  text-center flex  justify-center md:text-xl xl:text-xl font-black font-heading   leading-none">
                                    {fuel ? (
                                        <>
                                            <span className="flex flex-col">
                                                <small className="text-sm">
                                                    Credit
                                                </small>
                                                {formatNumber(stat1)}
                                            </span>
                                            <span className="mx-4">|</span>
                                            <p className="flex flex-col mb-4 text-black font-semibold leading-normal">
                                                <small className="text-sm">
                                                    Cash
                                                </small>
                                                {formatNumber(stat2)}
                                            </p>
                                        </>
                                    ) : (
                                        <small className="text-center ">
                                            {formatNumber(figure)}
                                        </small>
                                    )}
                                </h2>

                                <p class="text-gray-900 font-medium leading-snug">
                                    {desc1}
                                </p>
                            </div>
                        </div>
                        <div class="w-auto md:mx-5  ">
                            <div class="h-px w-14 md:w-px md:h-14 bg-gray-200"></div>
                        </div>
                        <div class="w-full md:flex-1  ">
                            <div class="text-center p-3 md:px-2 md:pt-9 md:pb-11">
                                <p class="mb-4 text-black font-semibold leading-normal">
                                    {stat2label}
                                </p>
                                <p class="mb-4  font-black  leading-none">
                                    {formatNumber(figure2)}
                                </p>
                                <p class="text-gray-900 font-medium leading-snug">
                                    {desc2}
                                </p>
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
                {/* <div className="flex flex-col  px-3">
                    <div className="my-3 flex-1">
                        <div className="text-2xl p-3  flex space-x-3  font-black from-neutral-700">
                            <span>{figure ? figure : "ZMW" + " " + 3000}</span>
                        </div>

                        {/* <p className="text-xs text-gray-500 dark:text-gray-400">
                            <span className="text-green-400"> +19%</span> from
                            last month
                        </p> */}
                {/* </div>

                    
                    <div className="flex-1     flex w-full   space-x-4   ">
                        <div className=" flex-1 rounded-lg   p-3 flex-col space-y-3">
                            <p className="text-sm  ">{stat1label}</p>
                            <div className="text-2xl  font-bold">
                                {figure ? figure : "ZMW" + " " + 3000}
                            </div>
                        </div>
                        <div className=" flex-1  border-black flex-col   p-3 rounded-md space-y-3">
                            <p className="text-sm  ">{stat2label}</p>
                            <div className="text-2xl  font-bold">
                                {figure ? figure : "ZMW" + " " + 3000}
                            </div>
                        </div>
                    </div>
                </div>  */}
            </CardBody>
        </Card>
    );
};

export default Stat;
