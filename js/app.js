//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

//Liteners
eventListener();

function eventListener() {
    //Inicio de la aplicacion y deshabilitar enviar
    document.addEventListener('DOMContenLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}


//Funciones
function inicioApp() {
    //deshabilitar el envio
    btnEnviar.desabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
    
    //Se valida la longitud del texto y que no esté vacío
    validarLongitud(this);

    //Validar únicamente el email
    if(this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}
// Resetear formulario
function resetFormulario(e) {
    formularioEnviar.reset();

    e.preventDefault();
}
//Cuando se envia el correo
function enviarEmail(e) {
    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envía el email
    const enviado =  document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y mostrar enviado

    setTimeout(function() {
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild( enviado );

        setTimeout(function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000)
    }, 3000);

    e.preventDefault();
}
function validarLongitud(campo)  {
 if(campo.value.length > 0) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
 //Validar @ en email
function validarEmail(campo) {
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

