const graficoRosca = document.getElementById('graficoRosca').getContext('2d');

new Chart(graficoRosca, {
    type: 'doughnut',
    data: {
    labels: ['Assédio', 'Estupro', 'Estupro de vulnerável', 'Outros'],
    datasets: [{
        data: [1.4, 46.6, 52.2, 0.5],
        backgroundColor: ['#B000F9', '#8437A5', '#483550', '#000'],
        borderWidth: 1
    }]
    },
    options: {
    responsive: false,
    plugins: {
        legend: {
        position: 'right'
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








