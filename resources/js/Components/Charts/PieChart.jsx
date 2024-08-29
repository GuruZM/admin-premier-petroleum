import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = (chartData, chartOptions) => {
    const [stateChartData, setChartData] = useState([]);
    // console.log("expenses", expenses);
    const pieChartData = [63, 25];
    const pieChartOptions = {
        labels: ["Transport", "Fuel"],
        colors: ["#F16924", "#083756"],
        chart: {
            width: "50px",
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        legend: {
            show: true,
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
        fill: {
            colors: ["#F16924", "#083756"],
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
            options={pieChartOptions}
            type="pie"
            width="100%"
            height="100%"
            series={pieChartData}
        />
    );
};

export default PieChart;
