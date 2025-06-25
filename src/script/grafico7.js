document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('grafico7');
  if (!canvas) {
    console.error("Canvas com id 'grafico7' não encontrado!");
    return;
  }

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Residência',
        'Via pública',
        'Área rural',
        'Sítio e fazendas',
        'Hospital',
        'Outros',
        'Estabelecimento comercial'
      ],
      datasets: [{
        data: [61.7, 12.9, 2, 2.5, 0, 18.4, 2.5],
        backgroundColor: [
          '#97e0c2',
          '#5f35aa',
          '#9e74f8',
          '#c092fc',
          '#703b6f',
          '#a1224d',
          '#a874f8'
        ],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'LOCAL EM QUE OCORREU O ESTUPRO, BRASIL (2023)',
          font: {
            size: 18,
            weight: 'bold',
            family: "'Inter', sans-serif"
          },
          color: '#000',
          padding: {
            top: 10,
            bottom: 30
          }
        },
        legend: {
          position: 'right',
          labels: {
            color: '#000',
            font: { size: 14 }
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
});
