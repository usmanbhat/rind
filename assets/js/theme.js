const themeToggleBtn = document.querySelector('.theme-toggle button');
const themeIcon = document.querySelector('.theme-toggle i');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.querySelector('.theme-toggle i').className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'light' ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  setTheme(localStorage.getItem('theme') || 'light');
});