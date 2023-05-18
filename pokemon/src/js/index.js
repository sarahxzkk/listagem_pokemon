const botaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".img_button")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo_escuro");

    body.classList.toggle("modo_escuro");

    if (modoEscuroEstaAtivo) {

        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");

    } else {

        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");

    }
});