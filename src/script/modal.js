// Obter elementos
    const culturaLink = document.getElementById('cultura-link');
    const modal = document.getElementById('culturaModal');
    const closeButton = document.getElementById('closeCulturaModal');

    // Quando o link "cultura" é clicado, abrir o modal
    culturaLink.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    // Quando o botão de fechar (X) for clicado, fechar o modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Se o usuário clicar fora do modal, fechá-lo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

