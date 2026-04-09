import { redirect } from "next/navigation"; // Uvozimo redirect umesto notFound
import { Metadata } from "next";
import campaignsData from "../../../data.json";
import PaymentView from "../../../components/PaymentView";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const campaign = campaignsData.find((c) => c.id === resolvedParams.id);
  
  if (!campaign) return { title: "Akcija nije pronađena" };

  return {
    title: `${campaign.title} | Moje Akcije`,
    description: campaign.seoDescription,
  };
}

export default async function CampaignPage({ params }: Props) {
  const resolvedParams = await params;
  const campaign = campaignsData.find((c) => c.id === resolvedParams.id);

  // Ako akcija nije pronađena u JSON-u, šaljemo korisnika na home page
  if (!campaign) {
    redirect("/");
  }

  return (
    <main className="flex-1 bg-zinc-50 dark:bg-black py-16 px-6 sm:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {campaign.title}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {campaign.description}
        </p>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Izaberite način uplate
          </h2>
          <PaymentView campaign={campaign} />
        </div>
      </div>
    </main>
  );
}