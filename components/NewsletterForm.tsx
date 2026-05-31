"use client";

import { useState } from "react";

export function NewsletterForm({ formId = "E23vqZ" }: { formId?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="py-4 text-center">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-2xl">check_circle</span>
        </div>
        <h4 className="font-headline text-2xl mb-2 text-white">Dziękuję!</h4>
        <p className="text-white/80 text-sm">Pomyślnie zapisano na newsletter.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        try {
            await fetch("https://formspree.io/f/xlgzvvea", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
            setIsSubmitted(true);
        } catch (err) {
            alert("Wystąpił błąd.");
        }
      }} 
      className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-[700px] mx-auto"
    >
      <div className="flex-grow w-full">
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Imię" 
          className="w-full h-[56px] px-10 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none transition-all focus:bg-white/15 focus:border-white/60 focus:ring-[4px] focus:ring-white/5 placeholder:text-white/50 placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[10px] placeholder:font-bold" 
        />
      </div>
      <div className="flex-grow w-full">
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Email" 
          className="w-full h-[56px] px-10 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none transition-all focus:bg-white/15 focus:border-white/60 focus:ring-[4px] focus:ring-white/5 placeholder:text-white/50 placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[10px] placeholder:font-bold" 
        />
      </div>
      <button 
        type="submit" 
        className="w-full sm:w-auto min-w-[180px] h-[56px] bg-white text-primary rounded-xl px-8 font-extrabold uppercase tracking-[0.15em] text-[11px] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
      >
        ZAPISZ SIĘ
      </button>
    </form>
  );
}
