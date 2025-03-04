import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11';

// Afficher une notification
export const showNotification = (icon, title, text, confirmButtonColor) => {
  Swal.fire({
    icon,
    title,
    text,
    confirmButtonColor,
  });
};

// Activer/désactiver un indicateur de chargement
export const toggleLoading = (button, isLoading) => {
  const buttonText = button.querySelector('#buttonText');
  const buttonSpinner = button.querySelector('#buttonSpinner');

  if (isLoading) {
    button.disabled = true;
    buttonText.style.display = 'none';
    buttonSpinner.style.display = 'inline-block';
  } else {
    button.disabled = false;
    buttonText.style.display = 'inline-block';
    buttonSpinner.style.display = 'none';
  }
};

// Valider un formulaire
export const validateForm = (form) => {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach((input) => {
    const errorMessage = input.nextElementSibling;
    if (!input.checkValidity()) {
      errorMessage.textContent = input.validationMessage;
      errorMessage.style.display = 'block';
      isValid = false;
    } else {
      errorMessage.style.display = 'none';
    }
  });

  return isValid;
};

// Rediriger en fonction du rôle
export const redirectBasedOnRole = (role) => {
  if (role === 'admin') {
    window.location.href = 'admin/dashboard.html';
  } else if (role === 'user') {
    window.location.href = 'user/dashboard.html';
  } else {
    window.location.href = 'login.html';
  }
};