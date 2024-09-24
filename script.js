function formatCPF(cpfInput) {
    // Remove caracteres não numéricos
    let cpf = cpfInput.value.replace(/\D/g, '');
    
    // Adiciona a máscara ao CPF
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    cpfInput.value = cpf;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação de senha
    if (password !== confirmPassword) {
        document.getElementById('responseMessage').innerText = 'As senhas não correspondem. Tente novamente.';
        return;
    }

    const message = document.getElementById('message').value;

    // Simulação de envio do formulário
    document.getElementById('responseMessage').innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    
    // Limpa o formulário
    this.reset();
});