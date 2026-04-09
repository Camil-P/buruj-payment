import Link from "next/link";
import Image from "next/image";
import campaignsData from "../data.json";

export default function CampaignList() {
    return (
        <div className="w-full max-w-6xl mx-auto py-16 px-6 sm:px-12">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-3xl font-bold text-emerald-950 dark:text-emerald-100 mb-3">
                    Aktivne akcije
                </h2>
                <div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>

            {/* Koristimo grid, prilagodljiv za telefone i velike ekrane */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                {campaignsData.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="group flex flex-col bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-800 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl shadow-sm hover:shadow-2xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-500 overflow-hidden relative"
                    >
                        {/* 1. Deo sa posterom (slikom) */}
                        <div className="relative w-full aspect-video sm:aspect-[16/10] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                            <Image
                                src={campaign?.image ?? "/Buruj-logo.jpeg"}
                                alt={`Poster za akciju ${campaign.title}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            {/* {campaign?.image ? (

                            ) : (
                                // Placeholder ukoliko akcija nema sliku
                                <div className="w-full h-full flex items-center justify-center bg-emerald-900 text-emerald-50 opacity-80">
                                    <span className="text-xl font-serif tracking-widest">EMANET</span>
                                </div>
                            )} */}

                            {/* Opcioni gradient overlay da slika izgleda luksuznije */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                            <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-bold text-white drop-shadow-md">
                                {campaign.title}
                            </h3>
                        </div>

                        {/* 2. Tekstualni deo i dinamički detalji */}
                        <div className="flex flex-col flex-grow p-6 sm:p-8 relative z-10">
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                                {campaign.description}
                            </p>

                            {/* Fleksibilni podaci (Highlights) */}
                            {campaign.highlights && campaign.highlights.length > 0 && (
                                <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-emerald-50/50 dark:bg-zinc-800/50 p-4 rounded-xl border border-emerald-100/50 dark:border-zinc-700/50">
                                    {campaign.highlights.map((item, index) => (
                                        <div key={index} className="flex flex-col">
                                            <span className="text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-semibold mb-1">
                                                {item.label}
                                            </span>
                                            <span className="text-sm font-medium text-emerald-950 dark:text-emerald-50">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Spacer koji gura dugme na dno ako su kartice različite visine */}
                            <div className="mt-auto pt-4">
                                <Link
                                    href={`/action/${campaign.id}`}
                                    className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-amber-500 px-6 text-emerald-950 font-bold tracking-wide transition-all hover:bg-amber-400 hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                                >
                                    Podrži akciju
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}