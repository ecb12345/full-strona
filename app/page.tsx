"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const [isModalSubmitted, setIsModalSubmitted] = useState(false);

  useEffect(() => {
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
                <img src="/images/hero_home.png" alt="Ela Cwynar-Budzińska - O komunikacji po ludzku" className="w-full h-auto object-cover max-h-[90vh]" />
            </div>
        </section>

        {/* Header Text Section (Under Hero) */}
        <section className="py-16 bg-surface reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="uppercase tracking-[0.2em] font-bold text-primary mb-8 text-xs">Ekspert od relacji</p>
                <h1 className="font-headline text-4xl md:text-5xl leading-tight mb-10 text-on-surface">
                    Odzyskaj sprawczość w każdej rozmowie.<br />
                    Niezależnie od tego, czy stoisz przed zarządem korporacji, czy przed partnerem w kuchni.
                </h1>
                <p className="text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                    Nauczę Cię zarządzać napięciem, stawiać granice i budować porozumienie tam, gdzie do tej pory był tylko konflikt lub cisza.
                </p>
                <a href="#oferta" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all hover:shadow-xl transform hover:-translate-y-1">
                    Sprawdź, jak mogę Ci pomóc
                </a>
            </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-surface-container-low reveal">
            <div className="max-w-4xl mx-auto px-6 text-justify text-on-surface leading-relaxed">
                <h2 className="font-headline text-4xl mb-10 text-on-surface text-center">Nikt nie uczył nas, jak się dogadywać.</h2>
                
                <p className="mb-8">
                    W szkole uczyliśmy się wzorów i dat, ale nikt nie pokazał nam, jak mówić o potrzebach, jak reagować, gdy coś nam się nie podoba i jak zarządzać emocjami, gdy ciało mówi „walcz albo uciekaj”.
                </p>
                
                <p className="mb-8 font-bold">
                    A wszystko, co w życiu dobre – świetny interes, serdeczna relacja, potężny ruch społeczny – zaczyna się od rozmowy.
                </p>
                
                <p className="mb-0">
                    Niezależnie od tego, czy prowadzisz zespół w dużej korporacji, czy próbujesz porozumieć się z partnerem po pracy, mechanizm jest ten sam. Kiedy napięcie rośnie, tracimy kontrolę nad tym, jak reagujemy. Efekt? Odbijasz się od ściany, a Twoje starania idą na marne.
                </p>
            </div>
        </section>

        {/* Experience Panel */}
        <section className="py-12 reveal">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-primary text-white rounded-[3rem] p-10 lg:p-14 text-justify shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#ffffff" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97.7,-2.1C98.6,13.8,94.4,30.1,84.7,43.1C75,56.1,59.8,65.8,44.1,72.5C28.4,79.2,12.2,82.9,-3.5,88.7C-19.2,94.5,-34.4,102.4,-47.9,96.4C-61.4,90.4,-73.2,70.5,-80.6,50.7C-88,30.9,-91,11.2,-87.3,-6.9C-83.6,-25,-73.2,-41.5,-60.2,-53.4C-47.2,-65.3,-31.6,-72.6,-16.9,-75.6C-2.2,-78.6,11.6,-77.3,30.6,-83.6Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    
                    <h3 className="font-headline text-3xl md:text-4xl mb-6 leading-tight text-center">Dlaczego to, co działa w korporacji, uratuje Twój dom i odwrotnie?</h3>
                    <p className="max-w-2xl mx-auto text-pink-100 mb-10 text-center leading-relaxed">
                        Przez 17 lat szkoliłam liderów w największych firmach. Równolegle, w moim gabinecie, pomagałam parom wyjść z najtrudniejszych kryzysów. Czego mnie to nauczyło? Mechanizmy są te same. Nasze życie nie dzieli się na szczelne przedziały. Problemy z domu zabieramy do pracy, a stres z biura przenosimy do sypialni. Ty jesteś mostem między tymi światami.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20 mb-10">
                        <div className="pt-6 md:pt-0">
                            <div className="text-5xl font-bold font-headline mb-1">17+</div>
                            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-pink-200">Lat doświadczenia</div>
                        </div>
                        <div className="pt-6 md:pt-0">
                            <div className="text-5xl font-bold font-headline mb-1">15k</div>
                            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-pink-200">Godzin szkoleniowych</div>
                        </div>
                        <div className="pt-6 md:pt-0">
                            <div className="text-5xl font-bold font-headline mb-1">5+</div>
                            <div className="text-[9px] uppercase tracking-[0.2em] font-bold text-pink-200">Lat w gabinecie</div>
                        </div>
                    </div>
 
                    <div className="text-center">
                        <Link href="/omnie" className="inline-block border border-white/30 text-white px-8 py-3 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary transition-all rounded-full">Poznaj moją historię</Link>
                    </div>
                </div>
            </div>
        </section>

        {/* Post-Banner Text */}
        <section className="py-16 reveal">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-xl font-medium text-on-surface-variant leading-relaxed">
                    Daję Ci konkretne narzędzia zarządzania napięciem, które działają tak samo skutecznie, gdy negocjujesz kontrakt, i gdy walczysz o bliskość z najważniejszą osobą w Twoim życiu.
                </p>
            </div>
        </section>

        {/* Offer Section */}
        <section id="oferta" className="py-16 bg-surface-container-high reveal">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-outline/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img src="/images/tower-of-babel.png" alt="Szkolenia dla firm - Wieża Babel" className="w-full h-full object-cover object-center" loading="lazy" />
                        </div>
                        <div className="p-10 text-center">
                            <h3 className="font-headline text-2xl mb-4">Szkolenia dla firm</h3>
                            <p className="text-on-surface-variant mb-8 leading-relaxed">Usprawnienie pracy Twojej i Twojego zespołu. Szkolenia zamknięte dla firm.</p>
                            <Link href="/szkolenia" className="text-primary font-bold uppercase tracking-widest text-[10px] hover:underline">Dowiedz się więcej</Link>
                        </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-outline/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img src="/images/warsztaty-dla-par.png" alt="Warsztaty dla par" className="w-full h-full object-cover object-top" loading="lazy" />
                        </div>
                        <div className="p-10 text-center">
                            <h3 className="font-headline text-2xl mb-4">Warsztaty dla par</h3>
                            <p className="text-on-surface-variant mb-8 leading-relaxed">Powrót do bliskości poprzez rozmowę. Praca nad zrozumieniem potrzeb i bezpiecznym wyrażaniem emocji.</p>
                            <Link href="/pary" className="text-primary font-bold uppercase tracking-widest text-[10px] hover:underline">Dowiedz się więcej</Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl overflow-hidden border border-outline/5 hover:-translate-y-2 transition-transform duration-500 shadow-sm hover:shadow-xl">
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img src="/images/kursy-online.png" alt="Kursy online" className="w-full h-full object-cover object-top" loading="lazy" />
                        </div>
                        <div className="p-10 text-center">
                            <h3 className="font-headline text-2xl mb-4">Kursy online</h3>
                            <p className="text-on-surface-variant mb-8 leading-relaxed">Budowanie wewnętrznej siły i odporności. Nauka stawiania granic z szacunkiem do siebie i innych.</p>
                            <Link href="/kursy" className="text-primary font-bold uppercase tracking-widest text-[10px] hover:underline">Dowiedz się więcej</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Trusted By Marquee */}
        <section className="py-16 bg-surface border-y border-outline/5 reveal overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 text-center mb-12">
                <p className="uppercase tracking-[0.2em] font-bold text-primary text-[10px]">Zaufali mi liderzy największych organizacji</p>
            </div>
            <div className="flex overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
                    {/* Repeated items for infinite scroll effect */}
                    {[...Array(2)].map((_, index) => (
                      <div key={index} className="flex gap-12 items-center">
                        {["Deloitte", "DLA Piper", "Ernst & Young", "PwC", "Ocado Technology", "MyNetwork", "Schibsted", "Collibri Technology", "Motorola", "Heineken", "Avanade", "Azimo", "Rockwell Automations", "Elektrolux", "PepsiCo", "Herbalife", "Capgemini", "Mota Engil", "Weatherford Polska", "Gothaer", "Pandora", "Emitel", "Allfounds", "NOKIA", "Raiffeisen Bank SA", "BNP", "Grupa CRH", "BSH", "Swarovski", "Interchem", "TUV"].map((brand, idx) => (
                            <span key={idx} className="text-on-surface-variant/70 font-bold text-[11px] uppercase tracking-[0.25em]">{brand}</span>
                        ))}
                      </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 bg-surface-container-low reveal">
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-12 shadow-sm border border-outline/5 flex flex-col rounded-xl">
                        <div className="text-5xl text-primary/20 mb-4 font-headline">“</div>
                        <p className="text-on-surface-variant mb-10 flex-grow italic leading-relaxed">&quot;Ela to wybitny trener, pełen pasji i oddania swojej pracy... Jej wiedza i kompetencje są na najwyższym poziomie...&quot;</p>
                        <div className="border-t border-outline/5 pt-8">
                            <p className="font-bold text-on-surface">Katarzyna Smoleń-Drzazga</p>
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-70">PRAGMATIC CODERS</p>
                        </div>
                    </div>
                    <div className="bg-white p-12 shadow-sm border border-outline/5 flex flex-col rounded-xl">
                        <div className="text-5xl text-primary/20 mb-4 font-headline">“</div>
                        <p className="text-on-surface-variant mb-10 flex-grow italic leading-relaxed">&quot;Ela dla mnie jest uosobieniem stuprocentowego profesjonalizmu w serdecznej, ludzkiej odsłonie... czuję postęp, bo wychodzę z sali z konkretnymi narzędziami...&quot;</p>
                        <div className="border-t border-outline/5 pt-8">
                            <p className="font-bold text-on-surface">Elżbieta Pogoda</p>
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-70">ROZWOJOWNIA LABIQ</p>
                        </div>
                    </div>
                    <div className="bg-white p-12 shadow-sm border border-outline/5 flex flex-col rounded-xl">
                        <div className="text-5xl text-primary/20 mb-4 font-headline">“</div>
                        <p className="text-on-surface-variant mb-10 flex-grow italic leading-relaxed">&quot;Warsztaty z Elą to inspirujące doświadczenie... pomagają w komunikacji zarówno w życiu zawodowym, jak i prywatnym... Bardzo polecam!&quot;</p>
                        <div className="border-t border-outline/5 pt-8">
                            <p className="font-bold text-on-surface">Dorota Lichatańska</p>
                            <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-70">PIGEON STUDIO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Combined Artistic Bio Section */}
        <section id="o-mnie" className="relative w-full overflow-hidden reveal">
            <img src="/images/tło 4.png" alt="Ela Cwynar-Budzińska Bio" className="w-full h-auto object-cover min-h-[600px] lg:min-h-0 object-[0%_center] lg:object-center" />
            
            <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-[1440px] mx-auto w-full px-6 md:px-16">
                    <div className="lg:w-1/2 max-w-2xl">
                        <h2 className="font-headline text-4xl leading-tight mb-8 text-on-surface italic">O komunikacji po ludzku</h2>
                        <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
                            <p>
                                Przez lata obserwowałam, jak genialne strategie biznesowe upadają przez brak umiejętności rozmowy. I jak wspaniali ludzie oddalają się od siebie, bo nie potrafią nazwać tego, co czują.
                            </p>
                            <p>
                                Moje podejście łączy twardą wiedzę o mechanizmach psychologicznych z głęboką empatią. Nie daję gotowych recept, ale narzędzia, które pozwalają budować mosty tam, gdzie inni widzą przepaść.
                            </p>
                            
                            <div className="py-6 flex justify-center">
                                <Link href="/omnie" className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all shadow-xl">
                                    Poznaj moją historię
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Gray Spacer Bar */}
        <div className="w-full h-24 bg-surface-container-high"></div>



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
