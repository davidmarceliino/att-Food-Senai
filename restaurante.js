function formatCNPJ(cnpjInput) {
    let cnpj = cnpjInput.value.replace(/\D/g, '');
    if (cnpj.length <= 14) {
        cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2');
        cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2');
        cnpj = cnpj.replace(/(\d{3})(\d{1,2})$/, '$1/$2');
        cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2');
    }
    cnpjInput.value = cnpj;
}

function formatPhone(phoneInput) {
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
    const cnpj = document.getElementById('cnpj').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const horario = document.getElementById('horario').value;

    // Simulação de envio do formulário
    alert(`Restaurante ${name} cadastrado com sucesso!`);
    this.reset();
});