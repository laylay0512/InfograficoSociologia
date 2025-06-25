const grafico5 = document.getElementById('graficoSexoEstupro').getContext('2d');

new Chart(grafico5, {
      type: 'doughnut',
      data: {
        labels: ['Feminino', 'Masculino'],
        datasets: [{
          data: [88.2, 11.8],
          backgroundColor: ['#B39DDB', '#5E2A7B'],
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

