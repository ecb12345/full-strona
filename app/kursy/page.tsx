"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";


export default function Kursy() {
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
        {/* Hero */}
        <section className="reveal active">
            <img src="/images/hero_online_v2.png" alt="Kursy Online - Ela Cwynar-Budzińska - Sztuka Komunikacji" className="w-full h-auto max-h-[90vh] object-cover" />
        </section>

        {/* Intro */}
        <section className="pt-24 pb-12 bg-surface text-center reveal active">
            <div className="max-w-4xl mx-auto px-6">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">Rozwój w domowym zaciszu</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-8">Miejsce, w którym o komunikacji może uczyć się każdy</h1>
                <p className="text-on-surface-variant mb-12 max-w-3xl mx-auto leading-relaxed">
                    Kursy online to dla mnie najkrótsza droga od teorii do praktyki: dostajesz konkretną technologię dogadywania się, którą możesz wdrożyć przy najbliższej rozmowie, bez czekania na termin stacjonarnego warsztatu.
                </p>
            </div>
        </section>

        {/* Course Cards (Esther Perel Inspired) */}
        <section className="pb-32 bg-surface reveal active">
            <div className="max-w-[540px] mx-auto px-6">
                
                {/* Course Card: Restart relacji */}
                <div className="perel-card shadow-xl border border-outline/5">
                    <div className="organic-top bg-cover bg-center" style={{ backgroundImage: "url('/images/kurs_konflikty.jpg')" }}>
                    </div>
                    <div className="p-10 pt-16 text-center">
                        <h2 className="font-headline text-3xl mb-6">Restart relacji</h2>
                        <p className="text-on-surface-variant mb-10 text-sm leading-relaxed">
                            Zmień napięcie w porozumienie. Poznaj sprawdzone techniki mediacji i radzenia sobie w trudnych sytuacjach interpersonalnych.
                        </p>
                        <button className="order-conflict-btn inline-block bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all hover:shadow-xl transform hover:-translate-y-1">
                            SPRAWDZAM
                        </button>
                    </div>
                </div>

            </div>
        </section>

        {/* Why Online Learning Section */}
        <section className="pt-12 pb-24 bg-surface-container-low reveal active">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="font-headline text-3xl md:text-4xl mb-12 text-center italic">Dlaczego stworzyłam przestrzeń do nauki online?</h2>
                <div className="space-y-12 text-on-surface-variant leading-relaxed text-lg">
                    <p>
                        Wiem, jak wygląda rzeczywistość w wielu organizacjach. Być może Twoja firma obecnie nie inwestuje w „szkolenia miękkie”, a Ty czujesz, że sposób komunikacji, jaki wyniosłeś z domu, po prostu Ci nie pomaga. Zamiast dochodzić do rozwiązań, Wasze rozmowy eskalują, a Ty zostajesz z poczuciem bezsilności.
                    </p>

                {/* Premium Solid Pink Card */}
                <div className="bg-primary rounded-[3rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden text-white my-12">
                    {/* Decorative Organic Blobs */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white opacity-[0.12] blur-3xl" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}></div>
                    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-black opacity-[0.08] blur-3xl" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                            <circle cx="20" cy="20" r="15" />
                            <circle cx="80" cy="70" r="25" />
                            <path d="M 10 80 Q 30 60 50 80 T 90 80" stroke="white" fill="none" strokeWidth="0.5" />
                        </svg>
                    </div>
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 text-left">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <span className="material-symbols-outlined text-4xl mb-3 opacity-40">self_improvement</span>
                                <h4 className="font-bold text-xl mb-4">Uczysz się na własnych zasadach</h4>
                                <p className="text-sm opacity-80 leading-relaxed">Na kanapie, w swoim tempie, dokładnie wtedy, gdy masz na to przestrzeń, manewrując między milionem codziennych zadań.</p>
                            </div>
                            
                            {/* Item 2 */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <span className="material-symbols-outlined text-4xl mb-3 opacity-40">psychology</span>
                                <h4 className="font-bold text-xl mb-4">Wdrażasz wiedzę pod okiem mentora</h4>
                                <p className="text-sm opacity-80 leading-relaxed">Dzięki mojemu 17-letniemu doświadczeniu w pracy z liderami i zespołami, nie dostajesz suchej teorii, ale technologię, którą możesz porządnie wdrożyć w życie.</p>
                            </div>
                            
                            {/* Item 3 */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <span className="material-symbols-outlined text-4xl mb-3 opacity-40">spa</span>
                                <h4 className="font-bold text-xl mb-4">Bez presji i ocen</h4>
                                <p className="text-sm opacity-80 leading-relaxed">Masz możliwość wracania do treści tyle razy, ile potrzebujesz, by poczuć się pewnie w nowym sposobie rozmawiania.</p>
                            </div>
                            
                            {/* Item 4 */}
                            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                <span className="material-symbols-outlined text-4xl mb-3 opacity-40">auto_awesome</span>
                                <h4 className="font-bold text-xl mb-4">Nowe narzędzia w Twojej codzienności</h4>
                                <p className="text-sm opacity-80 leading-relaxed">Testujesz rozwiązania „na żywo”, we własnym domu czy biurze, obserwując realną zmianę krok po kroku.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary py-16 text-white text-center relative z-10">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-headline text-4xl mb-6">Buduj fajniejsze relacje</h2>
            <p className="mb-10 text-pink-100 opacity-90 text-sm md:text-base">
              Zapisz się na newsletter, by raz w miesiącu otrzymywać dawkę inspiracji o komunikacji i relacjach.
            </p>
            <NewsletterForm formId="D6dfkq" />
            <p className="mt-8 text-pink-100 opacity-90 text-sm md:text-base">
              Zapisując się na newsletter zgadzasz się otrzymywać informacje marketingowe.
            </p>
          </div>
        </section>


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
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
