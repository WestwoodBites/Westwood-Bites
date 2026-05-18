// Professional restaurant website interactions
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
const languageSelect = document.querySelector('.language-select');

const translations = {
    ms: {
        'Language': 'Bahasa',
        'Select language': 'Pilih bahasa',
        'Hours of operation icon': 'Ikon waktu operasi',
        'Location icon': 'Ikon lokasi',
        'Contact icon': 'Ikon hubungi',
        'Home': 'Utama',
        'About': 'Tentang',
        'Menu': 'Menu',
        'Gallery': 'Galeri',
        'Reserve': 'Tempah',
        'Book a Table': 'Tempah Meja',
        'Light': 'Cerah',
        'Dark': 'Gelap',
        'Sophisticated Dining Experience': 'Pengalaman Santapan Mewah',
        'Westwood Bites': 'Westwood Bites',
        'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': 'Tempat seni kulinari bertemu detik yang tidak dapat dilupakan. Nikmati gabungan tradisi dan inovasi di tengah Kuala Lumpur.',
        'Reserve Your Table': 'Tempah Meja Anda',
        'Explore Our Menu': 'Terokai Menu Kami',
        'Years of Excellence': 'Tahun Kecemerlangan',
        'Seasonal Menus': 'Menu Bermusim',
        'Guest Satisfaction': 'Kepuasan Tetamu',
        'Our Story': 'Kisah Kami',
        'Heritage, Craft & Modern Excellence': 'Warisan, Kemahiran & Kecemerlangan Moden',
        'Chef Marcus Chen grew up in lantern-lit kitchens across Penang, learning how simplicity and precision transform the ordinary into something unforgettable. At Westwood Bites, his narrative is expressed through carefully curated courses, moody lighting, and a seamless reservation flow that removes friction before the meal begins.': 'Chef Marcus Chen membesar di dapur-dapur bercahaya tanglung di Pulau Pinang, mempelajari bagaimana kesederhanaan dan ketelitian mengubah hidangan biasa menjadi sesuatu yang tidak terlupakan.',
        'Our philosophy centers on the idea that every plate should feel like a whispered story. Each reservation should feel effortless, every space should feel intimate, and every guest should leave with an experience worth sharing.': 'Falsafah kami ialah setiap pinggan harus terasa seperti kisah yang dibisikkan. Setiap tempahan harus mudah, setiap ruang harus intim, dan setiap tetamu pulang dengan pengalaman yang wajar dikongsi.',
        "Chef's Heritage": 'Warisan Chef',
        'Asian spice palettes meet classic French structure, plated with the drama of modern fine dining.': 'Palet rempah Asia bertemu struktur Perancis klasik, disajikan dengan drama santapan moden.',
        'Modern Innovation': 'Inovasi Moden',
        'Cutting-edge techniques combined with time-honored traditions create unforgettable culinary experiences.': 'Teknik terkini digabungkan dengan tradisi lama untuk mencipta pengalaman kulinari yang tidak terlupakan.',
        'Michelin Star': 'Bintang Michelin',
        'James Beard Nominee': 'Calon James Beard',
        "Asia's Best Chef 2023": 'Chef Terbaik Asia 2023',
        'Meet Chef Marcus Chen': 'Temui Chef Marcus Chen',
        'Marcus Chen brings modern precision and rich storytelling to every dish, guided by ingredients sourced from across Malaysia and beyond.': 'Marcus Chen membawa ketelitian moden dan penceritaan mendalam ke setiap hidangan, berpandukan bahan dari seluruh Malaysia dan luar negara.',
        'Executive Chef & Culinary Director': 'Chef Eksekutif & Pengarah Kulinari',
        "Chef Marcus Chen's culinary journey began in his grandmother's kitchen in Penang, where he first discovered the transformative power of fresh ingredients and traditional techniques. After training at prestigious institutions including Le Cordon Bleu Paris and sous chef positions at three-Michelin-starred restaurants, Marcus returned to Malaysia with a vision to create contemporary fine dining that honors both heritage and innovation.": 'Perjalanan kulinari Chef Marcus Chen bermula di dapur neneknya di Pulau Pinang. Selepas latihan di institusi berprestij termasuk Le Cordon Bleu Paris dan pengalaman di restoran berbintang Michelin, beliau kembali ke Malaysia dengan visi santapan moden yang menghormati warisan dan inovasi.',
        "His signature style blends the bold flavors of Southeast Asia with classical French techniques, resulting in dishes that are both familiar and extraordinary. Marcus's commitment to excellence has earned Westwood Bites international recognition and a loyal following of discerning food lovers.": 'Gaya istimewanya menggabungkan rasa berani Asia Tenggara dengan teknik Perancis klasik, menghasilkan hidangan yang mesra tetapi luar biasa.',
        '"Cooking is not just about feeding the body - it\'s about nourishing the soul and creating memories that last a lifetime."': '"Memasak bukan sekadar mengenyangkan tubuh - ia menyuburkan jiwa dan mencipta kenangan sepanjang hayat."',
        '- Chef Marcus Chen': '- Chef Marcus Chen',
        'Years of Culinary Artistry': 'Tahun Seni Kulinari',
        'Michelin Star Background': 'Latar Bintang Michelin',
        'Digital menu': 'Menu Digital',
        'Interactive tasting experiences without the PDF friction.': 'Pengalaman rasa interaktif tanpa kesukaran PDF.',
        'Each dish is presented with evocative storytelling, clear pricing, and instant access to reserve the table that best matches your evening.': 'Setiap hidangan dipersembahkan dengan cerita menarik, harga jelas, dan akses segera untuk menempah meja.',
        'All': 'Semua',
        'Starters': 'Pembuka Selera',
        'Mains': 'Hidangan Utama',
        'Dessert': 'Pencuci Mulut',
        'Drinks': 'Minuman',
        'Signature': 'Istimewa',
        'Main': 'Utama',
        "Chef's Favorite": 'Pilihan Chef',
        'Comfort': 'Selesa',
        'Starter': 'Pembuka',
        'Classic': 'Klasik',
        'Fresh': 'Segar',
        'Shared': 'Kongsi',
        'Seafood': 'Makanan Laut',
        'Champagne': 'Champagne',
        'Prestige': 'Prestij',
        'No Alcohol': 'Tanpa Alkohol',
        'Smoked': 'Berasap',
        'Guest moments': 'Detik Tetamu',
        'Real-time social dining experiences from our table to yours.': 'Pengalaman sosial santapan masa nyata dari meja kami ke meja anda.',
        'A curated gallery of guest stories, chef highlights, and plated moments that feel like the most shareable part of your evening.': 'Galeri terpilih kisah tetamu, sorotan chef, dan detik hidangan yang indah untuk dikongsi.',
        'Curated Dining Experiences': 'Pengalaman Santapan Terpilih',
        'Beyond exceptional cuisine, we offer unforgettable moments': 'Selain masakan luar biasa, kami menawarkan detik yang tidak terlupakan',
        'Private Dining Room': 'Bilik Santapan Peribadi',
        'Wine Connoisseur Experience': 'Pengalaman Peminat Wain',
        "Chef's Table Experience": 'Pengalaman Meja Chef',
        'Reserve Your Experience': 'Tempah Pengalaman Anda',
        "Secure your table at Kuala Lumpur's premier fine dining destination": 'Dapatkan meja anda di destinasi santapan mewah utama Kuala Lumpur',
        'Hours of Operation': 'Waktu Operasi',
        'Tuesday - Sunday: 6:00 PM - 11:00 PM': 'Selasa - Ahad: 6:00 PM - 11:00 PM',
        'Monday: Closed': 'Isnin: Tutup',
        'Location': 'Lokasi',
        'Contact': 'Hubungi',
        'Dining Policies': 'Polisi Santapan',
        'Smart casual attire required': 'Pakaian smart casual diperlukan',
        'Reservations recommended': 'Tempahan digalakkan',
        '15-minute grace period for reservations': 'Tempoh toleransi tempahan 15 minit',
        'Cancellation policy: 24 hours notice': 'Polisi pembatalan: notis 24 jam',
        'Full Name': 'Nama Penuh',
        'Email Address': 'Alamat E-mel',
        'Phone Number': 'Nombor Telefon',
        'Preferred Date': 'Tarikh Pilihan',
        'Preferred Time': 'Masa Pilihan',
        'Number of Guests': 'Bilangan Tetamu',
        'Select guests': 'Pilih tetamu',
        '1 Guest': '1 Tetamu',
        '2 Guests': '2 Tetamu',
        '4 Guests': '4 Tetamu',
        '6+ Guests': '6+ Tetamu',
        'Special Occasion': 'Majlis Istimewa',
        'None': 'Tiada',
        'Birthday': 'Hari Lahir',
        'Anniversary': 'Ulang Tahun',
        'Business Dinner': 'Makan Malam Perniagaan',
        'Special Requests': 'Permintaan Khas',
        'Dietary restrictions...': 'Sekatan diet...',
        'Confirm Reservation': 'Sahkan Tempahan',
        'Admin Login': 'Log Masuk Admin',
        'Staff Login': 'Log Masuk Staf',
        'Culinary Excellence in PENANG': 'Kecemerlangan Kulinari di Pulau Pinang',
        'Dining': 'Santapan',
        'Experiences': 'Pengalaman',
        'Reservations': 'Tempahan',
        'Private Events': 'Acara Peribadi',
        'Chef Marcus': 'Chef Marcus',
        'Awards': 'Anugerah',
        'Press': 'Media',
        'Live feed:': 'Suapan langsung:',
        'New table reserved in 3 minutes - Chef\'s Table fully booked this weekend - 5-star review just posted on Instagram': 'Meja baharu ditempah dalam 3 minit - Meja Chef penuh hujung minggu ini - ulasan 5 bintang baru dimuat naik di Instagram'
    },
    es: {},
    fr: {},
    de: {},
    it: {},
    pt: {},
    ar: {}
};

Object.assign(translations.es, {
    'Language': 'Idioma',
    'Select language': 'Seleccionar idioma',
    'Hours of operation icon': 'Icono de horario',
    'Location icon': 'Icono de ubicacion',
    'Contact icon': 'Icono de contacto',
    'Home': 'Inicio',
    'About': 'Acerca de',
    'Gallery': 'Galeria',
    'Reserve': 'Reservar',
    'Book a Table': 'Reservar Mesa',
    'Light': 'Claro',
    'Dark': 'Oscuro',
    'Sophisticated Dining Experience': 'Experiencia Gastronomica Sofisticada',
    'Reserve Your Table': 'Reserva tu Mesa',
    'Explore Our Menu': 'Explora Nuestro Menu',
    'Our Story': 'Nuestra Historia',
    'Meet Chef Marcus Chen': 'Conoce al Chef Marcus Chen',
    'Digital menu': 'Menu Digital',
    'All': 'Todo',
    'Starters': 'Entrantes',
    'Mains': 'Principales',
    'Dessert': 'Postres',
    'Drinks': 'Bebidas',
    'Guest moments': 'Momentos de Invitados',
    'Curated Dining Experiences': 'Experiencias Gastronomicas Seleccionadas',
    'Reserve Your Experience': 'Reserva tu Experiencia',
    'Hours of Operation': 'Horario',
    'Location': 'Ubicacion',
    'Contact': 'Contacto',
    'Dining Policies': 'Politicas del Restaurante',
    'Full Name': 'Nombre Completo',
    'Email Address': 'Correo Electronico',
    'Phone Number': 'Telefono',
    'Preferred Date': 'Fecha Preferida',
    'Preferred Time': 'Hora Preferida',
    'Number of Guests': 'Numero de Invitados',
    'Special Occasion': 'Ocasion Especial',
    'Special Requests': 'Solicitudes Especiales',
    'Dietary restrictions...': 'Restricciones dieteticas...',
    'Confirm Reservation': 'Confirmar Reserva',
    'Dining': 'Cena',
    'Experiences': 'Experiencias',
    'Reservations': 'Reservas',
    'Private Events': 'Eventos Privados',
    'Press': 'Prensa',
    'Live feed:': 'En directo:'
});

Object.assign(translations.fr, {
    'Language': 'Langue',
    'Select language': 'Choisir la langue',
    'Hours of operation icon': 'Icone des horaires',
    'Location icon': 'Icone de localisation',
    'Contact icon': 'Icone de contact',
    'Home': 'Accueil',
    'About': 'A propos',
    'Gallery': 'Galerie',
    'Reserve': 'Reserver',
    'Book a Table': 'Reserver une Table',
    'Light': 'Clair',
    'Dark': 'Sombre',
    'Sophisticated Dining Experience': 'Experience Gastronomique Raffinee',
    'Reserve Your Table': 'Reservez Votre Table',
    'Explore Our Menu': 'Decouvrir le Menu',
    'Our Story': 'Notre Histoire',
    'Meet Chef Marcus Chen': 'Rencontrez le Chef Marcus Chen',
    'Digital menu': 'Menu Numerique',
    'All': 'Tous',
    'Starters': 'Entrees',
    'Mains': 'Plats',
    'Dessert': 'Dessert',
    'Drinks': 'Boissons',
    'Guest moments': 'Moments des Invites',
    'Curated Dining Experiences': 'Experiences de Table Selectionnees',
    'Reserve Your Experience': 'Reservez Votre Experience',
    'Hours of Operation': 'Horaires',
    'Location': 'Adresse',
    'Contact': 'Contact',
    'Dining Policies': 'Regles de Service',
    'Full Name': 'Nom Complet',
    'Email Address': 'Adresse E-mail',
    'Phone Number': 'Telephone',
    'Preferred Date': 'Date Souhaitee',
    'Preferred Time': 'Heure Souhaitee',
    'Number of Guests': 'Nombre de Convives',
    'Special Occasion': 'Occasion Speciale',
    'Special Requests': 'Demandes Speciales',
    'Confirm Reservation': 'Confirmer la Reservation',
    'Dining': 'Table',
    'Experiences': 'Experiences',
    'Reservations': 'Reservations',
    'Private Events': 'Evenements Prives',
    'Press': 'Presse',
    'Live feed:': 'En direct:'
});

Object.assign(translations.de, {
    'Language': 'Sprache',
    'Select language': 'Sprache auswahlen',
    'Hours of operation icon': 'Symbol fur Offnungszeiten',
    'Location icon': 'Standortsymbol',
    'Contact icon': 'Kontaktsymbol',
    'Home': 'Start',
    'About': 'Uber Uns',
    'Gallery': 'Galerie',
    'Reserve': 'Reservieren',
    'Book a Table': 'Tisch Buchen',
    'Light': 'Hell',
    'Dark': 'Dunkel',
    'Sophisticated Dining Experience': 'Gehobenes Kulinarisches Erlebnis',
    'Reserve Your Table': 'Tisch Reservieren',
    'Explore Our Menu': 'Menu Entdecken',
    'Our Story': 'Unsere Geschichte',
    'Meet Chef Marcus Chen': 'Chef Marcus Chen Kennenlernen',
    'Digital menu': 'Digitales Menu',
    'All': 'Alle',
    'Starters': 'Vorspeisen',
    'Mains': 'Hauptgerichte',
    'Dessert': 'Dessert',
    'Drinks': 'Getranke',
    'Reserve Your Experience': 'Erlebnis Reservieren',
    'Hours of Operation': 'Offnungszeiten',
    'Location': 'Standort',
    'Dining Policies': 'Restaurantregeln',
    'Full Name': 'Vollstandiger Name',
    'Email Address': 'E-Mail-Adresse',
    'Phone Number': 'Telefonnummer',
    'Preferred Date': 'Wunschdatum',
    'Preferred Time': 'Wunschzeit',
    'Number of Guests': 'Anzahl der Gaste',
    'Special Occasion': 'Besonderer Anlass',
    'Special Requests': 'Besondere Wunsche',
    'Confirm Reservation': 'Reservierung Bestatigen',
    'Dining': 'Dining',
    'Private Events': 'Private Veranstaltungen',
    'Press': 'Presse',
    'Live feed:': 'Live-Feed:'
});

Object.assign(translations.it, {
    'Language': 'Lingua',
    'Select language': 'Seleziona lingua',
    'Hours of operation icon': 'Icona orari',
    'Location icon': 'Icona posizione',
    'Contact icon': 'Icona contatto',
    'Home': 'Home',
    'About': 'Chi Siamo',
    'Gallery': 'Galleria',
    'Reserve': 'Prenota',
    'Book a Table': 'Prenota un Tavolo',
    'Light': 'Chiaro',
    'Dark': 'Scuro',
    'Sophisticated Dining Experience': 'Esperienza Gastronomica Raffinata',
    'Reserve Your Table': 'Prenota il Tuo Tavolo',
    'Explore Our Menu': 'Esplora il Menu',
    'Our Story': 'La Nostra Storia',
    'Meet Chef Marcus Chen': 'Incontra lo Chef Marcus Chen',
    'Digital menu': 'Menu Digitale',
    'Starters': 'Antipasti',
    'Mains': 'Portate Principali',
    'Drinks': 'Bevande',
    'Reserve Your Experience': 'Prenota la Tua Esperienza',
    'Hours of Operation': 'Orari di Apertura',
    'Location': 'Posizione',
    'Dining Policies': 'Regole di Sala',
    'Full Name': 'Nome Completo',
    'Email Address': 'Indirizzo Email',
    'Phone Number': 'Numero di Telefono',
    'Preferred Date': 'Data Preferita',
    'Preferred Time': 'Ora Preferita',
    'Number of Guests': 'Numero di Ospiti',
    'Special Occasion': 'Occasione Speciale',
    'Special Requests': 'Richieste Speciali',
    'Confirm Reservation': 'Conferma Prenotazione',
    'Private Events': 'Eventi Privati',
    'Press': 'Stampa',
    'Live feed:': 'Aggiornamenti:'
});

Object.assign(translations.pt, {
    'Language': 'Idioma',
    'Select language': 'Selecionar idioma',
    'Hours of operation icon': 'Icone de horario',
    'Location icon': 'Icone de localizacao',
    'Contact icon': 'Icone de contato',
    'Home': 'Inicio',
    'About': 'Sobre',
    'Gallery': 'Galeria',
    'Reserve': 'Reservar',
    'Book a Table': 'Reservar Mesa',
    'Light': 'Claro',
    'Dark': 'Escuro',
    'Sophisticated Dining Experience': 'Experiencia Gastronomica Sofisticada',
    'Reserve Your Table': 'Reserve a Sua Mesa',
    'Explore Our Menu': 'Explore o Nosso Menu',
    'Our Story': 'A Nossa Historia',
    'Meet Chef Marcus Chen': 'Conheca o Chef Marcus Chen',
    'Starters': 'Entradas',
    'Mains': 'Pratos Principais',
    'Drinks': 'Bebidas',
    'Reserve Your Experience': 'Reserve a Sua Experiencia',
    'Hours of Operation': 'Horario de Funcionamento',
    'Location': 'Localizacao',
    'Dining Policies': 'Politicas de Jantar',
    'Full Name': 'Nome Completo',
    'Email Address': 'Endereco de Email',
    'Phone Number': 'Numero de Telefone',
    'Preferred Date': 'Data Preferida',
    'Preferred Time': 'Hora Preferida',
    'Number of Guests': 'Numero de Convidados',
    'Special Occasion': 'Ocasion Especial',
    'Special Requests': 'Pedidos Especiais',
    'Confirm Reservation': 'Confirmar Reserva',
    'Private Events': 'Eventos Privados',
    'Press': 'Imprensa',
    'Live feed:': 'Ao vivo:'
});

Object.assign(translations.ar, {
    'Language': 'اللغة',
    'Select language': 'اختر اللغة',
    'Hours of operation icon': 'أيقونة ساعات العمل',
    'Location icon': 'أيقونة الموقع',
    'Contact icon': 'أيقونة الاتصال',
    'Home': 'الرئيسية',
    'About': 'عن المطعم',
    'Menu': 'القائمة',
    'Gallery': 'المعرض',
    'Reserve': 'احجز',
    'Book a Table': 'احجز طاولة',
    'Light': 'فاتح',
    'Dark': 'داكن',
    'Sophisticated Dining Experience': 'تجربة طعام راقية',
    'Reserve Your Table': 'احجز طاولتك',
    'Explore Our Menu': 'استكشف قائمتنا',
    'Our Story': 'قصتنا',
    'Meet Chef Marcus Chen': 'تعرف على الشيف ماركوس تشين',
    'Digital menu': 'قائمة رقمية',
    'All': 'الكل',
    'Starters': 'المقبلات',
    'Mains': 'الأطباق الرئيسية',
    'Dessert': 'الحلويات',
    'Drinks': 'المشروبات',
    'Reserve Your Experience': 'احجز تجربتك',
    'Hours of Operation': 'ساعات العمل',
    'Location': 'الموقع',
    'Contact': 'اتصال',
    'Dining Policies': 'سياسات المطعم',
    'Full Name': 'الاسم الكامل',
    'Email Address': 'البريد الإلكتروني',
    'Phone Number': 'رقم الهاتف',
    'Preferred Date': 'التاريخ المفضل',
    'Preferred Time': 'الوقت المفضل',
    'Number of Guests': 'عدد الضيوف',
    'Special Occasion': 'مناسبة خاصة',
    'Special Requests': 'طلبات خاصة',
    'Confirm Reservation': 'تأكيد الحجز',
    'Dining': 'الطعام',
    'Experiences': 'التجارب',
    'Reservations': 'الحجوزات',
    'Private Events': 'فعاليات خاصة',
    'Press': 'الصحافة',
    'Live feed:': 'مباشر:'
});

const textNodeMap = new WeakMap();
const attrMap = new WeakMap();
let currentLanguage = localStorage.getItem('westwood-language') || 'en';

function translateValue(value, language) {
    if (language === 'en') return value;
    return translations[language]?.[value] || value;
}

function preserveSpacing(original, translated) {
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    return `${leading}${translated}${trailing}`;
}

function collectTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            if (node.parentElement?.closest('script, style')) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
        if (!textNodeMap.has(node)) {
            textNodeMap.set(node, node.textContent.trim());
        }
    });
}

function collectAttributes() {
    document.querySelectorAll('[placeholder], [aria-label], [alt], [data-dish]').forEach(element => {
        if (!attrMap.has(element)) {
            attrMap.set(element, {
                placeholder: element.getAttribute('placeholder'),
                ariaLabel: element.getAttribute('aria-label'),
                alt: element.getAttribute('alt'),
                dish: element.getAttribute('data-dish')
            });
        }
    });
}

function applyLanguage(language) {
    const lang = translations[language] || language === 'en' ? language : 'en';
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    collectTextNodes();
    collectAttributes();

    document.querySelectorAll('body *').forEach(element => {
        [...element.childNodes].forEach(node => {
            if (node.nodeType !== Node.TEXT_NODE || !textNodeMap.has(node)) return;
            const source = textNodeMap.get(node);
            const translated = translateValue(source, lang);
            node.textContent = preserveSpacing(node.textContent, translated);
        });
    });

    document.querySelectorAll('[placeholder], [aria-label], [alt], [data-dish]').forEach(element => {
        const source = attrMap.get(element);
        if (!source) return;
        if (source.placeholder) element.setAttribute('placeholder', translateValue(source.placeholder, lang));
        if (source.ariaLabel) element.setAttribute('aria-label', translateValue(source.ariaLabel, lang));
        if (source.alt) element.setAttribute('alt', translateValue(source.alt, lang));
        if (source.dish) element.setAttribute('data-dish', translateValue(source.dish, lang));
    });

    const currentTheme = root.dataset.theme === 'light' ? 'light' : 'dark';
    applyTheme(currentTheme);
    localStorage.setItem('westwood-language', lang);
    if (languageSelect) languageSelect.value = lang;
}

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
        themeToggleText.textContent = translateValue(isLight ? 'Dark' : 'Light', currentLanguage);
    }
}

const initialTheme = localStorage.getItem('westwood-theme') || 'dark';
applyTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('westwood-theme', nextTheme);
    applyTheme(nextTheme);
});

languageSelect?.addEventListener('change', () => {
    applyLanguage(languageSelect.value);
});

applyLanguage(currentLanguage);

// Mobile navigation toggle
function toggleNav() {
    if (!navMenu) return;
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
}
navToggle?.addEventListener('click', toggleNav);

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const target = document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-overlay');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// Menu filtering with enhanced animations
menuFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.category || 'all';

        menuFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        menuItems.forEach(item => {
            const matches = filter === 'all' || item.dataset.category === filter;
            if (matches) {
                item.style.display = 'block';
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

// Reservation form handling
bookingForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);

    bookingMessage.textContent = 'Processing your reservation...';
    bookingMessage.style.color = '#d4af37';

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        bookingMessage.textContent = 'Reservation confirmed! We look forward to welcoming you.';
        bookingMessage.style.color = '#4CAF50';
        bookingForm.reset();
    } catch (error) {
        bookingMessage.textContent = 'Sorry, there was an error. Please try again.';
        bookingMessage.style.color = '#f44336';
    }
});

// Parallax effect for about section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.about-parallax');

    parallaxElements.forEach(el => {
        const rate = scrolled * -0.5;
        el.style.transform = `translateY(${rate}px)`;
    });
});

// Initialize page with enhanced immersive experience
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 200);

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-overlay .nav-link');

    const updateActiveNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
});

menuFilters.forEach(button => {
    button.addEventListener('click', () => {
        menuFilters.forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;
        menuItems.forEach(item => {
            const matches = category === 'all' || item.dataset.category === category;
            item.style.display = matches ? 'grid' : 'none';
            if (matches) {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });
});

// Add hover effects for menu items
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.02)';
        item.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
    });
});

reserveButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dishName = button.dataset.dish;
        const requestInput = document.getElementById('requests');
        if (requestInput) {
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
        ticker.innerHTML = `<strong>${translateValue('Live feed:', currentLanguage)}</strong> ${translateValue(socialFeed[feedIndex], currentLanguage)}`;
        ticker.style.transition = 'all 0.5s ease';
        ticker.style.opacity = '1';
        ticker.style.transform = 'translateY(0)';
    }, 250);
}
setInterval(rotateFeed, 5200);

window.addEventListener('scroll', () => {
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

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar-overlay .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const top = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

if (bookingForm) {
    bookingForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(bookingForm);
        const submitButton = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Booking...';
        submitButton.disabled = true;
        try {
            const response = await fetch('data.php', { method: 'POST', body: formData });
            const result = await response.text();
            bookingMessage.textContent = result;
            bookingMessage.style.color = result.toLowerCase().includes('success') ? 'var(--accent)' : '#f65b5b';
        } catch (error) {
            bookingMessage.textContent = 'Something went wrong. Please try again or contact us directly.';
            bookingMessage.style.color = '#f65b5b';
            console.error(error);
        }
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
}

