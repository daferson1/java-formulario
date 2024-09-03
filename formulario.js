
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Seleciona os campos
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const numero = document.getElementById('numero');
    const mensagem = document.getElementById('mensagem');

    // Função para validar campos
    function validarCampo(campo) {
        const label = campo.nextElementSibling; // Seleciona o label associado
        if (campo.value.trim() === '') {
            campo.classList.add('input-vermelho');
            campo.classList.remove('input-verde');
            label.classList.remove('esconder'); // Remove a classe esconder
            label.classList.add('aparecer'); // Adiciona a classe aparecer
            return false;
        } else {
            campo.classList.add('input-verde');
            campo.classList.remove('input-vermelho');
            label.classList.remove('aparecer'); // Remove a classe aparecer
            label.classList.add('esconder'); // Adiciona a classe esconder
            return true;
        }
    }

    // Valida todos os campos
    const nomeValido = validarCampo(nome);
    const emailValido = validarCampo(email);
    const numeroValido = validarCampo(numero);
    const mensagemValida = validarCampo(mensagem);

    // Verifica se todos os campos são válidos
    if (nomeValido && emailValido && numeroValido && mensagemValida) {
        // Aqui você pode enviar o formulário ou fazer outra ação
        alert('Formulário enviado com sucesso!');
    } else {
        document.getElementById('errorNome').style.display = 'block'; // Exibe mensagem de erro
    }
});
