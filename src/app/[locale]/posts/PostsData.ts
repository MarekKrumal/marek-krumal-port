export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  problog?: string;
  //codeExample?: string;
}

export const allPosts: BlogPost[] = [
  {
    slug: "tvorba-tohoto-webu",
    title: "Tvorba tohoto webu",
    date: "2025-01-15",
    problog:
      "Tato stránka vznikla především proto, abych mohl představit své projekty a seznámit návštěvníky s mými pracemi. Od samého začátku jsem věděl, že ji chci vyvíjet v Next.js – stejně jako většinu svých projektů.",
    content: `<div>
      <h2 style="color: #3b82f6;">Úvod</h2>
      <p>
        Tato stránka vznikla především proto, abych mohl představit své projekty a seznámit návštěvníky s mými pracemi. Od samého začátku jsem věděl, že ji chci vyvíjet v Next.js, TypeScriptu a Tailwindu – stejně jako většinu svých projektů.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Přístup a vývoj</h2>
      <p>
        Na začátku jsem měl jasnou představu o tom, jak by měl web vypadat a fungovat. Jak jsem ale na projektu pracoval, postupně se ta představa měnila – přišel jsem na lepší řešení, díky kterým jsem mohl původní nápad výrazně vylepšit. Nakonec jsem vytvořil web, který je nejen rychlý, ale také snadno použitelný, což potvrzují i skvělé výsledky na PageSpeed Insights.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Technologie a optimalizace</h2>
      <p>
        Pro posty a projekty využívám slug, většinu obsahu mám předgenerovanou jako statický HTML pomocí funkcí jako <code>generateStaticParams</code> v novém App Routeru. Stylování jsem vytvářel ručně – původně bylo vše barevné, ale nakonec jsem se rozhodl pro jednoduchý a nedráždivý desing.
      </p>
      <p>
        Také jsem se naučil předrenderovat obrázky pomocí knihovny Sharp, o čemž píšu více v mém příspěvku <a href="https://marek-krumal-port.vercel.app/en/posts/procnextjs" style="color: #8b5cf6; ">Proč mě zaujal Next.js?</a>. Jedním z problémů, které jsem při samostatném přístupu ke stylování zažil, bylo nutné ladit barvy zvlášť pro Light a Dark 
        // mode ale nakonec jsm si poradil.Další komplikace nastala při použití Reactu v19 a Next.js 15, kdy Next.js požadoval awaitování params, což mi způsobilo nefunkčnost některých částí aplikace. Ani ChatGPT mi v této situaci nedokázal pomoci. Nakonec jsem po dlouhém hledání narazil na řešení díky uživateli <a href="https://github.com/orgs/community/discussions/142577" style="color: #8b5cf6;">night-fury-3</a>, který na GitHubu popsal správný postup.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Závěr</h2>
      <p>
        Celkově jsem při vývoji tohoto webu získal mnoho zkušeností, ať už v oblasti optimalizace výkonu, přístupnosti či jednoduchosti designu.
      </p>
    </div>`,
  },
  {
    slug: "procnextjs",
    title: "Proč mě zaujal Next.js?",
    date: "2025-01-13",
    problog:
      "Musím se přiznat, že když jsem poprvé začal používat Next.js, vůbec jsem nechápal rozdíl mezi SSR (Server-Side Rendering) a CSR (Client-Side Rendering).Většinu projektů jsem do té doby dělal ve Vite nebo obyčejném",
    content: `<div>
    <h3 style="color: #3b82f6;">Server-Side Rendering vs Client-Side Rendering</h3>
    <p>Musím se přiznat, že když jsem poprvé začal používat Next.js, vůbec jsem nechápal rozdíl mezi SSR (Server-Side Rendering) a CSR (Client-Side Rendering).
      Většinu projektů jsem do té doby dělal ve Vite nebo obyčejném Reactu. Pak jsem ale narazil na potřebu psát <code style="color: #22c55e;">"use client"</code> do komponent, které obsahovaly React hooky nebo interaktivní funkce jako <code style="color: #22c55e;">onClick</code>.
      To mě přimělo začít se více zajímat o web jako takový.</p>
    <p>Časem jsem zjistil, že není úplně chytré cpát zbytečný JavaScript a React hooky, jako <code style="color: #22c55e;">useEffect</code>, do každé komponenty. Jasně, složité weby a aplikace se bez toho neobejdou, ale já jsem měl radost, když jsem svou aplikaci
      nebo jednoduchou webovou stránku dokázal udělat rychlejší díky tomu, že jsem odstranil zbytečný JavaScript. Místo toho jsem se naučil řešit funkce tak, aby běžely pouze na serveru, což mi přišlo mnohem efektivnější.</p>
    <br />
    <h2 style="color: #3b82f6;">Next.js <code>&lt;Image /&gt;</code> komponenta</h2>
    <p>Optimalizace obrázků mě dřív nijak zvlášť nezajímala, ale když jsem objevil možnosti Next.js <code style="color: #22c55e;">&lt;Image /&gt;</code> komponenty, byl jsem nadšený. Tahle komponenta totiž umí:</p>
    <ul>
      <li>Automaticky převádět obrázky do formátu <strong>WebP</strong>, což zmenšuje jejich velikost a zrychluje načítání.</li>
      <li>Podporuje lazy loading – obrázky se načítají, jen když jsou viditelné na obrazovce uživatele.</li>
      <li>Snadno nastavit responzivní design pomocí atributů <code style="color: #22c55e;">sizes</code> nebo <code style="color: #22c55e;">layout</code>.</li>
      <li>Používat placeholdery – například rozmazaný náhled obrázku (blur) před úplným načtením.</li>
    </ul>
  
    <p>Rozmazaný placeholder jsem zakomponoval i na této stránce. Pokud máte pomalejší připojení, místo spinneru nebo skeletonu se nejdříve zobrazí rozmazaný obrázek, který je vygenerovaný jako <strong>Base64</strong>. K tomu jsem použil knihovnu <strong>Sharp</strong>, kterou Next.js podporuje.</p>
  
    <p>Jak jsem to udělal?</p>
    <p>Stačí nainstalovat knihovnu Sharp:</p>
    <pre><code style="color: #22c55e;">npm install sharp</code></pre>
    <p>Potom jsem vytvořil skript <strong>generate-blur.mjs</strong>, který mi generoval Base64 kód pro placeholder. Ten jsem pak použil v <code style="color: #22c55e;">&lt;Image /&gt;</code> komponentě takto:</p>
    <pre><code style="color: #22c55e;">
  placeholder="blur" 
  blurDataURL={imageBlur || image}
    </code></pre>
    <p>Výsledek vypadá profesionálněji než klasické spinnerové načítání, a navíc je to super jednoduché na implementaci.</p>
    <br />
    <h2 style="color: #3b82f6;">File-Based Routing</h2>
    <p>
      Dříve jsem ve svých projektech používal klasické routes
      <a href="https://github.com/MarekKrumal/MTRX/tree/main/backend/routes" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6;">Example</a>
    </p>
    <p>
      Ze začátku mě překvapilo, že Next.js používá složku <code style="color: #22c55e;">app</code>. Ano, od začátku jsem pracoval s verzí Next.js 14/15, která používá
      App Router. Zásadní rozdíl oproti Pages Routeru je například v tom, že App Router má footer a navbar v layoutu tak jako je tomu na této stránce.
    </p>
    <p>
      Další zásadní věcí je, že App Router má <strong>Server Components</strong> jako výchozí. V App Routeru se také nesetkáte s funkcemi jako
      <code style="color: #22c55e;">getStaticProps</code> nebo <code style="color: #22c55e;">getServerSideProps</code>, jak tomu je u Pages Routeru. Místo toho můžete jednoduše používat
      <code style="color: #22c55e;">fetch()</code> přímo v komponentách.
    </p>
    <h1 style="color: #3b82f6;">Využití [slug] v routeru:</h1>
    <p>
      Tohle mě na App Routeru zaujalo asi nejvíce. Jako příklad uvedu tento projekt. Začal jsem ho bez velkého přemýšlení – prostě jsem jel podle
      intuice a úplně zapomněl, že existuje něco jako <code style="color: #22c55e;">[slug].tsx</code>. Kvůli tomu jsem musel předělávat část projektu, aby fungovala přes
      slug:
      <a href="https://github.com/MarekKrumal/marek-krumal-port/commit/b61c5cf5352931ccdc6a3667ee00de27df2f39c7" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6;">Commit</a>
    </p>
    </br>
    <h2 style="color: #3b82f6;">Vytvoření vlastního API Routeru</h2>
    <p>
      Vlastní API route jsem použil například ve svém projektu 
      <a href="https://github.com/MarekKrumal/awares33/blob/main/src/app/api/posts/for-you/route.ts" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6;">Aware</a>.
      Na projektu jsem používal React Query a původně jsem fetchoval data napřímo na HomePage. Ale protože React Query běží na clientu a ne na serveru,
      a abych mohl fetchovat stránky jako například "for-you", musel jsem nastavit vlastní server endpoint <code style="color: #22c55e;">route.ts</code> (pro GET, POST requesty).
      Nejprve jsem vytvořil GET endpoint, přidal <code style="color: #22c55e;">try-catch</code>, logoval jsem error, pak jsem si vzal usera z funkce
      <a href="https://github.com/MarekKrumal/awares33/blob/main/src/auth.ts" target="_blank" rel="noopener noreferrer" style="color: #8b5cf6;">validateRequest()</a>, a když je user autorizován, fetchnul jsem posts. Posts vracím:
      <code style="color: #22c55e;">return Response.json(posts)</code>.
      Potom můžu použít React Query, pomocí kterého můžu dělat requesty na tento endpoint.
    </p>
    </br>
    <h2 style="color: #3b82f6;">TypeScript , tailwindcss a deployment na Vercel</h2>
    <p>
     Ze začátku jsem se TypeScriptu hodně vyhýbal, protože jsem nechápal, proč bych se ho měl učit, když jsem měl pocit, že ani pořádně neumím JavaScript. Postupem času jsem ale zjistil, že je lepší mít TypeScript v projektu. 
     </br>
     Pokud ho nechcete používat, nemusíte – můžete klidně psát klasický JavaScript, i když to není úplně nejlepší praxe. Jak jsem s ním postupně přicházel do styku, začal jsem pomalu objevovat, v čem je užitečný, hlavně u větších projektů.
  Díky TypeScriptu jsem začal přemýšlet o kódu jinak a snažím se psát komponenty co nejjednodušší na údržbu. Je to sice pořád „work in progress“, ale už vidím, jaké výhody mi to přináší.
  </br>
  S Tailwindem jsem začal prakticky od samého začátku, kdy jsem začal používat JSX, a od té doby jsem na klasické CSS skoro nesáhl. A nasazení na Vercel mi připadá neskutečně jednoduché,
   obzvlášť s Next.js – možná proto, že Vercel vlastně vytvořil Next.js jako open-source framework. Vercel navíc automaticky nasazuje všechny změny, které commitnu do hlavní branch na GitHubu.
  Proto u mých projektů často uvidíte Next.js, TypeScript, tailwindcss a deploymnet na Vercel.com.
  
    </p>
  </div>`,
  },
  {
    slug: "staticka-generace-nextjs15",
    title: "Statická generace v Next.js 15",
    date: "2025-01-13",
    problog:
      "V dnešní době, kdy rychlost načítání stránek a optimalizace pro vyhledávače hrají zásadní roli, se statická generace obsahu stává klíčovým nástrojem ve vývoji webových aplikací",
    content: `<div>
      <h2 style="color: #3b82f6;">Úvod</h2>
      <p>
        V dnešní době, kdy rychlost načítání stránek a optimalizace pro vyhledávače hrají zásadní roli, se statická generace obsahu stává klíčovým nástrojem ve vývoji webových aplikací. Používám <strong>Next.js 15</strong>, který nabízí vestavěnou podporu pro <strong>Static Site Generation (SSG)</strong> a kombinuje výhody statických stránek s flexibilitou dynamického obsahu. V tomto příspěvku se podíváme na to, jak SSG funguje v Next.js 15, proč je tak užitečné a jak vám může pomoci vytvořit rychlejší a bezpečnější web.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Co je statická generace obsahu?</h2>
      <p>
        <strong>Základní princip:</strong> Statická generace vytváří HTML stránky při buildu aplikace, místo aby byly generovány na požádání na serveru.
      </p>
      <p>
        <strong>Výhody SSG:</strong>
      </p>
      <ul>
        <li><strong>Rychlost:</strong> Statické soubory se načítají okamžitě, což vede k lepšímu uživatelskému zážitku.</li>
        <li><strong>SEO optimalizace:</strong> Vyhledávače snadno indexují statické stránky, což zlepšuje pozici ve výsledcích vyhledávání.</li>
      </ul>
      <br />
      <h2 style="color: #3b82f6;">Jak Next.js 15 implementuje SSG</h2>
      <p>
        <strong>getStaticProps:</strong> Použití funkce <code style="color: #22c55e;">getStaticProps</code> umožňuje získat data při build time. Například můžete načíst data z externího API a předat je komponentě před renderováním.
      </p>
      <p>
        <strong>generateStaticParams:</strong> V novém App Routeru se místo <code style="color: #22c55e;">getStaticPaths</code> používá funkce <code style="color: #22c55e;">generateStaticParams</code> pro generování dynamických statických stránek (například pro blogové příspěvky, kdy má každá stránka vlastní URL založenou na slug). Tato funkce určuje seznam parametrů, pro které má být daná stránka předem vygenerována. <em>Tato moje konkrétní stránka používá generateStaticParams</em>.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Praktické příklady a tipy</h2>
      <ul>
        <li><strong>Optimalizace výkonu:</strong> Díky SSG dosáhnete rychlejšího načítání stránek a zlepšíte uživatelský zážitek.</li>
        <li><strong>Případové studie:</strong> Sdílejte konkrétní zkušenost z projektu, kde přechod na statickou generaci vedl ke značnému zrychlení aplikace a zlepšení SEO.</li>
        <li><strong>Kombinace SSG a ISR:</strong> Zvažte využití <em>Incremental Static Regeneration (ISR)</em>, která umožňuje aktualizovat obsah bez kompletního rebuildu celé aplikace, a tím přináší další výhody.</li>
      </ul>
      
      <br />
      <h2 style="color: #3b82f6;">Závěr</h2>
      
      <p>
        Next.js 15 svým přístupem ke statické generaci obsahu nabízí silný nástroj, který pomáhá vývojářům vytvářet rychlé, bezpečné a SEO optimalizované webové aplikace. Pokud se i vy chcete zaměřit na zrychlení načítání stránek a zároveň využít moderní technologie, rozhodně stojí za to prozkoumat možnosti, které SSG v Next.js 15 nabízí.
      </p>
    </div>`,
  },
  {
    slug: "co-pouzivam",
    title: "Co používám ",
    date: "2025-01-16",
    problog:
      "Dneska se podělím o to, co všechno používám při psaní a kopírování mého kódu :|.",
    content: `<div>
      <br />
      <h2 style="color: #3b82f6;">Textový editor</h2>
      <p>
        U všech mých projektů, ať už jde o React, TypeScript nebo obyčejný JavaScript, dávám přednost <strong>Visual Studio Code</strong>. VSCODE mi fakt usnadňuje život – mám tam nastaveno spoustu klávesových zkratek, takže se snažím používat myš co nejméně.
        Prostě je to nástroj, se kterým jsem se naučil pracovat "na automatiku".
      </p>
      <h2 style="color: #3b82f6;">Hardware</h2>
      <p>
        Můj "bojový stroj" sestává z:
      </p>
      <ul>
        <li><strong>Procesoru:</strong> AMD Ryzen 5 5600X</li>
        <li><strong>Grafické karty:</strong> AMD RX 6700 XT</li>
        <li><strong>RAM:</strong> 16GB DDR4</li>
      </ul>
      <p>
        Nejsem nějaký hardcore hráč, takže mi ta grafika moc nevadí – tento počítač je pro mě naprosto dostačující pro vývoj webových projektů, hlavně těch, co jsou postavené na Next.js.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Software</h2>
      <p>
        S operačním systémem jsem přešel nedávno na <strong>Windows 11</strong>. Dříve jsem používal svoje vlastní verze Windows 10, kde jsem si vypnul spoustu věcí, aby byl systém lehčí. Nakonec jsem ale musel aktualizovat, protože mi začaly padat ovladače AMD Radeon a některý programy prostě nechtěly spolupracovat.
      </p>
      <p>
        Co se týče ostatního softwaru, hlavně používám:
      </p>
      <ul>
        <li>
          <strong>Prohlížeč:</strong> Google Chrome jsem měl dlouho na svém stole, ale když mi přestal fungovat Tampermonkey (můj oblíbený pomocník při přeskakování reklam), dal jsem šanci Firefoxu.
          A musím říct, že Firefox mě nezklamal – funguje tam spousta extensionů, které potřebuju.
        </li>
        <li>
          <strong>Terminal:</strong> Pracuju nejraději s <code>PowerShell</code>. Snažím se tvořit složky a spouštět projekty přes příkazový řádek, což mi ušetří spoustu klikání. Zkoušel jsem i Bash, ale protože jsem stále v Windows, zůstávám u PowerShellu.
        </li>
      </ul>
      <h2 style="color: #3b82f6;">Hosting a správa verzí</h2>
      <p>
        Webhosting? Většinou používám <strong>Vercel</strong>. Na jeho jednoduchosti a perfektní integraci s Next.js prostě nemůžu zapomenout.
        Kromě toho své projekty dávám na <strong>GitHub</strong>, kde si tak jednoduše ukládám veškerý kód a sleduju změny.
      </p>
      <br />
      <h2 style="color: #3b82f6;">Závěr</h2>
      <p>
        Tak to je moje malá výbava – od hardware po software, který mi pomáhá psát rychlý a pěkně strukturovaný kód. VSCode mi sedí jako ulitý, můj počítač je postačující a díky jednoduchému a funkčnímu prostředí se můžu plně soustředit na tvorbu projektů.
      </p>
    </div>`,
  },
];
