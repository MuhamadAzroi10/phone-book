import React from "react";
import { Line } from "react-chartjs-2";
import { Ds_wrap_chart } from "../../assets/style_page/style_dashboard";

interface DataChartProps {
  DataPerrent: any;
}

const Chart_Bulan: React.FC<DataChartProps> = ({ DataPerrent }) => {
  let Januari: number = 0;
  let Februari: number = 0;
  let Maret: number = 0;
  let April: number = 0;
  let Mei: number = 0;
  let Juni: number = 0;
  let Juli: number = 0;
  let Agustus: number = 0;
  let September: number = 0;
  let Oktober: number = 0;
  let November: number = 0;
  let Desember: number = 0;

  DataPerrent.forEach((example: any) => {
    let today = new Date(example.created_at);

    if (today.getMonth() + 1 == 1) {
      Januari += 1;
    } else if (today.getMonth() + 1 == 2) {
      Februari += 1;
    } else if (today.getMonth() + 1 == 3) {
      Maret += 1;
    } else if (today.getMonth() + 1 == 4) {
      April += 1;
    } else if (today.getMonth() + 1 == 5) {
      Mei += 1;
    } else if (today.getMonth() + 1 == 6) {
      Juni += 1;
    } else if (today.getMonth() + 1 == 7) {
      Juli += 1;
    } else if (today.getMonth() + 1 == 8) {
      Agustus += 1;
    } else if (today.getMonth() + 1 == 9) {
      September += 1;
    } else if (today.getMonth() + 1 == 10) {
      Oktober += 1;
    } else if (today.getMonth() + 1 == 11) {
      November += 1;
    } else if (today.getMonth() + 1 == 12) {
      Desember += 1;
    }
  });

  const stateDataMinggu = {
    labels: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "September",
      "Oktober",
      "November",
      "Desember",
    ],
    datasets: [
      {
        data: [
          Januari,
          Februari,
          Maret,
          April,
          Mei,
          Juni,
          Juli,
          September,
          Oktober,
          November,
          Desember,
        ],
        label: "Per Bulan",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "white",
        borderColor: "#1565d8",
        pointRadius: 6,
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "#1565d8",
      },
    ],
  };

  return <Line className={Ds_wrap_chart} data={stateDataMinggu} />;
};

export default Chart_Bulan;
