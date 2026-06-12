document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const feedback = document.getElementById('feedback-form');

    form.addEventListener('submit', (e) => {
        // Impede o recarregamento automático da página
        e.preventDefault();

        // Captura os dados preenchidos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples (o HTML já faz boa parte com 'required')
        if (nome && email) {
            // Mostra a mensagem de sucesso na tela
            feedback.innerHTML = `Obrigado pelo contato, ${nome}! Nossa equipe sustentável responderá em breve no e-mail: ${email}.`;
            feedback.classList.remove('hidden');

            // Limpa o formulário
            form.reset();

            // Esconde a mensagem de feedback após 5 segundos
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 5000);
        }
    });
});
