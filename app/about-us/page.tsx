import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans py-16 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto">

        <BlurFade delay={0.1}>
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              O nama
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
              Emanet Fondacija
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
              Emanet Fondacija je nastala iz dubokog uverenja da je pomaganje drugima naša obaveza i najveća vrlina. Naša misija je da budemo siguran most između onih koji žele da pomognu i onih kojima je pomoć najpotrebnija.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-6">
          <BlurFade delay={0.2}>
            <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground mb-3">
                Naš Emanet (Poverenje)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Verujemo da je svaki donirani dinar <strong className="text-foreground">emanet</strong> (sveto poverenje) koje nam je dato na čuvanje i upravljanje. Zbog toga se vodimo principom apsolutne transparentnosti.
              </p>
              <div className="bg-secondary/60 p-4 rounded-lg border-l-4 border-[#059669]">
                <p className="text-sm font-semibold text-foreground">
                  100% vaše donacije ide direktno za svrhu akcije koju ste podržali. Operativni troškovi fondacije se finansiraju iz posebnog fonda i dobrovoljnih priloga osnivača.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#059669] to-[#0ea87a] text-white p-6 sm:p-8 shadow-lg shadow-emerald-500/10">
              <AnimatedGridPattern
                width={30}
                height={30}
                className="absolute inset-0 opacity-[0.08] fill-white stroke-white"
                numSquares={20}
                maxOpacity={0.15}
                duration={4}
              />

              <h2 className="text-xl font-bold mb-5 relative z-10">
                Zvanični podaci fondacije
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                {[
                  { label: "Pun naziv", value: 'Humanitarna organizacija "Emanet"' },
                  { label: "Sedište", value: "Novi Pazar, Srbija" },
                  { label: "Matični broj (MB)", value: "12345678", mono: true },
                  { label: "PIB", value: "101234567", mono: true },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="block text-white/60 text-[10px] mb-0.5 uppercase tracking-wider font-medium">{item.label}</span>
                    <span className={`font-semibold text-base ${item.mono ? "font-mono" : ""}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <div className="mt-14 text-center">
            <Link
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#059669] to-[#0ea87a] px-8 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Pogledajte aktivne akcije
            </Link>
          </div>
        </BlurFade>

      </div>
    </div>
  );
}
