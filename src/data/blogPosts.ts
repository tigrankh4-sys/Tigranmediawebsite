export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  imageKeyword: string;
  metaDescription: string;
  ctaUrl: string;
  ctaText: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'waarom-uw-website-onzichtbaar-is',
    title: 'Waarom uw website onzichtbaar is op Google',
    excerpt: 'De meeste KMO-websites worden nooit gevonden. Niet omdat Google iets tegen u heeft, maar omdat de basis niet klopt. Hier is wat er werkelijk fout gaat.',
    category: 'SEO',
    readTime: 7,
    date: '2026-05-04',
    imageKeyword: 'seo,website,computer',
    metaDescription: 'Uw website onzichtbaar op Google? Lees waarom de meeste KMO-sites niet ranken en wat u eraan kunt doen. Plan gratis een discovery call.',
    ctaUrl: '/webdesign/turnhout/',
    ctaText: 'Webdesign Turnhout bekijken →',
    content: `U heeft een website. U vindt hem zelf zelfs niet meer terug op Google. Klanten komen alleen binnen via mond-tot-mond, en u vraagt zich af waarom u ooit duizend euro heeft uitgegeven aan iets dat niemand ziet. Ik begrijp het. Het is frustrerend, en eerlijk gezegd ben u niet de enige. De grote meerderheid van KMO-websites in Vlaanderen scoort gewoon slecht. Het ligt zelden aan de inhoud. Het ligt aan de fundering.

Laat me eerst iets duidelijk maken: Google is geen mysterie. Het is een machine die heel specifieke dingen wil zien voordat hij u aan een klant durft te tonen. Als u die dingen niet aanbiedt, blijft u onderaan hangen. Punt.

Het eerste wat ik bij elke nieuwe klant nakijk is iets simpels: heeft de site een geldig SSL-certificaat? U herkent het aan dat hangslotje voor de URL. Geen hangslot betekent dat Google uw site als onveilig labelt. Browsers waarschuwen bezoekers letterlijk dat ze beter wegblijven. Als u nog op een oude site zit zonder HTTPS, dan is dat niet "een detail". Dat is reden nummer één waarom uw rankings nergens zijn.

Snelheid. Daar struikelen vrijwel alle WordPress-sites die ik tegenkom. Mensen denken dat een trage website "wel meevalt zolang de inhoud goed is". Dat klopt niet. Google meet hoe snel uw pagina laadt op een gemiddelde mobiele telefoon, en als dat boven de drie seconden komt verliest u zichtbaarheid. Concreet. Niet theoretisch. De meeste KMO-sites die ik test scoren onder de 50 op PageSpeed Insights. Dat is een ramp. Een goede site zit boven de 90.

Dan Google Search Console. Dit is gratis. Dit is het dashboard waarmee u letterlijk kunt zien welke pagina's Google heeft geïndexeerd, welke fouten er zijn, en op welke zoekwoorden u verschijnt. Negen op de tien ondernemers die mij benaderen hebben dit nooit ingesteld. U vliegt blind. U weet niet eens of Google überhaupt weet dat uw pagina's bestaan. Voordat u een euro aan SEO uitgeeft, zorg dat dit draait.

De structuur van uw site. Hier wordt het technisch, maar ik hou het simpel. Google wil dat een pagina één duidelijk onderwerp heeft. Eén H1-titel bovenaan, een logische opbouw met H2's eronder, en interne links die laten zien hoe alles samenhangt. De meeste KMO-sites zijn één grote brij. Twintig onderwerpen op één homepage, geen dieperliggende pagina's, geen menu dat ergens naartoe leidt. Voor Google ziet dat eruit als chaos, en chaos rankt niet.

Lokale SEO. Dit is waar Vlaamse KMO's het meeste laten liggen. U bent een loodgieter in Turnhout. U wilt gevonden worden door mensen in Turnhout. Maar staat uw stad in uw paginatitels? Staat ze in de inhoud? Heeft u een Google Business Profile dat klopt? Heeft u stad-specifieke landingspagina's voor de regio's waar u werkt? Bij negen op de tien sites is het antwoord nee. En dan vraagt u zich af waarom de buurman wel bovenaan staat.

Inhoud. Hier wil ik geen valse beloften doen. SEO is geen trucje. Google beloont websites die werkelijk iets nuttigs zeggen tegen iemand die zoekt. Een homepage met "Welkom op onze website. Wij zijn al jaren actief in onze sector" gaat nooit ranken. Niet omdat het slecht geschreven is, maar omdat niemand daarop zoekt. Mensen zoeken op problemen. "Hoe vind ik een loodgieter in Turnhout die op zaterdag werkt." Als uw site die vraag niet beantwoordt, dan staat u nergens.

Backlinks. Andere websites die naar de uwe linken. Google ziet dit als stemmen van vertrouwen. Krijgt u links van andere bedrijven, kranten, lokale verenigingen? Of staat uw site geïsoleerd op het internet? Niemand zegt dat u een agressieve linkbuilding-campagne nodig heeft. Maar nul links is een probleem. Begin met het lokale. Lid worden van uw beroepsfederatie, een vermelding krijgen op de site van uw gemeente, een interview in een vakblad. Dat telt.

Tot slot het meest pijnlijke punt: oude sites die jarenlang niet meer zijn aangeraakt. Ik zie ze constant. Een WordPress-installatie uit 2018, plugins die niet meer worden geüpdatet, een design dat schreeuwt "wij hebben opgegeven". Google merkt dat. Verlaten sites zakken weg in de rankings. Niet omdat ze opeens slechter zijn, maar omdat het hele internet om hen heen is veranderd en zij stilstaan.

Wat moet u doen? Eerlijk antwoord. Als uw site ouder is dan vier jaar en u heeft sindsdien niets aangepast, dan is een opfrisbeurt zonde van het geld. Beter beginnen vanaf nul. Een nieuwe site die snel is, mobielvriendelijk, technisch correct, en lokaal geoptimaliseerd. Geen WordPress-stapel met twintig plugins, maar iets dat gebouwd is om gevonden te worden. Dat is wat ik bouw, en dat is waarom mijn klanten binnen weken stijgen waar ze jarenlang nergens stonden.

U bent geen technisch persoon. Dat hoeft ook niet. Maar u verdient wel een eerlijk antwoord op de vraag waarom uw investering geen klanten oplevert. Negen op de tien keer ligt het hieraan. En negen op de tien keer is het op te lossen.`,
  },
  {
    slug: 'wat-kost-een-website-belgie',
    title: 'Wat kost een website in België in 2026? De eerlijke uitleg',
    excerpt: 'Tussen Wix-templates van honderd euro en bureaus die tienduizend vragen ligt een groot grijs gebied. Hier is wat u werkelijk krijgt voor uw geld, per prijspunt.',
    category: 'Webdesign',
    readTime: 8,
    date: '2026-04-22',
    imageKeyword: 'web,design,belgium',
    metaDescription: 'Wat kost een website in België in 2026? Eerlijke prijsuitleg per niveau, van Wix tot premium bureau. Plan gratis een discovery call.',
    ctaUrl: '/#prijzen',
    ctaText: 'Onze prijzen bekijken →',
    content: `Iedereen die een website nodig heeft loopt tegen dezelfde muur aan. U vraagt drie offertes en u krijgt drie totaal verschillende bedragen. De ene zegt vijfhonderd euro, de andere achtduizend, en u staat daar met de vraag wat er in godsnaam tussen die twee zit. Ik ga u eerlijk uitleggen wat u op elk prijspunt krijgt, en waarom.

Laten we beginnen met de bodem. Wix, Squarespace, Shopify, en al die do-it-yourself platforms. Op papier gratis, in de praktijk vijftien à dertig euro per maand voor een fatsoenlijk plan. U bouwt zelf, u sleept blokjes rond, en binnen een dag staat er iets online. Voor sommige situaties is dit prima. Een hobbyproject. Een tijdelijke landingspagina. Een blog van een vriend van u. De problemen beginnen wanneer u dit gebruikt voor een serieus bedrijf dat klanten wil binnenhalen. De templates zien er allemaal hetzelfde uit. Aanpassingen die buiten de standaard vallen zijn vaak onmogelijk. Snelheid is matig tot slecht. SEO-controle beperkt. En u bent vastgeketend aan dat platform: wegmigreren naar iets beters is een nachtmerrie. Voor een KMO die er twintig jaar wil staan is dit geen fundament.

De goedkope freelancer. Drie- à achthonderd euro voor een complete website. Dit is waar de meeste ondernemers terechtkomen wanneer ze beginnen. Ik zeg het zoals het is: voor dat geld krijgt u WordPress met een kant-en-klaar thema, vijf pagina's tekst, een contactformulier, en een dag werk. Soms zit er een goede bij. Vaak niet. Wat u zelden krijgt: een doordacht ontwerp afgestemd op uw merk, technische snelheidsoptimalisatie, een SEO-strategie die verder gaat dan de plugin Yoast installeren, of iemand die over zes maanden nog opneemt wanneer er iets stuk is. Sommige mensen werken hier prima mee. Velen komen na anderhalf jaar terug bij iemand zoals ik en moeten opnieuw betalen voor iets dat het eerste keer goed was geweest. Reken het uit.

Het gemiddelde bureau. Tweeduizend tot vijfduizend euro. Hier zit u in een serieuze categorie. U krijgt strategie, een ontwerp dat bij uw bedrijf past, technische opzet door iemand die weet wat hij doet, en gewoonlijk een onderhoudscontract. Het probleem op dit niveau is dat de marges in bureaus krap zijn. Veel werk wordt uitbesteed of door junior medewerkers gedaan. U betaalt gemiddeld voor gemiddeld werk. Niets verkeerd mee, maar verwacht geen wonderen. Voor een doorsnee KMO die gewoon een net professionele site nodig heeft is dit vaak de juiste plek.

Premium. Vijfduizend en hoger. Hier wordt het interessant. U krijgt iemand die meedenkt over uw positionering, niet alleen uw kleurenpalet. Custom development in plaats van WordPress. Een site die laadt in onder de seconde, scoort boven de 95 op PageSpeed, en die er over vijf jaar nog steeds bovengemiddeld uitziet. Dit is geen luxe; dit is wat een serieus bedrijf bouwt om serieuze klanten aan te trekken. De meeste premium-bureaus rekenen vanaf zevenduizend en lopen door tot ver boven de twintigduizend. Voor advocatenkantoren, technische bedrijven, B2B-spelers met een grote dealwaarde, is dit gewoon een kost van zaken doen.

En dan zit er nog iets tussenin. Daar zit ik. Custom Next.js websites vanaf vijfhonderd euro. Geen WordPress, geen sleeptemplates, maar code die ik zelf schrijf en optimaliseer. Hoe kan dat goedkoper dan de premium-bureaus? Omdat ik geen kantoor heb, geen account managers betaal, geen senior strategen die in vergaderingen zitten. Ik werk solo, ik werk efficiënt, en ik richt me op KMO's die geen tienduizend kunnen of willen uitgeven aan een website maar ook niet willen eindigen met een Wix-clone.

Wat u bij mij krijgt: een Next.js site, zelfgeschreven en zelf geoptimaliseerd. Snelheid boven de 95 op Google PageSpeed. Een ontwerp afgestemd op uw merk, niet op een template. SEO-fundering die werkt. En live binnen een week. Vanaf vijfhonderd voor een eenvoudige one-pager, vanaf duizend voor een meerpaginasite met content, en op maat voor grotere projecten.

Belangrijk: wat ik niet doe is met u onderhandelen over de prijs. Mijn werk kost wat het kost. Ik geef geen kortingen omdat de buurman goedkoper is, en ik werk niet onder mijn tarief omdat het een vriend van een vriend is. Dat klinkt hard, maar het is precies waarom mijn klanten kwaliteit krijgen. Bureaus die op prijs onderhandelen leveren werk dat naar prijs aanvoelt. Ik niet.

Wat ik wel doe is eerlijk zijn over wat u nodig heeft. Soms heeft een klant geen vijftienhonderd-euro site nodig. Soms volstaat een eenvoudige one-pager omdat hun klanten ze toch al kennen en ze enkel een online visitekaartje nodig hebben. Dan zeg ik dat. Soms heeft een klant juist méér nodig dan ze denken, en moet ik uitleggen waarom een goedkope site nu hen later vijf keer zoveel gaat kosten. Ook dan zeg ik dat.

Mijn advies: kijk niet naar de prijs als eerste filter. Kijk naar wat een website voor uw bedrijf moet doen. Eén klant per maand binnenhalen via uw site? Dat is misschien tussen de duizend en tweeduizend per jaar omzet, afhankelijk van uw marges. Een goede site verdient zich in dat geval binnen drie tot zes maanden terug. Een slechte site, hoe goedkoop ook, is altijd de duurste optie omdat hij niets oplevert.

Reken het uit voor uw eigen situatie. Wat is een nieuwe klant u waard? Hoeveel klanten zou een goede website moeten brengen om de investering terug te verdienen? Vanaf daar wordt het gesprek concreet. Niet "kunt u het iets goedkoper", maar "wat heeft mijn bedrijf nodig om te groeien". Dat is een ander gesprek.`,
  },
  {
    slug: 'wordpress-vs-nextjs-voor-kmo',
    title: 'WordPress of Next.js? Wat werkt beter voor uw bedrijf',
    excerpt: 'WordPress is de standaard, Next.js de uitdager. Geen marketingverhaal, geen jargon — de eerlijke afweging tussen beide voor een gemiddelde KMO.',
    category: 'Technologie',
    readTime: 7,
    date: '2026-04-08',
    imageKeyword: 'code,programming,website',
    metaDescription: 'WordPress of Next.js voor uw KMO-website? Eerlijke vergelijking op snelheid, beveiliging, kosten en onderhoud. Vraag gratis advies.',
    ctaUrl: '/#contact',
    ctaText: 'Vraag gratis advies →',
    content: `Als u onlangs een website heeft laten bouwen of overweegt er een te laten bouwen, heeft u waarschijnlijk het woord WordPress vaker gehoord dan u lief was. Het is de standaard. Volgens schattingen draait ergens tussen de veertig en zestig procent van het hele internet erop. Dat klinkt als een argument om er ook voor te kiezen, en in veel gevallen is dat ook prima. Maar er is een reden waarom moderne ontwikkelaars steeds vaker overstappen op iets als Next.js, en het is geen modegril.

Laat me eerst eerlijk zijn over wat WordPress goed kan. Het is gratis. Het heeft een gigantisch ecosysteem: tienduizenden plugins, themes voor elk denkbaar soort bedrijf, en een leger aan freelancers die ermee kunnen werken. Voor iemand die zelf wil bijwerken zonder met code in aanraking te komen, is de admin-omgeving van WordPress comfortabel. U logt in, u typt een blogpost, u klikt op publiceren. Dat werkt al twintig jaar zo en werkt nog steeds.

De problemen beginnen onder de motorkap. WordPress is gebouwd in 2003 voor blogs. Alles wat het sindsdien doet wat geen blog is, is erin gepatcht via plugins. Wilt u een contactformulier? Plugin. Webshop? Plugin. SEO-instellingen? Plugin. Snelheidsoptimalisatie? Plugin. Beveiliging? Plugin. Op een gemiddelde WordPress-site staan al snel vijftien tot dertig plugins, allemaal gemaakt door verschillende ontwikkelaars, allemaal met hun eigen updateritme, en allemaal met hun eigen beveiligingslekken. Dit is waarom WordPress-sites notoir kwetsbaar zijn voor hacks. Niet omdat de kerncode slecht is, maar omdat de plugin-stapel een gatenkaas is.

Snelheid is het tweede grote probleem. WordPress laadt elke pagina door op het moment van de aanvraag een hele reeks PHP-scripts te draaien tegen een database. Op een trage server is dat traag. Op een snelle server is het gemiddeld. Ik heb zelden een WordPress-site getest die boven de 80 scoort op PageSpeed Insights zonder dat er fors aan gesleuteld is. De gemiddelde site zit rond de 40 à 60. Dat klinkt abstract, maar concreet betekent het dat uw bezoekers seconden langer moeten wachten dan op een gemiddelde concurrent met moderne technologie. En seconden kosten klanten.

Updates. WordPress vraagt onderhoud. De kern, de plugins, de themes — alles moet regelmatig worden geüpdatet, anders ontstaan er beveiligingsrisico's of compatibiliteitsproblemen. Wie doet dat? Vaak niemand. Ondernemers laten WordPress-sites jarenlang ongeüpdatet draaien, en dan is er ineens een hack of een crash. Een onderhoudscontract bij een bureau kost vlot tussen de vijftig en honderdvijftig euro per maand. Dat is voor sommige situaties een investering waard, voor andere overdreven.

Dan Next.js. Dit is een moderne ontwikkelframework gebouwd door Vercel, ontworpen voor snelheid en moderne webstandaarden. Een Next.js-site wordt vooraf gegenereerd als statische bestanden, wat betekent dat er bij elke bezoeker geen database hoeft te worden aangesproken. De pagina staat er al klaar. Dat is razendsnel. Mijn Next.js-sites scoren consistent boven de 95 op PageSpeed, vaak 99 op 100. Dat is geen toeval; dat is hoe de technologie werkt.

Beveiliging. Omdat er geen WordPress-admin is, geen database die wordt aangesproken bij elke aanvraag, geen plugin-stapel met kwetsbaarheden, is het aanvalsoppervlak vrijwel nul. Hackers proberen WordPress-sites omdat er overal hetzelfde aanvalspatroon werkt. Een Next.js-site biedt simpelweg niets om aan te vallen.

Plugins. Hier zit het belangrijkste verschil. In Next.js worden plugins niet gebruikt; functionaliteit wordt geschreven. Een contactformulier is dertig regels code. SEO is ingebakken. Beelden worden automatisch geoptimaliseerd. Geen versnipperde verzameling externe modules, geen updateritueel.

De keerzijde, en die wil ik eerlijk benoemen. Next.js is technischer. U kunt niet zomaar inloggen en zelf de homepage herschikken zoals in WordPress. Aanpassingen moeten door iemand die kan coderen. Als u een blog wilt waar u zelf wekelijks artikelen op zet, kan dat met Next.js, maar dan moet er een content-management-systeem aan gekoppeld worden. Dat is meer setup-werk vooraf.

Voor wie is wat? Als u een KMO bent met een redelijk stabiele website die niet vaak verandert — uw diensten, uw verhaal, een paar landingspagina's, een contactformulier — dan is Next.js verreweg de betere keus. U krijgt een snellere, veiligere, professioneler-ogende site, en u heeft geen onderhoudscontract van honderd euro per maand nodig. Wijzigingen doen we incidenteel.

Als u een grote webshop bent met dagelijks tientallen producten die aangepast worden, of een nieuwsblog met meerdere redacteurs die zelfstandig publiceren, dan is WordPress of een gespecialiseerd platform vaak praktischer. Niet omdat het beter is, maar omdat het werkproces er beter op aansluit.

In mijn werk zie ik dagelijks dezelfde situatie. Een KMO heeft een WordPress-site die traag is, regelmatig stuk gaat, jaarlijks honderden euro's kost aan hosting en plugins, en die nooit echt klanten heeft binnengebracht. We bouwen het opnieuw in Next.js. Snelheid van vijftig naar negenennegentig. Hostingkosten van honderdtwintig euro per jaar in plaats van vierhonderd. Geen onderhoudscontract. Een site die er over drie jaar nog steeds modern uitziet. En klanten die voor het eerst zeggen dat de website er professioneel uitziet.

WordPress is niet slecht. Voor de juiste use case is het uitstekend. Maar voor de meeste Vlaamse KMO's is het een gewoonte uit een tijd waarin er geen alternatief was. Dat alternatief is er nu wel, en het is in vrijwel elk opzicht beter.`,
  },
  {
    slug: 'eerste-indruk-website-klanten',
    title: 'U heeft 3 seconden. Hoe uw website klanten wint of verliest',
    excerpt: 'Een bezoeker beslist binnen drie seconden of hij blijft of weggaat. De meeste KMO-websites verliezen die strijd voordat ze ook maar iets gezegd hebben. Hier is waarom.',
    category: 'Strategie',
    readTime: 6,
    date: '2026-03-20',
    imageKeyword: 'laptop,design,user',
    metaDescription: 'Uw website heeft 3 seconden om een klant te overtuigen. Lees wat bezoekers direct beoordelen en waarom de meeste KMO-sites falen. Plan een call.',
    ctaUrl: '/webdesign/antwerpen/',
    ctaText: 'Webdesign Antwerpen bekijken →',
    content: `Iemand klikt op uw website. De pagina laadt. En dan, ergens tussen de eerste en de derde seconde, neemt die persoon een beslissing. Blijven of weg. U heeft niet twee minuten om uw verhaal te doen. U heeft drie seconden, en die drie seconden bepalen of er ooit een telefoontje, een formulier, of een mail komt. Dit is geen marketingmythe. Het is gemeten gedrag, herhaald in honderden onderzoeken, en het is de harde realiteit waarmee uw site dagelijks geconfronteerd wordt.

In die drie seconden gebeurt er drie dingen tegelijk. De pagina moet laden, de bezoeker moet meteen begrijpen wat u doet, en de bezoeker moet voelen dat u professioneel genoeg bent om mee in zee te gaan. Eén ding fout, en de tab wordt gesloten. Dat is de wet.

Laadtijd. Hier valt de eerste lichting al af. Als uw pagina er drie seconden over doet om iets te tonen, heeft u al verloren voordat u iets kon zeggen. Onderzoek van Google zelf laat zien dat tussen één en drie seconden het uitvalpercentage met dertig à veertig procent stijgt. Tussen drie en zes seconden verdubbelt dat. Concreet: als uw site twee seconden trager is dan die van uw concurrent, verliest u letterlijk de helft van uw potentiële klanten op dat punt alleen al. Niet omdat zij beter zijn, maar omdat u langzamer bent. De meeste WordPress-sites die ik test laden in vier à zes seconden op een gemiddelde mobiele verbinding. Dat is geen detail; dat is de strop waarmee u zichzelf ophangt.

De headline. Bovenaan uw homepage staat — als het goed is — één zin die beantwoordt wie u bent en voor wie. Dit is het belangrijkste stuk tekst op uw hele site. En toch lees ik bij negen op de tien KMO-sites varianten van "Welkom op onze website" of "Al meer dan 25 jaar uw partner in kwaliteit". Dat zijn lege zinnen. Geen mens leest dat en denkt: ja, deze gaan mij helpen. Een goede headline zegt concreet wat u doet en voor wie. "Custom websites voor Vlaamse KMO's. Vanaf vijfhonderd euro, live in een week." Dat is lezen en begrijpen in twee seconden.

Visueel oordeel. De mens beoordeelt een ontwerp instinctief. Een goede ontwerper kan binnen twee seconden zien of een site amateur of professioneel is, en gewone bezoekers doen dat onbewust ook. Het gaat niet over of het mooi is. Het gaat over of het er gemaakt uitziet door iemand die zijn vak verstaat. Te veel kleuren. Stockfoto's die overal te zien zijn. Lettertypes die niet bij elkaar passen. Knoppen die er goedkoop uitzien. Een logo dat duidelijk in een gratis online tool gemaakt is. Mensen ruiken dit. Niet rationeel, maar wel meedogenloos. En zodra die geur er is, gaan ze weg.

Wat zien bezoekers in die drie seconden van een professionele site? Rust. Witruimte. Eén ding dat duidelijk de aandacht trekt. Een typografie die vertrouwen wekt. Een kleurpalet dat consistent is. Geen pop-ups die binnen een seconde over het scherm springen. Geen drie verschillende oproepen tot actie die om de aandacht vechten. Eén verhaal, helder verteld.

Mobiel. Tachtig procent van uw bezoekers zit op een telefoon. Tachtig procent. Als uw site er op een telefoon uitziet alsof hij voor een desktop is gemaakt en daarna haastig is verkleind, heeft u verloren. Tekst die te klein is om te lezen, knoppen die te klein zijn om te tikken, menu's die niet werken — dat is dagelijkse kost op KMO-sites. Een fatsoenlijke site werkt op mobiel net zo goed als op desktop, en eigenlijk gewoon béter.

Vertrouwen. Binnen die drie seconden scant een bezoeker ook subtiel naar signalen of u betrouwbaar bent. Staat er ergens een echte naam? Een echt adres? Een telefoonnummer dat niet verstopt is? Een klantgetuigenis met een echte foto? Of is alles vaag, generiek, anoniem? Vlaamse ondernemers zijn nuchter. Ze weten dat een website met een postbusadres en een gratis webmail-account waarschijnlijk geen serieuze partner is. Maak die signalen expliciet. Telefoon bovenaan. Adres in de footer. Foto van uzelf op de over-pagina. Het kost u niets en het maakt het verschil.

Concrete voorbeelden uit mijn praktijk. Een loodgieter in Turnhout had een WordPress-site die zes seconden laadtijd had en als headline "Welkom bij Sanitair Vermeulen". Bouncerate van zevenenzeventig procent. Wij hebben hem opnieuw gebouwd. Laadtijd 0,8 seconde. Headline: "Sanitair en verwarming in Turnhout. Vandaag bellen, morgen aan het werk." Bouncerate gezakt naar tweeëndertig procent. Telefoontjes verdubbeld in zes weken. Niets aan zijn dienst veranderd. Alleen aan zijn eerste drie seconden.

Een advocaat. Trage site, generieke headline, foto van een gerechtsgebouw die overal op het internet te vinden was. Mensen klikten weg voordat ze zijn naam zagen. Nieuwe site, scherpe headline die zijn specialisatie benoemde, professionele foto van hemzelf. Aanvragen verviervoudigd. Niet omdat hij een betere advocaat werd, maar omdat zijn site eindelijk de waarheid over hem vertelde.

De les is simpel. U mag uitstekend werk leveren, eerlijke prijzen rekenen, en een fantastische reputatie hebben. Als uw website dat in de eerste drie seconden niet uitstraalt, hoort de helft van uw potentiële klanten dat verhaal nooit. Het is geen kwestie van marketing of verkoop. Het is gewoon basis: u moet de deur openen voordat u kan binnennodigen.

Ga zelf eens naar uw website. Doe het op een telefoon, op vier-G in plaats van wifi. Tel hardop. Een. Twee. Drie. Wat heeft de bezoeker in die tijd gezien? Wat heeft hij begrepen? Welke indruk heeft hij gekregen? Eerlijk. Als het antwoord niet "ja, dit is professioneel en relevant voor mij" is, dan is dat het probleem dat u moet oplossen. Vóór de SEO. Vóór de advertenties. Vóór wat dan ook.`,
  },
  {
    slug: 'lokale-vindbaarheid-kmo-google',
    title: 'Hoe uw lokale bedrijf bovenaan Google komt (zonder advertenties)',
    excerpt: 'Lokale SEO is niet ingewikkeld, maar bijna niemand doet het juist. Vijf concrete stappen die uw bedrijf in de kaart en in de zoekresultaten brengen.',
    category: 'SEO',
    readTime: 8,
    date: '2026-03-05',
    imageKeyword: 'maps,local,business',
    metaDescription: 'Lokaal bovenaan Google komen zonder advertenties? Vijf concrete stappen voor Belgische KMO\'s om gevonden te worden in eigen regio. Plan een call.',
    ctaUrl: '/webdesign/turnhout/',
    ctaText: 'Lokale vindbaarheid verbeteren →',
    content: `Iemand zoekt op "loodgieter Turnhout" of "advocaat Antwerpen" of "fotograaf Gent". Bovenaan staan drie bedrijven met sterren, een foto, een telefoonnummer, en een knop om de route te krijgen. Dat heet de Google Local Pack, en als u daar staat, krijgt u het overgrote deel van alle klikken. Niet bovenaan staan in dat blokje is voor een lokaal bedrijf hetzelfde als nooit gevonden worden. En het beste: u heeft er geen euro aan advertenties voor nodig. U moet gewoon vijf dingen op orde hebben.

Eerste, en veruit belangrijkste: uw Google Business Profile. Vroeger heette dit Google My Business. Het is gratis. U claimt uw bedrijf via Google, vult alle informatie in, en u verschijnt op Google Maps en in de lokale zoekresultaten. Negen op de tien Vlaamse KMO's heeft dit ofwel niet, ofwel ergens half ingevuld met verouderde informatie, ofwel geclaimd door iemand die er drie jaar geleden bij vertrokken is. Dit is uw absolute prioriteit.

Wat moet er allemaal in? Bedrijfsnaam, exact zoals hij geregistreerd is. Volledig adres. Telefoonnummer. Website. Categorie — kies zo specifiek mogelijk; "Loodgieter" werkt beter dan "Bouwbedrijf". Openingsuren, ook voor feestdagen. Een uitgebreide bedrijfsbeschrijving van zo'n zevenhonderdvijftig tekens waarin u uitlegt wat u doet, voor wie, en in welke regio. Foto's. Veel foto's. Foto's van uw winkel, uw team, uw werk. Bedrijven met meer dan tien foto's krijgen aanzienlijk meer klikken dan bedrijven met drie. Voeg ook regelmatig nieuwe foto's toe; Google ziet dat als een teken dat u actief bent.

Tweede stap: lokale schema markup op uw website. Dit is technisch, maar belangrijk. Schema is gestructureerde data die u op uw site plaatst om Google te vertellen wat voor soort bedrijf u bent, waar u zit, wat uw uren zijn, en welk gebied u bedient. Op een goed gebouwde website staat dit standaard. Op de meeste WordPress-sites met een gratis SEO-plugin staat het niet of staat het verkeerd. Vraag aan uw webdesigner of er LocalBusiness-schema op uw site staat. Als hij niet weet wat dat is, weet u meteen genoeg.

Derde: stad-specifieke landingspagina's. Dit is waar de meeste KMO's het gat laten vallen. U bent een tuinman die werkt in heel de Antwerpse Kempen. Op uw homepage staat "Tuinman in de Kempen". Mooi. Maar iemand in Geel zoekt op "tuinman Geel". Iemand in Mol zoekt op "tuinman Mol". Hebben die mensen ooit een pagina te zien gekregen die hun stad noemt? Nee. Dus klikken ze op uw concurrent die wel een pagina specifiek voor Geel heeft.

Stad-specifieke pagina's zijn geen trucje. Het is gewoon erkennen dat zoekers concrete dingen zoeken. Maak voor elke stad waar u serieus actief bent een eigen pagina. Niet vijf keer dezelfde tekst met de stadsnaam erin geknipt — dat herkent Google en straft het af. Maar wel een echte pagina met inhoud die relevant is voor die plek. Wat is uniek aan uw werk in die stad? Welke klanten heeft u er? Welke specifieke uitdagingen lost u op voor mensen daar? Hoe komt u er? Wat zijn de tarieven? Dat is wat Google wil zien, en dat is wat lezers ook willen zien.

Vierde: NAP-consistentie. NAP staat voor Name, Address, Phone. Klinkt simpel. De praktijk: uw bedrijfsnaam staat op uw website als "Tigran Media". Op uw Google Business Profile als "Tigran Media BV". Op uw Facebook als "TigranMedia". Op een oude vermelding ergens online als "Tigran Media Photography". Voor Google is dat verwarrend. Hij weet niet welke versie de juiste is, en in twijfelgevallen rankt hij u lager. Hetzelfde geldt voor uw adres en telefoonnummer. Maak ergens een document met de exacte versie van uw bedrijfsnaam, adres en telefoon, en zorg dat overal online dezelfde versie staat. Zoek uzelf op Google en check elke vermelding. Pas oude correcte aan, vraag bij vermeldingen op andere sites om correctie.

Vijfde: reviews. Google laat de Local Pack voornamelijk beslissen op basis van drie factoren: relevantie, afstand, en bekendheid. Reviews zijn de belangrijkste indicator van bekendheid. Een bedrijf met dertig vijfsterrenreviews staat bijna altijd boven een bedrijf met vier reviews, ook als die andere dichterbij zit. En dit is waar Vlaamse KMO's massaal kansen laten liggen. U heeft tevreden klanten. Vraag of ze een review willen achterlaten. Niet generiek "kan u een review geven" — dat doet niemand. Maar concreet: stuur na het werk een berichtje met een directe link naar uw Google-reviewpagina, en zeg dat het hen een minuut kost. Vier op de tien klanten doen het dan wel.

Reageer ook op uw reviews. Allemaal. De positieve met een korte bedankje, de negatieve met een professionele reactie waarin u erkent wat er fout ging en uitlegt hoe u het oplost. Mensen die na uw klanten naar uw bedrijf kijken, lezen die reacties. Een bedrijf dat netjes en professioneel reageert op een kritische review wint vertrouwen. Een bedrijf dat zich in een kritische review verdedigt of zwijgt verliest het.

Wat ook helpt: lokale content. Schrijf eens per kwartaal een blogartikel over iets dat in uw regio speelt en raakvlak heeft met uw vak. "Hoe controleer u uw verwarming voor de winter in een typisch Kempens huis." "De drie meest voorkomende vergissingen bij parkeren in centrum Turnhout, en wat u eraan kan doen." Iets met lokale relevantie. Google ziet dat u een lokaal bedrijf bent dat lokaal nuttig is, en dat zegt iets.

Tot slot: vergeet de basis niet. Een snelle, mobielvriendelijke website. Een goed werkend formulier. Een telefoonnummer dat klikbaar is op mobiel. Het beste profiel ter wereld helpt niet als de mensen die op uw site landen binnen tien seconden afhaken omdat de pagina niet werkt.

Lokale vindbaarheid is geen magie. Het is consistent vijf dingen goed doen. De meeste van uw concurrenten doen er hooguit twee. Doe ze allemaal vijf, en u staat binnen drie tot zes maanden waar u thuishoort: bovenaan, in dat blokje met drie bedrijven dat alle telefoontjes oplevert. Geen advertentie nodig. Gewoon basis, goed uitgevoerd.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
