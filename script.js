const images = document.querySelectorAll('#hero .hero-image img');
let currentIndex = 0;

// Function to change the hero image every 5 seconds
function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Change image every 5 seconds
setInterval(changeImage, 5000);

// Quotes array
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
];

// Display a daily quote with fade effect
function displayQuote() {
    const quoteElement = document.querySelector('#daily-quotes blockquote');
    quoteElement.classList.remove('fade'); // Start with fade out

    setTimeout(() => {
        const date = new Date();
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        const quoteIndex = dayOfYear % quotes.length;
        quoteElement.textContent = quotes[quoteIndex];
        quoteElement.classList.add('fade'); // Fade in after text change
    }, 300); // Timing to match fade out
}

// Call the function to display the quote on page load
displayQuote();

// Toggle navbar visibility on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isActive = navList.classList.contains('active');
    menuToggle.textContent = isActive ? '✖' : '☰';
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
const header = document.querySelector('header');

// Set initial position of the navbar
let isNavbarAtTop = true;

// Function to handle the scroll event
function handleScroll() {
    if (window.scrollY > 0) {
        if (isNavbarAtTop) {
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.zIndex = '10';
            header.style.marginBottom = '60px'; // Add space for navbar
            isNavbarAtTop = false;
        }
    } else {
        if (!isNavbarAtTop) {
            navbar.style.position = 'relative'; // Restore original position
            navbar.style.top = 'initial';
            header.style.marginBottom = '0'; // Remove the extra space
            isNavbarAtTop = true;
        }
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
