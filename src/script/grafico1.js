const ctx3 = document.getElementById('grafico1').getContext('2d');

document.addEventListener("DOMContentLoaded", () => {
  new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Amarela', 'Branca', 'Indígena', 'Negra'],
      datasets: [{
        data: [0.4, 46.9, 0.5, 52.2],
        backgroundColor: ['#800080', '#a78bfa', '#99f6e4', '#3b2a4e'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#000',
            font: { size: 24 },
            padding: 33 // aumenta o espaço vertical entre as linhas da legenda
          }
        },
        tooltip: {
          callbacks: {
            label: context => `${context.label}: ${context.parsed}%`
          }
        },
        datalabels: {
          color: '#fff',
          font: {
            weight: 'bold',
            size: 18
          },
          formatter: value => `${value}%`,
          textStrokeColor: '#000',
          textStrokeWidth: 5
        }
      }
    },
    plugins: [ChartDataLabels]
  });
});

