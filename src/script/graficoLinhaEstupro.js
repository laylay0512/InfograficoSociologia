const graficolinha = document.getElementById('graficoLinhaEstupro').getContext('2d');

new Chart(graficolinha, {
      type: 'line',
      data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
          label: 'Nº de vítimas',
          data: [43869, 50224, 51090, 50438, 47461, 55070, 63157, 66893, 69886, 62917, 68885, 78887, 83988],
          borderColor: '#5E2A7B',
          backgroundColor: '#5E2A7B',
          fill: false,
          tension: 0.3,
          pointBackgroundColor: '#5E2A7B',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Número de vítimas'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Ano'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.raw.toLocaleString('pt-BR') + ' vítimas';
              }
            }
          }
        }
      }
});


