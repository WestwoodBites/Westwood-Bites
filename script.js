// Menu data with images
const menuData = [
    {
        id: 1,
        name: "Garlic Bread",
        category: "appetizers",
        price: "$5.99",
        description: "Crispy bread with garlic butter and herbs",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64761?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Caesar Salad",
        category: "appetizers",
        price: "$7.99",
        description: "Fresh romaine lettuce with parmesan and croutons",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Spring Rolls",
        category: "appetizers",
        price: "$6.99",
        description: "Crispy rolls filled with vegetables and shrimp",
        image: "https://images.unsplash.com/photo-1605787020514-7a5f42944010?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Grilled Salmon",
        category: "main",
        price: "$18.99",
        description: "Fresh salmon fillet with lemon butter sauce",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Ribeye Steak",
        category: "main",
        price: "$24.99",
        description: "Premium cut steak cooked to perfection",
        image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Chicken Parmesan",
        category: "main",
        price: "$14.99",
        description: "Breaded chicken with marinara and melted cheese",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        name: "Pasta Carbonara",
        category: "main",
        price: "$13.99",
        description: "Creamy Italian pasta with bacon and egg",
        image: "https://images.unsplash.com/photo-1612874742237-6526221fcf0f?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        name: "Chocolate Cake",
        category: "desserts",
        price: "$6.99",
        description: "Rich dark chocolate cake with frosting",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        name: "Cheesecake",
        category: "desserts",
        price: "$7.99",
        description: "Classic New York style cheesecake",
        image: "https://images.unsplash.com/photo-1540319549336-e6e99c3679fe?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        name: "Ice Cream Sundae",
        category: "desserts",
        price: "$5.99",
        description: "Vanilla ice cream with chocolate sauce and toppings",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        name: "Iced Tea",
        category: "drinks",
        price: "$2.99",
        description: "Refreshing cold iced tea",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64761?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        name: "Soft Drink",
        category: "drinks",
        price: "$2.49",
        description: "Coca-Cola, Sprite, or Fanta",
        image: "https://images.unsplash.com/photo-1544252602-02582ff8efe9?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        name: "Fresh Lemonade",
        category: "drinks",
        price: "$3.99",
        description: "Freshly squeezed lemonade with ice",
        image: "https://images.unsplash.com/photo-1585518419759-87ec1ec7e1a0?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        name: "Wine Selection",
        category: "drinks",
        price: "$8.99",
        description: "Red, white, or rosé wine by the glass",
        image: "https://images.unsplash.com/photo-1510812431401-3d8f62eae93d?w=400&h=300&fit=crop"
    }
];

// Initialize menu on page load
document.addEventListener('DOMContentLoaded', function() {
    displayMenu('all');
    setupFilterButtons();
    setupHamburgerMenu();
    setupFormSubmission();
    setupNavLinks();
});

// Display menu items with images
function displayMenu(category) {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    filteredItems.forEach((item, index) => {
        const menuItem = createMenuItemElement(item);
        menuContainer.appendChild(menuItem);
        
        // Add stagger animation
        setTimeout(() => {
            menuItem.style.opacity = '1';
        }, index * 50);
    });
}

// Create menu item HTML element with image
function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.style.opacity = '0';
    div.innerHTML = `
        <div class="menu-item-image" style="background-image: url('${item.image}')"></div>
        <div class="menu-item-content">
            <div class="category">${item.category}</div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="menu-item-price">${item.price}</div>
        </div>
    `;
    return div;
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Display filtered menu
            const category = this.getAttribute('data-filter');
            displayMenu(category);
        });
    });
}

// Setup hamburger menu for mobile
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.flexDirection = 'column';
                navLinks.style.backgroundColor = '#2c2c2c';
                navLinks.style.gap = '0';
                navLinks.style.padding = '1rem 0';
            }
        });
    }
}

// Close mobile menu when a link is clicked
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navLinksContainer = document.querySelector('.nav-links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinksContainer) {
                navLinksContainer.style.display = 'none';
            }
        });
    });
}

// Setup form submission
function setupFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Show success message
            alert(`Thank you ${name}! Your message has been sent. We will get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Smooth scroll to menu
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scrolling for all navigation links
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

// Add scroll animation for elements
function addScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-item, .feature').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimation();
});

// Add keyboard navigation for better accessibility
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        }
    }
});
