document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.menu');
    const backBtn = document.querySelector('.back-btn');
    
    burgerIcon.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
    
    backBtn.addEventListener('click', () => {
      menu.classList.remove('show');
    });
    
    document.addEventListener('click', (event) => {
      if (!event.target.closest('header') && menu.classList.contains('show')) {
        menu.classList.remove('show');
      }
    });
    const menuLinks = document.querySelectorAll('.menu li');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});
    
  });

