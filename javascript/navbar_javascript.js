document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];
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
    const linkHref = link.querySelector('a').getAttribute('href').split('.')[0];
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
    
    link.addEventListener('click', () => {
      menuLinks.forEach((link) => {
        link.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
});

  // Back button
  function goBack() {
    window.history.back();
  }
