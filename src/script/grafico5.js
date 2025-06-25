const ctx5 = document.getElementById("grafico5").getContext("2d");

new Chart(ctx5, {
  type: "bar",
  data: {
    labels: ["0 a 4", "5 a 9", "10 a 13", "14 a 17"],
    datasets: [{
      label: "Vítimas de estupro (%)",
      data: [11, 18, 33, 16],
      backgroundColor: "#9B4ED1",
      borderRadius: 5,
      barThickness: 50,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.parsed.y + '%';
          }
        }
      },
      title: {
        display: true,
        text: "FAIXA ETÁRIA DAS VÍTIMAS DE ESTUPRO EM %, BRASIL (2023)",
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: "bold"
        },
        color: "#000",
        padding: {
          top: 10,
          bottom: 30
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
          font: {
            family: "'Inter', sans-serif",
            size: 14
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 35,
        ticks: {
          stepSize: 5,
          color: "#000",
          font: {
            family: "'Inter', sans-serif",
            size: 14
          },
          callback: function(value) {
            return value + "%";
          }
        },
        grid: {
          color: "#d4b1ea"
        }
      }
    }
  }
});
