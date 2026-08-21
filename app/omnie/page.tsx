"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function OMnnie() {
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
                <img src="/images/hero_omnie.png" alt="O mnie - Ela Cwynar-Budzińska - Sztuka Komunikacji" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Intro Section */}
        <section className="pt-24 pb-12 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">Moja wizja</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-12 text-on-surface">
                    Pomagam ludziom budować bliższe, głębsze i prawdziwsze relacje.
                </h1>
                <div className="max-w-2xl mx-auto">
                    <p className="text-on-surface-variant mb-12 leading-relaxed">
                        Wierzę, że od jakości naszych relacji zależy jakość całego życia – zarówno w pracy, jak i w domu.
                    </p>
                </div>
            </div>
        </section>

        {/* Story Section */}
        <section className="pt-12 pb-24 bg-surface-container-low reveal">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid md:grid-cols-1 gap-16">
                    <div>
                        <h2 className="font-headline text-3xl md:text-4xl mb-12 italic text-on-surface text-center">Moja droga: Od globalnych marek do gabinetu terapeutycznego</h2>
                        <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
                            <p>
                                Przez ponad 17 lat pracowałam jako <strong className="text-on-surface font-bold">trenerka</strong> dla największych światowych marek. Szkoliłam liderów i pomagałam zespołom lepiej się dogadywać w wymagającym świecie biznesu. Jednak równolegle czułam potrzebę schodzenia głębiej – tam, gdzie komunikacja dotyka naszych najbardziej prywatnych lęków i potrzeb.
                            </p>
                            <p>
                                Ta droga zaprowadziła mnie do coachingu, a następnie gabinetu terapeutycznego. Jako terapeutka par, pracująca w oparciu o metodę <strong className="text-on-surface">EFT (Emotionally Focused Therapy)</strong> oraz nurt <strong className="text-on-surface">Gestalt</strong>, codziennie widzę, jak te same mechanizmy obronne, które blokują współpracę w firmie, niszczą bliskość w relacjach prywatnych.
                            </p>
                            <p>
                                Dziś nie wybieram między tymi światami. Łączę je. Daję liderom narzędzia empatii, które czynią ich autentycznymi przywódcami, a parom – precyzję komunikacji, która pozwala im się wreszcie usłyszeć.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Approach Section */}
        <section className="py-24 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="font-headline text-3xl md:text-4xl mb-12 italic text-on-surface text-center">Jak pracuję? Zasada „no-bullshit”</h2>
                <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
                    <p>
                        Bardzo lubię swoich klientów i z większością z nich współpracuję od lat. W mojej pracy wyznaję zasadę <strong className="text-on-surface font-bold">„no-bullshit”</strong>: uczę tylko tego, w co absolutnie wierzę i co sama stosuję.
                    </p>
                    <p>
                        Niezależnie od tego, czy spotykamy się na sali szkoleniowej, w gabinecie, czy w moich autorskich programach rozwojowych online, zależy mi na jednym: <strong className="text-on-surface">maksymalnej praktyczności</strong>. Wiem, że jeśli wdrożysz choć kilka z proponowanych przeze mnie narzędzi, Twoje życie zmieni się na lepsze.
                    </p>
                    <p>
                        Przeszłam długą drogę, zanim sama zaczęłam z ludźmi rozmawiać, a nie grać w gry – dlatego wiem, że to, o czym uczę, po prostu działa.
                    </p>
                </div>
            </div>
        </section>

        {/* Foundations Section with Background Image */}
        <section className="relative py-24 flex items-center reveal">
            <div className="absolute inset-0 z-0">
                <img src="/images/tło 2.png" alt="Tło dekoracyjne" className="w-full h-full object-cover" />
            </div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="font-headline text-4xl mb-12 text-on-surface">Moje fundamenty</h2>
                <div className="grid gap-8">
                    <div className="flex gap-6 items-start">
                        <span className="material-symbols-outlined text-primary pt-1">school</span>
                        <p className="text-lg text-on-surface">Psychologia i Socjologia na Uniwersytecie Jagiellońskim.</p>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="material-symbols-outlined text-primary pt-1">psychology</span>
                        <p className="text-lg text-on-surface">Szkoła Psychoterapii Gestalt oraz szkolenia w nurcie EFT.</p>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="material-symbols-outlined text-primary pt-1">groups</span>
                        <p className="text-lg text-on-surface">Szkoła Trenerów Biznesu Elżbiety Sołtys.</p>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="material-symbols-outlined text-primary pt-1">verified</span>
                        <p className="text-lg text-on-surface">The Art &amp; Science of Coaching (Erickson College dla Wszechnicy UJ) oraz certyfikacja Coach ICF.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Private Note */}
        <section className="py-24 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="font-headline text-3xl md:text-4xl mb-12 italic text-on-surface text-center">Prywatnie</h2>
                <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
                    <p>
                        Marzy mi się, aby moje dzieci żyły w świecie, w którym ludzie częściej słuchają, by zrozumieć, a nie tylko odpowiedzieć. Wierzę, że umiejętność przyjęcia perspektywy drugiej osoby po prostu ułatwia nam wspólne życie.
                    </p>
                    <p>
                        Prywatnie kocham góry, choć od kilku lat częściej niż na szczyty, wspinam się na wyżyny swojej cierpliwości, ogarniając moich bliźniaków ;) Do szczęścia potrzebuję słońca, plaży, dobrej książki i kawy. Fascynuje mnie ludzka różnorodność, której przyglądam się z życzliwą ciekawością. Można powiedzieć, że w życiu albo gadam, albo słucham – i w obu tych rolach czuję, że jestem dokładnie tam, gdzie powinnam być.
                    </p>
                </div>
            </div>
            
            {/* Photo Gallery */}
            <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-[3/4] overflow-hidden shadow-lg rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="/images/zdj prywatnie/7009ECEF-F1D7-4C94-9A06-1CC30E7C9362_1_105_c.jpeg" alt="Kilimanjaro" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden shadow-lg rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="/images/zdj prywatnie/6615C26E-079A-44DB-9185-B56E7C00D9F6_1_105_c.jpeg" alt="Z rodziną" className="w-full h-full object-cover object-top" />
                </div>
                <div className="aspect-[3/4] overflow-hidden shadow-lg rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="/images/zdj prywatnie/CFA184B0-BA0D-4637-AB45-3F395916D313_1_105_c.jpeg" alt="Pola ryżowe" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden shadow-lg rounded-2xl hover:scale-[1.02] transition-transform duration-500">
                    <img src="/images/zdj prywatnie/1871AE02-9870-4FC8-83D1-0FF05C1BB704_1_105_c.jpeg" alt="Słońce" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-surface reveal">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-primary text-white rounded-[3rem] p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-2xl md:text-3xl font-headline italic leading-relaxed max-w-3xl mx-auto">
                            Niezależnie od tego, ile masz lat i jaka jest Twoja historia – jeśli chcesz mieć fajniejsze relacje i spokojną głowę, to miejsce jest dla Ciebie.
                        </p>
                    </div>
                    {/* Decorative blob */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
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
