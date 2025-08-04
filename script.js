
document.querySelectorAll('.experience').forEach(experience => {
    experience.addEventListener('mouseenter', () =>{
        const fill = experience.querySelector('.progress-fill');
        const target = fill.getAttribute('data-progress');
        fill.style.width = target;

    });
    experience.addEventListener('mouseleave', () => {
        const fill = experience.querySelector('.progress-fill');
        fill.style.width = '0';
    });
});

  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });