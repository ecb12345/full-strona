"use client";

import { useEffect } from "react";
import Link from "next/link";


export default function Podcast() {
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
                <img src="/images/hero_podcast_v2.png" alt="Podcast - Jak się dogadać" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Intro Section (Under Hero) */}
        <section className="py-16 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">STREFA WIEDZY</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-10 text-on-surface">
                    Rozmowy, które pozwalają łączyć kropki
                </h1>
                <p className="text-on-surface-variant max-w-3xl leading-relaxed mx-auto mb-12">Bardzo się cieszę, że się tutaj jesteś. Znajdziesz tu wywiady z inspirującymi ludźmi i krótkie artykuły będące odpowiedzią na konkretne problemy. Wplatam w nie swoje i cudze historie, bo wierzę, że właśnie taka forma pozwoli Ci lepiej zapamiętać o co chodziło. Jeśli uczestniczyłeś w moim szkoleniu to baaardzo się cieszę, że się znów spotykamy. Wierzę, że treści na blogu będą dla Ciebie świetną okazją do powtórki i możliwością ugruntowania wiedzy. Jeśli nie byłeś na moim szkoleniu, to nic straconego ;)</p>
                <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
                    <a href="#" className="hover:scale-110 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="Spotify" className="h-6" /></a>
                    <a href="#" className="hover:scale-110 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Podcasts_%28iOS%29.svg" alt="Apple Podcasts" className="h-6" /></a>
                    <span className="text-on-surface font-bold text-[10px] uppercase tracking-widest">Google Podcasts</span>
                </div>
            </div>
        </section>

        {/* Latest Episodes */}
        <section className="pb-24 bg-surface reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl mb-4 italic">Najnowsze odcinki</h2>

                    <a href="https://jaksiedogadac.pl/spis-tresci/" className="inline-block text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary pb-1 hover:opacity-70 transition-all">Zobacz wszystkie</a>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Blog Item */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 relative">
                            <img src="/images/ep_42.png" alt="Empatyczne słuchanie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Artykuł</div>
                        </div>
                        <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Empatyczne słuchanie</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Czyli: słuchaj uchem, a nie brzuchem</p>
                        <a href="https://jaksiedogadac.pl/empatyczne-sluchanie/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-md">
                            Czytaj
                        </a>
                    </div>
                    {/* Blog Item 2 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 relative">
                            <img src="/images/feedback_lifestyle.png" alt="Mapa miłości" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Artykuł</div>
                        </div>
                        <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Mapa miłości</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Najgorsze nie zauważać</p>
                        <a href="https://jaksiedogadac.pl/mapa-milosci/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-md">
                            Czytaj
                        </a>
                    </div>
                    {/* Blog Item 3 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl mb-8 relative">
                            <img src="/images/anger_management_lifestyle.png" alt="Uwaga: Złość" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Artykuł</div>
                        </div>
                        <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">Uwaga: Złość</h3>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8">Co zrobić, gdy czujesz, że zaraz wybuchniesz?</p>
                        <a href="https://jaksiedogadac.pl/co-zrobic-gdy-czujesz-ze-zaraz-wybuchniesz/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all shadow-md">
                            Czytaj
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Search by Topics */}
        <section className="py-16 bg-surface-container-low reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <h2 className="font-headline text-4xl mb-4 italic text-center">Szukaj według tematów</h2>
                <div className="max-w-md mx-auto bg-primary rounded-2xl p-6 mb-12 text-center shadow-xl">
                    <p className="text-white font-bold">Pierwszy podcast już w przygotowaniu :)</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 mt-2">Stay tuned</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="bg-on-surface text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">Wszystkie</button>
                    <button className="bg-white text-on-surface px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">Biznes</button>
                    <button className="bg-white text-on-surface px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">Relacje</button>
                    <button className="bg-white text-on-surface px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">Rozwój osobisty</button>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <a href="https://jaksiedogadac.pl/spis-tresci/" className="bg-primary text-white px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl hover:brightness-110 transition-all">Blog</a>
                    <button className="bg-primary text-white px-10 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl hover:brightness-110 transition-all">Podcast</button>
                </div>
            </div>

            {/* Full-width Decorative Background Section with Podcast List */}
            <section className="relative w-full overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/tło 3.png" alt="Tło dekoracyjne" className="w-full h-full object-cover" />
                </div>
                
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 py-24">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* List Item */}
                        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl flex items-center justify-between group hover:shadow-xl transition-all cursor-pointer border border-white/20">
                            <div className="flex items-center gap-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mic</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-1">Biznes • 24 min</p>
                                    <h4 className="font-headline text-xl group-hover:text-primary transition-colors">Lider jako mediator w konfliktach</h4>
                                </div>
                            </div>
                            <p className="hidden sm:block text-[10px] font-bold text-on-surface-variant/40 uppercase">- już wkrótce</p>
                        </div>
                        
                        {/* List Item */}
                        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl flex items-center justify-between group hover:shadow-xl transition-all cursor-pointer border border-white/20">
                            <div className="flex items-center gap-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mic</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-1">Relacje • 40 min</p>
                                    <h4 className="font-headline text-xl group-hover:text-primary transition-colors">Dlaczego jedna osoba w związku ma większe ciśnienie na zmianę, a druga się opiera?</h4>
                                </div>
                            </div>
                            <p className="hidden sm:block text-[10px] font-bold text-on-surface-variant/40 uppercase">- już wkrótce</p>
                        </div>

                        {/* List Item */}
                        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl flex items-center justify-between group hover:shadow-xl transition-all cursor-pointer border border-white/20">
                            <div className="flex items-center gap-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined">mic</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-1">Rozwój • 40 min</p>
                                    <h4 className="font-headline text-xl group-hover:text-primary transition-colors">Jak nie myśleć o pracy po pracy</h4>
                                </div>
                            </div>
                            <p className="hidden sm:block text-[10px] font-bold text-on-surface-variant/40 uppercase">- już wkrótce</p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                         <button className="bg-white/90 backdrop-blur-md border-2 border-primary/20 px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all shadow-lg rounded-full">Załaduj więcej odcinków</button>
                    </div>
                </div>
            </section>

        </section>


      </main>
    </>
  );
}
