"use client";

import React, { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Došlo je do greške prilikom slanja poruke. Pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Greška:", error);
      alert("Došlo je do greške na serveru.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans py-16 px-4 sm:px-6">
      <div className="w-full max-w-2xl mx-auto">

        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              Kontakt
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Kontaktirajte nas
            </h1>
            <p className="text-base text-muted-foreground max-w-xl">
              Imate pitanje, predlog ili želite da donirate mimo trenutnih akcija? Stojimo vam na raspolaganju.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-foreground mb-5">Pošaljite nam poruku</h2>

            {isSubmitted ? (
              <BlurFade delay={0.05}>
                <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center border border-border/50">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-1">Poruka je uspešno poslata!</h3>
                  <p className="text-xs text-muted-foreground">Odgovorićemo Vam u najkraćem mogućem roku.</p>
                </div>
              </BlurFade>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: "name", label: "Ime i prezime", type: "text", placeholder: "Unesite Vaše ime" },
                  { id: "email", label: "Email adresa", type: "email", placeholder: "vas@email.com" },
                  { id: "subject", label: "Naslov poruke", type: "text", placeholder: "Npr. Pitanje u vezi donacije" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-xs font-medium text-muted-foreground mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      className="h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">Vaša poruka</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 resize-none"
                    placeholder="Napišite nam kako vam možemo pomoći..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#059669] to-[#0ea87a] text-sm font-semibold text-white shadow-md shadow-emerald-500/15 transition-all hover:shadow-lg hover:shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                >
                  {isLoading ? "Slanje..." : "Pošalji poruku"}
                </button>
              </form>
            )}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
