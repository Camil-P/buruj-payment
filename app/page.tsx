import CampaignList from "../components/CampaignList";

export default function Home() {
  return (
    <>
      {/* Hero Sekcija */}
      <section className="w-full bg-emerald-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-emerald-50">
            Učinimo dobro delo danas
          </h1>
          <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
            Vaša donacija, ma koliko mala bila, donosi nadu onima kojima je najpotrebnija. 
            Odaberite akciju i podržite je sigurno i transparentno.
          </p>
        </div>
      </section>

      {/* Lista Akcija */}
      <CampaignList />
    </>
  );
}