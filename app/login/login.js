'use strict';

const getUserByEmail = async (userEmail) => {
  const response = await fetch(
    `http://localhost:3000/api/users/email/${userEmail}`
  );
  return response.json();
};

const loginForm = document.getElementById('login-form');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');

const handleError = (errorMessage) => {
  const errorElement = document.createElement('p');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('error-mesage');

  loginForm.insertAdjacentElement('beforebegin', errorElement);
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

const handleOnSumbit = async (event) => {
  event.preventDefault();

  const email = userEmail.value;
  const password = userPassword.value;

  if (!email.trim() || !password.trim()) {
    handleError('Email and password are required');
    return;
  }

  try {
    const { data: user } = await getUserByEmail(email);

    if (!user || user.password !== password) {
      handleError('Incorrect user or password');
      return;
    }
    document.cookie = `userName${user.name}`;
    window.location.replace('../home');
  } catch (error) {
    console.error('error:', error);
  }
};

loginForm.addEventListener('submit', handleOnSumbit);
userEmail.addEventListener('keypress', handleInputKeyPress);
userPassword.addEventListener('keypress', handleInputKeyPress);
