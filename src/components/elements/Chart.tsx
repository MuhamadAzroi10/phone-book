import React from "react";
import { Line } from "react-chartjs-2";
import { Ds_wrap_chart } from "../../assets/style_page/style_dashboard";

interface DataChartProps {
  DataPerrent: any;
}

const Chart_Minggu: React.FC<DataChartProps> = ({ DataPerrent }) => {
  let minggu1: number = 0;
  let minggu2: number = 0;
  let minggu3: number = 0;
  let minggu4: number = 0;
  let minggu5: number = 0;

  DataPerrent.forEach((example: any) => {
    let today = new Date(example.created_at);
    let date = today.getDate();
    let dayOfWeek = today.getDay();
    let weekOfMonth = Math.ceil((date - 1 - dayOfWeek) / 7) + 1;

    if (weekOfMonth == 1) {
      minggu1 += 1;
    } else if (weekOfMonth == 2) {
      minggu2 += 1;
    } else if (weekOfMonth == 3) {
      minggu3 += 1;
    } else if (weekOfMonth == 4) {
      minggu4 += 1;
    } else if (weekOfMonth == 5) {
      minggu5 += 1;
    }
  });

  const jmlMinggu = [
    {
      hari: "Minggu 1",
      jml_data: minggu1,
    },
    {
      hari: "Minggu 2",
      jml_data: minggu2,
    },
    {
      hari: "Minggu 3",
      jml_data: minggu3,
    },
    {
      hari: "Minggu 4",
      jml_data: minggu4,
    },
    {
      hari: "Minggu 5",
      jml_data: minggu5,
    },
  ];

  const stateDataMinggu = {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5"],
    datasets: [
      {
        data: jmlMinggu?.map((data: any) => data.jml_data),
        label: "Per Minggu",
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

export default Chart_Minggu;
