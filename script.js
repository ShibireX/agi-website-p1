// Brush trail effect following mouse cursor
document.addEventListener('mousemove', (e) => {
    const trail = document.getElementById('brushTrail');
    
    // Create brush dot
    const dot = document.createElement('div');
    dot.className = 'brush-dot';
    
    // Random size between 10-30px
    const size = Math.random() * 20 + 10;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    
    // Position at mouse coordinates
    dot.style.left = `${e.clientX - size / 2}px`;
    dot.style.top = `${e.clientY - size / 2}px`;
    
    // Random gradient color
    const colors = [
        'linear-gradient(135deg, #667eea, #764ba2)',
        'linear-gradient(135deg, #f093fb, #f5576c)',
        'linear-gradient(135deg, #4facfe, #00f2fe)',
        'linear-gradient(135deg, #43e97b, #38f9d7)',
        'linear-gradient(135deg, #fa709a, #fee140)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.background = randomColor;
    dot.style.opacity = '0.6';
    
    trail.appendChild(dot);
    
    // Remove dot after animation
    setTimeout(() => {
        dot.remove();
    }, 1000);
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all guide items and team members
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.guide-item, .team-member, .github-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add smooth scroll for any anchor links
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
});

// Parallax effect on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (header) {
        const scrolled = scrollTop * 0.5;
        header.style.transform = `translateY(${scrolled}px)`;
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// Add hover effect to placeholder images
document.querySelectorAll('.placeholder-image').forEach(image => {
    image.addEventListener('mouseenter', (e) => {
        const rect = e.currentTarget.querySelector('rect');
        if (rect) {
            rect.style.transition = 'fill 0.3s ease';
        }
    });
});

// Dynamic hover effects for team member avatars
document.querySelectorAll('.member-avatar img, .avatar-placeholder').forEach((avatar) => {
    const teamMember = avatar.closest('.team-member');
    
    if (teamMember) {
        teamMember.addEventListener('mouseenter', () => {
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        teamMember.addEventListener('mouseleave', () => {
            avatar.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});

// Add paint splatter effect on button click
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        const rect = button.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left - 10}px`;
        ripple.style.top = `${e.clientY - rect.top - 10}px`;
        
        button.style.position = 'relative';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
            margin-left: -40px;
            margin-top: -40px;
        }
    }
`;
document.head.appendChild(style);

