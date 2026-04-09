"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

// Tipovi za akciju
interface Highlight {
  label: string;
  value: string;
}

interface Campaign {
  id: string;
  title: string;
  description: string;
  seoDescription: string;
  goal: number;
  image?: string;         // Opciono polje za poster
  highlights?: Highlight[]; // Opcioni niz fleksibilnih podataka
}

export default function PaymentView({ campaign }: { campaign: Campaign }) {
  // State čuva samo jednostavan string (koje je dugme kliknuto)
  const [method, setMethod] = useState<"PAYPAL" | "BANK" | null>(null);

  // Podaci za banku (hardkodirani)
  const bankAccount = "160000000000000000";
  const recipientName = "Emanet Fondacija"; // Ažurirano ime
  const paypalLink = "https://paypal.me/TvojNalog";
  
  // Formatiramo QR string
  const ipsQrString = `K:PR|V:01|C:1|R:${bankAccount}|N:${recipientName}|I:RSD1000,00|SF:289|S:Donacija za ${campaign.title}|RO:${campaign.id}`;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 flex-1">
      {/* Dugmići za izbor */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
        <button
          onClick={() => setMethod("PAYPAL")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 border-2 shadow-sm ${
            method === "PAYPAL"
              ? "bg-emerald-900 text-amber-500 border-emerald-900 dark:bg-emerald-100 dark:text-emerald-950 dark:border-emerald-100 shadow-md transform -translate-y-0.5"
              : "bg-transparent text-emerald-900 dark:text-emerald-100 border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
          }`}
        >
          PayPal uplata
        </button>
        <button
          onClick={() => setMethod("BANK")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 border-2 shadow-sm ${
            method === "BANK"
              ? "bg-amber-500 text-emerald-950 border-amber-500 shadow-md transform -translate-y-0.5"
              : "bg-transparent text-emerald-900 dark:text-emerald-100 border-emerald-200 dark:border-emerald-800 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-emerald-900/30"
          }`}
        >
          Direktno na račun (QR Kod)
        </button>
      </div>

      {/* Dinamički prikaz na osnovu izbora */}
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-emerald-100 dark:border-zinc-800 shadow-sm flex flex-col items-center">
        
        {!method && (
          <div className="flex flex-col items-center justify-center h-full text-center mt-8 relative z-10">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-emerald-500 text-2xl font-serif">?</span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
              Odaberite jedan od načina uplate iznad kako biste vidjeli instrukcije i podržali ovu akciju.
            </p>
          </div>
        )}

        {method === "PAYPAL" && (
          <div className="text-center py-8 relative z-10 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-3">PayPal Donacija</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg leading-relaxed">
              Vaša podrška putem PayPala je brza, sigurna i omogućava nam da odmah reagujemo tamo gdje je najpotrebije. Neka vaša sadaka bude primljena.
            </p>
            <a
              href={paypalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-emerald-900 dark:bg-emerald-100 px-8 text-emerald-50 dark:text-emerald-950 font-bold transition-all hover:bg-emerald-800 dark:hover:bg-white hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:ring-offset-2"
            >
              Nastavi na siguran PayPal
            </a>
          </div>
        )}

        {method === "BANK" && (
          <div className="w-full relative z-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            
            {/* Leva strana: Podaci za uplatu */}
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Podaci za uplatu</h3>
                <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
              </div>
              
              {/* Stacked Layout za podatke - prilagođeno za mobilne */}
              <div className="space-y-6">
                
                {/* Primalac */}
                <div className="bg-emerald-50/50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-emerald-100/50 dark:border-zinc-700/50">
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-1 block">Primalac:</span>
                  <span className="text-xl font-semibold text-emerald-950 dark:text-emerald-100">{recipientName}</span>
                </div>
                
                {/* Žiro račun */}
                <div className="bg-emerald-50/50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-emerald-100/50 dark:border-zinc-700/50">
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-1 block">Žiro račun:</span>
                  <span className="text-2xl font-bold font-mono text-emerald-900 dark:text-emerald-100">{bankAccount.match(/.{1,3}/g)?.join('-')}</span>
                </div>
                
                {/* Svrha uplate */}
                <div className="bg-emerald-50/50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-emerald-100/50 dark:border-zinc-700/50">
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-1 block">Svrha uplate:</span>
                  <span className="text-lg font-semibold text-emerald-950 dark:text-emerald-100">Donacija za {campaign.title}</span>
                </div>
                
                {/* Šifra uplate */}
                <div className="bg-emerald-50/50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-emerald-100/50 dark:border-zinc-700/50">
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-1 block">Šifra uplate:</span>
                  <span className="text-lg font-semibold text-emerald-950 dark:text-emerald-100">289 (Donacije)</span>
                </div>
                
                {/* Poziv na broj */}
                <div className="bg-amber-50 dark:bg-zinc-800/50 p-6 rounded-2xl border border-amber-100 dark:border-zinc-700/50">
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-400 mb-1 block">Poziv na broj:</span>
                  <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">{campaign.id}</span>
                </div>

              </div>
            </div>

            {/* Desna strana: QR Kod (vizuelno odvojen na desktopu, na mobilnom ide ispod podataka) */}
            <div className="w-full max-w-xl mx-auto lg:shrink-0 lg:w-[300px] bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-sm flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-emerald-900 mb-5 text-center uppercase tracking-wider">
                Skeniraj IPS QR
              </span>
              <div className="p-2 border border-emerald-50 rounded-xl bg-white shadow-inner">
                <QRCodeSVG 
                  value={ipsQrString} 
                  size={180}
                  level="M"
                  includeMargin={true}
                />
              </div>
              <span className="text-xs text-zinc-500 mt-5 text-center leading-relaxed">
                Otvorite aplikaciju vaše banke i skenirajte kod za brzu uplatu.
              </span>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}