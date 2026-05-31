"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Szkolenia() {
  const [isModalSubmitted, setIsModalSubmitted] = useState(false);

  useEffect(() => {
    // 1. Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    // 2. Modal Logic
    const orderModal = document.getElementById('order-modal');
    const orderBtns = document.querySelectorAll('.order-training-btn');
    const offerBtns = document.querySelectorAll('.order-offer-btn');
    const conflictBtns = document.querySelectorAll('.order-conflict-btn');
    const closeModal = document.getElementById('close-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const body = document.body;

    const openModal = (type: string) => {
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

    const handleTrainingOpen = () => openModal('training');
    const handleOfferOpen = () => openModal('offer');
    const handleConflictOpen = () => openModal('conflict');

    orderBtns.forEach(btn => btn.addEventListener('click', handleTrainingOpen));
    offerBtns.forEach(btn => btn.addEventListener('click', handleOfferOpen));
    conflictBtns.forEach(btn => btn.addEventListener('click', handleConflictOpen));
    if (closeModal) closeModal.addEventListener('click', hideModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', hideModal);

    return () => {
      observer.disconnect();
      orderBtns.forEach(btn => btn.removeEventListener('click', handleTrainingOpen));
      offerBtns.forEach(btn => btn.removeEventListener('click', handleOfferOpen));
      conflictBtns.forEach(btn => btn.removeEventListener('click', handleConflictOpen));
      if (closeModal) closeModal.removeEventListener('click', hideModal);
      if (modalBackdrop) modalBackdrop.removeEventListener('click', hideModal);
    };
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative pt-0 pb-0 overflow-hidden reveal">
            <div className="w-full relative z-10">
                <img src="/images/hero_szkolenia.png" alt="Szkolenia dla firm - Komunikacja to sztuka, naucz się jej" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Header Text Section (Under Hero) */}
        <section className="py-10 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">Sprawna komunikacja to dowożenie rezultatów</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-10 text-on-surface">
                    Pomogę Twojemu zespołowi odzyskać spokój i efektywność.
                </h1>
                <p className="text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    Masz dość szumu komunikacyjnego, który paraliżuje projekty? Nauczę Twoich liderów i pracowników, jak rozmawiać o faktach, zarządzać emocjami i budować kulturę, w której współpraca jest naturalnym wyborem, a nie przymusem.
                </p>
                <Link href="/omnie" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all hover:shadow-xl transform hover:-translate-y-1">
                    Dlaczego ja
                </Link>
            </div>
        </section>

        {/* Metodologia */}
        <section id="metoda" className="bg-surface-container-high py-md reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-gutter items-center">
                <div className="col-span-12 md:col-span-5 mb-md md:mb-0">
                    {/* BIO IMAGE */}
                    <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl flex items-center justify-center">
                        <img src="/images/bio.png" alt="Ela Cwynar-Budzińska" className="w-full h-full object-cover object-[center_35%]" loading="lazy" />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 md:pl-lg">
                    <h2 className="font-headline text-4xl text-on-surface mb-md italic">Autentyczność i skuteczność</h2>
                    <p className="text-on-surface mb-8 leading-relaxed">
                        Jako psycholog, socjolog oraz certyfikowana psychoterapeutka (Gestalt & EFT), oferuję unikalne podejście do rozwoju pracowników i managerów. Uczę jak budować skuteczną komunikację, która pozwala zespołom osiągać cele bez zbędnego napięcia i strat w ludziach.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Fundament merytoryczny</h4>
                            <p className="text-sm text-on-surface-variant">Jestem absolwentką Uniwersytetu Jagiellońskiego, magistrem Psychologii i Socjologii. Ukończyłam m.in. Szkołę Trenerów Biznesu Elżbiety Sołtys, Szkołę Coachów The Art & Science of Coaching Erickson College International, kurs Coaching Agile Teams Lysy Adkins</p>
                        </div>
                        <div className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Głębokie rozumienie ludzi</h4>
                            <p className="text-sm text-on-surface-variant">Jestem certyfikowaną psychoterapeutką poddającą się superwizji: Szkoła Terapii Gestalt, Externship EFT Therapy – potrafię pracować z tym, co „pod spodem” w komunikacji zespołu.</p>
                        </div>
                        <div className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Doświadczenie praktyczne</h4>
                            <p className="text-sm text-on-surface-variant">Ponad 17 lat prowadzenia szkoleń, facylitacji i coachingu dla największych marek na rynku.</p>
                        </div>
                        <div className="border-l-2 border-primary/20 pl-4">
                            <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Maksymalna praktyczność</h4>
                            <p className="text-sm text-on-surface-variant">Uczę tylko tego, co sama sprawdziłam w praktyce i co przynosi realne rezultaty biznesowe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Zaufali mi liderzy */}
        <section className="bg-surface pt-16 pb-4 reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <p className="text-center text-primary mb-md uppercase tracking-widest text-xs font-bold">Klienci, którzy mi zaufali</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/1.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/3.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/4.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/5.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/6.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/7.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/8.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/9.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/10.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/11.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/12.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/13.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/14.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/15.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/16.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/17.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/18.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Akamai_logo.svg.png" alt="Akamai" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Allfunds_Bank_logo.svg.png" alt="Allfunds" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Capgemini_201x_logo.svg" alt="Capgemini" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Herbalife-logo.svg.png" alt="Herbalife" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Lufthansa_Logo_2018.svg.png" alt="Lufthansa" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Mota-Engil.svg.png" alt="Mota-Engil" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Nokia-Logo.wine.png" alt="Nokia" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Pepsico_logo.png" alt="Pepsico" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/PricewaterhouseCoopers_Logo.svg" alt="PwC" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/Rockwell_Automation_Logo.png" alt="Rockwell" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/schibsted_logotype_black_rgb.png" alt="Schibsted" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/ocado_technology_logo.jpeg" alt="Ocado" className="partner-logo scale-125" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/ZO1.F_BIG-22ad1740.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/6502f7fe63acee6211cbf53f_03_2x3_H.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/2019-03-20_130105.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/download.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/e6dc9c2cd98434db1c5202f713bfb9fe.jpg" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/images.png" alt="Partner Logo" className="partner-logo" /></div>
                    <div className="h-14 flex items-center justify-center"><img src="/images/logos/images (1).png" alt="Partner Logo" className="partner-logo" /></div>
                </div>
            </div>
        </section>

        {/* Training Modules */}
        <div id="szkolenia">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-8 text-center">
                <p className="text-primary uppercase tracking-widest text-xs font-bold mb-4">Specjalizuję się w szkoleniach</p>
            </div>

            {/* Module 02 */}
            <section className="relative bg-surface py-md overflow-hidden wavy-bg reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-lg py-8">
                    <div className="w-full md:w-1/2">
                        <div className="aspect-square md:aspect-[4/3] organic-mask-2 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <img src="/images/babel.jpg" alt="Komunikacja w zespole" className="w-full h-full object-cover object-center" loading="lazy" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="font-headline text-4xl text-on-surface mb-md leading-tight">Komunikacja w zespole</h2>
                        <div className="text-on-surface-variant mb-md max-w-lg leading-relaxed">
                            <p className="mb-4">Dobra komunikacja w zespole to nie jest „miły dodatek” – to fundament efektywności. Większość problemów w projektach nie wynika z braku wiedzy technicznej, ale z szumów informacyjnych, subiektywnych interpretacji i niesprawdzone założeń. Kiedy zespół przestaje się dogadywać, drastycznie rośnie czas pracy, liczba błędów i poziom frustracji, co prowadzi do konfliktów, których można było uniknąć.</p>
                            <p className="mb-4">Nauczę Was, jak udrożnić przepływ informacji i zamienić wzajemne pretensje w jasną, precyzyjną współpracę.</p>
                            <p className="font-bold mb-3">Efekt po szkoleniu:</p>
                            <ul className="space-y-4 ml-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Wyeliminujecie niedomówienia i domysły, zastępując je konkretną wymianą faktów i potrzeb.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Skrócicie czas potrzebny na ustalenia, dzięki stosowaniu precyzyjnych narzędzi komunikacyjnych.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Zbudujecie atmosferę wzajemnego szacunku, w której każdy członek zespołu potrafi asertywnie wyrazić swoje zdanie i z uwagą wysłuchać innych.</span>
                                </li>
                            </ul>
                        </div>
                        <button className="order-training-btn group flex items-center gap-4 bg-primary-container text-on-primary px-8 py-4 hover:brightness-110 transition-all active:scale-95 font-bold tracking-widest text-xs">
                            ZAMÓW SZKOLENIE 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Module 03 */}
            <section className="relative bg-surface-container-low py-md overflow-hidden reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-lg py-8">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h2 className="font-headline text-4xl text-on-surface mb-md leading-tight">Kultura feedbacku</h2>
                        <div className="text-on-surface-variant mb-md max-w-lg leading-relaxed">
                            <p className="mb-4">Wielu liderów traktuje feedback jako przykry obowiązek, który trzeba „odbębnić” raz na kwartał podczas oceny pracowniczej. Jednak w rzeczywistości informacja zwrotna to najważniejsze narzędzie budowania zaangażowania i odpowiedzialności w zespole. Największym kosztem w firmie nie są błędy, ale cisza – momenty, w których ludzie boją się mówić wprost o tym, co nie działa. Nauczę Cię, jak budować kulturę, w której feedback jest naturalnym elementem codzienności, a nie stresującym wydarzeniem.</p>
                            <p className="font-bold mb-3">Efekt po szkoleniu:</p>
                            <ul className="space-y-4 ml-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Przestaniesz bać się dawania trudnego feedbacku, wiedząc, jak ubrać go w słowa, które wspierają zmianę, a nie ranią.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Zbudujesz zespół oparty na szczerości, gdzie błędy są traktowane jako okazja do nauki, a nie powód do szukania winnych.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Odzyskasz czas i efektywność, eliminując domysły i niejasne oczekiwania poprzez precyzyjną komunikację.</span>
                                </li>
                            </ul>
                        </div>
                        <button className="order-training-btn group flex items-center gap-4 bg-primary-container text-on-primary px-8 py-4 hover:brightness-110 transition-all active:scale-95 font-bold tracking-widest text-xs">
                            ZAMÓW SZKOLENIE 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="aspect-square md:aspect-[4/3] organic-mask-hero overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <img src="/images/feedback.jpg" alt="Kultura feedbacku" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Module 04 */}
            <section className="relative bg-surface py-md overflow-hidden wavy-bg reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-lg py-8">
                    <div className="w-full md:w-1/2">
                        <div className="aspect-square md:aspect-[4/3] organic-mask-1 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <img src="/images/konflikt.jpg" alt="Zarządzanie konfliktem" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="font-headline text-4xl text-on-surface mb-md leading-tight">Zarządzanie konfliktem</h2>
                        <div className="text-on-surface-variant mb-md max-w-lg leading-relaxed">
                            <p className="mb-4">Konflikt w zespole to nie błąd systemu – to naturalna część współpracy. Jednak niezarządzany spór działa jak wirus: niszczy atmosferę, zabija kreatywność i realnie obniża wyniki biznesowe. Nauczę Cię, jak wchodzić w sytuacje konfliktowe z odwagą i narzędziami, które pozwolą Ci zamienić destrukcyjne emocje w paliwo do rozwoju zespołu.</p>
                            <p className="font-bold mb-3">Efekt po szkoleniu:</p>
                            <ul className="space-y-4 ml-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Przestaniesz bać się napięć w zespole, będziesz wiedzieć, co zrobić, by przyniosły kreatywną wymianę, a nie eskalację</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Będziesz umieć moderować trudne dyskusje, stosując konkretne scenariusze i techniki mediacyjne.</span>
                                </li>
                            </ul>
                        </div>
                        <button className="order-training-btn group flex items-center gap-4 bg-primary-container text-on-primary px-8 py-4 hover:brightness-110 transition-all active:scale-95 font-bold tracking-widest text-xs">
                            ZAMÓW SZKOLENIE 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Module 05 */}
            <section className="relative bg-surface-container-low py-md overflow-hidden reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-lg relative z-10 py-8">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h2 className="font-headline text-4xl text-on-surface mb-md leading-tight">Asertywność</h2>
                        <div className="text-on-surface-variant mb-md max-w-lg leading-relaxed">
                            <p className="mb-4">Asertywność to nie tylko mówienie „nie”. To przede wszystkim odwaga bycia sobą w relacjach, bez poczucia winy i bez agresji. W świecie biznesu asertywność jest fundamentem zdrowego szacunku – do siebie i do innych. Większość z nas w trudnych sytuacjach wpada w jedną z dwóch pułapek: albo ulegamy, poświęcając własne potrzeby dla „świętego spokoju”, albo reagujemy zbyt ostro. Nauczę Cię, jak komunikować swoje zdanie wprost i stawiać zdrowe granice tak, aby inni wiedzieli, jak mają Cię traktować.</p>
                            <p className="font-bold mb-3">Efekt po szkoleniu:</p>
                            <ul className="space-y-4 ml-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Przestaniesz brać na siebie zbyt wiele i nauczysz się stawiać granice bez lęku o relacje.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Będziesz umieć wyrażać swoje zdanie wprost, zachowując przy tym pełen szacunek do rozmówcy.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Odzyskasz pewność siebie wiedząc jak radzić sobie w sytuacjach, gdy ktoś przekracza Twoje granice</span>
                                </li>
                            </ul>
                        </div>
                        <button className="order-training-btn group flex items-center gap-4 bg-primary-container text-on-primary px-8 py-4 hover:brightness-110 transition-all active:scale-95 font-bold tracking-widest text-xs">
                            ZAMÓW SZKOLENIE 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="aspect-square md:aspect-[4/3] organic-mask-2 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <img src="/images/asertywnosc.jpg" alt="Asertywność" className="w-full h-full object-cover scale-110 -translate-x-4" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
 
            {/* Module 06 */}
            <section className="relative bg-surface py-md overflow-hidden reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-lg py-8">
                    <div className="w-full md:w-1/2">
                        <div className="aspect-square md:aspect-[4/3] organic-mask-2 overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <img src="/images/trudne rozmowy.jpg" alt="Prowadzenie trudnych rozmów dla liderów" className="w-full h-full object-cover object-[center_20%]" loading="lazy" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="font-headline text-4xl text-on-surface mb-md leading-tight">Prowadzenie trudnych rozmów dla liderów</h2>
                        <div className="text-on-surface-variant mb-md max-w-lg leading-relaxed">
                            <p className="mb-4">Jako lider_ka nie unikniesz trudnych rozmów. Prędzej czy później staniesz przed koniecznością przekazania trudnego feedbacku, zdyscyplinowania pracownika lub rozmowy o spadku zaangażowania. Większość z nas na samą myśl o tym czuje ścisk w żołądku, co prowadzi do dwóch skrajności: albo odwlekamy rozmowę w nieskończoność, albo wchodzimy w nią zbyt ostro, niszcząc relację.</p>
                            <p className="font-bold mb-3">Efekt po szkoleniu:</p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Przestaniesz odwlekać trudne rozmowy.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Będziesz umieć przeprowadzić trudną rozmowę według konkretnych algorytmów zamieniając napięcie w konstruktywne rozwiązanie biznesowe.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary">•</span>
                                    <span>Odzyskasz spokój głowy, wiedząc, że poradzisz sobie z kazdą reakcją drugiej strony.</span>
                                </li>
                            </ul>
                        </div>
                        <button className="order-training-btn group flex items-center gap-4 bg-primary-container text-on-primary px-8 py-4 hover:brightness-110 transition-all active:scale-95 font-bold tracking-widest text-xs">
                            ZAMÓW SZKOLENIE 
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </section>
 
            {/* Testimonials Section */}
            <section className="bg-surface-container-low py-10 overflow-hidden reveal">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                    <div className="text-center mb-16">
                        <p className="text-primary uppercase tracking-[0.2em] text-[10px] font-bold mb-4">Komentarze z ankiet</p>
                        <h2 className="font-headline text-4xl text-on-surface">Co mówią uczestnicy moich szkoleń?</h2>
                    </div>
                    
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screen Shot 2023-09-13 at 08.42.28 2.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screen Shot 2023-09-13 at 08.42.28 3.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screen Shot 2024-05-08 at 23.37.03.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screen Shot 2024-05-19 at 23.13.09 copy.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screenshot 2026-05-07 at 09.26.42 2.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screenshot 2026-05-07 at 09.26.42 3.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screenshot 2026-05-07 at 09.27.54.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screenshot 2026-05-07 at 23.50.11.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                        <div className="break-inside-avoid">
                            <img src="/wycinki z ankiet/Screenshot 2026-05-07 at 23.54.23.jpeg" alt="Komentarz z ankiety" className="w-full rounded-2xl shadow-md border border-outline/5 hover:scale-[1.9] hover:shadow-2xl hover:z-10 relative transition-all duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* Stwórzmy Coś Razem */}
        <section className="bg-surface py-10 reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="bg-surface-container-high rounded-[4rem_12rem_6rem_16rem] p-12 md:p-20 lg:p-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2">
                        <div className="relative group">
                            <div className="aspect-square rounded-[4rem_20rem_6rem_16rem] overflow-hidden shadow-2xl relative z-10">
                                <img src="/images/22.png" alt="Ela Cwynar-Budzińska" className="w-full h-full object-cover scale-110" />
                            </div>
                            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="font-headline text-4xl text-on-surface mb-8">Stwórzmy coś razem</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-2xl">
                            Potrzebujesz programu dopasowanego do unikalnych wyzwań Twojego zespołu? Porozmawiajmy o szkoleniu dopasowanym do potrzeb Twojej organizacji
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 mb-16 border-t border-on-surface/10 pt-12">
                            <div className="text-center md:text-left">
                                <span className="text-4xl md:text-5xl font-bold block mb-2 tracking-tighter text-primary">17+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant leading-tight">lat doświadczenia</span>
                            </div>
                            <div className="text-center md:text-left">
                                <span className="text-4xl md:text-5xl font-bold block mb-2 tracking-tighter text-primary">15k+</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant leading-tight">godzin na sali szkoleniowej</span>
                            </div>
                        </div>

                        <button className="order-offer-btn bg-primary text-white px-12 py-5 rounded-full hover:brightness-110 transition-all font-bold tracking-[0.25em] text-[10px] shadow-xl active:scale-95 uppercase">
                            ZAPYTAJ O PEŁNĄ OFERTĘ
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary py-16 reveal text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="font-headline text-4xl mb-6">Buduj fajniejsze relacje</h2>
                <p className="mb-12 text-pink-100 opacity-90">
                    Zapisz się na newsletter, by raz w miesiącu otrzymywać dawkę inspiracji o komunikacji i relacjach.
                </p>
                <NewsletterForm formId="E23vqZ" />
                <p className="mt-4 text-[8px] uppercase tracking-widest opacity-60 text-white/70">Zapisując się na newsletter zgadzasz się otrzymywać informacje marketingowe.</p>
            </div>
        </section>

        {/* Lead Modal */}
        <div id="order-modal" className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="modal-backdrop"></div>
            
            <div className="relative bg-surface w-full max-w-lg mx-4 p-8 md:p-12 shadow-2xl rounded-2xl transform scale-95 transition-transform duration-300" id="modal-content">
                <button id="close-modal" className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-2xl">close</span>
                </button>
                
                <div className="text-center">
                    <h3 id="modal-title" className="font-headline text-3xl mb-6">Świetnie, że tutaj jesteś!</h3>
                    <p id="modal-description" className="text-on-surface-variant mb-10 leading-relaxed">
                        Zostaw swoje dane – prześlę Ci pełny program szkolenia i chętnie porozmawiam o tym, jak mogę wesprzeć Ciebie i Twój zespół.
                    </p>
                    
                    <div id="default-form">
                        {isModalSubmitted ? (
                            <div className="py-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                                </div>
                                <h4 className="font-headline text-3xl mb-4 text-primary">Dziękuję!</h4>
                                <p className="text-on-surface-variant text-lg leading-relaxed">Formularz został przesłany pomyślnie. Skontaktuję się z Tobą najszybciej jak to możliwe.</p>
                                <button onClick={() => { document.getElementById('order-modal')?.classList.add('hidden'); document.getElementById('order-modal')?.classList.remove('opacity-100'); document.body.classList.remove('menu-open'); setIsModalSubmitted(false); }} className="mt-8 bg-surface-container-high text-on-surface px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors">Zamknij</button>
                            </div>
                        ) : (
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.currentTarget;
                            try {
                                await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
                                setIsModalSubmitted(true);
                            } catch (err) {
                                alert("Wystąpił błąd.");
                            }
                        }} action="https://formspree.io/f/mbdwbwvo" method="POST" className="space-y-6">
                        <div className="text-left">
                            <label htmlFor="modal-name" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Imię</label>
                            <input type="text" id="modal-name" name="name" required placeholder="Wpisz swoje imię" className="w-full px-6 py-4 bg-white border border-outline/20 rounded-lg outline-none focus:border-primary transition-colors text-base" />
                        </div>
                        <div className="text-left">
                            <label htmlFor="modal-email" className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Email</label>
                            <input type="email" id="modal-email" name="email" required placeholder="Twoja skrzynka pocztowa" className="w-full px-6 py-4 bg-white border border-outline/20 rounded-lg outline-none focus:border-primary transition-colors text-base" />
                        </div>
                        
                        <div className="pt-4">
                            <button type="submit" className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.25em] text-xs rounded-lg shadow-xl hover:bg-primary-container transition-all active:scale-[0.98]">PRZEŚLIJ</button>
                        </div>
                        
                        <p className="text-[9px] uppercase tracking-wider text-on-surface-variant/60 leading-tight">
                            Klikając "Prześlij" wyrażasz zgodę na <a href="#" className="underline hover:text-primary transition-colors">Politykę prywatności</a>.
                        </p>
                    </form>
                    )}
                    </div>
                    <div id="mailerlite-form" className="hidden mt-6">
                        <NewsletterForm formId="IBUvda" />
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
