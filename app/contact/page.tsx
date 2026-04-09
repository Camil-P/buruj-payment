"use client";

import React, { useState } from "react";

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
                headers: {
                    "Content-Type": "application/json",
                },
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
        <div className="flex flex-col min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 font-sans py-16 px-6 sm:px-12">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-emerald-100 mb-4">
                        Kontaktirajte nas
                    </h1>
                    <div className="w-24 h-1 bg-amber-500 rounded-full"></div>
                    <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                        Imate pitanje, predlog ili želite da donirate mimo trenutnih akcija? Stojimo vam na raspolaganju.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* ... Vaša leva kolona ostaje potpuno ista ... */}

                    {/* Desna kolona: Kontakt Forma */}
                    <div className="bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50 mb-6">Pošaljite nam poruku</h2>

                        {isSubmitted ? (
                            <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 p-6 rounded-2xl text-center border border-emerald-200 dark:border-emerald-800">
                                <span className="text-4xl block mb-2">✅</span>
                                <h3 className="text-lg font-bold mb-1">Poruka je uspešno poslata!</h3>
                                <p className="text-sm">Odgovorićemo Vam u najkraćem mogućem roku.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Ime i prezime</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name" // DODATO
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="Unesite Vaše ime"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email adresa</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email" // DODATO
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="vas@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Naslov poruke</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject" // DODATO
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="Npr. Pitanje u vezi donacije"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Vaša poruka</label>
                                    <textarea
                                        id="message"
                                        name="message" // DODATO
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-emerald-950 dark:text-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Napišite nam kako vam možemo pomoći..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-14 flex items-center justify-center rounded-xl bg-emerald-900 dark:bg-emerald-100 text-emerald-50 dark:text-emerald-950 font-bold transition-all hover:bg-emerald-800 dark:hover:bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:ring-offset-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Slanje..." : "Pošalji poruku"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}