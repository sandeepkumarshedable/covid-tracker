import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
// import Chart from "react-apexcharts";
import { Line, Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Charts = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchDailyData();

        setDailyData(data);
      } catch (error) {}
    })();
  }, []);

  console.log("dd", dailyData);

  const lineChart = dailyData?.data?.length ? (
    <Line
      data={{
        labels: dailyData?.data?.map(({ date }) => date),
        datasets: [
          {
            data: dailyData?.data?.map(({ confirmed }) => confirmed),
            label: "Infected",
            fill: true,
            borderColor: "blue",
          },
          {
            data: dailyData?.data?.map(({ deaths }) => deaths),
            label: "Deaths",
            fill: true,
            borderColor: "red",
          },
        ],
      }}
    />
  ) : null;

  const donutChart = confirmed ? (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5) ",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? donutChart : lineChart}</div>
  );
};

export default Charts;
