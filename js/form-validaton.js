$("#form-contato").validate({
    rules: {
        nome: {
            required: true,
            minLength: 5
        },

        email: {
            required: true,
            email: true
        },

        telefone: {
            required: true,
        },

        assunto: {
            required: true,
        },

        mensagem: {
            required: true,
        },
    },

    messages: {
        nome: {
            required: "Parece que você não escreveu seu nome",
            minLength: "Seu nome parece estar incompleto"
        },

        email: {
            required: 'Precisamos saber seu email',
            email: 'Email inválido'
        },

        telefone: {
            required: 'Digite o telefone',
        },

        assunto: {
            required: 'Digite o assunto',
        },

        mensagem: {
            required: 'Digite a mensagem',
        },
    }
});