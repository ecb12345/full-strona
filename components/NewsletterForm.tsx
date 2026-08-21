"use client";

import { useState } from "react";

export function NewsletterForm({ formId = "D6dfkq" }: { formId?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    } catch (err) {
      // Ignore
    } finally {
      setLoading(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-4 text-center animate-fade-in">
        <h2 className="font-headline text-4xl text-white">
          Super, jesteśmy w kontakcie :)
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[620px] mx-auto">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
      >
        <div className="flex-grow w-full">
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="EMAIL" 
            className="w-full h-[50px] px-8 bg-white text-[#1c1c18] rounded-full text-xs font-semibold outline-none transition-all focus:ring-4 focus:ring-white/20 placeholder:text-[#8d6f76] placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[10px] placeholder:font-bold shadow-md" 
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full sm:w-auto min-w-[160px] h-[50px] bg-white text-[#9a004a] rounded-full px-8 font-extrabold uppercase tracking-[0.18em] text-[11px] hover:-translate-y-0.5 hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center whitespace-nowrap disabled:opacity-50 cursor-pointer shadow-md"
        >
          {loading ? "ZAPISYWANIE..." : "ZAPISZ SIĘ"}
        </button>
      </form>
    </div>
  );
}
