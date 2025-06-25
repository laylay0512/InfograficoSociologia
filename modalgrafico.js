document.addEventListener("DOMContentLoaded", () => {
    // ... (Seu código JavaScript existente para outros modais, como graficoLinhaModal) ...

    // Lógica para o modal da fonte do GRAFICO 6 (com conteúdo da Isabela Del Monde)
    const abrirFonteGrafico6IsabelaModalBtn = document.getElementById('abrirFonteGrafico6Modal'); // Gatilho é a fonte do grafico6
    const fonteGrafico6IsabelaModal = document.getElementById('fonteGrafico6IsabelaModal'); // O modal com o conteúdo da Isabela
    const closeFonteGrafico6IsabelaModalBtn = document.getElementById('closeFonteGrafico6IsabelaModal');

    if (abrirFonteGrafico6IsabelaModalBtn && fonteGrafico6IsabelaModal && closeFonteGrafico6IsabelaModalBtn) {
        abrirFonteGrafico6IsabelaModalBtn.addEventListener('click', () => {
            fonteGrafico6IsabelaModal.style.display = 'flex'; // Use 'flex' se você ajustou .modal no CSS para centralizar
        });

        closeFonteGrafico6IsabelaModalBtn.addEventListener('click', () => {
            fonteGrafico6IsabelaModal.style.display = 'none';
        });

        // Fechar o modal ao clicar fora do conteúdo
        fonteGrafico6IsabelaModal.addEventListener('click', (event) => {
            if (event.target === fonteGrafico6IsabelaModal) {
                fonteGrafico6IsabelaModal.style.display = 'none';
            }
        });
    }
});