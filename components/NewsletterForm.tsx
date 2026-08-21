"use client";

import { useEffect } from "react";

export function NewsletterForm({ formId = "E23vqZ" }: { formId?: string }) {
  useEffect(() => {
    const initMailerLite = () => {
      if (typeof window !== "undefined" && (window as any).ml) {
        try {
          (window as any).ml('account', '2343740');
        } catch (err) {
          console.error(err);
        }
      }
    };

    initMailerLite();
    const timer1 = setTimeout(initMailerLite, 300);
    const timer2 = setTimeout(initMailerLite, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [formId]);

  return (
    <div className="ml-embedded" data-form={formId}></div>
  );
}
