const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

function showError(input, message) {
    const group = input.parentElement;
    const error = group.querySelector('.error-message');
    error.textContent = message;
    input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
    const group = input.parentElement;
    const error = group.querySelector('.error-message');
    error.textContent = '';
    input.setAttribute('aria-invalid', 'false');
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        [name, email, message].forEach(clearError);
        successMessage.textContent = '';

        if (name.value.trim().length < 3) {
            showError(name, 'Informe um nome com pelo menos 3 caracteres.');
            isValid = false;
        }

        if (email.value.trim() === '') {
            showError(email, 'Informe seu e-mail.');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Informe um e-mail válido.');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, 'Digite uma mensagem com pelo menos 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            successMessage.textContent = 'Mensagem validada com sucesso. Simulação de envio concluída.';
            form.reset();

            [name, email, message].forEach((field) => {
                field.setAttribute('aria-invalid', 'false');
            });
        }
    });
}
