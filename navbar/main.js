const menuSandwich = document.querySelector('.menu-sandwich');
const navLinks = document.querySelector('.nav-links');

menuSandwich.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});


