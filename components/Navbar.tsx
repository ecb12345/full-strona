"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-[10px] font-bold uppercase tracking-[0.2em] hidden md:block">
          <div className="max-w-[1440px] mx-auto px-16 flex justify-end items-center gap-6">
              <span className="opacity-80">Bądź na bieżąco:</span>
              <div className="flex gap-4 items-center">
                  <a href="https://www.instagram.com/jaksiedogadac/" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      INSTAGRAM
                  </a>
                  <a href="https://www.facebook.com/jaksiedogadacblog/" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                      FACEBOOK
                  </a>
                  <a href="https://www.linkedin.com/in/elzbietacwynarbudzinska/" className="hover:text-pink-200 transition-colors flex items-center gap-1">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      LINKEDIN
                  </a>
              </div>
          </div>
      </div>

      {/* Header / Navigation */}
      <header className="bg-zinc-100 border-b border-outline/10 h-24 top-0 sticky z-50 transition-all duration-300">
          <nav className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center h-full">
              <div className="flex-grow text-xl md:text-2xl font-normal tracking-tighter text-primary-container font-headline">
                  <Link href="/">Ela Cwynar-Budzińska</Link>
              </div>
              
              <div className="hidden lg:flex gap-8 items-center">
                  <Link href="/szkolenia" className={pathname === '/szkolenia' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap"}>Szkolenia dla firm</Link>
                  <Link href="/pary" className={pathname === '/pary' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap"}>Warsztaty dla par</Link>
                  {/* Kursy Online with Mega Menu */}
                  <div className="group h-full flex items-center">
                      <Link href="/kursy" className={pathname === '/kursy' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-1 py-4" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-1 py-4"}>
                          Kursy online
                          <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
                      </Link>
                      
                      {/* Mega Menu Dropdown */}
                      <div className="absolute top-full left-0 w-full bg-[#fdf9f2] border-t border-outline/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                          {/* Decorative Art Elements */}
                          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#b89762]/10 rounded-full blur-3xl"></div>
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                  <circle cx="20" cy="20" r="15" fill="#c2185b"/>
                                  <circle cx="80" cy="70" r="25" fill="#b89762"/>
                                  <path d="M 10 80 Q 30 60 50 80 T 90 80" stroke="#e67e22" fill="none" strokeWidth="0.5"/>
                              </svg>
                          </div>
                          <div className="max-w-[1440px] mx-auto px-16 py-12 text-on-surface relative z-10">
                          
                              <div className="text-center mb-10">
                                  <h3 className="font-headline text-3xl">Kursy online</h3>
                                  <div className="w-12 h-1 bg-[#b89762] mx-auto mt-2 rounded-full"></div>
                              </div>
                              
                              <div className="flex justify-center gap-12 max-w-5xl mx-auto">
                                  {/* Card 1 */}
                                  <a href="https://www.kursokomunikacji.pl/" className="group/card block w-full max-w-[320px] transition-all duration-500">
                                      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md group-hover/card:shadow-2xl transition-all duration-500 relative">
                                          <img src="/images/kurs_sztuka.jpg" alt="Sztuka komunikacji" className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                                          <div className="absolute top-4 left-4">
                                              <span className="bg-primary text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">Bestseller</span>
                                          </div>
                                      </div>
                                      <div className="bg-primary text-white text-center py-3 px-8 rounded-full font-body text-[11px] font-bold group-hover:bg-[#a3154d] transition-all shadow-md uppercase tracking-[0.25em] leading-tight mx-4 -mt-4 relative z-10">
                                          Sztuka<br/>komunikacji
                                      </div>
                                  </a>
                                                                    {/* Card 2 (Waitlist) */}
                                   <button 
                                      onClick={() => { setIsWaitlistOpen(true); setIsSubmitted(false); }}
                                      className="group/card block w-full max-w-[320px] transition-all duration-500 text-left"
                                   >
                                      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md group-hover/card:shadow-2xl transition-all duration-500 relative">
                                          <img src="/images/kurs_konflikty.jpg" alt="Rozwiązywanie konfliktów" className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700" />
                                          <div className="absolute top-4 left-4">
                                              <span className="bg-primary text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">Wkrótce</span>
                                          </div>
                                      </div>
                                      <div className="bg-primary text-white text-center py-3 px-8 rounded-full font-body text-[11px] font-bold group-hover:bg-[#a3154d] transition-all shadow-md uppercase tracking-[0.25em] leading-tight mx-4 -mt-4 relative z-10">
                                          Rozwiązywanie<br/>konfliktów
                                      </div>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <Link href="/omnie" className={pathname === '/omnie' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap"}>O mnie</Link>
                  <Link href="/podcast" className={pathname === '/podcast' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap"}>Podcast</Link>
                  <Link href="/kontakt" className={pathname === '/kontakt' ? "text-primary border-b-2 border-primary pb-1 font-medium text-xs uppercase tracking-wider whitespace-nowrap" : "text-on-surface hover:text-primary transition-colors font-medium text-xs uppercase tracking-wider whitespace-nowrap"}>Kontakt</Link>
              </div>
          </nav>
      </header>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsWaitlistOpen(false)}></div>
              
              <div className="relative bg-surface w-full max-w-lg mx-4 p-8 md:p-12 shadow-2xl rounded-2xl transform transition-transform duration-300">
                  <button onClick={() => setIsWaitlistOpen(false)} className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-2xl">close</span>
                  </button>
                  
                  <div className="text-center">
                        <h3 className="font-headline text-3xl mb-4">Kurs w przygotowaniu</h3>
                        <p className="text-on-surface-variant mb-8 leading-relaxed text-sm">
                            Kurs właśnie powstaje. Zapisz się na listę oczekujących, by jako pierwszy otrzymać wiadomość o uruchomieniu kursu. Bądźmy w kontakcie :)
                        </p>
                        
                        {isSubmitted ? (
                            <div className="py-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                                </div>
                                <h4 className="font-headline text-2xl mb-2 text-primary">Dziękuję!</h4>
                                <p className="text-on-surface-variant text-sm">Twoje dane zostały zapisane. Odezwę się do Ciebie!</p>
                            </div>
                        ) : (
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.currentTarget;
                            try {
                                await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
                                setIsSubmitted(true);
                            } catch (err) {
                                alert("Wystąpił błąd.");
                            }
                        }} action="https://formspree.io/f/xlgzvvea" method="POST" className="space-y-4">
                            <input type="hidden" name="Temat" value="Zapis na listę oczekujących - Kurs Konflikt" />
                            <input type="hidden" name="_subject" value="Kurs konflikt" />
                            <div className="text-left">
                                <input type="email" name="email" required placeholder="Twój adres e-mail" className="w-full px-6 py-4 bg-white border border-outline/20 rounded-lg outline-none focus:border-primary transition-colors text-sm" />
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-4 font-bold uppercase tracking-[0.2em] text-xs rounded-lg shadow-xl hover:bg-primary-container transition-all active:scale-[0.98]">ZAPISZ MNIE</button>
                        </form>
                        )}
                    </div>
              </div>
          </div>
      )}
    </>
  );
}
