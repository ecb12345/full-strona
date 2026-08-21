"use client";

import { useState, useEffect } from "react";

export function NewsletterForm({ formId = "D6dfkq" }: { formId?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mlLoaded, setMlLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).ml = (window as any).ml || function () {
        ((window as any).ml.q = (window as any).ml.q || []).push(arguments);
      };
      (window as any).ml('account', '2343740');

      let script = document.getElementById("mailerlite-universal-js") as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.id = "mailerlite-universal-js";
        script.async = true;
        script.src = "https://assets.mailerlite.com/js/universal.js";
        document.head.appendChild(script);
      }

      // Check if MailerLite successfully injected form
      const checkML = setInterval(() => {
        const container = document.querySelector(".ml-embedded");
        if (container && container.children.length > 0) {
          setMlLoaded(true);
          clearInterval(checkML);
        }
      }, 500);

      return () => clearInterval(checkML);
    }
  }, [formId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    try {
      if (typeof window !== "undefined" && (window as any).ml) {
        try {
          (window as any).ml('subscribe', { email, name });
        } catch (err) {
          console.log(err);
        }
      }
      
      await fetch(`https://assets.mailerlite.com/json/2343740/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            name: name,
            email: email
          }
        }),
        mode: "no-cors"
      }).catch(() => {});

      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-6 text-center animate-fade-in">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
          <span className="material-symbols-outlined text-white text-3xl">check_circle</span>
        </div>
        <h4 className="font-headline text-3xl mb-2 text-white font-bold">Dziękuję!</h4>
        <p className="text-white/90 text-base font-medium">Pomyślnie zapisano na newsletter.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[700px] mx-auto">
      {/* MailerLite universal JS container */}
      <div className="ml-embedded" data-form={formId}></div>

      {/* Fallback form rendered if MailerLite form is not yet hydrated */}
      {!mlLoaded && (
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-2"
        >
          <div className="flex-grow w-full">
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Imię" 
              className="w-full h-[56px] px-8 bg-white/15 border border-white/30 rounded-xl text-white text-sm outline-none transition-all focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/10 placeholder:text-white/70 placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[10px] placeholder:font-bold" 
            />
          </div>
          <div className="flex-grow w-full">
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="Email" 
              className="w-full h-[56px] px-8 bg-white/15 border border-white/30 rounded-xl text-white text-sm outline-none transition-all focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/10 placeholder:text-white/70 placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[10px] placeholder:font-bold" 
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full sm:w-auto min-w-[180px] h-[56px] bg-white text-[#9a004a] rounded-xl px-8 font-extrabold uppercase tracking-[0.15em] text-[11px] hover:-translate-y-1 hover:shadow-2xl hover:bg-white/95 transition-all duration-300 flex items-center justify-center whitespace-nowrap disabled:opacity-50 cursor-pointer"
          >
            {loading ? "ZAPISYWANIE..." : "ZAPISZ SIĘ"}
          </button>
        </form>
      )}
    </div>
  );
}
