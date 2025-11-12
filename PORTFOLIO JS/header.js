// In: header.js (Corrected)

document.addEventListener('DOMContentLoaded', () => {

  // --- Sticky Header Shadow ---
  const header = document.querySelector('.header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
  }

  // --- HAMBURGER MENU ---
  const hamburgerBtn = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.header-right');
  const navLinks = document.querySelectorAll('.header-right a');

  if (hamburgerBtn && navMenu) {
    
    // Toggle menu when hamburger is clicked
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav-active');
      
      // Bonus: Change hamburger to 'X' icon
      const icon = hamburgerBtn.querySelector('i');
      if (navMenu.classList.contains('nav-active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
        
        // Reset hamburger icon
        const icon = hamburgerBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
  
  // --- DARK MODE TOGGLE ---
  const nightModeBtn = document.querySelector('.night-mode-btn');
  const nightModeIcon = nightModeBtn ? nightModeBtn.querySelector('i') : null;

  if (nightModeBtn) {
    nightModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        nightModeIcon.classList.remove('fa-moon');
        nightModeIcon.classList.add('fa-sun');
      } else {
        nightModeIcon.classList.remove('fa-sun');
        nightModeIcon.classList.add('fa-moon');
      }
    });
  }
  
});