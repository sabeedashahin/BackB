  const toggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.site-nav ul');
  const iconSpan = toggleButton.querySelector('.icon');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle icon between ☰ and ×
    if (navMenu.classList.contains('active')) {
      iconSpan.innerHTML = '&times;'; // ×
    } else {
      iconSpan.innerHTML = '&#9776;'; // ☰
    }
  });
