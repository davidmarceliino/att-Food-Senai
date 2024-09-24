function formatCPF(cpfInput) {
    let cpf = cpfInput.value.replace(/\D/g, '');
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    cpfInput.value = cpf;
}

function formatPhone(phoneInput) {
    // Remove caracteres não numéricos
    let phone = phoneInput.value.replace(/\D/g, '');
    if (phone.length > 10) {
        phone = phone.replace(/(\d{2})(\d{5})(\d)/, '($1) $2-$3');
    } else if (phone.length > 6) {
        phone = phone.replace(/(\d{2})(\d{4})(\d)/, '($1) $2-$3');
    } else if (phone.length > 2) {
        phone = phone.replace(/(\d{2})(\d)/, '($1) $2');
    }
    phoneInput.value = phone;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validação de senha
    if (password !== confirmPassword) {
        document.getElementById('responseMessage').innerText = 'As senhas não correspondem. Tente novamente.';
        return;
    }

    // Simulação de envio do formulário
    document.getElementById('responseMessage').innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    
    // Limpa o formulário
    this.reset();
});