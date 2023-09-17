'use strict';

const registrationForm = document.getElementById('registration-form');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const confirmPassword = document.getElementById('confirmPassword');

const getUserByEmail = async (userEmail) => {
  const response = await fetch(
    `http://localhost:3000/api/users/email/${userEmail}`
  );
  return response.json();
};

const handleError = (errorMessage) => {
  const errorElement = document.createElement('p');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('error-mesage');

  registrationForm.insertAdjacentElement('beforebegin', errorElement);
};

const removeError = () => {
  const errorElement = document.querySelector('.error-mesage');

  if (errorElement) {
    errorElement.remove();
  }
};

const handleInputKeyPress = () => {
  removeError();
};

const handleOnSubmit = async (event) => {
  event.preventDefault();

  const user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
    confirmPassword: confirmPassword.value,
  };

  if (
    !user.name.trim() ||
    !user.email.trim() ||
    !user.password.trim() ||
    !user.confirmPassword.trim()
  ) {
    handleError('All fields are required');
    return;
  }

  if (user.password !== user.confirmPassword) {
    handleError('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    });

    const data = await response.json();

    if (response.status !== 201) {
      throw new Error(data.message);
    }

    document.cookie = `userName=${user.name}; path=/; SameSite=None; Secure`;
    document.cookie = `userEmail=${user.email}; path=/; SameSite=None; Secure`;

    window.location.replace('../home');
  } catch (err) {
    handleError(err.message);
  }
};

registrationForm.addEventListener('submit', handleOnSubmit);
