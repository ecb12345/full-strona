"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Pary() {
  const [isModalSubmitted, setIsModalSubmitted] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);

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
                <img src="/images/hero_pary.png" alt="Warsztaty dla par - Hold Me Tight Camp" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Intro Content (Under Hero) */}
        <section className="py-16 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">Odbudujcie bliskość</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-10 text-on-surface">
                    Warsztat Hold Me Tight® / Przytul mnie mocno
                </h1>
                <p className="text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    Wyjątkowy warsztat dla par oparty na światowej sławy metodzie EFT (Emotionally Focused Therapy). Odkryjcie na nowo zaufanie i bezpieczną więź w atmosferze pełnej akceptacji.
                </p>
                <div className="flex justify-center">
                    <a href="#formularz" className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all hover:shadow-xl transform hover:-translate-y-1">
                        ZAPISZ SIĘ NA LISTĘ
                    </a>
                </div>
            </div>
        </section>

        {/* Combined Artistic Content Section */}
        <section className="relative w-full overflow-hidden reveal">
            <img src="/images/tło.png" alt="Artistic Background" className="w-full h-auto object-cover min-h-[800px] lg:min-h-0" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 py-16">
                <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full text-center">
                    <p className="text-on-surface-variant mb-12 text-lg font-medium">Zapraszam Was na warsztat, jeśli...</p>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary">sync_problem</span>
                            </div>
                            <h3 className="font-headline text-xl mb-4">Cykliczne kłótnie</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Czujecie, że wpadacie w to samo, bolesne schematy, z których trudno wyjść bez zranienia siebie nawzajem.</p>
                        </div>
                        
                        {/* Card 2 */}
                        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary">distance</span>
                            </div>
                            <h3 className="font-headline text-xl mb-4">Poczucie dystansu</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Mimo fizycznej obecności, czujecie emocjonalne oddalenie i brak intymności, która kiedyś była na wyciągnięcie ręki.</p>
                        </div>
                        
                        {/* Card 3 */}
                        <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary">security</span>
                            </div>
                            <h3 className="font-headline text-xl mb-4">Brak bezpieczeństwa</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Bojecie się wyrażać swoje najgłębsze potrzeby i lęki, obawiając się oceny lub odrzucenia ze strony partnera.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Expectation Section */}
        <section className="py-16 bg-surface reveal overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <h2 className="font-headline text-4xl text-on-surface mb-12">Co da Wam warsztat?</h2>
                    <ul className="space-y-10">
                        <li className="flex gap-6">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Zrozumienie Waszego &quot;tańca&quot;</h4>
                                <p className="text-on-surface-variant leading-relaxed">Nauczcie się rozpoznawać negatywny cykl interakcji i zatrzymywać go zanim eskaluje.</p>
                            </div>
                        </li>
                        <li className="flex gap-6">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Głębszą więź emocjonalną</h4>
                                <p className="text-on-surface-variant leading-relaxed">Odkryjcie na nowo zaufanie i bliskość, budując fundament pod trwałą i bezpieczną więź.</p>
                            </div>
                        </li>
                        <li className="flex gap-6">
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">Język potrzeb i uczuć</h4>
                                <p className="text-on-surface-variant leading-relaxed">Zdobądźcie narzędzia do komunikowania tego, co naprawdę ważne, bez wzajemnego obwiniania się.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="relative z-10 rounded-[4rem_20rem_6rem_16rem] overflow-hidden shadow-2xl">
                        <img src="/images/pary_hands.png" alt="Bliskość i wsparcie" className="w-full h-full object-cover aspect-square" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>

        {/* Prowadzące Section */}
        <section className="py-24 bg-surface-container-low reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="text-center mb-20">
                    <p className="uppercase tracking-[0.2em] font-bold text-primary mb-4 text-xs">Poznajcie nas</p>
                    <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Prowadzące warsztat</h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Ela Cwynar-Budzińska */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                        <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden shadow-xl aspect-square">
                            <img src="/images/profil-1.png" alt="Ela Cwynar-Budzińska" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl mb-4">Ela Cwynar-Budzińska</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Terapeutka par pracująca w nurcie EFT (Emotionally Focused Therapy) oraz Gestalt. Przez ponad 17 lat pracowała jako trenerka dla największych światowych marek, szkoląc liderów i pomagając zespołom w komunikacji. Łączy świat biznesu z głębią relacji osobistych, pomagając ludziom budować bliższe i prawdziwsze więzi.
                            </p>
                        </div>
                    </div>

                    {/* Justyna Kotowicz */}
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                        <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden shadow-xl aspect-square">
                            <img src="/images/justyna_kotowicz.jpg" alt="Justyna Kotowicz" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-headline text-2xl mb-4">Justyna Kotowicz</h3>
                            <p className="text-on-surface-variant leading-relaxed">
                                Psycholog, psychoterapeutka i trenerka z ponad 16-letnim doświadczeniem. Założycielka Nove Centrum Rozwoju. Specjalizuje się w psychoterapii par w nurcie EFT, wspierając relacje oparte na bezpiecznej więzi. W swojej pracy stosuje podejście holistyczne, wierząc w potencjał każdego człowieka do zmiany i wzrostu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Organization Blocks */}
        <section className="py-12 bg-surface reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid sm:grid-cols-3 gap-8">
                <div className="bg-surface-container-high p-10 rounded-2xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">MIEJSCE I CZAS</p>
                    <p className="font-headline text-xl mb-2">Kraków</p>
                    <p className="text-sm text-on-surface-variant">19 - 20 września 2026</p>
                </div>
                <div className="bg-surface-container-high p-10 rounded-2xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">INWESTYCJA</p>
                    <p className="font-headline text-xl mb-2">1800 PLN / para</p>
                    <p className="text-sm text-on-surface-variant">Cena obejmuje: materiały warsztatowe, przerwy kawowe oraz dwa dni intensywnej pracy.</p>
                </div>
                <div className="bg-surface-container-high p-10 rounded-2xl">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">KAMERALNA GRUPA</p>
                    <p className="font-headline text-xl mb-2">Kameralna grupa</p>
                    <p className="text-sm text-on-surface-variant">Warsztaty prowadzone są w małych grupach. Gwarantujemy pełną dyskrecję i komfort uczestników.</p>
                </div>
            </div>
        </section>

        {/* CTA Blob Section */}
        <section className="py-16 bg-surface-container-low reveal">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-primary/5 p-16 md:p-24 rounded-[12rem_4rem_16rem_6rem] text-center relative overflow-hidden">
                    <p className="text-xl md:text-2xl text-on-surface-variant mb-12 italic leading-relaxed">
                        Chcesz zacząć terapię par? Zapraszam na indywidualne konsultacje dla par.
                    </p>
                    <Link href="/kontakt" className="inline-block bg-primary text-white px-12 py-5 font-bold uppercase tracking-widest text-xs shadow-xl hover:brightness-110 transition-all active:scale-95">
                        UMÓW SIĘ NA KONSULTACJĘ
                    </Link>
                </div>
            </div>
        </section>

        {/* Contact Form Section */}
        <section id="formularz" className="py-16 bg-surface reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-24 items-start">
                <div>
                    <h2 className="font-headline text-4xl mb-8">Napisz do mnie</h2>
                    <p className="text-on-surface-variant mb-12 text-lg leading-relaxed">
                        Zróbcie pierwszy krok w stronę nowej, bezpiecznej relacji. Liczba miejsc na warsztacie jest ograniczona, aby zapewnić każdemu komfort i uwagę.
                    </p>
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">call</span>
                            </div>
                            <a href="tel:+48508842455" className="font-bold hover:text-primary transition-colors">+48 508 842 455</a>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <a href="mailto:ela@bcb-szkolenia.pl" className="font-bold hover:text-primary transition-colors">ela@bcb-szkolenia.pl</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-12 rounded-3xl shadow-xl border border-outline/5">
                    {isContactSubmitted ? (
                        <div className="py-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                            </div>
                            <h4 className="font-headline text-3xl mb-4 text-primary">Wiadomość wysłana!</h4>
                            <p className="text-on-surface-variant text-lg leading-relaxed">Dziękuję za zgłoszenie. Odpowiem najszybciej jak to możliwe.</p>
                            <button onClick={() => setIsContactSubmitted(false)} className="mt-8 text-primary font-bold text-xs uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">Wyślij kolejną wiadomość</button>
                        </div>
                    ) : (
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        try {
                            await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
                            setIsContactSubmitted(true);
                            form.reset();
                        } catch (err) {
                            alert("Wystąpił błąd.");
                        }
                    }} action="https://formspree.io/f/xlgzvvea" method="POST" className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">IMIĘ I NAZWISKO</label>
                                <input type="text" name="name" required className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">E-MAIL</label>
                                <input type="email" name="email" required className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">WIADOMOŚĆ / TWOJE PYTANIA</label>
                            <textarea name="message" rows={5} required className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all shadow-lg active:scale-95">
                            WYŚLIJ ZGŁOSZENIE
                        </button>
                    </form>
                    )}
                </div>
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
