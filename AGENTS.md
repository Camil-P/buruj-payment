<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

### Dokumentacija Sistema: Aplikacija za Donacije i Akcije
Ovaj dokument služi kao arhitektonski pregled i tehnički kontekst za LLM agente koji rade na održavanju ili nadogradnji ovog projekta.

1. Pregled ProjektaWeb aplikacija koja omogućava korisnicima pregled humanitarnih akcija i odabir načina plaćanja/donacije (PayPal ili direktna uplata na račun uz generisan IPS QR kod). Aplikacija koristi statične JSON podatke kao "mock" bazu podataka, sa planom prelaska na dinamičku bazu/Admin panel u budućnosti.
2. Tehnološki "Stack"Framework: Next.js 15 (App Router)Jezik: TypeScript / ReactStilizacija: Tailwind CSS (podržava Light/Dark mode preko globals.css)QR Kodovi: qrcode.react (za generisanje NBS IPS standarda za Srbiju)
3. Struktura Foldera i FajlovaProjekat prati standardnu Next.js App Router strukturu:/
├── data.json                   # "Mock" baza podataka sa listom akcija
├── components/
│   ├── CampaignList.tsx        # Klijentski prikaz liste svih akcija (koristi se na Home)
│   └── PaymentView.tsx         # Klijentska komponenta ("use client") za izbor načina uplate i QR kod
├── app/
│   ├── layout.tsx              # Glavni layout (fontovi, metadata)
│   ├── page.tsx                # Početna stranica (poziva <CampaignList />)
│   └── akcija/
│       └── [id]/
│           └── page.tsx        # Dinamička ruta za pojedinačnu akciju (Server Component)
└── globals.css                 # Globalni stilovi i Tailwind promenljive
4. Model Podataka (data.json)Svi podaci o akcijama su definisani u root fajlu data.json.Šema (TypeScript interfejs):interface Campaign {
  id: string;             // Unikatan identifikator, koristi se za URL (/akcija/[id])
  title: string;          // Naslov akcije
  description: string;    // Detaljan opis za UI
  seoDescription: string; // Kratak opis za Google/Metadata
  goal: number;           // Ciljani iznos
}
5. Ključna Arhitektonska Pravila i MehanikaA. Next.js 15 i Dinamičke Rute (KRITIČNO)Zbog Next.js 15 verzije, parametri u dinamičkim rutama (params) su asinhroni (Promises).Pravilo za LLM: Uvek koristi await params u fajlu app/akcija/[id]/page.tsx pre pristupa id propertiju, inače će doći do greške.B. Upravljanje Greškama (404 Not Found)Ako korisnik pristupi URL-u sa ID-jem koji ne postoji u data.json, aplikacija ne baca standardni 404.Umesto toga, Server Component u app/akcija/[id]/page.tsx koristi redirect("/") iz next/navigation kako bi automatski vratio korisnika na početnu stranicu.C. SEO Optimizacijaapp/akcija/[id]/page.tsx koristi generateMetadata funkciju. Ona takođe mora da uradi await params i pronalazi specifičan seoDescription iz JSON-a kako bi se generisali tačni <meta> tagovi za pretraživače.D. Logika Plaćanja (PaymentView.tsx)Komponenta je striktno odvojena i obeležena sa "use client".Načini plaćanja ("PAYPAL" i "BANK") su hardkodirani unutar ove komponente radi jednostavnosti.Ne postoji poseban payments.json fajl.Banka (QR Kod): Generiše string kompatibilan sa NBS IPS QR standardom (Srbija). Sadrži fiksiran žiro račun i ime primaoca, dok se Svrha i Poziv na broj dinamički popunjavaju iz campaign objekta prop-a.
6. Smernice za Buduće NadogradnjeKada se bude uvodio Admin Panel, modifikovati fajlove da umesto uvoza data.json fajla, koriste fetch() ka API endpointu ili direktan upit ka bazi.Ukoliko se dodaje novi način plaćanja (npr. Stripe), logika se dodaje isključivo proširenjem state-a i UI-a u fajlu components/PaymentView.tsx.