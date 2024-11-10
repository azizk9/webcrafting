
// Get DOM elements
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');
const body = document.body;

// Toggle navbar visibility on hamburger menu click
hamburgerMenu.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
  body.classList.toggle('no-scroll'); // Optional: prevent body from scrolling when menu is open
});

// Close menu when clicking outside the navbar
window.addEventListener('click', function (e) {
  if (!navbarLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarLinks.classList.remove('active');
    body.classList.remove('no-scroll');
  }
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    body.classList.remove('no-scroll');
  });
});

// Get the elements
const watchBtn = document.getElementById('watchBtn');
const videoSection = document.getElementById('videoSection');
const closeVideo = document.getElementById('closeVideo');

document.getElementById('watchBtn').addEventListener('click', function () {
  document.getElementById('videoSection').style.display = 'block';
  document.getElementById('video').play();
});

document.getElementById('closeVideo').addEventListener('click', function () {
  document.getElementById('videoSection').style.display = 'none';
  document.getElementById('video').pause();
  document.getElementById('video').currentTime = 0;
});

// Open the review form modal
function openReviewForm() {
  document.getElementById('review-form-modal').style.display = 'flex';
}

// Close the review form modal
function closeReviewForm() {
  document.getElementById('review-form-modal').style.display = 'none';
}

// Function to handle form submission (optional)
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('user-name').value;
  const email = document.getElementById('user-email').value;
  const phone = document.getElementById('user-phone').value;
  const reviewText = document.getElementById('review-text').value;
  
  // Add your review submission logic here
  console.log('Review Submitted:', { name, email, phone, reviewText });

  // Close the modal after submission
  closeReviewForm();
});


   // Get all FAQ items
   const faqItems = document.querySelectorAll('.faq-item');

   // Loop through each FAQ item
   faqItems.forEach(item => {
       const faqToggle = item.querySelector('.faq-toggle'); // Get the toggle icon
       const faqAnswer = item.querySelector('.faq-answer'); // Get the answer section

       // Initially hide all answers
       faqAnswer.style.display = 'none';

       // Add click event to toggle the FAQ answer
       faqToggle.addEventListener('click', () => {
           // Toggle the 'open' class on the FAQ item
           item.classList.toggle('open');

           // Check if the FAQ item is open
           if (item.classList.contains('open')) {
               faqAnswer.style.display = 'block'; // Show the answer
           } else {
               faqAnswer.style.display = 'none'; // Hide the answer
           }
       });
   });