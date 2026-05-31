"use client";

import { useEffect } from "react";

export function NewsletterForm({ formId = "E23vqZ" }: { formId?: string }) {
  useEffect(() => {
    // MailerLite logic needs to execute on mount to find the dynamically rendered div.
    const scriptUrl = "https://assets.mailerlite.com/js/universal.js";
    
    // Set up ml object
    // @ts-ignore
    window.ml = window.ml || function() { (window.ml.q = window.ml.q || []).push(arguments); };
    // @ts-ignore
    window.ml('account', '2343740');

    // Create the script tag
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    
    // Append it
    document.body.appendChild(script);

    return () => {
      // Clean up script so it can be re-run on next mount
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div className="ml-embedded" data-form={formId}></div>;
}
