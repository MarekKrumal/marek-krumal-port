export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  //codeExample?: string;
}

export const allPosts: BlogPost[] = [
  {
    slug: "procnextjs",
    title: "Proč mě zaujal Next.js?",
    date: "2025-01-13",
    content: `<div>
  <h3 style="color: #5bb8ff;">Server-Side Rendering vs Client-Side Rendering</h3>
  <p>Musím se přiznat, že když jsem poprvé začal používat Next.js, vůbec jsem nechápal rozdíl mezi SSR (Server-Side Rendering) a CSR (Client-Side Rendering).
    Většinu projektů jsem do té doby dělal ve Vite nebo obyčejném Reactu. Pak jsem ale narazil na potřebu psát <code style="color: #90ee90;">"use client"</code> do komponent, které obsahovaly React hooky nebo interaktivní funkce jako <code style="color: #90ee90;">onClick</code>.
    To mě přimělo začít se více zajímat o web jako takový.</p>
  <p>Časem jsem zjistil, že není úplně chytré cpát zbytečný JavaScript a React hooky, jako <code style="color: #90ee90;">useEffect</code>, do každé komponenty. Jasně, složité weby a aplikace se bez toho neobejdou, ale já jsem měl radost, když jsem svou aplikaci
    nebo jednoduchou webovou stránku dokázal udělat rychlejší díky tomu, že jsem odstranil zbytečný JavaScript. Místo toho jsem se naučil řešit funkce tak, aby běžely pouze na serveru, což mi přišlo mnohem efektivnější.</p>
  <br />
  <h2 style="color: #5bb8ff;">Next.js <code>&lt;Image /&gt;</code> komponenta</h2>
  <p>Optimalizace obrázků mě dřív nijak zvlášť nezajímala, ale když jsem objevil možnosti Next.js <code style="color: #90ee90;">&lt;Image /&gt;</code> komponenty, byl jsem nadšený. Tahle komponenta totiž umí:</p>
  <ul>
    <li>Automaticky převádět obrázky do formátu <strong>WebP</strong>, což zmenšuje jejich velikost a zrychluje načítání.</li>
    <li>Podporuje lazy loading – obrázky se načítají, jen když jsou viditelné na obrazovce uživatele.</li>
    <li>Snadno nastavit responzivní design pomocí atributů <code style="color: #90ee90;">sizes</code> nebo <code style="color: #90ee90;">layout</code>.</li>
    <li>Používat placeholdery – například rozmazaný náhled obrázku (blur) před úplným načtením.</li>
  </ul>

  <p>Rozmazaný placeholder jsem zakomponoval i na této stránce. Pokud máte pomalejší připojení, místo spinneru nebo skeletonu se nejdříve zobrazí rozmazaný obrázek, který je vygenerovaný jako <strong>Base64</strong>. K tomu jsem použil knihovnu <strong>Sharp</strong>, kterou Next.js podporuje.</p>

  <p>Jak jsem to udělal?</p>
  <p>Stačí nainstalovat knihovnu Sharp:</p>
  <pre><code style="color: #90ee90;">npm install sharp</code></pre>
  <p>Potom jsem vytvořil skript <strong>generate-blur.mjs</strong>, který mi generoval Base64 kód pro placeholder. Ten jsem pak použil v <code style="color: #90ee90;">&lt;Image /&gt;</code> komponentě takto:</p>
  <pre><code style="color: #90ee90;">
placeholder="blur" 
blurDataURL={imageBlur || image}
  </code></pre>
  <p>Výsledek vypadá profesionálněji než klasické spinnerové načítání, a navíc je to super jednoduché na implementaci.</p>
  <br />
  <h2 style="color: #5bb8ff;">File-Based Routing</h2>
  <p>
    Dříve jsem ve svých projektech používal klasický soubor <code style="color: #90ee90;">routes.js</code>
    <a href="https://github.com/MarekKrumal/MTRX/tree/main/backend/routes" target="_blank" rel="noopener noreferrer" style="color: #D8BFD8;">Example</a>
  </p>
  <p>
    Ze začátku mě překvapilo, že Next.js používá složku <code style="color: #90ee90;">app</code>. Ano, od začátku jsem pracoval s verzí Next.js 14/15, která používá
    App Router. Zásadní rozdíl oproti Pages Routeru je například v tom, že App Router má footer a navbar v layoutu tak jako je tomu na této stránce.
  </p>
  <p>
    Další zásadní věcí je, že App Router má <strong>Server Components</strong> jako výchozí. V App Routeru se také nesetkáte s funkcemi jako
    <code style="color: #90ee90;">getStaticProps</code> nebo <code style="color: #90ee90;">getServerSideProps</code>, jak tomu je u Pages Routeru. Místo toho můžete jednoduše používat
    <code style="color: #90ee90;">fetch()</code> přímo v komponentách.
  </p>
  <h1>Využití [slug] v routeru:</h1>
  <p>
    Tohle mě na App Routeru zaujalo asi nejvíce. Jako příklad uvedu tento projekt. Začal jsem ho bez velkého přemýšlení – prostě jsem jel podle
    intuice a úplně zapomněl, že existuje něco jako <code style="color: #90ee90;">[slug].tsx</code>. Kvůli tomu jsem musel předělávat část projektu, aby fungovala přes
    slug:
    <a href="https://github.com/MarekKrumal/marek-krumal-port/commit/b61c5cf5352931ccdc6a3667ee00de27df2f39c7" target="_blank" rel="noopener noreferrer" style="color: #D8BFD8;">Commit</a>
  </p>
  </br>
  <h2 style="color: #5bb8ff;">Vytvoření vlastního API Routeru</h2>
  <p>
    Vlastní API route jsem použil například ve svém projektu 
    <a href="https://github.com/MarekKrumal/awares33/blob/main/src/app/api/posts/for-you/route.ts" target="_blank" rel="noopener noreferrer" style="color: #D8BFD8;">Aware</a>.
    Na projektu jsem používal React Query a původně jsem fetchoval data napřímo na HomePage. Ale protože React Query běží na clientu a ne na serveru,
    a abych mohl fetchovat stránky jako například "for-you", musel jsem nastavit vlastní server endpoint <code style="color: #90ee90;">route.ts</code> (pro GET, POST requesty).
    Nejprve jsem vytvořil GET endpoint, přidal <code style="color: #90ee90;">try-catch</code>, logoval jsem error, pak jsem si vzal usera z funkce
    <a href="https://github.com/MarekKrumal/awares33/blob/main/src/auth.ts" target="_blank" rel="noopener noreferrer" style="color: #D8BFD8;">validateRequest()</a>, a když je user autorizován, fetchnul jsem posts. Posts vracím:
    <code style="color: #90ee90;">return Response.json(posts)</code>.
    Potom můžu použít React Query, pomocí kterého můžu dělat requesty na tento endpoint.
  </p>
  </br>
  <h2 style="color: #5bb8ff;">TypeScript , tailwindcss a deployment na Vercel</h2>
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
    slug: "nextjsaxample",
    title: "Next.jsexample",
    date: "2025",
    content: `
        <p> Next.js...</p>
        <p> nextjs...</p>
      `,
  },
];
