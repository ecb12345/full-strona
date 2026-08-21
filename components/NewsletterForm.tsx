"use client";

import { useEffect } from "react";

export function NewsletterForm({ formId = "E23vqZ" }: { formId?: string }) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ml) {
      try {
        (window as any).ml('account', '2343740');
      } catch (err) {
        console.error(err);
      }
    }
  }, [formId]);

  return (
    <div className="ml-embedded" data-form={formId}></div>
  );
}
