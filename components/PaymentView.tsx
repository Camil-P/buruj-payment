"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { BlurFade } from "@/components/ui/blur-fade";

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
  image?: string;
  highlights?: Highlight[];
}

export default function PaymentView({ campaign }: { campaign: Campaign }) {
  const [method, setMethod] = useState<"PAYPAL" | "BANK" | null>(null);

  const bankAccount = "160000000000000000";
  const recipientName = "Emanet Fondacija";
  const paypalLink = "https://paypal.me/TvojNalog";

  const ipsQrString = `K:PR|V:01|C:1|R:${bankAccount}|N:${recipientName}|I:RSD1000,00|SF:289|S:Donacija za ${campaign.title}|RO:${campaign.id}`;

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 flex-1">
      {/* Payment method buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center">
        <button
          onClick={() => setMethod("PAYPAL")}
          className={`group flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border ${
            method === "PAYPAL"
              ? "bg-gradient-to-r from-[#059669] to-[#0ea87a] text-white border-transparent shadow-lg shadow-emerald-500/20 scale-[1.02]"
              : "bg-card text-foreground border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
          </svg>
          PayPal uplata
        </button>
        <button
          onClick={() => setMethod("BANK")}
          className={`group flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border ${
            method === "BANK"
              ? "bg-gradient-to-r from-[#059669] to-[#C8FC2C] text-[#0f2f1f] border-transparent shadow-lg shadow-emerald-500/20 scale-[1.02]"
              : "bg-card text-foreground border-border/50 hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm"
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
          Direktno na račun (QR)
        </button>
      </div>

      {/* Payment content */}
      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 p-6 sm:p-8">

        {!method && (
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center justify-center text-center py-10">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm">
                Odaberite jedan od načina uplate iznad kako biste vidjeli instrukcije i podržali ovu akciju.
              </p>
            </div>
          </BlurFade>
        )}

        {method === "PAYPAL" && (
          <BlurFade delay={0.1}>
            <div className="text-center py-6 flex flex-col items-center">
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">PayPal Donacija</h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-md leading-relaxed">
                Vaša podrška putem PayPala je brza, sigurna i omogućava nam da odmah reagujemo tamo gdje je najpotrebije.
              </p>
              <a
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#059669] to-[#0ea87a] px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                Nastavi na siguran PayPal
              </a>
            </div>
          </BlurFade>
        )}

        {method === "BANK" && (
          <BlurFade delay={0.1}>
            <div className="w-full flex flex-col lg:flex-row gap-8 items-center lg:items-start">

              {/* Bank details */}
              <div className="flex-1 w-full max-w-xl mx-auto">
                <h3 className="text-lg font-bold text-foreground mb-5">Podaci za uplatu</h3>

                <div className="space-y-3">
                  {[
                    { label: "Primalac", value: recipientName },
                    { label: "Žiro račun", value: bankAccount.match(/.{1,3}/g)?.join("-"), mono: true },
                    { label: "Svrha uplate", value: `Donacija za ${campaign.title}` },
                    { label: "Šifra uplate", value: "289 (Donacije)" },
                  ].map((item) => (
                    <div key={item.label} className="bg-secondary/50 p-4 rounded-lg border border-border/50">
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-0.5 block">{item.label}</span>
                      <span className={`text-sm font-semibold text-foreground ${item.mono ? "font-mono text-base" : ""}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <span className="text-[10px] font-semibold text-accent-foreground uppercase tracking-wider mb-0.5 block">Poziv na broj</span>
                    <span className="text-base font-bold bg-gradient-to-r from-[#059669] to-[#C8FC2C] bg-clip-text text-transparent">
                      {campaign.id}
                    </span>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="w-full max-w-xl mx-auto lg:shrink-0 lg:w-[260px] bg-card p-5 rounded-xl ring-1 ring-foreground/10 flex flex-col items-center justify-center">
                <span className="text-[10px] font-bold text-muted-foreground mb-3 text-center uppercase tracking-widest">
                  Skeniraj IPS QR
                </span>
                <div className="p-2 border border-border/50 rounded-lg bg-white">
                  <QRCodeSVG
                    value={ipsQrString}
                    size={180}
                    level="M"
                    includeMargin={true}
                  />
                </div>
                <span className="text-[11px] text-muted-foreground mt-3 text-center leading-relaxed">
                  Otvorite aplikaciju vaše banke i skenirajte kod za brzu uplatu.
                </span>
              </div>

            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
