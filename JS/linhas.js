const pesquisa = document.getElementById("pesquisa");

const linhas = document.querySelectorAll(".linha");


pesquisa.addEventListener("input", function() {

    const texto =
        pesquisa.value.toLowerCase();


    linhas.forEach(function(linha) {

        const conteudo =
            linha.textContent.toLowerCase();


        if (conteudo.includes(texto)) {

            linha.style.display = "flex";

        } else {

            linha.style.display = "none";

        }

    });

});
