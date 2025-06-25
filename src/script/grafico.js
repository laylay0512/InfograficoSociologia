const grafico0 = document.getElementById('barChart0').getContext('2d');
const barChart = new Chart(grafico0, {
    type: 'bar',
    data: {
        labels: ['Estupros em 2022', 'Estupros por hora'],
        datasets: [
            {
                label: 'Total anual',
                data: [40659, null],
                backgroundColor: '#7a3eb8',
                yAxisID: 'y',
                borderRadius: 8,
                borderSkipped: false
            },
            {
                label: 'Por hora',
                data: [null, 4],
                backgroundColor: '#b38bda',
                yAxisID: 'y1',
                borderRadius: 8,
                borderSkipped: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                ticks: {
                    color: '#4b007d',
                    font: { size: 10, weight: 'bold' },
                    callback: value => value.toLocaleString()
                },
                title: {
                    display: true,
                    text: 'Número de casos (anual)',
                    color: '#4b007d',
                    font: { size: 12, weight: 'bold' },
                    padding: { top: 10, bottom: 10 }
                }
            },
            y1: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                grid: { drawOnChartArea: false },
                ticks: {
                    color: '#4b007d',
                    font: { size: 12, weight: 'bold' },
                    stepSize: 1
                },
                title: {
                    display: true,
                    text: 'Número de casos (por hora)',
                    color: '#4b007d',
                    font: { size: 12, weight: 'bold' }
                }
            },
            x: {
                ticks: {
                    color: '#4b007d',
                    font: { size: 9, weight: 'bold' }
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#4b007d', font: { size: 10 } }
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: context => context.parsed.y !== null ? context.parsed.y.toLocaleString() : ''
                }
            }
        }
    }
});
