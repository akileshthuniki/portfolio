document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation and submission
    const form = document.querySelector('#contact form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Reset form validation
      nameInput.classList.remove('invalid');
      emailInput.classList.remove('invalid');
      messageInput.classList.remove('invalid');
  
      // Perform form validation
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        nameInput.classList.add('invalid');
        isValid = false;
      }
  
      if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('invalid');
        isValid = false;
      }
  
      if (messageInput.value.trim() === '') {
        messageInput.classList.add('invalid');
        isValid = false;
      }
  
      if (isValid) {
        console.log('Form submitted successfully!');
        form.reset();
      }
    });
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Show default tab content
    const skillButtons = document.querySelectorAll('.titleButtons .btn');
    const tabContents = document.querySelectorAll('.tabContent');
  
    function showTabContent(tabId) {
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
  
      const selectedTab = document.getElementById(tabId);
      if (selectedTab) {
        selectedTab.style.display = 'block';
      }
    }
  
    skillButtons.forEach(button => {
      button.addEventListener('click', () => {
        skillButtons.forEach(btn => {
          btn.classList.remove('activeLink');
        });
  
        button.classList.add('activeLink');
  
        const tabId = button.id.replace('Btn', 'Content');
        showTabContent(tabId);
      });
    });
  
    showTabContent('allContent'); // Show the default tab content (All) on page load
  });


  function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_brmqlj9", "template_5mnshma", parms)
        .then(function(response) {
            alert("Email Sent!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            console.error("FAILED...", error);
            alert("Failed to send email. Please try again.");
        });
}
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show');
  });
});


document.addEventListener('DOMContentLoaded', () => {
    // Existing code...
  
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
  
    menuToggle.addEventListener('click', () => {
      navUl.classList.toggle('show');
    });
  
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('show');
      });
    });
  
    // Rest of your existing code...
  });
  
  // Rest of your existing functions...