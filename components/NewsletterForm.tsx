"use client";

import { useState, useEffect } from "react";

export function NewsletterForm({ formId = "D6dfkq" }: { formId?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    }
  }, [formId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    try {
      if (typeof window !== "undefined" && (window as any).ml) {
        try {
          (window as any).ml('subscribe', { email });
        } catch (err) {}
      }
      
      await fetch(`https://assets.mailerlite.com/json/2343740/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: { email: email }
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
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
          <span className="material-symbols-outlined text-white text-2xl">check_circle</span>
        </div>
        <h4 className="font-headline text-2xl mb-1 text-white font-bold">Dziękuję!</h4>
        <p className="text-white/90 text-sm font-medium">Pomyślnie zapisano na newsletter.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[520px] mx-auto">
      <div className="ml-embedded hidden" data-form={formId}></div>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
      >
        <div className="flex-grow w-full">
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="EMAIL" 
            className="w-full h-[44px] px-6 bg-white text-[#1c1c18] rounded-full text-xs font-medium outline-none transition-all focus:ring-4 focus:ring-white/20 placeholder:text-[#8d6f76] placeholder:uppercase placeholder:tracking-[0.12em] placeholder:text-[10px] placeholder:font-bold shadow-md" 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full sm:w-auto min-w-[135px] h-[44px] bg-white text-[#9a004a] rounded-full px-6 font-extrabold uppercase tracking-[0.15em] text-[10px] hover:-translate-y-0.5 hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center whitespace-nowrap disabled:opacity-50 cursor-pointer shadow-md"
        >
          {loading ? "ZAPISYWANIE..." : "ZAPISZ SIĘ"}
        </button>
      </form>
      <p className="mt-3 text-[10px] text-white/85 text-center leading-normal">
        Zapisując się do newslettera zgadzasz się na otrzymywanie wiadomości e-mail dotyczących komunikacji, relacji i psychologii. W każdej chwili możesz zrezygnować.
      </p>
    </div>
  );
}
