export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
}

export interface Occasion {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  basePricePerGuest: number;
  badge: string;
  iconName: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Marta Kowalska",
    rating: 5,
    date: "12 maja 2025",
    text: "Serdecznie polecam usługi Pani Ani. Przepyszne potrawy 👌Na pewno jeszcze nie raz skorzystam z cateringu. Bardzo dziękuję ☺️",
    title: "Najlepszy catering w okolicy"
  },
  {
    id: 2,
    author: "Przemysław Wojtasik",
    rating: 5,
    date: "25 kwietnia 2025",
    text: "Bardzo pyszne potrawy , wszystko świeże, obsługa także pełen profesjonalizm 😀",
    title: "Wszystko świeże i pyszne"
  },
  {
    id: 3,
    author: "Agnieszka & Tomasz",
    rating: 5,
    date: "30 marca 2025",
    text: "Polecamy z całego serducha ❤️ było przepysznie , obsługa pełna profeska  🫶 Jesteśmy MEGA zadowoleni i napewno będziemy stałymi klientami !",
    title: "Pełen profesjonalizm i smak"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    url: "https://i.ibb.co/8g40hv8G/472710068-1979864885824169-339557212258867459-n.jpg",
    category: "Zimne Przekąski",
    title: "Elegancki półmisek bankietowy",
    description: "Dekoracyjny asortyment rolad, kawiorków i faszerowanych specjałów gotowych na uroczysty stół."
  },
  {
    id: 2,
    url: "https://i.ibb.co/Q3DSb8Nh/472901835-1979864909157500-7283887770210843733-n.jpg",
    category: "Zimne Przekąski",
    title: "Bukiet wytrawnych wrapów i rolad",
    description: "Soczyste przekąski, starannie zwijane z kompozycją świeżych warzyw i ekologicznych serów."
  },
  {
    id: 3,
    url: "https://i.ibb.co/HDKSzkPQ/472711032-1979864832490841-7665518681264187751-n.jpg",
    category: "Finger Food",
    title: "Ekskluzywne łyżeczki degustacyjne",
    description: "Nowoczesne przekąski jednogryzowe podane na designerskich łyżeczkach z autorskimi sosami."
  },
  {
    id: 4,
    url: "https://i.ibb.co/1YyY6rDv/475534955-1996851984125459-8217527745105058648-n.jpg",
    category: "Ciepłe Dania & Bufety",
    title: "Stanowisko gorących kulinariów",
    description: "Profesjonalnie eksponowane, aromatyczne zapiekanki i pieczenie serwowane w nowoczesnych bemarach."
  },
  {
    id: 5,
    url: "https://i.ibb.co/NgK0ykj8/476158295-1996852044125453-9205184724536357122-n.jpg",
    category: "Aranżacje Stołu",
    title: "Królewski wystrój sali bankietowej",
    description: "Ekskluzywne ułożenie złotej zastawy stołowej i podświetlanych elementów podkreślających doniosłość uroczystości."
  },
  {
    id: 6,
    url: "https://i.ibb.co/cXyM00KH/475971932-1996852057458785-3557533085784292609-n.jpg",
    category: "Finger Food",
    title: "Aperitif i kompozycje koktajlowe",
    description: "Doskonała harmonia smaków z delikatnymi szynkami, świeżymi ziołami oraz chrupiącym ciastem."
  },
  {
    id: 7,
    url: "https://i.ibb.co/fzvLqND0/471820516-1047471833848875-4374317646439968432-n.jpg",
    category: "Dania Główne",
    title: "Tradycyjny Rosół Staropolski",
    description: "Gorący, aromatyczny rosół z ręcznie przygotowywanym makaronem i świeżą zieleniną o unikalnym głębokim smaku."
  },
  {
    id: 8,
    url: "https://i.ibb.co/gLFv7KyN/471840593-1047471807182211-5712026533286327840-n.jpg",
    category: "Finger Food",
    title: "Deski wytrawnych przekąsek",
    description: "Estetyczne mozaiki pikantnych rolad, ułożone z dbałością o kontrasty barwne i kompozycyjne."
  },
  {
    id: 9,
    url: "https://i.ibb.co/kVfS1zp5/471817573-1047472103848848-500660395117343689-n.jpg",
    category: "Ciepłe Dania & Bufety",
    title: "Srebrna prezentacja dań mięsnych",
    description: "Ekskluzywne serwowanie gorących dewolajów i tradycyjnych pieczeni w eleganckim, podgrzewanym szafingu."
  },
  {
    id: 10,
    url: "https://i.ibb.co/RGn2pRqP/471840876-1047471863848872-2629157915039460432-n.jpg",
    category: "Dania Główne",
    title: "Wielopiętrowe patery bankietowe",
    description: "Złociste, chrupiące kotleciki, pieczone udka i tradycyjne polskie zrazy dekorowane świeżymi owocami."
  },
  {
    id: 11,
    url: "https://i.ibb.co/G4fNMFMS/482216098-1095517612377630-235794646018643376-n.jpg",
    category: "Sałatki i Przystawki",
    title: "Zestaw rześkich sałatek bankietowych",
    description: "Bogate kompozycje świeżych warzyw z autorskimi dresingami oraz tradycyjna sałatka jarzynowa."
  },
  {
    id: 12,
    url: "https://i.ibb.co/FLF7S79v/482216963-1095517822377609-4126824250237398386-n.jpg",
    category: "Dania Główne",
    title: "Zrazy wołowe w sosie własnym",
    description: "Perfekcyjnie doprawione, niezwykle kruche zrazy duszone w aromatycznym sosie według sprawdzonej receptury."
  },
  {
    id: 13,
    url: "https://i.ibb.co/LDSFsc4G/482000054-1095517589044299-758128191643047735-n.jpg",
    category: "Sałatki i Przystawki",
    title: "Delikatesy rybne na zimno",
    description: "Wytworne półmiski z kunsztownie dekorowanym pstrągiem w galarecie, śledziami i roladami z łososia."
  },
  {
    id: 14,
    url: "https://i.ibb.co/Q7CLYZX5/482002505-1095517615710963-5168026313837643293-n.jpg",
    category: "Finger Food",
    title: "Zimna płyta z wyselekcjonowanym drobiem",
    description: "Szlachetna galantyna drobiowa z dodatkiem boczku i aromatycznych ziół, skrojona w idealne porcje."
  }
];

export const OCCASIONS: Occasion[] = [
  {
    id: "komunie",
    name: "Pierwsza Komunia Święta",
    slug: "komunie",
    description: "Podkreśl wyjątkowość tego ważnego dnia bogatym i wyrafinowanym menu przygotowanym specjalnie dla rodziny, dzieci i gości honorowych.",
    features: [
      "Menu dostosowane do dzieci i dorosłych",
      "Możliwość aranżacji eleganckiego słodkiego stołu",
      "Profesjonalna pomoc kelnerska na czas przyjęcia",
      "Dania podawane w eleganckich bemarach utrzymujących temperaturę"
    ],
    basePricePerGuest: 180,
    badge: "Uczta Rodzinna",
    iconName: "Sparkles"
  },
  {
    id: "chrzciny",
    name: "Chrzciny",
    slug: "chrzciny",
    description: "Wyjątkowa celebra pierwszego ważnego wydarzenia w życiu Twojego dziecka z delikatną, świeżą kartą dań zaprojektowaną z najwyższym smakiem.",
    features: [
      "Lekkie zupy, delikatne mięsiwa i ryby premium",
      "Szeroki wachlarz chłodnych zakąsek i sałat",
      "Wielopiętrowe patery ze świeżymi owocami",
      "Zapewniamy pełną dyskretną i sprawną obsługę kelnerską"
    ],
    basePricePerGuest: 160,
    badge: "Świętowanie Narodzin",
    iconName: "Heart"
  },
  {
    id: "urodziny",
    name: "Urodziny & Jubileusze",
    slug: "urodziny",
    description: "Niezależnie od wieku jubilata – 18, 50, czy 80 lat – gwarantujemy niezapomniane przeżycie kulinarne z nowoczesnym motywem przewodnim.",
    features: [
      "Fantastyczne chrupiące finger foods idealne do spotkań",
      "Dania gorące serwowane o wyznaczonych godzinach",
      "Aromatyczne sosy i sałatki przygotowane od podstaw",
      "Profesjonalny kelner dbający o komfort na sali i ciepłe bemary"
    ],
    basePricePerGuest: 150,
    badge: "Niezapomniany Wieczór",
    iconName: "Gift"
  },
  {
    id: "rocznice",
    name: "Rocznice Ślubów",
    slug: "rocznice",
    description: "Wspaniałe odnowienie ślubów zasługuje na oprawę najwyższej klasy. Wspólnie świętujemy miłość i lata oddania wyrafinowanym smakiem.",
    features: [
      "Wykwintna i romantyczna karta dań z tradycją",
      "Aperitif powitalny we współpracującym stylu",
      "Luksusowe dekoracyjne stoły i kompozycje rybne",
      "Kelnerzy w strojach koktajlowych serwujący gościom trunki"
    ],
    basePricePerGuest: 170,
    badge: "Złoty Jubileusz",
    iconName: "Crown"
  },
  {
    id: "stypy",
    name: "Stypy / Konsolacje",
    slug: "stypy",
    description: "Rozumiemy powagę tej chwili. Zapewniamy pełną szacunku, cichą i niezwykle sprawną organizację posiłku konsolacyjnego z tradycyjnym, ciepłym polskim menu.",
    features: [
      "Szybki czas przygotowania i elastyczna logistyka",
      "Aromatyczny rosół, tradycyjne kluski i wyborne pieczenie",
      "Ciepła i nienachalna profesjonalna obsługa cateringowa",
      "Estetyczne podanie i szacunek dla zgromadzonych gości"
    ],
    basePricePerGuest: 130,
    badge: "Godne Pożegnanie",
    iconName: "Clock"
  }
];

export const ADDITIONAL_ITEMS = [
  { id: "waiter", label: "Pełna obsługa kelnerska (Skompletowany team kelnerów)", price: 400, description: "Doświadczeni, elegancko ubrani kelnerzy dbający o nalewanie trunków, podawanie dań na gorąco i porządek." },
  { id: "sweetTable", label: "Dekoracyjny Słodki Stół (Mini desery, serniki, musy)", price: 20, perGuest: true, description: "Stacja pełna luksusowych monoporcji deserowych, które zachwycą gości niepowtarzalnym designem i smakiem." },
  { id: "premiumPlates", label: "Ekskluzywne ozdobne stoły i naczynia złote", price: 15, perGuest: true, description: "Złocone ozdobne półmiski, bemary o nowoczesnej linii i zastawa współgrająca z czarno-złotym motywem." },
  { id: "extraHot", label: "Dodatkowa gorąca kolacja w nocy", price: 35, perGuest: true, description: "Dodatkowa odsłona ciepłego posiłku (np. barszcz z pasztecikiem lub tradycyjny boeuf strogonow)." }
];
