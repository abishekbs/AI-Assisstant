// auth.js

function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login successful";
  }
  return "Invalid credentials";
}

function logout(user) {
  return `User ${user} logged out`;
}

module.exports = { login, logout };
