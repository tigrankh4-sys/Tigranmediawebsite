'use client';
import { useState } from 'react';
import { steden } from '@/data/steden';

const footerGroupDefs = [
  { name: 'de Kempen', slugs: ['turnhout','herentals','mol','geel','kasterlee','balen','hoogstraten','rijkevorsel','brecht','wuustwezel','pelt','zoersel'] },
  { name: 'Antwerpen & Mechelen', slugs: ['antwerpen','mechelen','lier','brasschaat','schoten','wijnegem','aartselaar','boom','edegem','kapellen','kontich','lint','mortsel','niel','nijlen','sint-katelijne-waver','willebroek','wommelgem','heist-op-den-berg','ranst','puurs-sint-amands','bornem'] },
  { name: 'Oost-Vlaanderen', slugs: ['gent','aalst','sint-niklaas','dendermonde','lokeren','beveren','aalter','berlare','brakel','deinze','eeklo','evergem','gavere','geraardsbergen','hamme','herzele','kruibeke','lebbeke','lede','lierde','maldegem','merelbeke','nazareth','ninove','oudenaarde','ronse','stekene','temse','wetteren','wichelen','waasmunster','zele','zelzate','zottegem','zwalm'] },
  { name: 'West-Vlaanderen', slugs: ['brugge','kortrijk','oostende','roeselare','ieper','blankenberge','bredene','damme','de-panne','diksmuide','gistel','harelbeke','hooglede','ingelmunster','izegem','knokke-heist','ledegem','lendelede','lichtervelde','menen','middelkerke','moorslede','nieuwpoort','pittem','poperinge','ruiselede','staden','tielt','torhout','veurne','waregem','wevelgem','wingene','zedelgem','zwevegem'] },
  { name: 'Vlaams-Brabant', slugs: ['leuven','vilvoorde','aarschot','asse','beersel','diest','dilbeek','grimbergen','haacht','halle','landen','londerzeel','lubbeek','overijse','sint-pieters-leeuw','tervuren','tienen','tremelo','zaventem','zemst'] },
  { name: 'Limburg', slugs: ['hasselt','genk','beringen','bilzen','borgloon','diepenbeek','herk-de-stad','houthalen-helchteren','lanaken','lommel','maaseik','maasmechelen','peer','sint-truiden','tongeren'] },
];

const stadLookup = Object.fromEntries(steden.map(s => [s.slug, s.naam]));
const footerGroups = footerGroupDefs.map(g => ({
  name: g.name,
  cities: g.slugs.map(slug => ({ slug, naam: stadLookup[slug] ?? slug })),
}));

export default function FooterAccordions() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      {footerGroups.map((g) => (
        <div key={g.name} className="tm-footer-accord">
          <button
            type="button"
            className="tm-footer-accord-btn"
            onClick={() => setOpen(prev => prev === g.name ? null : g.name)}
            aria-expanded={open === g.name}
          >
            <span className="accord-name">{g.name}</span>
            <span className="accord-icon">{open === g.name ? '−' : '+'}</span>
          </button>
          {open === g.name && (
            <div className="tm-footer-accord-cities">
              {g.cities.map((c) => (
                <a key={c.slug} href={`/webdesign/${c.slug}`}>{c.naam}</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
