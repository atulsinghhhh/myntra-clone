// JavaScript for Myntra Clone

const searchInput = document.querySelector('.search');
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    }
});

// Navbar Buttons
const profile = document.querySelector('.profile');
const wishlist = document.querySelector('.wishlist');
const bag = document.querySelector('.bag');

profile.addEventListener('click', () => {
    alert('Navigating to Profile...');
});

wishlist.addEventListener('click', () => {
    alert('Navigating to Wishlist...');
});

bag.addEventListener('click', () => {
    alert('Navigating to Bag...');
});

// Responsive Navbar (Optional: If a mobile menu is added)
const navItems = document.querySelector('nav ul');
const toggleMenu = document.createElement('button');
toggleMenu.innerText = '☰';
toggleMenu.classList.add('menu-toggle');

document.querySelector('header').prepend(toggleMenu);

toggleMenu.addEventListener('click', () => {
    navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
});

// Smooth Scroll for Footer Links
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1); // Assume id exists
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Section not found!');
        }
    });
});
