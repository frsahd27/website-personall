
// script.js - File JavaScript utama

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelector('.nav-links');

    if(navMobile) {
        navMobile.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Smooth Scrolling untuk semua anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterItems(category);
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterBySearch(searchTerm);
        });
    }

    // FAQ Toggles
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            // Close other answers
            faqItems.forEach(otherItem => {
                if(otherItem !== item) {
                    otherItem.querySelector('.faq-answer').style.display = 'none';
                    otherItem.querySelector('.faq-question').classList.remove('active');
                }
            });

            // Toggle current answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.classList.toggle('active');
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if(validateForm(this)) {
                // Here you would typically send the form data to a server
                alert('Pesan telah terkirim! Kami akan menghubungi Anda segera.');
                this.reset();
            }
        });
    }
});

// Filter Functions
function filterItems(category) {
    const items = document.querySelectorAll('[data-category]');
    items.forEach(item => {
        if(category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterBySearch(searchTerm) {
    const items = document.querySelectorAll('.therapy-card, .article-card');
    items.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if(title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Form Validation
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if(!input.value.trim()) {
            isValid = false;
            showError(input, 'Field ini harus diisi');
        } else {
            removeError(input);
        }

        if(input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            showError(input, 'Email tidak valid');
        }
    });

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    if(!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    input.classList.add('error');
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if(error) {
        formGroup.removeChild(error);
    }
    input.classList.remove('error');
}

// Modal Functions
function openModal(content) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Video Player Functions
function playVideo(videoId) {
    const videoContainer = document.getElementById(videoId);
    const video = videoContainer.querySelector('video');
    const thumbnail = videoContainer.querySelector('.video-thumbnail');
    
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
}

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

function loadImage(image) {
    const src = image.getAttribute('data-src');
    if(!src) return;
    image.src = src;
}

// Animation on Scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if(isElementInViewport(element)) {
            element.classList.add('animated');
        }
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



