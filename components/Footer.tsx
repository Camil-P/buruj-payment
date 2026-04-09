export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50 py-12 px-6 sm:px-12 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="w-12 h-1 bg-amber-500 rounded-full mb-2"></div>
        <blockquote className="text-lg md:text-xl font-medium text-emerald-100/90 italic max-w-2xl">
          Primjer onih koji udjeljuju imetke svoje na Allahovom putu je kao primjer zrna iz kojeg izraste sedam klasova, u svakom klasu po stotinu zrna. A Allah umnogostručuje kome hoće. Allah je neizmjerno dobar i sve zna. (El-Bekara, 2:261)“
        </blockquote>
        <p className="text-emerald-400/60 text-sm mt-4">
          © {new Date().getFullYear()} Emanet Fondacija. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}