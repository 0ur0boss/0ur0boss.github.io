// Add JavaScript code for smooth scrolling and setting active link

// Function to handle smooth scrolling when clicking on menu links
function smoothScroll(target) {
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 10; // Adjust the offset as needed
  
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth', // Add a smooth scroll behavior
    });
  }
  
  // Function to set the active link based on the section in the viewport
  function setActiveLink() {
    const sections = document.querySelectorAll('section');
  
    sections.forEach((section) => {
      const link = document.querySelector(`a[href="#${section.id}"]`);
  
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
  
      if (sectionTop <= 0 && sectionBottom >= 0) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  // Attach click event listeners to the menu links
  document.querySelectorAll('.w-nav-link').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default behavior of anchor links
      const target = event.target.getAttribute('href');
      smoothScroll(target);
    });
  });
  
  // Attach scroll event listener to set the active link while scrolling
  window.addEventListener('scroll', () => {
    setActiveLink();
  });
  
  // Set the initial active link on page load
  setActiveLink();
  