const graficoBarras = document.getElementById('graficoBarras').getContext('2d');

new Chart(graficoBarras, {
    type: 'bar',
    data: {
    labels: ['0 a 4', '5 a 9', '10 a 13', '14 a 17', '18 a 19', '20 a 24', '25 a 29', '30 a 34', '35 a 39', '40 a 44', '45 a 49', '50 a 59', '60 ou +'],
    datasets: [{
        label: 'Percentual (%)',
        data: [11.1, 18.0, 32.5, 16.0, 2.9, 5.1, 3.8, 2.9, 2.4, 1.9, 1.3, 0.8, 0.5, 0.9],
        backgroundColor: '#5E2A7B'
    }]
    },
    options: {
    responsive: true,
    scales: {
        y: {
        beginAtZero: true,
        title: {
            display: false,
            text: 'Percentual (%)'
        }
        },
        x: {
        title: {
            display: false,
            text: 'Faixa Etária'
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
            return context.raw + '%';
            }
        }
        }
    }
    }
});

