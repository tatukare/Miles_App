'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (userName === 'user' && password === 'password') {
      alert('Login Exitoso');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }

    loginForm.reset();
  });
});
