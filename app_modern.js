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

const completeTranslations = {
    ms: {
        'English': 'English',
        '中文': 'Mandarin',
        'Espanol': 'Sepanyol',
        'Malay': 'Malay',
        'Francais': 'Perancis',
        'हिन्दी': 'Hindi',
        '한국어': 'Korea',
        '日本語': 'Jepun',
        'Beef Wellington': 'Beef Wellington',
        'Risotto': 'Risotto',
        'French Onion Soup': 'Sup Bawang Perancis',
        'Caesar Salad': 'Salad Caesar',
        'Paella': 'Paella',
        'Creme Brulee': 'Creme Brulee',
        'Classic Dry Martini': 'Martini Kering Klasik',
        'Perrier-Jouët "Belle Époque"': 'Perrier-Jouet "Belle Epoque"',
        'Smoked Earl Grey Nojito': 'Nojito Earl Grey Berasap',
        'Mushroom and Truffle Risotto': 'Risotto Cendawan dan Trufel',
        'Center-cut beef tenderloin, seared to lock in juices, wrapped in mushroom duxelles and Parma ham, then baked in golden puff pastry. Served with a truffle red wine sauce.': 'Tenderloin daging lembu bahagian tengah, dipanggang untuk mengunci jus, dibalut dengan duxelles cendawan dan Parma ham, lalu dibakar dalam pastri puff keemasan. Dihidangkan dengan sos wain merah trufel.',
        'Arborio rice slowly simmered in seafood or porcini mushroom stock, finished with Parmigiano-Reggiano and topped with shaved black truffle or pan-seared scallops.': 'Beras Arborio dimasak perlahan dalam stok makanan laut atau cendawan porcini, disempurnakan dengan Parmigiano-Reggiano dan ditabur trufel hitam atau scallop panggang.',
        'Caramelized onions simmered in rich beef broth with bay leaves and white wine, topped with toasted Gruyere-crusted baguette slices.': 'Bawang karamel direbus dalam sup daging lembu yang kaya bersama daun bay dan wain putih, dihias dengan kepingan baguette Gruyere bakar.',
        'Crisp romaine tossed in signature Caesar dressing with anchovies, garlic, Parmesan, croutons, bacon bits and shaved Parmesan.': 'Romaine rangup digaul dengan sos Caesar istimewa bersama ikan bilis, bawang putih, Parmesan, crouton, bacon dan Parmesan parut.',
        'Bomba rice infused with saffron and seafood stock, topped with mussels, prawns, squid, chorizo and red peppers. Served with fresh lemon wedges.': 'Beras Bomba beraroma safron dan stok makanan laut, dihias dengan kupang, udang, sotong, chorizo dan lada merah. Dihidangkan bersama hirisan lemon segar.',
        'Vanilla bean custard baked until set and topped with a torched caramel shell. Served with espresso-friendly cane sugar crack.': 'Kastard vanila dibakar hingga lembut dan ditutup dengan lapisan karamel bakar. Dihidangkan dengan rangupan gula tebu.',
        'An icy blend of gin and dry vermouth, finished simply with a twist of lemon peel or a fine olive. Known as the "king of cocktails," this classic delivers a sharp, precise taste with a clean, crisp aroma, making it an excellent aperitif to pair with dishes like Beef Wellington and paella.': 'Campuran sejuk gin dan vermouth kering, disempurnakan dengan kulit lemon atau zaitun. Dikenali sebagai "raja koktel", klasik ini tajam, bersih dan sesuai dipadankan dengan Beef Wellington atau paella.',
        'Renowned for its iconic anemone-patterned bottle, this vintage Champagne is a blend of Chardonnay, Pinot Noir, and Pinot Meunier. Its bubbles are fine and delicate, with elegant aromas of peach, pear, and white flowers. Paired with French onion soup or creme brulee, it instantly elevates the dining experience with a sense of occasion.': 'Terkenal dengan botol bercorak anemone ikonik, Champagne vintaj ini menggabungkan Chardonnay, Pinot Noir dan Pinot Meunier. Buihnya halus dengan aroma pic, pir dan bunga putih.',
        "Crafted especially for guests who prefer not to drink alcohol. This mocktail is built on a base of cold-brewed smoked Earl Grey tea, combined with fresh lime juice, mint leaves, and a touch of honey. Shaken and poured over ice, it's finished with a garnish of orange peel and a sprig of rosemary. The first sip reveals a subtle woody smokiness, followed by the distinctive bergamot aroma of Earl Grey, pairing beautifully with risotto and Caesar salad.": 'Dicipta untuk tetamu yang tidak minum alkohol. Mocktail ini berasaskan teh Earl Grey berasap yang diseduh sejuk, jus limau segar, daun pudina dan madu. Sesuai dipadankan dengan risotto dan salad Caesar.',
        '"The lobster course was breathtaking - every detail felt purposeful."': '"Hidangan lobster sangat menakjubkan - setiap butiran terasa bermakna."',
        '"A perfected evening of elevated taste and impeccable service."': '"Malam yang sempurna dengan cita rasa tinggi dan servis tanpa cela."',
        '"Wine pairing by the sommelier made the evening feel unforgettable."': '"Padanan wain oleh sommelier menjadikan malam itu tidak terlupakan."',
        '"The presentation alone is worth the reservation."': '"Persembahannya sahaja sudah berbaloi untuk ditempah."',
        'Private Dining': 'Santapan Peribadi',
        'Wine Tasting': 'Rasa Wain',
        "Chef's Table": 'Meja Chef',
        'Guest dinner': 'Makan malam tetamu',
        'Shared dessert': 'Pencuci mulut berkongsi',
        'Wine pairing': 'Padanan wain',
        'Chef plating': 'Chef menyusun hidangan',
        'Intimate gatherings for special occasions, featuring personalized menus and dedicated service in our exclusive private dining space.': 'Perhimpunan intim untuk majlis istimewa dengan menu diperibadikan dan layanan khusus di ruang santapan peribadi kami.',
        "Journey through our curated wine collection with our sommelier, featuring rare vintages paired with Chef Marcus's signature dishes.": 'Terokai koleksi wain terpilih bersama sommelier kami, termasuk vintaj nadir yang dipadankan dengan hidangan istimewa Chef Marcus.',
        'An exclusive behind-the-scenes culinary journey where you dine alongside Chef Marcus as he prepares your personalized tasting menu.': 'Perjalanan kulinari eksklusif di sebalik tabir, tempat anda menikmati hidangan bersama Chef Marcus ketika beliau menyediakan menu rasa peribadi anda.',
        'Capacity: 8-12 guests': 'Kapasiti: 8-12 tetamu',
        'Custom menu available': 'Menu khusus tersedia',
        'Duration: 3 hours': 'Tempoh: 3 jam',
        'Premium wine selection': 'Pilihan wain premium',
        'Limited to 6 guests': 'Terhad kepada 6 tetamu',
        'Interactive cooking demonstration': 'Demonstrasi memasak interaktif',
        'All rights reserved.': 'Hak cipta terpelihara.'
    },
    es: {
        'Language': 'Idioma',
        'Select language': 'Seleccionar idioma',
        'Home': 'Inicio',
        'About': 'Acerca de',
        'Menu': 'Menú',
        'Gallery': 'Galería',
        'Reserve': 'Reservar',
        'Book a Table': 'Reservar Mesa',
        'Light': 'Claro',
        'Dark': 'Oscuro',
        'Sophisticated Dining Experience': 'Experiencia Gastronómica Sofisticada',
        'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': 'Donde el arte culinario se encuentra con momentos inolvidables. Disfruta la combinación perfecta de tradición e innovación en el corazón de Kuala Lumpur.',
        'Reserve Your Table': 'Reserva tu Mesa',
        'Explore Our Menu': 'Explora Nuestro Menú',
        'Years of Excellence': 'Años de Excelencia',
        'Seasonal Menus': 'Menús de Temporada',
        'Guest Satisfaction': 'Satisfacción de Clientes',
        'Our Story': 'Nuestra Historia',
        'Heritage, Craft & Modern Excellence': 'Herencia, Oficio y Excelencia Moderna',
        'Chef Marcus Chen grew up in lantern-lit kitchens across Penang, learning how simplicity and precision transform the ordinary into something unforgettable. At Westwood Bites, his narrative is expressed through carefully curated courses, moody lighting, and a seamless reservation flow that removes friction before the meal begins.': 'El chef Marcus Chen creció en cocinas iluminadas por faroles en Penang, aprendiendo cómo la simplicidad y la precisión convierten lo ordinario en algo inolvidable.',
        'Our philosophy centers on the idea that every plate should feel like a whispered story. Each reservation should feel effortless, every space should feel intimate, and every guest should leave with an experience worth sharing.': 'Nuestra filosofía es que cada plato debe sentirse como una historia susurrada. Cada reserva debe ser sencilla, cada espacio íntimo y cada visita digna de compartirse.',
        "Chef's Heritage": 'Herencia del Chef',
        'Asian spice palettes meet classic French structure, plated with the drama of modern fine dining.': 'Especias asiáticas se unen a la estructura francesa clásica, servidas con el dramatismo de la alta cocina moderna.',
        'Modern Innovation': 'Innovación Moderna',
        'Cutting-edge techniques combined with time-honored traditions create unforgettable culinary experiences.': 'Técnicas avanzadas y tradiciones consagradas crean experiencias culinarias inolvidables.',
        'Michelin Star': 'Estrella Michelin',
        'James Beard Nominee': 'Nominado James Beard',
        "Asia's Best Chef 2023": 'Mejor Chef de Asia 2023',
        'Meet Chef Marcus Chen': 'Conoce al Chef Marcus Chen',
        'Marcus Chen brings modern precision and rich storytelling to every dish, guided by ingredients sourced from across Malaysia and beyond.': 'Marcus Chen aporta precisión moderna y narrativa a cada plato, guiado por ingredientes de Malasia y más allá.',
        'Executive Chef & Culinary Director': 'Chef Ejecutivo y Director Culinario',
        "Chef Marcus Chen's culinary journey began in his grandmother's kitchen in Penang, where he first discovered the transformative power of fresh ingredients and traditional techniques. After training at prestigious institutions including Le Cordon Bleu Paris and sous chef positions at three-Michelin-starred restaurants, Marcus returned to Malaysia with a vision to create contemporary fine dining that honors both heritage and innovation.": 'El viaje culinario del chef Marcus Chen comenzó en la cocina de su abuela en Penang. Tras formarse en instituciones prestigiosas y restaurantes con estrellas Michelin, volvió a Malasia con una visión de alta cocina contemporánea.',
        "His signature style blends the bold flavors of Southeast Asia with classical French techniques, resulting in dishes that are both familiar and extraordinary. Marcus's commitment to excellence has earned Westwood Bites international recognition and a loyal following of discerning food lovers.": 'Su estilo combina sabores audaces del sudeste asiático con técnicas francesas clásicas, creando platos familiares y extraordinarios.',
        '"Cooking is not just about feeding the body - it\'s about nourishing the soul and creating memories that last a lifetime."': '"Cocinar no es solo alimentar el cuerpo; es nutrir el alma y crear recuerdos para toda la vida."',
        'Years of Culinary Artistry': 'Años de Arte Culinario',
        'Michelin Star Background': 'Trayectoria Michelin',
        'Digital menu': 'Menú Digital',
        'Interactive tasting experiences without the PDF friction.': 'Experiencias de degustación interactivas sin la fricción de un PDF.',
        'Each dish is presented with evocative storytelling, clear pricing, and instant access to reserve the table that best matches your evening.': 'Cada plato se presenta con una historia evocadora, precios claros y acceso inmediato para reservar.',
        'All': 'Todo',
        'Starters': 'Entrantes',
        'Mains': 'Principales',
        'Dessert': 'Postres',
        'Drinks': 'Bebidas',
        'Signature': 'Insignia',
        'Main': 'Principal',
        "Chef's Favorite": 'Favorito del Chef',
        'Comfort': 'Confort',
        'Starter': 'Entrante',
        'Classic': 'Clásico',
        'Fresh': 'Fresco',
        'Shared': 'Para Compartir',
        'Seafood': 'Mariscos',
        'Champagne': 'Champán',
        'Prestige': 'Prestigio',
        'No Alcohol': 'Sin Alcohol',
        'Smoked': 'Ahumado',
        'Beef Wellington': 'Beef Wellington',
        'Risotto': 'Risotto',
        'French Onion Soup': 'Sopa de Cebolla Francesa',
        'Caesar Salad': 'Ensalada César',
        'Paella': 'Paella',
        'Creme Brulee': 'Creme Brulee',
        'Classic Dry Martini': 'Martini Seco Clásico',
        'Smoked Earl Grey Nojito': 'Nojito de Earl Grey Ahumado',
        'Center-cut beef tenderloin, seared to lock in juices, wrapped in mushroom duxelles and Parma ham, then baked in golden puff pastry. Served with a truffle red wine sauce.': 'Solomillo de res sellado, envuelto en duxelles de champiñones y jamón de Parma, horneado en hojaldre dorado y servido con salsa de vino tinto y trufa.',
        'Arborio rice slowly simmered in seafood or porcini mushroom stock, finished with Parmigiano-Reggiano and topped with shaved black truffle or pan-seared scallops.': 'Arroz Arborio cocido lentamente en caldo de mariscos o porcini, terminado con Parmigiano-Reggiano y trufa negra o vieiras selladas.',
        'Caramelized onions simmered in rich beef broth with bay leaves and white wine, topped with toasted Gruyere-crusted baguette slices.': 'Cebollas caramelizadas en caldo de res con laurel y vino blanco, coronadas con baguette tostada con Gruyere.',
        'Crisp romaine tossed in signature Caesar dressing with anchovies, garlic, Parmesan, croutons, bacon bits and shaved Parmesan.': 'Lechuga romana crujiente con aderezo César, anchoas, ajo, parmesano, crutones, bacon y parmesano laminado.',
        'Bomba rice infused with saffron and seafood stock, topped with mussels, prawns, squid, chorizo and red peppers. Served with fresh lemon wedges.': 'Arroz bomba con azafrán y caldo de mariscos, mejillones, gambas, calamar, chorizo y pimientos rojos. Servido con limón fresco.',
        'Vanilla bean custard baked until set and topped with a torched caramel shell. Served with espresso-friendly cane sugar crack.': 'Crema de vainilla horneada y cubierta con caramelo quemado, servida con crujiente de azúcar de caña.',
        'Guest moments': 'Momentos de Invitados',
        'Real-time social dining experiences from our table to yours.': 'Experiencias sociales en tiempo real desde nuestra mesa hasta la tuya.',
        'A curated gallery of guest stories, chef highlights, and plated moments that feel like the most shareable part of your evening.': 'Una galería curada de historias, momentos del chef y platos memorables.',
        '"The lobster course was breathtaking - every detail felt purposeful."': '"El plato de langosta fue impresionante; cada detalle tuvo intención."',
        '"A perfected evening of elevated taste and impeccable service."': '"Una noche perfecta de gran sabor y servicio impecable."',
        '"Wine pairing by the sommelier made the evening feel unforgettable."': '"El maridaje del sommelier hizo la noche inolvidable."',
        '"The presentation alone is worth the reservation."': '"Solo la presentación ya vale la reserva."',
        'Curated Dining Experiences': 'Experiencias Gastronómicas Seleccionadas',
        'Beyond exceptional cuisine, we offer unforgettable moments': 'Más allá de una cocina excepcional, ofrecemos momentos inolvidables',
        'Private Dining Room': 'Comedor Privado',
        'Wine Connoisseur Experience': 'Experiencia de Vinos',
        "Chef's Table Experience": 'Experiencia Mesa del Chef',
        'Intimate gatherings for special occasions, featuring personalized menus and dedicated service in our exclusive private dining space.': 'Encuentros íntimos para ocasiones especiales con menús personalizados y servicio dedicado.',
        "Journey through our curated wine collection with our sommelier, featuring rare vintages paired with Chef Marcus's signature dishes.": 'Recorre nuestra colección de vinos con el sommelier, con añadas raras junto a platos del chef Marcus.',
        'An exclusive behind-the-scenes culinary journey where you dine alongside Chef Marcus as he prepares your personalized tasting menu.': 'Un viaje culinario exclusivo donde cenas junto al chef Marcus mientras prepara tu menú degustación.',
        'Capacity: 8-12 guests': 'Capacidad: 8-12 invitados',
        'Custom menu available': 'Menú personalizado disponible',
        'Duration: 3 hours': 'Duración: 3 horas',
        'Premium wine selection': 'Selección premium de vinos',
        'Limited to 6 guests': 'Limitado a 6 invitados',
        'Interactive cooking demonstration': 'Demostración culinaria interactiva',
        'Reserve Your Experience': 'Reserva tu Experiencia',
        "Secure your table at Kuala Lumpur's premier fine dining destination": 'Asegura tu mesa en el principal destino de alta cocina de Kuala Lumpur',
        'Hours of Operation': 'Horario',
        'Tuesday - Sunday: 6:00 PM - 11:00 PM': 'Martes - Domingo: 6:00 PM - 11:00 PM',
        'Monday: Closed': 'Lunes: Cerrado',
        'Location': 'Ubicación',
        'Contact': 'Contacto',
        'Dining Policies': 'Políticas del Restaurante',
        'Smart casual attire required': 'Vestimenta smart casual requerida',
        'Reservations recommended': 'Se recomienda reservar',
        '15-minute grace period for reservations': '15 minutos de tolerancia',
        'Cancellation policy: 24 hours notice': 'Cancelación: aviso con 24 horas',
        'Full Name': 'Nombre Completo',
        'Email Address': 'Correo Electrónico',
        'Phone Number': 'Teléfono',
        'Preferred Date': 'Fecha Preferida',
        'Preferred Time': 'Hora Preferida',
        'Number of Guests': 'Número de Invitados',
        'Select guests': 'Selecciona invitados',
        '1 Guest': '1 Invitado',
        '2 Guests': '2 Invitados',
        '4 Guests': '4 Invitados',
        '6+ Guests': '6+ Invitados',
        'Special Occasion': 'Ocasión Especial',
        'None': 'Ninguna',
        'Birthday': 'Cumpleaños',
        'Anniversary': 'Aniversario',
        'Business Dinner': 'Cena de Negocios',
        'Special Requests': 'Solicitudes Especiales',
        'Dietary restrictions...': 'Restricciones dietéticas...',
        'Confirm Reservation': 'Confirmar Reserva',
        'Culinary Excellence in PENANG': 'Excelencia Culinaria en Penang',
        'Dining': 'Cena',
        'Experiences': 'Experiencias',
        'Reservations': 'Reservas',
        'Private Events': 'Eventos Privados',
        'Chef Marcus': 'Chef Marcus',
        'Awards': 'Premios',
        'Press': 'Prensa',
        'Admin Login': 'Acceso Admin',
        'Staff Login': 'Acceso Personal',
        'All rights reserved.': 'Todos los derechos reservados.',
        'Live feed:': 'En directo:',
        'New table reserved in 3 minutes - Chef\'s Table fully booked this weekend - 5-star review just posted on Instagram': 'Nueva mesa reservada en 3 minutos - Mesa del Chef completa este fin de semana - reseña de 5 estrellas publicada en Instagram'
    }
};

completeTranslations.zh = {
    'Language': '语言', 'Select language': '选择语言', 'Home': '首页', 'About': '关于', 'Menu': '菜单', 'Gallery': '图库', 'Reserve': '预订', 'Book a Table': '预订餐桌', 'Light': '浅色', 'Dark': '深色',
    'Sophisticated Dining Experience': '精致餐饮体验', 'Westwood Bites': 'Westwood Bites', 'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': '在这里，烹饪艺术与难忘时刻相遇。于吉隆坡中心体验传统与创新的完美融合。', 'Reserve Your Table': '预订您的餐桌', 'Explore Our Menu': '探索菜单',
    'Years of Excellence': '卓越年资', 'Seasonal Menus': '季节菜单', 'Guest Satisfaction': '宾客满意度', 'Our Story': '我们的故事', 'Heritage, Craft & Modern Excellence': '传承、匠心与现代卓越',
    'Chef Marcus Chen grew up in lantern-lit kitchens across Penang, learning how simplicity and precision transform the ordinary into something unforgettable. At Westwood Bites, his narrative is expressed through carefully curated courses, moody lighting, and a seamless reservation flow that removes friction before the meal begins.': 'Marcus Chen 主厨成长于槟城灯火温暖的厨房，学习如何以简约与精准把平凡变成难忘。Westwood Bites 以精心设计的菜式、氛围灯光与顺畅预订体验讲述他的故事。',
    'Our philosophy centers on the idea that every plate should feel like a whispered story. Each reservation should feel effortless, every space should feel intimate, and every guest should leave with an experience worth sharing.': '我们的理念是每一道菜都像一段低声讲述的故事。每次预订都应轻松，每个空间都应亲密，每位宾客都应带走值得分享的体验。',
    "Chef's Heritage": '主厨传承', 'Asian spice palettes meet classic French structure, plated with the drama of modern fine dining.': '亚洲香料风味结合经典法式结构，以现代高级餐饮的戏剧感呈现。', 'Modern Innovation': '现代创新', 'Cutting-edge techniques combined with time-honored traditions create unforgettable culinary experiences.': '前沿技法结合悠久传统，创造难忘的美食体验。',
    'Michelin Star': '米其林星级', 'James Beard Nominee': 'James Beard 提名', "Asia's Best Chef 2023": '2023 亚洲最佳主厨', 'Meet Chef Marcus Chen': '认识 Marcus Chen 主厨', 'Executive Chef & Culinary Director': '行政主厨兼餐饮总监',
    'Marcus Chen brings modern precision and rich storytelling to every dish, guided by ingredients sourced from across Malaysia and beyond.': 'Marcus Chen 将现代精准与丰富叙事融入每道菜，灵感来自马来西亚及世界各地的食材。',
    "Chef Marcus Chen's culinary journey began in his grandmother's kitchen in Penang, where he first discovered the transformative power of fresh ingredients and traditional techniques. After training at prestigious institutions including Le Cordon Bleu Paris and sous chef positions at three-Michelin-starred restaurants, Marcus returned to Malaysia with a vision to create contemporary fine dining that honors both heritage and innovation.": 'Marcus Chen 主厨的烹饪旅程始于槟城祖母的厨房。他在巴黎蓝带等名校受训，并曾在米其林三星餐厅担任副主厨，随后回到马来西亚，打造兼具传承与创新的现代高级餐饮。',
    "His signature style blends the bold flavors of Southeast Asia with classical French techniques, resulting in dishes that are both familiar and extraordinary. Marcus's commitment to excellence has earned Westwood Bites international recognition and a loyal following of discerning food lovers.": '他的标志风格融合东南亚大胆风味与法式经典技法，创造熟悉又非凡的菜品。',
    '"Cooking is not just about feeding the body - it\'s about nourishing the soul and creating memories that last a lifetime."': '“烹饪不只是滋养身体，更是滋养灵魂，并创造一生难忘的回忆。”',
    '- Chef Marcus Chen': '- Marcus Chen 主厨', 'Years of Culinary Artistry': '烹饪艺术年资', 'Michelin Star Background': '米其林星级背景', 'Digital menu': '电子菜单', 'Interactive tasting experiences without the PDF friction.': '无需 PDF 的互动品鉴体验。', 'Each dish is presented with evocative storytelling, clear pricing, and instant access to reserve the table that best matches your evening.': '每道菜都有生动叙事、清晰价格，并可立即预订最适合您夜晚的餐桌。',
    'All': '全部', 'Starters': '前菜', 'Mains': '主菜', 'Dessert': '甜点', 'Drinks': '饮品', 'Signature': '招牌', 'Main': '主菜', "Chef's Favorite": '主厨推荐', 'Comfort': '暖心', 'Starter': '前菜', 'Classic': '经典', 'Fresh': '清新', 'Shared': '共享', 'Seafood': '海鲜', 'Champagne': '香槟', 'Prestige': '尊贵', 'No Alcohol': '无酒精', 'Smoked': '烟熏',
    'Beef Wellington': '惠灵顿牛排', 'Risotto': '意式烩饭', 'French Onion Soup': '法式洋葱汤', 'Caesar Salad': '凯撒沙拉', 'Paella': '西班牙海鲜饭', 'Creme Brulee': '焦糖布丁', 'Classic Dry Martini': '经典干马天尼', 'Smoked Earl Grey Nojito': '烟熏伯爵无酒精莫吉托',
    'Center-cut beef tenderloin, seared to lock in juices, wrapped in mushroom duxelles and Parma ham, then baked in golden puff pastry. Served with a truffle red wine sauce.': '中心切牛柳煎封锁汁，包裹蘑菇馅与帕尔马火腿，再以金黄酥皮烘烤，配松露红酒汁。',
    'Arborio rice slowly simmered in seafood or porcini mushroom stock, finished with Parmigiano-Reggiano and topped with shaved black truffle or pan-seared scallops.': 'Arborio 米以海鲜或牛肝菌高汤慢煮，加入帕玛森奶酪，配黑松露片或香煎扇贝。',
    'Caramelized onions simmered in rich beef broth with bay leaves and white wine, topped with toasted Gruyere-crusted baguette slices.': '焦糖洋葱与月桂叶、白酒在浓郁牛肉汤中慢炖，覆以烤格鲁耶尔芝士法棍。',
    'Crisp romaine tossed in signature Caesar dressing with anchovies, garlic, Parmesan, croutons, bacon bits and shaved Parmesan.': '爽脆罗马生菜配招牌凯撒酱、凤尾鱼、蒜、帕玛森、面包丁、培根碎与芝士片。',
    'Bomba rice infused with saffron and seafood stock, topped with mussels, prawns, squid, chorizo and red peppers. Served with fresh lemon wedges.': 'Bomba 米吸收藏红花与海鲜高汤，配青口、虾、鱿鱼、辣香肠和红椒，附新鲜柠檬。',
    'Vanilla bean custard baked until set and topped with a torched caramel shell. Served with espresso-friendly cane sugar crack.': '香草籽蛋奶冻烘烤成型，覆以炙烧焦糖脆壳，配蔗糖脆片。',
    'Guest moments': '宾客时刻', 'Real-time social dining experiences from our table to yours.': '从我们的餐桌到您的视角，实时分享餐饮体验。', 'A curated gallery of guest stories, chef highlights, and plated moments that feel like the most shareable part of your evening.': '精选宾客故事、主厨亮点与精美摆盘瞬间。',
    '"The lobster course was breathtaking - every detail felt purposeful."': '“龙虾菜式令人惊艳，每个细节都很有意义。”', '"A perfected evening of elevated taste and impeccable service."': '“精致风味与无可挑剔服务成就完美夜晚。”', '"Wine pairing by the sommelier made the evening feel unforgettable."': '“侍酒师的配酒让这个夜晚难以忘怀。”', '"The presentation alone is worth the reservation."': '“光是摆盘就值得预订。”',
    'Curated Dining Experiences': '精选餐饮体验', 'Beyond exceptional cuisine, we offer unforgettable moments': '除了非凡美食，我们也提供难忘时刻', 'Private Dining Room': '私人餐厅', 'Wine Connoisseur Experience': '葡萄酒鉴赏体验', "Chef's Table Experience": '主厨餐桌体验',
    'Intimate gatherings for special occasions, featuring personalized menus and dedicated service in our exclusive private dining space.': '适合特别场合的私密聚会，提供个性化菜单与专属服务。', "Journey through our curated wine collection with our sommelier, featuring rare vintages paired with Chef Marcus's signature dishes.": '跟随侍酒师探索精选酒藏，以珍稀年份搭配 Marcus 主厨招牌菜。', 'An exclusive behind-the-scenes culinary journey where you dine alongside Chef Marcus as he prepares your personalized tasting menu.': '独家幕后美食之旅，与 Marcus 主厨一同体验专属品鉴菜单。',
    'Capacity: 8-12 guests': '容量：8-12 位宾客', 'Custom menu available': '可定制菜单', 'Duration: 3 hours': '时长：3 小时', 'Premium wine selection': '高级葡萄酒精选', 'Limited to 6 guests': '限 6 位宾客', 'Interactive cooking demonstration': '互动烹饪示范',
    'Reserve Your Experience': '预订您的体验', "Secure your table at Kuala Lumpur's premier fine dining destination": '在吉隆坡高级餐饮目的地预订您的餐桌', 'Hours of Operation': '营业时间', 'Tuesday - Sunday: 6:00 PM - 11:00 PM': '周二至周日：晚上 6:00 - 11:00', 'Monday: Closed': '周一：休息', 'Location': '地点', 'Contact': '联系', 'Dining Policies': '用餐政策', 'Smart casual attire required': '需穿着优雅休闲装', 'Reservations recommended': '建议提前预订', '15-minute grace period for reservations': '预订保留 15 分钟', 'Cancellation policy: 24 hours notice': '取消政策：请提前 24 小时通知',
    'Full Name': '姓名', 'Email Address': '电子邮箱', 'Phone Number': '电话号码', 'Preferred Date': '首选日期', 'Preferred Time': '首选时间', 'Number of Guests': '宾客人数', 'Select guests': '选择人数', '1 Guest': '1 位宾客', '2 Guests': '2 位宾客', '4 Guests': '4 位宾客', '6+ Guests': '6 位以上', 'Special Occasion': '特别场合', 'None': '无', 'Birthday': '生日', 'Anniversary': '纪念日', 'Business Dinner': '商务晚餐', 'Special Requests': '特别要求', 'Dietary restrictions...': '饮食限制...', 'Confirm Reservation': '确认预订',
    'Culinary Excellence in PENANG': '槟城卓越美食', 'Dining': '餐饮', 'Experiences': '体验', 'Reservations': '预订', 'Private Events': '私人活动', 'Chef Marcus': 'Marcus 主厨', 'Awards': '奖项', 'Press': '媒体', 'Admin Login': '管理员登录', 'Staff Login': '员工登录', 'All rights reserved.': '版权所有。', 'Live feed:': '实时动态:', 'New table reserved in 3 minutes - Chef\'s Table fully booked this weekend - 5-star review just posted on Instagram': '3 分钟内新增餐桌预订 - 本周末主厨餐桌已满 - Instagram 刚发布 5 星评价'
};

completeTranslations.hi = {
    'Language': 'भाषा', 'Select language': 'भाषा चुनें', 'Home': 'मुख्य पृष्ठ', 'About': 'परिचय', 'Menu': 'मेनू', 'Gallery': 'गैलरी', 'Reserve': 'आरक्षित करें', 'Book a Table': 'टेबल बुक करें', 'Light': 'हल्का', 'Dark': 'गहरा',
    'Sophisticated Dining Experience': 'परिष्कृत भोजन अनुभव', 'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': 'जहां पाक कला यादगार पलों से मिलती है। कुआलालंपुर के हृदय में परंपरा और नवाचार का सुंदर संगम अनुभव करें।', 'Reserve Your Table': 'अपनी टेबल आरक्षित करें', 'Explore Our Menu': 'हमारा मेनू देखें',
    'Years of Excellence': 'उत्कृष्टता के वर्ष', 'Seasonal Menus': 'मौसमी मेनू', 'Guest Satisfaction': 'अतिथि संतुष्टि', 'Our Story': 'हमारी कहानी', 'Heritage, Craft & Modern Excellence': 'विरासत, कौशल और आधुनिक उत्कृष्टता',
    'Meet Chef Marcus Chen': 'शेफ मार्कस चेन से मिलें', 'Executive Chef & Culinary Director': 'कार्यकारी शेफ और पाक निदेशक', 'Digital menu': 'डिजिटल मेनू', 'All': 'सभी', 'Starters': 'स्टार्टर', 'Mains': 'मुख्य व्यंजन', 'Dessert': 'मिठाई', 'Drinks': 'पेय', 'Reserve Your Experience': 'अपना अनुभव आरक्षित करें',
    'Hours of Operation': 'कार्य समय', 'Location': 'स्थान', 'Contact': 'संपर्क', 'Dining Policies': 'भोजन नीतियां', 'Full Name': 'पूरा नाम', 'Email Address': 'ईमेल पता', 'Phone Number': 'फोन नंबर', 'Preferred Date': 'पसंदीदा तारीख', 'Preferred Time': 'पसंदीदा समय', 'Number of Guests': 'अतिथियों की संख्या', 'Special Occasion': 'विशेष अवसर', 'Special Requests': 'विशेष अनुरोध', 'Confirm Reservation': 'आरक्षण की पुष्टि करें',
    'Beef Wellington': 'बीफ वेलिंगटन', 'Risotto': 'रिसोट्टो', 'French Onion Soup': 'फ्रेंच प्याज सूप', 'Caesar Salad': 'सीज़र सलाद', 'Paella': 'पाएया', 'Creme Brulee': 'क्रीम ब्रूले', 'Classic Dry Martini': 'क्लासिक ड्राई मार्टिनी', 'Smoked Earl Grey Nojito': 'स्मोक्ड अर्ल ग्रे नोजिटो',
    'Guest moments': 'अतिथि क्षण', 'Curated Dining Experiences': 'चुने हुए भोजन अनुभव', 'Beyond exceptional cuisine, we offer unforgettable moments': 'असाधारण भोजन के साथ हम यादगार पल भी देते हैं', 'Private Dining Room': 'निजी डाइनिंग रूम', 'Wine Connoisseur Experience': 'वाइन अनुभव', "Chef's Table Experience": 'शेफ टेबल अनुभव',
    'Tuesday - Sunday: 6:00 PM - 11:00 PM': 'मंगलवार - रविवार: शाम 6:00 - रात 11:00', 'Monday: Closed': 'सोमवार: बंद', 'Smart casual attire required': 'स्मार्ट कैज़ुअल पोशाक आवश्यक', 'Reservations recommended': 'आरक्षण की सलाह दी जाती है', '15-minute grace period for reservations': 'आरक्षण के लिए 15 मिनट की छूट', 'Cancellation policy: 24 hours notice': 'रद्दीकरण नीति: 24 घंटे पहले सूचना',
    'Select guests': 'अतिथि चुनें', '1 Guest': '1 अतिथि', '2 Guests': '2 अतिथि', '4 Guests': '4 अतिथि', '6+ Guests': '6+ अतिथि', 'None': 'कोई नहीं', 'Birthday': 'जन्मदिन', 'Anniversary': 'वर्षगांठ', 'Business Dinner': 'व्यावसायिक रात्रिभोज', 'Dietary restrictions...': 'आहार संबंधी प्रतिबंध...',
    'Dining': 'भोजन', 'Experiences': 'अनुभव', 'Reservations': 'आरक्षण', 'Private Events': 'निजी कार्यक्रम', 'Awards': 'पुरस्कार', 'Press': 'प्रेस', 'Admin Login': 'एडमिन लॉगिन', 'Staff Login': 'स्टाफ लॉगिन', 'Live feed:': 'लाइव अपडेट:'
};

completeTranslations.ko = {
    'Language': '언어', 'Select language': '언어 선택', 'Home': '홈', 'About': '소개', 'Menu': '메뉴', 'Gallery': '갤러리', 'Reserve': '예약', 'Book a Table': '테이블 예약', 'Light': '라이트', 'Dark': '다크',
    'Sophisticated Dining Experience': '세련된 다이닝 경험', 'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': '요리 예술과 잊지 못할 순간이 만나는 곳. 쿠알라룸푸르 중심에서 전통과 혁신의 완벽한 조화를 경험하세요.', 'Reserve Your Table': '테이블 예약하기', 'Explore Our Menu': '메뉴 보기',
    'Years of Excellence': '탁월함의 세월', 'Seasonal Menus': '시즌 메뉴', 'Guest Satisfaction': '고객 만족도', 'Our Story': '우리의 이야기', 'Heritage, Craft & Modern Excellence': '전통, 장인정신과 현대적 탁월함',
    'Meet Chef Marcus Chen': '마커스 첸 셰프 소개', 'Executive Chef & Culinary Director': '총괄 셰프 및 컬리너리 디렉터', 'Digital menu': '디지털 메뉴', 'All': '전체', 'Starters': '스타터', 'Mains': '메인', 'Dessert': '디저트', 'Drinks': '음료', 'Reserve Your Experience': '경험 예약하기',
    'Hours of Operation': '운영 시간', 'Location': '위치', 'Contact': '연락처', 'Dining Policies': '다이닝 정책', 'Full Name': '성명', 'Email Address': '이메일 주소', 'Phone Number': '전화번호', 'Preferred Date': '희망 날짜', 'Preferred Time': '희망 시간', 'Number of Guests': '인원 수', 'Special Occasion': '특별한 날', 'Special Requests': '특별 요청', 'Confirm Reservation': '예약 확인',
    'Beef Wellington': '비프 웰링턴', 'Risotto': '리조토', 'French Onion Soup': '프렌치 어니언 수프', 'Caesar Salad': '시저 샐러드', 'Paella': '파에야', 'Creme Brulee': '크렘 브륄레', 'Classic Dry Martini': '클래식 드라이 마티니', 'Smoked Earl Grey Nojito': '스모크 얼그레이 노히토',
    'Guest moments': '고객의 순간', 'Curated Dining Experiences': '엄선된 다이닝 경험', 'Beyond exceptional cuisine, we offer unforgettable moments': '뛰어난 요리 그 이상, 잊지 못할 순간을 제공합니다', 'Private Dining Room': '프라이빗 다이닝룸', 'Wine Connoisseur Experience': '와인 컨노isseur 경험', "Chef's Table Experience": '셰프 테이블 경험',
    'Tuesday - Sunday: 6:00 PM - 11:00 PM': '화요일 - 일요일: 오후 6:00 - 오후 11:00', 'Monday: Closed': '월요일: 휴무', 'Smart casual attire required': '스마트 캐주얼 복장 필요', 'Reservations recommended': '예약 권장', '15-minute grace period for reservations': '예약 15분 유예', 'Cancellation policy: 24 hours notice': '취소 정책: 24시간 전 통보',
    'Select guests': '인원 선택', '1 Guest': '1명', '2 Guests': '2명', '4 Guests': '4명', '6+ Guests': '6명 이상', 'None': '없음', 'Birthday': '생일', 'Anniversary': '기념일', 'Business Dinner': '비즈니스 디너', 'Dietary restrictions...': '식이 제한...',
    'Dining': '다이닝', 'Experiences': '경험', 'Reservations': '예약', 'Private Events': '프라이빗 이벤트', 'Awards': '수상', 'Press': '언론', 'Admin Login': '관리자 로그인', 'Staff Login': '직원 로그인', 'Live feed:': '실시간 소식:'
};

completeTranslations.ja = {
    'Language': '言語', 'Select language': '言語を選択', 'Home': 'ホーム', 'About': '概要', 'Menu': 'メニュー', 'Gallery': 'ギャラリー', 'Reserve': '予約', 'Book a Table': '席を予約', 'Light': 'ライト', 'Dark': 'ダーク',
    'Sophisticated Dining Experience': '洗練されたダイニング体験', 'Where culinary artistry meets unforgettable moments. Experience the perfect blend of tradition and innovation in the heart of Kuala Lumpur.': '料理芸術と忘れられない瞬間が出会う場所。クアラルンプール中心部で伝統と革新の完璧な融合をお楽しみください。', 'Reserve Your Table': '席を予約する', 'Explore Our Menu': 'メニューを見る',
    'Years of Excellence': '卓越の年数', 'Seasonal Menus': '季節のメニュー', 'Guest Satisfaction': 'ゲスト満足度', 'Our Story': '私たちの物語', 'Heritage, Craft & Modern Excellence': '伝統、技、現代的な卓越性',
    'Meet Chef Marcus Chen': 'マーカス・チェン シェフ紹介', 'Executive Chef & Culinary Director': 'エグゼクティブシェフ兼料理ディレクター', 'Digital menu': 'デジタルメニュー', 'All': 'すべて', 'Starters': '前菜', 'Mains': 'メイン', 'Dessert': 'デザート', 'Drinks': 'ドリンク', 'Reserve Your Experience': '体験を予約',
    'Hours of Operation': '営業時間', 'Location': '場所', 'Contact': '連絡先', 'Dining Policies': 'ダイニングポリシー', 'Full Name': '氏名', 'Email Address': 'メールアドレス', 'Phone Number': '電話番号', 'Preferred Date': '希望日', 'Preferred Time': '希望時間', 'Number of Guests': '人数', 'Special Occasion': '特別な機会', 'Special Requests': '特別なリクエスト', 'Confirm Reservation': '予約を確認',
    'Beef Wellington': 'ビーフウェリントン', 'Risotto': 'リゾット', 'French Onion Soup': 'フレンチオニオンスープ', 'Caesar Salad': 'シーザーサラダ', 'Paella': 'パエリア', 'Creme Brulee': 'クレームブリュレ', 'Classic Dry Martini': 'クラシックドライマティーニ', 'Smoked Earl Grey Nojito': 'スモークアールグレイ ノヒート',
    'Guest moments': 'ゲストの瞬間', 'Curated Dining Experiences': '厳選されたダイニング体験', 'Beyond exceptional cuisine, we offer unforgettable moments': '卓越した料理だけでなく、忘れられない時間を提供します', 'Private Dining Room': 'プライベートダイニングルーム', 'Wine Connoisseur Experience': 'ワイン体験', "Chef's Table Experience": 'シェフズテーブル体験',
    'Tuesday - Sunday: 6:00 PM - 11:00 PM': '火曜 - 日曜: 18:00 - 23:00', 'Monday: Closed': '月曜: 定休日', 'Smart casual attire required': 'スマートカジュアルでお越しください', 'Reservations recommended': '予約をおすすめします', '15-minute grace period for reservations': '予約は15分までお待ちします', 'Cancellation policy: 24 hours notice': 'キャンセルは24時間前までにご連絡ください',
    'Select guests': '人数を選択', '1 Guest': '1名', '2 Guests': '2名', '4 Guests': '4名', '6+ Guests': '6名以上', 'None': 'なし', 'Birthday': '誕生日', 'Anniversary': '記念日', 'Business Dinner': 'ビジネスディナー', 'Dietary restrictions...': '食事制限...',
    'Dining': 'ダイニング', 'Experiences': '体験', 'Reservations': '予約', 'Private Events': 'プライベートイベント', 'Awards': '受賞', 'Press': 'プレス', 'Admin Login': '管理者ログイン', 'Staff Login': 'スタッフログイン', 'Live feed:': 'ライブ情報:'
};

Object.assign(completeTranslations.fr, {
    'Chef Marcus Chen grew up in lantern-lit kitchens across Penang, learning how simplicity and precision transform the ordinary into something unforgettable. At Westwood Bites, his narrative is expressed through carefully curated courses, moody lighting, and a seamless reservation flow that removes friction before the meal begins.': 'Le chef Marcus Chen a grandi dans les cuisines illuminees de Penang, apprenant comment simplicite et precision transforment l ordinaire en souvenir inoubliable.',
    'Our philosophy centers on the idea that every plate should feel like a whispered story. Each reservation should feel effortless, every space should feel intimate, and every guest should leave with an experience worth sharing.': 'Notre philosophie repose sur l idee que chaque assiette doit raconter une histoire discrete. Chaque reservation doit etre simple, chaque espace intime, et chaque client doit repartir avec un moment a partager.',
    'Asian spice palettes meet classic French structure, plated with the drama of modern fine dining.': 'Les epices asiatiques rencontrent la structure francaise classique, servies avec le theatre de la haute cuisine moderne.',
    'Cutting-edge techniques combined with time-honored traditions create unforgettable culinary experiences.': 'Des techniques contemporaines associees a des traditions anciennes creent des experiences culinaires inoubliables.',
    'Marcus Chen brings modern precision and rich storytelling to every dish, guided by ingredients sourced from across Malaysia and beyond.': 'Marcus Chen apporte precision moderne et narration a chaque plat, guide par des ingredients de Malaisie et d ailleurs.',
    "Chef Marcus Chen's culinary journey began in his grandmother's kitchen in Penang, where he first discovered the transformative power of fresh ingredients and traditional techniques. After training at prestigious institutions including Le Cordon Bleu Paris and sous chef positions at three-Michelin-starred restaurants, Marcus returned to Malaysia with a vision to create contemporary fine dining that honors both heritage and innovation.": 'Le parcours du chef Marcus Chen a commence dans la cuisine de sa grand-mere a Penang. Apres une formation prestigieuse, notamment au Cordon Bleu Paris, il est revenu en Malaisie pour creer une haute cuisine contemporaine respectueuse de l heritage et de l innovation.',
    "His signature style blends the bold flavors of Southeast Asia with classical French techniques, resulting in dishes that are both familiar and extraordinary. Marcus's commitment to excellence has earned Westwood Bites international recognition and a loyal following of discerning food lovers.": 'Son style associe les saveurs audacieuses de l Asie du Sud-Est aux techniques francaises classiques, pour des plats familiers et extraordinaires.',
    '"Cooking is not just about feeding the body - it\'s about nourishing the soul and creating memories that last a lifetime."': '"Cuisiner ne consiste pas seulement a nourrir le corps, mais aussi l ame et les souvenirs."',
    'Years of Culinary Artistry': 'Annees d art culinaire',
    'Michelin Star Background': 'Parcours etoile Michelin',
    'Signature': 'Signature',
    'Main': 'Principal',
    "Chef's Favorite": 'Favori du chef',
    'Comfort': 'Reconfort',
    'Starter': 'Entree',
    'Classic': 'Classique',
    'Fresh': 'Frais',
    'Shared': 'A partager',
    'Seafood': 'Fruits de mer',
    'Champagne': 'Champagne',
    'Prestige': 'Prestige',
    'No Alcohol': 'Sans alcool',
    'Smoked': 'Fume',
    'Beef Wellington': 'Boeuf Wellington',
    'Risotto': 'Risotto',
    'French Onion Soup': 'Soupe a l oignon',
    'Caesar Salad': 'Salade Cesar',
    'Paella': 'Paella',
    'Creme Brulee': 'Creme brulee',
    'Classic Dry Martini': 'Dry Martini classique',
    'Smoked Earl Grey Nojito': 'Nojito Earl Grey fume',
    'Center-cut beef tenderloin, seared to lock in juices, wrapped in mushroom duxelles and Parma ham, then baked in golden puff pastry. Served with a truffle red wine sauce.': 'Filet de boeuf saisi, enveloppe de duxelles de champignons et jambon de Parme, puis cuit dans une pate feuilletee doree. Servi avec une sauce au vin rouge et truffe.',
    'Arborio rice slowly simmered in seafood or porcini mushroom stock, finished with Parmigiano-Reggiano and topped with shaved black truffle or pan-seared scallops.': 'Riz Arborio mijote dans un bouillon de fruits de mer ou de cepes, fini au Parmigiano-Reggiano et garni de truffe noire ou de noix de Saint-Jacques poelees.',
    'Caramelized onions simmered in rich beef broth with bay leaves and white wine, topped with toasted Gruyere-crusted baguette slices.': 'Oignons caramelises mijotes dans un riche bouillon de boeuf au laurier et vin blanc, avec baguette grillee au Gruyere.',
    'Crisp romaine tossed in signature Caesar dressing with anchovies, garlic, Parmesan, croutons, bacon bits and shaved Parmesan.': 'Romaine croquante, sauce Cesar signature, anchois, ail, parmesan, croutons, bacon et copeaux de parmesan.',
    'Bomba rice infused with saffron and seafood stock, topped with mussels, prawns, squid, chorizo and red peppers. Served with fresh lemon wedges.': 'Riz bomba au safran et bouillon de fruits de mer, garni de moules, crevettes, calamars, chorizo et poivrons rouges. Servi avec citron frais.',
    'Vanilla bean custard baked until set and topped with a torched caramel shell. Served with espresso-friendly cane sugar crack.': 'Creme a la vanille cuite puis recouverte d une coque de caramel brule, servie avec un croquant de sucre de canne.',
    'An icy blend of gin and dry vermouth, finished simply with a twist of lemon peel or a fine olive. Known as the "king of cocktails," this classic delivers a sharp, precise taste with a clean, crisp aroma, making it an excellent aperitif to pair with dishes like Beef Wellington and paella.': 'Melange glace de gin et vermouth sec, termine par un zeste de citron ou une olive. Un aperitif net et precis, ideal avec le boeuf Wellington ou la paella.',
    'Renowned for its iconic anemone-patterned bottle, this vintage Champagne is a blend of Chardonnay, Pinot Noir, and Pinot Meunier. Its bubbles are fine and delicate, with elegant aromas of peach, pear, and white flowers. Paired with French onion soup or creme brulee, it instantly elevates the dining experience with a sense of occasion.': 'Ce Champagne millesime associe Chardonnay, Pinot Noir et Pinot Meunier. Ses bulles fines revelent peche, poire et fleurs blanches.',
    "Crafted especially for guests who prefer not to drink alcohol. This mocktail is built on a base of cold-brewed smoked Earl Grey tea, combined with fresh lime juice, mint leaves, and a touch of honey. Shaken and poured over ice, it's finished with a garnish of orange peel and a sprig of rosemary. The first sip reveals a subtle woody smokiness, followed by the distinctive bergamot aroma of Earl Grey, pairing beautifully with risotto and Caesar salad.": 'Cree pour les clients qui evitent l alcool, ce mocktail associe Earl Grey fume infuse a froid, citron vert, menthe et miel. Parfait avec le risotto et la salade Cesar.',
    '"The lobster course was breathtaking - every detail felt purposeful."': '"Le plat de homard etait splendide, chaque detail avait du sens."',
    '"A perfected evening of elevated taste and impeccable service."': '"Une soiree parfaite de gout raffine et de service impeccable."',
    '"Wine pairing by the sommelier made the evening feel unforgettable."': '"L accord mets-vins du sommelier a rendu la soiree inoubliable."',
    '"The presentation alone is worth the reservation."': '"La presentation seule vaut la reservation."',
    'Intimate gatherings for special occasions, featuring personalized menus and dedicated service in our exclusive private dining space.': 'Reunions intimes pour occasions speciales, menus personnalises et service dedie dans notre espace prive.',
    "Journey through our curated wine collection with our sommelier, featuring rare vintages paired with Chef Marcus's signature dishes.": 'Parcourez notre cave avec le sommelier, avec des millesimes rares accordes aux plats signatures du chef Marcus.',
    'An exclusive behind-the-scenes culinary journey where you dine alongside Chef Marcus as he prepares your personalized tasting menu.': 'Une experience exclusive en coulisses, ou vous dinez pres du chef Marcus pendant la preparation de votre menu degustation.',
    'Capacity: 8-12 guests': 'Capacite: 8-12 convives',
    'Custom menu available': 'Menu personnalise disponible',
    'Duration: 3 hours': 'Duree: 3 heures',
    'Premium wine selection': 'Selection de vins premium',
    'Limited to 6 guests': 'Limite a 6 convives',
    'Interactive cooking demonstration': 'Demonstration culinaire interactive',
    'Tuesday - Sunday: 6:00 PM - 11:00 PM': 'Mardi - Dimanche: 18h00 - 23h00',
    'Monday: Closed': 'Lundi: ferme',
    'Smart casual attire required': 'Tenue chic decontractee requise',
    'Reservations recommended': 'Reservation recommandee',
    '15-minute grace period for reservations': 'Tolerance de 15 minutes',
    'Cancellation policy: 24 hours notice': 'Annulation: preavis de 24 heures',
    'Select guests': 'Choisir les convives',
    '1 Guest': '1 convive',
    '2 Guests': '2 convives',
    '4 Guests': '4 convives',
    '6+ Guests': '6+ convives',
    'None': 'Aucune',
    'Birthday': 'Anniversaire',
    'Anniversary': 'Anniversaire de mariage',
    'Business Dinner': 'Diner d affaires',
    'Dietary restrictions...': 'Restrictions alimentaires...',
    'Admin Login': 'Connexion admin',
    'Staff Login': 'Connexion equipe',
    'All rights reserved.': 'Tous droits reserves.'
});

const sharedFallback = {
    'Center-cut beef tenderloin, seared to lock in juices, wrapped in mushroom duxelles and Parma ham, then baked in golden puff pastry. Served with a truffle red wine sauce.': {
        hi: 'मध्य कट बीफ टेंडरलॉइन को सीयर कर रस बंद किया गया, मशरूम डक्सेल और Parma ham में लपेटकर सुनहरे पफ पेस्ट्री में बेक किया गया। ट्रफल रेड वाइन सॉस के साथ परोसा जाता है।',
        ko: '육즙을 가둔 센터컷 안심을 버섯 듁셀과 파르마 햄으로 감싸 황금빛 퍼프 페이스트리에 구웠으며, 트러플 레드 와인 소스를 곁들입니다.',
        ja: '中心部の牛フィレを焼き付け、マッシュルームのデュクセルとパルマハムで包み、黄金色のパイ生地で焼き上げます。トリュフ入り赤ワインソースを添えて。'
    },
    'Arborio rice slowly simmered in seafood or porcini mushroom stock, finished with Parmigiano-Reggiano and topped with shaved black truffle or pan-seared scallops.': {
        hi: 'आर्बोरियो चावल को सीफूड या पोर्सिनी स्टॉक में धीमे पकाया गया, Parmigiano-Reggiano से पूरा किया गया और काले ट्रफल या पैन-सीयर्ड स्कैलप्स से सजाया गया।',
        ko: '아르보리오 쌀을 해산물 또는 포르치니 버섯 육수에 천천히 익히고 파르미지아노 레지아노와 블랙 트러플 또는 팬시어드 가리비를 올렸습니다.',
        ja: 'アルボリオ米を魚介またはポルチーニのストックでゆっくり煮込み、パルミジャーノ・レッジャーノで仕上げ、黒トリュフまたは帆立を添えます。'
    },
    'Caramelized onions simmered in rich beef broth with bay leaves and white wine, topped with toasted Gruyere-crusted baguette slices.': {
        hi: 'कैरेमलाइज़्ड प्याज को बे लीफ और व्हाइट वाइन वाले समृद्ध बीफ ब्रॉथ में पकाया गया, ऊपर Gruyere वाली टोस्टेड बैगेट।',
        ko: '캐러멜라이즈한 양파를 월계수 잎과 화이트 와인을 넣은 진한 비프 브로스에 끓이고, 그뤼에르 바게트를 올렸습니다.',
        ja: 'キャラメリゼした玉ねぎを月桂樹と白ワイン入りの濃厚な牛肉ブロスで煮込み、グリュイエールのバゲットを添えます。'
    },
    'Crisp romaine tossed in signature Caesar dressing with anchovies, garlic, Parmesan, croutons, bacon bits and shaved Parmesan.': {
        hi: 'कुरकुरी रोमेन लेट्यूस को सिग्नेचर सीज़र ड्रेसिंग, एंकोवी, लहसुन, Parmesan, क्रूटॉन, बेकन और Parmesan शेविंग्स के साथ मिलाया गया।',
        ko: '아삭한 로메인에 시그니처 시저 드레싱, 앤초비, 마늘, 파르메산, 크루통, 베이컨, 파르메산 슬라이스를 더했습니다.',
        ja: 'シャキッとしたロメインにシグネチャーのシーザードレッシング、アンチョビ、ガーリック、パルメザン、クルトン、ベーコンを合わせます。'
    },
    'Bomba rice infused with saffron and seafood stock, topped with mussels, prawns, squid, chorizo and red peppers. Served with fresh lemon wedges.': {
        hi: 'सैफ्रन और सीफूड स्टॉक से सुगंधित बॉम्बा चावल, ऊपर मसल्स, झींगे, स्क्विड, चोरिज़ो और लाल मिर्च। ताज़े नींबू के साथ।',
        ko: '사프란과 해산물 육수로 풍미를 낸 봄바 쌀에 홍합, 새우, 오징어, 초리조, 붉은 피망을 올리고 레몬을 곁들입니다.',
        ja: 'サフランと魚介のストックを含ませたボンバ米に、ムール貝、エビ、イカ、チョリソー、赤ピーマンをのせ、レモンを添えます。'
    },
    'Vanilla bean custard baked until set and topped with a torched caramel shell. Served with espresso-friendly cane sugar crack.': {
        hi: 'वनीला बीन कस्टर्ड को सेट होने तक बेक कर ऊपर टॉर्च्ड कैरेमेल की परत दी गई। गन्ने की चीनी के क्रैक के साथ।',
        ko: '바닐라 빈 커스터드를 부드럽게 구운 뒤 토치로 캐러멜 껍질을 입히고 사탕수수 슈가 크랙을 곁들입니다.',
        ja: 'バニラビーンズのカスタードを焼き、表面をキャラメリゼ。エスプレッソに合うきび砂糖のクラックを添えます。'
    },
    'An icy blend of gin and dry vermouth, finished simply with a twist of lemon peel or a fine olive. Known as the "king of cocktails," this classic delivers a sharp, precise taste with a clean, crisp aroma, making it an excellent aperitif to pair with dishes like Beef Wellington and paella.': {
        hi: 'जिन और ड्राई वर्माउथ का ठंडा मिश्रण, नींबू के छिलके या ऑलिव से पूरा। यह क्लासिक पेय Beef Wellington और paella के साथ बेहतरीन है।',
        ko: '진과 드라이 베르무트를 차갑게 섞고 레몬 필 또는 올리브로 마무리한 클래식 칵테일로, 비프 웰링턴과 파에야에 잘 어울립니다.',
        ja: 'ジンとドライベルモットを冷たく合わせ、レモンピールまたはオリーブで仕上げたクラシックな食前酒です。'
    },
    'Renowned for its iconic anemone-patterned bottle, this vintage Champagne is a blend of Chardonnay, Pinot Noir, and Pinot Meunier. Its bubbles are fine and delicate, with elegant aromas of peach, pear, and white flowers. Paired with French onion soup or creme brulee, it instantly elevates the dining experience with a sense of occasion.': {
        hi: 'प्रसिद्ध एनीमोन पैटर्न वाली बोतल का यह विंटेज Champagne Chardonnay, Pinot Noir और Pinot Meunier का मिश्रण है, जिसमें पीच, नाशपाती और सफेद फूलों की सुगंध है।',
        ko: '상징적인 아네모네 패턴 병으로 유명한 빈티지 샴페인으로, 샤르도네, 피노 누아, 피노 뫼니에가 어우러져 섬세한 기포와 과일 향을 냅니다.',
        ja: 'アネモネ柄のボトルで知られるヴィンテージシャンパーニュ。シャルドネ、ピノ・ノワール、ピノ・ムニエの繊細な泡と香りが特徴です。'
    },
    "Crafted especially for guests who prefer not to drink alcohol. This mocktail is built on a base of cold-brewed smoked Earl Grey tea, combined with fresh lime juice, mint leaves, and a touch of honey. Shaken and poured over ice, it's finished with a garnish of orange peel and a sprig of rosemary. The first sip reveals a subtle woody smokiness, followed by the distinctive bergamot aroma of Earl Grey, pairing beautifully with risotto and Caesar salad.": {
        hi: 'बिना शराब पसंद करने वाले अतिथियों के लिए बनाया गया मॉकटेल। स्मोक्ड Earl Grey चाय, नींबू, पुदीना और शहद से तैयार, रिसोट्टो और Caesar salad के साथ सुंदर।',
        ko: '무알코올을 선호하는 고객을 위한 목테일입니다. 콜드브루 스모크 얼그레이, 라임, 민트, 꿀을 섞어 리조토와 시저 샐러드에 잘 어울립니다.',
        ja: 'ノンアルコールをご希望のお客様のためのモクテル。スモークアールグレイ、ライム、ミント、蜂蜜を合わせ、リゾットやシーザーサラダと好相性です。'
    }
};

Object.entries(sharedFallback).forEach(([source, values]) => {
    Object.entries(values).forEach(([language, translation]) => {
        completeTranslations[language][source] = translation;
    });
});

const coreLongCopy = {
    'Chef Marcus Chen grew up in lantern-lit kitchens across Penang, learning how simplicity and precision transform the ordinary into something unforgettable. At Westwood Bites, his narrative is expressed through carefully curated courses, moody lighting, and a seamless reservation flow that removes friction before the meal begins.': {
        hi: 'शेफ मार्कस चेन पेनांग की लालटेन-रोशन रसोइयों में बड़े हुए, जहां उन्होंने सीखा कि सरलता और सटीकता साधारण को अविस्मरणीय बना सकती है। Westwood Bites में उनकी कहानी चुने हुए कोर्स, सौम्य रोशनी और सहज आरक्षण अनुभव से व्यक्त होती है।',
        ko: '마커스 첸 셰프는 페낭의 따뜻한 주방에서 자라며 단순함과 정교함이 평범한 것을 잊지 못할 경험으로 바꾸는 법을 배웠습니다. Westwood Bites에서는 엄선된 코스, 분위기 있는 조명, 매끄러운 예약 흐름으로 그의 이야기를 전합니다.',
        ja: 'マーカス・チェン シェフはペナンの灯りに包まれた厨房で育ち、シンプルさと正確さが日常を忘れられない体験に変えることを学びました。Westwood Bites では厳選されたコース、落ち着いた照明、スムーズな予約体験でその物語を表現します。'
    },
    'Our philosophy centers on the idea that every plate should feel like a whispered story. Each reservation should feel effortless, every space should feel intimate, and every guest should leave with an experience worth sharing.': {
        hi: 'हमारा दर्शन है कि हर प्लेट एक धीमी कहानी जैसी लगे। हर आरक्षण सहज हो, हर स्थान आत्मीय लगे और हर अतिथि साझा करने योग्य अनुभव लेकर जाए।',
        ko: '우리의 철학은 모든 접시가 조용히 들려주는 이야기처럼 느껴져야 한다는 것입니다. 예약은 편안하고, 공간은 친밀하며, 모든 고객은 공유하고 싶은 경험을 가져가야 합니다.',
        ja: '私たちの哲学は、すべての一皿がささやく物語のように感じられること。予約は簡単に、空間は親密に、そしてすべてのお客様が共有したくなる体験を持ち帰ることです。'
    },
    'Asian spice palettes meet classic French structure, plated with the drama of modern fine dining.': {
        hi: 'एशियाई मसालों की गहराई क्लासिक फ्रेंच संरचना से मिलती है और आधुनिक फाइन डाइनिंग की नाटकीयता के साथ परोसी जाती है।',
        ko: '아시아 향신료의 풍미와 클래식 프렌치 구조가 만나 현대 파인다이닝의 극적인 표현으로 완성됩니다.',
        ja: 'アジアのスパイスの表情とクラシックなフレンチの構成が出会い、現代的なファインダイニングの演出で仕上がります。'
    },
    'Cutting-edge techniques combined with time-honored traditions create unforgettable culinary experiences.': {
        hi: 'आधुनिक तकनीकें और पुरानी परंपराएं मिलकर अविस्मरणीय पाक अनुभव बनाती हैं।',
        ko: '첨단 기술과 오랜 전통이 만나 잊지 못할 미식 경험을 만듭니다.',
        ja: '最先端の技術と長く受け継がれた伝統が、忘れられない料理体験を生み出します。'
    },
    'Marcus Chen brings modern precision and rich storytelling to every dish, guided by ingredients sourced from across Malaysia and beyond.': {
        hi: 'मार्कस चेन हर व्यंजन में आधुनिक सटीकता और गहरी कहानी लाते हैं, जिनका आधार मलेशिया और उससे आगे से चुनी सामग्री है।',
        ko: '마커스 첸은 말레이시아와 세계 각지의 재료를 바탕으로 모든 요리에 현대적 정교함과 풍부한 이야기를 담습니다.',
        ja: 'マーカス・チェンは、マレーシア各地と世界から選んだ食材をもとに、すべての料理へ現代的な精密さと豊かな物語を込めます。'
    },
    "Chef Marcus Chen's culinary journey began in his grandmother's kitchen in Penang, where he first discovered the transformative power of fresh ingredients and traditional techniques. After training at prestigious institutions including Le Cordon Bleu Paris and sous chef positions at three-Michelin-starred restaurants, Marcus returned to Malaysia with a vision to create contemporary fine dining that honors both heritage and innovation.": {
        hi: 'शेफ मार्कस चेन की पाक यात्रा पेनांग में उनकी दादी की रसोई से शुरू हुई। प्रतिष्ठित संस्थानों और Michelin सितारा रेस्तरां में प्रशिक्षण के बाद वे मलेशिया लौटे ताकि विरासत और नवाचार का सम्मान करती आधुनिक फाइन डाइनिंग बना सकें।',
        ko: '마커스 첸 셰프의 여정은 페낭 할머니의 주방에서 시작되었습니다. 르 코르동 블루 파리와 미쉐린 스타 레스토랑에서 경험을 쌓은 뒤, 그는 전통과 혁신을 함께 담은 현대 파인다이닝을 만들기 위해 말레이시아로 돌아왔습니다.',
        ja: 'マーカス・チェン シェフの料理の旅は、ペナンにある祖母の厨房から始まりました。ル・コルドン・ブルー・パリやミシュラン星付きレストランで経験を積み、伝統と革新を尊重する現代的なファインダイニングを目指してマレーシアへ戻りました。'
    },
    "His signature style blends the bold flavors of Southeast Asia with classical French techniques, resulting in dishes that are both familiar and extraordinary. Marcus's commitment to excellence has earned Westwood Bites international recognition and a loyal following of discerning food lovers.": {
        hi: 'उनकी शैली दक्षिण-पूर्व एशिया के साहसी स्वादों को क्लासिक फ्रेंच तकनीकों से मिलाती है, जिससे व्यंजन परिचित भी लगते हैं और असाधारण भी।',
        ko: '그의 시그니처 스타일은 동남아시아의 대담한 풍미와 클래식 프렌치 기법을 결합해 익숙하면서도 특별한 요리를 만듭니다.',
        ja: '彼のシグネチャースタイルは、東南アジアの大胆な味わいとクラシックなフレンチ技法を融合させ、親しみやすくも特別な一皿を生み出します。'
    },
    '"Cooking is not just about feeding the body - it\'s about nourishing the soul and creating memories that last a lifetime."': {
        hi: '"खाना पकाना केवल शरीर को पोषण देना नहीं है; यह आत्मा को पोषित करना और जीवन भर की यादें बनाना है।"',
        ko: '"요리는 몸을 채우는 것만이 아니라 마음을 돌보고 오래 남을 기억을 만드는 일입니다."',
        ja: '「料理とは身体を満たすだけでなく、心を満たし、一生残る思い出をつくることです。」'
    },
    'Each dish is presented with evocative storytelling, clear pricing, and instant access to reserve the table that best matches your evening.': {
        hi: 'हर व्यंजन कहानी, स्पष्ट मूल्य और आपकी शाम के लिए सही टेबल आरक्षित करने की सुविधा के साथ प्रस्तुत किया जाता है।',
        ko: '모든 요리는 감각적인 이야기, 명확한 가격, 그리고 저녁에 맞는 테이블 예약 기능과 함께 제공됩니다.',
        ja: 'すべての料理は印象的なストーリー、明確な価格、そしてその夜に合う席をすぐ予約できる導線とともに紹介されます。'
    },
    'Real-time social dining experiences from our table to yours.': {
        hi: 'हमारी टेबल से आपकी स्क्रीन तक वास्तविक समय के भोजन अनुभव।',
        ko: '우리의 테이블에서 당신에게 전해지는 실시간 소셜 다이닝 경험.',
        ja: '私たちのテーブルからお客様へ届くリアルタイムのダイニング体験。'
    },
    'A curated gallery of guest stories, chef highlights, and plated moments that feel like the most shareable part of your evening.': {
        hi: 'अतिथि कहानियों, शेफ क्षणों और सुंदर प्लेटिंग की चुनी हुई गैलरी, जो आपकी शाम का सबसे साझा करने योग्य हिस्सा बनती है।',
        ko: '고객 이야기, 셰프 하이라이트, 아름다운 플레이팅 순간을 엄선한 갤러리입니다.',
        ja: 'ゲストの物語、シェフのハイライト、美しい盛り付けの瞬間を集めたギャラリーです。'
    },
    '"The lobster course was breathtaking - every detail felt purposeful."': {
        hi: '"लॉब्स्टर कोर्स अद्भुत था - हर विवरण का अर्थ महसूस हुआ।"',
        ko: '"랍스터 코스는 숨이 멎을 만큼 훌륭했고 모든 디테일에 의미가 있었습니다."',
        ja: '「ロブスターのコースは息をのむほど素晴らしく、すべての細部に意味がありました。」'
    },
    '"A perfected evening of elevated taste and impeccable service."': {
        hi: '"उन्नत स्वाद और निर्दोष सेवा की एक परिपूर्ण शाम।"',
        ko: '"높은 수준의 맛과 완벽한 서비스가 어우러진 완성된 저녁이었습니다."',
        ja: '「洗練された味と申し分のないサービスが整った完璧な夜でした。」'
    },
    '"Wine pairing by the sommelier made the evening feel unforgettable."': {
        hi: '"सोमेलियर की वाइन पेयरिंग ने शाम को अविस्मरणीय बना दिया।"',
        ko: '"소믈리에의 와인 페어링이 저녁을 잊지 못하게 만들었습니다."',
        ja: '「ソムリエのワインペアリングが忘れられない夜にしてくれました。」'
    },
    '"The presentation alone is worth the reservation."': {
        hi: '"केवल प्रस्तुति ही आरक्षण के लायक है।"',
        ko: '"플레이팅만으로도 예약할 가치가 있습니다."',
        ja: '「盛り付けだけでも予約する価値があります。」'
    },
    'Intimate gatherings for special occasions, featuring personalized menus and dedicated service in our exclusive private dining space.': {
        hi: 'विशेष अवसरों के लिए निजी मिलन, व्यक्तिगत मेनू और समर्पित सेवा के साथ हमारे निजी डाइनिंग स्पेस में।',
        ko: '특별한 날을 위한 프라이빗 모임으로, 맞춤 메뉴와 전담 서비스를 제공합니다.',
        ja: '特別な日のための親密な集まりに、カスタムメニューと専任サービスをご用意します。'
    },
    "Journey through our curated wine collection with our sommelier, featuring rare vintages paired with Chef Marcus's signature dishes.": {
        hi: 'हमारे सोमेलियर के साथ चुनी हुई वाइन कलेक्शन की यात्रा करें, जिसमें दुर्लभ विंटेज Chef Marcus के सिग्नेचर व्यंजनों के साथ जोड़े जाते हैं।',
        ko: '소믈리에와 함께 엄선된 와인 컬렉션을 경험하고, 희귀 빈티지를 마커스 셰프의 시그니처 요리와 함께 즐기세요.',
        ja: 'ソムリエとともに厳選されたワインコレクションを巡り、希少なヴィンテージをマーカス シェフのシグネチャー料理と合わせます。'
    },
    'An exclusive behind-the-scenes culinary journey where you dine alongside Chef Marcus as he prepares your personalized tasting menu.': {
        hi: 'एक विशेष पर्दे के पीछे का पाक अनुभव, जहां Chef Marcus आपके व्यक्तिगत tasting menu को तैयार करते समय आप उनके साथ भोजन करते हैं।',
        ko: '마커스 셰프가 맞춤 테이스팅 메뉴를 준비하는 동안 함께 식사하는 특별한 비하인드 미식 경험입니다.',
        ja: 'マーカス シェフがパーソナルなテイスティングメニューを仕上げる様子を間近で楽しむ、特別な舞台裏体験です。'
    }
};

Object.entries(coreLongCopy).forEach(([source, values]) => {
    Object.entries(values).forEach(([language, translation]) => {
        completeTranslations[language][source] = translation;
    });
});

Object.entries(completeTranslations).forEach(([language, entries]) => {
    translations[language] = { ...(translations[language] || {}), ...entries };
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

