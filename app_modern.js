// Restaurant website interactions without language translation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const reserveButtons = document.querySelectorAll('.menu-action');
const menuFilters = document.querySelectorAll('.category-btn');
const menuItems = document.querySelectorAll('.menu-item');
const fadeElements = document.querySelectorAll('.fade-in-up');
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');
const themeToggle = document.querySelector('.theme-toggle');
const themeToggleText = document.querySelector('.theme-toggle-text');
const root = document.documentElement;
const aboutParallax = document.querySelector('.about-parallax');

// ===== PREMIUM MOUSE EFFECTS =====
const cursorDot = document.querySelector('.cursor-dot');
const cursorFollower = document.querySelector('.cursor-follower');
const lightFollower = document.querySelector('.light-follower');

window.addEventListener('mousemove', e => {
    const { clientX: x, clientY: y } = e;

    if (cursorDot) {
        cursorDot.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (cursorFollower) {
        cursorFollower.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
    }
    if (lightFollower) {
        lightFollower.style.transform = `translate(${x - 400}px, ${y - 400}px)`;
    }
});

function applyTheme(theme) {
    if (theme === 'light') {
        root.dataset.theme = 'light';
    } else {
        delete root.dataset.theme;
    }

    const isLight = theme === 'light';
    themeToggle?.setAttribute('aria-pressed', String(isLight));
    themeToggle?.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');

    if (themeToggleText) {
        themeToggleText.textContent = isLight ? 'Dark' : 'Light';
    }
}

const initialTheme = localStorage.getItem('westwood-theme') || 'dark';
applyTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('westwood-theme', nextTheme);
    applyTheme(nextTheme);
});

function closeMobileNav() {
    navMenu?.classList.remove('active');
    navToggle?.classList.remove('active');
}

navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileNav();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (!targetId || !targetId.startsWith('#')) return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

menuFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.category || 'all';

        menuFilters.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');

        menuItems.forEach(item => {
            const matches = filter === 'all' || item.dataset.category === filter;
            if (matches) {
                item.style.display = 'grid';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.transition = 'all 0.3s ease';
                item.style.opacity = '0';
                item.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

reserveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dishName = button.dataset.dish;
        const requestInput = document.getElementById('requests');

        if (requestInput && dishName) {
            requestInput.value = `Looking forward to enjoying ${dishName}. Please reserve the best table.`;
            requestInput.focus();
        }

        const reservationSection = document.getElementById('reservation');
        if (reservationSection) {
            const top = reservationSection.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

const socialFeed = [
    'New booking confirmed for Chef\'s Table this Friday.',
    'A 5-star guest review just posted on Instagram.',
    'Private dining room reserved for a VIP celebration.',
    'Tonight\'s lobster course is the most requested item.',
    'Chef\'s signature dish sold out for the weekend.',
    'Exclusive wine pairing dinner available next month.'
];

const ticker = document.querySelector('.social-ticker');
let feedIndex = 0;

function rotateFeed() {
    if (!ticker) return;

    ticker.style.opacity = '0';
    ticker.style.transform = 'translateY(10px)';

    setTimeout(() => {
        feedIndex = (feedIndex + 1) % socialFeed.length;
        ticker.innerHTML = `<strong>Live feed:</strong> ${socialFeed[feedIndex]}`;
        ticker.style.transition = 'all 0.5s ease';
        ticker.style.opacity = '1';
        ticker.style.transform = 'translateY(0)';
    }, 250);
}

if (ticker) {
    setInterval(rotateFeed, 5200);
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-overlay');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (navbar) {
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    if (aboutParallax) {
        const offset = window.scrollY * Number(aboutParallax.dataset.speed || 0.22);
        aboutParallax.style.transform = `translateY(${offset}px)`;
    }

    const currentScroll = window.scrollY + 120;
    navLinks.forEach(link => {
        if (!link.hash) return;
        const section = document.querySelector(link.hash);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (currentScroll >= top && currentScroll < bottom) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 200);

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-overlay .nav-link');

    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});

if (bookingForm) {
    bookingForm.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(bookingForm);
        const submitButton = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitButton?.textContent || 'Confirm Reservation';
        const reservationOverlay = document.getElementById('reservation-success-overlay');
        const reservationContent = reservationOverlay.querySelector('.reservation-success-content');

        // Show loading animation
        if (reservationOverlay) {
            reservationOverlay.style.display = 'flex';
            setTimeout(() => {
                reservationOverlay.style.opacity = '1';
            }, 10);
        }

        if (submitButton) {
            submitButton.textContent = 'Booking...';
            submitButton.disabled = true;
        }

        try {
            const response = await fetch('data.php', { method: 'POST', body: formData });
            const result = await response.json();

            if (result.status === 'success') {
                // Populate summary card
                document.getElementById('summary-reservation-id').textContent = `ID: ${result.reservation_id}`;
                document.getElementById('summary-name').textContent = result.name;
                document.getElementById('summary-date').textContent = result.date;
                document.getElementById('summary-time').textContent = result.time;
                document.getElementById('summary-guests').textContent = result.guests;

                // Show success screen
                if (reservationContent) {
                    setTimeout(() => {
                        reservationContent.style.opacity = '1';
                        reservationContent.style.transform = 'scale(1)';
                    }, 500);
                }
            } else {
                // Handle error
                if (reservationOverlay) {
                    reservationOverlay.style.display = 'none';
                    reservationOverlay.style.opacity = '0';
                }
                alert(result.message);
            }
        } catch (error) {
            if (reservationOverlay) {
                reservationOverlay.style.display = 'none';
                reservationOverlay.style.opacity = '0';
            }
            alert('Something went wrong. Please try again or contact us directly.');
            console.error(error);
        }

        if (submitButton) {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}
