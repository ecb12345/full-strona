"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Kontakt() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative pt-0 pb-0 overflow-hidden reveal">
            <div className="w-full relative z-10">
                <img src="/images/hero_kontakt.png" alt="Kontakt - Bądźmy w kontakcie" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Intro Section (Under Hero) */}
        <section className="py-16 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">KONTAKT</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-10 text-on-surface">
                    Pogadajmy
                </h1>
                <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    Niezależnie od tego, czy potrzebujesz szkolenia dla zespołu, czy wsparcia w relacji – jestem tutaj, aby Cię usłyszeć. Wybierz najwygodniejszą dla siebie formę kontaktu.
                </p>
                <div className="w-16 h-1 bg-primary/20 mx-auto"></div>
            </div>
        </section>

        {/* Contact Content Section */}
        <section className="pb-24 bg-surface reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    
                    {/* Left Column: Info */}
                    <div>
                        <div className="space-y-12">
                            <div>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">E-MAIL</p>
                                <a href="mailto:ela@bcb-szkolenia.pl" className="text-3xl font-headline hover:text-primary transition-colors underline decoration-outline-variant/30 underline-offset-8">ela@bcb-szkolenia.pl</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">TELEFON</p>
                                <a href="tel:+48508642455" className="text-3xl font-headline hover:text-primary transition-colors">+48 508 642 455</a>
                            </div>
                        </div>

                        <div className="mt-24 pt-12 border-t border-outline/10">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-8">ZNAJDŹ MNIE TUTAJ</p>
                            <div className="flex flex-col gap-6">
                                <a href="https://www.facebook.com/jaksiedogadacblog/" className="group flex items-center gap-4 text-on-surface font-bold text-xs uppercase tracking-widest hover:text-primary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                    Facebook
                                </a>
                                <a href="https://www.instagram.com/jaksiedogadac/" className="group flex items-center gap-4 text-on-surface font-bold text-xs uppercase tracking-widest hover:text-primary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                    Instagram
                                </a>
                                <a href="https://www.linkedin.com/in/elzbietacwynarbudzinska/" className="group flex items-center gap-4 text-on-surface font-bold text-xs uppercase tracking-widest hover:text-primary transition-all">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    LinkedIn
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-surface-container-low p-8 md:p-16 rounded-[4rem_2rem_6rem_3rem] shadow-xl border border-outline/5">
                        {isSubmitted ? (
                            <div className="py-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                                </div>
                                <h4 className="font-headline text-3xl mb-4 text-primary">Dziękuję!</h4>
                                <p className="text-on-surface-variant text-lg leading-relaxed">Dziękuję za zaufanie. Skontaktuję się z Tobą tak, szybko jak to mozliwe.</p>
                                <button onClick={() => setIsSubmitted(false)} className="mt-8 bg-surface-container-high text-on-surface px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-primary/10 transition-colors">Wyślij kolejną wiadomość</button>
                            </div>
                        ) : (
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.currentTarget;
                            try {
                                await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
                                setIsSubmitted(true);
                                form.reset();
                            } catch (err) {
                                alert("Wystąpił błąd.");
                            }
                        }} action="https://formspree.io/f/xlgzvvea" method="POST" className="space-y-12">
                            <div className="relative group">
                                <input type="text" id="name" name="name" required placeholder=" " className="peer w-full bg-transparent border-0 border-b border-outline/20 py-4 focus:ring-0 focus:border-primary transition-all outline-none" />
                                <label htmlFor="name" className="absolute left-0 top-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">IMIĘ I NAZWISKO</label>
                            </div>
                            <div className="relative group">
                                <input type="email" id="email" name="email" required placeholder=" " className="peer w-full bg-transparent border-0 border-b border-outline/20 py-4 focus:ring-0 focus:border-primary transition-all outline-none" />
                                <label htmlFor="email" className="absolute left-0 top-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">ADRES E-MAIL</label>
                            </div>
                            <div className="relative group">
                                <textarea id="message" name="message" required rows={4} placeholder=" " className="peer w-full bg-transparent border-0 border-b border-outline/20 py-4 focus:ring-0 focus:border-primary transition-all outline-none resize-none"></textarea>
                                <label htmlFor="message" className="absolute left-0 top-4 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4">W CZYM MOGĘ CI POMÓC?</label>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="flex items-center h-5">
                                    <input type="checkbox" id="consent" required className="w-4 h-4 border-outline/20 rounded text-primary focus:ring-primary/20" />
                                </div>
                                <label htmlFor="consent" className="text-[10px] text-on-surface-variant/60 leading-relaxed uppercase tracking-wider">
                                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie.
                                </label>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white py-6 rounded-xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl hover:brightness-110 active:scale-[0.98] transition-all">
                                WYŚLIJ WIADOMOŚĆ
                            </button>
                        </form>
                        )}
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
                <NewsletterForm formId="D6dfkq" />
                <p className="mt-4 text-[8px] uppercase tracking-widest opacity-60 text-white/70">Zapisując się na newsletter zgadzasz się otrzymywać informacje marketingowe.</p>
            </div>
        </section>
      </main>
    </>
  );
}
