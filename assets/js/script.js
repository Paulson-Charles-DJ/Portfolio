
const offcanvasLinks = document.querySelectorAll('.offcanvas-link');
const offcanvasElement = document.getElementById('offcanvasNavbar');

offcanvasLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));

    // For mobile devices
    if (window.innerWidth < 768) {
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      
      // To Hide the offcanvas menu for mobile devices
      if (offcanvas) {
        offcanvas.hide();
      }

      // Scroll to the section after offcanvas hides
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }, 300);  // Can Adjust the delay based on offcanvas hide duration
    } 
    else {
      // For medium and larger screens, to scroll to the section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
