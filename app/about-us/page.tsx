import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 font-sans py-16 px-6 sm:px-12">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Naslovna sekcija */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 dark:text-emerald-100 mb-4">
            O nama
          </h1>
          <div className="w-24 h-1 bg-amber-500 rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Emanet Fondacija je nastala iz dubokog uverenja da je pomaganje drugima naša obaveza i najveća vrlina. Naša misija je da budemo siguran most između onih koji žele da pomognu i onih kojima je pomoć najpotrebnija.
          </p>
        </div>

        {/* Sekcije sa informacijama */}
        <div className="space-y-12">
          
          {/* Kartica: Misija i Vizija */}
          <div className="bg-white dark:bg-zinc-900 border border-emerald-100 dark:border-zinc-800 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-50 mb-4">
              Naš Emanet (Poverenje)
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Verujemo da je svaki donirani dinar <strong>emanet</strong> (sveto poverenje) koje nam je dato na čuvanje i upravljanje. Zbog toga se vodimo principom apsolutne transparentnosti. 
            </p>
            <div className="bg-emerald-50 dark:bg-zinc-800/50 p-4 rounded-xl border-l-4 border-amber-500">
              <p className="font-semibold text-emerald-950 dark:text-emerald-100">
                100% vaše donacije ide direktno za svrhu akcije koju ste podržali. Operativni troškovi fondacije se finansiraju iz posebnog fonda i dobrovoljnih priloga osnivača.
              </p>
            </div>
          </div>

          {/* Kartica: Podaci o fondaciji (Pravni podaci) */}
          <div className="bg-emerald-950 text-emerald-50 border border-emerald-900 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-8 shadow-md relative overflow-hidden">
            {/* Dekorativni krug */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-800 rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-emerald-50 mb-6 relative z-10">
              Zvanični podaci fondacije
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              <div>
                <span className="block text-emerald-400/80 text-sm mb-1 uppercase tracking-wider">Pun naziv</span>
                <span className="font-semibold text-lg">Humanitarna organizacija "Emanet"</span>
              </div>
              <div>
                <span className="block text-emerald-400/80 text-sm mb-1 uppercase tracking-wider">Sedište</span>
                <span className="font-semibold text-lg">Novi Pazar, Srbija</span>
              </div>
              <div>
                <span className="block text-emerald-400/80 text-sm mb-1 uppercase tracking-wider">Matični broj (MB)</span>
                <span className="font-mono font-semibold text-lg">12345678</span>
              </div>
              <div>
                <span className="block text-emerald-400/80 text-sm mb-1 uppercase tracking-wider">PIB</span>
                <span className="font-mono font-semibold text-lg">101234567</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-amber-500 px-8 text-emerald-950 font-bold transition-all hover:bg-amber-400 hover:-translate-y-1 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Pogledajte aktivne akcije
          </Link>
        </div>

      </div>
    </div>
  );
}