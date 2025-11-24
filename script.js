// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Show success message
        alert(`Thanks ${name}! Your message has been sent. I'll get back to you soon at ${email}`);

        // Reset form
        this.reset();

        // In a real application, you would send this data to a backend service
        console.log({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section > div, .timeline-item, .tool-box, .edu-card, .project-card, .experiment-card, .redesign-item, .article-card, .contact-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect on hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Animate progress bars
const animateProgressBars = () => {
    const progressFills = document.querySelectorAll('.progress-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressFills.forEach(fill => {
        observer.observe(fill);
    });
};

document.addEventListener('DOMContentLoaded', animateProgressBars);

// Add hover effects to 3D boxes
document.querySelectorAll('[class*="3d"]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        // Apply subtle 3D effect
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Highlight active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = 'bold';
        } else {
            link.style.color = '';
            link.style.fontWeight = '';
        }
    });
});

// Add ripple effect on button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Mobile menu toggle (if needed)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Countdown or stats animation
const animateStats = () => {
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateNumber = (element) => {
        const fullText = element.textContent.trim();
        const target = parseInt(fullText);
        const hasPlus = fullText.includes('+');
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = (hasPlus ? '+' : '') + target;
                clearInterval(timer);
            } else {
                element.textContent = (hasPlus ? '+' : '') + Math.floor(current);
            }
        }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
                animateNumber(entry.target);
                entry.target.setAttribute('data-animated', 'true');
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
};

document.addEventListener('DOMContentLoaded', animateStats);

// Add some interactive features
console.log('%c Welcome to my portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c Thanks for visiting. Feel free to connect with me!', 'color: #764ba2; font-size: 14px;');

function copyEmailToClipboard(button) {
    const email = "msenithi004@gmail.com";

    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Visual feedback
        const textSpan = button.querySelector("#copyText");
        const originalText = textSpan.innerText;

        // Change text to "Copied!" and button color to green
        textSpan.innerText = "Copied!";
        button.style.backgroundColor = "#28a745"; // Green color

        // Reset after 2 seconds
        setTimeout(() => {
            textSpan.innerText = originalText;
            button.style.backgroundColor = "#6c757d"; // Revert to grey
        }, 2000);
    });
}