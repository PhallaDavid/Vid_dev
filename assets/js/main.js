/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Close the menu when a link is clicked
const menuLinks = document.querySelectorAll('.nav-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu"; // Close the menu
  });
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["David", "Web Dev", ],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)
function downloadCV() {
  const link = document.createElement('a');
  link.href = 'assets/cv/Phalla David(CV).pdf';
  link.download = 'Phalla David(CV).pdf';  // Optional: specify the name for the downloaded file
  link.click();
}
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');
  
  // Change the icon to reflect the current mode
  const darkModeButton = document.querySelector('.nav-gg-button button');
  if (document.body.classList.contains('dark-mode')) {
      darkModeButton.innerHTML = '🌞'; // Sun icon for Light Mode
  } else {
      darkModeButton.innerHTML = '🌙'; // Moon icon for Dark Mode
  }
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  // Get the form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Simple validation to ensure fields are filled
  if(name && email && message) {
      // Here you would send the data to your server or email using JavaScript (AJAX).
      // For now, we'll just show the success message.

      // Display the success message
      document.getElementById('success-message').style.display = 'block';

      // Optionally clear the form fields after submission
      document.getElementById('contactForm').reset();
  } else {
      alert("Please fill in all the fields.");
  }
});
document.getElementById('navLogo').addEventListener('click', function() {
  location.reload(); // Refresh the page
});
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader-wrapper').style.display = 'none'; // Hide the loader
    document.getElementById('main-content').style.display = 'block'; // Show the main content
  }, 1000); // 5000ms = 5 seconds
});


