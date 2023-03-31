export function valida(input) {

  const tipoDeInput = input.dataset.tipo;
  
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.classList.remove("input1-container--invalid");
    input.parentElement.classList.remove("textarea-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.classList.add("input1-container--invalid");
    input.parentElement.classList.add("textarea-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
     
  }
}


const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch:"Al menos 4 caracteres y máximo 50, no puede contener caracteres especiales.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch: "6-12 caracteres,1 letra minúscula,1 letra mayúscula,1 número y sin caracteres especiales.",
  },
  mensaje: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El mensaje debe contener entre 3 y 300 carácteres"
  }
};



function mostrarMensajeDeError(tipoDeInput, input) {

  let mensaje = "";

  tipoDeErrores.forEach((error) => {

    if (input.validity[error]) {
      
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}

