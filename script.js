document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.dataset.proximo;
            passos.forEach(passo => passo.classList.remove('ativo'));
            document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
        });
    });
});
