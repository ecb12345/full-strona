document.addEventListener('DOMContentLoaded', () => {
    // --- Sticky Header Logic ---
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('sticky-active');
            header.classList.remove('h-24');
            header.classList.add('h-20');
        } else {
            header.classList.remove('sticky-active');
            header.classList.add('h-24');
            header.classList.remove('h-20');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // --- Mobile Menu Logic ---
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        body.classList.toggle('menu-open', !isOpen);
        
        // Animacja wejścia
        if (!isOpen) {
            setTimeout(() => {
                mobileMenu.style.transform = 'translateX(0)';
            }, 10);
        } else {
            mobileMenu.style.transform = 'translateX(100%)';
        }
    };

    if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.transform = 'translateX(100%)';
            body.classList.remove('menu-open');
        });
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Fade-In Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Order Modal Logic ---
    const orderModal = document.getElementById('order-modal');
    const orderBtns = document.querySelectorAll('.order-training-btn');
    const offerBtns = document.querySelectorAll('.order-offer-btn');
    const conflictBtns = document.querySelectorAll('.order-conflict-btn');
    const closeModal = document.getElementById('close-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const openModal = (type) => {
        if (!orderModal) return;
        
        const defaultForm = document.getElementById('default-form');
        const mailerliteForm = document.getElementById('mailerlite-form');
        
        // Update content based on type
        if (type === 'offer') {
            if (modalTitle) modalTitle.innerText = 'Świetnie, że tutaj jesteś!';
            if (modalDescription) modalDescription.innerText = 'Zostaw kontakt, a ja wrócę do Ciebie z kompletem informacji. Poznajmy się i sprawdźmy, czego dokładnie potrzebuje Twoja firma';
            if (defaultForm) defaultForm.classList.remove('hidden');
            if (mailerliteForm) mailerliteForm.classList.add('hidden');
        } else if (type === 'conflict') {
            if (modalTitle) modalTitle.innerText = 'Jesteśmy w kontakcie :)';
            if (modalDescription) modalDescription.innerText = 'Jak tylko kurs będzie gotowy dam Ci znać.';
            if (defaultForm) defaultForm.classList.add('hidden');
            if (mailerliteForm) mailerliteForm.classList.remove('hidden');
        } else {
            if (modalTitle) modalTitle.innerText = 'Świetnie, że tutaj jesteś!';
            if (modalDescription) modalDescription.innerText = 'Zostaw swoje dane – prześlę Ci pełny program szkolenia i chętnie porozmawiam o tym, jak mogę wesprzeć Ciebie i Twój zespół.';
            if (defaultForm) defaultForm.classList.remove('hidden');
            if (mailerliteForm) mailerliteForm.classList.add('hidden');
        }

        orderModal.classList.remove('hidden');
        setTimeout(() => {
            orderModal.classList.add('opacity-100');
            if (modalContent) {
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }
        }, 10);
        body.classList.add('menu-open');
    };

    const hideModal = () => {
        if (!orderModal) return;
        orderModal.classList.remove('opacity-100');
        if (modalContent) {
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
        }
        setTimeout(() => {
            orderModal.classList.add('hidden');
            body.classList.remove('menu-open');
        }, 300);
    };

    orderBtns.forEach(btn => btn.addEventListener('click', () => openModal('training')));
    offerBtns.forEach(btn => btn.addEventListener('click', () => openModal('offer')));
    conflictBtns.forEach(btn => btn.addEventListener('click', () => openModal('conflict')));
    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', hideModal);
});
