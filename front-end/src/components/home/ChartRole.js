import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const ChartRole = ({ data }) => {
  const chartData = {
    labels: ["Toplane", "Jungle", "Midlane", "ADC", "Support"],
    datasets: [
      {
        data: [data.toplane, data.jungle, data.midlane, data.adc, data.support],
        backgroundColor: [
          "#7F3E31",
          "#1DAD00",
          "#006ECA",
          "#FF0000 ",
          "#FFC100",
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Désactive le maintien du rapport hauteur / largeur du graphique
    responsive: true, // Permet au graphique de s'ajuster à la taille de son conteneur parent
  };

  return (
    <div className="graphic__chartjs">
      <Doughnut data={chartData} options={options}/>
    </div>
  );
};

export default ChartRole;
