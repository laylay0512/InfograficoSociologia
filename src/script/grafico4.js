const ctx = document.getElementById('grafico4').getContext('2d');

document.addEventListener("DOMContentLoaded", () => {
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Estupro', ['Estupro de', 'vulnerável']],
      datasets: [{
        data: [24, 76],
        backgroundColor: ['#b794f4', '#4c1d95'],
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
            font: { size: 23},
            padding: 45 // aumenta o espaço vertical entre as linhas da legenda
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
            size: 26
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

