"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import Link from "next/link";

const stats = [
  { value: 500, suffix: "+", label: "Porodica" },
  { value: 10, suffix: "+", label: "Zemalja" },
  { value: 100, suffix: "%", label: "Transparentnost" },
];

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-6 overflow-hidden px-4 py-28 text-center md:py-36">
      {/* Grid pattern background — e-termini style */}
      <AnimatedGridPattern
        width={40}
        height={40}
        className="absolute inset-0 fill-primary/8 stroke-primary/8 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
            Humanitarne akcije
          </div>
        </BlurFade>

        <BlurFade delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.1]">
            Učinimo{" "}
            <AnimatedGradientText
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
              colorFrom="#059669"
              colorTo="#C8FC2C"
            >
              dobro delo
            </AnimatedGradientText>{" "}
            danas
          </h1>
        </BlurFade>

        <BlurFade delay={0.3}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Vaša donacija, ma koliko mala bila, donosi nadu onima kojima je
            najpotrebnija. Odaberite akciju i podržite je sigurno i transparentno.
          </p>
        </BlurFade>

        <BlurFade delay={0.4}>
          <Link href="#akcije">
            <PulsatingButton
              className="h-12 px-8 text-sm font-semibold bg-gradient-to-r from-[#059669] to-[#0ea87a] text-white rounded-lg shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30"
              pulseColor="#059669"
            >
              Pogledaj akcije
            </PulsatingButton>
          </Link>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.5}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">
                  <NumberTicker value={stat.value} className="text-foreground" />
                  <span className="bg-gradient-to-r from-[#059669] to-[#C8FC2C] bg-clip-text text-transparent">{stat.suffix}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
