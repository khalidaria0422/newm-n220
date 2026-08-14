'use strict';

const users = []; // Database

// Register vars
const usernameRegister = document.getElementById('username');
const passwordRegister = document.getElementById('password');
const passwordConfirmRegister = document.getElementById('confirm-password');
const register = document.getElementById('register');
const welcomeRegister = document.getElementById('welcome-register');
const error = document.getElementById('error');

// Login vars
const usernameLogin = document.getElementById('username-login');
const passwordLogin = document.getElementById('password-login');
const login = document.getElementById('login');
const welcomeLogin = document.getElementById('welcome-login');

// Validate info, register (store info), welcome user
register.addEventListener('click', () => {
  const usernameRegisterLocal = usernameRegister.value;
  const passwordRegisterLocal = passwordRegister.value;
  const passwordConfirmRegisterLocal = passwordConfirmRegister.value;

  // Check if username is taken
  let userExists;
  users.forEach((user) => {
    if (user.username === usernameRegisterLocal) userExists = true;
  });

  // Input validation
  if (passwordRegisterLocal.length > 10 || passwordRegisterLocal.length < 8) {
    error.textContent = 'Must be between 8-10 characters';
  } else if (passwordRegisterLocal !== passwordConfirmRegisterLocal) {
    error.textContent = 'The passwords must match.';
  } else {
    if (userExists) {
      error.textContent = 'Username already exists.';
      return;
    } else error.textContent = '';

    // Welcome message and field clearing
    welcomeRegister.textContent = `Thank you, ${usernameRegisterLocal} for registering.`;
    welcomeLogin.textContent = '';
    clear();

    // Store user info
    const user = {
      username: usernameRegisterLocal,
      password: passwordRegisterLocal,
    };

    users.push(user);
  }
});

// Validate info, login, and welcome user
login.addEventListener('click', () => {
  let isValid = false;
  users.forEach((user) => {
    if (
      user.username === usernameLogin.value &&
      user.password === passwordLogin.value
    )
      isValid = true;
  });

  if (isValid) {
    welcomeLogin.textContent = 'Congratulations! You are logged in.';
    welcomeRegister.textContent = '';
    clear(true);
  } else
    welcomeLogin.textContent =
      'Your login information does not match those on file. Please try again.';
});

// Clear all input fields
const clear = function (clearMessage = false) {
  usernameRegister.value = '';
  passwordRegister.value = '';
  passwordConfirmRegister.value = '';

  usernameLogin.value = '';
  passwordLogin.value = '';
};
