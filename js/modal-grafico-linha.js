// Modal do gráfico de linha
document.getElementById("abrirGraficoLinhaModal").addEventListener("click", function () {
  document.getElementById("graficoLinhaModal").style.display = "block";
});

document.getElementById("closeGraficoLinhaModal").addEventListener("click", function () {
  document.getElementById("graficoLinhaModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  const modal = document.getElementById("graficoLinhaModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
