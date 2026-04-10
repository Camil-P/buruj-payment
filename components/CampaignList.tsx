"use client";

import Link from "next/link";
import Image from "next/image";
import campaignsData from "../data.json";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export default function CampaignList() {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4 sm:px-6">
      <BlurFade delay={0.1}>
        <div className="flex flex-col items-center mb-16">
          <AnimatedShinyText className="text-3xl font-bold text-foreground mb-3">
            Aktivne akcije
          </AnimatedShinyText>
          <div className="w-12 h-1 bg-gradient-to-r from-[#059669] to-[#C8FC2C] rounded-full" />
        </div>
      </BlurFade>

      <div className="grid gap-8 lg:grid-cols-2">
        {campaignsData.map((campaign, index) => (
          <BlurFade key={campaign.id} delay={0.15 + index * 0.1}>
            <Link href={`/action/${campaign.id}`} className="block group">
              <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
                {/* Image */}
                <div className="relative w-full aspect-video bg-muted overflow-hidden">
                  <Image
                    src={campaign?.image ?? "/Buruj-logo.jpeg"}
                    alt={`Poster za akciju ${campaign.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-xl font-bold text-white drop-shadow-lg">
                    {campaign.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 sm:p-6">
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                    {campaign.description}
                  </p>

                  {/* Highlights */}
                  {campaign.highlights && campaign.highlights.length > 0 && (
                    <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-secondary/50 p-3.5 rounded-xl border border-border/50">
                      {campaign.highlights.map((item, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-0.5">
                            {item.label}
                          </span>
                          <span className="text-xs font-medium text-foreground">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <div className="w-full h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#059669] to-[#0ea87a] text-sm font-semibold text-white shadow-md shadow-emerald-500/15 transition-all group-hover:shadow-lg group-hover:shadow-emerald-500/25 group-hover:-translate-y-0.5">
                      Podrži akciju
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
