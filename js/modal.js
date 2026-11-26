// Capturando elementos
const modal = document.getElementById("modal");
const btnCloseModal = document.getElementById("modal-close")
const formulario = document.getElementById("modal-form")


// Fechando modal pelo botão
btnCloseModal.addEventListener("click", function () {
    modal.close();
});


//Abrindo modal ao carregar a página
window.addEventListener("load", function () {
    // setTimeout(ação, tempo)

    setTimeout(function () {
        console.log("Apenas um teste");

        modal.showModal();
    }, 2000) /* 2segundos */
});


// Fechando modal ao clicar fora
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.close();
    }
})

// Captuando o envio do formulário
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Inscrição realizada com sucesso!");

    formulario.reset()
    modal.close();
})