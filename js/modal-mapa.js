// Modal do mapa
document.getElementById("abrirMapaModal").addEventListener("click", function () {
  document.getElementById("mapaModal").style.display = "block";
});

document.getElementById("closeMapaModal").addEventListener("click", function () {
  document.getElementById("mapaModal").style.display = "none";
});

// Fecha ao clicar fora do conteúdo
window.addEventListener("click", function (event) {
  const modal = document.getElementById("mapaModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
