// Validación básica del formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
