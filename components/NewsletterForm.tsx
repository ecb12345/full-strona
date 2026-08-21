"use client";

import { useEffect } from "react";

export function NewsletterForm({ formId = "E23vqZ" }: { formId?: string }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).ml = (window as any).ml || function () {
        ((window as any).ml.q = (window as any).ml.q || []).push(arguments);
      };
      (window as any).ml('account', '2343740');

      if (!document.getElementById("mailerlite-universal-js")) {
        const script = document.createElement("script");
        script.id = "mailerlite-universal-js";
        script.async = true;
        script.src = "https://assets.mailerlite.com/js/universal.js";
        document.head.appendChild(script);
      }
    }
  }, [formId]);

  return (
    <div className="ml-embedded" data-form={formId}></div>
  );
}
