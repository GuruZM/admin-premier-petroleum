import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = ({ chartData, categories, options }) => {
    const [stateChartData, setChartData] = useState([]);
    const [stateChartOptions, setChartOptions] = useState({});

    console.log("barchart", chartData);
    useEffect(() => {
        setChartData(chartData);
    }, [chartData]);

    const chartOptions = {
        chart: {
            width: "50px",
            toolbar: {
                show: false,
            },
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        hover: { mode: null },
        plotOptions: {
            donut: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
        xaxis: {
            categories: categories,
            labels: {
                show: true,
                style: {
                    colors: "#A3AED0",
                    fontSize: "14px",
                    fontWeight: "500",
                },
            }, // Dynamically set categories
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            color: "black",
            labels: {
                show: true,
                style: {
                    colors: "#000",
                    fontSize: "14px",
                },
            },
        },
        grid: {
            show: false,
            strokeDashArray: 5,
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [
                    [
                        {
                            offset: 0,
                            color: "#000",
                            opacity: 1,
                        },
                        {
                            offset: 100,
                            color: "#000",
                            opacity: 1,
                        },
                    ],
                ],
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: "40px",
            },
        },
        tooltip: {
            enabled: true,
            theme: "dark",
            style: {
                fontSize: "12px",
                fontFamily: undefined,
                backgroundColor: "#000000",
            },
        },
    };

    return (
        <ReactApexChart
            options={options}
            series={stateChartData}
            type="bar"
            width="100%"
            height="100%"
        />
    );
};

export default BarChart;
