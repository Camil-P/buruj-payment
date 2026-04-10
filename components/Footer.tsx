"use client";

import { BlurFade } from "@/components/ui/blur-fade";

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-5">
          <BlurFade delay={0.1} inView>
            <div className="w-10 h-1 bg-gradient-to-r from-[#059669] to-[#C8FC2C] rounded-full" />
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <blockquote className="text-base md:text-lg font-medium text-muted-foreground italic max-w-2xl leading-relaxed">
              &ldquo;Primjer onih koji udjeljuju imetke svoje na Allahovom putu je kao primjer zrna iz kojeg izraste sedam klasova, u svakom klasu po stotinu zrna. A Allah umnogostručuje kome hoće. Allah je neizmjerno dobar i sve zna.&rdquo;
            </blockquote>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-xs text-muted-foreground/60 mt-1">
              El-Bekara, 2:261
            </p>
          </BlurFade>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Emanet Fondacija. Sva prava zadržana.
          </p>
          <p className="text-xs text-muted-foreground">
            Napravljeno sa{" "}
            <span className="bg-gradient-to-r from-[#059669] to-[#C8FC2C] bg-clip-text text-transparent font-medium">
              ljubavlju
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
