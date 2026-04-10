import { redirect } from "next/navigation";
import { Metadata } from "next";
import campaignsData from "../../../data.json";
import PaymentView from "../../../components/PaymentView";
import { BlurFade } from "@/components/ui/blur-fade";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const campaign = campaignsData.find((c) => c.id === resolvedParams.id);

  if (!campaign) return { title: "Akcija nije pronađena" };

  return {
    title: `${campaign.title} | Emanet Fondacija`,
    description: campaign.seoDescription,
  };
}

export default async function CampaignPage({ params }: Props) {
  const resolvedParams = await params;
  const campaign = campaignsData.find((c) => c.id === resolvedParams.id);

  if (!campaign) {
    redirect("/");
  }

  return (
    <main className="flex-1 bg-background py-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-1 w-8 bg-gradient-to-r from-[#059669] to-[#C8FC2C] rounded-full" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Akcija</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {campaign.title}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {campaign.description}
            </p>

            {/* Highlights */}
            {campaign.highlights && campaign.highlights.length > 0 && (
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-secondary/50 p-3.5 rounded-xl border border-border/50">
                {campaign.highlights.map((item, index) => (
                  <div key={index} className="flex flex-col">
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

            <div className="border-t border-border/40 pt-6 mt-6">
              <h2 className="text-lg font-bold text-foreground mb-1">
                Izaberite način uplate
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Sve donacije idu direktno za svrhu akcije.
              </p>
              <PaymentView campaign={campaign} />
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
