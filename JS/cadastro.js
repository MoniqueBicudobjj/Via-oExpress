
const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    try {

        const nome =
            document.getElementById("nome").value.trim();

        const cpf =
            document.getElementById("cpf").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const telefone =
            document.getElementById("telefone").value.trim();

        const dataNascimento =
            document.getElementById("dataNascimento").value;



        if (nome.length < 3) {

            throw new Error(
                "O nome deve ter pelo menos 3 caracteres."
            );

        }

        if (
            cpf.length !== 11 ||
            isNaN(cpf)
        ) {

            throw new Error(
                "O CPF deve conter exatamente 11 números."
            );

        }

        if (
            !email.includes("@") ||
            !email.includes(".")
        ) {

            throw new Error(
                "Digite um e-mail válido."
            );

        }

        if (
            telefone.length !== 11 ||
            isNaN(telefone)
        ) {

            throw new Error(
                "O telefone deve conter exatamente 11 números."
            );

        }

        if (dataNascimento === "") {

            throw new Error(
                "Informe sua data de nascimento."
            );

        }


        const hoje = new Date();

        const nascimento =
            new Date(dataNascimento);


        let idade =
            hoje.getFullYear() -
            nascimento.getFullYear();


        const diferencaMes =
            hoje.getMonth() -
            nascimento.getMonth();


        if (
            diferencaMes < 0 ||
            (
                diferencaMes === 0 &&
                hoje.getDate() < nascimento.getDate()
            )
        ) {

            idade--;

        }

        if (idade < 16) {

            throw new Error(
                "É necessário ter pelo menos 16 anos."
            );

        }

        alert(
            "Cadastro realizado com sucesso! 🚍"
        );


        form.reset();


    }
    catch (erro) {

        alert(
            "⚠️ " + erro.message
        );

    }

});
