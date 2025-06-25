const ctx6 = document.getElementById("grafico6").getContext("2d");

new Chart(ctx6, {
  type: "pie",
  data: {
    labels: [
      "Familiar",
      "Parceiro íntimo",
      "Ex-parceiro íntimo",
      "Outros conhecidos",
      "Desconhecidos"
    ],
    datasets: [{
      data: [49.8, 16.2, 4.6, 14, 15.3],
      backgroundColor: [
        "#50C5D1",
        "#9B4ED1",
        "#B77BE9",
        "#000000",
        "#B261D1"
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        top: -10
      }
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 26, // diminuiu para a legenda descer
          usePointStyle: true,
          pointStyle: "circle",
          color: "#000",
          font: {
            family: "'Inter', sans-serif",
            size: 14,
            weight: "bold"
          }
        }
      },
      title: {
        display: true,
        text: "RELAÇÃO ENTRE VÍTIMA E AUTOR, BRASIL (2023)",
        font: {
          size: 18,
          family: "'Inter', sans-serif",
          weight: "bold"
        },
        color: "#000",
        padding: {
          top: 10,
          bottom: 10
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  }
});
