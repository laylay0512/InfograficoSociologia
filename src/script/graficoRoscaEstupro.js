const rosca3 = document.getElementById('graficoRoscaEstupro').getContext('2d');

new Chart(rosca3, {
      type: 'doughnut',
      data: {
        labels: ['Estupro', 'E.V.'],
        datasets: [{
          data: [24, 76],
          backgroundColor: ['#B39DDB', '#7E57C2'],
          borderWidth: 1
        }]
      },
      options: {
        cutout: '60%',
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.raw + '%';
              }
            }
          }
        }
      }
});





