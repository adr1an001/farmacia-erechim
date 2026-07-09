const btnHome = document.querySelector("#botao-home");

btnHome.addEventListener("click", abrirWhatsApp);

function abrirWhatsApp(){

    const mensagem = encodeURIComponent(
        "Olá! Gostaria de saber mais sobre os serviços da Farmácias Erechim."
    );

    window.open(
        `https://wa.me/555433211500?text=${mensagem}`,
        "_blank"
    );
}