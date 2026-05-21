const TOPICS = [
  "Csoportmunka eszközök, Git",
  "Kommunikációs formák, szabályok",
  "Hibakeresés, hibaelhárítás",
  "IT trendek, IoT, Python, REST API",
  "Relációs adatbázisok, irodai szoftverek",
  "Informatikai eszközök, OS telepítés",
  "Alkalmazás-üzemeltetés",
  "IPv4 és IPv6 címzés",
  "Kapcsolók és forgalomirányítók",
  "Második rétegbeli redundancia",
  "Virtuális LAN-ok (VLAN)",
  "Harmadik rétegbeli redundancia",
  "Vezeték nélküli hálózatok",
  "Hálózatbiztonság, forgalom figyelése",
  "Statikus és dinamikus routing, NAT",
  "WAN, VPN és SSH",
  "Virtualizáció, felhőszolgáltatások",
  "Windows és Linux szerverek",
  "Hálózatmonitorozás, -felügyelet",
  "Kis és közepes hálózatok tervezése"
];

const BANK = {
  "Csoportmunka eszközök, Git": [
    {
      "q": "Melyik Git paranccsal tölthetők fel a helyi commitok a távoli repository-ba?",
      "opts": [
        "git fetch origin main",
        "git push origin main",
        "git pull origin main",
        "git merge origin"
      ],
      "ans": 1,
      "exp": "A 'git push origin main' tölti fel a helyi commitokat a távoli (origin) main ágára. A fetch csak letölti, a pull letölti + mergeli."
    },
    {
      "q": "Mit csinál a 'git clone [URL]' parancs?",
      "opts": [
        "Új üres lokális repo-t hoz létre helyben",
        "Teljes másolatot készít a megadott távoli repo-ból",
        "Törli az összes commitot a helyi repo-ból",
        "Összefésüli a jelenlegi és a remote branchet"
      ],
      "ans": 1,
      "exp": "A 'git clone' teljes másolatot készít a URL-en lévő repository-ból, beleértve az összes commitot, ágat és historyt."
    },
    {
      "q": "Melyik parancs hoz létre új, helyi Git repositoryt az aktuális könyvtárból?",
      "opts": [
        "git start",
        "git new",
        "git init",
        "git create"
      ],
      "ans": 2,
      "exp": "A 'git init' inicializál egy új, üres Git repo-t az aktuális könyvtárban – létrehozza a rejtett .git mappát."
    },
    {
      "q": "Mi a Git 'commit' fogalma?",
      "opts": [
        "A módosítások feltöltése a remote szerverre",
        "A változások pillanatképének mentése a helyi historyban",
        "A lokális unstaged változások elvetve törlése",
        "Az aktuális branch és a main összefésülése (merge)"
      ],
      "ans": 1,
      "exp": "A commit a változások pillanatkép-mentése a repo historyjébe, üzenettel ellátva. Nem tölt fel semmit – ahhoz push kell."
    },
    {
      "q": "Melyik paranccsal hozható létre új branch és lehet rá is váltani egyszerre?",
      "opts": [
        "git branch új_ág",
        "git switch új_ág",
        "git checkout -b új_ág",
        "git new-branch új_ág"
      ],
      "ans": 2,
      "exp": "A 'git checkout -b új_ág' egyszerre hoz létre és vált az új ágra. Modernebb alternatíva: 'git switch -c új_ág'."
    },
    {
      "q": "Melyik állítás írja le helyesen a Git és a GitHub kapcsolatát?",
      "opts": [
        "Git verziókezelő, GitHub tárhelyplatform",
        "GitHub helyi CLI, Git felhőszolgáltatás",
        "Mindkettő kizárólag hibajegykezelő",
        "A Git csak GitHub-fiókkal használható"
      ],
      "ans": 0,
      "exp": "A Git helyi verziókezelő rendszer, a GitHub pedig online platform Git-repositoryk tárolására és csapatmunkára."
    },
    {
      "q": "Mire való a '.gitignore' fájl?",
      "opts": [
        "A commitok üzeneteit tárolja helyi fájlban",
        "Megadja, mely fájlokat ne kövessen nyomon a Git",
        "Az összes létező branchet sorolja fel",
        "A konfigurált távoli szerverek listáját tárolja"
      ],
      "ans": 1,
      "exp": "A .gitignore fájlban megadott minták alapján a Git nem követi nyomon a felsorolt fájlokat és könyvtárakat (pl. node_modules/, *.log)."
    },
    {
      "q": "Mit jelent a 'git pull' parancs?",
      "opts": [
        "A helyi uncommitted változások visszavonása",
        "Letölti és mergeli a remote változásokat a helyi ágba",
        "Csak megjeleníti a különbséget a remote és local közt",
        "Egy új remote branchet tölt le helyi verzióba"
      ],
      "ans": 1,
      "exp": "A 'git pull' = 'git fetch' + 'git merge': letölti a remote változásait és automatikusan mergeli az aktuális helyi ágba."
    },
    {
      "q": "Mi a pull request fő célja közös fejlesztésnél?",
      "opts": [
        "Kódmódosítás javasolt beolvasztása",
        "A repository helyi törlése",
        "Automatikus release-csomag készítése",
        "Jelszavak titkos tárolása"
      ],
      "ans": 0,
      "exp": "A pull request egy branch módosításainak áttekintését, megvitatását és beolvasztását támogatja."
    },
    {
      "q": "Mikor hasznos a Git rebase egy feature branch esetén?",
      "opts": [
        "Amikor a branchet friss main alapra rendezzük",
        "Amikor a távoli repositoryt végleg töröljük",
        "Amikor bináris fájlokat titkosítunk",
        "Amikor issue-t rendelünk fejlesztőhöz"
      ],
      "ans": 0,
      "exp": "A rebase a branch commitjait egy újabb kiindulási pontra helyezi, tisztább lineáris előzményt adva."
    },
    {
      "q": "Mi történik merge conflict esetén?",
      "opts": [
        "Ugyanazt a részt két ág eltérően módosította",
        "A Git elvesztette a teljes commitelőzményt",
        "A távoli szerver nem támogatja a brancheket",
        "A felhasználó neve hiányzik a README-ből"
      ],
      "ans": 0,
      "exp": "Merge conflict akkor keletkezik, amikor a Git nem tudja automatikusan eldönteni, melyik módosítás maradjon."
    },
    {
      "q": "Mire szolgál a Git tag?",
      "opts": [
        "Fontos commit, például verzió megjelölésére",
        "Minden branch automatikus törlésére",
        "Fájlok jogosultságainak kezelésére",
        "Konfliktusok automatikus feloldására"
      ],
      "ans": 0,
      "exp": "A tag jellemzően kiadási pontot jelöl, például v1.0.0 verziót egy konkrét commiton."
    },
    {
      "q": "Miért érdemes issue-t használni csapatmunkában?",
      "opts": [
        "Feladatok és hibák követésére",
        "Titkos kulcsok publikálására",
        "Repository-méret növelésére",
        "Branchnevek automatikus fordítására"
      ],
      "ans": 0,
      "exp": "Az issue-k hibák, fejlesztési feladatok, felelősök és határidők nyomon követésére valók."
    },
    {
      "q": "Mit mutat a git status parancs?",
      "opts": [
        "A munkakönyvtár és staging állapotát",
        "A szerver CPU-terhelését",
        "Az összes GitHub-felhasználót",
        "A projekt licencének jogi érvényét"
      ],
      "ans": 0,
      "exp": "A git status jelzi a módosított, staged, untracked fájlokat és az aktuális branch állapotát."
    },
    {
      "q": "Mire szolgál egy pull request csapatmunkában?",
      "opts": [
        "Kódmódosítás átnézésére",
        "DNS-zóna létrehozására",
        "Virtuális gép indítására",
        "WiFi-csatorna mérésére"
      ],
      "ans": 0,
      "exp": "A pull request a módosítások áttekintésére, megbeszélésére és kontrollált beolvasztására szolgál."
    },
    {
      "q": "Mikor keletkezik Git merge conflict?",
      "opts": [
        "Eltérő sorok ütközésekor",
        "Új branch létrehozásakor",
        "Távoli repo klónozásakor",
        "Commit üzenet írásakor"
      ],
      "ans": 0,
      "exp": "Merge conflict akkor alakul ki, ha ugyanazon részeket egymással nem összeegyeztethető módon módosították."
    },
    {
      "q": "Mit csinál a git fetch parancs?",
      "opts": [
        "Letölt, de nem olvaszt be",
        "Letölt és azonnal töröl",
        "Feltölt és branchet zár",
        "Commitot készít helyben"
      ],
      "ans": 0,
      "exp": "A git fetch lekéri a távoli változásokat, de nem módosítja automatikusan az aktuális munkaterületet."
    },
    {
      "q": "Mire használható egy Git tag?",
      "opts": [
        "Kiadási pont jelölésére",
        "Fájlok végleges törlésére",
        "Jogosultságok kiosztására",
        "Konfliktusok automatikus javítására"
      ],
      "ans": 0,
      "exp": "A tag egy adott commit megjelölésére szolgál, például verziókiadásnál."
    },
    {
      "q": "Mit érdemes tartalmaznia egy jó hibajegynek?",
      "opts": [
        "Lépéseket és környezetet",
        "Csak egy rövid véleményt",
        "Csak a fejlesztő nevét",
        "Egy lezárt commit hashét"
      ],
      "ans": 0,
      "exp": "A jó hibajegy tartalmazza a reprodukálási lépéseket, környezetet, várt és tényleges működést."
    },
    {
      "q": "Mi történik, ha egy már követett fájl bekerül a .gitignore fájlba?",
      "opts": [
        "Továbbra is követett marad",
        "Azonnal törlődik a repóból",
        "Minden branchből eltűnik",
        "Automatikusan commitolódik"
      ],
      "ans": 0,
      "exp": "A .gitignore az új, nem követett fájlokra hat. A már követett fájlt külön kell kivenni az indexből."
    },
    {
      "type": "multi",
      "q": "Egy közös Git-projektben mely állítások helyesek a branch-ek és távoli repository használatáról?",
      "opts": [
        "A git checkout release átvált a release ágra",
        "A git pull letölti és beolvasztja a távoli változásokat",
        "A git commit közvetlenül feltölti a központi repositoryba",
        "A git copy szabványos parancs távoli repo másolására"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Ágra váltáshoz használható a checkout, a pull pedig letölt és beolvaszt. A commit helyi mentés, feltöltéshez push kell."
    },
    {
      "type": "match",
      "q": "Párosítsd a Git-parancsokat a legjellemzőbb feladatukkal!",
      "pairs": [
        [
          "git clone",
          "Távoli repository helyi másolatának létrehozása"
        ],
        [
          "git push",
          "Helyi commitok feltöltése távoli ágba"
        ],
        [
          "git pull",
          "Távoli változások letöltése és beolvasztása"
        ],
        [
          "git status",
          "Munkakönyvtár állapotának ellenőrzése"
        ]
      ],
      "exp": "A clone másolatot készít, a push feltölt, a pull letölt és beolvaszt, a status az aktuális állapotot mutatja."
    },
    {
      "q": "Mit célszerű tenni, mielőtt egy fejlesztő a saját branchét beolvasztaná a közös fejlesztői ágba?",
      "opts": [
        "Ellenőrizni a változásokat és frissíteni a helyi ágat",
        "Törölni a távoli repository összes címkéjét",
        "Átnevezni a fő ágat minden közreműködőnél",
        "Kikapcsolni a verziókövetést a projektmappában"
      ],
      "ans": 0,
      "exp": "Beolvasztás előtt érdemes frissíteni, tesztelni és ellenőrizni a változásokat, hogy kevesebb konfliktus keletkezzen."
    }
  ],
  "Kommunikációs formák, szabályok": [
    {
      "q": "Mi jellemzi a szinkron kommunikációt az aszinkronnal szemben?",
      "opts": [
        "Kizárólag írásos csatornán valósítható meg",
        "Mindkét fél egyidejűleg, valós időben kommunikál",
        "Internetes hozzáférés nélkül is alkalmazható",
        "Az összes üzenet utólag archiválva visszakereshető"
      ],
      "ans": 1,
      "exp": "Szinkron kommunikáció: valós idejű, pl. telefonhívás, videókonferencia – mindkét félnek egyszerre kell jelen lennie. Aszinkron pl. e-mail, ahol időeltolás van."
    },
    {
      "q": "Melyik eszköz tipikusan aszinkron csapatkommunikációra alkalmas?",
      "opts": [
        "Videókonferencia (Teams, Zoom)",
        "Telefonhívás",
        "E-mail vagy Slack üzenet",
        "Élő képernyőmegosztás"
      ],
      "ans": 2,
      "exp": "Az e-mail és az ásinkron chatüzenet (pl. Slack) aszinkron: a fogadó nem kell egyszerre jelen legyen, saját tempójában válaszol."
    },
    {
      "q": "Mi a helyes e-mail etikett szabálya formális levelezésben?",
      "opts": [
        "Az egész levelet csupa nagybetűvel kell megírni",
        "Emojik és szleng használata kötelező formai elem",
        "Egyértelmű tárgy, tömör tartalom, köszöntés, elköszönés",
        "A CC-mezőbe minden érintettet kötelező felvenni"
      ],
      "ans": 2,
      "exp": "Formális e-mailben: egyértelmű tárgymező, köszöntés, lényegre törő tartalom, elköszönés és aláírás ajánlott. Nagybetűs szöveg nehézkes olvasni."
    },
    {
      "q": "Melyik csatorna a legjobb gyors visszajelzést igénylő helyzetben?",
      "opts": [
        "E-mail",
        "Postai levél",
        "Chat vagy telefon",
        "Hírlevél"
      ],
      "ans": 2,
      "exp": "Sürgős ügyben a chat vagy telefon a legalkalmasabb, mert valós idejű vagy közel valós idejű választ tesz lehetővé."
    },
    {
      "q": "Mit jelent a 'netiquette' fogalma?",
      "opts": [
        "Hálózati forgalom mérésére és elemzésére használt módszer",
        "Az online kommunikáció általánosan elfogadott illemszabályai",
        "Adatforgalom titkosítására szolgáló protokoll neve",
        "A domain nevek regisztrálásának lépéssorozata"
      ],
      "ans": 1,
      "exp": "A netiquette (hálózati etikett) az online kommunikáció udvariatssági és viselkedési normái – pl. ne írjunk csupa nagybetűvel, tiszteljük mások véleményét."
    },
    {
      "q": "Melyik a nem megfelelő kommunikációs forma egy szakmai ticketrendszerben?",
      "opts": [
        "Pontos hibaüzenet és lépések leírása",
        "Képernyőkép csatolása a hibáról",
        "Rövid, tárgyszerű leírás a problémáról",
        "Sértő megjegyzések a fejlesztőknek"
      ],
      "ans": 3,
      "exp": "A ticketrendszerben szakmai, tárgyszerű kommunikáció szükséges. A sértő megjegyzések nem elfogadottak és kontraproduktívak."
    },
    {
      "q": "Melyik videókonferencia-protokoll javasolt nagy csapatüléseken a hatékony kommunikációhoz?",
      "opts": [
        "Mindenki egyszerre beszéljen szabadon",
        "Néma módban legyen, kivéve ha szól",
        "Kamerát tilos bekapcsolni",
        "Chatben küldjék a kérdéseket a résztvevők"
      ],
      "ans": 1,
      "exp": "Nagy online megbeszéléseken a mikrofon elnémítása (mute) az alapszabály: csak az aktívan beszélő kapcsolja be, hogy elkerüljük a háttérzajt."
    },
    {
      "q": "Mikor célszerű meeting helyett ticketet nyitni?",
      "opts": [
        "Ha nyomon követhető hiba- vagy feladatleírás kell",
        "Ha azonnali szóbeli döntés szükséges",
        "Ha személyes konfliktust kell kezelni",
        "Ha nem maradhat írásos nyom"
      ],
      "ans": 0,
      "exp": "Ticket akkor ideális, ha a probléma, lépések, felelős és állapot később is visszakereshető legyen."
    },
    {
      "q": "Miért fontos az egyértelmű tárgymező e-mailben?",
      "opts": [
        "Gyorsítja a keresést és a priorizálást",
        "Megnöveli a levél méretkorlátját",
        "Titkosítja a csatolmányokat",
        "Automatikusan visszavonja a levelet"
      ],
      "ans": 0,
      "exp": "A tárgymező segíti a címzettet abban, hogy az üzenet célját és sürgősségét gyorsan felismerje."
    },
    {
      "q": "Mit jelent a CC mező használata levelezésben?",
      "opts": [
        "Másolatot kap, de nem ő a fő címzett",
        "Titkos címzettként kapja meg a levelet",
        "Automatikus fordítást kér a levélre",
        "Csak csatolmányokat kap meg"
      ],
      "ans": 0,
      "exp": "A CC másolatot jelent; az érintett látja a levelet, de általában nem őtől várják az elsődleges választ."
    },
    {
      "q": "Mikor indokolt a BCC mező használata?",
      "opts": [
        "Ha a címzettek listája ne legyen látható",
        "Ha mindenki szerkesztheti a tárgyat",
        "Ha kötelező választ kérünk mindenkitől",
        "Ha a levél csak belső hálón mehet"
      ],
      "ans": 0,
      "exp": "A BCC elrejti a címzettek listáját egymás elől, például nagyobb körnek küldött tájékoztatónál."
    },
    {
      "q": "Mi a jó incidenskommunikáció egyik alapelve?",
      "opts": [
        "Tények, hatás és következő lépés megadása",
        "Feltételezések tényként közlése",
        "Felelőskeresés első üzenetben",
        "Technikai zsargon túlhasználata"
      ],
      "ans": 0,
      "exp": "Incidensnél röviden közölni kell a tényeket, érintett szolgáltatásokat, hatást és a következő várható frissítést."
    },
    {
      "q": "Melyik példa alkalmas aszinkron döntés-előkészítésre?",
      "opts": [
        "Összefoglaló dokumentum kommentelési lehetőséggel",
        "Vészhelyzeti telefonhívás azonnali hibánál",
        "Élő ügyfélbemutató időpontra szervezve",
        "Azonnali szóban történő szavazás"
      ],
      "ans": 0,
      "exp": "Aszinkron munkánál a résztvevők eltérő időben olvasnak és kommentelnek, ezért a dokumentált forma előnyös."
    },
    {
      "q": "Mi a megbeszélés emlékeztetőjének fő célja?",
      "opts": [
        "Döntések és feladatok rögzítése",
        "Résztvevők rangsorolása",
        "Jelszavak megosztása",
        "Ticketek automatikus lezárása"
      ],
      "ans": 0,
      "exp": "Az emlékeztető a döntéseket, felelősöket és határidőket rögzíti."
    },
    {
      "q": "Mikor indokolt a BCC mező használata e-mailben?",
      "opts": [
        "Címzettek elrejtésekor",
        "Közös szerkesztés indításakor",
        "Sürgősség növelésekor",
        "Melléklet tömörítésekor"
      ],
      "ans": 0,
      "exp": "A BCC akkor hasznos, ha a címzettek nem láthatják egymás e-mail címét."
    },
    {
      "q": "Miért fontos a tárgymező egy szakmai e-mailben?",
      "opts": [
        "Gyors azonosítást segít",
        "Titkosítja a mellékletet",
        "Megváltoztatja a prioritást",
        "Archiválja a választ"
      ],
      "ans": 0,
      "exp": "A pontos tárgymező segíti a levél gyors beazonosítását és későbbi kereshetőségét."
    },
    {
      "q": "Melyik információ segít leginkább incidens eszkalálásakor?",
      "opts": [
        "Hatás és eddigi lépések",
        "Általános panasz szövege",
        "A feladó aláírásképe",
        "A csapat belső vicce"
      ],
      "ans": 0,
      "exp": "Eszkaláláskor fontos a hiba hatása, üzleti súlya, időpontja és a már kipróbált lépések."
    },
    {
      "q": "Mikor előnyös az aszinkron kommunikáció?",
      "opts": [
        "Nem sürgős egyeztetésnél",
        "Azonnali leállás esetén",
        "Élő döntési helyzetben",
        "Kritikus riasztásnál"
      ],
      "ans": 0,
      "exp": "Nem sürgős ügyben az aszinkron csatorna kevésbé szakítja meg a munkát, és visszakereshető marad."
    },
    {
      "q": "Mi történik gyakran, ha egy projekt terjedelme nő, de az idő és költség nem változik?",
      "opts": [
        "A minőség kockázatba kerül",
        "A kockázat mindig csökken",
        "A feladatok eltűnnek",
        "A dokumentáció feleslegessé válik"
      ],
      "ans": 0,
      "exp": "A projektháromszögben a terjedelem, idő, költség és minőség egymásra hat."
    },
    {
      "type": "multi",
      "q": "Mely állítások felelnek meg a kulturált és biztonságos e-mail kommunikációnak?",
      "opts": [
        "A tárgy mező röviden utaljon a levél tartalmára",
        "A BCC címzettjei ne látszódjanak a többi címzettnek",
        "A fontos mondatokat célszerű végig csupa nagybetűvel írni",
        "A CC mezőben lévő címzettek mindig rejtve maradnak"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "A tárgy segíti az értelmezést, a BCC rejtett másolat. A csupa nagybetű kiabálásnak hat, a CC nem rejtett."
    },
    {
      "type": "match",
      "q": "Párosítsd az e-mail mezőket a helyes jelentésükkel!",
      "pairs": [
        [
          "To / Címzett",
          "A levél elsődleges címzettje"
        ],
        [
          "CC",
          "Látható másolat címzettje"
        ],
        [
          "BCC",
          "Rejtett másolat címzettje"
        ],
        [
          "Subject",
          "A levél tárgyának rövid összefoglalása"
        ]
      ],
      "exp": "A To a fő címzett, a CC látható másolat, a BCC rejtett másolat, a Subject pedig a tárgymező."
    },
    {
      "q": "Melyik megfogalmazás illik leginkább hivatalos hibabejelentő e-mailbe?",
      "opts": [
        "Rövid tárgy, pontos hiba, környezet és reprodukálható lépések",
        "Csak annyi, hogy nem működik, a részletek nélkül",
        "Csupa nagybetűs tárgy és sürgető felkiáltójelek",
        "Több külön témájú hiba egyetlen cím nélküli levélben"
      ],
      "ans": 0,
      "exp": "A jó hibabejelentés konkrét, visszakereshető és segíti a hiba reprodukálását."
    }
  ],
  "Hibakeresés, hibaelhárítás": [
    {
      "q": "Melyik az ajánlott hibakeresési módszer hálózati problémánál az OSI-modell alapján?",
      "opts": [
        "Mindig a 7. alkalmazási rétegtől kötelező elindulni",
        "Véletlenszerű rétegek ellenőrzése elegendő",
        "Szisztematikusan alulról felfelé vagy fordítva haladunk",
        "Elegendő kizárólag a 3. hálózati réteget vizsgálni"
      ],
      "ans": 2,
      "exp": "OSI-alapú hibakeresés: bottom-up (fizikai → alkalmazási) vagy top-down. A szisztematikus megközelítés kizárja a lehetséges okokat, míg a hiba forrása megtalálható."
    },
    {
      "q": "Melyik Windows-parancs mutatja az összes hálózati interfész IP-konfigurációját?",
      "opts": [
        "netstat -a",
        "ipconfig /all",
        "ping 127.0.0.1",
        "tracert google.com"
      ],
      "ans": 1,
      "exp": "Az 'ipconfig /all' részletesen megjeleníti az összes interfész IP-jét, maszkját, átjáróját, DNS-szerverét és MAC-címét."
    },
    {
      "q": "Egy PC nem kap IP-t a DHCP-től. Melyik az első ellenőrzendő lépés?",
      "opts": [
        "Azonnal cseréljük ki az alaplapot és a RAM-ot",
        "Ellenőrizzük a fizikai kábelt és a switch portot",
        "Telepítsük újra teljesen az operációs rendszert",
        "Töröljük az összes meglévő tűzfal szabályt"
      ],
      "ans": 1,
      "exp": "A hibakeresés első lépése mindig a fizikai réteg: kábel csatlakoztatva van-e, a switch-port aktív-e (LED). Csak ezután haladunk feljebb."
    },
    {
      "q": "Mit jelez, ha a 'ping 8.8.8.8' sikerül, de a 'ping google.com' sikertelen?",
      "opts": [
        "A hálózati kártya meghibásodott",
        "A DNS-felbontás nem működik",
        "A tűzfal blokkol minden forgalmat",
        "Az alapértelmezett átjáró hibásan van beállítva"
      ],
      "ans": 1,
      "exp": "Ha az IP alapú ping megy, de a névfeloldás nem, a DNS-szerver elérhetetlen vagy rosszul van konfigurálva. A DNS a névfeloldásért felelős."
    },
    {
      "q": "Mit mutat a 'tracert google.com' parancs eredménye?",
      "opts": [
        "Az összes nyitott portot listázza a céleszközön",
        "A forrástól a célig vezető útvonalon minden hop RTT-jét",
        "A célszerver aktuális SSL/TLS tanúsítványát",
        "Az összes jelenleg aktív TCP-kapcsolatot a gépen"
      ],
      "ans": 1,
      "exp": "A tracert/traceroute az útvonal minden hopját mutatja a forrástól a célig, mért RTT-értékekkel – megmutatja, hol lassul vagy szakad meg a kapcsolat."
    },
    {
      "q": "Melyik Linux-parancs mutatja a hálózati interfészek állapotát és IP-eit?",
      "opts": [
        "ls -la /etc/network",
        "ip address show",
        "cat /etc/resolv.conf",
        "systemctl status network"
      ],
      "ans": 1,
      "exp": "Az 'ip address show' (vagy röviden 'ip a') megjeleníti az összes hálózati interfész nevét, IP-jét, maszkját és állapotát Linux alatt."
    },
    {
      "q": "Mit jelent az 'administratively down' állapot egy Cisco interfésznél?",
      "opts": [
        "A hálózati kábel nincs csatlakoztatva a portba",
        "Az interfész hardvere fizikailag meghibásodott",
        "Manuálisan tiltva lett a 'shutdown' IOS paranccsal",
        "Nincs IP-cím konfigurálva az interfészen"
      ],
      "ans": 2,
      "exp": "Az 'administratively down' azt jelenti, hogy a rendszergazda explicit kiadta a 'shutdown' parancsot az interfészen. A 'no shutdown' visszaállítja."
    },
    {
      "q": "Melyik paranccsal lehet tesztelni, hogy elérhető-e az alapértelmezett átjáró Windows rendszeren?",
      "opts": [
        "ipconfig /release",
        "nslookup",
        "ping [átjáró IP-je]",
        "netstat -r"
      ],
      "ans": 2,
      "exp": "A 'ping [átjáró IP]' ICMP echo requestet küld az átjáróhoz – ha válaszol, a 2. és 3. réteg rendben van. Ez az egyik első hálózati hibakeresési lépés."
    },
    {
      "q": "Melyik hibaelhárítási irány célszerű, ha a fizikai kapcsolat működik, de az alkalmazás hibázik?",
      "opts": [
        "Bottom-up",
        "Top-down",
        "Random csere",
        "Csak hardverteszt"
      ],
      "ans": 1,
      "exp": "Ilyenkor célszerű az alkalmazási rétegtől indulni, és lefelé haladni az OSI-modellben."
    },
    {
      "q": "Melyik adat utalhat fizikai vagy adatkapcsolati hibára a show interfaces kimenetében?",
      "opts": [
        "IP-cím és maszk",
        "CRC/input/output hibák",
        "Routing tábla sorai",
        "DNS-cache rekordok"
      ],
      "ans": 1,
      "exp": "A CRC-, input- és output-hibák gyakran kábel-, duplex-, sebesség- vagy portproblémára utalnak."
    },
    {
      "q": "Mi a baseline szerepe hibaelhárításkor?",
      "opts": [
        "Normál működéshez viszonyítási alapot ad",
        "Automatikusan kijavít minden hibát",
        "Kiváltja a naplózást és mentést",
        "Csak új eszközök beszerzésére való"
      ],
      "ans": 0,
      "exp": "A baseline rögzíti a normál terhelést, késleltetést és hibaarányt; eltérés esetén könnyebb felismerni a problémát."
    },
    {
      "q": "Melyik parancs hasznos útvonalvizsgálatra Cisco eszközön?",
      "opts": [
        "traceroute célcím",
        "format flash:",
        "copy run start",
        "show clock"
      ],
      "ans": 0,
      "exp": "A traceroute megmutatja, mely útválasztókon halad át a csomag, és hol akadhat el az útvonal."
    },
    {
      "q": "Mit érdemes ellenőrizni, ha csak egy switchporton nincs kapcsolat?",
      "opts": [
        "Portállapot, VLAN-tagság és kábel",
        "Az összes publikus DNS-zóna",
        "A WAN-szolgáltató szerződését",
        "A felhőszolgáltatás számlázását"
      ],
      "ans": 0,
      "exp": "Egyetlen port hibájánál a fizikai kapcsolat, admin state, VLAN-hozzárendelés és port-security a leggyakoribb kiindulópont."
    },
    {
      "q": "Mit mutat a show ip route parancs?",
      "opts": [
        "Az IPv4 routing tábla bejegyzéseit",
        "A teljes MAC-címtáblát",
        "A távoli felhasználók jelszavait",
        "A DHCP-kliens gépek nevét"
      ],
      "ans": 0,
      "exp": "A show ip route az ismert útvonalakat, forrásukat, metrikájukat és next-hop adataikat jeleníti meg."
    },
    {
      "q": "Mikor célszerű az oszd meg és uralkodj módszer?",
      "opts": [
        "Ha gyorsan kell szűkíteni a hibás réteget",
        "Ha minden beállítást egyszerre törlünk",
        "Ha csak fizikai kábelt vizsgálunk",
        "Ha nem áll rendelkezésre semmilyen adat"
      ],
      "ans": 0,
      "exp": "Az oszd meg és uralkodj módszer középső pontból indul, majd a hiba helye alapján felfelé vagy lefelé folytatja az ellenőrzést."
    },
    {
      "q": "Mit jelezhet sok CRC hiba egy interfészen?",
      "opts": [
        "Kábel-, duplex- vagy fizikai rétegbeli gondot",
        "Sikeres DNS-névfeloldást",
        "Rendben lezárt TCP-kapcsolatot",
        "Megnövelt DHCP-bérleti időt"
      ],
      "ans": 0,
      "exp": "A CRC hibák tipikusan zajra, hibás kábelre, csatlakozóra vagy duplex/sebességproblémára utalnak."
    },
    {
      "q": "Mit jelezhet, ha egy kliens 169.254.x.x címet kap?",
      "opts": [
        "DHCP nem volt elérhető",
        "DNS rekord hibás lett",
        "NAT tábla megtelt",
        "VLAN trunk aktív lett"
      ],
      "ans": 0,
      "exp": "Az APIPA cím arra utalhat, hogy a kliens nem kapott érvényes címet DHCP-től."
    },
    {
      "q": "Melyik lépés célszerű, ha pingelhető az átjáró, de külső IP nem érhető el?",
      "opts": [
        "Routing/NAT ellenőrzése",
        "Monitor kábel cseréje",
        "Billentyűzet próbája",
        "Felhasználó átnevezése"
      ],
      "ans": 0,
      "exp": "Ha a helyi átjáró elérhető, a következő lépés az útvonal, NAT vagy külső kapcsolat vizsgálata."
    },
    {
      "q": "Mit valószínűsíthet sok CRC hiba egy switch interfészen?",
      "opts": [
        "Kábel vagy duplex gond",
        "Hibás DNS rekord",
        "Lejárt DHCP bérlet",
        "Hiányzó felhasználói profil"
      ],
      "ans": 0,
      "exp": "CRC és input hibák gyakran fizikai rétegbeli, kábelezési vagy duplex problémára utalnak."
    },
    {
      "q": "Mire használható a 127.0.0.1 pingelése?",
      "opts": [
        "Helyi TCP/IP tesztre",
        "Távoli DNS mérésére",
        "VLAN-lista kérésére",
        "NAT címfordításra"
      ],
      "ans": 0,
      "exp": "A loopback cím pingelése a helyi hálózati verem működését ellenőrzi."
    },
    {
      "q": "Melyik parancs segít Windows alatt az útvonal lépéseinek vizsgálatában?",
      "opts": [
        "tracert",
        "net user",
        "diskpart",
        "gpupdate"
      ],
      "ans": 0,
      "exp": "A tracert megmutatja a cél felé vezető útvonal hopjait és késleltetéseit."
    },
    {
      "q": "Mit érdemes tenni strukturált hibaelhárítás végén?",
      "opts": [
        "Megoldást dokumentálni",
        "Az összes logot törölni",
        "Véletlen beállításokat hagyni",
        "A hibajegyet részletek nélkül zárni"
      ],
      "ans": 0,
      "exp": "A megoldás dokumentálása segíti a későbbi hasonló hibák gyorsabb elhárítását."
    },
    {
      "type": "multi",
      "q": "Mely eszközök vagy parancsok alkalmasak hálózati hibakeresésre egy kliensgépen?",
      "opts": [
        "ping",
        "tracert vagy traceroute",
        "SMTP",
        "Wireshark"
      ],
      "ans": [
        0,
        1,
        3
      ],
      "exp": "A ping, traceroute/tracert és Wireshark hibakeresésre használható. Az SMTP levelezési protokoll, nem hibakereső eszköz."
    },
    {
      "type": "match",
      "q": "Párosítsd a diagnosztikai eszközt a legjellemzőbb feladatával!",
      "pairs": [
        [
          "ping",
          "Alap elérhetőség vizsgálata"
        ],
        [
          "tracert",
          "Útvonal lépéseinek megjelenítése"
        ],
        [
          "nslookup",
          "DNS névfeloldás ellenőrzése"
        ],
        [
          "netstat",
          "Aktív kapcsolatok és portok listázása"
        ]
      ],
      "exp": "A ping elérhetőséget, a tracert útvonalat, az nslookup DNS-t, a netstat kapcsolatokat vizsgál."
    },
    {
      "q": "Egy kliens IP-címet kap, a helyi szervert eléri, de internetes címeket nem. Mit ellenőriznél először?",
      "opts": [
        "Alapértelmezett átjáró és DNS-beállítások",
        "Monitor frissítési frekvenciája",
        "Helyi billentyűzet kiosztása",
        "Felhasználói háttérkép mérete"
      ],
      "ans": 0,
      "exp": "Ha helyi kapcsolat van, de külső elérés vagy névfeloldás nincs, az átjáró és a DNS alapvető ellenőrzési pont."
    },
    {
      "type": "multi",
      "q": "Egy Windows kliensről látszólag sikeres a nyomtatás, de a sor üres marad és nem készül nyomat. Mely lépések lehetnek indokoltak?",
      "opts": [
        "Nyomtatási szolgáltatás és frissítések ellenőrzése",
        "Kártevőellenőrzés futtatása a kliensen",
        "A CPU hűtőborda azonnali cseréje",
        "A monitor színprofiljának visszaállítása"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Ilyen helyzetben szoftveres nyomtatási vagy rendszerprobléma is lehet, ezért a szolgáltatás, frissítés és kártevőellenőrzés indokolt."
    }
  ],
  "IT trendek, IoT, Python, REST API": [
    {
      "q": "Mi az IoT (Internet of Things) lényege?",
      "opts": [
        "Csak hagyományos számítógépek és mobilok hálózatba kötése",
        "Fizikai eszközök hálózatba kapcsolása automatizált adatcserével",
        "A vállalati LAN-ok sávszélességének növelése switch-cserével",
        "Kizárólag ipari robotok táv-programozása PLC-n keresztül"
      ],
      "ans": 1,
      "exp": "Az IoT fizikai eszközök (szenzorok, okoseszközök, gépek) internetes összeköttetését és automatikus adatcseréjét jelenti, emberi beavatkozás minimalizálásával."
    },
    {
      "q": "Melyik protokollt használják gyakran IoT-üzenetküldésre?",
      "opts": [
        "Telnet",
        "SMTP",
        "MQTT",
        "FTP"
      ],
      "ans": 2,
      "exp": "Az MQTT kis erőforrásigényű publish-subscribe protokoll, ezért IoT-környezetben gyakori."
    },
    {
      "q": "Mi egy REST API jellemzője?",
      "opts": [
        "Bináris protokollon, a TCP 22-es SSH-porton működik",
        "HTTP-alapú, erőforrás-orientált interfész szoftverek között",
        "Kizárólag relációs adatbázisok közvetlen lekérdezésére való",
        "Csak Python nyelven írt kliensekkel hívható meg"
      ],
      "ans": 1,
      "exp": "A REST API HTTP metódusokat (GET, POST, PUT, DELETE) használ erőforrások kezelésére. Platformfüggetlen – bármely nyelvből hívható, JSON/XML választ ad."
    },
    {
      "q": "Mit csinál a következő Python kód? print(len('hello'))",
      "opts": [
        "Kiírja a 'hello' szöveget",
        "Kiírja az 5-öt (a szöveg hosszát)",
        "Hibát dob, mert len() nem létezik",
        "Kiírja a 'hello' ASCII-kódjait"
      ],
      "ans": 1,
      "exp": "A Python len() függvénye visszaadja a karakterlánc hosszát. A 'hello' 5 karakter, tehát a print(len('hello')) kimenete: 5."
    },
    {
      "q": "Melyik adatformátum terjedt el legjobban REST API-ok válaszaiban?",
      "opts": [
        "XML",
        "CSV",
        "JSON",
        "YAML"
      ],
      "ans": 2,
      "exp": "A JSON (JavaScript Object Notation) lett a REST API-ok de facto szabványa: olvasható, tömör, és szinte minden programozási nyelvből könnyen feldolgozható."
    },
    {
      "q": "Mit jelent a 'cloud-native' fejlesztési szemlélet?",
      "opts": [
        "Az alkalmazás csak helyi, on-premise szerveren üzemel",
        "Konténerekre, mikroszervizekre és felhőre optimalizált szoftverfejlesztés",
        "Meglévő alkalmazások egyszerű átvitele a felhőbe módosítás nélkül",
        "Kizárólag Microsoft Azure platformot alkalmazó fejlesztési módszer"
      ],
      "ans": 1,
      "exp": "A cloud-native alkalmazások eleve a felhő sajátságaira épülnek: konténerizált mikroszervizek, skálázhatóság, rugalmasság – nem egyszerű 'lift and shift'."
    },
    {
      "q": "Mit ír ki a következő Python kód? x = [1, 2, 3]; print(x[1])",
      "opts": [
        "0 érték",
        "1 érték",
        "2 érték",
        "IndexError"
      ],
      "ans": 1,
      "exp": "Python listáknál az indexelés 0-tól indul. x[0]=1, x[1]=2, x[2]=3. Tehát x[1] értéke 2."
    },
    {
      "q": "Melyik HTTP-metódus használható meglévő REST-erőforrás módosítására?",
      "opts": [
        "GET metódus",
        "POST metódus",
        "PUT/PATCH",
        "DELETE metódus"
      ],
      "ans": 2,
      "exp": "A PUT általában teljes cserére, a PATCH részleges módosításra használható."
    },
    {
      "q": "Mi az SDN egyik alapelve?",
      "opts": [
        "Minden switch önállóan dönt",
        "Vezérlés és továbbítás szétválasztása",
        "Csak statikus útvonalak használata",
        "Kizárólag fizikai hálózatok kezelése"
      ],
      "ans": 1,
      "exp": "Az SDN a vezérlési síkot központibb, programozható vezérlőbe helyezi, miközben az eszközök továbbítják a forgalmat."
    },
    {
      "q": "Mire használható a JSON hálózatautomatizálásban?",
      "opts": [
        "Strukturált adatcserére",
        "CSS-stílusok leírására",
        "Kulcscserére IPsec-ben",
        "Fizikai kábelek mérésére"
      ],
      "ans": 0,
      "exp": "A JSON gépileg könnyen feldolgozható, ember számára is olvasható formátum API-válaszokhoz és konfigurációs adatokhoz."
    },
    {
      "q": "Mi az IBN lényege az SDN-hez képest?",
      "opts": [
        "Szándék alapú automatizálás",
        "Kizárólag kézi VLAN-beállítás",
        "Csak fizikai kábelezési terv",
        "Publikus DNS-zóna kezelés"
      ],
      "ans": 0,
      "exp": "Az IBN magasabb szintű üzleti vagy működési szándékból képez le és ellenőriz hálózati konfigurációt."
    },
    {
      "q": "Mit jelent a REST-ben az erőforrás-orientált szemlélet?",
      "opts": [
        "URL-lel azonosított erőforrások kezelése",
        "Helyi fájlok közvetlen olvasása",
        "SSH-porton futó bináris protokoll",
        "Kliensoldali SQL közvetlen futtatása"
      ],
      "ans": 0,
      "exp": "REST-ben az erőforrásokat URL-ek azonosítják, és HTTP-metódusokkal végzünk rajtuk műveleteket."
    },
    {
      "q": "Mit jelent a 404-es HTTP státuszkód?",
      "opts": [
        "A kért erőforrás nem található",
        "Sikeres létrehozás történt",
        "A kérés feldolgozása folyamatban",
        "A kliensnek másik protokoll kell"
      ],
      "ans": 0,
      "exp": "A 404 Not Found azt jelzi, hogy a szerver elérhető, de a kért erőforrás nincs meg az adott címen."
    },
    {
      "q": "Melyik Python adattípus kulcs-érték párokat tárol?",
      "opts": [
        "dict",
        "list",
        "tuple",
        "set"
      ],
      "ans": 0,
      "exp": "A dict kulcs-érték párokat tárol, például {'nev':'Anna','pont':82}."
    },
    {
      "q": "Mire való az API-token használata?",
      "opts": [
        "Kliens vagy kérés hitelesítésére",
        "Router interfész sebességének mérésére",
        "Python lista rendezésére",
        "HTML oldal betűtípusának cseréjére"
      ],
      "ans": 0,
      "exp": "Az API-token a kliens jogosultságát igazolja, így az API eldöntheti, engedélyezett-e a kérés."
    },
    {
      "q": "Mi a containerizáció egyik előnye?",
      "opts": [
        "Konzisztens futtatási környezetet ad",
        "Kötelezővé teszi a fizikai szervert",
        "Megszünteti a hálózati címzést",
        "Csak grafikus alkalmazásokhoz jó"
      ],
      "ans": 0,
      "exp": "A konténer az alkalmazást és függőségeit egységes környezetben futtatja, így könnyebb telepíteni és skálázni."
    },
    {
      "q": "Mit ír ki a Python kód: print(3 * 'ab')?",
      "opts": [
        "ababab",
        "6",
        "ab3",
        "Hibát jelez minden esetben"
      ],
      "ans": 0,
      "exp": "Pythonban a szöveg szorzása ismétlést jelent, ezért 3 * 'ab' eredménye 'ababab'."
    },
    {
      "q": "Mit jelent REST API esetén a 201-es HTTP státuszkód?",
      "opts": [
        "Erőforrás létrejött",
        "Nincs jogosultság",
        "Szerver nem található",
        "Kérés hibás formátumú"
      ],
      "ans": 0,
      "exp": "A 201 Created általában sikeres létrehozást jelez."
    },
    {
      "q": "Mikor megfelelő a 204-es HTTP válasz?",
      "opts": [
        "Siker, választest nélkül",
        "Átirányítás másik URL-re",
        "Hitelesítés szükséges",
        "Szerveroldali hiba történt"
      ],
      "ans": 0,
      "exp": "A 204 No Content sikeres műveletet jelez választest nélkül."
    },
    {
      "q": "Melyik Python adattípus tárol kulcs-érték párokat?",
      "opts": [
        "dict",
        "list",
        "tuple",
        "set"
      ],
      "ans": 0,
      "exp": "A dict kulcs-érték párokat tárol, például konfigurációk vagy JSON-szerű adatok kezeléséhez."
    },
    {
      "q": "Mire szolgál a try-except szerkezet Pythonban?",
      "opts": [
        "Hibák kezelésére",
        "Ciklus gyorsítására",
        "Változó titkosítására",
        "Lista rendezésére"
      ],
      "ans": 0,
      "exp": "A try-except blokkal futás közbeni kivételeket lehet kezelni."
    },
    {
      "q": "Mi az edge computing egyik előnye IoT környezetben?",
      "opts": [
        "Közelebb dolgozza fel az adatot",
        "Megszünteti az IP-címzést",
        "Csak manuális mérést enged",
        "Kizárja a szenzorokat"
      ],
      "ans": 0,
      "exp": "Az edge computing a feldolgozás egy részét az adatforráshoz közel végzi, csökkentve késleltetést és forgalmat."
    },
    {
      "q": "Miért használnak API kulcsot egy szolgáltatás eléréséhez?",
      "opts": [
        "Kliens azonosítására",
        "Kábelhossz mérésére",
        "VLAN tag törlésére",
        "Memória időzítésre"
      ],
      "ans": 0,
      "exp": "Az API kulcs egy kliens vagy alkalmazás azonosítására és jogosultságkezelésére használható."
    },
    {
      "type": "multi",
      "q": "Mely példák tekinthetők valódi Machine-to-Machine kommunikációnak IoT-környezetben?",
      "opts": [
        "Okoshűtő rendelési üzenetet küld egy bolti szervernek",
        "Szenzor automatikusan adatot küld egy vezérlőegységnek",
        "Felhasználó kézzel megnyitja a kamera élőképét",
        "Ügyfél elolvassa a webshop e-mail értesítését"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "M2M esetén gépek kommunikálnak egymással emberi beavatkozás nélkül vagy minimális emberi szereppel."
    },
    {
      "type": "match",
      "q": "Párosítsd a REST műveletet a tipikus céljával!",
      "pairs": [
        [
          "GET",
          "Erőforrás lekérdezése"
        ],
        [
          "POST",
          "Új erőforrás létrehozása"
        ],
        [
          "PUT vagy PATCH",
          "Meglévő erőforrás módosítása"
        ],
        [
          "DELETE",
          "Erőforrás törlése"
        ]
      ],
      "exp": "REST-ben a GET olvas, a POST létrehoz, a PUT/PATCH módosít, a DELETE töröl."
    },
    {
      "q": "Melyik protokollt választanád kis erőforrású IoT-eszközök publish-subscribe üzenetküldéséhez?",
      "opts": [
        "MQTT",
        "SMTP",
        "Telnet",
        "FTP"
      ],
      "ans": 0,
      "exp": "Az MQTT könnyű, publish-subscribe jellegű üzenetküldésre készült, ezért gyakori IoT-környezetben."
    },
    {
      "type": "match",
      "q": "Párosítsd a webes API fogalmakat a jelentésükkel!",
      "pairs": [
        [
          "Endpoint",
          "Egy API elérési pontja"
        ],
        [
          "JSON",
          "Gyakori adatcsere-formátum"
        ],
        [
          "Status code",
          "A válasz eredményét jelző kód"
        ],
        [
          "Token",
          "Hozzáférést igazoló azonosító"
        ]
      ],
      "exp": "Az endpoint az elérési út, a JSON adatcsere-formátum, a státuszkód a válasz állapota, a token hozzáférési azonosító."
    }
  ],
  "Relációs adatbázisok, irodai szoftverek": [
    {
      "q": "Melyik SQL utasítással szúrható be új sor egy táblába?",
      "opts": [
        "UPDATE tabla SET mezo=ertek",
        "INSERT INTO tabla VALUES (...)",
        "ALTER TABLE tabla ADD mezo",
        "CREATE TABLE tabla (...)"
      ],
      "ans": 1,
      "exp": "Az INSERT INTO szúr be új sort: INSERT INTO tabla (mezo1, mezo2) VALUES (ertek1, ertek2). Az UPDATE meglévő sorokat módosít."
    },
    {
      "q": "Mit csinál a GROUP BY ... HAVING szerkezet?",
      "opts": [
        "Eltávolítja az ismétlődő rekordokat a táblából",
        "Csoportosít, összesít; HAVING szűri a csoportokat",
        "Csak egyedi értékeket jelenít meg (mint a DISTINCT)",
        "Az eredményhalmaz rendezési sorrendjét állítja be"
      ],
      "ans": 1,
      "exp": "GROUP BY csoportosítja a sorokat egy mező szerint, a HAVING pedig az összesített csoportokra szűr (pl. WHERE-hez hasonló, de összesített értékekre – AVG, SUM stb.)."
    },
    {
      "q": "Melyik SQL parancs változtatja meg egy meglévő tábla szerkezetét?",
      "opts": [
        "MODIFY TABLE",
        "UPDATE TABLE",
        "ALTER TABLE",
        "CHANGE TABLE"
      ],
      "ans": 2,
      "exp": "Az ALTER TABLE módosítja a tábla szerkezetét: ALTER TABLE tabla ADD uj_mezo INT; – oszlop hozzáadásához, módosításához vagy törlési."
    },
    {
      "q": "Mit okoz a funkcionális függőségek miatti redundancia egy adatbázisban?",
      "opts": [
        "Gyorsabb SQL-lekérdezési sebességet a táblákon",
        "Kisebb lemezterület-felhasználást az adatbázisban",
        "Módosítási, törlési és beszúrási anomáliákat a táblában",
        "Erősebb adatvédelmet és titkosított tárolást"
      ],
      "ans": 2,
      "exp": "A normalizálatlan adatbázisban redundáns adatok jelennek meg, amelyek módosítási (egy helyen frissítünk, máshol nem), törlési és beszúrási anomáliákat okoznak."
    },
    {
      "q": "Mire való a táblák közötti FOREIGN KEY (külső kulcs)?",
      "opts": [
        "Egyedi, automatikusan növekvő azonosítót generál minden sorhoz",
        "Csak a hivatkozott táblában létező értéket enged a mezőbe",
        "Indexként automatikusan gyorsítja az összes keresési lekérdezést",
        "Az adott oszlop értékeit szimmetrikus kulccsal titkosítja"
      ],
      "ans": 1,
      "exp": "A FOREIGN KEY egy másik tábla PRIMARY KEY-jére hivatkozik – biztosítja, hogy a hivatkozott érték létezzen, megakadályozva az árva rekordokat."
    },
    {
      "q": "Melyik SQL lekérdezés listázza a 'termekek' táblából az 5000 Ft fölötti árú termékeket?",
      "opts": [
        "SELECT * FROM termekek HAVING ar > 5000",
        "SELECT * FROM termekek WHERE ar > 5000",
        "SELECT ar FROM termekek LIMIT 5000",
        "UPDATE termekek SET ar > 5000"
      ],
      "ans": 1,
      "exp": "A WHERE feltétel sorok szűrésére való lekérdezésekben: SELECT * FROM termekek WHERE ar > 5000 visszaadja az összes 5000 Ft fölötti árú terméket."
    },
    {
      "q": "Mire való a Microsoft Excel VLOOKUP (FKERES) függvénye?",
      "opts": [
        "Egy tartomány sorait automatikusan növekvő sorrendbe rendezi",
        "Az első oszlopban keres, visszaadja a megfelelő sor adott celláját",
        "Két különböző táblázat tartalmát egyetlen táblába olvasztja",
        "Szöveges formátumban tárolt számokat valódi számmá konvertálja"
      ],
      "ans": 1,
      "exp": "A VLOOKUP (FKERES) egy lookup táblában keres értéket az első oszlopban, és visszaadja az ugyanazon sor egy megadott oszlopának értékét – pl. termékkód → ár."
    },
    {
      "q": "Mi a PRIMARY KEY fő szerepe?",
      "opts": [
        "Egy sor egyedi azonosítása a táblában",
        "Tábla automatikus biztonsági mentése",
        "Lekérdezések grafikus megjelenítése",
        "Szöveges mezők titkosítása"
      ],
      "ans": 0,
      "exp": "A primary key egyedileg azonosítja a rekordokat, és nem lehet duplikált vagy üres azonosító."
    },
    {
      "q": "Mire való az SQL JOIN?",
      "opts": [
        "Táblák összekapcsolására közös mező alapján",
        "Adatbázis teljes törlésére",
        "Mezők karakterkódolásának cseréjére",
        "Excel cellák színezésére"
      ],
      "ans": 0,
      "exp": "A JOIN kapcsolt táblák rekordjait hozza össze, például rendelés és ügyfél adatait ügyfélazonosító alapján."
    },
    {
      "q": "Mi a normalizálás célja?",
      "opts": [
        "Redundancia és anomáliák csökkentése",
        "Indexek teljes tiltása",
        "Minden adat egy mezőbe vonása",
        "Táblanevek automatikus fordítása"
      ],
      "ans": 0,
      "exp": "A normalizálás logikus táblákra bontja az adatokat, hogy kevesebb legyen az ismétlés és az inkonzisztencia."
    },
    {
      "q": "Melyik SQL záradék rendezi az eredményt?",
      "opts": [
        "ORDER BY",
        "GROUP BY",
        "WHERE",
        "INSERT INTO"
      ],
      "ans": 0,
      "exp": "Az ORDER BY rendezi a lekérdezés eredményét növekvő vagy csökkenő sorrendbe."
    },
    {
      "q": "Mire való a COUNT függvény SQL-ben?",
      "opts": [
        "Sorok számának meghatározására",
        "Táblák átnevezésére",
        "Oszlopok titkosítására",
        "Jogosultságok visszavonására"
      ],
      "ans": 0,
      "exp": "A COUNT megszámolja a sorokat vagy nem NULL értékeket egy lekérdezés eredményében."
    },
    {
      "q": "Excelben mit jelent az abszolút hivatkozás?",
      "opts": [
        "A cellacím másoláskor nem változik",
        "A képlet csak szöveget ad vissza",
        "A munkalap automatikusan zárolt",
        "A diagram tengelye fix méretű"
      ],
      "ans": 0,
      "exp": "Az abszolút hivatkozás például $A$1 formában rögzíti az oszlopot és sort másoláskor."
    },
    {
      "q": "Mi az elsődleges kulcs fő szerepe egy táblában?",
      "opts": [
        "Sorok egyedi azonosítása",
        "Táblázat színezése",
        "Lekérdezések titkosítása",
        "Fájlméret csökkentése"
      ],
      "ans": 0,
      "exp": "Az elsődleges kulcs egyértelműen azonosítja a tábla rekordjait."
    },
    {
      "q": "Mire használható az INNER JOIN?",
      "opts": [
        "Egyező sorok összekapcsolására",
        "Táblák végleges törlésére",
        "Oszlopok titkosítására",
        "Adatbázis tömörítésére"
      ],
      "ans": 0,
      "exp": "Az INNER JOIN csak azokat a sorokat adja vissza, ahol a kapcsolódási feltétel teljesül."
    },
    {
      "q": "Mit eredményez egy LEFT JOIN?",
      "opts": [
        "Bal oldali tábla sorait megtartja",
        "Csak hibás rekordokat ad vissza",
        "Minden indexet töröl",
        "Kizárólag rendezést végez"
      ],
      "ans": 0,
      "exp": "LEFT JOIN esetén a bal oldali tábla sorai akkor is megmaradnak, ha nincs párjuk a jobb oldalon."
    },
    {
      "q": "Mire használható az SQL LIKE operátor?",
      "opts": [
        "Mintás szövegkeresésre",
        "Táblák összefésülésére",
        "Kulcsok létrehozására",
        "Tranzakció lezárására"
      ],
      "ans": 0,
      "exp": "A LIKE szövegminták keresésére használható, például % helyettesítő karakterrel."
    },
    {
      "q": "Mit jelent Excelben a $A$1 hivatkozás?",
      "opts": [
        "Abszolút cellahivatkozás",
        "Relatív sorhivatkozás",
        "Külső fájlhivatkozás",
        "Érvénytelen képlet"
      ],
      "ans": 0,
      "exp": "A dollárjelek rögzítik az oszlopot és a sort másolás közben."
    },
    {
      "q": "Mi a normalizálás egyik célja adatbázis-tervezésben?",
      "opts": [
        "Redundancia csökkentése",
        "Színek egységesítése",
        "Fájlok titkosítása",
        "Mentések gyorsítása"
      ],
      "ans": 0,
      "exp": "A normalizálás csökkenti az ismétlődő adatokat és az anomáliák esélyét."
    },
    {
      "q": "Melyik SQL utasítás módosítja egy tábla meglévő rekordjainak mezőértékét?",
      "opts": [
        "UPDATE ... SET ... WHERE ...",
        "SELECT ... FROM ... WHERE ...",
        "INSERT INTO ... VALUES ...",
        "CREATE TABLE ... PRIMARY KEY ..."
      ],
      "ans": 0,
      "exp": "Meglévő rekordok módosítására az UPDATE utasítás szolgál, megfelelő SET és WHERE résszel."
    },
    {
      "type": "match",
      "q": "Párosítsd az SQL utasításokat a tipikus feladatukkal!",
      "pairs": [
        [
          "SELECT",
          "Adatok lekérdezése"
        ],
        [
          "INSERT",
          "Új rekord beszúrása"
        ],
        [
          "UPDATE",
          "Meglévő rekord módosítása"
        ],
        [
          "DELETE",
          "Rekord törlése"
        ]
      ],
      "exp": "A SELECT lekérdez, az INSERT beszúr, az UPDATE módosít, a DELETE töröl."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak egy jól használt relációs adatbázisban?",
      "opts": [
        "Az elsődleges kulcs egyedileg azonosítja a rekordot",
        "Az idegen kulcs kapcsolatot teremthet két tábla között",
        "A WHERE feltétel mindig új táblát hoz létre",
        "A SELECT utasítás csak rekord törlésére használható"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Az elsődleges kulcs azonosít, az idegen kulcs kapcsolatot jelöl. A WHERE szűr, a SELECT lekérdez."
    }
  ],
  "Informatikai eszközök, OS telepítés": [
    {
      "q": "Mi a BIOS/UEFI feladata az indítási folyamatban?",
      "opts": [
        "A grafikus felhasználói felület betöltése",
        "Hardver-önteszt (POST) és a boot-eszköz meghatározása",
        "Az operációs rendszer hálózati kapcsolatainak kezelése",
        "Valós idejű vírusvizsgálat futtatása induláskor"
      ],
      "ans": 1,
      "exp": "A BIOS/UEFI inicializálja a hardvereket (POST – Power On Self Test), beállítja a boot-sorrendet, majd átadja a vezérlést a kiválasztott eszköz betöltőjének."
    },
    {
      "q": "Mi a CMOS-elem feladata az alaplapon?",
      "opts": [
        "A CPU feszültségellátásának fenntartása sleep módban",
        "A BIOS-beállítások és a rendszeróra tárolása kikapcsva",
        "A dedikált videómemória (VRAM) feszültségellátása",
        "Egybites memóriahibák automatikus detektálása és javítása"
      ],
      "ans": 1,
      "exp": "A kis gombelem (CR2032) feszültséggel látja el a CMOS chipet, így az óra és a BIOS-beállítások megmaradnak akkor is, ha a számítógép nincs áram alatt."
    },
    {
      "q": "Melyik RAID-szint igényel legalább három lemezt és használ paritást?",
      "opts": [
        "RAID 0",
        "RAID 1",
        "RAID 5",
        "RAID 10"
      ],
      "ans": 2,
      "exp": "A RAID 5 legalább három lemezt használ, és elosztott paritással egy lemez kiesését még elviseli."
    },
    {
      "q": "Melyik fájlrendszer támogat nagy fájlokat és ACL-alapú jogosultságokat?",
      "opts": [
        "FAT16",
        "FAT32",
        "exFAT",
        "NTFS"
      ],
      "ans": 3,
      "exp": "Windows környezetben az NTFS támogatja a jogosultságokat, naplózást és a 4 GB-nál nagyobb fájlokat."
    },
    {
      "q": "Mi az ESD-védelem célja a számítógép szerelésekor?",
      "opts": [
        "CPU és GPU hővezető rétege a túlhevülés ellen",
        "Statikus kisülés miatti alkatrész-sérülés megelőzése",
        "A BIOS chipet védi feszültségingadozástól",
        "RAM hibás szektorok javítása indításkor"
      ],
      "ans": 1,
      "exp": "Az ESD (elektrosztatikus kisülés) másodpercek alatt tönkreteheti az alkatrészeket. Csuklópánt és antisztatikus alátét használatával megelőzhető."
    },
    {
      "q": "Melyik memóriatípus jellemző a CPU gyorsítótárára?",
      "opts": [
        "DRAM",
        "SRAM",
        "NVRAM",
        "VRAM"
      ],
      "ans": 1,
      "exp": "A CPU cache jellemzően SRAM, mert nagyon gyors, bár drágább és kisebb kapacitású."
    },
    {
      "q": "Melyik eszköz véd áramszünet esetén, lehetővé téve az adatok mentését?",
      "opts": [
        "Surge protector (túlfeszültségvédő)",
        "UPS (szünetmentes tápegység)",
        "PDU (tápellátó elosztó)",
        "AVR (automata feszültségszabályozó)"
      ],
      "ans": 1,
      "exp": "Az UPS (Uninterruptible Power Supply) akkumulátorból biztosít áramot kieséskor – az adatok menthetők és a rendszer szabályosan leállítható."
    },
    {
      "q": "Mi a T568B kábel-bekötés helyes sorrendje?",
      "opts": [
        "Fehér-zöld, Zöld, Fehér-narancs, Kék, Fehér-kék, Narancs, Fehér-barna, Barna",
        "Fehér-narancs, Narancs, Fehér-zöld, Kék, Fehér-kék, Zöld, Fehér-barna, Barna",
        "Fehér-kék, Kék, Fehér-narancs, Narancs, Fehér-zöld, Zöld, Fehér-barna, Barna",
        "Fehér-barna, Barna, Fehér-zöld, Kék, Fehér-kék, Zöld, Fehér-narancs, Narancs"
      ],
      "ans": 1,
      "exp": "T568B: 1-Fehér/Narancs, 2-Narancs, 3-Fehér/Zöld, 4-Kék, 5-Fehér/Kék, 6-Zöld, 7-Fehér/Barna, 8-Barna."
    },
    {
      "q": "Mi a különbség HDD és SSD között?",
      "opts": [
        "Az SSD mozgó alkatrész nélkül tárol adatot",
        "A HDD csak operációs rendszert indíthat",
        "Az SSD mindig optikai lemezt használ",
        "A HDD nem használ fájlrendszert"
      ],
      "ans": 0,
      "exp": "Az SSD flashmemóriát használ, ezért gyorsabb és ellenállóbb lehet, míg a HDD forgó mágneses lemezekkel dolgozik."
    },
    {
      "q": "Mire való a GPT partíciós tábla?",
      "opts": [
        "Modern lemezpartíciók kezelésére UEFI mellett",
        "RAM-modulok időzítésének beállítására",
        "CPU-hűtő automatikus szabályzására",
        "BIOS-jelszavak visszaállítására"
      ],
      "ans": 0,
      "exp": "A GPT az MBR modern utódja, nagy lemezeket és több partíciót támogat, UEFI rendszereknél jellemző."
    },
    {
      "q": "Mi a Secure Boot célja?",
      "opts": [
        "Csak megbízható bootkód indításának engedése",
        "Felhasználói fájlok tömörítése",
        "Minden hálózati port lezárása",
        "RAM-teszt futtatása minden órában"
      ],
      "ans": 0,
      "exp": "A Secure Boot ellenőrzi a bootloaderek aláírását, így csökkenti a bootkit jellegű kártevők esélyét."
    },
    {
      "q": "Melyik komponens látja el árammal a PC alkatrészeit?",
      "opts": [
        "Tápegység",
        "Chipset",
        "Hűtőborda",
        "Optikai meghajtó"
      ],
      "ans": 0,
      "exp": "A tápegység alakítja át és osztja szét a megfelelő feszültségeket az alaplap, CPU, GPU és meghajtók felé."
    },
    {
      "q": "Mire való a memtest jellegű vizsgálat?",
      "opts": [
        "RAM-hibák keresésére",
        "DNS-rekordok listázására",
        "Partíciók titkosítására",
        "HTTP státuszkódok mérésére"
      ],
      "ans": 0,
      "exp": "Memóriatesztet instabilitás, kékhalál vagy véletlen hibák esetén érdemes futtatni a RAM ellenőrzésére."
    },
    {
      "q": "Miért fontos a megfelelő boot-sorrend?",
      "opts": [
        "Meghatározza, mely eszközről indul a rendszer",
        "Beállítja az IP-címet a routeren",
        "Kiosztja a fájlmegosztási jogokat",
        "Megváltoztatja a kijelző felbontását"
      ],
      "ans": 0,
      "exp": "A boot-sorrend dönti el, hogy a gép SSD-ről, USB-ről, hálózatról vagy más eszközről próbáljon indulni."
    },
    {
      "q": "RAID 6 esetén mi a minimális lemezszám?",
      "opts": [
        "4 lemez",
        "2 lemez",
        "3 lemez",
        "6 lemez"
      ],
      "ans": 0,
      "exp": "A RAID 6 kettős paritást használ, ezért legalább négy lemez szükséges."
    },
    {
      "q": "Mire szolgál a Secure Boot UEFI rendszerben?",
      "opts": [
        "Bootkód hitelességét ellenőrzi",
        "Ventilátor sebességet állít",
        "Partíciókat tömörít",
        "USB portokat bővít"
      ],
      "ans": 0,
      "exp": "A Secure Boot csak megbízható aláírású bootkomponenseket enged indítani."
    },
    {
      "q": "Melyik memóriafunkció jellemző szerverekben ECC RAM esetén?",
      "opts": [
        "Hibajavító működés",
        "Grafikus gyorsítás",
        "Firmware frissítés",
        "Hangfeldolgozás"
      ],
      "ans": 0,
      "exp": "Az ECC memória bizonyos memóriahibákat képes felismerni és javítani."
    },
    {
      "q": "Mire utal az LGA vagy PGA rövidítés hardvereknél?",
      "opts": [
        "Processzorfoglalat típusára",
        "Merevlemez fájlrendszerére",
        "Monitor paneltechnológiára",
        "Tápegység hatásfokára"
      ],
      "ans": 0,
      "exp": "Az LGA és PGA processzorfoglalat-kialakításokat jelöl."
    },
    {
      "q": "Melyik csatlakozó adja az alaplap fő tápellátását ATX gépben?",
      "opts": [
        "20 vagy 24 tűs csatlakozó",
        "SATA adatcsatlakozó",
        "HDMI videócsatlakozó",
        "RJ45 hálózati aljzat"
      ],
      "ans": 0,
      "exp": "Az ATX alaplap fő tápellátása jellemzően 20 vagy 24 tűs tápcsatlakozón érkezik."
    },
    {
      "q": "Miért fontos OS telepítés előtt a boot sorrend beállítása?",
      "opts": [
        "Telepítőeszköz indításához",
        "Felhasználók létrehozásához",
        "DNS rekord frissítéséhez",
        "RAM időzítés javításához"
      ],
      "ans": 0,
      "exp": "A gépnek a telepítő adathordozóról kell indulnia, ehhez a boot sorrendet megfelelően kell beállítani."
    },
    {
      "type": "match",
      "q": "Párosítsd a laptop portját a hozzá jellemzően csatlakozó eszközzel!",
      "pairs": [
        [
          "VGA",
          "Régebbi monitor vagy projektor"
        ],
        [
          "RJ-45",
          "Vezetékes hálózati kapcsolat"
        ],
        [
          "USB-C",
          "Külső SSD vagy dokkoló"
        ],
        [
          "Audio jack",
          "Fülhallgató vagy headset"
        ]
      ],
      "exp": "A VGA videó, az RJ-45 hálózat, az USB-C adat/táp/dokkoló, az audio jack hangcsatlakozásra használható."
    },
    {
      "type": "multi",
      "q": "Mely előkészületek indokoltak operációs rendszer telepítése előtt?",
      "opts": [
        "Boot sorrend és telepítő adathordozó ellenőrzése",
        "Fontos adatok biztonsági mentése",
        "Processzor foglalatának átforrasztása",
        "Monitor kábelének kategóriára minősítése"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Telepítés előtt ellenőrizni kell a bootolást és menteni az adatokat; hardveres szétszedés általában nem része a folyamatnak."
    },
    {
      "q": "Miért nem ajánlott hagyományos töredezettségmentesítést futtatni SSD-n?",
      "opts": [
        "Felesleges írási terhelést okozhat a meghajtón",
        "Megszünteti a TRIM parancs működését minden gépen",
        "Átalakítja a fájlrendszert csak olvashatóvá",
        "Kikapcsolja az UEFI indítási lehetőséget"
      ],
      "ans": 0,
      "exp": "SSD-nél nincs forgó lemez és fejmozgás, a defragmentálás inkább felesleges írást okozhat."
    }
  ],
  "Alkalmazás-üzemeltetés": [
    {
      "q": "Melyik Windows Server szerepkör használható vállalati frissítéskezelésre?",
      "opts": [
        "IIS",
        "WDS",
        "WSUS",
        "Hyper-V"
      ],
      "ans": 2,
      "exp": "A WSUS központi frissítéskezelést biztosít Windows-környezetben."
    },
    {
      "q": "Mi a GPO (Group Policy Object) célja Active Directory-ban?",
      "opts": [
        "Hálózati csomagok ACL-alapú szűrése routereken",
        "AD-ban felhasználói és gépi beállítások központi kezelése",
        "Merevlemezek és SSD-k logikai particionálása, formázása",
        "Adatbázis-szerverek ütemezett biztonsági mentése"
      ],
      "ans": 1,
      "exp": "A GPO az AD házirendobjektuma: jelszópolitika, asztal háttér, szoftvertelepítés, script-futtatás stb. mind centrálisan kezelhető belőle."
    },
    {
      "q": "Melyik Linux-parancs ütemezi egy szkript ismétlődő futtatását?",
      "opts": [
        "at",
        "crontab",
        "systemctl",
        "nohup"
      ],
      "ans": 1,
      "exp": "A crontab ütemezhető feladatokat kezel. A 'crontab -e' szerkeszti, a 'crontab -l' listázza. Formátum: perc óra nap hónap nap-hét parancs."
    },
    {
      "q": "Mi az Apache webszerver konfigurációs főfájljának Debian/Ubuntu helye?",
      "opts": [
        "/etc/nginx/nginx.conf",
        "/etc/apache2/apache2.conf",
        "/usr/apache2/conf/httpd.conf",
        "/var/www/html/apache.conf"
      ],
      "ans": 1,
      "exp": "Debian/Ubuntu rendszeren az Apache2 főkonfigurációs fájlja: /etc/apache2/apache2.conf. Red Hat/CentOS-on: /etc/httpd/conf/httpd.conf."
    },
    {
      "q": "Melyik Linux-parancs ad root jogosultságot egyetlen parancs végrehajtásához?",
      "opts": [
        "su root",
        "admin",
        "sudo",
        "runas /user:root"
      ],
      "ans": 2,
      "exp": "A 'sudo' (superuser do) az /etc/sudoers fájl alapján engedélyezi root-ként futtatni egy parancsot az aktuális felhasználó jelszavával, átmeneti jogkiterjesztéssel."
    },
    {
      "q": "Melyik mentéstípus menti az utolsó teljes mentés óta változott fájlokat?",
      "opts": [
        "Növekményes",
        "Különbségi",
        "Teljes",
        "Napi"
      ],
      "ans": 1,
      "exp": "A különbségi mentés mindig az utolsó teljes mentés óta módosult adatokat menti."
    },
    {
      "q": "Hol tárolja az IIS a 'Default Website' tartalmát Windows Serveren alapértelmezés szerint?",
      "opts": [
        "C:\inetpub\wwwroot",
        "C:\Program Files\IIS\www",
        "C:\Windows\System32\www",
        "C:\inetpub\ftproot"
      ],
      "ans": 0,
      "exp": "Az IIS alapértelmezett webhelye a C:\inetpub\wwwroot mappában van. Ez a DocumentRoot, innen szolgálja ki a webtartalmat."
    },
    {
      "q": "Melyik PowerShell parancs hoz létre új Active Directory felhasználót?",
      "opts": [
        "Add-LocalUser",
        "New-User",
        "New-ADUser",
        "Create-ADUser"
      ],
      "ans": 2,
      "exp": "A 'New-ADUser' a helyes PowerShell parancs AD-felhasználó létrehozásához. Pl.: New-ADUser -Name 'Kis Béla' -SamAccountName 'kbela'"
    },
    {
      "q": "Mi a szolgáltatás újraindításának Linux parancsa systemd alatt?",
      "opts": [
        "systemctl restart szolgáltatás",
        "service-list reload all",
        "daemon start-once szolgáltatás",
        "runlevel reset szolgáltatás"
      ],
      "ans": 0,
      "exp": "Systemd rendszereken a systemctl restart szolgáltatás újraindítja az adott démont vagy szolgáltatást."
    },
    {
      "q": "Mire való a naplófájl üzemeltetés közben?",
      "opts": [
        "Események és hibák utólagos vizsgálatára",
        "Felhasználói jelszavak nyílt tárolására",
        "Lemezpartíciók automatikus bővítésére",
        "Licencek jogi ellenőrzésére"
      ],
      "ans": 0,
      "exp": "A logok segítenek hibák, bejelentkezések, konfigurációváltozások és szolgáltatásleállások visszakeresésében."
    },
    {
      "q": "Mi a staging környezet szerepe?",
      "opts": [
        "Élesítés előtti tesztelés valószerű beállításokkal",
        "Felhasználói gépek végleges törlése",
        "Biztonsági mentések offline tárolása",
        "Nyomtatók automatikus telepítése"
      ],
      "ans": 0,
      "exp": "A staging az éles környezethez hasonló tesztkörnyezet, ahol frissítések és változtatások előre ellenőrizhetők."
    },
    {
      "q": "Mire szolgál a rollback terv?",
      "opts": [
        "Sikertelen változtatás gyors visszavonására",
        "Felhasználók jelszavának erősítésére",
        "Új VLAN automatikus létrehozására",
        "CPU-terhelés napi átlagolására"
      ],
      "ans": 0,
      "exp": "Rollback terv nélkül egy hibás frissítés vagy konfigurációváltozás hosszabb szolgáltatáskiesést okozhat."
    },
    {
      "q": "Miért fontos a jogosultsági minimum elve?",
      "opts": [
        "Csak a szükséges jogokat adja meg",
        "Minden felhasználó adminisztrátor lesz",
        "Megszünteti a mentések igényét",
        "Felgyorsítja a DNS-felbontást"
      ],
      "ans": 0,
      "exp": "A least privilege csökkenti a hibás vagy rosszindulatú műveletek kárát, mert a felhasználó csak szükséges jogokat kap."
    },
    {
      "q": "Melyik állítás igaz a teljes mentésre?",
      "opts": [
        "Minden kiválasztott adatot lemásol",
        "Csak az utolsó mentés óta változottat menti",
        "Csak fájlneveket tárol tartalom nélkül",
        "Nem használható visszaállításhoz"
      ],
      "ans": 0,
      "exp": "A teljes mentés minden kijelölt adatot tartalmaz; helyigényesebb, de egyszerűbb visszaállítási alap."
    },
    {
      "q": "Mire szolgál a naplórotáció egy szerveren?",
      "opts": [
        "Logfájlok méretének kezelésére",
        "Jelszavak kiosztására",
        "IP-címek fordítására",
        "VLAN-ok szinkronjára"
      ],
      "ans": 0,
      "exp": "A logrotáció megakadályozza, hogy a naplók korlátlanul nőjenek és betöltsék a tárhelyet."
    },
    {
      "q": "Melyik parancs indít újra egy systemd szolgáltatást Linuxon?",
      "opts": [
        "systemctl restart",
        "service create",
        "cron reload",
        "journalctl start"
      ],
      "ans": 0,
      "exp": "A systemctl restart szolgáltatásnév újraindítja a kiválasztott systemd szolgáltatást."
    },
    {
      "q": "Mi a blue-green deployment célja?",
      "opts": [
        "Kockázatos átállás csökkentése",
        "RAM modulok párosítása",
        "WiFi csatornák kiosztása",
        "SQL indexek törlése"
      ],
      "ans": 0,
      "exp": "Két párhuzamos környezet használatával csökkenthető az élesítés kockázata és gyorsítható a visszaállás."
    },
    {
      "q": "Mire jó a konfigurációs állományok verziókövetése?",
      "opts": [
        "Változások visszakövetésére",
        "Tárhely fizikai növelésére",
        "CPU órajel emelésére",
        "Monitor fényerő állítására"
      ],
      "ans": 0,
      "exp": "A verziókövetés segít megtalálni, mikor és miért változott egy beállítás."
    },
    {
      "q": "Miért használnak környezeti változókat alkalmazáskonfigurációban?",
      "opts": [
        "Telepítési környezet elválasztására",
        "Fizikai port lezárására",
        "Képernyőfelbontás mérésére",
        "Partíciók formázására"
      ],
      "ans": 0,
      "exp": "Környezeti változókkal külön kezelhető például fejlesztői, teszt és éles konfiguráció."
    },
    {
      "q": "Mi a reverse proxy egyik tipikus szerepe?",
      "opts": [
        "Kérések továbbítása backend felé",
        "RAM modulok tesztelése",
        "DHCP pool kiosztása",
        "RAID paritás számítása"
      ],
      "ans": 0,
      "exp": "Reverse proxy például TLS-terminálást, terheléselosztást vagy backend kiszolgálók elrejtését végezheti."
    },
    {
      "type": "multi",
      "q": "Mely lépések segítik egy frissítés után hibásan működő alkalmazás üzemeltetői kezelését?",
      "opts": [
        "Naplók és változáslista áttekintése",
        "Visszaállási lehetőség előkészítése",
        "Minden mentés azonnali törlése",
        "Felhasználói jogosultságok véletlenszerű módosítása"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Frissítés utáni hibánál a naplók, változások és rollback lehetőség ellenőrzése szakmailag indokolt."
    },
    {
      "type": "match",
      "q": "Párosítsd az üzemeltetési fogalmat a szerepével!",
      "pairs": [
        [
          "Rollback",
          "Visszaállás korábbi működő állapotra"
        ],
        [
          "Patch",
          "Hibajavító vagy biztonsági frissítés"
        ],
        [
          "Log",
          "Események és hibák rögzített naplója"
        ],
        [
          "Backup",
          "Adatok mentett másolata helyreállításhoz"
        ]
      ],
      "exp": "A rollback visszaállás, a patch javítás, a log napló, a backup mentés."
    },
    {
      "q": "Miért fontos a konfigurációk verziózott mentése alkalmazásüzemeltetésnél?",
      "opts": [
        "Visszakereshetővé és visszaállíthatóvá teszi a módosításokat",
        "Megakadályozza minden hálózati késleltetés kialakulását",
        "Kiváltja a jogosultságkezelést a teljes rendszeren",
        "Automatikusan növeli a szerver fizikai memóriáját"
      ],
      "ans": 0,
      "exp": "Verziózott konfigurációval látható, mi változott, és hibás módosítás esetén vissza lehet térni egy korábbi állapotra."
    }
  ],
  "IPv4 és IPv6 címzés": [
    {
      "q": "Hány használható hoszt-cím van egy /27 prefixű alhálózatban?",
      "opts": [
        "28 hoszt",
        "30 hoszt",
        "32 hoszt",
        "62 hoszt"
      ],
      "ans": 1,
      "exp": "/27 esetén 5 host bit marad: 2⁵−2 = 30 hoszt. A kivont 2: hálózati cím (.0) és broadcast (.31). Összesen 32 cím, ebből 30 kiosztható."
    },
    {
      "q": "Mi a broadcast cím a 192.168.10.64/26 hálózatban?",
      "opts": [
        "192.168.10.65",
        "192.168.10.95",
        "192.168.10.127",
        "192.168.10.255"
      ],
      "ans": 2,
      "exp": "/26 blokk mérete 64. Hálózat: .64, a következő hálózat: .128, tehát broadcast: 192.168.10.127. Hoszt tartomány: .65–.126."
    },
    {
      "q": "Melyik IPv4-cím tartomány jelöli a privát /12-es osztályt?",
      "opts": [
        "10.0.0.0/8",
        "172.16.0.0/12",
        "192.168.0.0/16",
        "169.254.0.0/16"
      ],
      "ans": 1,
      "exp": "A 172.16.0.0/12 (maszk: 255.240.0.0) az RFC 1918 szerinti privát tartomány. A 10.0.0.0/8 és 192.168.0.0/16 szintén privát, de más maszkkal."
    },
    {
      "q": "Hány /26-os alhálózat hozható létre egyetlen /24-es hálózatból?",
      "opts": [
        "2 alhálózat",
        "4 alhálózat",
        "8 alhálózat",
        "16 alhálózat"
      ],
      "ans": 1,
      "exp": "/24-ről /26-ra 2 bitet kölcsönzünk a host részből: 2²=4 alhálózat. Mindegyik /26-ban 62 hoszt-cím van."
    },
    {
      "q": "Melyik IPv6-cím típus automatikusan konfigurálódik minden interfészen és csak lokálisan érvényes?",
      "opts": [
        "Global Unicast (2000::/3)",
        "Unique Local (fc00::/7)",
        "Link-local (fe80::/10)",
        "Loopback (::1)"
      ],
      "ans": 2,
      "exp": "A link-local cím (fe80::/10) automatikusan generálódik minden IPv6-interfészen. Csak a helyi szegmensen érvényes – routereken nem irányítható tovább."
    },
    {
      "q": "Mi igaz az IPv6 broadcast kezelésére?",
      "opts": [
        "Változatlanul használ broadcastot",
        "Multicastot használ helyette",
        "Csak unicast címzése van",
        "A DNS végzi a broadcastot"
      ],
      "ans": 1,
      "exp": "IPv6-ban nincs klasszikus broadcast; helyette multicast és anycast mechanizmusok használhatók."
    },
    {
      "q": "Mit jelent a VLSM?",
      "opts": [
        "Fix hosszú alhálózati maszk",
        "Változó hosszú alhálózati maszk",
        "Virtuális LAN címleképezés",
        "Ellenőrzött útvonalmetrika"
      ],
      "ans": 1,
      "exp": "A VLSM változó hosszú alhálózati maszkot jelent, amellyel eltérő méretű alhálózatok alakíthatók ki."
    },
    {
      "q": "Melyik cím az IPv4 loopback?",
      "opts": [
        "0.0.0.0",
        "10.0.0.1",
        "127.0.0.1",
        "192.168.0.1"
      ],
      "ans": 2,
      "exp": "A 127.0.0.1 a loopback cím – a gép saját magát éri el rajta, valódi hálózati forgalom nélkül. Tesztelésre és helyi kommunikációra használatos."
    },
    {
      "q": "Mi a /24 prefix hagyományos IPv4 maszkja?",
      "opts": [
        "255.255.255.0",
        "255.255.0.0",
        "255.255.255.128",
        "255.255.255.252"
      ],
      "ans": 0,
      "exp": "A /24 azt jelenti, hogy az első 24 bit hálózati rész, ennek decimális maszkja 255.255.255.0."
    },
    {
      "q": "Melyik IPv4-cím APIPA tartományú?",
      "opts": [
        "169.254.10.20",
        "172.20.5.4",
        "192.168.1.10",
        "10.0.0.8"
      ],
      "ans": 0,
      "exp": "Az APIPA 169.254.0.0/16 tartományból ad címet, ha a DHCP-kiszolgáló nem érhető el."
    },
    {
      "q": "Mit jelöl az IPv6 ::1 cím?",
      "opts": [
        "Loopback címet",
        "Link-local multicastot",
        "Globális unicast hálózatot",
        "DHCPv6 szervercímet"
      ],
      "ans": 0,
      "exp": "Az ::1 az IPv6 loopback cím, a helyi gép saját magát éri el vele."
    },
    {
      "q": "Miért hasznos a CIDR jelölés?",
      "opts": [
        "Röviden megadja a prefix hosszát",
        "Automatikusan titkosítja az IP-csomagot",
        "Minden MAC-címet IPv6-ra alakít",
        "Csak osztályos címzést enged"
      ],
      "ans": 0,
      "exp": "A CIDR például /26 formában jelzi a hálózati bitek számát, rugalmasabb, mint a régi osztályos címzés."
    },
    {
      "q": "Mi a hálózati cím szerepe egy alhálózatban?",
      "opts": [
        "Az alhálózat azonosítása, nem hosztcím",
        "Első DHCP-kliens automatikus címe",
        "Mindig a router WAN-címe",
        "Broadcast helyettesítése IPv6-ban"
      ],
      "ans": 0,
      "exp": "A hálózati cím az alhálózatot jelöli, ezért IPv4-ben nem osztható ki végállomásnak."
    },
    {
      "q": "Mit jelöl a default gateway címe egy hoszton?",
      "opts": [
        "A kivezető router interfészét",
        "A DNS-szerver domainnevét",
        "A switch MAC-címét",
        "A kliens véletlen portját"
      ],
      "ans": 0,
      "exp": "A default gateway az az útválasztó-interfész, amely felé a hoszt a helyi hálózaton kívüli forgalmat küldi."
    },
    {
      "q": "Hány használható cím van egy /28 IPv4 alhálózatban?",
      "opts": [
        "14",
        "16",
        "30",
        "62"
      ],
      "ans": 0,
      "exp": "/28 esetén 4 host bit marad, így 2^4-2, azaz 14 használható cím van."
    },
    {
      "q": "Melyik alhálózati maszk felel meg a /23 prefixnek?",
      "opts": [
        "255.255.254.0",
        "255.255.252.0",
        "255.255.255.0",
        "255.255.248.0"
      ],
      "ans": 0,
      "exp": "A /23 maszk binárisan 23 darab 1-es bitet jelent, decimálisan 255.255.254.0."
    },
    {
      "q": "Mit használ az IPv6 szomszédok felderítésére?",
      "opts": [
        "NDP",
        "ARP",
        "RARP",
        "NetBIOS"
      ],
      "ans": 0,
      "exp": "IPv6-ban az NDP, ICMPv6 alapú mechanizmus váltja ki az ARP szerepét."
    },
    {
      "q": "Melyik IPv6 tartomány jelöli a multicast címeket?",
      "opts": [
        "ff00::/8",
        "fe80::/10",
        "fc00::/7",
        "2000::/3"
      ],
      "ans": 0,
      "exp": "Az IPv6 multicast címek az ff00::/8 tartományba esnek."
    },
    {
      "q": "Mit jelent a SLAAC IPv6 hálózatban?",
      "opts": [
        "Állapot nélküli címképzés",
        "Kézi MAC-cím tiltás",
        "Dinamikus NAT pool",
        "Titkosított DNS-zóna"
      ],
      "ans": 0,
      "exp": "SLAAC esetén a kliens routerhirdetések alapján képezhet IPv6 címet DHCPv6 nélkül is."
    },
    {
      "q": "Mi a 192.168.8.0/22 összefoglaló tartomány egyik jellemzője?",
      "opts": [
        "Négy /24 hálózatot fed",
        "Csak két hostot enged",
        "Publikus IPv6 prefix",
        "Multicast címcsoport"
      ],
      "ans": 0,
      "exp": "A 192.168.8.0/22 a 192.168.8.0-192.168.11.255 tartományt fogja össze."
    },
    {
      "q": "A 192.168.1.0/24 hálózatot legalább 10 azonos méretű alhálózatra kell osztani. Mi a második alhálózat szórási címe?",
      "opts": [
        "192.168.1.31",
        "192.168.1.15",
        "192.168.1.63",
        "192.168.1.127"
      ],
      "ans": 0,
      "exp": "Legalább 10 alhálózathoz /28 kell, 16-os blokkmérettel. A második alhálózat 192.168.1.16-31, szórási címe .31."
    },
    {
      "type": "match",
      "q": "Párosítsd az IPv6 címtípust a jellemző kezdő tartománnyal vagy példával!",
      "pairs": [
        [
          "Loopback",
          "::1"
        ],
        [
          "Link-local",
          "fe80::/10"
        ],
        [
          "Multicast",
          "ff00::/8"
        ],
        [
          "Unique local",
          "fc00::/7"
        ]
      ],
      "exp": "Az IPv6 loopback ::1, a link-local fe80::/10, a multicast ff00::/8, a unique local fc00::/7 tartományból származik."
    },
    {
      "type": "multi",
      "q": "Mely állítások helyesek IPv4 alhálózat-számításnál?",
      "opts": [
        "/30 hálózatban általában 2 használható hostcím van",
        "/29 hálózatban általában 6 használható hostcím van",
        "/26 hálózatban pontosan 254 használható hostcím van",
        "/24 hálózatból csak két /26-os alhálózat készíthető"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "/30 esetén 2, /29 esetén 6 használható cím van. /26 esetén 62 host van, és /24-ből négy /26-os hálózat készíthető."
    }
  ],
  "Kapcsolók és forgalomirányítók": [
    {
      "q": "Mi a switch alapvető forgalomirányítási elve?",
      "opts": [
        "IP-cím alapján irányítja a beérkező csomagokat tovább",
        "MAC-cím alapján irányítja a kereteket a megfelelő portra",
        "Minden beérkező keretet minden portjára elküld (flood)",
        "Portszám és protokoll alapján szűri a forgalmat (ACL)"
      ],
      "ans": 1,
      "exp": "A switch MAC-cím táblát épít: a bejövő keret forrás MAC-ét megtanulja, és a cél MAC alapján csak a megfelelő portra továbbít. Ismeretlen cél esetén flood."
    },
    {
      "q": "Mi az ARP alapvető feladata IPv4-es LAN-on?",
      "opts": [
        "IP-címhez tartozó MAC-cím feloldása",
        "Domainnévhez tartozó IP-cím keresése",
        "MAC-címhez tartozó IP-cím kiosztása",
        "Routerkonfigurációk szinkronizálása"
      ],
      "ans": 0,
      "exp": "Az ARP helyi hálózaton IP-cím alapján keresi meg a cél eszköz MAC-címét, hogy a keret továbbítható legyen."
    },
    {
      "q": "Melyik Cisco IOS-paranccsal adható meg statikus route?",
      "opts": [
        "route add [célhálózat] [maszk] [next-hop]",
        "ip route [hálózat] [maszk] [next-hop]",
        "set route [hálózat] [maszk] gateway [next-hop]",
        "static route [hálózat]/[prefix] via [next-hop]"
      ],
      "ans": 1,
      "exp": "Cisco IOS: 'ip route 192.168.2.0 255.255.255.0 10.0.0.1' – megadja a célhálózatot, maszkját és a next-hop IP-t."
    },
    {
      "q": "Mi a DHCP DORA folyamat helyes sorrendje?",
      "opts": [
        "Discover → Request → Offer → ACK",
        "Offer → Discover → ACK → Request",
        "Discover → Offer → Request → ACK",
        "Request → Discover → Offer → ACK"
      ],
      "ans": 2,
      "exp": "DORA: Discover (kliens keres szervert) → Offer (szerver IP-t ajánl) → Request (kliens kéri) → ACK (szerver megerősít). UDP 67 (szerver) / 68 (kliens)."
    },
    {
      "q": "Melyik Cisco IOS-parancs jeleníti meg az interfészek IP-jét és állapotát tömören?",
      "opts": [
        "show ip route",
        "show interfaces",
        "show ip interface brief",
        "show running-config"
      ],
      "ans": 2,
      "exp": "A 'show ip interface brief' egy sorban mutatja minden interfész nevét, IP-jét, protokoll- és line-állapotát – a leggyakrabban használt gyors-ellenőrző parancs."
    },
    {
      "q": "Mi az alapértelmezett route (quad-zero route) szerepe?",
      "opts": [
        "Blokkolja a leglassabb interfészen érkező forgalmat",
        "Ismeretlen célcímű csomagot a megadott next-hop felé küld",
        "Csak a 0.0.0.0 IP-t célzó forgalmat dolgozza fel",
        "Egyszerre engedélyezi az összes konfigurált interfészt"
      ],
      "ans": 1,
      "exp": "A 0.0.0.0/0 (quad-zero) az alapértelmezett route: ha a routing-táblában nincs pontosabb egyezés, erre a next-hopra kerül a csomag – tipikusan az internet felé."
    },
    {
      "q": "Melyik protokoll végzi a hostname → IP-cím feloldást?",
      "opts": [
        "DHCP",
        "ARP",
        "DNS",
        "NTP"
      ],
      "ans": 2,
      "exp": "A DNS fordítja le a domainneveket és hostneveket IP-címekre."
    },
    {
      "q": "Mit tárol a switch MAC-címtáblája?",
      "opts": [
        "MAC-cím és port összerendeléseket",
        "DNS-zónák névrekordjait",
        "Routing protokoll jelszavait",
        "IPv6 prefixek bérleti idejét"
      ],
      "ans": 0,
      "exp": "A switch a forrás MAC-címekből tanulja meg, melyik eszköz melyik porton érhető el."
    },
    {
      "q": "Mi történik ismeretlen cél MAC-címnél?",
      "opts": [
        "A switch floodolja a keretet a VLAN-ban",
        "A router NAT-olja a csomagot",
        "A DNS új rekordot hoz létre",
        "A DHCP kiad egy új címet"
      ],
      "ans": 0,
      "exp": "Ha a cél MAC nincs a táblában, a switch az adott VLAN összes releváns portjára továbbítja a keretet, kivéve a bejövőt."
    },
    {
      "q": "Mit jelent a router next-hop címe?",
      "opts": [
        "A következő router IP-címe az útvonalon",
        "Az aktuális switchport MAC-címe",
        "A DHCP által kiosztott utolsó cím",
        "A DNS-zóna első rekordja"
      ],
      "ans": 0,
      "exp": "A next-hop az a szomszédos router, amely felé a csomagot továbbítani kell a célhálózat eléréséhez."
    },
    {
      "q": "Melyik parancs menti a Cisco futó konfigurációt indítási konfigurációba?",
      "opts": [
        "copy running-config startup-config",
        "copy startup-config running-config",
        "erase startup-config parancs",
        "show running-config parancs"
      ],
      "ans": 0,
      "exp": "A copy running-config startup-config elmenti a RAM-ban futó beállítást NVRAM-ba, így újraindítás után is megmarad."
    },
    {
      "q": "Mit jelent a duplex mismatch?",
      "opts": [
        "A két oldalon eltérő duplex mód van",
        "Két router ugyanazt az IP-t használja",
        "A DNS két A rekordot ad vissza",
        "A VLAN törlődött a trunkról"
      ],
      "ans": 0,
      "exp": "Duplex mismatch esetén az egyik oldal half, a másik full duplexben dolgozik, ami ütközéseket és hibákat okozhat."
    },
    {
      "q": "Mi a CDP fő funkciója Cisco hálózatban?",
      "opts": [
        "Közvetlen szomszéd eszközök felderítése",
        "Felhasználók jelszavának ellenőrzése",
        "IPv4-címek dinamikus kiosztása",
        "WAN-alagutak titkosítása"
      ],
      "ans": 0,
      "exp": "A CDP Cisco-eszközök között működő Layer 2 felderítő protokoll, amely szomszédinformációkat ad."
    },
    {
      "q": "Miből tanulja meg a switch a MAC-címtáblát?",
      "opts": [
        "Forrás MAC-címekből",
        "Cél IP-címekből",
        "DNS válaszokból",
        "TCP portszámokból"
      ],
      "ans": 0,
      "exp": "A switch a bejövő keretek forrás MAC-címe alapján tanulja meg, melyik eszköz melyik porton található."
    },
    {
      "q": "Melyik parancs mutatja meg Cisco switchen a MAC-címtáblát?",
      "opts": [
        "show mac address-table",
        "show ip nat translations",
        "show running-vlan",
        "show dns cache"
      ],
      "ans": 0,
      "exp": "A show mac address-table listázza a tanult MAC-címeket és a hozzájuk tartozó portokat."
    },
    {
      "q": "Mit tesz a router, amikor másik hálózat felé továbbít csomagot?",
      "opts": [
        "Új Layer 2 keretbe teszi",
        "Változatlan kerettel küldi",
        "MAC-táblát frissít DNS-ből",
        "STP blokkolást számol"
      ],
      "ans": 0,
      "exp": "A router a 3. réteg alapján dönt, majd a következő szakaszhoz új adatkapcsolati keretet hoz létre."
    },
    {
      "q": "Mikor ARP-ol a kliens az alapértelmezett átjáró MAC-címére?",
      "opts": [
        "Távoli alhálózat elérésénél",
        "Saját loopback cím tesztjénél",
        "Helyi fájl megnyitásakor",
        "DNS-zóna exportálásakor"
      ],
      "ans": 0,
      "exp": "Másik alhálózat célcíme esetén a kliens a gateway MAC-címére küldi a keretet."
    },
    {
      "q": "Mire szolgál az ip helper-address Cisco routeren?",
      "opts": [
        "DHCP kérések továbbítására",
        "STP prioritás állítására",
        "MAC-címek törlésére",
        "NTP idő módosítására"
      ],
      "ans": 0,
      "exp": "Az ip helper-address DHCP broadcast kéréseket továbbíthat unicastként egy távoli DHCP szerver felé."
    },
    {
      "q": "Melyik információ alapján választ útvonalat egy router?",
      "opts": [
        "Cél IP és routing tábla",
        "Forrás MAC és VLAN név",
        "SSID és csatornaszám",
        "Fájlnév és jogosultság"
      ],
      "ans": 0,
      "exp": "A router a cél IP-címet hasonlítja a routing tábla bejegyzéseihez, és a legjobb egyezést választja."
    },
    {
      "type": "multi",
      "q": "Mikor küldhet egy switch egy beérkező keretet több portra is tovább?",
      "opts": [
        "Broadcast cél MAC-cím esetén",
        "Ismeretlen cél MAC-cím esetén",
        "Ha a forrás MAC-cím unicast formátumú",
        "Ha a keret VLAN-ja törölve van a táblából"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Broadcast és ismeretlen unicast cél esetén a switch több portra floodol, kivéve a bejövő portot."
    },
    {
      "type": "match",
      "q": "Párosítsd az eszközt a legjellemzőbb döntési adattal!",
      "pairs": [
        [
          "Switch",
          "MAC-címtábla és cél MAC-cím"
        ],
        [
          "Router",
          "Irányítótábla és cél IP-cím"
        ],
        [
          "Access point",
          "Vezeték nélküli klienskapcsolatok"
        ],
        [
          "Tűzfal",
          "Szabályok és forgalmi jellemzők"
        ]
      ],
      "exp": "A switch L2 címen, a router L3 címen, az AP kliensrádiós kapcsolaton, a tűzfal szabályokon alapuló döntést hoz."
    },
    {
      "q": "Mit tanul meg egy switch a beérkező Ethernet keretekből?",
      "opts": [
        "A forrás MAC-cím és a bejövő port kapcsolatát",
        "A cél IP-címhez tartozó DNS-rekordot",
        "A távoli routerek OSPF költségeit",
        "Az összes VLAN jelszavát titkosítva"
      ],
      "ans": 0,
      "exp": "A switch a forrás MAC-címből tanulja meg, hogy melyik eszköz melyik port mögött található."
    }
  ],
  "Második rétegbeli redundancia": [
    {
      "q": "Mi az STP (Spanning Tree Protocol) feladata?",
      "opts": [
        "VLAN-ok közötti Layer 3 forgalomirányítás",
        "Hurkok megelőzése redundáns 2. rétegű switch-hálózatban",
        "IP-cím automatikus kiosztása klienseknek",
        "Fizikai linkek összevonása nagyobb sávszélességért"
      ],
      "ans": 1,
      "exp": "Az STP BPDU üzenetekkel letiltja a redundáns linkek egy részét, így hurokmentesen fa-topológiában marad a 2. rétegű hálózat."
    },
    {
      "q": "Mi alapján választja ki az STP a Root Bridge-et?",
      "opts": [
        "A legtöbb aktív porttal rendelkező switch",
        "A legkisebb Bridge ID értékű switch (prioritás + MAC-cím)",
        "A legnagyobb sávszélességű uplink-kel rendelkező eszköz",
        "A hálózatba legkorábban kapcsolt switch"
      ],
      "ans": 1,
      "exp": "A Root Bridge a legkisebb Bridge ID-jű switch. Bridge ID = Prioritás (alapértelm. 32768) + MAC-cím. A 'spanning-tree vlan 1 priority 4096' csökkenti a prioritást."
    },
    {
      "q": "Mi a PortFast funkció célja STP-ben?",
      "opts": [
        "Meggyorsítja a Root Bridge kiválasztási folyamatot",
        "Végpont-portot azonnal Forwarding állapotba tesz (STP fázis nélkül)",
        "Switch–switch közötti trunk linkek felállítási idejét csökkenti",
        "Az összes STP-porton letiltja a BPDU üzenetek küldését"
      ],
      "ans": 1,
      "exp": "A PortFast végberendezések (PC, szerver) portjaira való: kihagyja az STP Listening és Learning fázisait, így a végpont gyorsabban kap hálózatot."
    },
    {
      "q": "Mi a BPDU Guard funkciója?",
      "opts": [
        "Megvédi a Root Bridge-et az STP prioritásváltástól",
        "PortFast portra érkező BPDU hatására a port err-disabled lesz",
        "Megvédi a trunk portokat illetéktelen eszközök csatlakozásától",
        "Védelmet nyújt a VLAN hopping típusú támadásokkal szemben"
      ],
      "ans": 1,
      "exp": "A BPDU Guard figyeli a PortFast-portokat: ha BPDU érkezik (más switch csatlakoztatása), azonnal err-disabled állapotba teszi a portot."
    },
    {
      "q": "Melyik EtherChannel protokoll nyílt szabvány?",
      "opts": [
        "PAgP",
        "LACP",
        "DTP",
        "VTP"
      ],
      "ans": 1,
      "exp": "Az LACP az IEEE 802.3ad/802.1AX szerinti linkaggregációs protokoll."
    },
    {
      "q": "Mi az EtherChannel előnye egyetlen fizikai linkhez képest?",
      "opts": [
        "Kizárólag switch–switch összekötésben alkalmazható, routerrel nem",
        "Több fizikai link → egy logikai csatorna: sávszélesség + redundancia",
        "Automatikusan szinkronizálja a VLAN-konfigurációt switchek között",
        "Layer 3 IP-routing funkciót engedélyez a switch portjain"
      ],
      "ans": 1,
      "exp": "Az EtherChannel (LACP/PAgP) 2–8 linket von össze egy logikai interfésszé – összesíti a sávszélességet, és ha egy link kiesik, a többi folytatja."
    },
    {
      "q": "Melyik STP állapotban nem továbbít adatkereteket a port?",
      "opts": [
        "Forwarding",
        "Blocking",
        "Listening",
        "Disabled"
      ],
      "ans": 1,
      "exp": "Blocking állapotban a port nem továbbít adatkeretet, így segít megelőzni a Layer 2 hurkot."
    },
    {
      "q": "Melyik OSPF szomszédsági állapotpár jellemző Ethernet szegmensen?",
      "opts": [
        "Csak DOWN és FULL",
        "FULL/DR, FULL/BDR, 2WAY/DROTHER",
        "Csak INIT és EXSTART",
        "LISTENING és LEARNING"
      ],
      "ans": 1,
      "exp": "Multi-access Etherneten a DR/BDR felé teljes szomszédság, DROTHER-ek között pedig 2-WAY állapot lehet."
    },
    {
      "q": "Miért veszélyes a Layer 2 hurok?",
      "opts": [
        "Broadcast vihart okozhat",
        "Csak DNS-t lassít",
        "DHCP-időt növel",
        "Csak IPv6-ot érint"
      ],
      "ans": 0,
      "exp": "Layer 2 hurok esetén a keretek körbejárhatnak, ami broadcast vihart és MAC-tábla instabilitást okozhat."
    },
    {
      "q": "Mi a Root Port STP-ben?",
      "opts": [
        "A nem root switch legjobb útja a Root Bridge felé",
        "A Root Bridge összes blokkolt portja",
        "Minden access port automatikus neve",
        "A trunk link native VLAN-ja"
      ],
      "ans": 0,
      "exp": "Minden nem root switch kiválaszt egy root portot, amelyen a legalacsonyabb költséggel éri el a Root Bridge-et."
    },
    {
      "q": "Mire való a Rapid PVST+?",
      "opts": [
        "Gyorsabb STP-konvergenciára VLAN-onként",
        "IP-címek automatikus kiosztására",
        "OSPF területek létrehozására",
        "SSH-kulcsok szétosztására"
      ],
      "ans": 0,
      "exp": "A Rapid PVST+ a RSTP alapú Cisco megoldás, VLAN-onként külön spanning tree példánnyal és gyorsabb átállással."
    },
    {
      "q": "Mi történik EtherChannelben egy taglink kiesésekor?",
      "opts": [
        "A forgalom a megmaradt taglinkeken folytatódhat",
        "A teljes switch automatikusan újraindul",
        "Minden VLAN törlődik a trunkról",
        "A DHCP-szerver új címet oszt"
      ],
      "ans": 0,
      "exp": "EtherChannel esetén a logikai csatorna működhet tovább, ha legalább egy taglink elérhető marad."
    },
    {
      "q": "Melyik PAgP mód kezdeményezi aktívan a csatornaképzést?",
      "opts": [
        "desirable",
        "auto",
        "passive",
        "access"
      ],
      "ans": 0,
      "exp": "PAgP-ben a desirable aktívan próbál EtherChannelt kialakítani; az auto csak válaszol a kezdeményezésre."
    },
    {
      "q": "Mi a BPDU fogalma STP-ben?",
      "opts": [
        "STP vezérlőüzenet switchek között",
        "IP-csomag NAT-fordításhoz",
        "DHCP-bérletet lezáró keret",
        "WiFi titkosítási kulcs"
      ],
      "ans": 0,
      "exp": "A BPDU-k hordozzák az STP információkat, például bridge ID-t és útvonal-költséget."
    },
    {
      "q": "Hogyan növelhető egy switch esélye Root Bridge szerepre?",
      "opts": [
        "Alacsonyabb prioritással",
        "Magasabb MAC-címmel",
        "Nagyobb VLAN számmal",
        "Több DHCP poollal"
      ],
      "ans": 0,
      "exp": "STP-ben a legkisebb Bridge ID nyer; ezt alacsonyabb prioritással lehet befolyásolni."
    },
    {
      "q": "Mi alapján választ Root Portot egy nem root switch?",
      "opts": [
        "Root felé legkisebb költséggel",
        "Legnagyobb VLAN ID alapján",
        "Legrégebbi ARP bejegyzéssel",
        "DNS válaszidő alapján"
      ],
      "ans": 0,
      "exp": "A Root Port a Root Bridge felé vezető legkedvezőbb, legalacsonyabb költségű út portja."
    },
    {
      "q": "Melyik portokon célszerű PortFast funkciót használni?",
      "opts": [
        "Végponti access portokon",
        "Switchközi trunk linkeken",
        "Router WAN interfészen",
        "EtherChannel összes tagján"
      ],
      "ans": 0,
      "exp": "PortFast végberendezések felé javasolt, nem switch-switch kapcsolatokon."
    },
    {
      "q": "Mit tesz a BPDU Guard, ha BPDU érkezik PortFast portra?",
      "opts": [
        "Letiltja a portot",
        "Trunk módra vált",
        "DHCP címet kér",
        "OSPF szomszédot épít"
      ],
      "ans": 0,
      "exp": "BPDU Guard biztonsági okból err-disabled állapotba teheti a portot."
    },
    {
      "q": "Melyik LACP mód kezdeményez aktívan csatornaegyeztetést?",
      "opts": [
        "active",
        "passive",
        "auto",
        "desirable"
      ],
      "ans": 0,
      "exp": "LACP esetén az active mód aktívan küld LACP üzeneteket."
    },
    {
      "q": "Mi szükséges EtherChannel tagportoknál?",
      "opts": [
        "Egyező sebesség és VLAN",
        "Eltérő duplex mód",
        "Különböző native VLAN",
        "Eltérő trunk protokoll"
      ],
      "ans": 0,
      "exp": "EtherChannelhez a tagportok több beállításának egyeznie kell, például sebesség, duplex és VLAN-konfiguráció."
    },
    {
      "q": "Egy switch root bridge lett STP-ben. Melyik portszerep nem jellemző a root bridge saját portjaira?",
      "opts": [
        "Root port",
        "Designated port",
        "Forwarding állapot",
        "Learning állapot"
      ],
      "ans": 0,
      "exp": "A root bridge felé nincs jobb út, ezért a root bridge saját portjai nem root portok; jellemzően designated szerepűek."
    },
    {
      "type": "match",
      "q": "Párosítsd az STP fogalmakat a jelentésükkel!",
      "pairs": [
        [
          "Root Bridge",
          "Legalacsonyabb Bridge ID alapján választott központi híd"
        ],
        [
          "Root Port",
          "Legjobb út a Root Bridge felé"
        ],
        [
          "Designated Port",
          "Szegmens forgalmát továbbító port"
        ],
        [
          "Blocked Port",
          "Hurok elkerülése miatt nem továbbít adatkeretet"
        ]
      ],
      "exp": "Az STP portszerepek a hurokmentes topológia kialakítását szolgálják."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak az EtherChannel kialakítására?",
      "opts": [
        "A tagportok sebessége és duplex módja legyen egyező",
        "LACP nyílt szabványú egyeztetési protokoll",
        "PAgP és LACP keverése két oldalon működő csatornát hoz létre",
        "Eltérő VLAN-beállításokkal is garantált a port-channel működése"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "EtherChannelhez a tagportok paramétereinek illeszkedniük kell. LACP nyílt szabvány, PAgP Cisco specifikus."
    }
  ],
  "Virtuális LAN-ok (VLAN)": [
    {
      "q": "Mi a VLAN fő célja?",
      "opts": [
        "Minden szegmenshez külön dedikált fizikai switch szükséges",
        "Logikai szegmentálás: különálló broadcast tartományok egy switch-en",
        "Az összes switch-port átviteli sebességét automatikusan növeli",
        "Tűzfalszabályokat rendel automatikusan minden egyes porthoz"
      ],
      "ans": 1,
      "exp": "A VLAN logikai szegmentálást biztosít: egy fizikai switch-hálózaton belül különálló broadcast tartományokat hoz létre, javítva a biztonságot és a teljesítményt."
    },
    {
      "q": "Miben különbözik az access port és a trunk port?",
      "opts": [
        "Access: egy VLAN; trunk: több VLAN",
        "Access: csak optika; trunk: csak réz",
        "Access: Layer 3; trunk: Layer 7",
        "Access: STP nélkül; trunk: STP-vel"
      ],
      "ans": 0,
      "exp": "Az access port egy VLAN tag nélküli forgalmát kezeli, a trunk több VLAN-t visz 802.1Q tageléssel."
    },
    {
      "q": "Mit jelent a native VLAN trunk kapcsolaton?",
      "opts": [
        "Minden titkosított forgalom VLAN-ja",
        "Tag nélküli keretek VLAN-ja",
        "Csak menedzsment IP-k VLAN-ja",
        "A trunk egyetlen engedélyezett VLAN-ja"
      ],
      "ans": 1,
      "exp": "A native VLAN az a VLAN, amelyhez a trunkon tag nélkül érkező keretek tartoznak."
    },
    {
      "q": "Melyik hálózati eszköz szükséges a VLAN-ok közötti forgalomirányításhoz?",
      "opts": [
        "2. rétegű switch önmagában",
        "Wireless Access Point",
        "Hub (elosztó)",
        "Router vagy 3. rétegű switch"
      ],
      "ans": 3,
      "exp": "A VLAN-ok külön broadcast tartományok: csak router vagy Layer 3 switch képes köztük IP-szintű forgalomirányítást (inter-VLAN routing) végezni."
    },
    {
      "q": "Mire szolgál a VTP Cisco switch-hálózatban?",
      "opts": [
        "VLAN-adatbázis terjesztésére",
        "IP-útvonalak számítására",
        "DHCP-válaszok szűrésére",
        "WiFi kliensek hitelesítésére"
      ],
      "ans": 0,
      "exp": "A VTP VLAN-konfigurációk terjesztésére szolgál azonos VTP-domainen belüli Cisco switchek között."
    },
    {
      "q": "Mi a 'VLAN hopping' támadás lényege?",
      "opts": [
        "A switch teljes VLAN-adatbázisának távolról való törlése",
        "Jogosulatlan hozzáférés egy másik VLAN-hoz trunk-kihasználással",
        "A VLAN-ok közötti forgalom tiltása ACL-szabályokkal",
        "Az összes switch-port egyidejű és szándékos letiltása"
      ],
      "ans": 1,
      "exp": "A VLAN hopping során a támadó double-tagging vagy hamis DTP üzenetekkel eléri más VLAN forgalmát. Védekezés: native VLAN módosítása, DTP kikapcsolása."
    },
    {
      "q": "Melyik két megoldás tipikus inter-VLAN routingra?",
      "opts": [
        "Router-on-a-stick és Layer 3 switch SVI",
        "HSRP és VRRP átjáró-redundancia",
        "STP és EtherChannel hurokvédelem",
        "NAT és PAT interneteléréshez"
      ],
      "ans": 0,
      "exp": "Inter-VLAN routing megvalósítható router-on-a-stick alinterfészekkel vagy Layer 3 switchen SVI interfészekkel."
    },
    {
      "q": "Hogyan véd a DHCP Snooping egy hozzáférési VLAN-ban?",
      "opts": [
        "Szűri a DHCP-szerver válaszait trusted port alapján",
        "Titkosítja a kliensek teljes VLAN-forgalmát",
        "Megszünteti az összes IP-cím ütközést",
        "Csak a native VLAN-on enged DHCP-t"
      ],
      "ans": 0,
      "exp": "A DHCP Snooping csak a trusted portok felől engedi át a szerveroldali DHCP-válaszokat, így gátolja a rogue DHCP-szervert."
    },
    {
      "q": "Melyik parancs állít be access VLAN-t Cisco switchporton?",
      "opts": [
        "switchport access vlan 20",
        "ip route vlan 20",
        "vlan trunk native 20",
        "encapsulation access 20"
      ],
      "ans": 0,
      "exp": "Access porton a switchport access vlan paranccsal adható meg, melyik VLAN tagja legyen a port."
    },
    {
      "q": "Miért érdemes a native VLAN-t nem használt VLAN-ra állítani?",
      "opts": [
        "Csökkenti a VLAN hopping kockázatát",
        "Gyorsítja a DHCP-kiosztást",
        "Kötelezővé teszi az IPv6-ot",
        "Megszünteti az STP működését"
      ],
      "ans": 0,
      "exp": "A native VLAN elkülönítése és a DTP tiltása csökkenti a hibás tagelésből vagy double-taggingből eredő kockázatot."
    },
    {
      "q": "Mi az SVI egy Layer 3 switchen?",
      "opts": [
        "VLAN-hoz tartozó logikai Layer 3 interfész",
        "Trunk port fizikai csatlakozója",
        "STP által blokkolt redundáns link",
        "DHCP-kliens ideiglenes címe"
      ],
      "ans": 0,
      "exp": "Az SVI VLAN-interface, amely IP-címet kap és átjáróként működhet az adott VLAN számára."
    },
    {
      "q": "Mi a DTP szerepe Cisco switcheken?",
      "opts": [
        "Trunk kapcsolat dinamikus egyeztetése",
        "OSPF szomszédság felépítése",
        "DHCP-szerverek hitelesítése",
        "MAC-címtábla titkosítása"
      ],
      "ans": 0,
      "exp": "A Dynamic Trunking Protocol a trunk mód dinamikus egyeztetésére szolgál, de biztonsági okból gyakran letiltják."
    },
    {
      "q": "Mit jelent a VLAN pruning?",
      "opts": [
        "Nem használt VLAN-forgalom korlátozása trunkon",
        "VLAN-ok közötti routing kikapcsolása",
        "Switchportok fizikai leválasztása",
        "DHCP-bérletek idő előtti törlése"
      ],
      "ans": 0,
      "exp": "Pruning esetén a trunkon csak azok a VLAN-ok mennek át, amelyekre a túloldalon valóban szükség van."
    },
    {
      "q": "Mi okoz native VLAN mismatch hibát trunk kapcsolaton?",
      "opts": [
        "Eltérő native VLAN a két végponton",
        "Azonos allowed VLAN-lista",
        "Bekapcsolt PortFast access porton",
        "Helyes duplex beállítás"
      ],
      "ans": 0,
      "exp": "Ha a trunk két végén eltérő native VLAN van, a tag nélküli keretek rossz VLAN-ba kerülhetnek."
    },
    {
      "q": "Mire szolgál az allowed VLAN lista trunk porton?",
      "opts": [
        "Átengedett VLAN-ok korlátozására",
        "STP root bridge kijelölésére",
        "DHCP szerver indítására",
        "MAC-tábla ürítésére"
      ],
      "ans": 0,
      "exp": "Az allowed VLAN lista meghatározza, mely VLAN-ok forgalma haladhat át a trunkon."
    },
    {
      "q": "Miért kapcsolják ki gyakran a DTP-t éles access portokon?",
      "opts": [
        "Trunk tárgyalás megelőzésére",
        "DNS hibák javítására",
        "NAT teljesítmény növelésére",
        "IPv6 prefix rövidítésére"
      ],
      "ans": 0,
      "exp": "A DTP kikapcsolása csökkenti annak esélyét, hogy egy port jogosulatlanul trunkként működjön."
    },
    {
      "q": "Mi az SVI szerepe Layer 3 switchen?",
      "opts": [
        "VLAN-ok IP átjárója lehet",
        "Fizikai kábel típusa",
        "WiFi titkosítás kulcsa",
        "STP BPDU keret neve"
      ],
      "ans": 0,
      "exp": "Az SVI egy VLAN-hoz tartozó virtuális Layer 3 interfész, amely átjáróként is működhet."
    },
    {
      "q": "Mire használható a voice VLAN?",
      "opts": [
        "IP telefonok elkülönítésére",
        "Vendég WiFi letiltására",
        "RAID tömb kezelésére",
        "OSPF router ID törlésére"
      ],
      "ans": 0,
      "exp": "A voice VLAN elkülönítheti és kezelhetőbbé teheti az IP telefonok forgalmát."
    },
    {
      "q": "Mit jelent router-on-a-stick megoldásnál a subinterfész?",
      "opts": [
        "Egy VLAN-hoz kötött logikai interfész",
        "Egy külön fizikai switchport",
        "Csak konzolkapcsolati port",
        "Automatikus DHCP pool"
      ],
      "ans": 0,
      "exp": "Router-on-a-stick esetén egy fizikai interfészen több 802.1Q subinterfész kezeli a VLAN-okat."
    },
    {
      "q": "Miért kockázatos az alapértelmezett VLAN 1 használata native VLAN-ként?",
      "opts": [
        "Túl sok alapforgalom érintheti",
        "Nem támogat IP-címeket",
        "Mindig titkosítatlan WiFi",
        "Csak IPv6-ban működik"
      ],
      "ans": 0,
      "exp": "Biztonsági okból gyakori gyakorlat a native VLAN és a menedzsment VLAN elkülönítése az alapértelmezett VLAN-tól."
    },
    {
      "q": "Egy access port VLAN 10-hez van rendelve, majd a VLAN 10-et törlik. Mi lehet a következmény?",
      "opts": [
        "A port VLAN-hozzárendelése érvénytelenné válik, a kommunikáció megszakadhat",
        "A port automatikusan trunk módba vált és minden VLAN-t továbbít",
        "A switch újra létrehozza a VLAN-t a PC MAC-címe alapján",
        "A port IP-címet kér a törölt VLAN helyett a DHCP-től"
      ],
      "ans": 0,
      "exp": "Ha a port olyan VLAN-hoz tartozik, amelyet törölnek, a hozzá tartozó végpont forgalma megszakadhat."
    },
    {
      "type": "match",
      "q": "Párosítsd a VLAN-porttípusokat és fogalmakat a szerepükkel!",
      "pairs": [
        [
          "Access port",
          "Egy VLAN-hoz tartozó végponti port"
        ],
        [
          "Trunk port",
          "Több VLAN forgalmát továbbító kapcsolat"
        ],
        [
          "Native VLAN",
          "Tag nélküli trunk forgalom VLAN-ja"
        ],
        [
          "Allowed VLAN lista",
          "Trunkön engedélyezett VLAN-ok szűrése"
        ]
      ],
      "exp": "Az access egy VLAN, a trunk több VLAN, a native a tag nélküli forgalom, az allowed lista a trunkön engedett VLAN-okat szabályozza."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak VLAN-os switchkörnyezetben?",
      "opts": [
        "A trunk port több VLAN kereteit viheti egy kapcsolaton",
        "Az access port jellemzően egy VLAN-hoz tartozik",
        "A VLAN-ok közötti forgalomhoz nincs szükség L3 eszközre",
        "A native VLAN minden keretet kötelezően taggel lát el"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Trunk több VLAN-t visz, access port egy VLAN-hoz tartozik. VLAN-ok között router vagy L3 switch szükséges."
    }
  ],
  "Harmadik rétegbeli redundancia": [
    {
      "q": "Mi a HSRP (Hot Standby Router Protocol) célja?",
      "opts": [
        "Két switch közötti 802.1Q trunk-kapcsolat kialakítása",
        "Virtuális IP-vel megvalósított átjáró-redundancia, automatikus failoverrel",
        "Routing protokoll üzenetek MD5-alapú hitelesítése routereken",
        "ACL-listák automatikus terjesztése és szinkronizálása routerek közt"
      ],
      "ans": 1,
      "exp": "A HSRP virtuális IP-t és MAC-et biztosít a klienseknek. Az aktív router kezeli a forgalmat – meghibásodáskor a standby veszi át automatikusan, a kliensek változtatás nélkül."
    },
    {
      "q": "Mi a HSRP alapértelmezett prioritásértéke?",
      "opts": [
        "1",
        "50",
        "100",
        "255"
      ],
      "ans": 2,
      "exp": "A HSRP alapértelmezett prioritása 100. Magasabb prioritás = nagyobb esély az aktív szerepre. A 'standby 1 priority 120' paranccsal felülírható."
    },
    {
      "q": "Melyik protokollcsoport ad első ugrás redundanciát?",
      "opts": [
        "OSPF, EIGRP, RIP",
        "HSRP, VRRP, GLBP",
        "STP, RSTP, MSTP",
        "LACP, PAgP, DTP"
      ],
      "ans": 1,
      "exp": "A HSRP, VRRP és GLBP redundáns alapértelmezett átjárót biztosító FHRP protokollok."
    },
    {
      "q": "Mit tesz a 'standby 1 preempt' parancs a HSRP-ben?",
      "opts": [
        "Megakadályozza, hogy a router valaha aktív szerepet töltsön be",
        "Visszaveszi az aktív szerepet, ha visszaáll és magasabb a prioritása",
        "Törli a konfigurációból az 1-es számú HSRP-csoportot",
        "Kényszeríti az összes routert standby üzemmódba"
      ],
      "ans": 1,
      "exp": "A preempt engedélyezi, hogy az elsődleges (magasabb prioritású) router automatikusan visszavegye az aktív szerepet az újraindulás után, nem várja be a természetes változást."
    },
    {
      "q": "Melyik paranccsal ellenőrizhető a HSRP állapota Cisco routeren?",
      "opts": [
        "show ip route",
        "show arp",
        "show standby",
        "show vrrp brief"
      ],
      "ans": 2,
      "exp": "A 'show standby' megmutatja a HSRP csoportokat, az aktív/standby szerepeket, a virtuális IP-t, a prioritásokat és a preempt beállítást."
    },
    {
      "q": "Mi a VRRP és a HSRP egyik fontos különbsége?",
      "opts": [
        "VRRP nyílt, HSRP Cisco saját",
        "HSRP csak IPv6-ban működik",
        "VRRP kizárólag WiFi-hez való",
        "Mindkettő Layer 2 trunk protokoll"
      ],
      "ans": 0,
      "exp": "A VRRP nyílt szabvány, míg a HSRP Cisco saját átjáró-redundancia protokoll."
    },
    {
      "q": "Mi az FHRP-k közös célja?",
      "opts": [
        "Redundáns alapértelmezett átjáró biztosítása",
        "VLAN-tagelés kikapcsolása trunkokon",
        "OSPF LSDB tömörítése",
        "WiFi roaming gyorsítása"
      ],
      "ans": 0,
      "exp": "Az FHRP protokollok virtuális átjárócímet adnak, amely routerhiba esetén is elérhető maradhat."
    },
    {
      "q": "Mi a GLBP egyik sajátossága HSRP-hez képest?",
      "opts": [
        "Terhelésmegosztást is adhat",
        "Csak statikus route-tal működik",
        "Nem használ virtuális címet",
        "Layer 2 trunk protokoll"
      ],
      "ans": 0,
      "exp": "A GLBP redundancia mellett több aktív továbbítót is használhat, ezért terhelésmegosztásra is képes."
    },
    {
      "q": "Mit jelent HSRP-ben az active router?",
      "opts": [
        "A virtuális átjáró forgalmát továbbító router",
        "A trunk native VLAN-ját kezelő switch",
        "Az OSPF DR szerepű útválasztó",
        "A DHCP-címeket kiosztó szerver"
      ],
      "ans": 0,
      "exp": "HSRP-ben az active router válaszol a virtuális IP/MAC címre és továbbítja a kliensek forgalmát."
    },
    {
      "q": "Miért hasznos az interface tracking HSRP-ben?",
      "opts": [
        "WAN-link kiesésére prioritást csökkenthet",
        "Minden ARP-bejegyzést töröl",
        "VLAN adatbázist szinkronizál",
        "Megnöveli a WiFi jelerősséget"
      ],
      "ans": 0,
      "exp": "Trackinggel a router prioritása csökkenhet, ha egy fontos uplink kiesik, így másik router veheti át az aktív szerepet."
    },
    {
      "q": "Melyik VRRP jellemző igaz?",
      "opts": [
        "Nyílt szabványú átjáró-redundancia protokoll",
        "Cisco saját linkaggregációs protokoll",
        "Layer 2 trunk egyeztetési eljárás",
        "WiFi titkosítási módszer"
      ],
      "ans": 0,
      "exp": "A VRRP több gyártó eszközein használható FHRP-megoldás virtuális átjáró biztosítására."
    },
    {
      "q": "Mi történik, ha a HSRP active router kiesik?",
      "opts": [
        "A standby router átveszi a virtuális átjárót",
        "Minden kliens új IP-t kér DHCP-től",
        "Az STP root bridge törlődik",
        "A VLAN-ok automatikusan összeolvadnak"
      ],
      "ans": 0,
      "exp": "Kieséskor a standby router lesz aktív, így a kliensek továbbra is ugyanazt a virtuális átjárót használhatják."
    },
    {
      "q": "Mit állítanak be a klienseken FHRP használatakor alapértelmezett átjárónak?",
      "opts": [
        "Virtuális átjáró IP-címet",
        "Aktív router MAC-tábláját",
        "BDR multicast címét",
        "DHCP szerver nevét"
      ],
      "ans": 0,
      "exp": "FHRP esetén a kliensek a virtuális IP-címet használják alapértelmezett átjáróként."
    },
    {
      "q": "Mi a HSRP aktív router feladata?",
      "opts": [
        "Virtuális átjáró forgalmának kezelése",
        "STP BPDU-k tiltása",
        "WiFi roaming vezérlése",
        "DNS rekordok replikálása"
      ],
      "ans": 0,
      "exp": "A HSRP aktív router továbbítja a virtuális átjáróra érkező forgalmat."
    },
    {
      "q": "Mit eredményezhet a HSRP interface tracking?",
      "opts": [
        "Prioritás csökkentést hiba esetén",
        "VLAN tag automatikus törlését",
        "SNMP community cserét",
        "OSPF area számozást"
      ],
      "ans": 0,
      "exp": "Interface trackinggel egy fontos uplink hibája csökkentheti a HSRP prioritást, így failover történhet."
    },
    {
      "q": "Melyik FHRP képes alapból átjáró-terheléselosztásra?",
      "opts": [
        "GLBP",
        "RIP",
        "STP",
        "DTP"
      ],
      "ans": 0,
      "exp": "A GLBP több router között is eloszthatja az alapértelmezett átjáró szerepéhez tartozó terhelést."
    },
    {
      "q": "Mi a VRRP master szerepe?",
      "opts": [
        "Virtuális IP kiszolgálása",
        "DHCP pool kiosztása",
        "BPDU Guard futtatása",
        "Syslog szerver indítása"
      ],
      "ans": 0,
      "exp": "VRRP-ben a master router kezeli a virtuális átjáró címére érkező forgalmat."
    },
    {
      "q": "Mi történik preempt nélkül, ha a korábbi elsődleges router visszatér?",
      "opts": [
        "Nem biztos, hogy visszaveszi a szerepet",
        "Azonnal törli a VLAN-okat",
        "Mindig új OSPF area lesz",
        "A kliensek IP-t veszítenek"
      ],
      "ans": 0,
      "exp": "Preempt nélkül a visszatérő magasabb prioritású router nem feltétlenül veszi vissza automatikusan az aktív szerepet."
    },
    {
      "q": "HSRP-ben mit eredményezhet a standby 1 track Serial0/0/0 parancs, ha a soros interfész leáll?",
      "opts": [
        "Az adott router HSRP prioritása csökkenhet",
        "A Gigabit interfész automatikusan törlődik",
        "A HSRP csoport száma egyre változik",
        "A soros interfész DHCP pool-lá alakul"
      ],
      "ans": 0,
      "exp": "A tracking célja, hogy egy fontos uplink kiesésekor csökkenjen a router prioritása, és szükség esetén másik eszköz vegye át az aktív szerepet."
    },
    {
      "type": "match",
      "q": "Párosítsd a HSRP fogalmakat a jelentésükkel!",
      "pairs": [
        [
          "Active router",
          "Az aktuálisan forgalmat továbbító átjáró"
        ],
        [
          "Standby router",
          "Tartalék eszköz aktív kiesése esetére"
        ],
        [
          "Virtual IP",
          "A kliensek által használt közös átjárócím"
        ],
        [
          "Preempt",
          "Magasabb prioritás esetén aktív szerep visszavétele"
        ]
      ],
      "exp": "A HSRP virtuális átjárót ad, amely mögött aktív és tartalék routerek dolgoznak."
    },
    {
      "type": "multi",
      "q": "Mely beállítások befolyásolhatják, hogy HSRP-ben melyik router legyen aktív?",
      "opts": [
        "Prioritás értéke",
        "Preempt engedélyezése",
        "Soros vagy uplink interfész követése",
        "A switchport kábelének színe"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "exp": "A prioritás, a preempt és az interfész tracking mind hatással lehet az aktív átjáró kiválasztására."
    }
  ],
  "Vezeték nélküli hálózatok": [
    {
      "q": "Melyik három 2,4 GHz-es WiFi csatorna nem fedi át egymást?",
      "opts": [
        "1, 2, 3",
        "1, 5, 10",
        "1, 6, 11",
        "3, 7, 11"
      ],
      "ans": 2,
      "exp": "A 2,4 GHz-es sávban az 1, 6 és 11-es csatornák teljesen elválasztottak (non-overlapping) – szomszédos AP-knál ezeket ajánlott kiosztani az interferencia elkerüléséhez."
    },
    {
      "q": "Melyik WiFi titkosítás számít elavultnak?",
      "opts": [
        "WPA2 szabvány",
        "WPA3 szabvány",
        "WEP szabvány",
        "WPA2-Enterprise"
      ],
      "ans": 2,
      "exp": "A WEP kriptográfiailag elavult, ezért modern hálózatban nem tekinthető biztonságosnak."
    },
    {
      "q": "Mi a WPA3 legfontosabb újítása a WPA2-höz képest?",
      "opts": [
        "Megnövelt rádiójelhatótáv a korábbi WiFi szabványokhoz képest",
        "SAE-protokoll: erős kulcscsere, véd az offline szótártámadás ellen",
        "Kizárólag a 6 GHz-es frekvenciasávon képes üzemelni",
        "Gyorsabb, de biztonsági szintet csökkentő titkosítást alkalmaz"
      ],
      "ans": 1,
      "exp": "A WPA3 SAE (Dragonfly kézfogás) protokollt vezette be, amely megvédi az offline brute-force támadástól: az elfogott handshake sem törhető fel offline."
    },
    {
      "q": "Milyen üzenettel hirdeti magát egy WiFi access point?",
      "opts": [
        "ARP kérés broadcast-ként",
        "OSPF Hello csomag",
        "Beacon frame (jelzőkeret)",
        "BPDU üzenet 802.1D szerint"
      ],
      "ans": 2,
      "exp": "A WiFi AP periodikusan küld Beacon kereteket (beacon frame), amelyek tartalmazzák az SSID-t, a támogatott sebességeket és a biztonsági beállításokat."
    },
    {
      "q": "Melyik WiFi-generáció felel meg a 802.11ax szabványnak?",
      "opts": [
        "WiFi 5",
        "WiFi 6",
        "WiFi 7",
        "WiFi 4"
      ],
      "ans": 1,
      "exp": "A 802.11ax jelölés a WiFi 6 szabványhoz tartozik."
    },
    {
      "q": "Mi az SSID fogalma WiFi-ben?",
      "opts": [
        "A WiFi csatorna sorszáma (1–14 a 2,4 GHz-es sávban)",
        "A hálózat neve, amellyel a kliensek azonosítják az AP-t",
        "Az access point egyedi fizikai (MAC) azonosítója",
        "A titkosítási kulcs hossza bitben megadva"
      ],
      "ans": 1,
      "exp": "Az SSID (Service Set Identifier) a WiFi hálózat neve – ezt látja a felhasználó, amikor keresi az elérhető hálózatokat."
    },
    {
      "q": "Mi az 5 GHz-es WiFi egyik előnye 2,4 GHz-hez képest?",
      "opts": [
        "Több nem átfedő csatorna áll rendelkezésre",
        "Mindig nagyobb a falakon átjutása",
        "Nem igényel semmilyen titkosítást",
        "Csak IoT-szenzorokhoz használható"
      ],
      "ans": 0,
      "exp": "Az 5 GHz-es sávban több csatorna használható, ezért kisebb lehet az interferencia sűrű környezetben."
    },
    {
      "q": "WiFi hitelesítésben mire épül a WPA2-Enterprise?",
      "opts": [
        "802.1X és RADIUS",
        "WEP és statikus kulcs",
        "WPS és közös PIN",
        "MAC-lista és SSID"
      ],
      "ans": 0,
      "exp": "A WPA2-Enterprise 802.1X alapú hitelesítést használ, jellemzően RADIUS szerverrel."
    },
    {
      "q": "Mit jelent a roaming WiFi hálózatban?",
      "opts": [
        "Kliens átváltása egyik AP-ról másikra",
        "SSID teljes elrejtése minden kliens elől",
        "AP-k manuális csatornatörlése",
        "DHCP-szerverek redundáns működése"
      ],
      "ans": 0,
      "exp": "Roamingkor a kliens mozgás közben másik access pointra kapcsolódik ugyanazon hálózati szolgáltatás megtartásával."
    },
    {
      "q": "Miért fontos a csatornatervezés több AP esetén?",
      "opts": [
        "Csökkenti az átfedést és interferenciát",
        "Megszünteti az IP-címtervet",
        "Kiváltja a tűzfalszabályokat",
        "Automatikusan titkosítja a forgalmat"
      ],
      "ans": 0,
      "exp": "Rosszul választott csatornáknál a szomszédos AP-k zavarhatják egymást, ami lassulást és csomagvesztést okoz."
    },
    {
      "q": "Mit jelent a captive portal?",
      "opts": [
        "Webes bejelentkező oldal hálózati hozzáférés előtt",
        "WiFi titkosítás nélküli hardverkulcs",
        "802.11ax rádiós modul neve",
        "AP-k közötti trunk protokoll"
      ],
      "ans": 0,
      "exp": "Captive portal esetén a felhasználó weboldalon fogad el feltételeket vagy azonosítja magát, mielőtt internetet kap."
    },
    {
      "q": "Mi a BSSID WiFi-ben?",
      "opts": [
        "Az access point rádiós interfészének MAC-címe",
        "A hálózat felhasználók által látott neve",
        "A titkosítókulcs karakterhossza",
        "A DHCP-szerver IPv6 prefixe"
      ],
      "ans": 0,
      "exp": "A BSSID egy adott AP rádiós interfészét azonosítja MAC-címmel; az SSID a hálózat neve."
    },
    {
      "q": "Mi okozhat gyakori zavart 2,4 GHz-es WiFi hálózatban?",
      "opts": [
        "Bluetooth és mikrohullámú eszköz",
        "Optikai SFP modul",
        "SATA adatkábel",
        "RAID vezérlő cache"
      ],
      "ans": 0,
      "exp": "A 2,4 GHz-es sávot sok eszköz használja, ezért gyakoribb az interferencia."
    },
    {
      "q": "Mi jellemző általában az 5 GHz-es WiFi-re 2,4 GHz-hez képest?",
      "opts": [
        "Több csatorna, kisebb hatótáv",
        "Kevesebb csatorna, nagyobb falátvitel",
        "Csak WEP-pel működik",
        "Nem támogat titkosítást"
      ],
      "ans": 0,
      "exp": "Az 5 GHz több csatornát kínálhat, de a jel általában kevésbé terjed át falakon."
    },
    {
      "q": "Mire épül a WPA2-Enterprise hitelesítés?",
      "opts": [
        "802.1X és RADIUS",
        "WEP kulcslistára",
        "Statikus ARP táblára",
        "OSPF hello csomagra"
      ],
      "ans": 0,
      "exp": "WPA2-Enterprise esetén 802.1X hitelesítés és jellemzően RADIUS szerver használható."
    },
    {
      "q": "Miért nem tekinthető erős védelemnek az SSID elrejtése?",
      "opts": [
        "A forgalomból kideríthető",
        "Titkosítja a jelszót",
        "Leállítja a beacon keretet",
        "Megszünteti a rádiójelet"
      ],
      "ans": 0,
      "exp": "Az SSID elrejtése nem valódi titkosítás, a hálózat az adatforgalomból továbbra is felfedezhető."
    },
    {
      "q": "Mi segíti a kliens roamingját több access point között?",
      "opts": [
        "Azonos SSID és biztonság",
        "Eltérő titkosítás minden AP-n",
        "Külön IP-osztály AP-nként",
        "Letiltott beacon keretek"
      ],
      "ans": 0,
      "exp": "A roaminghoz azonos SSID és kompatibilis biztonsági beállítások szükségesek az AP-kon."
    },
    {
      "q": "Mit okozhat túl nagy csatornaszélesség zsúfolt WiFi környezetben?",
      "opts": [
        "Nagyobb interferencia esélyt",
        "Kötelezően jobb hatótávot",
        "Teljes titkosításvesztést",
        "DHCP címütközést"
      ],
      "ans": 0,
      "exp": "Szélesebb csatorna növelheti az áteresztést, de zsúfolt környezetben több átfedést és zavart okozhat."
    },
    {
      "q": "Mely WLAN kerettípussal keresnek aktív módban hálózatokat a vezeték nélküli kliensek?",
      "opts": [
        "Probe Request",
        "Association Response",
        "RTS",
        "ACK"
      ],
      "ans": 0,
      "exp": "Aktív felderítéskor a kliens Probe Request keretet küld, hogy elérhető hálózatokat találjon."
    },
    {
      "type": "match",
      "q": "Párosítsd a WLAN fogalmakat a szerepükkel!",
      "pairs": [
        [
          "Beacon",
          "AP által sugárzott hálózati hirdetés"
        ],
        [
          "Probe Request",
          "Kliens aktív hálózatkereső kerete"
        ],
        [
          "SSID",
          "Vezeték nélküli hálózat neve"
        ],
        [
          "WPA3",
          "Korszerű WiFi biztonsági megoldás"
        ]
      ],
      "exp": "A Beacon hirdet, a Probe Request keres, az SSID a hálózat neve, a WPA3 biztonsági szabvány."
    },
    {
      "type": "multi",
      "q": "Mely beállítások javíthatják egy vállalati WLAN biztonságát?",
      "opts": [
        "Erős WPA2/WPA3 védelem használata",
        "Vendéghálózat elkülönítése külön VLAN-ba",
        "WEP használata modern titkosítás helyett",
        "Admin jelszó gyári értéken hagyása"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "A korszerű titkosítás és a vendégek elkülönítése fontos. A WEP és a gyári jelszó biztonsági kockázat."
    }
  ],
  "Hálózatbiztonság, forgalom figyelése": [
    {
      "q": "Miben tér el leginkább az IDS és az IPS?",
      "opts": [
        "Az IDS blokkol, az IPS csak naplóz",
        "Az IPS blokkolhat, az IDS riaszt",
        "Mindkettő csak VLAN-t hoz létre",
        "Egyik sem vizsgál hálózati forgalmat"
      ],
      "ans": 1,
      "exp": "Az IDS észlel és riaszt, az IPS pedig inline módon megelőző blokkolást is végezhet."
    },
    {
      "q": "Mi az ARP Spoofing (mérgezés) lényege?",
      "opts": [
        "Hamis DNS-válaszokat küld a domain névszerverének",
        "Hamis ARP-válaszokkal meghamisítja a MAC–IP leképzést MitM-hez",
        "Jogosulatlan DHCP-szervert üzemeltet a hálózaton (rogue)",
        "Szándékosan és rendszeresen megszakítja a TCP-kapcsolatokat"
      ],
      "ans": 1,
      "exp": "ARP Spoofing: hamis ARP-válaszok küldésével a támadó a saját MAC-jére irányítja a forgalmat, lehallgathatja vagy módosíthatja (Man-in-the-Middle)."
    },
    {
      "q": "Mi az AAA rövidítés hálózatbiztonságban?",
      "opts": [
        "Authentication, Authorization, Accounting",
        "Access, Audit, Administration",
        "Addressing, Authentication, ACL",
        "Authentication, ACL, Administration"
      ],
      "ans": 0,
      "exp": "AAA: Authentication (azonosítás – ki vagy?), Authorization (felhatalmazás – mit tehetsz?), Accounting (elszámoltatás – mit csináltál? – naplózás)."
    },
    {
      "q": "Mi a DHCP Snooping funkciója?",
      "opts": [
        "DNS-mérgezés (cache poisoning) elleni aktív védelmet nyújt",
        "Csak trusted portokon engedi át a DHCP-szerver válaszait",
        "Titkosítja a DHCP-üzeneteket a kliens és szerver között",
        "Korlátozza az egy porthoz rendelhető IP-tartomány méretét"
      ],
      "ans": 1,
      "exp": "A DHCP Snooping switch-funkció: a 'trusted' portokon engedi csak a DHCP Offer/ACK üzeneteket – megakadályozza, hogy hamis (rogue) DHCP-szerver helytelen IP-t osszon ki."
    },
    {
      "q": "Melyik SNMP-verzió támogat beépített hitelesítést és titkosítást?",
      "opts": [
        "SNMPv1",
        "SNMPv2c",
        "SNMPv3",
        "SNMPv2"
      ],
      "ans": 2,
      "exp": "Az SNMPv3 támogatja a hitelesítést és a titkosítást; az SNMPv1/v2c community string alapú és nem titkosított."
    },
    {
      "q": "Miben különbözik a DDoS a hagyományos DoS-tól?",
      "opts": [
        "Sok forrásból indul",
        "Csak egy gépről indul",
        "Mindig titkosított VPN-en megy",
        "Csak vezeték nélküli hálózatot érint"
      ],
      "ans": 0,
      "exp": "DDoS esetén sok, gyakran botnethez tartozó forrás támad egyszerre."
    },
    {
      "q": "Melyik Syslog szint a legsúlyosabb?",
      "opts": [
        "Debug",
        "Warning",
        "Error",
        "Emergency"
      ],
      "ans": 3,
      "exp": "A Syslog 0-s, Emergency szintje jelzi a legsúlyosabb állapotot."
    },
    {
      "q": "Mi a phishing-támadás lényege?",
      "opts": [
        "Hálózati forgalom Deep Packet Inspection-nel titkosítása",
        "Jelszavak automatikus, brute-force módszerű feltörése",
        "Felhasználók megtévesztése hamis felületen adatlopás céljából",
        "Tűzfalszabályok megkerülése port-knocking technikával"
      ],
      "ans": 2,
      "exp": "A phishing (adathalászat) social engineering: hamis e-mailekkel vagy weboldalakkal veszik rá az áldozatot, hogy megadja hitelesítési adatait vagy fertőzött fájlt töltsön le."
    },
    {
      "q": "Hogyan számolható ki legegyszerűbben a wildcard maszk?",
      "opts": [
        "IP-cím XOR maszk",
        "255.255.255.255 mínusz maszk",
        "Maszk osztása kettővel",
        "Gateway-cím kivonása"
      ],
      "ans": 1,
      "exp": "A wildcard maszk az alhálózati maszk inverze, egyszerűen 255.255.255.255-ből kivonva számolható."
    },
    {
      "q": "Hol helyezendő el a normál (standard) ACL a legjobb gyakorlat szerint?",
      "opts": [
        "A forráshoz minél közelebb",
        "A célhoz minél közelebb",
        "Mindig az internet-határon",
        "Csak trunk portokon alkalmazható"
      ],
      "ans": 1,
      "exp": "A normál ACL csak a forrás IP-t vizsgálja, ezért a célhoz közel kell elhelyezni – ha a forrásnál tennénk, esetleg olyan forgalmat is blokkolna, amely más cél felé irányul."
    },
    {
      "q": "Mit vizsgál az established kulcsszó TCP ACL-ben?",
      "opts": [
        "ACK vagy RST bitet",
        "UDP forrásportot",
        "ICMP típuskódot",
        "DNS rekordtípust"
      ],
      "ans": 0,
      "exp": "Az established kulcsszó az ACK vagy RST bit alapján engedi a már belülről kezdeményezett TCP kapcsolat visszaforgalmát."
    },
    {
      "q": "Melyik beállításpár védi ACL-lel a VTY vonalakat Cisco eszközön?",
      "opts": [
        "ACL + ip access-group",
        "ACL + access-class",
        "NAT pool + overload",
        "VLAN + switchport mode trunk"
      ],
      "ans": 1,
      "exp": "VTY vonalaknál az ACL-t nem interfészre, hanem line vty alatt access-class paranccsal kell alkalmazni."
    },
    {
      "q": "Mi a CIA-hármas három eleme?",
      "opts": [
        "Titoktartás, integritás, rendelkezésre állás",
        "Címzés, indexelés, archiválás",
        "Kódolás, telepítés, auditálás",
        "Kapcsolás, irányítás, felügyelet"
      ],
      "ans": 0,
      "exp": "A CIA-hármas az információbiztonság alapja: confidentiality, integrity és availability."
    },
    {
      "q": "Mire való a port security switchporton?",
      "opts": [
        "Engedélyezett MAC-címek korlátozására",
        "OSPF költség automatikus számítására",
        "DHCP-bérletek meghosszabbítására",
        "WAN-alagutak titkosítására"
      ],
      "ans": 0,
      "exp": "Port securityvel korlátozható, mely MAC-címek használhatják az adott switchportot, és mi történjen megsértéskor."
    },
    {
      "q": "Mit jelent a least privilege biztonsági elv?",
      "opts": [
        "Csak a szükséges jogosultságok megadása",
        "Minden jog kiosztása egyszerűség miatt",
        "Tűzfal teljes kikapcsolása teszteléskor",
        "Naplozás csak hiba esetén"
      ],
      "ans": 0,
      "exp": "A legkisebb jogosultság elve csökkenti a kompromittált fiókokkal okozható kárt."
    },
    {
      "q": "Mi a SIEM rendszer feladata?",
      "opts": [
        "Naplók gyűjtése, korrelációja és riasztás",
        "IP-címek automatikus kiosztása",
        "EtherChannel linkek összevonása",
        "VLAN-ok közötti routing"
      ],
      "ans": 0,
      "exp": "A SIEM több forrásból gyűjt eseményeket, összefüggéseket keres és biztonsági riasztásokat ad."
    },
    {
      "q": "Mi a célja a hálózati szegmentálásnak?",
      "opts": [
        "Kockázat és broadcast tartományok csökkentése",
        "Összes VLAN egybeolvasztása",
        "Publikus címek korlátlan kiosztása",
        "Minden ACL eltávolítása"
      ],
      "ans": 0,
      "exp": "Szegmentálással elkülöníthetők a felhasználók, szerverek és érzékeny rendszerek, csökkentve a laterális mozgást."
    },
    {
      "q": "Melyik példa social engineering támadásra?",
      "opts": [
        "Hamis segítségkérés jelszó megszerzéséhez",
        "CRC hibák kábelhiba miatt",
        "OSPF Hello időzítő eltérése",
        "RAID tömb lemezhiba utáni rebuildje"
      ],
      "ans": 0,
      "exp": "Social engineering esetén a támadó embereket próbál megtéveszteni, nem pusztán technikai hibát használ ki."
    },
    {
      "q": "Melyik három fogalom alkotja a CIA triádot?",
      "opts": [
        "Bizalmasság, sértetlenség, rendelkezésre állás",
        "Címzés, irányítás, naplózás",
        "Kliens, szerver, átjáró",
        "Kódolás, tömörítés, indexelés"
      ],
      "ans": 0,
      "exp": "A CIA triád az információbiztonság alapja: confidentiality, integrity, availability."
    },
    {
      "q": "Mit használ ki egy exploit?",
      "opts": [
        "Sérülékenységet",
        "Mentési ablakot",
        "WiFi csatornát",
        "RAID paritást"
      ],
      "ans": 0,
      "exp": "Az exploit egy sérülékenység kihasználására írt módszer vagy kód."
    },
    {
      "q": "Mi a honeypot célja?",
      "opts": [
        "Támadók megfigyelése kontrolláltan",
        "Felhasználói jelszavak tárolása",
        "DHCP bérletek gyorsítása",
        "OSPF cost csökkentése"
      ],
      "ans": 0,
      "exp": "A honeypot csaliként működik, hogy a támadói viselkedést kontrollált környezetben lehessen vizsgálni."
    },
    {
      "q": "Mire használható a switch port security?",
      "opts": [
        "MAC-cím alapú korlátozásra",
        "DNS rekordok naplózására",
        "NAT pool bővítésére",
        "WiFi csatorna váltására"
      ],
      "ans": 0,
      "exp": "Port securityvel korlátozható, mely MAC-címek használhatnak egy switchportot."
    },
    {
      "q": "Melyik védelem épülhet DHCP Snooping adatbázisra?",
      "opts": [
        "Dynamic ARP Inspection",
        "PortFast Edge",
        "OSPF summarization",
        "NTP authentication"
      ],
      "ans": 0,
      "exp": "A Dynamic ARP Inspection a DHCP Snooping binding táblára támaszkodva szűrheti a hamis ARP üzeneteket."
    },
    {
      "q": "Mi jellemzi a brute force támadást?",
      "opts": [
        "Sok próbálkozás egymás után",
        "Hamis weboldal készítése",
        "IP-címek automatikus kiosztása",
        "Fizikai kábel megszakítása"
      ],
      "ans": 0,
      "exp": "Brute force esetén a támadó sok lehetséges jelszó- vagy kulcskombinációt próbál ki."
    },
    {
      "type": "multi",
      "q": "Egy switchport port-security kimenetében Maximum MAC Addresses: 3, Total MAC Addresses: 2, Security Violation Count: 0 látható. Mely állítások lehetnek helyesek?",
      "opts": [
        "A port-security engedélyezve lehet az interfészen",
        "Eddig nem látható megsértési esemény a számláló alapján",
        "Pontosan három kézzel rögzített MAC-cím van beállítva",
        "A violation mód csak DHCP-szűrésre vonatkozik"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Ha a port-security engedélyezett és a violation count 0, nincs regisztrált megsértés. A maximum nem azonos a kézzel rögzített címek számával."
    },
    {
      "q": "Központilag szeretnénk nyomon követni, ha egy felhasználó enable módba lép egy routeren. Melyik megoldás illik legjobban?",
      "opts": [
        "Felhasználói naplózás és syslog továbbítás külső szerverre",
        "NetFlow gyűjtés kizárólag sávszélességméréshez",
        "SNMPv1 community string nyilvános megosztása",
        "Konzolkábel állandó kihúzása az eszközből"
      ],
      "ans": 0,
      "exp": "Az enable módba lépés központi követésére a megfelelő naplózás és syslog továbbítás alkalmas."
    },
    {
      "type": "match",
      "q": "Párosítsd a biztonsági vagy felügyeleti megoldást a szerepével!",
      "pairs": [
        [
          "IDS",
          "Támadásgyanús események észlelése és jelzése"
        ],
        [
          "IPS",
          "Támadásgyanús forgalom megelőző blokkolása"
        ],
        [
          "SNMPv3",
          "Felügyelet hitelesítéssel és titkosítással"
        ],
        [
          "Syslog",
          "Naplóüzenetek központi gyűjtése"
        ]
      ],
      "exp": "Az IDS jelez, az IPS beavatkozhat, az SNMPv3 biztonságosabb felügyeletet ad, a syslog naplókat gyűjt."
    }
  ],
  "Statikus és dinamikus routing, NAT": [
    {
      "q": "Melyik útvonal típusa rendelkezik a legkisebb AD értékkel az alábbiak közül?",
      "opts": [
        "RIP útvonal",
        "OSPF útvonal",
        "EIGRP útvonal",
        "Statikus route"
      ],
      "ans": 3,
      "exp": "A felsoroltak közül a statikus route AD értéke a legalacsonyabb, alapértelmezés szerint 1."
    },
    {
      "q": "Mi az OSPF protokoll metrikája (cost)?",
      "opts": [
        "Ugrások száma forrástól célig",
        "Interfész-késleltetés milliszekundumban",
        "100 Mbps osztva az interfész sávszélességével",
        "A vonal megbízhatósági szintje 0–255 közt"
      ],
      "ans": 2,
      "exp": "OSPF cost = referencia-sávszélesség (alapértelm. 100 Mbps) / interfész sávszélessége. Alacsonyabb cost = jobb útvonal. Gigabit esetén az auto-cost reference-bandwidth javasolt."
    },
    {
      "q": "Melyik OSPF csomag tartja fenn a szomszédsági kapcsolatot?",
      "opts": [
        "DBD (Database Description)",
        "LSR (Link State Request)",
        "Hello csomag",
        "LSU (Link State Update)"
      ],
      "ans": 2,
      "exp": "Az OSPF Hello csomagokat periodikusan küld minden OSPF-interfész (alapértelm. 10 mp Etherneten) szomszédkeresésre és -fenntartásra. Multicast: 224.0.0.5."
    },
    {
      "q": "Mi a PAT (Port Address Translation) lényege?",
      "opts": [
        "Minden privát IP kap egy saját publikus IP-t (1:1)",
        "Portszámok alapján több privát IP → egy publikus IP",
        "Fix statikus leképzés privát és publikus cím között",
        "Kizárólag a 443-as HTTPS portot fordítja"
      ],
      "ans": 1,
      "exp": "PAT (más nevén NAT overload) portszámok segítségével különbözteti meg a session-öket: több száz belső eszköz megoszthat egyetlen publikus IP-t."
    },
    {
      "q": "Hol kell elhelyezni az extended ACL-t a legjobb gyakorlat szerint?",
      "opts": [
        "A célhálózathoz minél közelebb",
        "A forráshoz minél közelebb",
        "Bármely routerre, a helye mindegy",
        "Kizárólag az internet-határ routeren"
      ],
      "ans": 1,
      "exp": "Az extended ACL-t a forráshoz közel kell helyezni: a nem kívánt forgalmat minél hamarabb eldobjuk, nem terheljük feleslegesen a belső hálózatot."
    },
    {
      "q": "Mit jelent az ACL implicit deny szabálya?",
      "opts": [
        "Az ACL első bejegyzése alapból deny minden forgalomra",
        "A lista végén egy rejtett deny any blokkol minden mást",
        "Az explicit szabályok után manuálisan kell deny-t írni",
        "A deny bejegyzéseket kötelező a permit elé tenni"
      ],
      "ans": 1,
      "exp": "Minden ACL végén van egy implicit 'deny any any' – ha egy csomag nem illeszkedik egyetlen explicit szabályra sem, el lesz dobva (drop)."
    },
    {
      "q": "Mi az OSPF DR (Designated Router) szerepe multi-access Ethernet-szegmensen?",
      "opts": [
        "Kizárólag a legjobb útvonalat számítja ki a szegmensen",
        "LSA-kat gyűjt össze és terjeszt, csökkentve az OSPF-forgalmat",
        "Az STP Root Bridge szerepének Ethernet-megfelelője",
        "Statikus (kézi) útvonalakat hirdet be az OSPF folyamatba"
      ],
      "ans": 1,
      "exp": "A DR Ethernet szegmensen összegyűjti a DROTHER routerek LSA-it és terjeszti azokat – így n² helyett csak n szomszédsági kapcsolat szükséges."
    },
    {
      "q": "Mi az OSPF router ID kiválasztásának helyes sorrendje Cisco eszközön?",
      "opts": [
        "Legkisebb fizikai IP, majd loopback",
        "Kézi ID, loopback, aktív fizikai IP",
        "MAC-cím, majd VLAN ID",
        "Elsőként beállított default gateway"
      ],
      "ans": 1,
      "exp": "A Cisco sorrendje: kézzel megadott router-id, legnagyobb loopback IP, majd legnagyobb aktív fizikai interfész IP."
    },
    {
      "q": "Mit csinál az OSPF passive-interface beállítás?",
      "opts": [
        "Nem küld Hello-t, de hirdet",
        "Letiltja a fizikai portot",
        "Csak DR-választást indít",
        "Megnöveli a Hello-időt"
      ],
      "ans": 0,
      "exp": "A passive-interface nem küld OSPF Hello csomagokat az adott interfészen, de a hálózatot továbbra is hirdeti."
    },
    {
      "q": "Melyik paranccsal ellenőrizhető az OSPF szomszédsági viszony és a DR/BDR szerepkör?",
      "opts": [
        "show ip route ospf",
        "show ip ospf neighbor",
        "show ip protocols",
        "show ip interface brief"
      ],
      "ans": 1,
      "exp": "A 'show ip ospf neighbor' megjeleníti az OSPF szomszédokat, azok állapotát (FULL/DR, FULL/BDR, 2WAY/DROTHER), a dead időzítőt és a szomszéd interfész IP-jét."
    },
    {
      "q": "Melyik paranccsal törölhetők a dinamikus NAT fordítási bejegyzések a Cisco routeren?",
      "opts": [
        "no ip nat translation",
        "clear ip nat translation *",
        "reset ip nat table",
        "flush ip nat translations"
      ],
      "ans": 1,
      "exp": "A 'clear ip nat translation *' törli az összes dinamikus NAT bejegyzést. A statikus bejegyzések megmaradnak. Érdemes tesztelés előtt kiadni, hogy friss adatokat lássunk."
    },
    {
      "q": "Melyik paranccsal ellenőrizhető a NAT fordítási tábla aktuális tartalma Cisco routeren?",
      "opts": [
        "show ip nat statistics",
        "show ip nat translations",
        "show running-config | include nat",
        "debug ip nat detailed"
      ],
      "ans": 1,
      "exp": "A 'show ip nat translations' megjeleníti az aktív NAT bejegyzéseket: belső lokális/globális és külső lokális/globális IP-cím párokat, protokollt és portszámokat."
    },
    {
      "q": "Mi a floating static route célja?",
      "opts": [
        "Tartalék útvonal magasabb AD értékkel",
        "OSPF DR kézi kiválasztása",
        "PAT-portok automatikus törlése",
        "VLAN-trunkok létrehozása"
      ],
      "ans": 0,
      "exp": "A floating static route magasabb adminisztratív távolságot kap, ezért csak az elsődleges útvonal kiesésekor aktiválódik."
    },
    {
      "q": "Mit jelent az OSPF area 0 szerepe?",
      "opts": [
        "Gerincterület többi area összekapcsolására",
        "DHCP-kliens címkészlet neve",
        "NAT publikus címkészlete",
        "WiFi 2,4 GHz-es csatorna"
      ],
      "ans": 0,
      "exp": "Többterületű OSPF-ben az area 0 a backbone, ehhez kell kapcsolódniuk a többi területnek."
    },
    {
      "q": "Mi a default-information originate hatása OSPF-ben?",
      "opts": [
        "Alapértelmezett útvonal hirdetését indítja",
        "Minden szomszédot passzívvá tesz",
        "OSPF router ID-t töröl",
        "NAT overloadot kapcsol be"
      ],
      "ans": 0,
      "exp": "A parancs arra utasítja az ASBR-t, hogy az alapértelmezett útvonalat OSPF-ben hirdesse."
    },
    {
      "q": "Mire való a show ip ospf neighbor?",
      "opts": [
        "OSPF szomszédok és állapotuk ellenőrzésére",
        "NAT fordítások listázására",
        "Switch MAC-címtábla törlésére",
        "DHCP-kizárások megjelenítésére"
      ],
      "ans": 0,
      "exp": "A parancs megmutatja a szomszéd router ID-jét, prioritását, állapotát, dead timerét és kapcsolódó interfészt."
    },
    {
      "q": "Mi a statikus NAT tipikus használata?",
      "opts": [
        "Belső szerver fix publikus eléréséhez",
        "Sok kliens egy cím mögé rejtéséhez",
        "OSPF metrika automatikus növeléséhez",
        "VLAN-ok közötti tiltáshoz"
      ],
      "ans": 0,
      "exp": "Statikus NAT egy belső helyi címet egy fix belső globális címhez rendel, például publikus webszerverhez."
    },
    {
      "q": "Miért kell NAT-nál inside és outside interfészt jelölni?",
      "opts": [
        "A fordítás irányának meghatározásához",
        "A switchport sebességének rögzítéséhez",
        "A WiFi SSID broadcast tiltásához",
        "Az OSPF area ID átírásához"
      ],
      "ans": 0,
      "exp": "A routernek tudnia kell, melyik oldal a belső címterület és melyik a külső hálózat, hogy helyesen fordítson."
    },
    {
      "q": "Mire szolgál az OSPF default-information originate parancs?",
      "opts": [
        "Default útvonal hirdetésére",
        "Router ID törlésére",
        "NAT tábla ürítésére",
        "ACL sorszámok rendezésére"
      ],
      "ans": 0,
      "exp": "Ez a parancs az alapértelmezett útvonal OSPF-be történő hirdetésére használható."
    },
    {
      "q": "Mit jelent NAT-nál az inside interface?",
      "opts": [
        "Belső hálózat felőli oldal",
        "Publikus internet oldala",
        "Kizárólag loopback interfész",
        "Menedzsment konzol port"
      ],
      "ans": 0,
      "exp": "Az inside interfész a lefordítandó belső címek felőli oldalt jelöli."
    },
    {
      "q": "Mi történhet dinamikus NAT esetén, ha elfogy a címkészlet?",
      "opts": [
        "Új kapcsolatok várhatnak vagy elbuknak",
        "Minden cím statikus lesz",
        "DHCP leáll automatikusan",
        "OSPF költség nullára vált"
      ],
      "ans": 0,
      "exp": "Dinamikus NAT-nál elegendő publikus cím kell a párhuzamos fordításokhoz, különben új fordítás nem jön létre."
    },
    {
      "q": "Melyik útvonalat választja a router azonos célhoz több egyezés közül?",
      "opts": [
        "Leghosszabb prefixűt",
        "Legnagyobb AD értékűt",
        "Legrégebbi ARP bejegyzést",
        "Legmagasabb portszámút"
      ],
      "ans": 0,
      "exp": "A longest prefix match szabály szerint a legpontosabb, leghosszabb prefixű útvonal nyer."
    },
    {
      "q": "Mi a RIP egyik skálázhatósági korlátja?",
      "opts": [
        "15 ugrásos maximum",
        "Nincs IP támogatása",
        "Csak optikai kábelen fut",
        "Nem ismer default útvonalat"
      ],
      "ans": 0,
      "exp": "RIP-ben a 16 ugrás már elérhetetlen, ezért nagyobb hálózatokra nem ideális."
    },
    {
      "q": "Egy routerről a 197.0.0.96/29 hálózat a Gig0/1 kimenő interfészen érhető el. Melyik statikus útvonal illik ehhez?",
      "opts": [
        "ip route 197.0.0.96 255.255.255.248 Gig0/1",
        "ip route 197.0.0.100 255.255.255.248 Gig0/0",
        "ip route 197.0.0.96 255.255.255.0 Gig0/2",
        "ip route 0.0.0.0 255.255.255.248 Gig0/1"
      ],
      "ans": 0,
      "exp": "A statikus route célhálózatot, maszkot és next-hopot vagy kimenő interfészt ad meg. A /29 maszk 255.255.255.248."
    },
    {
      "type": "match",
      "q": "Párosítsd az útvonalforrást az alapértelmezett adminisztratív távolságával!",
      "pairs": [
        [
          "Közvetlenül csatlakoztatott",
          "0"
        ],
        [
          "Statikus route",
          "1"
        ],
        [
          "OSPF",
          "110"
        ],
        [
          "RIP",
          "120"
        ]
      ],
      "exp": "Cisco eszközökön a connected AD 0, a statikus 1, az OSPF 110, a RIP 120."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak PAT / NAT overload használatakor?",
      "opts": [
        "Több belső cím osztozhat egy publikus címen",
        "A forrásportok segítenek a kapcsolatok megkülönböztetésében",
        "Minden belső állomásnak külön publikus cím kötelező",
        "Csak MAC-címek fordítására használható"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "PAT esetén több belső cím egy publikus címet használhat, a munkameneteket portszámok különböztetik meg."
    }
  ],
  "WAN, VPN és SSH": [
    {
      "q": "Mi az IPsec fő célja VPN-kapcsolatokban?",
      "opts": [
        "Sávszélesség növelése alagútban",
        "Titkosítás és integritás védelme",
        "MAC-szűrés távoli hálózaton",
        "VLAN-routing végpontok között"
      ],
      "ans": 1,
      "exp": "Az IPsec titkosítást (ESP), integritás-ellenőrzést (AH/HMAC) és hitelesítést (IKE/Diffie-Hellman) biztosít. Segítségével biztonságos VPN-alagút hozható létre."
    },
    {
      "q": "Miben tér el a site-to-site és a remote-access VPN?",
      "opts": [
        "Előbbi hálózatokat, utóbbi felhasználókat köt be",
        "Előbbi csak WiFi-n, utóbbi csak LAN-on működik",
        "Mindkettő kizárólag MPLS-sel használható",
        "A kettő között nincs működésbeli különbség"
      ],
      "ans": 0,
      "exp": "A site-to-site VPN hálózatokat köt össze, míg a remote-access VPN egyéni távoli kliensek belépését szolgálja."
    },
    {
      "q": "Mi a GRE alagút korlátja az IPsec-hez képest?",
      "opts": [
        "Csak IPv4-et képes alagutazni",
        "Önmagában nem titkosít, ezért nem biztonságos",
        "Kizárólag Cisco eszközök között működik",
        "Maximálisan 1 Mbit/s átviteli sebességet biztosít"
      ],
      "ans": 1,
      "exp": "A GRE tetszőleges Layer 3 protokollt (IPv4, IPv6) képes kapszulázni, de önmagában NEM titkosít. Biztonságos megoldáshoz IPsec-kel kell kombinálni."
    },
    {
      "q": "Mi a Telnet fő hátránya az SSH-val szemben?",
      "opts": [
        "Alacsonyabb adatátviteli sebességű, mint az SSH",
        "Titkosítatlan: jelszavak is olvashatók a hálózaton",
        "Nem rendelkezik beépített IPv6-protokoll-támogatással",
        "Kizárólag Windows operációs rendszeren futtatható"
      ],
      "ans": 1,
      "exp": "A Telnet plain-text: minden adatot, köztük a jelszavakat is, titkosítás nélkül küld. Az SSH (TCP 22) titkosított, hitelesített csatornát biztosít."
    },
    {
      "q": "Melyik SSH port az alapértelmezés?",
      "opts": [
        "21",
        "22",
        "23",
        "443"
      ],
      "ans": 1,
      "exp": "Az SSH (Secure Shell) a TCP 22-es porton dolgozik. FTP: 21, Telnet: 23, HTTPS: 443. Biztonsági okokból szokás más portra áttenni, de a default 22."
    },
    {
      "q": "Mi a PPPoE (Point-to-Point Protocol over Ethernet) jellemző felhasználási területe?",
      "opts": [
        "Belső VLAN-ok összekapcsolása",
        "DSL előfizetői kapcsolatkezelés",
        "Mobilhálózati cellaváltás",
        "FHRP átjáró-redundancia"
      ],
      "ans": 1,
      "exp": "A PPPoE DSL (ADSL, VDSL) internetszolgáltatóknál terjedt el: a felhasználó PPP-n keresztül hitelesíti magát az Ethernet-hálózaton az ISP felé."
    },
    {
      "q": "Miért kombinálják gyakran a GRE-t IPsec-kel?",
      "opts": [
        "Kapszulázás és védelem együtt",
        "Gyorsabb DHCP-kiosztás miatt",
        "STP root bridge cseréhez",
        "WiFi roaming vezérléshez"
      ],
      "ans": 0,
      "exp": "A GRE képes többféle forgalmat, például multicastot kapszulázni, az IPsec pedig titkosítást és hitelesítést ad."
    },
    {
      "q": "Mi a DMVPN egyik fő előnye sok telephely esetén?",
      "opts": [
        "Dinamikus spoke-to-spoke alagutak",
        "Csak statikus host route-ok használata",
        "Minden forgalom kötelező NAT-olása",
        "VLAN-tagelés megszüntetése"
      ],
      "ans": 0,
      "exp": "A DMVPN dinamikusan építhet közvetlen alagutakat a spoke telephelyek között, így skálázhatóbb lehet."
    },
    {
      "q": "Mi az IPsec két fő protokollja és mi a köztük lévő legfontosabb különbség?",
      "opts": [
        "ESP védi a tartalmat, AH csak hitelesít",
        "SSL titkosít, TLS csak naplóz",
        "GRE címez, PPTP route-ot számol",
        "DES routol, AES VLAN-t jelöl"
      ],
      "ans": 0,
      "exp": "Az ESP titkosítást és integritásvédelmet is biztosíthat, míg az AH nem titkosítja a hasznos adatot."
    },
    {
      "q": "Mire használják tipikusan a PPPoE-t DSL-kapcsolatoknál?",
      "opts": [
        "Felhasználói hitelesítésre",
        "OSPF költségszámításra",
        "MAC-címtábla építésre",
        "WiFi csatornaválasztásra"
      ],
      "ans": 0,
      "exp": "A PPPoE Ethernet felett biztosít PPP-alapú hitelesítést és kapcsolatkezelést, gyakran DSL előfizetéseknél."
    },
    {
      "q": "Mi a site-to-site VPN célja?",
      "opts": [
        "Két telephely hálózatainak titkosított összekötése",
        "Egyetlen laptop helyi fájljainak tömörítése",
        "Switchportok VLAN-tagságának kezelése",
        "DHCP-címek gyorsabb kiosztása"
      ],
      "ans": 0,
      "exp": "Site-to-site VPN két hálózat között hoz létre titkosított alagutat, jellemzően interneten keresztül."
    },
    {
      "q": "Mi a remote access VPN jellemzője?",
      "opts": [
        "Egyéni felhasználó csatlakozik titkosítottan",
        "Csak routerek közötti fix kapcsolat",
        "Kizárólag MPLS-hálózatban működik",
        "Nem igényel felhasználóazonosítást"
      ],
      "ans": 0,
      "exp": "Távoli hozzáférésű VPN-nél a mobil vagy otthoni felhasználó klienssel csatlakozik a vállalati hálózathoz."
    },
    {
      "q": "Mi az SSH előnye Telnettel szemben?",
      "opts": [
        "Titkosított távoli parancssori hozzáférést ad",
        "Nem igényel IP-kapcsolatot",
        "Csak fájlmegosztásra használható",
        "Kikapcsolja az összes ACL-t"
      ],
      "ans": 0,
      "exp": "Az SSH titkosítja a hitelesítést és a forgalmat, míg a Telnet nyílt szövegben továbbít."
    },
    {
      "q": "Mi a GRE egyik fontos korlátja?",
      "opts": [
        "Önmagában nem titkosítja az alagutat",
        "Nem képes multicast forgalmat továbbítani",
        "Csak vezeték nélküli LAN-on működik",
        "Minden csomagot DNS-re cserél"
      ],
      "ans": 0,
      "exp": "A GRE alagutazásra jó, de titkosítást nem ad; biztonsághoz gyakran IPsec-kel kombinálják."
    },
    {
      "q": "Mi az MPLS WAN egyik előnye?",
      "opts": [
        "Szolgáltatói gerincen címkézett továbbítást használ",
        "Kötelezővé teszi a betárcsázós modemet",
        "Csak otthoni WiFi-re alkalmazható",
        "Eltávolítja az IP-címzést a LAN-ról"
      ],
      "ans": 0,
      "exp": "Az MPLS címkék alapján továbbít a szolgáltatói hálózatban, skálázható vállalati WAN-megoldást adhat."
    },
    {
      "q": "Melyik kulcspár kapcsolódik az SSH hitelesítéshez?",
      "opts": [
        "Nyilvános és privát kulcs",
        "WEP és WPA kulcs",
        "DHCP és DNS kulcs",
        "STP és LACP kulcs"
      ],
      "ans": 0,
      "exp": "Kulcsos SSH-nál a privát kulcs a kliensnél marad, a publikus kulcs a szerveren engedélyezett."
    },
    {
      "q": "Mi a Telnet fő hátránya SSH-hoz képest?",
      "opts": [
        "Nem titkosítja a kapcsolatot",
        "Nem használ TCP-t",
        "Csak IPv6-on fut",
        "Nem alkalmas CLI elérésre"
      ],
      "ans": 0,
      "exp": "A Telnet titkosítás nélkül továbbít, ezért menedzsmenthez az SSH ajánlott."
    },
    {
      "q": "Az IPsec ESP mire használható?",
      "opts": [
        "Titkosításra és integritásra",
        "DNS rekord létrehozására",
        "STP BPDU küldésére",
        "DHCP bérlet mentésére"
      ],
      "ans": 0,
      "exp": "Az ESP az IPsec egyik protokollja, amely titkosítást és integritásvédelmet biztosíthat."
    },
    {
      "q": "Mi igaz a GRE alagútra önmagában?",
      "opts": [
        "Nem biztosít titkosítást",
        "Mindig AES-t használ",
        "Csak WiFi forgalmat visz",
        "Megszünteti az IP fejlécet"
      ],
      "ans": 0,
      "exp": "A GRE kapszuláz, de önmagában nem titkosít, ezért gyakran IPsec-kel kombinálják."
    },
    {
      "q": "Melyik technológia jellemzően DSL előfizetéseknél fordul elő?",
      "opts": [
        "PPPoE",
        "STP",
        "VTP",
        "LACP"
      ],
      "ans": 0,
      "exp": "A PPPoE Etherneten keresztüli PPP kapcsolatot és hitelesítést biztosíthat DSL környezetben."
    },
    {
      "q": "Mi az MPLS egyik alapelve?",
      "opts": [
        "Címkék alapján továbbít",
        "Csak MAC alapján fordít",
        "WiFi SSID-t oszt ki",
        "Fájlokat tömörít"
      ],
      "ans": 0,
      "exp": "Az MPLS szolgáltatói hálózatokban címkékkel segíti a csomagok továbbítását."
    },
    {
      "q": "Mit jelent a site-to-site VPN?",
      "opts": [
        "Két hálózat közötti alagút",
        "Egyetlen kliens böngészője",
        "Helyi VLAN trunk link",
        "Switch stack kábel"
      ],
      "ans": 0,
      "exp": "Site-to-site VPN két telephely vagy hálózat között hoz létre biztonságos kapcsolatot."
    },
    {
      "q": "Miért nem tekinthető a GRE önmagában biztonságos VPN-megoldásnak?",
      "opts": [
        "Nem titkosítja önmagában az alagútban vitt forgalmat",
        "Csak vezeték nélküli klienseket képes kezelni",
        "Minden csomagot automatikusan töröl útközben",
        "Kizárólag e-mail üzenetek továbbítására való"
      ],
      "ans": 0,
      "exp": "A GRE kapszuláz, de önmagában nem titkosít; biztonságos alagúthoz például IPsec-kel szokták kombinálni."
    },
    {
      "type": "match",
      "q": "Párosítsd a távoli elérési technológiát a jellemzőjével!",
      "pairs": [
        [
          "SSH",
          "Titkosított parancssori távoli kezelés"
        ],
        [
          "Telnet",
          "Titkosítatlan távoli terminálkapcsolat"
        ],
        [
          "Site-to-site VPN",
          "Két hálózat összekötése titkosított alagúttal"
        ],
        [
          "Remote access VPN",
          "Egyéni kliens bekapcsolása vállalati hálózatba"
        ]
      ],
      "exp": "Az SSH titkosított, a Telnet nem. A site-to-site hálózatokat, a remote access egyéni klienst kapcsol be."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak IPsec alapú VPN-ekre?",
      "opts": [
        "Biztosíthat titkosítást és integritásvédelmet",
        "Használhat hitelesítést a felek azonosítására",
        "Csak nyomtatási sorok megosztására készült",
        "Kötelezően kikapcsolja az útválasztást a routeren"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Az IPsec keretrendszer titkosítást, integritásvédelmet és hitelesítést biztosíthat IP-forgalomhoz."
    }
  ],
  "Virtualizáció, felhőszolgáltatások": [
    {
      "q": "Melyik felhőszolgáltatási modell ad VM-et, hálózatot és tárhelyet?",
      "opts": [
        "SaaS",
        "PaaS",
        "IaaS",
        "FaaS"
      ],
      "ans": 2,
      "exp": "Az IaaS infrastruktúra-elemeket, például virtuális gépeket, hálózatot és tárhelyet biztosít."
    },
    {
      "q": "Mi a különbség az 1. és 2. típusú hypervisor között?",
      "opts": [
        "1. típus lassabb, de telepítése egyszerűbb",
        "1. típus közvetlenül a hardveren fut; 2. típus host OS fölött",
        "2. típus szerveres használatra, 1. típus csak asztali gépeken",
        "A kettő között technikailag semmilyen lényegi különbség nincs"
      ],
      "ans": 1,
      "exp": "1. típus (bare-metal): közvetlenül a hardveren fut – VMware ESXi, Hyper-V, Proxmox. 2. típus (hosted): host OS fölött – VirtualBox, VMware Workstation."
    },
    {
      "q": "Mi a konténerizáció (Docker) előnye a teljes VM-virtualizációhoz képest?",
      "opts": [
        "Erősebb hardverizoláció biztosítása a VM-technológiáénál",
        "Gyorsabb indulás és kisebb RAM-igény: megosztott OS-kernel",
        "Magasabb biztonsági szintet nyújt a hagyományos VM-nél",
        "Semmilyen plusz szoftvert vagy daemont nem igényel"
      ],
      "ans": 1,
      "exp": "A konténerek a gazda OS kernelét osztják meg – nincs szükség teljes vendég OS-re. Másodpercek alatt indulnak, kevés RAM-ot igényelnek a VM-ekkel szemben."
    },
    {
      "q": "Mit jelent a 'pay-as-you-go' felhő-modell?",
      "opts": [
        "Előre meghatározott, fix összegű havi átalánydíj",
        "Egyszeri, előre fizetendő szoftver-licencdíj",
        "Csak a tényleges erőforrás-felhasználás után kell fizetni",
        "Az első 30 napos próbaidőszak garantáltan ingyenes"
      ],
      "ans": 2,
      "exp": "A pay-as-you-go (PAYG) modellben csak a tényleges fogyasztás után kell fizetni – nincs előre lekötött kapacitás, rugalmasan skálázható fel és le."
    },
    {
      "q": "Mi jellemzi a hibrid felhőt?",
      "opts": [
        "Kizárólag publikus felhő-infrastruktúrát alkalmaz",
        "Privát és publikus felhő integrált, együttes használata",
        "Több szervezet által közösen üzemeltetett felhő",
        "Kizárólag adatmentési célokra alkalmas felhőtípus"
      ],
      "ans": 1,
      "exp": "A hibrid felhő privát (on-premise / saját adatközpont) és publikus felhő (AWS, Azure) kombinációja, integráltan – lehetővé teszi a rugalmas workload-áthelyezést."
    },
    {
      "q": "Mi a Kubernetes fő feladata?",
      "opts": [
        "Virtuális gépek erőforrásainak elosztása a hypervisoron",
        "Hálózati titkosítás és TLS-tanúsítványok kezelése",
        "Konténerek ütemezése, skálázása és felügyelete (orchestration)",
        "Adatbázis-replikáció és szinkronizáció automatikus kezelése"
      ],
      "ans": 2,
      "exp": "A Kubernetes (K8s) konténerek csoportjait (pod-ok) ütemezi, skálázza és felügyeli – automatikus újraindítás, terheléselosztás, rolling update."
    },
    {
      "q": "Melyik felhőmodell ad kész, felhasználói alkalmazást?",
      "opts": [
        "IaaS",
        "PaaS",
        "SaaS",
        "DaaS"
      ],
      "ans": 2,
      "exp": "A SaaS kész alkalmazást biztosít, amelyet a felhasználó általában böngészőből vagy kliensből használ."
    },
    {
      "q": "Miben tér el az IaaS, PaaS és SaaS felelősségmegosztása?",
      "opts": [
        "Más a szolgáltató által kezelt rétegek köre",
        "Csak a fizetési modellben van eltérés",
        "Mindháromnál minden réteg a felhasználóé",
        "Csak az IaaS használ virtualizációt"
      ],
      "ans": 0,
      "exp": "IaaS-nál a felhasználó több rétegért felel, PaaS-nál főleg az alkalmazásért és adatokért, SaaS-nál a szolgáltató kezeli a legtöbb réteget."
    },
    {
      "q": "Mi különbözteti meg a publikus, privát és hibrid felhőt?",
      "opts": [
        "Az üzemeltetés és hozzáférés modellje",
        "A kizárólagos programozási nyelv",
        "A kötelező IPv6-prefix hossza",
        "Azonos szolgáltató minden esetben"
      ],
      "ans": 0,
      "exp": "A publikus felhő megosztott szolgáltatói környezet, a privát egy szervezetnek dedikált, a hibrid pedig ezek kombinációja."
    },
    {
      "q": "Mi a hypervisor feladata?",
      "opts": [
        "Virtuális gépek futtatása és erőforrás-kezelése",
        "DHCP-címek kiosztása VLAN-onként",
        "DNS-zónák publikus replikálása",
        "Fizikai kábelek érpárjainak mérése"
      ],
      "ans": 0,
      "exp": "A hypervisor kezeli a virtuális gépeket és megosztja köztük a CPU-, memória-, lemez- és hálózati erőforrásokat."
    },
    {
      "q": "Mi a snapshot fő célja virtualizációban?",
      "opts": [
        "Állapot rögzítése visszaállítási ponthoz",
        "Hosszú távú mentés kiváltása minden esetben",
        "CPU-magok fizikai hozzáadása",
        "Licenckulcsok automatikus frissítése"
      ],
      "ans": 0,
      "exp": "A snapshot rövid távú visszaállítási pont frissítés vagy módosítás előtt; nem helyettesíti a rendes mentést."
    },
    {
      "q": "Mi a felhő rugalmasságának lényege?",
      "opts": [
        "Erőforrások gyors bővítése vagy csökkentése",
        "Minden adat kizárólag helyben marad",
        "A szerverek sosem igényelnek hálózatot",
        "A költség mindig fix és forgalomtól független"
      ],
      "ans": 0,
      "exp": "A cloud erőforrásai igény szerint skálázhatók, így terheléshez igazítható a kapacitás."
    },
    {
      "q": "Mi a public cloud jellemzője?",
      "opts": [
        "Szolgáltató megosztott infrastruktúráján fut",
        "Egyetlen cég saját adatközpontjára korlátozott",
        "Csak internet nélküli rendszerekhez való",
        "Nem tartalmaz hálózati szolgáltatásokat"
      ],
      "ans": 0,
      "exp": "Nyilvános felhőben a szolgáltató infrastruktúráját több ügyfél használja elkülönített logikai környezetekben."
    },
    {
      "q": "Mi a hybrid cloud alapötlete?",
      "opts": [
        "Saját és publikus felhő erőforrások kombinálása",
        "Csak SaaS alkalmazások használata",
        "Minden virtuális gép offline futtatása",
        "Felhőszolgáltatások teljes tiltása"
      ],
      "ans": 0,
      "exp": "A hibrid felhő a saját infrastruktúrát és publikus felhőt együttesen használja, például terhelés vagy megfelelőség szerint."
    },
    {
      "q": "Melyik rétegért felel a felhasználó leginkább IaaS esetén?",
      "opts": [
        "Operációs rendszer és alkalmazások kezelése",
        "Fizikai adatközpont hűtése",
        "Hypervisor hardveres javítása",
        "SaaS szolgáltató kódbázisa"
      ],
      "ans": 0,
      "exp": "IaaS-nál a szolgáltató adja az alapinfrastruktúrát, de a vendég OS, frissítések, alkalmazások és adatok jellemzően ügyféloldali felelősségek."
    },
    {
      "q": "Mi jellemzi az 1-es típusú hypervisort?",
      "opts": [
        "Közvetlenül hardveren fut",
        "Böngészőben futó plugin",
        "Csak adatbázis motor",
        "WiFi vezérlő szolgáltatás"
      ],
      "ans": 0,
      "exp": "Az 1-es típusú hypervisor közvetlenül a hardveren fut, külön host operációs rendszer nélkül."
    },
    {
      "q": "Mi jellemzi a 2-es típusú hypervisort?",
      "opts": [
        "Host OS felett fut",
        "Közvetlenül firmware-ben fut",
        "Csak router IOS modul",
        "Hardveres RAID kártya"
      ],
      "ans": 0,
      "exp": "A 2-es típusú hypervisor egy meglévő operációs rendszer felett futtat virtuális gépeket."
    },
    {
      "q": "Miért nem helyettesíti önmagában a snapshot a biztonsági mentést?",
      "opts": [
        "Ugyanazon tárolótól függhet",
        "Mindig offline működik",
        "Csak fizikai szerverhez való",
        "Nem tartalmaz lemezállapotot"
      ],
      "ans": 0,
      "exp": "A snapshot hasznos visszaállítási pont, de nem feltétlenül független mentés."
    },
    {
      "q": "Mi a konténer egyik előnye virtuális géphez képest?",
      "opts": [
        "Kisebb erőforrásigény lehet",
        "Mindig saját kernelt futtat",
        "Nem igényel image-et",
        "Nem használ hálózatot"
      ],
      "ans": 0,
      "exp": "A konténerek megosztják a host kernelét, ezért gyakran kisebb overheadet jelentenek, mint a teljes VM-ek."
    },
    {
      "q": "Mi a hibrid felhő lényege?",
      "opts": [
        "Publikus és privát elemek kombinációja",
        "Csak helyi szerverek használata",
        "Kizárólag ingyenes SaaS",
        "Egyetlen offline gép"
      ],
      "ans": 0,
      "exp": "A hibrid felhő publikus és privát környezetek összekapcsolt használata."
    },
    {
      "q": "Mit jelent az egyetlen hibapont?",
      "opts": [
        "Egy komponens kiesése szolgáltatást állít le",
        "Több tartalék útvonal egyszerre",
        "Két aktív tűzfal párban",
        "Terheléselosztott klaszter"
      ],
      "ans": 0,
      "exp": "Single point of failure esetén egyetlen elem meghibásodása teljes szolgáltatáskimaradást okozhat."
    },
    {
      "type": "multi",
      "q": "Melyek lehetnek egyes típusú, bare-metal hypervisorok?",
      "opts": [
        "VMware ESXi",
        "Microsoft Hyper-V szerepkörként szerveren",
        "Oracle VM VirtualBox",
        "VMware Workstation"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Az ESXi és szerveres Hyper-V közvetlenül vagy közel közvetlenül a hardveren futó virtualizációs megoldás; a Workstation és VirtualBox inkább hostolt típus."
    },
    {
      "type": "match",
      "q": "Párosítsd a felhőszolgáltatási modellt a példaszerű felelősségi körrel!",
      "pairs": [
        [
          "IaaS",
          "Virtuális gépek és hálózati erőforrások kezelése"
        ],
        [
          "PaaS",
          "Alkalmazás futtatása kezelt platformon"
        ],
        [
          "SaaS",
          "Kész alkalmazás használata böngészőből"
        ],
        [
          "On-premise",
          "Saját hardver és teljes stack üzemeltetése"
        ]
      ],
      "exp": "IaaS-nél több infrastruktúra marad a felhasználónál, PaaS-nál a platform kezelt, SaaS-nál kész alkalmazást használunk."
    },
    {
      "q": "Mire használható egy virtuális gép pillanatképe üzemeltetés közben?",
      "opts": [
        "Visszaállási pontként kockázatos változtatás előtt",
        "A fizikai CPU végleges cseréjére szoftverből",
        "A hálózati kábel hibájának automatikus javítására",
        "A felhasználói jelszavak nyílt mentésére"
      ],
      "ans": 0,
      "exp": "Snapshot segítségével kockázatos frissítés vagy konfiguráció előtt visszaállási pont készíthető."
    }
  ],
  "Windows és Linux szerverek": [
    {
      "q": "Mi az Active Directory (AD) fő szerepe Windows Server környezetben?",
      "opts": [
        "Webszerver üzemeltetése HTTP/HTTPS kérések kiszolgálásához",
        "Virtuális gépek futtatása és életciklus-menedzselése",
        "Felhasználók, gépek és erőforrások centralizált azonosítása",
        "Hálózati forgalom valós idejű figyelése és elemzése"
      ],
      "ans": 2,
      "exp": "Az Active Directory domain-alapú könyvtárszolgáltatás: tartalmazza a felhasználói fiókokat, csoportokat, gépeket, és GPO-kkal centrálisan kezeli a beállításokat."
    },
    {
      "q": "Mi a SYSVOL mappa szerepe a domain controlleren?",
      "opts": [
        "A domain felhasználók személyes home könyvtárait tárolja",
        "GPO-fájlokat és logon scripteket tárol, DC-k közt replikálva",
        "A DNS szerver zónafájljait tárolja",
        "A DHCP szerver bérleteinek adatbázisát tárolja"
      ],
      "ans": 1,
      "exp": "A SYSVOL az összes DC között replikálódik – tartalmazza a GPO-fájlokat és logon scripteket, amelyeket a kliensek bejelentkezéskor töltenek le."
    },
    {
      "q": "Melyik Windows-parancs ellenőrzi a rendszerfájlok épségét?",
      "opts": [
        "DISM /online",
        "sfc /scannow",
        "chkdsk /f",
        "gpupdate /force"
      ],
      "ans": 1,
      "exp": "Az sfc /scannow a Windows védett rendszerfájljait ellenőrzi és szükség esetén javítja."
    },
    {
      "q": "Mi az Apache alapértelmezett web-gyökér könyvtára Debian/Ubuntu rendszeren?",
      "opts": [
        "/etc/apache2/sites-enabled",
        "/var/www/html",
        "/usr/share/apache2/default-site",
        "/srv/http/html"
      ],
      "ans": 1,
      "exp": "Az Apache webszerver Debian/Ubuntu rendszeren alapértelmezetten a /var/www/html mappából szolgálja ki a weboldalakat (DocumentRoot direktíva)."
    },
    {
      "q": "Melyik Linux-parancs mutatja a fájlrendszerek szabad helyét?",
      "opts": [
        "free -h",
        "df -h",
        "ls -lh",
        "du -sh"
      ],
      "ans": 1,
      "exp": "A df -h a csatolt fájlrendszerek méretét, foglalt és szabad helyét mutatja."
    },
    {
      "q": "Melyik Linux-parancs módosítja a fájljogosultságokat?",
      "opts": [
        "chown",
        "usermod",
        "chmod",
        "sudo"
      ],
      "ans": 2,
      "exp": "A chmod állítja a fájlok és könyvtárak hozzáférési jogosultságait."
    },
    {
      "q": "Miben különbözik az AD-tartomány és a munkacsoport?",
      "opts": [
        "Tartományban központi azonosítás van",
        "Munkacsoportban kötelező a domain controller",
        "Mindkettő ugyanaz Active Directory néven",
        "Tartomány csak internetes DNS-zóna lehet"
      ],
      "ans": 0,
      "exp": "Tartományban a felhasználók és gépek központilag kezelhetők Active Directoryval; munkacsoportban a kezelés helyi jellegű."
    },
    {
      "q": "Melyik Linux-parancs mutatja a futó folyamatokat interaktívan?",
      "opts": [
        "top",
        "df -h",
        "chmod",
        "hostnamectl"
      ],
      "ans": 0,
      "exp": "A top valós időben mutatja a folyamatokat, CPU- és memóriahasználatot."
    },
    {
      "q": "Mit állít a chmod parancs Linuxon?",
      "opts": [
        "Fájl- és könyvtárjogosultságokat",
        "IP-címeket interfészeken",
        "DNS-rekordok TTL értékét",
        "Felhasználói csoportneveket AD-ban"
      ],
      "ans": 0,
      "exp": "A chmod a fájlok jogosultságait módosítja, például olvasás, írás és végrehajtás jogot."
    },
    {
      "q": "Mi az Active Directory OU szerepe?",
      "opts": [
        "Objektumok szervezése és GPO célzása",
        "DNS-zóna publikus delegálása",
        "DHCP-címek automatikus törlése",
        "RAID-tömbök újjáépítése"
      ],
      "ans": 0,
      "exp": "Az OU logikai tároló felhasználók, gépek és csoportok szervezésére, valamint GPO-k célzására."
    },
    {
      "q": "Mire való a DNS A rekord?",
      "opts": [
        "Név hozzárendelése IPv4-címhez",
        "Levelezőszerver prioritásának jelölése",
        "IPv6-cím hozzárendelése névhez",
        "Alias név másik névhez"
      ],
      "ans": 0,
      "exp": "Az A rekord egy hosztnevet IPv4-címre old fel. IPv6 esetén AAAA rekordot használunk."
    },
    {
      "q": "Mire való a DHCP scope?",
      "opts": [
        "Kiosztható IP-címtartomány és opciók megadása",
        "Weboldalak dokumentumgyökérének beállítása",
        "Felhasználók csoporttagságának törlése",
        "RAID lemezparitás számítása"
      ],
      "ans": 0,
      "exp": "A DHCP scope tartalmazza a kliensnek kiosztható címeket és opciókat, például átjárót és DNS-szervert."
    },
    {
      "q": "Mit jelent a Linux systemctl status kimenetében az active running?",
      "opts": [
        "A szolgáltatás fut és aktív",
        "A szolgáltatás végleg törölve lett",
        "A kernel nem ismeri a szolgáltatást",
        "A fájlrendszer csak olvasható"
      ],
      "ans": 0,
      "exp": "Az active running állapot azt jelenti, hogy a szolgáltatás elindult és jelenleg fut."
    },
    {
      "q": "Melyik eszközzel hozható létre AD felhasználó grafikus felületen?",
      "opts": [
        "Active Directory Users and Computers",
        "DHCP Manager",
        "DNS Cache Viewer",
        "Windows Defender Firewall"
      ],
      "ans": 0,
      "exp": "Az ADUC konzol használható Active Directory objektumok, például felhasználók kezelésére."
    },
    {
      "q": "Mi a SYSVOL mappa szerepe domain controlleren?",
      "opts": [
        "GPO-k és logon scriptek tárolása",
        "DHCP bérletek titkosítása",
        "Felhasználói levelek archiválása",
        "RAID paritás mentése"
      ],
      "ans": 0,
      "exp": "A SYSVOL replikált megosztás, amely többek között GPO-kat és logon scripteket tartalmaz."
    },
    {
      "q": "Mi a Windows Server Core egyik előnye?",
      "opts": [
        "Kisebb támadási felület",
        "Csak grafikus felület",
        "Nagyobb játékkompatibilitás",
        "Kötelező böngészőhasználat"
      ],
      "ans": 0,
      "exp": "Server Core kevesebb komponenst futtat, így kisebb erőforrásigénye és támadási felülete lehet."
    },
    {
      "q": "Mire szolgál az RDP?",
      "opts": [
        "Távoli asztali elérésre",
        "DNS zóna átvitelre",
        "Fájlok tömörítésére",
        "WiFi roamingra"
      ],
      "ans": 0,
      "exp": "Az RDP távoli grafikus Windows munkamenet elérésére használható."
    },
    {
      "q": "Melyik Linux parancs lapozva jeleníti meg egy fájl tartalmát?",
      "opts": [
        "less",
        "rm",
        "chmod",
        "mkdir"
      ],
      "ans": 0,
      "exp": "A less lehetővé teszi nagyobb szövegfájlok kényelmes, lapozható megtekintését."
    },
    {
      "q": "Melyik Linux szolgáltatás használható Windows-kompatibilis fájlmegosztásra?",
      "opts": [
        "Samba",
        "NFS",
        "Cron",
        "UFW"
      ],
      "ans": 0,
      "exp": "A Samba SMB/CIFS megosztást biztosít, így Windows kliensekkel is jól használható."
    },
    {
      "type": "multi",
      "q": "Két azonos hálózati nyomtató Windows szerveren van megosztva. Mely beállítások lehetnek reálisak?",
      "opts": [
        "A két eszköz megjelenhet egyetlen nyomtatási sorként",
        "Felhasználók nyomtathatnak csak megadott időszakban",
        "A páros és páratlan oldalak automatikusan mindig külön nyomtatóra mennek",
        "Egy másik felhasználó korrektúrázhatja a nyomatot még spoolban"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Windows szerveren megoldható nyomtatópool és elérési idő korlátozása. A korrektúrázás nem nyomtatószerver-funkció."
    },
    {
      "type": "match",
      "q": "Párosítsd a szolgáltatást vagy parancsot a feladatával!",
      "pairs": [
        [
          "Samba",
          "Windows-kompatibilis fájlmegosztás Linuxon"
        ],
        [
          "NFS",
          "Unix/Linux jellegű hálózati fájlrendszer"
        ],
        [
          "systemctl",
          "Szolgáltatások kezelése systemd rendszeren"
        ],
        [
          "/var/log",
          "Naplófájlok jellemző helye Linuxon"
        ]
      ],
      "exp": "A Samba SMB-megosztás, az NFS hálózati fájlrendszer, a systemctl szolgáltatáskezelő, a /var/log naplókönyvtár."
    },
    {
      "q": "Melyik Windows Server szerepkör segít kliensgépek hálózati telepítésében PXE-indítással?",
      "opts": [
        "WDS",
        "IIS",
        "WSUS",
        "DNS"
      ],
      "ans": 0,
      "exp": "A Windows Deployment Services (WDS) hálózaton keresztüli operációs rendszer telepítést támogat."
    }
  ],
  "Hálózatmonitorozás, -felügyelet": [
    {
      "q": "Mi a Syslog protokoll feladata?",
      "opts": [
        "Hálózati eszközök IP-kiosztása DHCP segítségével",
        "Naplóbejegyzések összegyűjtése central Syslog-szerverre",
        "Hálózati eszközök rendszeróráinak szinkronizálása (NTP)",
        "Hálózati eszközök MAC-cím feloldása ARP-on keresztül"
      ],
      "ans": 1,
      "exp": "A Syslog (UDP 514) lehetővé teszi, hogy hálózati eszközök, szerverek naplóüzeneteiket egy central syslog-szerverre küldjék – könnyebb auditálás és hibaelhárítás."
    },
    {
      "q": "Mi az NTP (Network Time Protocol) feladata?",
      "opts": [
        "IP-cím dinamikus kiosztása végpontoknak",
        "Domain nevek IP-re fordítása",
        "Hálózati eszközök pontos időszinkronizálása",
        "Naplóüzenetek gyűjtése central szerverre"
      ],
      "ans": 2,
      "exp": "Az NTP (UDP 123) szinkronizálja az órákat a hálózati eszközök között. Pontos idő kritikus a naplózás koherenciájához, Kerberos hitelesítéshez és TLS tanúsítványokhoz."
    },
    {
      "q": "Melyik SNMP-verzió támogat titkosított és hitelesített működést?",
      "opts": [
        "SNMPv1",
        "SNMPv2c",
        "SNMPv3",
        "SNMPv4"
      ],
      "ans": 2,
      "exp": "Az SNMPv3 képes hitelesítést és titkosítást használni, ezért biztonságosabb a v1/v2c megoldásoknál."
    },
    {
      "q": "Mi a CDP (Cisco Discovery Protocol) funkciója?",
      "opts": [
        "Hálózati forgalom Layer 2-n történő titkosítása",
        "Közvetlen szomszéd Cisco eszközök adatainak felfedezése",
        "IP-cím kiosztása a hozzákapcsolt végeszközöknek",
        "VLAN-konfiguráció automatikus szinkronizálása switchek között"
      ],
      "ans": 1,
      "exp": "A CDP Cisco Layer 2 protokoll: megmutatja a közvetlen szomszéd Cisco eszközök nevét, modelljét, IP-jét, OS-verzióját és portjait – hasznos dokumentáláshoz és hibakereséshez."
    },
    {
      "q": "Mi az LLDP és miben különbözik a CDP-től?",
      "opts": [
        "Azonos a CDP-vel, csupán eltérő rövidítéssel",
        "Nyílt IEEE 802.1AB szomszéd-felderítési szabvány",
        "Cisco saját protokollja, a CDP teljes körű helyettesítője",
        "Layer 3 forgalomirányítási protokoll, az OSPF alternatívája"
      ],
      "ans": 1,
      "exp": "Az LLDP (Link Layer Discovery Protocol – IEEE 802.1AB) nyílt szabvány: bármely gyártó eszközei hirdethetik adataikat egymásnak. Vegyes gyártói hálózatban ajánlott a CDP helyett."
    },
    {
      "q": "Mi a baseline (viszonyítási alap) szerepe a hálózat-felügyeletben?",
      "opts": [
        "A hálózat legösszetettebb konfigurációjának részletes dokumentációja",
        "Normális működési paraméterek rögzítve összehasonlítási alapnak",
        "Az OSI-modell mind a hét rétegének részletes magyarázata",
        "Az összes router futó konfigurációjának biztonsági mentése"
      ],
      "ans": 1,
      "exp": "A baseline a normál működési paramétereket (sávszélesség-kihasználtság, késleltetés, hibaarány) rögzíti. Az ettől való eltérés jelzi a problémát."
    },
    {
      "q": "Mi a NetFlow protokoll felhasználási területe?",
      "opts": [
        "Hálózati eszközök távoli konfigurálása és menedzselése",
        "IP-forgalomstatisztika gyűjtése (ki, kivel, mennyi adatot)",
        "DNS-lekérdezések naplózása és archiválása",
        "Hálózati sávszélesség korlátozása QoS-politikákkal"
      ],
      "ans": 1,
      "exp": "A NetFlow (Cisco) / sFlow / IPFIX a routereken és switcheken áthaladó forgalom statisztikáit gyűjti: forrás/cél IP, portok, protokoll, bájt/csomagszám – kapacitástervezéshez, biztonsághoz."
    },
    {
      "q": "Mit jelöl az NTP stratum érték?",
      "opts": [
        "Időforrástól mért hierarchiaszintet",
        "Syslog súlyossági szintet",
        "WiFi csatorna szélességet",
        "RAID tömb paritásfokát"
      ],
      "ans": 0,
      "exp": "Az NTP stratum az időforrás-hierarchiában elfoglalt szintet jelzi; a stratum 0 referenciaóra, például GPS vagy atomóra."
    },
    {
      "q": "Mi a fő biztonsági különbség az SNMPv2c és az SNMPv3 között?",
      "opts": [
        "v3 authPriv módot is ad",
        "v2c kötelező TLS-t használ",
        "v3 csak IPv6-címen fut",
        "v2c nem használ közösséget"
      ],
      "ans": 0,
      "exp": "Az SNMPv2c community string alapú, titkosítás nélküli; az SNMPv3 hitelesítést és titkosítást is támogat."
    },
    {
      "q": "Mit jelöl a Syslog facility?",
      "opts": [
        "Üzenetforrás kategóriáját",
        "Üzenet titkosítási kulcsát",
        "Interfész duplex állapotát",
        "NTP szerver stratumát"
      ],
      "ans": 0,
      "exp": "A facility a naplóüzenet forrásának vagy kategóriájának azonosítására szolgál."
    },
    {
      "q": "Melyik paranccsal ellenőrizhető, hogy a Cisco eszköz szinkronizálva van-e az NTP-szerverrel?",
      "opts": [
        "show clock detail",
        "show ntp status",
        "show ip ntp associations",
        "show time synchronization"
      ],
      "ans": 1,
      "exp": "A 'show ntp status' megmutatja, hogy az eszköz szinkronizált-e (synchronized/unsynchronized), mi az NTP forrás IP-je, a stratum szint és az eltérés (offset) milliszekundumban."
    },
    {
      "q": "Mi az SNMP fő célja?",
      "opts": [
        "Hálózati eszközök állapotának lekérdezése és felügyelete",
        "Fájlok biztonságos másolása két szerver között",
        "VLAN-ok közötti routing hardveresen",
        "WiFi csatornák automatikus titkosítása"
      ],
      "ans": 0,
      "exp": "Az SNMP menedzsmentprotokoll, amellyel eszközállapotok, interfészszámlálók és riasztások kezelhetők."
    },
    {
      "q": "Mi a syslog szerver szerepe?",
      "opts": [
        "Eszköznaplók központi gyűjtése",
        "IP-címek kiosztása klienseknek",
        "MAC-címek dinamikus tanulása",
        "VPN-kulcsok generálása"
      ],
      "ans": 0,
      "exp": "A syslog központilag gyűjti a hálózati és szerveres naplóüzeneteket, így könnyebb az elemzés és audit."
    },
    {
      "q": "Mit jelent egy monitorozási küszöbérték?",
      "opts": [
        "Határ, amely felett riasztás keletkezhet",
        "A switch rackmagassága RU-ban",
        "A DHCP lease minimális ideje",
        "A VLAN trunk native száma"
      ],
      "ans": 0,
      "exp": "Küszöbértéket például CPU-terhelésre, interfész-kihasználtságra vagy csomagvesztésre lehet megadni riasztáshoz."
    },
    {
      "q": "Mi a NetFlow jellegű adatok haszna?",
      "opts": [
        "Forgalmi minták és beszélgetések elemzése",
        "Fájlok tömörítése mentés előtt",
        "Windows licenckulcsok ellenőrzése",
        "OSPF router ID automatikus választása"
      ],
      "ans": 0,
      "exp": "Flow-adatokból látható, ki kivel kommunikál, milyen protokollon és mennyi forgalommal."
    },
    {
      "q": "Mit jelent a rendelkezésre állás monitorozása?",
      "opts": [
        "Szolgáltatás elérhetőségének folyamatos ellenőrzése",
        "Felhasználói jelszavak időszakos listázása",
        "Switchportok manuális VLAN-cseréje",
        "Fizikai kábelek szín szerinti leltára"
      ],
      "ans": 0,
      "exp": "Availability monitoring pinggel, TCP-checkkel vagy alkalmazásszintű próbával figyeli, működik-e a szolgáltatás."
    },
    {
      "q": "Miért fontos az időszinkron naplóelemzéskor?",
      "opts": [
        "Eseménysorrend miatt",
        "Gyorsabb switching miatt",
        "Erősebb WiFi jel miatt",
        "Kábeljavítás miatt"
      ],
      "ans": 0,
      "exp": "Ha az eszközök órája egyezik, az események időrendje pontosabban visszakövethető."
    },
    {
      "q": "SNMP környezetben mi az agent szerepe?",
      "opts": [
        "Eszközadatok szolgáltatása",
        "Naplók titkosítása",
        "DNS zóna replikálása",
        "VLAN trunk lezárása"
      ],
      "ans": 0,
      "exp": "Az SNMP agent az eszközön fut, és menedzsmentinformációkat ad a monitorozó rendszernek."
    },
    {
      "q": "Miért kockázatos az SNMPv2c community string?",
      "opts": [
        "Titkosítás nélkül haladhat",
        "Mindig lejár percenként",
        "Csak IPv6-on működik",
        "Nem enged olvasást"
      ],
      "ans": 0,
      "exp": "Az SNMPv2c community string nem nyújt modern hitelesítést és titkosítást, ezért érzékeny adat lehet."
    },
    {
      "q": "Melyik porton érkeznek tipikusan a Syslog UDP üzenetek?",
      "opts": [
        "514",
        "53",
        "123",
        "161"
      ],
      "ans": 0,
      "exp": "A Syslog tipikus UDP portja az 514."
    },
    {
      "q": "Melyik port kapcsolódik az NTP működéséhez?",
      "opts": [
        "123",
        "22",
        "80",
        "443"
      ],
      "ans": 0,
      "exp": "Az NTP alapértelmezett portja UDP 123."
    },
    {
      "q": "Miért hasznos hálózati baseline-t készíteni?",
      "opts": [
        "Eltérések felismerésére",
        "DHCP címek kiosztására",
        "Trunk portok titkosítására",
        "RAID tömbök építésére"
      ],
      "ans": 0,
      "exp": "A baseline normál működési mintát ad, amelyhez a későbbi értékek viszonyíthatók."
    },
    {
      "q": "Milyen riasztási küszöb lehet hasznos monitorozásnál?",
      "opts": [
        "CPU vagy interfész kihasználtság",
        "Billentyűzet kiosztás",
        "Monitor fényereje",
        "Felhasználói avatár méret"
      ],
      "ans": 0,
      "exp": "A túl magas CPU-, memória- vagy interfészterhelés korai hibajelzés lehet."
    },
    {
      "type": "match",
      "q": "Párosítsd a monitorozási technológiát a jellemző adatával!",
      "pairs": [
        [
          "SNMP",
          "Eszközállapotok és számlálók lekérdezése"
        ],
        [
          "Syslog",
          "Naplóüzenetek központi gyűjtése"
        ],
        [
          "NetFlow",
          "Forgalmi flow-adatok elemzése"
        ],
        [
          "NTP",
          "Időszinkron biztosítása"
        ]
      ],
      "exp": "SNMP állapotot kérdez, Syslog naplót gyűjt, NetFlow forgalmi folyamokat elemez, NTP időt szinkronizál."
    },
    {
      "type": "multi",
      "q": "Mely állítások igazak SNMP használatakor?",
      "opts": [
        "Az SNMPv3 hitelesítést és titkosítást is támogathat",
        "Az SNMP v1/v2c community string alapú hozzáférést használ",
        "Az SNMP kizárólag IP-címek kiosztására szolgál",
        "Az SNMP minden esetben kiváltja a syslog naplózást"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Az SNMPv3 biztonságosabb, a v1/v2c community stringet használ. Nem IP-kiosztó protokoll, és nem helyettesíti a syslogot."
    },
    {
      "q": "Melyik protokoll gyártófüggetlen módon képes szomszédos hálózati eszközök adatait hirdetni?",
      "opts": [
        "LLDP",
        "CDP",
        "VTP",
        "HSRP"
      ],
      "ans": 0,
      "exp": "Az LLDP nyílt, gyártófüggetlen szomszédfelderítő protokoll. A CDP Cisco-specifikus."
    }
  ],
  "Kis és közepes hálózatok tervezése": [
    {
      "q": "Mit jelent a háromrétegű hierarchikus hálózati modell?",
      "opts": [
        "Core, distribution és access rétegek szétválasztását",
        "Az OSI-modell felső három rétegének használatát",
        "Csak Layer 3 routerekből álló hálózatot",
        "Három különálló épület összekötési módját"
      ],
      "ans": 0,
      "exp": "A modell az access, distribution és core rétegek feladatait különíti el, így a hálózat könnyebben bővíthető és hiba esetén jobban kezelhető."
    },
    {
      "q": "Milyen elsődleges szempontok alapján válasszuk ki a megfelelő switchet hálózattervezésnél?",
      "opts": [
        "A switch esztétikus megjelenése és a rack-ba való illeszkedés",
        "Portsűrűség, sebesség, Layer 2/3 képességek és PoE-igény",
        "Kizárólag a legolcsóbb elérhető megoldás",
        "A gyártó logója és marketinganyaga"
      ],
      "ans": 1,
      "exp": "Switch kiválasztásakor: hány port kell, milyen sebességen (1G/10G), szükséges-e PoE (IP-kamera, VoIP-telefon), kell-e L3 routing (SVI) – ezek a funkcionális szempontok az elsők."
    },
    {
      "q": "Mi a hálózati dokumentáció célja?",
      "opts": [
        "A hálózati eszközök esztétikus fizikai elhelyezésének tervezése",
        "Topológia, IP-terv és konfig rögzítése hibakereséshez, bővítéshez",
        "Kizárólag hatályos jogi kötelezettségek teljesítésére szolgál",
        "A hálózati eszközök jelszavainak biztonságos, titkosított tárolása"
      ],
      "ans": 1,
      "exp": "A hálózati dokumentáció (logikai/fizikai topológia, IP-cím-terv, VLAN-táblázat, konfigurációk) nélkülözhetetlen a gyors hibaelhárításhoz, bővítéshez és átadáshoz."
    },
    {
      "q": "Mit jelent a hálózat szegmentálása VLAN-okkal biztonsági szempontból?",
      "opts": [
        "Minden szegmens ugyanabban az egyetlen broadcast tartományban van",
        "Logikai izoláció: egy szegmens sérülése nem terjed a többi részre",
        "Teljesen felesleges, ha a hálózaton tűzfal is üzemel",
        "A sávszélesség automatikusan és arányosan megoszlik a szegmensek közt"
      ],
      "ans": 1,
      "exp": "A VLAN-alapú szegmentálás izolál: ha egy szegmens (pl. IoT vagy vendég WiFi) kompromittálódik, a forgalom nem jut automatikusan a többi szegmensbe."
    },
    {
      "q": "Mi az IP-címterv fő szerepe egy KKV-hálózatban?",
      "opts": [
        "MAC-címek gyártói nyilvántartása",
        "Strukturált címkiosztás és ütközéselkerülés",
        "Csak nagyvállalati környezetben szükséges",
        "Internetszolgáltatói címek automatikus kérése"
      ],
      "ans": 1,
      "exp": "Az IP-címterv előre rögzíti az alhálózatokat, címkiosztási tartományokat, átjárókat és tartalékokat, így csökken az ütközés és könnyebb a hibaelhárítás."
    },
    {
      "q": "Milyen eszközt érdemes használni a hálózat folyamatosan változó konfigurációinak kezelésére?",
      "opts": [
        "Egyszerű szöveges Notepad fájl a jelszavakkal és IP-kel",
        "Automatizációs eszköz (pl. Ansible, Netmiko) konfig-kezelésre",
        "Minden eszközt egyenként, manuálisan CLI-ről kell konfigurálni",
        "Az összes eszköz gyári alapállapotának teljes megőrzése"
      ],
      "ans": 1,
      "exp": "Az automatizációs eszközök (Ansible, Netmiko, NAPALM) lehetővé teszik a konfigurációk deklaratív, verziókövethető, egységes kezelését – csökkenti az emberi hibák esélyét."
    },
    {
      "q": "Mi a strukturált hálózati hibaelhárítás helyes kezdete?",
      "opts": [
        "Megoldás alkalmazása, majd dokumentálás",
        "Probléma meghatározása és adatgyűjtés",
        "Elmélet felállítása bizonyíték nélkül",
        "Eszközcsere és utólagos ellenőrzés"
      ],
      "ans": 1,
      "exp": "A hétlépéses folyamat a probléma meghatározásával indul, majd információgyűjtés és elemzés következik; a megoldás csak ellenőrzött elmélet után jön."
    },
    {
      "q": "Mit jelent a switch-blokk hierarchikus hálózattervezésben?",
      "opts": [
        "Önállóan kezelhető switch-csoport",
        "Egyetlen trunk native VLAN-ja",
        "OSPF area 0 másik neve",
        "DHCP pool klienslistája"
      ],
      "ans": 0,
      "exp": "A switch-blokk olyan, elkülöníthetően kezelhető hálózati rész, amely segíti a skálázhatóságot és a hibák behatárolását."
    },
    {
      "q": "Mire szolgál a baseline hálózatfelügyeletben?",
      "opts": [
        "Normál működés rögzítésére",
        "VLAN-ok automatikus törlésére",
        "Publikus IP-k kiosztására",
        "Tűzfalszabályok titkosítására"
      ],
      "ans": 0,
      "exp": "A baseline megmutatja a normál működési értékeket, így eltérés esetén könnyebb felismerni a problémát."
    },
    {
      "q": "Miért fontos a logikai topológiai rajz?",
      "opts": [
        "Kapcsolatok, alhálózatok és routing áttekintéséhez",
        "Rackcsavarok darabszámának méréséhez",
        "Felhasználók jelszavának tárolásához",
        "Monitorok felbontásának egységesítéséhez"
      ],
      "ans": 0,
      "exp": "A logikai topológia a VLAN-okat, alhálózatokat, routingot és eszközkapcsolatokat mutatja, nem a kábelek fizikai útját."
    },
    {
      "q": "Mi a skálázható hálózattervezés egyik jele?",
      "opts": [
        "Tartalék címek és bővíthető rétegek",
        "Minden eszköz egyetlen VLAN-ban",
        "Dokumentáció teljes mellőzése",
        "Egyetlen uplink minden kritikus ponton"
      ],
      "ans": 0,
      "exp": "Skálázható tervnél van címzési tartalék, strukturált rétegzés és bővíthető kapacitás."
    },
    {
      "q": "Miért hasznos külön vendég VLAN-t létrehozni?",
      "opts": [
        "Elkülöníti a vendégforgalmat a belső rendszerektől",
        "Megszünteti a WiFi jelszó szükségességét",
        "Automatikusan növeli az internetsebességet",
        "Kiváltja az IP-címtervezést"
      ],
      "ans": 0,
      "exp": "A vendég VLAN biztonsági szegmentálást ad, így a látogatók nem férnek hozzá belső erőforrásokhoz."
    },
    {
      "q": "Mit tartalmazzon egy alap hálózati dokumentáció?",
      "opts": [
        "Eszközök, IP-k, VLAN-ok, portok és kapcsolatok",
        "Csak a beszerzési számlák dátumát",
        "Felhasználók személyes jelszavait",
        "Minden e-mail teljes tartalmát"
      ],
      "ans": 0,
      "exp": "A jó dokumentáció tartalmazza az eszközneveket, interfészeket, IP-címeket, VLAN-okat, trunkokat, átjárókat és fizikai helyet."
    },
    {
      "q": "Mi a redundáns uplink célja access-distribution kapcsolatban?",
      "opts": [
        "Kapcsolatkiesés hatásának csökkentése",
        "DHCP-bérleti idő rövidítése",
        "Felhasználói jelszavak erősítése",
        "OS telepítés gyorsítása"
      ],
      "ans": 0,
      "exp": "Redundáns uplink esetén egy link hibája nem szakítja meg az access switch teljes kapcsolatát a hálózat többi részével."
    },
    {
      "q": "Miért kell teljesítményigényt becsülni hálózattervezéskor?",
      "opts": [
        "Kapacitásméretezéshez",
        "Kábelszínek választásához",
        "Böngésző kezdőlapjához",
        "Billentyűzetkiosztáshoz"
      ],
      "ans": 0,
      "exp": "A várható terhelés alapján választható megfelelő sávszélességű kapcsolat, switch, router és szerverkapacitás."
    },
    {
      "q": "Mi a hierarchikus hálózati modell egyik előnye?",
      "opts": [
        "Jobb skálázhatóság és átláthatóság",
        "Kevesebb IP-cím szükséges mindig",
        "STP teljes kikapcsolása",
        "DNS nélküli internetezés"
      ],
      "ans": 0,
      "exp": "A hierarchikus modell elkülöníti a funkciókat, így könnyebb tervezni, bővíteni és hibát keresni."
    },
    {
      "q": "Miért fontos az IP-címzési terv készítése?",
      "opts": [
        "Ütközések és pazarlás csökkentésére",
        "WiFi jelszavak mentésére",
        "CPU órajel tervezésére",
        "Felhasználói e-mailek törlésére"
      ],
      "ans": 0,
      "exp": "A címzési terv strukturált kiosztást ad, csökkentve az ütközések és átfedések esélyét."
    },
    {
      "q": "Mit tartalmazzon egy fizikai hálózati dokumentáció?",
      "opts": [
        "Eszközök, portok és kábelek adatait",
        "Csak felhasználói jelszavakat",
        "Kizárólag szoftverlicenceket",
        "Minden böngészési előzményt"
      ],
      "ans": 0,
      "exp": "A fizikai dokumentáció rögzíti az eszközök helyét, portjait, kábelezését és kapcsolatait."
    },
    {
      "q": "Mit tartalmazzon egy logikai hálózati dokumentáció?",
      "opts": [
        "IP-k, VLAN-ok és útvonalak adatait",
        "Csak rack szekrény méretet",
        "Csavarok pontos darabszámát",
        "Monitorok típusát"
      ],
      "ans": 0,
      "exp": "A logikai dokumentációban IP-címzés, VLAN-ok, alhálózatok, routing és szolgáltatások szerepelhetnek."
    },
    {
      "q": "Miért érdemes redundáns internetkapcsolatot tervezni kritikus irodánál?",
      "opts": [
        "Szolgáltatáskiesés csökkentésére",
        "Nyomtatási sebesség növelésére",
        "Jelszóházirend kiváltására",
        "RAM használat mérséklésére"
      ],
      "ans": 0,
      "exp": "Tartalék kapcsolat esetén egy szolgáltatói vagy vonali hiba nem feltétlenül okoz teljes kiesést."
    },
    {
      "q": "Miért fontos változáskezelést alkalmazni hálózati módosításoknál?",
      "opts": [
        "Visszakövethető és visszaállítható legyen",
        "Automatikusan nőjön a sávszélesség",
        "Megszűnjön minden tűzfalszabály",
        "Minden VLAN egyesüljön"
      ],
      "ans": 0,
      "exp": "A változáskezelés csökkenti a hibás módosítások kockázatát, és segíti a visszaállást."
    },
    {
      "type": "match",
      "q": "Párosítsd a háromrétegű hálózati modellt a fő szerepével!",
      "pairs": [
        [
          "Access réteg",
          "Végpontok és felhasználói eszközök csatlakoztatása"
        ],
        [
          "Distribution réteg",
          "Házirendek, szűrés és rétegek közötti összekötés"
        ],
        [
          "Core réteg",
          "Nagy sebességű gerinc és továbbítás"
        ],
        [
          "Perem kapcsolat",
          "Külső szolgáltató vagy internet felé vezető kapcsolat"
        ]
      ],
      "exp": "Access a végponti csatlakozás, distribution a szabályozás/összekötés, core a gyors gerinc, perem a külső kapcsolat."
    },
    {
      "q": "A WLAN fizikai címszűrését a háromrétegű modell melyik részéhez sorolnád leginkább?",
      "opts": [
        "Hozzáférési réteg",
        "Központi réteg",
        "Adatbázis réteg",
        "Tárolási réteg"
      ],
      "ans": 0,
      "exp": "A MAC-szűrés a kliensek hozzáféréséhez kapcsolódik, ezért a hozzáférési réteghez illik."
    },
    {
      "type": "multi",
      "q": "Mely szempontok tartoznak egy kis- vagy közepes hálózat IP-címzési tervéhez?",
      "opts": [
        "VLAN-onkénti alhálózatok kijelölése",
        "Címtartományok dokumentálása és tartalékolása",
        "Felhasználók monitorának képaránya",
        "Billentyűzetek nyelvi kiosztásának egységesítése"
      ],
      "ans": [
        0,
        1
      ],
      "exp": "Címzési tervnél a VLAN-ok, alhálózatok, tartalékok és dokumentáció fontosak, nem a perifériák megjelenési beállításai."
    }
  ]
};

const TOTAL_QUESTIONS = 473;

function shuffle(a){return a.map(v=>({v,s:Math.random()})).sort((a,b)=>a.s-b.s).map(x=>x.v)}
function esc(s){return String(s).replace(/[&<>\"]/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[ch]||ch));}
function ft(s){return`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}
function today(){return new Date().toISOString().slice(0,10)}
function relDate(d){
  const t=today();
  const y=new Date();y.setDate(y.getDate()-1);
  const ys=y.toISOString().slice(0,10);
  if(d===t)return'Ma';if(d===ys)return'Tegnap';
  return d.slice(5).replace('-','.');
}
function getGrade(pct){
  if(pct>=80)return{l:'Jeles (5)',c:'#a78bfa'};
  if(pct>=60)return{l:'Jó (4)',c:'#60a5fa'};
  if(pct>=50)return{l:'Közepes (3)',c:'#34d399'};
  if(pct>=40)return{l:'Elégséges (2)',c:'#fb923c'};
  return{l:'Elégtelen (1)',c:'#f87171'};
}
function topicColor(pct){
  if(pct>=80)return'#34d399';
  if(pct>=60)return'#60a5fa';
  if(pct>=40)return'#fb923c';
  return'#f87171';
}

// ═══════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════
let testQ, answers, submitted, current, started, finished, startTime, timerIv, resultRecorded=false;
let currentView = 'intro'; // intro | quiz | results | dashboard
let quizMode = 'normal';   // normal | topic
let quizTopic = null;      // which topic when mode=topic

// ═══════════════════════════════════════════════════════
// STORAGE
// ═══════════════════════════════════════════════════════
const DB = {
  KEY: 'itvizsgav2',
  load(){
    try{ return JSON.parse(localStorage.getItem(this.KEY)) || this.fresh(); }
    catch{ return this.fresh(); }
  },
  fresh(){ return {history:[], topicStats:{}, streak:0, lastDate:null, totalQ:0}; },
  save(d){ try{ localStorage.setItem(this.KEY, JSON.stringify(d)); }catch{} },
  clear(){ try{ localStorage.removeItem(this.KEY); }catch{} },
  record(tQ, ans, mode, topic, elapsed){
    const d = this.load();
    const ok = tQ.filter((q,i)=>isCorrectAnswer(q, ans[i])).length;
    const pct = Math.round(ok/tQ.length*100);
    const td = today();
    // streak
    if(d.lastDate !== td){
      const prev = new Date(); prev.setDate(prev.getDate()-1);
      d.streak = (d.lastDate===prev.toISOString().slice(0,10)) ? (d.streak||0)+1 : 1;
      d.lastDate = td;
    }
    d.totalQ = (d.totalQ||0) + tQ.length;
    // topic stats
    tQ.forEach((q,i)=>{
      const t=q.t;
      if(!d.topicStats[t]) d.topicStats[t]={correct:0,total:0};
      d.topicStats[t].total++;
      if(isCorrectAnswer(q, ans[i])) d.topicStats[t].correct++;
    });
    // history
    d.history.unshift({
      date:td, time:new Date().toLocaleTimeString('hu-HU',{hour:'2-digit',minute:'2-digit'}),
      pct, ok, total:tQ.length, pts:ok*2, elapsed, mode, topic:topic||null
    });
    if(d.history.length>50) d.history=d.history.slice(0,50);
    this.save(d);
    return d;
  }
};

// ═══════════════════════════════════════════════════════
// QUIZ BUILDER
// ═══════════════════════════════════════════════════════
function isValidQuestion(q){
  const type=q.type||'single';
  if(type==='single') return q&&Array.isArray(q.opts)&&q.opts.length>=4&&Number.isInteger(q.ans);
  if(type==='multi') return q&&Array.isArray(q.opts)&&q.opts.length>=4&&Array.isArray(q.ans)&&q.ans.length>0;
  if(type==='match') return q&&Array.isArray(q.pairs)&&q.pairs.length>=3&&q.pairs.every(p=>Array.isArray(p)&&p.length===2);
  return false;
}
function prepareQuestion(q){
  const type=q.type||'single';
  if(type==='single'){
    const idx=shuffle(q.opts.map((_,i)=>i));
    return {...q,type,opts:idx.map(i=>q.opts[i]),ans:idx.indexOf(q.ans)};
  }
  if(type==='multi'){
    const idx=shuffle(q.opts.map((_,i)=>i));
    const ans=idx.map((old,i)=>q.ans.includes(old)?i:null).filter(i=>i!==null).sort((a,b)=>a-b);
    return {...q,type,opts:idx.map(i=>q.opts[i]),ans};
  }
  if(type==='match'){
    const pairs=shuffle(q.pairs.map(p=>[p[0],p[1]]));
    const rightOptions=shuffle(pairs.map(p=>p[1]));
    const matchPairs=pairs.map(p=>({left:p[0],ans:rightOptions.indexOf(p[1])}));
    return {...q,type,matchPairs,rightOptions};
  }
  return {...q,type};
}
function emptyAnswer(q){
  const type=q.type||'single';
  if(type==='single') return -1;
  if(type==='multi') return [];
  if(type==='match') return new Array((q.matchPairs||q.pairs||[]).length).fill(-1);
  return -1;
}
function isAnswered(q,a){
  const type=q.type||'single';
  if(type==='single') return a!==-1;
  if(type==='multi') return Array.isArray(a)&&a.length>0;
  if(type==='match') return Array.isArray(a)&&a.length>0&&a.every(x=>x!==-1);
  return false;
}
function sameSet(a,b){return Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.slice().sort((x,y)=>x-y).every((v,i)=>v===b.slice().sort((x,y)=>x-y)[i]);}
function isCorrectAnswer(q,a){
  const type=q.type||'single';
  if(type==='single') return a===q.ans;
  if(type==='multi') return sameSet(a,q.ans);
  if(type==='match') return Array.isArray(a)&&q.matchPairs&&a.length===q.matchPairs.length&&a.every((v,i)=>v===q.matchPairs[i].ans);
  return false;
}
function answerText(q,a){
  const type=q.type||'single';
  if(type==='single') return a>=0 ? q.opts[a] : '–';
  if(type==='multi') return Array.isArray(a)&&a.length ? a.map(i=>q.opts[i]).join('; ') : '–';
  if(type==='match'){
    if(!Array.isArray(a)) return '–';
    return q.matchPairs.map((p,i)=>`${p.left} → ${a[i]>=0?q.rightOptions[a[i]]:'–'}`).join('; ');
  }
  return '–';
}
function correctText(q){
  const type=q.type||'single';
  if(type==='single') return q.opts[q.ans];
  if(type==='multi') return q.ans.map(i=>q.opts[i]).join('; ');
  if(type==='match') return q.matchPairs.map(p=>`${p.left} → ${q.rightOptions[p.ans]}`).join('; ');
  return '–';
}
function questionTypeLabel(q){
  const type=q.type||'single';
  if(type==='multi') return 'Többszörös választás';
  if(type==='match') return 'Válaszok illesztése';
  return 'Egyszeres választás';
}
function pickTest(mode, topic){
  quizMode = mode;
  quizTopic = topic || null;
  let pool = [];

  if(mode === 'topic'){
    const src = (BANK[topic] || []).filter(isValidQuestion);
    pool = shuffle(src).map(q=>({...q,t:topic}));
  } else {
    pool = TOPICS.map(t => {
      const src = (BANK[t] || []).filter(isValidQuestion);
      if(!src.length) return null;
      return {...src[Math.floor(Math.random()*src.length)], t};
    }).filter(Boolean);
    pool = shuffle(pool);
  }

  if(!pool.length){
    pool = TOPICS.flatMap(t => (BANK[t] || []).filter(isValidQuestion).map(q=>({...q,t}))).slice(0,20);
  }

  testQ = pool.map(prepareQuestion);
  answers = testQ.map(emptyAnswer);
  submitted = new Array(testQ.length).fill(false);
  current = 0; started = true; finished = false; resultRecorded=false; startTime = Date.now();
}

// ═══════════════════════════════════════════════════════
// NAV
// ═══════════════════════════════════════════════════════
function renderNav(){
  const d = DB.load();
  const streak = d.streak||0;
  const inQuiz = currentView==='quiz';
  return `<div class="topnav">
    <div class="nav-logo" onclick="goHome()">IT<span>Vizsga</span></div>
    <div class="nav-right">
      ${streak>1 ? `<div class="streak-badge">${streak} napos streak</div>` : ''}
      ${!inQuiz ? `<button class="dash-btn${currentView==='dashboard'?' active':''}" onclick="toggleDash()">
        Statisztikák${d.history&&d.history.length?` (${d.history.length})`:''}
      </button>` : ''}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// INTRO
// ═══════════════════════════════════════════════════════
function renderIntro(){
  const d = DB.load();
  const ts = d.topicStats||{};
  const hist = d.history||[];

  // Compute topic pct for each topic
  const topicPcts = TOPICS.map(t=>{
    const s = ts[t];
    return s&&s.total>0 ? Math.round(s.correct/s.total*100) : null;
  });
  const attempted = topicPcts.filter(p=>p!==null).length;
  const weakTopics = TOPICS.filter((t,i)=>topicPcts[i]!==null&&topicPcts[i]<60);
  const hasEnoughData = attempted >= 5;

  const lastR = hist[0];

  // Topic practice grid
  const topicGridHtml = TOPICS.map((t,i)=>{
    const pct = topicPcts[i];
    const c = pct!==null ? topicColor(pct) : 'var(--text3)';
    const label = pct!==null ? `${pct}%` : '–';
    const shortT = t.length>32 ? t.slice(0,30)+'…' : t;
    const qCount = (BANK[t] || []).filter(isValidQuestion).length;
    return `<div class="tpcard" onclick="startTopicTest('${t.replace(/'/g,"\\'")}')">
      <div class="tpcard-pct" style="color:${c}">${label}</div>
      <div class="tpcard-name">${shortT}</div>
      <div class="tpcard-count">${qCount} kérdés</div>
    </div>`;
  }).join('');

  return `<div class="intro">
    <div class="chip chip-acc" style="margin-bottom:1.5rem">5 0612 12 02 – Rendszer- és alkalmazásüzemeltető technikus</div>
    <h1>Interaktív Vizsga<br><span>Gyakorló Teszt</span></h1>
    <p>A teljes vizsga 20 feladatból áll: egyszeres választás, többszörös választás és illesztés is előfordulhat. Témakörönkénti gyakorlásnál az adott témakör teljes kérdéskészlete elérhető.</p>

    ${lastR ? `<div class="last-result">
      <span class="last-result-lbl">Legutóbbi – ${relDate(lastR.date)} ${lastR.time}${lastR.topic?' · '+lastR.topic:''}</span>
      <span class="last-result-val" style="color:${topicColor(lastR.pct)}">${lastR.pct}% &nbsp;·&nbsp; ${lastR.pts}/${lastR.total*2} pt &nbsp;·&nbsp; ${getGrade(lastR.pct).l}</span>
    </div>` : ''}

    <div class="stats-row">
      <div class="stat-item"><div class="stat-num hi">${TOTAL_QUESTIONS}</div><div class="stat-lbl">Kérdés a bankban</div></div>
      <div class="stat-item"><div class="stat-num">20</div><div class="stat-lbl">Kérdés / teljes teszt</div></div>
      <div class="stat-item"><div class="stat-num">45'</div><div class="stat-lbl">Időkeret</div></div>
      <div class="stat-item"><div class="stat-num hi">40%</div><div class="stat-lbl">Átmenő határ</div></div>
    </div>

    <div class="section-title" style="text-align:left;margin-bottom:.75rem;margin-top:.25rem">Teljes vizsga</div>
    <button class="btn btn-acc btn-lg" style="width:100%;justify-content:center;margin-bottom:1.5rem" onclick="startTest('normal')">Teljes teszt indítása (20 kérdés)</button>

    <div class="section-title" style="text-align:left;margin-bottom:.75rem">Gyenge témakörök – célzott gyakorlás</div>
    ${hasEnoughData ? (weakTopics.length > 0
      ? `<div class="weak-info">
          <div class="weak-info-title">${weakTopics.length} témakör 60% alatt</div>
          <div class="weak-topics-list">${weakTopics.map(t=>{
            const s=ts[t]; const p=Math.round(s.correct/s.total*100);
            return `<div class="weak-topic-row">
              <span>${t}</span>
              <span style="color:${topicColor(p)};font-family:'Syne',sans-serif;font-weight:700">${p}%</span>
            </div>`;
          }).join('')}</div>
          <button class="btn btn-acc btn-md" style="width:100%;justify-content:center;margin-top:.875rem" onclick="startWeakTest()">Gyenge témakörök begyakorlása</button>
        </div>`
      : `<div class="info-box" style="margin-bottom:1.5rem">Minden témakörben 60% felett vagy – nincsenek kiemelt gyenge területek.</div>`
    ) : `<div class="info-box" style="margin-bottom:1.5rem">Legalább 5 témakört próbálj ki a teljes tesztben, majd megjelenik a gyenge témakörök lista (jelenleg ${attempted}/5 elvégezve).</div>`}

    <div class="section-title" style="text-align:left;margin-bottom:.75rem;margin-top:1.25rem">Témakörönkénti gyakorlás</div>
    <div class="tp-grid">${topicGridHtml}</div>

    <div class="grade-row">
      <div class="grade-cell"><div class="grade-pct">80–100%</div><div class="grade-lbl">Jeles (5)</div></div>
      <div class="grade-cell"><div class="grade-pct">60–79%</div><div class="grade-lbl">Jó (4)</div></div>
      <div class="grade-cell"><div class="grade-pct">50–59%</div><div class="grade-lbl">Közepes (3)</div></div>
      <div class="grade-cell"><div class="grade-pct">40–49%</div><div class="grade-lbl">Elégséges (2)</div></div>
      <div class="grade-cell"><div class="grade-pct">0–39%</div><div class="grade-lbl">Elégtelen (1)</div></div>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════
function renderDashboard(){
  const d = DB.load();
  const hist = d.history||[];
  const ts = d.topicStats||{};

  const avgPct = hist.length ? Math.round(hist.reduce((s,h)=>s+h.pct,0)/hist.length) : 0;
  const best = hist.length ? Math.max(...hist.map(h=>h.pct)) : 0;

  // Sorted topic bars
  const topicData = TOPICS.map(t=>{
    const s=ts[t];
    const pct = s&&s.total>0 ? Math.round(s.correct/s.total*100) : null;
    return {t, pct, correct:s?s.correct:0, total:s?s.total:0};
  }).filter(x=>x.pct!==null).sort((a,b)=>a.pct-b.pct);

  const barsHtml = topicData.length
    ? topicData.map(({t,pct,correct,total})=>{
        const c = topicColor(pct);
        const short = t.length>34 ? t.slice(0,32)+'…' : t;
        return `<div class="tbar">
          <div class="tbar-name" title="${t}">${short}</div>
          <div class="tbar-track"><div class="tbar-fill" style="width:0%;background:${c}" data-pct="${pct}"></div></div>
          <div class="tbar-pct" style="color:${c}">${pct}%</div>
          <div class="tbar-sub">${correct}/${total}</div>
        </div>`;
      }).join('')
    : `<div class="empty-state">Még nincs témakör-adat. Csinálj egy tesztet!</div>`;

  // Sparkline chart – last 15 results, time-ordered
  const chartData = [...hist].reverse().slice(-15);
  const chartHtml = chartData.length
    ? `<svg class="sparkline" viewBox="0 0 300 80" preserveAspectRatio="none">
        <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6c63ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#6c63ff" stop-opacity="0.02"/>
        </linearGradient></defs>
        ${(()=>{
          const n = chartData.length;
          const xs = chartData.map((_,i)=>Math.round(i/(Math.max(n-1,1))*280+10));
          const ys = chartData.map(h=>Math.round((1-h.pct/100)*60+10));
          const pts = xs.map((x,i)=>`${x},${ys[i]}`).join(' ');
          const area = `M${xs[0]},${ys[0]} `+xs.slice(1).map((x,i)=>`L${x},${ys[i+1]}`).join(' ')+` L${xs[n-1]},75 L${xs[0]},75 Z`;
          const line = `M${xs[0]},${ys[0]} `+xs.slice(1).map((x,i)=>`L${x},${ys[i+1]}`).join(' ');
          const dots = xs.map((x,i)=>`<circle cx="${x}" cy="${ys[i]}" r="3" fill="${topicColor(chartData[i].pct)}" stroke="var(--bg)" stroke-width="1.5"><title>${chartData[i].pct}% – ${relDate(chartData[i].date)}</title></circle>`).join('');
          // 40% line
          const y40 = Math.round((1-0.4)*60+10);
          return `<path d="${area}" fill="url(#sg)"/>
            <path d="${line}" fill="none" stroke="#6c63ff" stroke-width="2" stroke-linejoin="round"/>
            <line x1="10" y1="${y40}" x2="290" y2="${y40}" stroke="rgba(248,113,113,0.4)" stroke-width="1" stroke-dasharray="4,3"/>
            
            ${dots}`;
        })()}
      </svg>` : `<div class="empty-state" style="padding:1.5rem">Még nincs elég adat a grafikonhoz.</div>`;

  // History list
  const histHtml = hist.length
    ? hist.slice(0,12).map(h=>{
        const c=topicColor(h.pct); const g=getGrade(h.pct);
        const modeLabel = h.topic ? `Témakör: ${h.topic}` : (h.mode==='weak'?'Gyenge témakörök':'Teljes teszt');
        return `<div class="hist-item">
          <div class="hist-dot" style="background:${c}"></div>
          <div class="hist-info">
            <div class="hist-mode">${modeLabel}</div>
            <div class="hist-score" style="color:${c}">${h.pct}% &nbsp;·&nbsp; ${h.pts}/${h.total*2} pont &nbsp;·&nbsp; ${g.l}</div>
          </div>
          <div class="hist-date">${relDate(h.date)} ${h.time}</div>
        </div>`;
      }).join('')
    : `<div class="empty-state">Még nincs mentett eredmény.</div>`;

  return `<div class="dashboard">
    <div class="dash-header">
      <div class="dash-title syne">Statisztikáim</div>
      <button class="btn btn-ghost btn-sm" style="color:var(--red);border-color:var(--red-b)" onclick="confirmClear()">Statisztikák törlése</button>
    </div>
    <div class="kpi-grid">
      <div class="kpi"><div class="kpi-val" style="color:var(--acc2)">${hist.length}</div><div class="kpi-lbl">Teszt elvégezve</div></div>
      <div class="kpi"><div class="kpi-val" style="color:${topicColor(avgPct)}">${avgPct}%</div><div class="kpi-lbl">Átlagos eredmény</div></div>
      <div class="kpi"><div class="kpi-val" style="color:${topicColor(best)}">${best}%</div><div class="kpi-lbl">Legjobb eredmény</div></div>
      <div class="kpi"><div class="kpi-val" style="color:var(--amber)">${d.streak||0}</div><div class="kpi-lbl">Napos streak</div></div>
    </div>

    <div class="section-title">Fejlődési görbe (${chartData.length} teszt)</div>
    <div class="spark-wrap">${chartHtml}</div>

    <div class="section-title">Témakör teljesítmény (${topicData.length} / ${TOPICS.length} témakör)</div>
    <div class="topic-bars" id="tbars">${barsHtml}</div>

    <div class="section-title">Előzmények</div>
    <div class="hist-list">${histHtml}</div>

    <div style="margin-top:1.5rem;text-align:center">
      <button class="btn btn-acc btn-md" onclick="goHome()">Vissza a teszthez</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════════════════
function renderQuiz(){
  const q = testQ[current];
  if(!q){ current=0; if(testQ.length){ return renderQuiz(); } return renderIntro(); }
  const done = submitted[current] === true;
  const ans = answers[current];
  const pct = Math.round((current/testQ.length)*100);
  const rem = Math.max(0, 2700-Math.floor((Date.now()-startTime)/1000));
  const tc = rem<60?'crit':rem<300?'warn':'';
  const modeLabel = quizMode==='topic'
    ? `Témakör: ${quizTopic}`
    : (quizMode==='weak' ? 'Gyenge témakörök' : 'Teljes teszt');

  let answerHtml = '';
  if((q.type||'single')==='single'){
    answerHtml = `<div class="opts">${q.opts.map((o,i)=>{
      let c='opt-btn';
      if(done){ if(i===q.ans) c+=' correct'; else if(i===ans) c+=' wrong'; }
      return `<button class="${c}"${done?' disabled':''} onclick="choose(${i})">
        <span class="opt-letter">${'ABCD'[i]}</span><span>${esc(o)}</span>
      </button>`;
    }).join('')}</div>`;
  } else if(q.type==='multi'){
    answerHtml = `<div class="opts">${q.opts.map((o,i)=>{
      const selected=Array.isArray(ans)&&ans.includes(i);
      let c='opt-btn multi-opt'+(selected?' selected':'');
      if(done){ if(q.ans.includes(i)) c+=' correct'; else if(selected) c+=' wrong'; }
      return `<button class="${c}"${done?' disabled':''} onclick="toggleMulti(${i})">
        <span class="opt-letter">${selected?'✓':'ABCD'[i]}</span><span>${esc(o)}</span>
      </button>`;
    }).join('')}</div>`;
  } else if(q.type==='match'){
    answerHtml = `<div class="match-list">${q.matchPairs.map((p,row)=>{
      const val=Array.isArray(ans)?ans[row]:-1;
      const rowOk=done && val===p.ans;
      const rowBad=done && val!==p.ans;
      return `<div class="match-row ${rowOk?'correct':rowBad?'wrong':''}">
        <div class="match-left">${esc(p.left)}</div>
        <select class="match-select" ${done?'disabled':''} onchange="selectMatch(${row}, this.value)">
          <option value="-1">Válassz...</option>
          ${q.rightOptions.map((o,i)=>`<option value="${i}" ${val===i?'selected':''}>${esc(o)}</option>`).join('')}
        </select>
      </div>`;
    }).join('')}</div>`;
  }

  const fb = done ? `<div class="feedback ${isCorrectAnswer(q,ans)?'fb-ok':'fb-bad'}">
    <span>${isCorrectAnswer(q,ans) ? 'Helyes! ' : 'Helytelen. '}${esc(q.exp||'')}</span>
  </div>` : '';

  const ac = submitted.filter(Boolean).length;
  const canSubmit = isAnswered(q, ans);
  const control = !done && (q.type==='multi' || q.type==='match')
    ? `<button class="btn btn-acc btn-md" onclick="submitCurrent()"${!canSubmit?' disabled':''}>Ellenőrzés</button>`
    : (current < testQ.length-1
        ? `<button class="btn btn-acc btn-md" onclick="next()"${!done?' disabled':''}>Következő</button>`
        : `<button class="btn btn-acc btn-md" onclick="finish()"${ac<testQ.length?' disabled':''}>Eredmény</button>`);

  return `<div class="quiz">
    <div class="qhdr">
      <div>
        <div class="qcounter"><span>${current+1}</span> / ${testQ.length}</div>
        <div style="font-size:.72rem;color:var(--text3);margin-top:2px">${esc(modeLabel)}</div>
      </div>
      <div class="timer-pill ${tc}"><span class="tdot"></span><span id="td">${ft(rem)}</span></div>
    </div>
    <div class="ptrack"><div class="pfill" style="width:${pct}%"></div></div>
    <div class="qcard">
      <div class="qtag">${esc(q.t)}</div>
      <div class="qtype">${questionTypeLabel(q)}</div>
      <div class="qtext">${esc(q.q)}</div>
    </div>
    ${answerHtml}
    ${fb}
    <div class="qnav">
      <button class="btn btn-ghost btn-md" onclick="prev()"${current===0?' disabled':''}>Előző</button>
      <span class="nav-mid">${ac}/${testQ.length}</span>
      ${control}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════════════
function renderResults(){
  clearInterval(timerIv);
  const ok = testQ.filter((q,i)=>isCorrectAnswer(q, answers[i])).length;
  const total = testQ.length;
  const pts = ok*2;
  const pct = Math.round(ok/total*100);
  const pass = pct>=40;
  const grade = getGrade(pct);
  const el = Math.floor((Date.now()-startTime)/1000);
  const C = 2*Math.PI*44;
  const sc = pass?'#a78bfa':'#f87171';

  if(!resultRecorded){ DB.record(testQ, answers, quizMode, quizTopic, el); resultRecorded=true; }

  const topicRes = {};
  testQ.forEach((q,i)=>{
    if(!topicRes[q.t]) topicRes[q.t]={ok:0,total:0};
    topicRes[q.t].total++;
    if(isCorrectAnswer(q, answers[i])) topicRes[q.t].ok++;
  });

  const topicBarsHtml = Object.entries(topicRes).map(([t,{ok:o,total:tot}])=>{
    const p=Math.round(o/tot*100); const c=topicColor(p);
    const short=t.length>34?t.slice(0,32)+'…':t;
    return `<div class="tbar">
      <div class="tbar-name">${esc(short)}</div>
      <div class="tbar-track"><div class="tbar-fill" style="width:0%;background:${c}" data-pct="${p}"></div></div>
      <div class="tbar-pct" style="color:${c}">${o}/${tot}</div>
    </div>`;
  }).join('');

  const rev = testQ.map((q,i)=>{
    const o = isCorrectAnswer(q, answers[i]);
    const a = o
      ? `<span class="ra-ok">Helyes: ${esc(correctText(q))}</span>`
      : `<span class="ra-bad">Te: ${esc(answerText(q,answers[i]))}</span><span class="ra-sep">·</span><span class="ra-ok">Helyes: ${esc(correctText(q))}</span>`;
    return `<div class="rev-item ${o?'rok':'rbad'}">
      <div class="rev-icon ${o?'ok':'bad'}">${o?'✓':'✗'}</div>
      <div class="rev-body">
        <div class="rev-q">${i+1}. ${esc(q.q)} <span class="rev-type">${questionTypeLabel(q)}</span></div>
        <div class="rev-ans">${a}</div>
      </div>
    </div>`;
  }).join('');

  return `<div class="results">
    <div class="rhero">
      <div class="score-ring">
        <svg viewBox="0 0 100 100">
          <circle class="ring-bg" cx="50" cy="50" r="44"/>
          <circle class="ring-fill" cx="50" cy="50" r="44" stroke="${sc}" stroke-dasharray="${C}" stroke-dashoffset="${C}" id="rfg"/>
        </svg>
        <div class="ring-text">
          <span class="score-num" style="color:${sc}">${pts}</span>
          <span class="score-den">/ ${total*2} pont</span>
        </div>
      </div>
      <div class="rtitle">${pass?'Gratulálok!':'Sajnos nem sikerült'}</div>
      <div class="rsub">${ok}/${total} helyes &nbsp;·&nbsp; ${pct}% &nbsp;·&nbsp; ${ft(el)}</div>
      <span class="verdict ${pass?'v-pass':'v-fail'}">${pass?'Megfelelt':'Elégtelen – min. 40% kell'}</span>
      <span class="grade-badge" style="border-color:${grade.c}30;color:${grade.c}">${grade.l}</span>
    </div>
    <div class="sgrid">
      <div class="scell"><div class="sval sg">${ok}</div><div class="slbl">Helyes</div></div>
      <div class="scell"><div class="sval sr">${total-ok}</div><div class="slbl">Helytelen</div></div>
      <div class="scell"><div class="sval">${pts} pt</div><div class="slbl">Összpontszám</div></div>
    </div>
    <div class="res-actions">
      <button class="btn btn-acc btn-md" style="justify-content:center" onclick="startTest('normal')">Új teljes teszt</button>
      <button class="btn btn-ghost btn-md" style="justify-content:center" onclick="goHome()">Vissza a főoldalra</button>
    </div>
    <div class="section-title">Témakör eredmények</div>
    <div class="topic-bars" id="rsbars" style="margin-bottom:1.5rem">${topicBarsHtml}</div>
    <div class="rev-hdr">Kérdések áttekintése</div>
    <div class="rev-list">${rev}</div>
    <div style="margin-top:1.5rem;text-align:center">
      <button class="btn btn-ghost btn-sm" onclick="toggleDash()">Statisztikák megtekintése</button>
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════
// RENDER + ANIMATE
// ═══════════════════════════════════════════════════════
function animateBars(){
  requestAnimationFrame(()=>setTimeout(()=>{
    document.querySelectorAll('.tbar-fill[data-pct]').forEach(el=>{
      el.style.width = el.dataset.pct+'%';
    });
  },60));
}
function animateRing(){
  setTimeout(()=>{
    const el=document.getElementById('rfg');
    if(el){
      const C=2*Math.PI*44;
      const ok=testQ.filter((q,i)=>isCorrectAnswer(q, answers[i])).length;
      el.style.strokeDashoffset=C-ok/testQ.length*C;
    }
  },120);
}

function render(){
  const app=document.getElementById('app');
  app.innerHTML = renderNav();
  const wrap=document.createElement('div');
  wrap.style.cssText='width:100%;display:flex;flex-direction:column;align-items:center';

  if(currentView==='dashboard'){
    wrap.innerHTML=renderDashboard(); app.appendChild(wrap); animateBars();
  } else if(!started || currentView==='intro'){
    wrap.innerHTML=renderIntro(); app.appendChild(wrap);
  } else if(finished || currentView==='results'){
    wrap.innerHTML=renderResults(); app.appendChild(wrap); animateRing(); animateBars();
  } else {
    wrap.innerHTML=renderQuiz(); app.appendChild(wrap); startTimer();
  }
}

function startTimer(){
  clearInterval(timerIv);
  timerIv=setInterval(()=>{
    if(!started||finished){clearInterval(timerIv);return;}
    const rem=Math.max(0,2700-Math.floor((Date.now()-startTime)/1000));
    const el=document.getElementById('td'); if(el) el.textContent=ft(rem);
    const pill=el&&el.closest('.timer-pill');
    if(pill) pill.className='timer-pill'+(rem<60?' crit':rem<300?' warn':'');
    if(rem===0){clearInterval(timerIv);finish();}
  },1000);
}


function jumpTop(){
  requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:'auto'}));
}

// ═══════════════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════════════
window.startTest = (mode='normal') => {
  currentView='quiz'; pickTest(mode, null); render(); jumpTop();
};
window.startTopicTest = (topic) => {
  currentView='quiz'; pickTest('topic', topic); render(); jumpTop();
};
window.startWeakTest = () => {
  const d=DB.load(); const ts=d.topicStats||{};
  const weak=TOPICS.filter(t=>{const s=ts[t];return!s||s.total===0||(s.correct/s.total)<0.6;});
  let pool=[];
  const seen=new Set();
  const src=shuffle(weak.length ? weak : TOPICS);
  while(pool.length<20){
    let added=false;
    src.forEach(t=>{
      if(pool.length>=20) return;
      const qs=shuffle((BANK[t]||[]).filter(isValidQuestion));
      const q=qs.find(x=>!seen.has(t+'::'+x.q));
      if(q){ seen.add(t+'::'+q.q); pool.push({...q,t}); added=true; }
    });
    if(!added) break;
  }
  pool=pool.slice(0,20);
  quizMode='weak'; quizTopic=null;
  testQ=pool.map(prepareQuestion);
  answers=testQ.map(emptyAnswer);
  submitted=new Array(testQ.length).fill(false);
  current=0;started=true;finished=false;resultRecorded=false;startTime=Date.now();
  currentView='quiz'; render(); jumpTop();
};
window.choose = (i) => {
  if(!submitted[current]){answers[current]=i;submitted[current]=true;clearInterval(timerIv);render();if(!finished&&started)startTimer();}
};
window.toggleMulti = (i) => {
  if(submitted[current]) return;
  const a=Array.isArray(answers[current]) ? [...answers[current]] : [];
  const pos=a.indexOf(i);
  if(pos>=0) a.splice(pos,1); else a.push(i);
  answers[current]=a.sort((x,y)=>x-y);
  render();
};
window.selectMatch = (row, value) => {
  if(submitted[current]) return;
  const a=Array.isArray(answers[current]) ? [...answers[current]] : emptyAnswer(testQ[current]);
  a[row]=parseInt(value,10);
  answers[current]=a;
  // Párosítós feladatnál az Ellenőrzés gomb állapota csak újrarenderelés után frissült.
  // Így az utolsó kiválasztás után azonnal aktívvá válik, nem kell előző/következő kérdésre lépni.
  render();
};
window.submitCurrent = () => {
  if(!submitted[current] && isAnswered(testQ[current], answers[current])){
    submitted[current]=true;clearInterval(timerIv);render();if(!finished&&started)startTimer();
  }
};
window.next = () => { if(current<testQ.length-1){current++;render();jumpTop();} };
window.prev = () => { if(current>0){current--;render();jumpTop();} };
window.finish = () => { finished=true; currentView='results'; render(); jumpTop(); };
window.goHome = () => { clearInterval(timerIv); started=false; finished=false; currentView='intro'; render(); jumpTop(); };
window.toggleDash = () => {
  if(currentView==='dashboard'){
    currentView = (started&&!finished) ? 'quiz' : 'intro';
  } else { currentView='dashboard'; }
  render();
};
window.confirmClear = () => {
  DB.clear(); currentView='intro'; started=false; finished=false; render();
};

render();