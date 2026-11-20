// 1 - Capturando elementos
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.querySelector("#menu");

const mediaQuery = window.matchMedia("(min-width: 48rem)");

// Acessando lista de classes
console.log(menu.classList);

// 2 - Configurando evento/ação
botaoMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-ativo");

    // Verificando se o menu está aberto
    const menuAberto = menu.classList.contains("menu-ativo");
    botaoMenu.setAttribute("aria-expanded", menuAberto);

    // Atualizando acessibilidade
    if (menuAberto) {
        botaoMenu.setAttribute("aria-label", "Fechar menu");
    } else {
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

    // Versão simplificada com operador ternário
    // botaoMenu.setAttribute("aria-label", menuAberto ? "Fechar menu" : "Abrir menu");

    // Bloqueando scroll
    document.body.style.overflow = menuAberto ? "hidden" : "";
});

// Exemplo
// Operador Ternário
// condição ? casoVerdadeiro : casoFalso
// console.log(16 <= 18 ? "Maior de idade" : "Menor de idade");

// Fechando o menu ao aumentar a tela
mediaQuery.addEventListener("change", function (event) {
    if (event.matches) {
        menu.classList.remove("menu-ativo");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.setAttribute("aria-expanded", false);

        document.body.style.overflow = "";
    }
}); 
