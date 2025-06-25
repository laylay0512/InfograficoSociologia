// Obter elementos
const lostLifeImage = document.querySelector(".image2");
const lostLifemodal = document.getElementById("lostLifeModal");
const lostLifecloseButton = document.getElementById("closelostLifeModal");

// Quando a imagem é clicada, abrir o modal
lostLifeImage.addEventListener("click", function () {
  lostLifemodal.style.display = "block";
});

// Quando o botão de fechar (X) for clicado, fechar o modal
lostLifecloseButton.addEventListener("click", function () {
  lostLifemodal.style.display = "none";
});

// Se o usuário clicar fora do modal, fechá-lo
window.addEventListener("click", function (event) {
  if (event.target === lostLifemodal) {
    lostLifemodal.style.display = "none";
  }
});

