'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    registrationForm.reset();
  });
});
