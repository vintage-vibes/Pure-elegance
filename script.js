const pages = document.querySelectorAll('.page');
const cards = document.querySelectorAll('.testimonial-container .card');
const cardsPerPage = 2;

// Function to show cards based on page
function showPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
        card.style.display = (index >= start && index < end) ? 'flex' : 'none';
    });

    pages.forEach(p => p.classList.remove('active'));
    pages[page - 1].classList.add('active');
}

// Initial display
showPage(1);

// Add click event to pages
pages.forEach(p => {
    p.addEventListener('click', () => {
        const pageNumber = parseInt(p.getAttribute('data-page'));
        showPage(pageNumber);
    });
});






// gallery


const galleries = {
    'nails': [
        'image/pure.13.jpg',
        'image/pure.14.jpg',
        'image/pure.23.jpg'
    ],
    'braids': [
        'image/pure.10.jpg',
        'image/pure.11.jpg',
        'image/pure.38.jpeg'
    ],
    'mini-cornrows': [
        'image/pure.5.jpg',
        'image/pure.26.jpg',
        'image/pure.29.jpg',
        // 'images/mini2.jpg'
    ],
    'beaded-braids': [
        'image/pure.17.jpg',
        'image/pure.16.jpg'
    ],
    'weaves': [
        'image/pure.35.jpg',
        'image/pure.36.jpg',
        'image/pure.37.jpg',
        
    ]
};

function openGallery(service) {
    const modal = document.getElementById('galleryModal');
    const content = document.getElementById('galleryContent');
    content.innerHTML = ''; // clear previous images

    galleries[service].forEach(img => {
        const image = document.createElement('img');
        image.src = img;
        content.appendChild(image);
    });

    modal.style.display = 'block';
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}



const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("menu-overlay");

// menuToggle.addEventListener("click", () => {
//     menuToggle.classList.toggle("active");
//     navLinks.classList.toggle("active");
//     overlay.classList.toggle("active");
// });

// // CLOSE MENU WHEN CLICK LINK
// document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//         menuToggle.classList.remove("active");
//         navLinks.classList.remove("active");
//         overlay.classList.remove("active");
//     });
// });


// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         closeMenu();
//     }
// });
  

function toggleMenu() {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
}

// CLICK BURGER
menuToggle.addEventListener("click", toggleMenu);

// CLICK OVERLAY (outside menu)
overlay.addEventListener("click", closeMenu);

// PRESS ESC KEY
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});

// CLICK LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
});