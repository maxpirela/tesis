// Types

const inputNames = {
  nombreCompleto: 'nombreCompleto',
  email: 'email',
  phone: 'phone',
  usuario: 'username',
  password: 'password',
  confirmPassword: 'confirmPassword'
};

const errorNamesId = {
  nombreCompleto: 'errorName',
  email: 'errorEmail',
  phone: 'errorPhone',
  usuario: 'errorUsername',
  password: 'errorPassword',
  confirmPassword: 'errorConfirmPassword'
};

// Esta funcion hay que modificarla para que sea mejor
const validarInput = (inputId) => {

  // Setup
  const input = document.getElementById(inputId);
  const inputValue = input.value;

  // Regex
    // falta regex de la logica tonta esa de nombre completo
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i;
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

  // Logic
  let result;
  let errorMessage;
  let errorId;
  switch (inputId) {
    case inputNames.nombreCompleto:
      break;
    case inputNames.email:
      result = inputValue.search(emailRegex);
      errorMessage = 'E-Mail incorrecto';
      errorId = errorNamesId.email;
      break;
    case inputNames.phone:
      result = inputValue.search(phoneRegex);
      errorMessage = 'Numero de Telefono incorrecto';
      errorId = errorNamesId.phone;
      break;
    case inputNames.password:
      result = inputValue.search(passwordRegex);
      errorMessage = 'Contraseña esta mal';
      errorId = errorNamesId.password;
      break;
    case inputNames.confirmPassword:
      result = inputValue.search(passwordRegex);
      errorMessage = 'Contraseña esta mal';
      errorId = errorNamesId.password;
      break;
    default:
      break;
  }

  if (result < 0) {
    mostrarError(errorId, errorMessage, true );
  } else {
    mostrarError(errorId, 'error', false);
  }

}

const mostrarError = (elementId, mensaje, mostrar) => {
  const errorClass = 'errorValShow';
  const errorClassHide = 'errorValHide';
  const element = document.getElementById(elementId);
  element.className = mostrar ? errorClass : errorClassHide;
  element.innerText = mensaje;
}
