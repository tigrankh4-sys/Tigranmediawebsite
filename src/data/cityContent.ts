export interface CityContent {
  h2: string;
  intro: string;
  alineas: string[];
}

export const cityContent: Record<string, CityContent> = {
  antwerpen: {
    h2: 'Webdesign voor Antwerpse ondernemers',
    intro: 'Antwerpen telt meer dan 25.000 actieve kmo\'s in handel, logistiek, mode en de creatieve sector. In een stad waar concurrentie zo intens is, bepaalt uw online aanwezigheid of potentiële klanten u vinden — of uw concurrent.',
    alineas: [
      'De Antwerpse haven genereert een ecosysteem van toeleveranciers, logistieke spelers en zakelijke dienstverleners die dagelijks online gezocht worden. Een trage of generieke website kost u in deze omgeving actief klanten — want uw concurrent heeft wél geïnvesteerd in zijn digitale imago.',
      'Tigran Media bouwt websites die presteren in Antwerpse zoekopdrachten. Custom Next.js-architectuur, laadtijden onder 1 seconde en een design dat uw Antwerps merk versterkt. Geen template die tientallen andere bedrijven ook gebruiken.',
    ],
  },
  gent: {
    h2: 'Webdesign voor Gentse kmo\'s en startups',
    intro: 'Gent combineert een van de sterkste startup-ecosystemen van Vlaanderen met een bruisende middenstand. De aanwezigheid van UGent en Artevelde maakt van Gent een stad waar jong ondernemerschap en gevestigde handel naast elkaar floreren.',
    alineas: [
      'In de Gentse binnenstad en omliggende wijken zoals Ledeberg, Gentbrugge en Sint-Amandsberg zoeken klanten dagelijks lokaal naar dienstverleners, restaurants, retailers en professionals. Wie niet goed gevonden wordt online, bestaat niet voor die klant.',
      'Tigran Media bouwt voor Gentse ondernemers websites die technisch sterk staan én er visueel uitspringen. Snel, SEO-proof en zonder WordPress-beperkingen — zodat uw zaak gevonden wordt door wie in Gent naar u zoekt.',
    ],
  },
  brugge: {
    h2: 'Webdesign voor Brugse handelaars en horeca',
    intro: 'Brugge trekt jaarlijks meer dan 8 miljoen bezoekers, maar heeft tegelijk een sterke lokale economie van handelaars, vrije beroepen en dienstverleners die buiten het toerisme opereren. Beide groepen hebben één ding gemeen: ze hebben een sterke website nodig.',
    alineas: [
      'De Brugse horeca en retailsector zijn uitzonderlijk competitief. Toeristen beslissen waar ze eten of winkelen via Google en TripAdvisor — maar ook Bruggelingen zoeken lokaal naar loodgieters, advocaten, kappers en accountants. Uw website is uw visitekaartje voor beide doelgroepen.',
      'Tigran Media bouwt websites die de professionele uitstraling van Brugge waarmaken. Custom design, technisch perfect, live in 1 week. Zodat u gevonden wordt — door toerist én Bruggeling.',
    ],
  },
  leuven: {
    h2: 'Webdesign voor Leuvense ondernemers en startups',
    intro: 'Leuven heeft met KU Leuven en imec een van de meest innovatieve ecosystemen van Europa in huis. Dat trekt niet alleen tech-startups aan, maar stimuleert ook de lokale economie van de stad — van horeca en retail tot zakelijke dienstverleners.',
    alineas: [
      'Leuvense ondernemers opereren in een omgeving waar hun klanten digitaal onderlegd zijn en hoge verwachtingen hebben. Een trage of verouderde website is in Leuven geen kleine tekortkoming — het is een signaal van onprofessionaliteit dat klanten actief wegjaagt.',
      'Tigran Media bouwt voor Leuvense bedrijven websites die aansluiten bij die hoge standaard: Next.js, 99/100 Google score, live in 1 week. Geen shortcuts, geen templates — gewoon een website die werkt voor uw business.',
    ],
  },
  mechelen: {
    h2: 'Webdesign voor kmo\'s in Mechelen',
    intro: 'Mechelen ligt centraal op de as Antwerpen–Brussel en heeft dankzij die ligging een uitzonderlijk diverse lokale economie — van retailketens op de Bruul tot maakindustrie en zakelijke dienstverleners. Die centrale positie vertaalt zich ook in een competitieve online omgeving.',
    alineas: [
      'Mechelse ondernemers concurreren online niet alleen met lokale spelers, maar ook met bedrijven uit Antwerpen en Brussel die hun zoekresultaten domineren. Een technisch sterke website met lokale SEO is voor een Mechelse kmo geen luxe maar noodzaak.',
      'Tigran Media bouwt custom websites die Mechelen-specifieke zoekopdrachten aanpakken. Snel, professioneel en afgestemd op uw klanten — zodat u gevonden wordt door wie in Mechelen en omgeving naar u zoekt.',
    ],
  },
  hasselt: {
    h2: 'Webdesign voor retailers en kmo\'s in Hasselt',
    intro: 'Hasselt is de mode- en shoppinghoofdstad van Limburg met een van de hoogste winkeldeelnames van Vlaanderen. De retailsector is er uitzonderlijk actief, maar ook dienstverleners, horeca en vrije beroepen vinden in Hasselt een sterk ondernemersklimaat.',
    alineas: [
      'In de Hasseltse binnenstad en winkelboulevards is de concurrentie online minstens zo hevig als op straat. Klanten zoeken op Google voordat ze de deur uitstappen. Wie dan niet goed scoort, geeft omzet weg aan de concurrent die dat wél doet.',
      'Tigran Media bouwt voor Hasseltse ondernemers websites die converteren. Strak, snel, mobielvriendelijk — en technisch zo sterk dat Google uw zaak aanbevelenswaardiger vindt dan die van uw buren.',
    ],
  },
  kortrijk: {
    h2: 'Webdesign voor Kortrijkse kmo\'s en designbedrijven',
    intro: 'Kortrijk heeft een internationale reputatie op het vlak van design, interieur en textiel — en heeft met Kortrijk Xpo een van de belangrijkste beurshallen van Benelux in huis. Die design-DNA vertaalt zich ook in hoge verwachtingen op het vlak van visuele communicatie.',
    alineas: [
      'Kortrijkse ondernemers weten wat kwaliteit is — en dat geldt ook voor hun website. In een regio waar design serieus genomen wordt, is een generiek template een statement van onverschilligheid. Uw website moet uw merk waarmaken.',
      'Tigran Media bouwt custom websites die de Kortrijkse standaard halen: doordacht design, technisch sterk, razendsnel. Geen WordPress, geen templates — een website op maat die uw klanten overtuigt voor ze zelfs bellen.',
    ],
  },
  roeselare: {
    h2: 'Webdesign voor ondernemers in Roeselare',
    intro: 'Roeselare is het economische hart van West-Vlaanderen met een sterke basis in agrobusiness, logistiek en voedingsindustrie. De stad herbergt een grote concentratie van regionale kmo\'s die lokaal en soms internationaal actief zijn.',
    alineas: [
      'De Roeselaarse ondernemer is pragmatisch en resultaatgericht. U wilt geen website die mooi oogt op papier maar slecht presteert in de praktijk. U wilt klanten — en daarvoor heeft u een website nodig die gevonden wordt en die vertrouwen uitstraalt.',
      'Tigran Media bouwt websites die presteren: 99/100 Google score, razendsnel, live in 1 week. Voor kmo\'s in Roeselare en de Westhoek die klaar zijn om online te groeien.',
    ],
  },
  turnhout: {
    h2: 'Webdesign voor Kempense kmo\'s in Turnhout',
    intro: 'Turnhout is het economische hart van de Kempen en de thuisbasis van Tigran Media. De stad heeft een sterke traditie in drukkerij en kaartenfabricage (Cartamundi), maar is ook thuis voor duizenden kmo\'s in handel, bouw, zorg en dienstverlening.',
    alineas: [
      'De Turnhoutse middenstand is actief en ondernemend, maar mist online vaak de professionele aanwezigheid die bij hun vakmanschap past. Veel lokale bedrijven hebben nog een verouderde WordPress-site of helemaal geen website — terwijl hun klanten wél online zoeken.',
      'Als Turnhoutse studio kennen wij de lokale markt van binnenuit. Wij bouwen websites die Kempense kmo\'s op de kaart zetten — technisch sterk, lokaal relevant, live in 1 week.',
    ],
  },
  'sint-niklaas': {
    h2: 'Webdesign voor kmo\'s in Sint-Niklaas',
    intro: 'Sint-Niklaas is de grootste stad van het Waasland en heeft met een van de grootste marktpleinen van België een rijke handelsgeschiedenis. Die commerciële traditie leeft vandaag voort in een actieve retail- en dienstensector.',
    alineas: [
      'De Wase ondernemer staat bekend als nuchter en resultaatgericht. Dat betekent: geen onnodige kosten, maar ook geen halfbakken website die klanten wegjaagt. U wilt een investering die terugverdiend wordt.',
      'Tigran Media bouwt websites die werken. Custom Next.js, 99/100 Google score, live in 1 week. Transparante prijzen, geen verrassingen — zoals een Wase ondernemer het verwacht.',
    ],
  },
  aalst: {
    h2: 'Webdesign voor kmo\'s in Aalst',
    intro: 'Aalst ligt op de as tussen Gent en Brussel en heeft een actieve lokale economie van detailhandel, bouw, zorg en dienstverlening. De stad is ook bekend als carnavalsstad — maar haar ondernemers zijn het hele jaar door hard aan het werk.',
    alineas: [
      'In de Aalsterse handelsstraten en omliggende gemeenten zoeken klanten dagelijks online naar lokale dienstverleners. Wie niet gevonden wordt op Google, laat die omzet liggen voor een concurrent die wél in zijn website geïnvesteerd heeft.',
      'Tigran Media bouwt voor Aalsterse kmo\'s websites die zowel lokaal als regionaal presteren. Technisch sterk, snel laden en ontworpen om klanten te overtuigen — niet enkel om er goed uit te zien.',
    ],
  },
  genk: {
    h2: 'Webdesign voor kmo\'s in Genk',
    intro: 'Genk transformeerde van mijnstad naar een van de meest diverse en innovatieve steden van Limburg. C-Mine is het symbool van die reconversie: industrie wordt cultuur. Maar naast die toeristische trekpleister heeft Genk een bruisende lokale economie.',
    alineas: [
      'De Genkse ondernemersscene is multicultureel en dynamisch — van Turkse bakkerijen tot technologiebedrijven die opereren vanuit de voormalige industrieterreinen. Al die bedrijven hebben een professionele online aanwezigheid nodig om klanten te bereiken.',
      'Tigran Media bouwt websites die presteren in Genk en de Limburgse regio. Custom design, technisch sterk, live in 1 week. Of u nu in de horeca, bouw, handel of dienstverlening zit — uw website moet klanten binnenbrengen.',
    ],
  },
  dendermonde: {
    h2: 'Webdesign voor kmo\'s in Dendermonde',
    intro: 'Dendermonde ligt aan de samenvloeiing van Schelde en Dender — een strategische positie die de stad historisch tot een handelscentrum maakte. Vandaag heeft Dendermonde een diverse lokale economie met handel, horeca en zakelijke dienstverlening.',
    alineas: [
      'De Dendermondse ondernemer opereert in een regio waar klanten zowel lokaal als in de omliggende steden (Gent, Brussel, Antwerpen) zoeken. Een professionele website met sterke SEO bepaalt of u in dat zoekverkeer zichtbaar bent.',
      'Tigran Media bouwt custom websites voor Dendermondse kmo\'s: snel, professioneel en technisch correct. Live in 1 week, vanaf €500 — zodat u klanten aantrekt zonder de bank te breken.',
    ],
  },
  ieper: {
    h2: 'Webdesign voor horeca en kmo\'s in Ieper',
    intro: 'Ieper is wereldwijd bekend als de stad van In Flanders Fields en trekt jaarlijks honderdduizenden bezoekers. Maar naast de oorlogstoeristen heeft Ieper een actieve lokale economie van horeca, retail en dienstverlening die de hele Westhoek bedient.',
    alineas: [
      'Toeristen en locals zoeken allebei online naar restaurants, hotels, winkels en dienstverleners in Ieper. Een website die goed presteert in lokale zoekopdrachten brengt beide doelgroepen rechtstreeks naar uw deur.',
      'Tigran Media bouwt voor Ieperse ondernemers websites die zowel lokaal als voor bezoekers van buiten de regio werken. Technisch sterk, mobielvriendelijk en snel — want een trage website verliest die toerist aan de concurrent die sneller laadt.',
    ],
  },
  oostende: {
    h2: 'Webdesign voor horeca en retail in Oostende',
    intro: 'Oostende is de koningin van de Belgische kust — met The Strip, het Casino, de visafslag en een levendige creatieve scene. Als grootste kuststad heeft Oostende een uitgesproken economische identiteit die verder gaat dan toerisme alleen.',
    alineas: [
      'Oostendse ondernemers bedienen zowel het toeristische seizoenspubliek als de lokale bevolking van 70.000 inwoners. Die tweeledige markt vraagt om een website die het hele jaar door werkt — ook buiten het hoogseizoen.',
      'Tigran Media bouwt websites die presteren in Oostende en de kustre gio. Custom Next.js, geen WordPress, 99/100 Google score. Uw klanten vinden u online — of ze nu uit Brussel op weekendreis komen of in de Kursaalstraat winkelen.',
    ],
  },
  herentals: {
    h2: 'Webdesign voor kmo\'s in Herentals',
    intro: 'Herentals is het commerciële centrum van de Kempen met een sterke detailhandel langs het Albertkanaal en een groeiende dienstensector. De stad trekt kopers aan uit een wijde regio in de Antwerpse en Limburgse Kempen.',
    alineas: [
      'Herentalse ondernemers bedienen klanten uit Geel, Mol, Aarschot en de omliggende gemeenten. Wie online goed gevonden wordt, haalt klanten uit een ruimer verzorgingsgebied dan enkel de stad zelf.',
      'Tigran Media bouwt voor Herentalse kmo\'s websites die regionaal presteren. Technisch sterk, SEO-gericht en op maat van uw business — live in 1 week, vanaf €500.',
    ],
  },
  mol: {
    h2: 'Webdesign voor technologische bedrijven in Mol',
    intro: 'Mol heeft met SCK CEN (nucleair onderzoekscentrum) en een cluster van hightech bedrijven een bijzondere economische positie in de Kempen. Naast die industriële kern heeft Mol een actieve detailhandel en groeiende dienstensector.',
    alineas: [
      'Of u nu een technologiebedrijf, een lokale handelszaak of een dienstenverlener bent — in Mol zoeken klanten online naar u. Een professionele website geeft u de geloofwaardigheid die past bij uw vakmanschap.',
      'Tigran Media bouwt custom websites voor Molse kmo\'s: snel, technisch correct en ontworpen om uw klanten te overtuigen. Live in 1 week, geen gedoe, geen templates.',
    ],
  },
  beringen: {
    h2: 'Webdesign voor groeiende kmo\'s in Beringen',
    intro: 'Beringen heeft zijn mijnverleden achter zich gelaten en is uitgegroeid tot een centrumgemeente met een groeiende lokale economie. De Paalse Plas is een toeristische trekpleister, maar het zijn de lokale kmo\'s die de economische motor vormen.',
    alineas: [
      'Beringse ondernemers opereren in een regio die volop in transitie is — van industrie naar dienstverlening en kleinhandel. In die groeiende markt is online zichtbaarheid een van de krachtigste instrumenten om nieuwe klanten te bereiken.',
      'Tigran Media bouwt websites voor Beringse kmo\'s die klaar zijn voor die groei. Professioneel, snel, live in 1 week — zodat uw zaak gevonden wordt door wie in Beringen en de ruimere Limburgse regio naar u zoekt.',
    ],
  },
  tongeren: {
    h2: 'Webdesign voor horeca en toerisme in Tongeren',
    intro: 'Tongeren is de oudste stad van België — en die historische status vertaalt zich in een bloeiende toeristische sector, antiekhandel en horeca die bezoekers van ver aantrekken. Maar ook lokale handelaars en dienstverleners vormen de ruggengraat van de Tongerse economie.',
    alineas: [
      'De Tongerse antiekmarkt trekt elke zondag duizenden bezoekers. Antiekhandelaars, horecazaken en winkels die online goed zichtbaar zijn, bereiken die bezoekers al voor ze in de auto stappen. Uw website is uw eerste indruk — lang voor ze in Tongeren aankomen.',
      'Tigran Media bouwt voor Tongerse ondernemers websites die zowel toeristen als lokale klanten aanspreken. Strak design, technisch sterk, live in 1 week.',
    ],
  },
  vilvoorde: {
    h2: 'Webdesign voor kmo\'s in Vilvoorde',
    intro: 'Vilvoorde ligt strategisch tussen Brussel en Mechelen langs de E19 — een ligging die de stad tot een logistiek en commercieel knooppunt maakt. De nabijheid van Brussel brengt internationale bedrijven naar de regio, maar de Vilvoordse kmo\'s vormen de ruggengraat van de lokale economie.',
    alineas: [
      'Als Vlaamse randgemeente van Brussel concurreren Vilvoordse ondernemers online met zowel Brusselse als Mechelse bedrijven. Wie in die competitieve omgeving niet investeert in zijn website, speelt klanten door naar de concurrentie.',
      'Tigran Media bouwt voor Vilvoordse kmo\'s websites die standhouden in die competitieve zoekresultaten. Custom Next.js, sterke SEO, live in 1 week.',
    ],
  },
  aartselaar: {
    h2: 'Webdesign voor ondernemers in Aartselaar',
    intro: 'Aartselaar is een welvarende gemeente in de Antwerpse zuidrand met een hoge concentratie van gevestigde bedrijven en vrije beroepen. De nabijheid van Antwerpen brengt een koopkrachtige klantenbasis mee die hoge verwachtingen heeft.',
    alineas: [
      'Aartselaarse klanten zijn gewend aan kwaliteit — in dienstverlening, producten én online presentatie. Een verouderde of generieke website past niet bij de professionele standaard die in deze regio verwacht wordt.',
      'Tigran Media bouwt websites die die standaard halen: custom design, technisch perfect, mobielvriendelijk. Zodat uw zaak de eerste indruk maakt die uw klanten verdienen.',
    ],
  },
  aalter: {
    h2: 'Webdesign voor kmo\'s in Aalter',
    intro: 'Aalter heeft door de fusie met Nevele sterk aan massa gewonnen en is uitgegroeid tot een regionale centrumgemeente langs de E40. Die strategische ligging brengt zowel lokale klanten als doorgangspubliek naar de regio.',
    alineas: [
      'Ondernemers in Aalter bedienen een ruime regio tussen Gent en Brugge. Online gevonden worden betekent voor hen klanten aantrekken uit een groter verzorgingsgebied dan alleen de gemeente.',
      'Tigran Media bouwt custom websites voor Aalterse kmo\'s: snel, technisch sterk, live in 1 week. Vanaf €500, zonder verborgen kosten.',
    ],
  },
  aarschot: {
    h2: 'Webdesign voor kmo\'s in het Hageland',
    intro: 'Aarschot is de centrumstad van het Hageland met een actieve lokale middenstand langs de Demer. De stad bedient een ruime regio van gemeenten in Vlaams-Brabant die geen eigen stadscentrum hebben.',
    alineas: [
      'Aarschotse ondernemers bedienen klanten uit Tremelo, Rotselaar, Begijnendijk en tientallen andere gemeenten in de regio. Een sterke website zorgt ervoor dat die klanten u vinden — en niet een concurrent in Leuven of Mechelen.',
      'Tigran Media bouwt websites op maat voor Hagelandse kmo\'s. Professioneel, snel en technisch correct — live in 1 week, vanaf €500.',
    ],
  },
  asse: {
    h2: 'Webdesign voor kmo\'s in de Brusselse rand',
    intro: 'Asse is een grote gemeente in de Brusselse rand met een sterke handels- en dienstensector. De nabijheid van Brussel trekt zowel lokale klanten als pendelaars aan die producten en diensten in hun woonomgeving zoeken.',
    alineas: [
      'In de Brusselse rand is de concurrentie online bijzonder hevig — zowel vanuit Brussel als vanuit andere Vlaamse randgemeenten. Wie niet goed gevonden wordt, verliest die klant aan een online concurrent.',
      'Tigran Media bouwt voor Asse en omgeving websites die standhouden in die competitieve omgeving. Custom, snel, live in 1 week.',
    ],
  },
  balen: {
    h2: 'Webdesign voor industriële kmo\'s in Balen',
    intro: 'Balen heeft met Nyrstar een van de grootste zinkverwerkingsbedrijven van Europa in huis, maar heeft ook een actieve lokale handels- en dienstensector die de dagelijkse behoeften van de Balenaren invult.',
    alineas: [
      'Naast de grote industrie zijn er in Balen tientallen kleinere kmo\'s actief in bouw, handel en dienstverlening. Die lokale bedrijven hebben een professionele website nodig om klanten te bereiken in Balen en de ruimere Kempense regio.',
      'Tigran Media bouwt voor Balenaar se kmo\'s websites die werken. Snel, technisch sterk, live in 1 week. Vanaf €500, altijd op maat.',
    ],
  },
  beersel: {
    h2: 'Webdesign voor ondernemers in Beersel',
    intro: 'Beersel is een groene gemeente in de zuidelijke Brusselse rand met een hoge concentratie van forens-ondernemers en lokale handelaars. Kasteel Gaasbeek trekt bezoekers aan, maar de lokale economie draait op het dagelijkse handelsverkeer.',
    alineas: [
      'Beerselaarse ondernemers bedienen zowel lokale klanten als mensen die vanuit Brussel de rust van de rand opzoeken. Een professionele website zorgt dat die klanten u vinden en voor u kiezen.',
      'Tigran Media bouwt custom websites voor kmo\'s in Beersel en de Brusselse rand. Strak, snel, live in 1 week.',
    ],
  },
  berlare: {
    h2: 'Webdesign voor toerisme en kmo\'s in Berlare',
    intro: 'Berlare heeft met het Donkmeer een van de populairste recreatiegebieden van Oost-Vlaanderen. Dat trekt toeristen aan — maar ook de lokale horeca, handel en dienstverleners profiteren van een sterke online aanwezigheid.',
    alineas: [
      'Rondom het Donkmeer zijn er tientallen horecazaken, recreatiebedrijven en lokale handelaars die online klanten zoeken. Een goed scorende website brengt bezoekers rechtstreeks naar uw deur.',
      'Tigran Media bouwt websites voor Berlare en omgeving: mobielvriendelijk, snel en technisch sterk. Want toeristen boeken op hun smartphone.',
    ],
  },
  beveren: {
    h2: 'Webdesign voor industriële kmo\'s in Beveren',
    intro: 'Beveren grenst aan de haven van Antwerpen en heeft een van de grootste industriële zones van Vlaanderen. BASF, Volvo en tientallen andere multinationals hebben er hun Belgische basis — maar ook de lokale kmo\'s zijn sterk vertegenwoordigd.',
    alineas: [
      'In de schaduw van de haven zijn er in Beveren honderden toeleveranciers, transportbedrijven en zakelijke dienstverleners actief. Die bedrijven moeten online gevonden worden door hun klanten — die ook steeds vaker via Google zoeken.',
      'Tigran Media bouwt voor Beverense kmo\'s professionele websites die presteren in lokale en regionale zoekopdrachten. Custom, snel, live in 1 week.',
    ],
  },
  bilzen: {
    h2: 'Webdesign voor kmo\'s in Bilzen',
    intro: 'Bilzen is een centrumgemeente in Limburg op de as Hasselt–Maastricht. Die grensligging tussen Vlaanderen en Nederland geeft Bilzense ondernemers een interessant klantenpotentieel aan beide kanten van de grens.',
    alineas: [
      'Bilzense handelaars en dienstverleners bereiken potentieel klanten uit zowel de Limburgse als de Nederlandse regio. Een meertalige, professionele website maximaliseert dat bereik.',
      'Tigran Media bouwt voor Bilzense kmo\'s websites die presteren. Technisch sterk, snel en op maat van uw klanten.',
    ],
  },
  blankenberge: {
    h2: 'Webdesign voor horeca en toerisme in Blankenberge',
    intro: 'Blankenberge is een van de populairste kuststeden van België met een pier, casino en levendige zeedijk. De horecasector en het toerisme zijn de motoren van de lokale economie — maar ook lokale handelaars profiteren van een sterke online aanwezigheid.',
    alineas: [
      'Blankenbergse horecazaken en hotels worden online vergeleken door toeristen die al thuis beslissen waar ze verblijven en eten. Wie niet online gevonden wordt met een professionele site, verliest die boeking aan een concurrent.',
      'Tigran Media bouwt websites voor kustondernemers in Blankenberge: mobielvriendelijk, snel, seizoensbestendig. Live in 1 week, geen gedoe.',
    ],
  },
  boom: {
    h2: 'Webdesign voor kmo\'s in de Rupelstreek',
    intro: 'Boom heeft een rijke industriële traditie in de baksteensector en is het kloppende hart van de Rupelstreek. Vandaag maakt de gemeente naam met Tomorrowland — maar ook de lokale handelaars en dienstverleners zijn hard aan het werk.',
    alineas: [
      'De Rupelstreek is in volle economische transitie. Nieuwe bedrijven vestigen zich, bestaande kmo\'s groeien. Online zichtbaarheid is voor al die bedrijven een van de meest directe manieren om nieuwe klanten te bereiken.',
      'Tigran Media bouwt voor Boomse kmo\'s websites die werken: custom, snel, 99/100 Google score. Live in 1 week, vanaf €500.',
    ],
  },
  borgloon: {
    h2: 'Webdesign voor agro en toerisme in Borgloon',
    intro: 'Borgloon ligt in het hart van Haspengouw, de fruitstreek van Limburg. De gemeente is bekend om haar fruitteelt, pittoreske dorpen en toeristische aantrekkingskracht — en dat trekt ondernemers aan in horeca, landbouw en toerisme.',
    alineas: [
      'Haspengouwse ondernemers bereiken met een goede website toeristen die Borgloon en omgeving al voor hun bezoek online verkennen. Van fruitboerderijen tot bed-and-breakfasts — online aanwezigheid bepaalt wie u vindt.',
      'Tigran Media bouwt websites voor Borgloonse en Haspengouwse kmo\'s. Snel, mobielvriendelijk, live in 1 week.',
    ],
  },
  bornem: {
    h2: 'Webdesign voor kmo\'s in Bornem',
    intro: 'Bornem is een gemeente aan de Schelde met een mix van fruitteelt, lokale handel en een groeiende dienstensector. De gemeente trekt ook bezoekers aan met het kasteel van de Graaf van Merode.',
    alineas: [
      'Bornemnse ondernemers bedienen klanten uit de gemeente en de omliggende Scheldestreek. Een professionele website zorgt dat die klanten u vinden — en niet een concurrent uit Sint-Amands of Puurs.',
      'Tigran Media bouwt custom websites voor kmo\'s in Bornem. Snel, technisch sterk, live in 1 week. Vanaf €500.',
    ],
  },
  brakel: {
    h2: 'Webdesign voor kmo\'s in de Vlaamse Ardennen',
    intro: 'Brakel ligt in de glooiende Vlaamse Ardennen en heeft een actieve lokale middenstand die de inwoners van de regio bedient. Toeristen die de Vlaamse Ardennen verkennen, zijn een extra klantensegment voor lokale horecazaken en handelaars.',
    alineas: [
      'In een landelijke regio zoals de Vlaamse Ardennen is online aanwezigheid extra belangrijk — want het alternatief voor klanten is rijden naar Ronse, Oudenaarde of Gent. Een sterke website houdt die klanten in de buurt.',
      'Tigran Media bouwt voor Brakelaar se kmo\'s websites die lokaal en regionaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  brasschaat: {
    h2: 'Webdesign voor ondernemers in Brasschaat',
    intro: 'Brasschaat is een van de welvarendste gemeenten van de Antwerpse rand met groene villawij ken, een sterke lokale middenstand en een koopkrachtige bevolking. Klanten in Brasschaat verwachten kwaliteit — ook online.',
    alineas: [
      'De Brasschaatse ondernemer bedient een cliënteel dat hoge verwachtingen heeft. Een verouderde of onprofessionele website past niet bij de standaard die in deze gemeenten verwacht wordt — en jaagt die klant naar een concurrent.',
      'Tigran Media bouwt premium websites voor kmo\'s in Brasschaat: strak design, technisch perfect, mobielvriendelijk. Live in 1 week.',
    ],
  },
  brecht: {
    h2: 'Webdesign voor kmo\'s in Brecht',
    intro: 'Brecht is een gemeente in de Antwerpse Noorderkempen met een actieve lokale economie van handelaars, ambachtslieden en dienstverleners. De nabijheid van Antwerpen en de Nederlandse grens geeft Brechtse ondernemers een ruim klantenpotentieel.',
    alineas: [
      'Brechtse kmo\'s kunnen dankzij een goede website klanten bereiken uit Antwerpen én uit Nederland — een unieke geografische positie die online te verzilveren is.',
      'Tigran Media bouwt voor Brechtse ondernemers websites die presteren. Snel, professioneel, live in 1 week. Vanaf €500.',
    ],
  },
  'de-panne': {
    h2: 'Webdesign voor kustondernemers in De Panne',
    intro: 'De Panne is de westelijkste gemeente van de Belgische kust, op de grens met Frankrijk. Plopsaland trekt honderdduizenden gezinnen per jaar aan — en dat toeristische publiek is ook potentiële klant voor lokale horeca, winkels en dienstverleners.',
    alineas: [
      'Toeristen die De Panne bezoeken, plannen hun verblijf online. Wie dan niet gevonden wordt met een professionele website, laat die boeking of die middag liggen voor een concurrent die dat wél gedaan heeft.',
      'Tigran Media bouwt websites voor kustondernemers in De Panne. Mobielvriendelijk, snel, leven in 1 week — zodat u het seizoen maximaal benut.',
    ],
  },
  deinze: {
    h2: 'Webdesign voor kmo\'s in Deinze',
    intro: 'Deinze heeft door de fusie met Nevele sterk aan schaal gewonnen en is uitgegroeid tot een bloeiende centrumstad aan de Leie. De lokale economie omvat handel, dienstverlening, horeca en een groeiend aantal nieuwe bedrijven.',
    alineas: [
      'In de nieuwe, grotere gemeente Deinze zijn er meer potentiële klanten dan ooit. Maar die klanten zoeken online — en wie dan niet goed zichtbaar is, laat die omzet liggen.',
      'Tigran Media bouwt custom websites voor Deinzse kmo\'s. Technisch sterk, SEO-gericht, live in 1 week. Vanaf €500.',
    ],
  },
  diepenbeek: {
    h2: 'Webdesign voor kmo\'s nabij Hasselt',
    intro: 'Diepenbeek grenst aan Hasselt en herbergt de campus van UHasselt — wat de gemeente een unieke mix geeft van academische dynamiek en lokale ondernemersactiviteit. Die combinatie trekt studenten, professionals en gezinnen aan.',
    alineas: [
      'Diepenbeekse ondernemers bedienen zowel de lokale bevolking als het Hasseltse publiek. Een goede website zorgt dat u ook de klanten bereikt die vanuit Hasselt naar u zoeken.',
      'Tigran Media bouwt websites voor kmo\'s in Diepenbeek en de Hasseltse regio. Snel, professioneel, live in 1 week.',
    ],
  },
  diest: {
    h2: 'Webdesign voor kmo\'s in Diest',
    intro: 'Diest is een historische centrumstad in het Hageland met een goed bewaarde vesting en een actieve lokale middenstand. De stad trekt toeristen aan met haar erfgoed, maar heeft ook een loyale regionale klantenbasis.',
    alineas: [
      'In Diest en het Hageland zoeken klanten online naar lokale dienstverleners, restaurants en winkels. Wie dan goed gevonden wordt, haalt klanten aan die anders naar Hasselt of Leuven rijden.',
      'Tigran Media bouwt voor Diestenaren websites die lokaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  diksmuide: {
    h2: 'Webdesign voor kmo\'s in de Westhoek',
    intro: 'Diksmuide is het centrum van de Westhoek — een agrarische regio met een rijke WO1-geschiedenis die elk jaar honderdduizenden bedevaartgangers en toeristen trekt naar de IJzertoren. Lokale handelaars en horecazaken profiteren van dat bezoekerspubliek.',
    alineas: [
      'Toeristen en herdenkingsbezoekers zoeken online naar accommodatie, restaurants en bezienswaardigheden in Diksmuide. Een professionele website zorgt dat u op dat moment gevonden wordt.',
      'Tigran Media bouwt voor Diksmuidse kmo\'s websites die zowel lokaal als voor bezoekers van buiten de regio werken. Mobielvriendelijk, snel, live in 1 week.',
    ],
  },
  dilbeek: {
    h2: 'Webdesign voor kmo\'s in Dilbeek',
    intro: 'Dilbeek is een grote gemeente in de westelijke Brusselse rand met een hoge bevolkingsdichtheid en een sterke lokale handels- en dienstensector. De nabijheid van Brussel brengt een koopkrachtige klantenbasis mee.',
    alineas: [
      'Dilbeekse ondernemers concurreren online met zowel Brusselse als andere Vlaamse randspelers. In die competitieve omgeving is een professionele website met sterke SEO geen luxe.',
      'Tigran Media bouwt websites voor kmo\'s in Dilbeek. Custom, technisch sterk, live in 1 week. Vanaf €500.',
    ],
  },
  edegem: {
    h2: 'Webdesign voor professionals in Edegem',
    intro: 'Edegem grenst direct aan Antwerpen en heeft een hoge concentratie van professionals, vrije beroepen en kleinere ondernemingen. De koopkrachtige bevolking verwacht kwalitatieve dienstverlening — ook online.',
    alineas: [
      'Edegemse ondernemers bedienen klanten die gewend zijn aan kwaliteit. Een generieke of verouderde website geeft het verkeerde signaal — en die klant rijdt dan toch naar Antwerpen.',
      'Tigran Media bouwt premium websites voor kmo\'s in Edegem. Strak, snel, live in 1 week.',
    ],
  },
  eeklo: {
    h2: 'Webdesign voor kmo\'s in het Meetjesland',
    intro: 'Eeklo is de centrumstad van het Meetjesland — een regio tussen Gent en Brugge die zijn eigen economische identiteit heeft. De stad bedient een ruime regio van gemeenten die voor hun aankopen en diensten naar Eeklo komen.',
    alineas: [
      'Eeklonaar se ondernemers bedienen een groot verzorgingsgebied. Online gevonden worden betekent voor hen klanten aantrekken uit de hele Meetjeslandregio.',
      'Tigran Media bouwt voor Eeklonaar se kmo\'s websites die dat bereik maximaliseren. Custom, snel, live in 1 week.',
    ],
  },
  evergem: {
    h2: 'Webdesign voor kmo\'s in Evergem',
    intro: 'Evergem grenst aan Gent en heeft een sterke industriële zone als onderdeel van de Gentse haven. Maar naast de havengerelateerde industrie heeft Evergem ook een actieve lokale middenstand en een groeiend aantal kmo\'s.',
    alineas: [
      'De Evergemse ondernemer opereert in de schaduw van Gent — maar heeft daarvoor eigen klanten en een eigen markt. Een goede website zorgt dat u lokaal gevonden wordt voor klanten kiezen voor een Gents alternatief.',
      'Tigran Media bouwt websites voor kmo\'s in Evergem. Custom, technisch sterk, live in 1 week. Vanaf €500.',
    ],
  },
  geel: {
    h2: 'Webdesign voor industriële kmo\'s in Geel',
    intro: 'Geel heeft een unieke reputatie — zowel voor zijn progressieve aanpak van geestelijke gezondheidszorg (gezinsverpleging) als voor zijn sterke industriële basis met bedrijven zoals BASF en Janssen Pharmaceutica. Die combinatie maakt van Geel een bijzondere Kempense centrumstad.',
    alineas: [
      'Naast de grote industrie zijn er in Geel honderden kleinere kmo\'s actief die de lokale bevolking en regionale klanten bedienen. In die competitieve Kempense markt is online zichtbaarheid een directe troef.',
      'Tigran Media bouwt voor Geelse kmo\'s websites die lokaal en regionaal presteren. Custom Next.js, 99/100 Google score, live in 1 week.',
    ],
  },
  geraardsbergen: {
    h2: 'Webdesign voor kmo\'s in Geraardsbergen',
    intro: 'Geraardsbergen is de stad van de Muur — de beroemde kasseiklim die elke wielerliefhebber kent. Die toeristische bekendheid, samen met een actieve lokale middenstand, maakt van Geraardsbergen een interessante markt voor lokale ondernemers.',
    alineas: [
      'Wielerfans en -toeristen bezoeken Geraardsbergen jaarlijks in groten getale. Horecazaken, logies en winkels die online goed zichtbaar zijn, bereiken die bezoekers al voor ze vertrekken.',
      'Tigran Media bouwt voor Geraardsbergse kmo\'s websites die presteren. Snel, mobielvriendelijk, live in 1 week.',
    ],
  },
  grimbergen: {
    h2: 'Webdesign voor kmo\'s in Grimbergen',
    intro: 'Grimbergen is een gemeente in de Brusselse rand bekend om zijn abdijbier — maar heeft ook een actieve lokale economie met handelaars, horeca en dienstverleners die de grote Grimbergse bevolking bedienen.',
    alineas: [
      'Als Brusselse randgemeente bedienen Grimbergse ondernemers zowel lokale klanten als pendelaars en Brusselaars die in de rand diensten zoeken. Een professionele website vergroot dat bereik aanzienlijk.',
      'Tigran Media bouwt custom websites voor kmo\'s in Grimbergen. Snel, technisch sterk, live in 1 week.',
    ],
  },
  haacht: {
    h2: 'Webdesign voor kmo\'s in Haacht',
    intro: 'Haacht is thuisstad van de Brouwerij Haacht — maar naast dat industriële erfgoed heeft de gemeente een bloeiende lokale economie van handelaars en dienstverleners in het Hageland.',
    alineas: [
      'Haachtse ondernemers bedienen klanten uit de gemeente en omliggende Hagelandgemeenten. Een goede website zorgt dat die klanten u vinden voor ze naar Mechelen of Leuven rijden.',
      'Tigran Media bouwt voor Haachtse kmo\'s websites die lokaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  halle: {
    h2: 'Webdesign voor kmo\'s in Halle',
    intro: 'Halle is het centrum van het Pajottenland en een bedevaartsoord voor de Zwarte Madonna — wat de stad jaarlijks duizenden extra bezoekers oplevert. Naast dit toerisme heeft Halle een sterke handels- en dienstensector in de zuidelijke Brusselse rand.',
    alineas: [
      'Hallese ondernemers bedienen zowel lokale klanten als bezoekers die naar de stad komen voor de basiliek. Online aanwezigheid bepaalt of die bezoeker uw zaak vindt — of die van een concurrent.',
      'Tigran Media bouwt websites voor kmo\'s in Halle. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  hamme: {
    h2: 'Webdesign voor kmo\'s in Hamme',
    intro: 'Hamme is een levendige gemeente aan de Durme met een sterk lokaal karakter. De gemeente staat bekend om haar folkloretradities (de Hamse ossenkoppen) en heeft een actieve middenstand die de bevolking van het Waasland bedient.',
    alineas: [
      'Hammenaars zijn trots op hun lokale identiteit — en dat geldt ook voor hun ondernemers. Een website die die lokale roots uitstraalt én technisch sterk staat, overtuigt klanten die voor het lokale kiezen.',
      'Tigran Media bouwt websites voor kmo\'s in Hamme. Custom, professioneel, live in 1 week.',
    ],
  },
  harelbeke: {
    h2: 'Webdesign voor industriële kmo\'s in Harelbeke',
    intro: 'Harelbeke grenst aan Kortrijk en heeft een sterke industriële en commerciële economie langs de E17. De gemeente heeft belangrijke bedrijvenzones die regionale en internationale bedrijven aantrekken.',
    alineas: [
      'Harelbeekkse ondernemers opereren in de dynamische Kortrijkse regio. Online gevonden worden in die competitieve omgeving vraagt om een technisch sterke website met gerichte SEO.',
      'Tigran Media bouwt voor Harelbeekkse kmo\'s websites die presteren. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  'heist-op-den-berg': {
    h2: 'Webdesign voor kmo\'s in Heist-op-den-Berg',
    intro: 'Heist-op-den-Berg is een centrumgemeente ten zuiden van Mechelen met een actieve lokale middenstand. De gemeente bedient een uitgestrekte regio van inwoners die voor handel en diensten naar het centrum komen.',
    alineas: [
      'Ondernemers in Heist-op-den-Berg bedienen een ruime regio tussen Mechelen, Leuven en Antwerpen. Een sterke website zorgt dat die klanten u vinden — ook als ze beginnen te zoeken vanuit een omliggende gemeente.',
      'Tigran Media bouwt websites voor kmo\'s in Heist-op-den-Berg. Custom, snel, live in 1 week.',
    ],
  },
  'herk-de-stad': {
    h2: 'Webdesign voor kmo\'s in Herk-de-Stad',
    intro: 'Herk-de-Stad is een centrumgemeente in het Limburgse Demerland met een actieve lokale middenstand. De ligging in de Demervallei geeft de gemeente een groen karakter en trekt ook toeristen aan.',
    alineas: [
      'In kleinere centrumgemeenten zoals Herk-de-Stad is online aanwezigheid extra krachtig — want wie gevonden wordt, heeft minder concurrentie dan in een grote stad.',
      'Tigran Media bouwt voor Herk-de-Stads ondernemers websites die lokaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  herzele: {
    h2: 'Webdesign voor kmo\'s in Herzele',
    intro: 'Herzele is een gemeente in de Vlaamse Ardennen met een groeiende lokale economie. De rust van de regio trekt zowel toeristen als nieuwe inwoners aan — wat kansen biedt voor lokale ondernemers.',
    alineas: [
      'In de Vlaamse Ardennen is het alternatief voor de klant rijden naar Aalst, Gent of Ronse. Een professionele website houdt die klant lokaal — en bij u.',
      'Tigran Media bouwt websites voor kmo\'s in Herzele. Snel, professioneel, live in 1 week.',
    ],
  },
  hoogstraten: {
    h2: 'Webdesign voor kmo\'s in Hoogstraten',
    intro: 'Hoogstraten is een grensgemeente met Nederland bekendste om zijn aardbeienteelt en bloemenveiling. Maar ook de lokale handels- en dienstensector is er sterk vertegenwoordigd, mede door het grensverkeer.',
    alineas: [
      'Hoogstraatse ondernemers bedienen klanten uit zowel Vlaanderen als Nederland. Een tweetalige, professionele website vergroot dat grensoverschrijdende bereik aanzienlijk.',
      'Tigran Media bouwt voor Hoogstraatse kmo\'s websites die presteren. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  'houthalen-helchteren': {
    h2: 'Webdesign voor kmo\'s in Houthalen-Helchteren',
    intro: 'Houthalen-Helchteren is een voormalige mijnstad in de Limburgse Kempen die succesvol reconverteert. Bokrijk grenst aan de gemeente — wat toerisme aantrekt. Maar de lokale economie draait op kmo\'s in handel, bouw en dienstverlening.',
    alineas: [
      'In de Limburgse Kempen is online aanwezigheid een van de krachtigste instrumenten voor lokale kmo\'s om nieuwe klanten te bereiken — zonder duur advertentiebudget.',
      'Tigran Media bouwt websites voor kmo\'s in Houthalen-Helchteren. Snel, technisch sterk, live in 1 week.',
    ],
  },
  izegem: {
    h2: 'Webdesign voor kmo\'s in Izegem',
    intro: 'Izegem heeft een rijke industriële geschiedenis in de schoenmaking — en dat ambachtelijke erfgoed leeft voort in het MUST museum en een ondernemende cultuur. Vandaag heeft Izegem een diverse economie van handel, industrie en dienstverlening.',
    alineas: [
      'Izegemse ondernemers zijn van nature nuchter en resultaatgericht. Geen onnodige toeters en bellen — maar een website die klanten brengt en die het doet wat beloofd wordt.',
      'Tigran Media bouwt voor Izegemse kmo\'s websites die werken. Custom, snel, 99/100 Google score. Live in 1 week.',
    ],
  },
  kapellen: {
    h2: 'Webdesign voor ondernemers in Kapellen',
    intro: 'Kapellen is een welvarende gemeente in de Antwerpse Noorderkempen omringd door bossen en groene woonwijken. De koopkrachtige bevolking bedient een actieve lokale middenstand die hoge kwaliteitsverwachtingen heeft.',
    alineas: [
      'In Kapellen verwachten klanten kwaliteit — van de dienst zelf én van de online presentatie. Een verouderde website past niet bij de standaard die in deze gemeente verwacht wordt.',
      'Tigran Media bouwt premium websites voor Kapellense kmo\'s. Strak design, technisch perfect, live in 1 week.',
    ],
  },
  kasterlee: {
    h2: 'Webdesign voor toerisme en kmo\'s in Kasterlee',
    intro: 'Kasterlee is het groene hart van de Kempen — met De Liereman als een van de mooiste heidegebieden van Vlaanderen. Dat toeristische potentieel biedt kansen voor lokale horecazaken, logies en dienstverleners.',
    alineas: [
      'Toeristen die de Kempense natuur in Kasterlee opzoeken, plannen hun bezoek online. Wie dan gevonden wordt met een mooie, snelle website, pikt een deel van dat toeristische verkeer op.',
      'Tigran Media bouwt voor Kasterlese ondernemers websites die mobielvriendelijk, snel en lokaal sterk zijn. Live in 1 week.',
    ],
  },
  'knokke-heist': {
    h2: 'Webdesign voor luxeretail en horeca in Knokke-Heist',
    intro: 'Knokke-Heist is de exclusiefste kustgemeente van België — met luxeboetieks, premium restaurants en de hoogste vastgoedprijzen van de kust. In deze omgeving verwachten klanten van uw website dezelfde kwaliteit als van uw zaak zelf.',
    alineas: [
      'Het Knokke-Heistse publiek is kritisch en koopkrachtig. Een amateuristische website is hier niet alleen onprofessioneel — het is een garantie dat die klant naar een concurrent gaat die zijn online imago wél serieus neemt.',
      'Tigran Media bouwt premium websites voor ondernemers in Knokke-Heist. Custom design, technisch perfect, live in 1 week. Zonder compromissen.',
    ],
  },
  kontich: {
    h2: 'Webdesign voor logistieke kmo\'s in Kontich',
    intro: 'Kontich is een logistiek knooppunt langs de E19 ten zuiden van Antwerpen. Transportbedrijven, distributiecentra en zakelijke dienstverleners hebben Kontich als thuisbasis — wat de lokale economie een uitgesproken B2B-karakter geeft.',
    alineas: [
      'B2B-bedrijven in Kontich worden beoordeeld op hun professionaliteit — en dat begint bij de website. Een sterke online presentatie is in deze sector een basisvereiste om serieus genomen te worden.',
      'Tigran Media bouwt voor Kontichse kmo\'s professionele websites die vertrouwen uitstralen. Custom, snel, live in 1 week.',
    ],
  },
  kruibeke: {
    h2: 'Webdesign voor kmo\'s in Kruibeke',
    intro: 'Kruibeke ligt in de Scheldestreek met de bekende Kruibeke-Bazel-Rupelmonde polder — een Natura 2000-gebied dat natuurliefhebbers aantrekt. De lokale economie draait op landbouw, kleinhandel en dienstverlening.',
    alineas: [
      'In kleinere gemeenten zoals Kruibeke is een goede website een van de sterkste concurrentievoordelen — want minder lokale ondernemers investeren erin, wat meer zichtbaarheid geeft aan wie dat wél doet.',
      'Tigran Media bouwt voor Kruibeekse kmo\'s websites die lokaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  lanaken: {
    h2: 'Webdesign voor kmo\'s in Lanaken',
    intro: 'Lanaken is een grensgemeente met Nederland aan de Maas en heeft door die ligging een interessant klantenpotentieel aan beide kanten van de grens. Maaseik en Maasmechelen liggen om de hoek, waardoor Lanaken onderdeel is van een dynamische grensregio.',
    alineas: [
      'Lanakense ondernemers kunnen zowel Vlaamse als Nederlandse klanten bereiken. Een professionele website — eventueel met Nederlandstalige en Nederlandstalige content — maximaliseert dat grensoverschrijdende bereik.',
      'Tigran Media bouwt voor Lanakense kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  landen: {
    h2: 'Webdesign voor kmo\'s in Landen',
    intro: 'Landen is een centrumgemeente in de Hagelandse suikerstreek van Brabant. De agrarische achtergrond combineert er met een actieve lokale middenstand die de bevolking van de regio bedient.',
    alineas: [
      'In Landen en omgeving zoeken klanten online naar lokale dienstverleners, handelaars en horeca. Wie dan goed gevonden wordt, heeft een streepje voor op wie enkel op mond-tot-mondreclame vertrouwt.',
      'Tigran Media bouwt websites voor kmo\'s in Landen. Custom, snel, live in 1 week.',
    ],
  },
  lebbeke: {
    h2: 'Webdesign voor kmo\'s in Lebbeke',
    intro: 'Lebbeke is een gemeente in het Dendermondse met een sterke lokale middenstand en een groeiend aantal zelfstandige ondernemers. De ligging tussen Dendermonde, Aalst en Gent maakt de regio economisch aantrekkelijk.',
    alineas: [
      'Lebbeekse ondernemers bedienen klanten die ook in Dendermonde, Aalst of Gent kunnen terechtkomen. Een goede website met lokale SEO houdt die klant in Lebbeke.',
      'Tigran Media bouwt voor Lebbeekse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  lede: {
    h2: 'Webdesign voor kmo\'s in Lede',
    intro: 'Lede is een gemeente in de Aalsterse regio met een actieve lokale economie en een groeiend aantal zelfstandigen. De ligging op de as Aalst–Gent geeft Ledenaars toegang tot een ruim klantenpotentieel.',
    alineas: [
      'Ondernemers in Lede concurreren online met spelers uit Aalst en Gent. Een professionele website met lokale SEO is de sleutel om in die omgeving zichtbaar te zijn.',
      'Tigran Media bouwt websites voor kmo\'s in Lede. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  lier: {
    h2: 'Webdesign voor kmo\'s in Lier',
    intro: 'Lier is een historische centrumstad tussen Mechelen en Antwerpen, bekend om de Zimmertoren en zijn middeleeuwse stadskern. Die toeristische troeven, gecombineerd met een actieve lokale middenstand, geven Lier een bloeiende economische basis.',
    alineas: [
      'Lierse handelaars en horecazaken profiteren van zowel lokale klanten als bezoekers die de historische stad verkennen. Online gevonden worden door die twee doelgroepen tegelijk vraagt om een sterke, technisch correcte website.',
      'Tigran Media bouwt voor Lierse kmo\'s websites die presteren. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  lierde: {
    h2: 'Webdesign voor kmo\'s in Lierde',
    intro: 'Lierde is een landelijke gemeente in de Vlaamse Ardennen met een groeiend aantal lokale ondernemers. De rust en het groen trekken nieuwe bewoners aan — wat ook kansen biedt voor lokale handelaars en dienstverleners.',
    alineas: [
      'In een landelijke gemeente als Lierde is online aanwezigheid het verschil tussen een klant die u vindt en een klant die naar Ronse of Geraardsbergen rijdt. Investeer in uw website voor u die klanten verliest.',
      'Tigran Media bouwt websites voor kmo\'s in Lierde. Custom, snel, live in 1 week.',
    ],
  },
  lint: {
    h2: 'Webdesign voor kmo\'s in Lint',
    intro: 'Lint is een kleine gemeente nabij Lier met een actieve lokale economie en een groeiend aantal zelfstandige ondernemers. De ligging in de Antwerpse regio biedt toegang tot een groot klantenpotentieel.',
    alineas: [
      'In een gemeente als Lint, waar lokale trouw sterk is, betaalt een professionele website zich snel terug — want wie gevonden wordt, heeft automatisch minder concurrentie dan in een grotere stad.',
      'Tigran Media bouwt websites voor kmo\'s in Lint. Custom, snel, live in 1 week.',
    ],
  },
  lokeren: {
    h2: 'Webdesign voor kmo\'s in Lokeren',
    intro: 'Lokeren is een centrumstad in het Waasland met een sterke handels- en industriescene. De stad is bekend om de jaarlijkse Lokerse Feesten en de Lokerse kaasdoop — maar haar economische kracht zit in de lokale ondernemersscene.',
    alineas: [
      'Lokeraar se kmo\'s bedienen klanten uit de gemeente en de ruimere Wase regio. Online gevonden worden in die regio betekent klanten aantrekken die anders naar Sint-Niklaas of Gent gaan.',
      'Tigran Media bouwt voor Lokeraar se ondernemers websites die regionaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  lommel: {
    h2: 'Webdesign voor kmo\'s in de Limburgse Kempen',
    intro: 'Lommel is een grote gemeente in de Limburgse Kempen met een unieke combinatie van industrie (onder meer elektronica) en natuur (de Sahara-achtige stuifzanden). Die mix trekt zowel industrie als toerisme aan.',
    alineas: [
      'Lommelse ondernemers bedienen een groot verzorgingsgebied in Noord-Limburg en kunnen ook grensoverschrijdend Nederlandse klanten bereiken. Een professionele website maximaliseert dat bereik.',
      'Tigran Media bouwt websites voor kmo\'s in Lommel. Custom, snel, live in 1 week. Vanaf €500.',
    ],
  },
  londerzeel: {
    h2: 'Webdesign voor kmo\'s in Londerzeel',
    intro: 'Londerzeel is een gemeente op de as Mechelen–Brussel langs de E19 met een sterke lokale handels- en dienstensector. De commerciële activiteit wordt gestimuleerd door het drukke doorgaande verkeer.',
    alineas: [
      'Londerzeelse ondernemers bedienen klanten uit zowel de gemeente als de omliggende as Mechelen-Brussel. Een goede website met lokale SEO trekt die klanten aan voor ze passeren.',
      'Tigran Media bouwt websites voor kmo\'s in Londerzeel. Custom, snel, live in 1 week.',
    ],
  },
  lubbeek: {
    h2: 'Webdesign voor kmo\'s in het Hageland',
    intro: 'Lubbeek is een gemeente in het Hageland nabij Leuven met een groeiende lokale economie. De nabijheid van de universiteitsstad trekt jonge gezinnen en professionals aan — een koopkrachtige klantenbasis voor lokale ondernemers.',
    alineas: [
      'In Lubbeek profiteren lokale ondernemers van de nabijheid van Leuven zonder er direct mee te concurreren. Een goede website zorgt dat Lubbeekse klanten lokaal blijven.',
      'Tigran Media bouwt websites voor kmo\'s in Lubbeek. Custom, snel, live in 1 week.',
    ],
  },
  maaseik: {
    h2: 'Webdesign voor kmo\'s in Maaseik',
    intro: 'Maaseik is een historische stad aan de Maas, bekend als de geboorteplaats van Jan en Hubert van Eyck. Die culturele rijkdom trekt toeristen aan, maar Maaseik heeft ook een actieve lokale economie aan beide kanten van de Maas.',
    alineas: [
      'Als grensstad met Nederland bedienen Maasei kse ondernemers potentieel klanten uit twee landen. Online zichtbaarheid in die grensregio vraagt om een sterke, meertalige website.',
      'Tigran Media bouwt voor Maaseikse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  maasmechelen: {
    h2: 'Webdesign voor retail en kmo\'s in Maasmechelen',
    intro: 'Maasmechelen herbergt Maasmechelen Village — een van de bekendste luxe-outletcentra van de Benelux dat jaarlijks miljoenen bezoekers trekt. Die commerciële aantrekkingskracht stimuleert ook de bredere lokale economie van de gemeente.',
    alineas: [
      'Maasmechelse ondernemers opereren in een regio die gewend is aan kopers van ver. Online gevonden worden door die bezoekers — voor én tijdens hun bezoek — geeft een groot voordeel.',
      'Tigran Media bouwt websites voor kmo\'s in Maasmechelen. Custom, mobielvriendelijk, live in 1 week.',
    ],
  },
  maldegem: {
    h2: 'Webdesign voor kmo\'s in Maldegem',
    intro: 'Maldegem is een centrumgemeente in Noord-Oost-Vlaanderen op de as Gent–Brugge. De gemeente heeft een actieve lokale middenstand en een groeiend aantal kmo\'s die de regio bedienen.',
    alineas: [
      'Maldegemse ondernemers bedienen een regio die goed bereikbaar is vanuit zowel Gent als Brugge. Online gevonden worden betekent klanten aantrekken uit een ruimer gebied.',
      'Tigran Media bouwt websites voor kmo\'s in Maldegem. Custom, snel, live in 1 week.',
    ],
  },
  menen: {
    h2: 'Webdesign voor industriële kmo\'s in Menen',
    intro: 'Menen is een grensgemeente met Frankrijk aan de Leie met een sterke industriële en tekstiele traditie. De grensligging brengt ook een interessant commercieel potentieel mee — aan beide zijden van de taalgrens.',
    alineas: [
      'Meense ondernemers kunnen met een professionele website klanten bereiken uit zowel West-Vlaanderen als het aangrenzende Noord-Frankrijk. Dat grensoverschrijdend potentieel is online te verzilveren.',
      'Tigran Media bouwt voor Meense kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  merelbeke: {
    h2: 'Webdesign voor kmo\'s in Merelbeke',
    intro: 'Merelbeke ligt direct ten zuiden van Gent en groeit als woon- en werkgemeente dankzij de goede bereikbaarheid via de E17 en E40. De lokale economie is actief met handelaars, vrije beroepen en een toenemend aantal nieuwe bedrijven.',
    alineas: [
      'Merelbeekkse ondernemers opereren in de directe uitstraling van Gent. Online gevonden worden in die omgeving vraagt om een technisch sterke website die concurreert met Gentse spelers.',
      'Tigran Media bouwt voor Merelbeekse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  middelkerke: {
    h2: 'Webdesign voor kustondernemers in Middelkerke',
    intro: 'Middelkerke is een badgemeente met een casino, een actief zeedijkleven en een trouwe schare seizoenstoeristen. Naast het toerisme heeft de gemeente een lokale bevolking die jaarrond diensten nodig heeft.',
    alineas: [
      'Toeristen in Middelkerke boeken online — restaurants, activiteiten, winkels. Wie dan niet gevonden wordt met een professionele, mobielvriendelijke website, laat die omzet liggen.',
      'Tigran Media bouwt voor Middelkerkse kmo\'s websites die het hele seizoen presteren. Custom, snel, live in 1 week.',
    ],
  },
  mortsel: {
    h2: 'Webdesign voor professionals en kmo\'s in Mortsel',
    intro: 'Mortsel grenst aan Antwerpen en heeft met het voormalige Agfa-Gevaert-complex een industriële erfenis. Vandaag is Mortsel een dichte woon- en werkgemeente met een sterke concentratie van lokale ondernemers en vrije beroepen.',
    alineas: [
      'Mortse lse ondernemers concurreren direct met Antwerpse spelers. Een professionele website met sterke lokale SEO is de manier om zichtbaar te blijven in die competitieve omgeving.',
      'Tigran Media bouwt voor Mortse lse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  niel: {
    h2: 'Webdesign voor kmo\'s in Niel',
    intro: 'Niel is een gemeente in de Rupelstreek met een groeiende lokale bedrijvigheid. De ligging nabij Boom en Schelle maakt Niel onderdeel van een economisch actieve regio.',
    alineas: [
      'In kleinere gemeenten zoals Niel heeft een goede website een groot effect — want de lokale concurrentie is kleiner en wie gevonden wordt, heeft automatisch een sterke positie.',
      'Tigran Media bouwt voor Nielse kmo\'s websites die lokaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  nieuwpoort: {
    h2: 'Webdesign voor jacht en toerisme in Nieuwpoort',
    intro: 'Nieuwpoort heeft de grootste jachthaven van België en trekt jaarlijks tienduizenden watersport- en kusttoeristen aan. Die bezoekers boeken online en zoeken online naar restaurants, winkels en activiteiten in de regio.',
    alineas: [
      'Nieuwpoortse horecazaken, winkels en dienstverleners bereiken hun toeristisch publiek het meest direct via een sterke, mobielvriendelijke website. Wie niet gevonden wordt op Google, bestaat niet voor die toerist.',
      'Tigran Media bouwt voor Nieuwpoortse kmo\'s websites die het toeristische seizoen maximaliseren. Custom, snel, live in 1 week.',
    ],
  },
  nijlen: {
    h2: 'Webdesign voor kmo\'s in Nijlen',
    intro: 'Nijlen is een Kempense gemeente nabij Herentals met een actieve lokale economie en een groeiend aantal ondernemers. De ligging midden in de Kempen geeft Nijlense bedrijven toegang tot een ruime regionale klantenbasis.',
    alineas: [
      'Nijlense ondernemers bedienen klanten die ook in Herentals of Lier kunnen winkelen. Een goede website houdt die klant lokaal en trekt ook klanten aan van buiten de gemeente.',
      'Tigran Media bouwt websites voor kmo\'s in Nijlen. Custom, snel, live in 1 week.',
    ],
  },
  ninove: {
    h2: 'Webdesign voor kmo\'s in Ninove',
    intro: 'Ninove is een centrumstad in het Pajottenland aan de Dender, centraal gelegen tussen Gent, Brussel en Aalst. Die geografische positie maakt van Ninove een regionale handelsplaats voor de omliggende gemeenten.',
    alineas: [
      'Ninoofse ondernemers bedienen klanten uit het Pajottenland en de Denderstreek. Online gevonden worden in die regio betekent klanten aantrekken die anders naar Aalst of Gent gaan.',
      'Tigran Media bouwt voor Ninoofse kmo\'s websites die regionaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  oudenaarde: {
    h2: 'Webdesign voor kmo\'s in Oudenaarde',
    intro: 'Oudenaarde is de stad van de Ronde van Vlaanderen — elk jaar passeert het peloton hier, gevolgd door honderdduizenden toeschouwers. Maar naast dat wielerevenement heeft Oudenaarde een rijke geschiedenis in tapijtweven en een actieve lokale economie.',
    alineas: [
      'Oudenaar dse ondernemers profiteren van wielerevenementen én van een trouwe lokale klantenbasis in de Vlaamse Ardennen. Online gevonden worden door beide doelgroepen vraagt om een sterke, snelle website.',
      'Tigran Media bouwt voor Oudenaar dse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  overijse: {
    h2: 'Webdesign voor professionals in Overijse',
    intro: 'Overijse is een welvarende gemeente in de Brusselse rand bekend om zijn druiventeelt en groene omgeving. De hoge bevolkingsdichtheid van professionals en expats maakt Overijse tot een aantrekkelijke markt voor kwaliteitsondernemers.',
    alineas: [
      'Overijsenaars zijn gewend aan kwaliteit en verwachten die ook van hun lokale dienstverleners. Een professionele website is in Overijse niet optioneel — het is de drempel tot geloofwaardigheid.',
      'Tigran Media bouwt voor Overijsese kmo\'s websites die die standaard halen. Custom design, technisch perfect, live in 1 week.',
    ],
  },
  peer: {
    h2: 'Webdesign voor kmo\'s in Peer',
    intro: 'Peer is een centrumgemeente in de Limburgse Kempen op de as Hasselt–Eindhoven. Die strategische ligging geeft Peer een grensoverschrijdend commercieel potentieel richting Nederland.',
    alineas: [
      'Peer se ondernemers kunnen dankzij een goede website klanten bereiken uit zowel Limburg als de Nederlandse Kempen. Een professionele online aanwezigheid maakt dat grensoverschrijdende bereik concreet.',
      'Tigran Media bouwt websites voor kmo\'s in Peer. Custom, snel, live in 1 week.',
    ],
  },
  pelt: {
    h2: 'Webdesign voor kmo\'s in Pelt',
    intro: 'Pelt is een fusiegemeente in Noord-Limburg uit Neerpelt en Overpelt — twee industriële gemeenten met een sterke economische basis. De fusie heeft een grotere gemeente gecreëerd met meer schaal en meer klantenpotentieel.',
    alineas: [
      'Peltse ondernemers bedienen een grotere gemeente dan vóór de fusie, maar ook de grens met Nederland is vlakbij. Online aanwezigheid maximaliseert dat bereik.',
      'Tigran Media bouwt voor Peltse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  poperinge: {
    h2: 'Webdesign voor de hopstreek in Poperinge',
    intro: 'Poperinge is de hophoofstad van België — vrijwel alle Belgische hop voor het brouwen van bier komt van hier. Die unieke landbouwtraditie, samen met de WO1-geschiedenis van de Westhoek, maakt Poperinge tot een bijzondere toeristische bestemming.',
    alineas: [
      'Poperingse ondernemers in horeca, landbouwtoerisme en lokale handel bereiken toeristen en regionale klanten via Google. Een professionele website zorgt dat u als eerste gevonden wordt.',
      'Tigran Media bouwt voor Poperingse kmo\'s websites die de lokale identiteit uitstralen én technisch sterk presteren. Live in 1 week.',
    ],
  },
  'puurs-sint-amands': {
    h2: 'Webdesign voor kmo\'s in Puurs-Sint-Amands',
    intro: 'Puurs-Sint-Amands is een Scheldegemeente met een rijke literaire traditie (Emile Verhaeren) en een sterke industriële basis. De fusiegemeente bedient een uitgebreide regio langs de Schelde.',
    alineas: [
      'Ondernemers in Puurs-Sint-Amands bedienen klanten uit de gemeente én de omliggende Scheldestreek. Een goede website trekt die klanten aan voor ze naar Mechelen of Antwerpen rijden.',
      'Tigran Media bouwt websites voor kmo\'s in Puurs-Sint-Amands. Custom, snel, live in 1 week.',
    ],
  },
  ranst: {
    h2: 'Webdesign voor kmo\'s in Ranst',
    intro: 'Ranst is een gemeente in het Antwerpse met een groeiend aantal lokale ondernemers en zelfstandigen. De ligging nabij Antwerpen en de E313 maakt de gemeente commercieel aantrekkelijk.',
    alineas: [
      'Ranstse ondernemers bedienen klanten die ook naar Antwerpen kunnen. Een goede website houdt die klanten lokaal en trekt ook doorgangspubliek aan.',
      'Tigran Media bouwt voor Ranstse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  rijkevorsel: {
    h2: 'Webdesign voor kmo\'s in Rijkevorsel',
    intro: 'Rijkevorsel is een gemeente in de Antwerpse Noorderkempen met een actieve lokale handels- en dienstensector. De nabijheid van Hoogstraten en de Nederlandse grens geeft de gemeente een grensoverschrijdend karakter.',
    alineas: [
      'Rijkevorselse ondernemers bedienen klanten die ook in Hoogstraten of Nederland kunnen terechtkomen. Online gevonden worden is de manier om die klant te overtuigen voor u te kiezen.',
      'Tigran Media bouwt websites voor kmo\'s in Rijkevorsel. Custom, snel, live in 1 week.',
    ],
  },
  ronse: {
    h2: 'Webdesign voor kmo\'s in Ronse',
    intro: 'Ronse is een centrumstad in de Vlaamse Ardennen met een rijke textiele geschiedenis en een groeiende lokale ondernemersscene. De stad heeft een eigen tweetalige identiteit als faciliteitengemeente.',
    alineas: [
      'Ronsese ondernemers bedienen een divers publiek van Vlaamse en Franstalige klanten. Een professionele website die beide doelgroepen aanspreekt, vergroot het klantenpotentieel aanzienlijk.',
      'Tigran Media bouwt voor Ronsese kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  schoten: {
    h2: 'Webdesign voor ondernemers in Schoten',
    intro: 'Schoten is een groene gemeente in de Antwerpse rand met een welvarende bevolking en een actieve lokale middenstand. De koopkrachtige inwoners verwachten kwaliteit van zowel de dienst als de online presentatie.',
    alineas: [
      'In Schoten verwachten klanten een professionele online ervaring. Een trage of verouderde website jaagt die klant weg — en in de Antwerpse rand zijn er altijd alternatieven.',
      'Tigran Media bouwt premium websites voor kmo\'s in Schoten. Strak design, technisch perfect, live in 1 week.',
    ],
  },
  'sint-katelijne-waver': {
    h2: 'Webdesign voor tuinbouw en kmo\'s in Sint-Katelijne-Waver',
    intro: 'Sint-Katelijne-Waver is de tuinbouwgemeente bij uitstek van de Mechelse regio — aardbeien, witloof en groenten worden er op grote schaal geteeld. Maar naast de agrarische sector heeft de gemeente ook een actieve lokale economie.',
    alineas: [
      'Tuinbouwbedrijven en lokale handelaars in Sint-Katelijne-Waver bereiken klanten via online kanalen. Een professionele website bouwt geloofwaardigheid op bij klanten die nog niet met u vertrouwd zijn.',
      'Tigran Media bouwt voor Sint-Katelijne-Waverse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  'sint-pieters-leeuw': {
    h2: 'Webdesign voor kmo\'s in Sint-Pieters-Leeuw',
    intro: 'Sint-Pieters-Leeuw is een grote gemeente in de zuidwestelijke Brusselse rand met een hoge bevolkingsdichtheid en een sterke lokale economie. De nabijheid van Brussel trekt zowel expats als Vlamingen aan.',
    alineas: [
      'In Sint-Pieters-Leeuw bedienen lokale ondernemers een groot en divers klantenpubliek. Online gevonden worden in deze competitieve omgeving vraagt om een sterke, technisch correcte website.',
      'Tigran Media bouwt websites voor kmo\'s in Sint-Pieters-Leeuw. Custom, snel, live in 1 week.',
    ],
  },
  'sint-truiden': {
    h2: 'Webdesign voor kmo\'s in Sint-Truiden',
    intro: 'Sint-Truiden is de fruitstad van Haspengouw — de ganse regio staat in bloei tijdens het bloesemseizon, dat jaarlijks duizenden toeristen aantrekt. Naast de fruitteelt heeft Sint-Truiden een actieve handels- en dienstensector.',
    alineas: [
      'De Truiense ondernemer profiteert van zowel lokale klanten als toeristen die de Haspengouwse fruitstreek verkennen. Online gevonden worden door beide doelgroepen vraagt om een sterke, mobielvriendelijke website.',
      'Tigran Media bouwt voor Sint-Truidenaar se kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  stekene: {
    h2: 'Webdesign voor kmo\'s in Stekene',
    intro: 'Stekene is een gemeente in het Waasland met een actieve lokale economie en een groeiende middenstand. De ligging tussen Sint-Niklaas en Lokeren maakt Stekene onderdeel van een economisch actieve Wase regio.',
    alineas: [
      'Stekense ondernemers bedienen klanten die ook in Sint-Niklaas kunnen winkelen. Een goede website houdt die klant lokaal en versterkt uw positie in de Wase markt.',
      'Tigran Media bouwt websites voor kmo\'s in Stekene. Custom, snel, live in 1 week.',
    ],
  },
  temse: {
    h2: 'Webdesign voor industriële kmo\'s in Temse',
    intro: 'Temse heeft een rijke industriële geschiedenis met de voormalige Boelwerf-scheepswerf aan de Schelde. Vandaag heeft de gemeente een diverse economie van industrie, handel en dienstverlening die de Scheldestreek bedient.',
    alineas: [
      'Temse se ondernemers hebben een sterke reputatie voor kwaliteit en vakmanschap opgebouwd. Een professionele website maakt die reputatie zichtbaar voor klanten die online zoeken.',
      'Tigran Media bouwt voor Temse se kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  tervuren: {
    h2: 'Webdesign voor professionals in Tervuren',
    intro: 'Tervuren is een welvarende gemeente in de Brusselse rand bekend om het Koninklijk Museum voor Midden-Afrika en het Zoniënwoud. De hoge concentratie van expats en diplomaten maakt van Tervuren een bijzondere, koopkrachtige markt.',
    alineas: [
      'Tervuurse ondernemers bedienen een internationaal publiek met hoge verwachtingen. Een website die enkel in het Nederlands beschikbaar is, mist een deel van die markt. Een professionele, snelle website is het minimum.',
      'Tigran Media bouwt voor Tervuurse kmo\'s websites die die internationale standaard halen. Custom design, technisch perfect, live in 1 week.',
    ],
  },
  tielt: {
    h2: 'Webdesign voor kmo\'s in Tielt',
    intro: 'Tielt is een centrumstad in het hart van West-Vlaanderen met een actieve veemarkt en een sterke middenstand. De stad bedient een ruime agrarische regio die voor haar aankopen naar Tielt trekt.',
    alineas: [
      'Tieltsee ondernemers bedienen een trouwe regionale klantenbasis. Online aanwezigheid versterkt die lokale positie en trekt ook klanten aan uit de omliggende gemeenten.',
      'Tigran Media bouwt websites voor kmo\'s in Tielt. Custom, snel, live in 1 week.',
    ],
  },
  tienen: {
    h2: 'Webdesign voor kmo\'s in Tienen',
    intro: 'Tienen is de suikerstad van Brabant — thuis van de Tiense Suikerraffinaderij — en heeft een sterke lokale handels- en industrietraditie. De centrumstad bedient een uitgebreide regio in Brabant.',
    alineas: [
      'Tienenaar se ondernemers bedienen klanten uit een ruime regio in Brahant en zijn goed bereikbaar via de E40. Online gevonden worden door die regionale klanten vraagt om een sterke website.',
      'Tigran Media bouwt voor Tienenaar se kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  torhout: {
    h2: 'Webdesign voor kmo\'s in Torhout',
    intro: 'Torhout is een centrumgemeente in West-Vlaanderen bekend om zijn paardentradities en de jaarlijkse paardenfokkerij. Maar de lokale economie draait ook op een actieve handels- en dienstensector.',
    alineas: [
      'Torhoutse ondernemers bedienen een ruime regio in West-Vlaanderen. Online gevonden worden in die regio betekent klanten aantrekken die anders naar Roeselare of Brugge rijden.',
      'Tigran Media bouwt websites voor kmo\'s in Torhout. Custom, snel, live in 1 week.',
    ],
  },
  tremelo: {
    h2: 'Webdesign voor kmo\'s in Tremelo',
    intro: 'Tremelo is een gemeente in het Hageland nabij Aarschot met een groeiend aantal lokale ondernemers. De ligging in een groene regio trekt nieuwe bewoners aan — met kansen voor lokale dienstverleners en handelaars.',
    alineas: [
      'Tremelonaar se ondernemers bedienen klanten in de gemeente en omgeving. Een goede website zorgt dat die klanten u vinden voor ze naar Aarschot of Leuven rijden.',
      'Tigran Media bouwt websites voor kmo\'s in Tremelo. Custom, snel, live in 1 week.',
    ],
  },
  veurne: {
    h2: 'Webdesign voor horeca en kmo\'s in Veurne',
    intro: 'Veurne is een pittoreske historische stad in de Westhoek, bekend om de Boetprocessie en een van de mooiste marktpleinen van Vlaanderen. Die toeristische uitstraling trekt bezoekers uit binnen- en buitenland aan.',
    alineas: [
      'Veurnse horeca en handelaars profiteren van een loyale toeristische stroom. Online gevonden worden door die bezoekers — al voor ze vertrekken — bepaalt wie ze bezoeken.',
      'Tigran Media bouwt voor Veurnse kmo\'s websites die het toeristische potentieel van de stad maximaliseren. Mobielvriendelijk, snel, live in 1 week.',
    ],
  },
  waregem: {
    h2: 'Webdesign voor kmo\'s in Waregem',
    intro: 'Waregem is de stad van Waregem Koerse — het befaamde paardenkoers dat elk jaar de nationale pers haalt. Maar buiten dat jaarlijkse spektakel heeft Waregem een sterke lokale economie in de linnen- en textieltraditie van de Leiestreek.',
    alineas: [
      'Waregemse kmo\'s in retail, horeca en dienstverlening bedienen een trouwe regionale klantenbasis. Online aanwezigheid versterkt die lokale positie en trekt klanten aan van buiten de gemeente.',
      'Tigran Media bouwt voor Waregemse ondernemers websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  wetteren: {
    h2: 'Webdesign voor kmo\'s in Wetteren',
    intro: 'Wetteren is een gemeente langs de Schelde met een actieve industrie en lokale handel. De ligging op de as Gent–Aalst geeft de gemeente een commercieel aantrekkelijke positie.',
    alineas: [
      'Wettersese ondernemers concurreren online met spelers uit Gent en Aalst. Een professionele website met sterke lokale SEO houdt klanten in Wetteren.',
      'Tigran Media bouwt websites voor kmo\'s in Wetteren. Custom, snel, live in 1 week.',
    ],
  },
  wevelgem: {
    h2: 'Webdesign voor kmo\'s in Wevelgem',
    intro: 'Wevelgem grenst aan Kortrijk en heeft dankzij de internationale luchthaven Kortrijk-Wevelgem een strategische positie in de West-Vlaamse economie. Die luchthaven trekt zakelijk verkeer aan en stimuleert de lokale zakelijke dienstverlening.',
    alineas: [
      'Wevelgemse ondernemers opereren in de dynamische Kortrijkse regio en kunnen zakelijke klanten bereiken die de luchthaven gebruiken. Een professionele website bouwt die geloofwaardigheid op.',
      'Tigran Media bouwt voor Wevelgemse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  wichelen: {
    h2: 'Webdesign voor kmo\'s in Wichelen',
    intro: 'Wichelen is een gemeente aan de Schelde nabij Wetteren met een actieve lokale economie en een groeiend aantal zelfstandigen. De groene ligging trekt ook nieuwe bewoners aan.',
    alineas: [
      'In een gemeente als Wichelen is online aanwezigheid een sterk concurrentiemiddel — want minder lokale bedrijven investeren erin, wat meer zichtbaarheid geeft aan wie dat wél doet.',
      'Tigran Media bouwt websites voor kmo\'s in Wichelen. Custom, snel, live in 1 week.',
    ],
  },
  wijnegem: {
    h2: 'Webdesign voor retail en kmo\'s in Wijnegem',
    intro: 'Wijnegem is thuis van een van de grootste shoppingcentra van België — Wijnegem Shopping Center trekt jaarlijks miljoenen bezoekers aan. Die commerciële aantrekkingskracht heeft de gemeente getransformeerd tot een winkelbestemming van regionaal belang.',
    alineas: [
      'Wijnegemnse ondernemers opereren in de schaduw van dat grote shoppingcenter — maar hebben ook een eigen lokale markt van inwoners en omliggende gemeenten. Een goede website onderscheidt u van de anonieme retailers in het winkelcentrum.',
      'Tigran Media bouwt voor Wijnegemnse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  willebroek: {
    h2: 'Webdesign voor industriële kmo\'s in Willebroek',
    intro: 'Willebroek is een industriegemeente langs het kanaal Brussel–Schelde met een sterke logistieke en industriële basis. De ligging op de waterweg tussen Brussel en de Antwerpse haven maakt Willebroek tot een aantrekkelijke vestigingsplaats voor bedrijven.',
    alineas: [
      'Willebroekse industriële kmo\'s en dienstverleners bedienen klanten uit een brede regio. Een professionele website bouwt geloofwaardigheid op bij nieuwe klanten die u online vinden.',
      'Tigran Media bouwt voor Willebroekse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  wommelgem: {
    h2: 'Webdesign voor kmo\'s in Wommelgem',
    intro: 'Wommelgem grenst aan Antwerpen en heeft een sterke lokale economie mede dankzij het Wijnegem shoppingcomplex in de buurt en de goede bereikbaarheid via de Antwerpse ring.',
    alineas: [
      'Wommelgemse ondernemers bedienen klanten die ook in Antwerpen of Wijnegem kunnen gaan winkelen. Een goede website houdt die klant lokaal en bouwt een eigen digitale aanwezigheid op.',
      'Tigran Media bouwt websites voor kmo\'s in Wommelgem. Custom, snel, live in 1 week.',
    ],
  },
  wuustwezel: {
    h2: 'Webdesign voor kmo\'s in Wuustwezel',
    intro: 'Wuustwezel is een grensgemeente met Nederland in de Antwerpse Noorderkempen. De rurale rust en de nabijheid van Antwerpen en Breda maken de gemeente aantrekkelijk voor ondernemers die een breed klantenpotentieel willen bereiken.',
    alineas: [
      'Wuustwezelaar se ondernemers kunnen dankzij een goede website klanten bereiken uit zowel Antwerpen als de Nederlandse regio. Dat grensoverschrijdend potentieel is online te verzilveren.',
      'Tigran Media bouwt voor Wuustwezelaar se kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  zaventem: {
    h2: 'Webdesign voor luchthavenbedrijven in Zaventem',
    intro: 'Zaventem is de luchthavengemeente van België — Brussels Airport is de op twee na grootste luchthaven van Benelux en genereert een enorm ecosysteem van hotels, logistiek, zakelijke dienstverleners en luchthavengebonden industrie.',
    alineas: [
      'Zaventemse ondernemers bedienen een internationaal publiek van zakelijke reizigers, expats en luchthavenpersoneel. Een meertalige, professionele website is in deze omgeving geen luxe — het is verwacht.',
      'Tigran Media bouwt voor Zaventemse kmo\'s websites die die internationale standaard halen. Custom, technisch perfect, live in 1 week.',
    ],
  },
  zele: {
    h2: 'Webdesign voor kmo\'s in Zele',
    intro: 'Zele is een gemeente in het Waasland met een actieve lokale economie en een sterke industriële en handelstraditie. De ligging nabij Dendermonde en Sint-Niklaas maakt Zele onderdeel van een economisch actieve Wase regio.',
    alineas: [
      'Zelse ondernemers bedienen klanten die ook in Dendermonde of Sint-Niklaas kunnen terechtkomen. Online gevonden worden is de sleutel om die klant voor u te winnen.',
      'Tigran Media bouwt websites voor kmo\'s in Zele. Custom, snel, live in 1 week.',
    ],
  },
  zelzate: {
    h2: 'Webdesign voor industriële kmo\'s in Zelzate',
    intro: 'Zelzate is een industriegemeente langs het kanaal Gent–Terneuzen met een uitgesproken industrieel karakter als onderdeel van de North Sea Port. ArcelorMittal en andere grote spelers zijn hier gevestigd.',
    alineas: [
      'Zelzatse industriële kmo\'s en dienstverleners bedienen een specifieke B2B-markt. Een professionele website met heldere communicatie van uw diensten bouwt geloofwaardigheid op bij industriële klanten.',
      'Tigran Media bouwt voor Zelzatse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  zemst: {
    h2: 'Webdesign voor kmo\'s in Zemst',
    intro: 'Zemst is een gemeente langs de E19 tussen Mechelen en Brussel met een sterke lokale handels- en dienstensector. De goede bereikbaarheid via snelweg en trein maakt Zemst aantrekkelijk voor zowel bewoners als bedrijven.',
    alineas: [
      'Zemstse ondernemers bedienen klanten uit de gemeente en de omliggende as Mechelen–Brussel. Een goede website trekt die klanten aan voor ze doorgaan naar Mechelen of Vilvoorde.',
      'Tigran Media bouwt voor Zemstse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  zoersel: {
    h2: 'Webdesign voor premium kmo\'s in Zoersel',
    intro: 'Zoersel is een welvarende gemeente in de Antwerpse Kempen omringd door bossen en groene woonwijken. De koopkrachtige, hoogopgeleide bevolking verwacht kwaliteit van lokale ondernemers — ook online.',
    alineas: [
      'In Zoersel verwachten klanten een professionele online ervaring. Een generieke website past niet bij de standaard van deze gemeenschap — en die klant gaat dan toch naar Antwerpen of Malle.',
      'Tigran Media bouwt premium websites voor kmo\'s in Zoersel. Strak design, technisch perfect, live in 1 week.',
    ],
  },
  zottegem: {
    h2: 'Webdesign voor kmo\'s in Zottegem',
    intro: 'Zottegem is een centrumstad in de Vlaamse Ardennen met een actieve lokale middenstand en een groeiende dienstensector. De stad bedient een ruime regio van gemeenten in de omgeving.',
    alineas: [
      'Zottegemse ondernemers bedienen klanten uit de stad en de omliggende Vlaamse Ardennengemeenten. Online gevonden worden in die regio bepaalt of die klant bij u of bij een concurrent in Gent belandt.',
      'Tigran Media bouwt voor Zottegemse kmo\'s websites die regionaal presteren. Custom, snel, live in 1 week.',
    ],
  },
  zwalm: {
    h2: 'Webdesign voor kmo\'s in Zwalm',
    intro: 'Zwalm is een landelijke gemeente in de Vlaamse Ardennen met pittoreske valleien en een groeiend agroturistische sector. De rust en het groen trekken bezoekers aan — wat kansen biedt voor lokale ondernemers.',
    alineas: [
      'In een landelijke gemeente als Zwalm is een goede website het verschil tussen een klant die u vindt en een klant die naar Oudenaarde of Ronse gaat. Investeer in uw online aanwezigheid voor u die klanten verliest.',
      'Tigran Media bouwt websites voor kmo\'s in Zwalm. Custom, snel, live in 1 week.',
    ],
  },
  zwevegem: {
    h2: 'Webdesign voor industriële kmo\'s in Zwevegem',
    intro: 'Zwevegem grenst aan Kortrijk en heeft een sterke industriële economie met bedrijven zoals UCB Pharma en Beaulieu International Group. Die industriële basis gaat gepaard met een actieve lokale handels- en dienstensector.',
    alineas: [
      'Zwevegemse kmo\'s opereren in de dynamische Kortrijkse regio. Online gevonden worden in die competitieve omgeving vraagt om een technisch sterke website met gerichte SEO.',
      'Tigran Media bouwt voor Zwevegemse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  bredene: {
    h2: 'Webdesign voor kustondernemers in Bredene',
    intro: 'Bredene is de enige kustgemeente zonder casino — en dat heeft een uniek karakter gecreëerd. Met de grootste camping van België en een trouwe schare seizoenstoeristen heeft Bredene een bruisende lokale horeca- en retailscene.',
    alineas: [
      'Bredenaar se horecazaken en winkels bereiken toeristen die massaal naar de camping en het strand komen. Online gevonden worden door die bezoekers bepaalt of ze bij u langskomen of voorbijgaan.',
      'Tigran Media bouwt voor Bredenaar se kmo\'s websites die het seizoen maximaliseren. Mobielvriendelijk, snel, live in 1 week.',
    ],
  },
  damme: {
    h2: 'Webdesign voor toerisme en kmo\'s in Damme',
    intro: 'Damme is een pittoresk historisch stadje nabij Brugge, bekend om zijn UNESCO-geregistreerde kanalen, zijn boekenwinkels en de legende van Till Eulenspiegel. Die toeristische identiteit maakt van Damme een aantrekkelijke bestemming voor bezoekers van Brugge.',
    alineas: [
      'Daamnse horecazaken, boekenhandelaars en logies bereiken bezoekers die vanuit Brugge een uitstap naar het buiten maken. Online gevonden worden door die Brugse bezoekers is het meest directe marketing-instrument.',
      'Tigran Media bouwt voor Daamnse kmo\'s websites die die toeristische stroom maximaliseren. Custom, mobielvriendelijk, live in 1 week.',
    ],
  },
  gistel: {
    h2: 'Webdesign voor kmo\'s in Gistel',
    intro: 'Gistel is een gemeente in de regio Oostende met een rijke religieuze traditie (Sint-Godelieve bedevaart) en een actieve lokale economie. De nabijheid van Oostende en de kust maakt Gistel aantrekkelijk voor zowel bewoners als bezoekers.',
    alineas: [
      'Gistelse ondernemers bedienen klanten uit de gemeente en kunnen profiteren van het nabijgelegen toeristische circuit van de kust. Online aanwezigheid vergroot dat bereik aanzienlijk.',
      'Tigran Media bouwt websites voor kmo\'s in Gistel. Custom, snel, live in 1 week.',
    ],
  },
  hooglede: {
    h2: 'Webdesign voor kmo\'s in Hooglede',
    intro: 'Hooglede is een gemeente nabij Roeselare met een actieve lokale economie van handel, landbouw en dienstverlening. De ligging in de regio Roeselare geeft lokale ondernemers toegang tot een ruimer klantenpotentieel.',
    alineas: [
      'Hoogledenaars die online zoeken naar lokale dienstverleners, vinden het bedrijf met de sterkste website. Investeer in uw online aanwezigheid voor uw concurrent dat doet.',
      'Tigran Media bouwt websites voor kmo\'s in Hooglede. Custom, snel, live in 1 week.',
    ],
  },
  ingelmunster: {
    h2: 'Webdesign voor kmo\'s in Ingelmunster',
    intro: 'Ingelmunster is een gemeente in de regio Roeselare aan de Mandel met een actieve lokale middenstand en een groeiend aantal ondernemers. De ligging nabij de E403 maakt de gemeente goed bereikbaar.',
    alineas: [
      'Ingelmunsterse ondernemers bedienen klanten die ook in Roeselare of Kortrijk kunnen terechtkomen. Online gevonden worden is de sleutel om die klant voor u te winnen.',
      'Tigran Media bouwt websites voor kmo\'s in Ingelmunster. Custom, snel, live in 1 week.',
    ],
  },
  ledegem: {
    h2: 'Webdesign voor kmo\'s in Ledegem',
    intro: 'Ledegem is een gemeente nabij Kortrijk met een actieve lokale economie en een groeiend aantal zelfstandigen. De ligging in de dynamische Kortrijkse regio biedt kansen voor lokale ondernemers.',
    alineas: [
      'Ledegemse ondernemers bedienen klanten uit de gemeente en kunnen profiteren van de economische dynamiek van de Kortrijkse regio. Een goede website maakt dat bereik concreet.',
      'Tigran Media bouwt websites voor kmo\'s in Ledegem. Custom, snel, live in 1 week.',
    ],
  },
  lendelede: {
    h2: 'Webdesign voor kmo\'s in Lendelede',
    intro: 'Lendelede is een gemeente in de Kortrijkse regio met een actieve lokale middenstand en een groeiend ondernemersklimaat. De rust van de gemeente combineert er met de economische dynamiek van het nabijgelegen Kortrijk.',
    alineas: [
      'Lendeledse ondernemers opereren in de schaduw van Kortrijk maar hebben een eigen trouwe klantenbasis. Online aanwezigheid versterkt die lokale positie.',
      'Tigran Media bouwt websites voor kmo\'s in Lendelede. Custom, snel, live in 1 week.',
    ],
  },
  lichtervelde: {
    h2: 'Webdesign voor kmo\'s in Lichtervelde',
    intro: 'Lichtervelde is een gemeente in het hart van West-Vlaanderen met een groeiend ondernemersklimaat en een actieve lokale middenstand. De ligging nabij Roeselare en Tielt maakt de gemeente onderdeel van een economisch actieve regio.',
    alineas: [
      'Lichterveldse ondernemers bedienen klanten die ook in Roeselare of Tielt kunnen terechtkomen. Online gevonden worden is de sleutel om die klant lokaal te houden.',
      'Tigran Media bouwt websites voor kmo\'s in Lichtervelde. Custom, snel, live in 1 week.',
    ],
  },
  moorslede: {
    h2: 'Webdesign voor kmo\'s in Moorslede',
    intro: 'Moorslede is een gemeente in de Westhoek nabij Roeselare en Ieper met een actieve lokale economie van landbouw, handel en dienstverlening. De WO1-geschiedenis van de streek trekt ook toeristen aan.',
    alineas: [
      'In een gemeente als Moorslede is een professionele website het sterkste concurrentiemiddel voor lokale ondernemers — want de concurrentie is kleiner en wie gevonden wordt heeft automatisch meer impact.',
      'Tigran Media bouwt websites voor kmo\'s in Moorslede. Custom, snel, live in 1 week.',
    ],
  },
  pittem: {
    h2: 'Webdesign voor kmo\'s in Pittem',
    intro: 'Pittem is een landelijke gemeente in West-Vlaanderen met een actieve lokale economie van landbouw en kleinhandel. De rust van de Tielt-regio trekt nieuwe bewoners aan die lokale dienstverleners zoeken.',
    alineas: [
      'Pitemse ondernemers bedienen klanten die ook in Tielt of Roeselare kunnen gaan. Een goede website houdt die klant lokaal en vergroot het verzorgingsgebied.',
      'Tigran Media bouwt websites voor kmo\'s in Pittem. Custom, snel, live in 1 week.',
    ],
  },
  ruiselede: {
    h2: 'Webdesign voor kmo\'s in Ruiselede',
    intro: 'Ruiselede is een gemeente op het Tieltse plateau in West-Vlaanderen met een actieve lokale middenstand. De groene omgeving trekt ook bezoekers aan die de Vlaamse plattelandsgemeenten verkennen.',
    alineas: [
      'In een rustige gemeente als Ruiselede is een professionele website een sterk concurrentiemiddel — want lokale bedrijven die online investeren, vallen direct op.',
      'Tigran Media bouwt websites voor kmo\'s in Ruiselede. Custom, snel, live in 1 week.',
    ],
  },
  staden: {
    h2: 'Webdesign voor kmo\'s in Staden',
    intro: 'Staden is een gemeente in de Westhoek nabij Roeselare en Ieper met een actieve lokale economie van landbouw, handel en dienstverlening. De WO1-herdenking sgebieden trekken ook toeristen aan.',
    alineas: [
      'Stadelenaar se ondernemers bedienen een trouwe lokale klantenbasis. Online aanwezigheid versterkt die positie en trekt ook klanten aan van buiten de gemeente.',
      'Tigran Media bouwt websites voor kmo\'s in Staden. Custom, snel, live in 1 week.',
    ],
  },
  wingene: {
    h2: 'Webdesign voor kmo\'s in Wingene',
    intro: 'Wingene is een gemeente in het hart van West-Vlaanderen met een groeiend ondernemersklimaat en een actieve lokale economie. De ligging tussen Tielt en Brugge maakt de gemeente onderdeel van een economisch interessante regio.',
    alineas: [
      'Wingense ondernemers bedienen klanten die ook in Tielt of Brugge kunnen terechtkomen. Online gevonden worden is de sleutel om die klant bij u te houden.',
      'Tigran Media bouwt websites voor kmo\'s in Wingene. Custom, snel, live in 1 week.',
    ],
  },
  zedelgem: {
    h2: 'Webdesign voor kmo\'s in Zedelgem',
    intro: 'Zedelgem grenst aan Brugge en heeft dankzij die ligging een sterke lokale economie van forens-ondernemers en handelaars die zowel lokale als Brugse klanten bedienen. De gemeente groeit als woon- en werkplaats.',
    alineas: [
      'Zedelgemse ondernemers opereren in de uitstraling van Brugge maar hebben een eigen markt. Een goede website houdt klanten lokaal en trekt ook Bruggelingen aan die de stad ontvluchten.',
      'Tigran Media bouwt websites voor kmo\'s in Zedelgem. Custom, snel, live in 1 week.',
    ],
  },
  gavere: {
    h2: 'Webdesign voor kmo\'s in Gavere',
    intro: 'Gavere is een gemeente aan de Schelde tussen Gent en Oudenaarde met een actieve lokale economie en een groeiend aantal ondernemers. De ligging in de Scheldevallei geeft de gemeente een aantrekkelijk karakter.',
    alineas: [
      'Gaverse ondernemers bedienen klanten die ook in Gent of Oudenaarde kunnen gaan. Online gevonden worden is de manier om die klant voor u te winnen.',
      'Tigran Media bouwt websites voor kmo\'s in Gavere. Custom, snel, live in 1 week.',
    ],
  },
  nazareth: {
    h2: 'Webdesign voor logistieke kmo\'s in Nazareth',
    intro: 'Nazareth heeft een sterke lokale economie langs de E17 met een hoge concentratie van dienstverlenende bedrijven en kmo\'s. De goede bereikbaarheid via snelweg maakt de gemeente aantrekkelijk voor vestiging.',
    alineas: [
      'Nazarethse ondernemers bedienen klanten die ook in Gent of De Pinte kunnen terechtkomen. Online gevonden worden in die competitieve omgeving vraagt om een sterke website.',
      'Tigran Media bouwt voor Nazarethse kmo\'s websites die presteren. Custom, snel, live in 1 week.',
    ],
  },
  waasmunster: {
    h2: 'Webdesign voor kmo\'s in Waasmunster',
    intro: 'Waasmunster is een gemeente in het Waasland met een groeiende lokale economie en een actieve ondernemersscene. De ligging nabij Lokeren en Sint-Niklaas maakt de gemeente onderdeel van de Wase economische regio.',
    alineas: [
      'Waasmunsterse ondernemers bedienen klanten die ook in Lokeren of Sint-Niklaas kunnen terechtkomen. Online gevonden worden is de sleutel om die klant bij u te houden.',
      'Tigran Media bouwt websites voor kmo\'s in Waasmunster. Custom, snel, live in 1 week.',
    ],
  },
};
