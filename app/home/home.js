'use strict';

const loginEL = document.getElementById('login');
const registerEL = document.getElementById('register');
const userNameEl = document.getElementById('user-name');

const [userName, userEmail] = document.cookie.split(';');

const isUserLogged = !!userName;

if (isUserLogged) {
  loginEL.classList.add('hidden');
  registerEL.classList.add('hidden');
  userNameEl.classList.remove('hidden');
  userNameEl.textContent = userName.split('=')[1];
}
