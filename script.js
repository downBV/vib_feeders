// Navigáció kezelése
document.addEventListener('DOMContentLoaded', function() {
    // Kategória kártyák kattintás eseményei
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            showPage(category);
        });
    });

    // Vissza gombok
    const backButtons = document.querySelectorAll('.btn-back');
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => showPage('main'));
    });

    // Modal bezárás
    const modalClose = document.querySelector('.modal-close');
    const modal = document.getElementById('doc-modal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Modal háttér kattintás
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // ESC billentyű a modal bezárásához
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Scroll animáció
    observeElements();
});

// Oldal váltás
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    let targetPage;
    if (pageId === 'main') {
        targetPage = document.getElementById('main-page');
    } else if (pageId === 'bowl-feeders') {
        targetPage = document.getElementById('bowl-feeders-page');
    } else if (pageId === 'linear-feeders') {
        targetPage = document.getElementById('linear-feeders-page');
    } else if (pageId === 'bowl-vibrators') {
        targetPage = document.getElementById('bowl-vibrators-page');
    } else if (pageId === 'controllers') {
        targetPage = document.getElementById('controllers-page');
    }
    
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Modal megnyitása dokumentációval
function showDocumentation(type) {
    const modal = document.getElementById('doc-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const docs = getDocumentation(type);
    
    modalTitle.textContent = docs.title;
    modalBody.innerHTML = docs.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Modal bezárása
function closeModal() {
    const modal = document.getElementById('doc-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Dokumentáció tartalmak
function getDocumentation(type) {
    const docs = {
        'bf-series': {
            title: 'BF Sorozat - Táladagolók',
            content: `
                <div class="doc-content">
                    <h1>1. BF SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek</h2>
                        <p><strong>BF20, BF25, BF30, BF35, BF40, BF50</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Jellemzők</h2>
                        <ul>
                            <li>Körkörös szállítás tálcában</li>
                            <li>Spirális pálya az alkatrészek szétválogatásához</li>
                            <li>Szubkritikus hangolás (sajátfrekvencia 5%-kal FÖLÖTT a gerjesztésnek)</li>
                            <li>Rezgési frekvencia: 100 Hz vagy 120 Hz</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>1.3 Működési Elv</h2>
                        <p>A hasznos tömeg (tálca + alaplemez) és az ellensúly (ellengyűrű + mágnes) ellentétes irányban rezeg. A reakcióerők az alapgyűrűn kiegyenlítődnek.</p>
                    </div>

                    <h1>2. TELEPÍTÉS ÉS SZERELÉS</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS</li>
                            <li>Csak képzett villanyszerelő dolgozhat rajta</li>
                            <li>DIN 912 vagy DIN 931 szabvány szerinti csavarok</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ FIGYELEM - Mágneses mező!</h3>
                        <p>Pacemakeres személyek: minimum 5 cm távolság</p>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ VIGYÁZAT - Mechanikus veszélyek!</h3>
                        <ul>
                            <li>Mozgó alkatrészek</li>
                            <li>Csípésveszély</li>
                            <li>Védőburkolat kötelező üzem közben</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.2 Rögzítési Módok</h2>
                        <h3>Központi oszlopos rögzítés (ajánlott):</h3>
                        <ul>
                            <li>Forgatható</li>
                            <li>Magasságban állítható</li>
                            <li>Stabil</li>
                        </ul>
                        <h3>Közvetlen alaplapra szerelés:</h3>
                        <ul>
                            <li>3 gumifém puffer a BF alján</li>
                            <li>Csavarozás az alaphoz</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.3 Elektromos Csatlakoztatás</h2>
                        <p><strong>Csatlakozó típusok:</strong></p>
                        <ul>
                            <li>Gyári csatlakozó dugó (általában)</li>
                            <li>DIN szabványos</li>
                            <li>Vezérlőhöz csatlakoztatás</li>
                        </ul>
                        <p><strong>Vezérlő:</strong></p>
                        <ul>
                            <li>Csak AFAG vezérlő használható!</li>
                            <li>Modellek: IRG1-S, MSG801, MSG802</li>
                        </ul>
                        <p><strong>Hálózati követelmények:</strong></p>
                        <ul>
                            <li>230V/50Hz vagy 115V/60Hz</li>
                            <li>Stabil feszültség (± 10%)</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <h1>3. BEÁLLÍTÁSOK ÉS HANGOLÁS</h1>

                    <div class="info-box">
                        <h3>Beállítási Sorrend - MINDIG!</h3>
                        <ol>
                            <li><strong>SÚLYKIEGYENSÚLYOZÁS</strong> (trimmelés)</li>
                            <li><strong>REZONANCIA HANGOLÁS</strong> (állítólapok)</li>
                            <li><strong>LÉGRÉS ELLENŐRZÉS/BEÁLLÍTÁS</strong></li>
                            <li><strong>TESZTELÉS</strong></li>
                        </ol>
                        <p><strong>⚠️ NE ugorj át lépéseket!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Rezonancia Hangolás (SZUBKRITIKUS)</h2>
                        <p><strong>Emlékeztető:</strong></p>
                        <ul>
                            <li>Gerjesztés: 100 Hz</li>
                            <li>Sajátfrekvencia célérték: ~104 Hz</li>
                            <li>Gerjesztés ALATT van</li>
                        </ul>
                        
                        <h3>Tesztelés:</h3>
                        <p>Egy rugószerkezet csavarjainak lassú lazítása - figyeld a sebességet:</p>
                        
                        <div class="info-box">
                            <h4>✓ JÓ beállítás:</h4>
                            <ul>
                                <li>Lazítás kezdete → Sebesség NŐ</li>
                                <li>Tovább lazítod → Tovább NŐ</li>
                                <li>Még tovább → CSÚCSOT ÉR (maximum)</li>
                                <li>Tovább → CSÖKKENNI kezd</li>
                                <li>→ Húzd vissza a csavart! → KÉSZ!</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl merev:</h4>
                            <ul>
                                <li>Lazítás → Sebesség NŐ</li>
                                <li>Tovább → Tovább NŐ</li>
                                <li>Teljesen kilazítva → Még mindig nő vagy stagnál</li>
                                <li>→ Told LEJJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl puha:</h4>
                            <ul>
                                <li>Lazítás kezdete → Sebesség azonnal CSÖKKEN</li>
                                <li>→ Told FELJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 Légrés Beállítása (BF SPECIÁLIS MÓDSZER)</h2>
                        <p><strong>Eszközök:</strong></p>
                        <ul>
                            <li>Távolságmérő lapka (a géppel jár)</li>
                            <li>24V DC tápegység</li>
                            <li>Megfelelő villáskulcs/csavarhúzó</li>
                        </ul>
                        
                        <h3>Folyamat:</h3>
                        <ol>
                            <li>Fedél eltávolítása</li>
                            <li>Horgony rögzítő csavar lazítása</li>
                            <li>Távolságmérő lapka(k) behelyezése
                                <ul>
                                    <li>Ellensúlyon lévő nyíláson keresztül</li>
                                    <li>MINDEN rezgőmágneshez 1-1 lapka!</li>
                                    <li>Kilógjon a meghajtóból</li>
                                </ul>
                            </li>
                            <li>24V DC rákapcsolása a meghajtóra
                                <ul>
                                    <li>⚠️ NEM hálózati feszültség!</li>
                                    <li>Speciális tápegység</li>
                                    <li>Mágnes és horgony VONZÓDIK</li>
                                    <li>Automatikus beállás</li>
                                </ul>
                            </li>
                            <li>Csavarok meghúzása megfelelő nyomatékkal</li>
                            <li>24V kikapcsolása</li>
                            <li>Lapkák eltávolítása</li>
                            <li>Ellenőrzés</li>
                        </ol>
                    </div>

                    <h1>4. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>Gyakori Problémák</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges ok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áramellátás / Légrés túl nagy / Vezérlő hiba</td>
                                    <td>Ellenőrizd vezérlőt, csatlakozást / Állítsd be légrést / Ellenőrizd beállításokat</td>
                                </tr>
                                <tr>
                                    <td>Lassan mozog</td>
                                    <td>Rossz hangolás / Légrés nagy / Szennyezett</td>
                                    <td>Hangold újra / Állítsd légrést / Tisztítsd meg</td>
                                </tr>
                                <tr>
                                    <td>Erősen rezeg</td>
                                    <td>Rossz súlyegyensúly / Laza csavarok</td>
                                    <td>Trimmelő súlyok / Húzd meg csavarokat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>5. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés</li>
                            <li>Hang és rezgés figyelése</li>
                            <li>Tisztaság ellenőrzése</li>
                        </ul>

                        <h2>5.2 Havi Karbantartás</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Rugók állapotának vizsgálata</li>
                            <li>Légrés ellenőrzése</li>
                            <li>Trimmelő súlyok rögzítésének ellenőrzése</li>
                        </ul>

                        <h2>5.3 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újrabeállítása</li>
                            <li>Rezonancia újrahangolása</li>
                            <li>Gumifém pufferek ellenőrzése/cseréje</li>
                        </ul>

                        <h2>5.4 Rugócsere - 2-5 évente</h2>
                        <div class="warning-box">
                            <h4>Rugócsere jelei:</h4>
                            <ul>
                                <li>Látható repedés</li>
                                <li>Törött rugó</li>
                                <li>Erős deformáció</li>
                                <li>Oxidáció (rozsdafoltok)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        'hlf-m-series': {
            title: 'HLF-M Sorozat - Lineáris Adagolók (Superkritikus)',
            content: `
                <div class="doc-content">
                    <h1>1. HLF-M SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek</h2>
                        <p><strong>HLF07-M, HLF12-M, HLF25-M, HLF50-M</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Jellemzők</h2>
                        <ul>
                            <li>Egyenes vonalú szállítás</li>
                            <li><strong>SUPERKRITIKUS hangolás</strong> (gerjesztés 5%-kal FÖLÖTT a sajátfrekvencián)</li>
                            <li>Két egymás fölötti rezgő rész</li>
                            <li>Felső rész: hasznos tömeg (szállítósín)</li>
                            <li>Alsó rész: ellensúly</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h2>1.3 Hangolási Szabály</h2>
                        <p><strong>Gerjesztés: 100 Hz</strong></p>
                        <p>→ Sajátfrekvencia: ~97 Hz (5%-kal ALATTA)</p>
                        <p><strong>Gerjesztés: 120 Hz</strong></p>
                        <p>→ Sajátfrekvencia: ~117 Hz</p>
                        <p><strong>⚠️ A gerjesztés FÖLÖTT van a sajátfrekvencián - SUPERKRITIKUS</strong></p>
                    </div>

                    <h1>2. TELEPÍTÉS ÉS SZERELÉS</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS</li>
                            <li>Csak képzett villanyszerelő dolgozhat rajta</li>
                            <li>DIN 912 vagy DIN 931 szabvány szerinti csavarok</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.2 Rögzítés az Alaphoz</h2>
                        <p><strong>Rögzítési pontok:</strong></p>
                        <ul>
                            <li>Alaplapon lévő rések (slots) használata</li>
                            <li>Minimum 2 rögzítési pont</li>
                            <li>Pozíció pontosan beállítható</li>
                        </ul>
                        
                        <p><strong>Alapkövetelmények:</strong></p>
                        <ul>
                            <li>Rezgésálló alap (tömör beton vagy acél szerkezet)</li>
                            <li>Vastagság: minimum 20 mm acél</li>
                            <li>Szélesség: > 120 mm</li>
                            <li>Önhordó profilszerkezeteknél: megerősítés szükséges!</li>
                        </ul>
                        
                        <p><strong>Csavarozás:</strong></p>
                        <ul>
                            <li>Fokozatosan, felváltva húzni</li>
                            <li>Megfelelő nyomatékkal</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.3 Szállítósín Felszerelése - HLF-M Módszer</h2>
                        <ol>
                            <li><strong>Oldallap rögzítése</strong>
                                <ul>
                                    <li>Pozícionáló csapok használata</li>
                                    <li>Pontos, reprodukálható pozíció</li>
                                </ul>
                            </li>
                            <li><strong>Szállítósín csavarozása</strong>
                                <ul>
                                    <li>Függőleges hosszú lyukak (slots)</li>
                                    <li>Be/kivezetés függőleges állítása</li>
                                </ul>
                            </li>
                            <li><strong>Tömeg ellenőrzés</strong>
                                <ul>
                                    <li>Mérlegelés</li>
                                    <li>Összehasonlítás a célértékkel</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <h1>3. BEÁLLÍTÁSOK ÉS HANGOLÁS</h1>

                    <div class="info-box">
                        <h3>Beállítási Sorrend - MINDIG!</h3>
                        <ol>
                            <li><strong>SÚLYKIEGYENSÚLYOZÁS</strong> (trimmelés)</li>
                            <li><strong>REZONANCIA HANGOLÁS</strong> (állítólapok)</li>
                            <li><strong>LÉGRÉS ELLENŐRZÉS/BEÁLLÍTÁS</strong></li>
                            <li><strong>TESZTELÉS</strong></li>
                        </ol>
                        <p><strong>⚠️ NE ugorj át lépéseket!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 LÉPÉS 1: Súlykiegyensúlyozás (HLF-M)</h2>
                        <p><strong>Cél: Hasznos tömeg = Célérték ± Tűrés</strong></p>
                        
                        <h3>Lépések:</h3>
                        <ol>
                            <li><strong>Mérjük le a hasznos tömeget</strong>
                                <ul>
                                    <li>Szállítósín + oldallap + rögzítők + minden más</li>
                                    <li>Precíz mérleg szükséges</li>
                                </ul>
                            </li>
                            <li><strong>Összehasonlítás</strong>
                                <p>Példa HLF12-M:</p>
                                <ul>
                                    <li>Mért: 1.15 kg</li>
                                    <li>Cél: 1.2 ± 0.05 kg (1.15-1.25 kg)</li>
                                    <li>Eredmény: BELÜL VAN ✓</li>
                                </ul>
                            </li>
                            <li><strong>Ha szükséges: trimmelő súly hozzáadása/eltávolítása</strong></li>
                            <li><strong>Súlypont ellenőrzése</strong>
                                <ul>
                                    <li>A súlypontnak a megengedett zónában kell lennie</li>
                                    <li>Koordináták: Xs, Ys, Zs</li>
                                </ul>
                            </li>
                            <li><strong>Tesztelés</strong>
                                <ul>
                                    <li>Indítás</li>
                                    <li>Alaplap tapintása</li>
                                    <li>Alig érezhető rezgés → ✓ JÓ</li>
                                    <li>Erős rezgés → ✗ További hangolás</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 LÉPÉS 2: Rezonancia Hangolás (SUPERKRITIKUS)</h2>
                        <p><strong>Emlékeztető:</strong></p>
                        <ul>
                            <li>Gerjesztés: 100 Hz</li>
                            <li>Sajátfrekvencia célérték: ~97 Hz</li>
                            <li>Gerjesztés FÖLÖTT van</li>
                        </ul>
                        
                        <h3>Tesztelés:</h3>
                        <p>Egy rugószerkezet csavarjainak lassú lazítása - figyeld a sebességet:</p>
                        
                        <div class="info-box">
                            <h4>✓ JÓ beállítás:</h4>
                            <ul>
                                <li>Lazítás kezdete → Sebesség CSÖKKEN</li>
                                <li>Tovább lazítod → Tovább CSÖKKEN</li>
                                <li>→ Húzd vissza a csavart! → KÉSZ!</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl merev:</h4>
                            <ul>
                                <li>Lazítás → Sebesség CSÖKKEN</li>
                                <li>Tovább → Röviden NŐ</li>
                                <li>Még tovább → Újra CSÖKKEN</li>
                                <li>→ Told LEJJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl puha:</h4>
                            <ul>
                                <li>Lazítás → Sebesség NŐ</li>
                                <li>Teljesen kilazítva → Tovább NŐ vagy stagnál</li>
                                <li>→ Told FELJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>

                        <div class="danger-box">
                            <h4>Állítólapok mozgatása - FONTOS szabályok:</h4>
                            <ul>
                                <li>✓ Csak EGY rugószerkezeten dolgozz egyszerre</li>
                                <li>✓ Mindig vízszintesen maradjanak</li>
                                <li>✓ Felső élek pontosan szemben</li>
                                <li>✗ NE lazítsd meg az összes rugót egyszerre!</li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-section">
                        <h2>3.4 LÉPÉS 3: Légrés Beállítása</h2>
                        <p><strong>Eszközök:</strong></p>
                        <ul>
                            <li>Távolságmérő lapka (a géppel jár)</li>
                            <li>Megfelelő villáskulcs/csavarhúzó</li>
                        </ul>
                        
                        <h3>Folyamat:</h3>
                        <ol>
                            <li>Fedél eltávolítása</li>
                            <li>Horgony oldalsó rögzítő csavarjainak (2 db) lazítása</li>
                            <li>Távolságmérő lapka behelyezése a légrésbe
                                <ul>
                                    <li>Pontosan a megfelelő vastagságú lapkát!</li>
                                    <li>Ellenőrizd a típust és feszültséget!</li>
                                </ul>
                            </li>
                            <li>Párhuzamosság ellenőrzése
                                <ul>
                                    <li>Mágnesmagja és horgony felületei PONTOSAN PÁRHUZAMOSAK</li>
                                    <li>Egyik oldal se legyen kisebb a rés!</li>
                                </ul>
                            </li>
                            <li>Csavarok meghúzása
                                <ul>
                                    <li>Fokozatosan</li>
                                    <li>Felváltva (cikk-cakk minta)</li>
                                    <li>Megfelelő nyomatékkal</li>
                                </ul>
                            </li>
                            <li>Ellenőrzés
                                <ul>
                                    <li>Lapka könnyen kijön</li>
                                    <li>De nincs nagy hézag</li>
                                    <li>Ha lazán esik ki → TÚL NAGY → Ismételd!</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <h1>4. MŰSZAKI ADATOK</h1>

                    <div class="doc-section">
                        <h2>4.1 Szállítósín Ajánlott Méretek</h2>
                        <p><strong>Keresztmetszeti arány: Magasság/Szélesség = 2/1</strong></p>
                        <p>Ez biztosítja a rezgésállóságot és minimalizálja a saját rezgéseket.</p>

                        <h2>4.2 Hasznos Tömeg Határok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Ideális hasznos tömeg</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HLF07-M</td>
                                    <td>0.60 - 0.75 kg</td>
                                </tr>
                                <tr>
                                    <td>HLF12-M</td>
                                    <td>1.15 - 1.25 kg</td>
                                </tr>
                                <tr>
                                    <td>HLF25-M</td>
                                    <td>2.0 - 2.5 kg</td>
                                </tr>
                                <tr>
                                    <td>HLF50-M</td>
                                    <td>4.0 - 5.0 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>5. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges ok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áram / Légrés túl nagy / Hasznos tömeg túl nagy</td>
                                    <td>Ellenőrizd vezérlőt / Állítsd légrést / Csökkentsd tömeget</td>
                                </tr>
                                <tr>
                                    <td>Lassan mozog</td>
                                    <td>Rossz hangolás / Légrés nagy / Szennyezett</td>
                                    <td>Hangold újra / Állítsd légrést / Tisztítsd meg</td>
                                </tr>
                                <tr>
                                    <td>Erős rezgés</td>
                                    <td>Rossz súlyegyensúly / Laza csavarok / Rossz rezonancia</td>
                                    <td>Trimmelés / Húzd meg / Hangold újra</td>
                                </tr>
                                <tr>
                                    <td>Sín ütődik</td>
                                    <td>Légrés kicsi / Amplitúdó nagy / Tömeg kicsi</td>
                                    <td>Növeld légrést / Csökkentsd teljesítményt / Növeld tömeget</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="danger-box">
                            <p><strong>⚠️ VESZÉLY: Ha a sín ütődik → Rugótörés veszélye! Azonnal állítsd le!</strong></p>
                        </div>
                    </div>

                    <h1>6. GYORS REFERENCIA</h1>

                    <div class="info-box">
                        <h2>Superkritikus Hangolás - Gyors Útmutató</h2>
                        <p><strong>Gerjesztés FÖLÖTT van a sajátfrekvencián</strong></p>
                        <p>Példa: 100 Hz gerjesztés, ~97 Hz sajátfrekvencia</p>
                        <p><strong>Teszt:</strong></p>
                        <ul>
                            <li>Lazítás → Sebesség CSÖKKEN → ✓ JÓ</li>
                            <li>Lazítás → Sebesség NŐ → ✗ ROSSZ (túl puha)</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'klf-series': {
            title: 'KLF Sorozat - Lineáris Adagolók (Szubkritikus)',
            content: `
                <div class="doc-content">
                    <h1>1. KLF SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek</h2>
                        <p><strong>KLF5, KLF7, KLF15, KLF25</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Jellemzők</h2>
                        <ul>
                            <li>Egyenes vonalú szállítás</li>
                            <li><strong>SZUBKRITIKUS hangolás</strong> (gerjesztés 5%-kal ALATT a sajátfrekvencián)</li>
                            <li>Két rezgő rész egymás fölött</li>
                            <li>Rugalmas konfiguráció: mindkét rész lehet hasznos tömeg vagy ellensúly</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h2>1.3 Hangolási Szabály</h2>
                        <p><strong>Gerjesztés: 100 Hz</strong></p>
                        <p>→ Sajátfrekvencia: ~104 Hz (5%-kal FÖLÖTTE)</p>
                        <p><strong>⚠️ A gerjesztés ALATT van a sajátfrekvencián - SZUBKRITIKUS</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>1.4 Hasznos Tömeg vs Ellensúly</h2>
                        <h3>KLF5 és KLF25: Szimmetrikus (egyenlő tömegek)</h3>
                        <p>Hasznos tömeg = Ellensúly</p>
                        
                        <h3>KLF7 és KLF15: Aszimmetrikus (különböző tömegek)</h3>
                        <p>Meghatározott tömegtöbblet a hasznos tömeg oldalon</p>
                    </div>

                    <h1>2. TELEPÍTÉS ÉS SZERELÉS</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS</li>
                            <li>Csak képzett villanyszerelő dolgozhat rajta</li>
                            <li>DIN 912 vagy DIN 931 szabvány szerinti csavarok</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.3 Szállítósín Felszerelése - KLF Módszer</h2>
                        <ol>
                            <li><strong>Szögvas vagy oldallap választása</strong>
                                <ul>
                                    <li>Szögvas: könnyebb (pl. 47g @ KLF7)</li>
                                    <li>Oldallap: nehezebb (pl. 70g @ KLF7)</li>
                                </ul>
                            </li>
                            <li><strong>Sín rögzítése</strong>
                                <ul>
                                    <li>Rezgő rész belső oldalára</li>
                                    <li>Balra VAGY jobbra (választható)</li>
                                </ul>
                            </li>
                            <li><strong>Ellensúly oldalára: trimmelő súly</strong>
                                <ul>
                                    <li>Kiegyensúlyozás</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>2.4 Osztott Sín Konfiguráció</h2>
                        <p><strong>Gördülő alkatrészekhez (golyók, hengerek):</strong></p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Maximum alkatrész szélesség</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>KLF5</td>
                                    <td>30 mm</td>
                                </tr>
                                <tr>
                                    <td>KLF7</td>
                                    <td>50 mm</td>
                                </tr>
                                <tr>
                                    <td>KLF15</td>
                                    <td>70 mm</td>
                                </tr>
                                <tr>
                                    <td>KLF25</td>
                                    <td>80 mm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>3. BEÁLLÍTÁSOK ÉS HANGOLÁS</h1>

                    <div class="info-box">
                        <h3>Beállítási Sorrend - MINDIG!</h3>
                        <ol>
                            <li><strong>SÚLYKIEGYENSÚLYOZÁS</strong> (trimmelés)</li>
                            <li><strong>REZONANCIA HANGOLÁS</strong> (állítólapok)</li>
                            <li><strong>LÉGRÉS ELLENŐRZÉS/BEÁLLÍTÁS</strong></li>
                            <li><strong>TESZTELÉS</strong></li>
                        </ol>
                        <p><strong>⚠️ NE ugorj át lépéseket!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 LÉPÉS 1: Súlykiegyensúlyozás (KLF)</h2>
                        <p><strong>Cél: Megfelelő tömegek + Megfelelő különbség (ha aszimmetrikus)</strong></p>
                        
                        <h3>Példa KLF7 (Aszimmetrikus):</h3>
                        <div class="info-box">
                            <h4>Hasznos tömeg oldal:</h4>
                            <ul>
                                <li>Szállítósín + oldallap: 0.60 kg</li>
                                <li>Cél: 0.65 kg</li>
                                <li>Trimmelő súly: +0.05 kg (50g)</li>
                                <li>Összesen: 0.65 kg ✓</li>
                            </ul>
                            
                            <h4>Ellensúly oldal:</h4>
                            <ul>
                                <li>Alapértelmezett: 0.50 kg</li>
                                <li>Cél: 0.55 kg</li>
                                <li>Trimmelő súly: +0.05 kg (50g)</li>
                                <li>Összesen: 0.55 kg ✓</li>
                            </ul>
                            
                            <h4>Különbség ellenőrzése:</h4>
                            <ul>
                                <li>0.65 - 0.55 = 0.10 kg</li>
                                <li>Előírt: 0.10 ± 0.02 kg</li>
                                <li>✓ MEGFELELŐ!</li>
                            </ul>
                        </div>

                        <h3>Ellenőrzési Teszt - Aszimmetria</h3>
                        <p><strong>Módszer:</strong></p>
                        <ul>
                            <li>Mindkét rezgő oldalra tesztalkatrész</li>
                            <li>Alacsony sebesség</li>
                            <li>Sebességek összehasonlítása</li>
                        </ul>
                        <p><strong>Értékelés:</strong></p>
                        <ul>
                            <li>Bal = Jobb → ✓ Tökéletes</li>
                            <li>Bal gyorsabb → Jobb oldalra több súly</li>
                            <li>Jobb gyorsabb → Bal oldalra több súly</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 LÉPÉS 2: Rezonancia Hangolás (SZUBKRITIKUS)</h2>
                        <p><strong>Emlékeztető:</strong></p>
                        <ul>
                            <li>Gerjesztés: 100 Hz</li>
                            <li>Sajátfrekvencia célérték: ~104 Hz</li>
                            <li>Gerjesztés ALATT van</li>
                        </ul>
                        
                        <h3>Tesztelés:</h3>
                        <p>Egy rugószerkezet csavarjainak lassú lazítása - figyeld a sebességet:</p>
                        
                        <div class="info-box">
                            <h4>✓ JÓ beállítás:</h4>
                            <ul>
                                <li>Lazítás kezdete → Sebesség NŐ</li>
                                <li>Tovább lazítod → Tovább NŐ</li>
                                <li>Még tovább → CSÚCSOT ÉR (maximum)</li>
                                <li>Tovább → CSÖKKENNI kezd</li>
                                <li>→ Húzd vissza a csavart! → KÉSZ!</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl merev:</h4>
                            <ul>
                                <li>Lazítás → Sebesség NŐ</li>
                                <li>Tovább → Tovább NŐ</li>
                                <li>Teljesen kilazítva → Még mindig nő vagy stagnál</li>
                                <li>→ Told LEJJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>

                        <div class="warning-box">
                            <h4>✗ ROSSZ - Túl puha:</h4>
                            <ul>
                                <li>Lazítás kezdete → Sebesség azonnal CSÖKKEN</li>
                                <li>→ Told FELJEBB az állítólapot → Ismételd meg a tesztet</li>
                            </ul>
                        </div>
                    </div>

                    <h1>4. MŰSZAKI ADATOK</h1>

                    <div class="doc-section">
                        <h2>4.2 Hasznos Tömeg Célértékek</h2>
                        
                        <h3>KLF5:</h3>
                        <p>Szimmetrikus konfiguráció - Hasznos tömeg = Ellensúly</p>
                        
                        <h3>KLF7:</h3>
                        <p>Aszimmetrikus konfiguráció</p>
                        <ul>
                            <li>Hasznos tömeg: 0.65 kg ± 0.05 kg</li>
                            <li>Ellensúly: 0.55 kg ± 0.05 kg</li>
                            <li>Különbség: 0.10 kg ± 0.02 kg</li>
                        </ul>
                        
                        <h3>KLF15:</h3>
                        <p>Aszimmetrikus konfiguráció</p>
                        <ul>
                            <li>Hasznos tömeg: 1.75 kg ± tűrés</li>
                            <li>Ellensúly: 1.28 kg ± tűrés</li>
                        </ul>
                        
                        <h3>KLF25:</h3>
                        <p>Szimmetrikus konfiguráció - Hasznos tömeg = Ellensúly</p>
                    </div>

                    <h1>5. ALKATRÉSZ-SPECIFIKUS ALKALMAZÁSOK</h1>

                    <div class="doc-section">
                        <h2>5.1 Gördülő Alkatrészek (Golyók, Hengerek)</h2>
                        <p><strong>Jellemzők:</strong></p>
                        <ul>
                            <li>GURULNAK ahelyett hogy ugrálnának</li>
                            <li>Nehéz irányítani</li>
                            <li>Visszagurulás veszélye</li>
                        </ul>
                        <p><strong>Optimális beállítások:</strong></p>
                        <ul>
                            <li>Osztott sín konfiguráció</li>
                            <li>Nagy szög (8-12°)</li>
                            <li>Közepes-alacsony sebesség</li>
                        </ul>

                        <h2>5.2 Ragadós Alkatrészek</h2>
                        <p><strong>Példák:</strong></p>
                        <ul>
                            <li>Gumis felület</li>
                            <li>Lágy műanyag</li>
                            <li>Szövet elemek</li>
                        </ul>
                        <p><strong>Optimális beállítások:</strong></p>
                        <ul>
                            <li>Nagy teljesítmény (80-95%)</li>
                            <li>Nagy szög (10-15°)</li>
                            <li>Teflon bevonat a sínen</li>
                        </ul>
                    </div>

                    <h1>6. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges ok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áram / Légrés nagy / Tömeg rossz</td>
                                    <td>Ellenőrizd vezérlőt / Állítsd légrést / Korrigáld tömeget</td>
                                </tr>
                                <tr>
                                    <td>Lassan mozog</td>
                                    <td>Rossz hangolás / Légrés nagy / Szennyezett</td>
                                    <td>Hangold újra / Állítsd légrést / Tisztítsd meg</td>
                                </tr>
                                <tr>
                                    <td>Aszimmetrikus</td>
                                    <td>Rossz súlyegyensúly / Különböző rugók</td>
                                    <td>Trimmelés / Ellenőrizd rugókat</td>
                                </tr>
                                <tr>
                                    <td>Erős rezgés</td>
                                    <td>Rossz súlyegyensúly / Laza csavarok</td>
                                    <td>Trimmelés / Húzd meg csavarokat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>7. GYORS REFERENCIA</h1>

                    <div class="info-box">
                        <h2>Szubkritikus Hangolás - Gyors Útmutató</h2>
                        <p><strong>Gerjesztés ALATT van a sajátfrekvencián</strong></p>
                        <p>Példa: 100 Hz gerjesztés, ~104 Hz sajátfrekvencia</p>
                        <p><strong>Teszt:</strong></p>
                        <ul>
                            <li>Lazítás → Sebesség NŐ → Csúcs → Csökken → ✓ JÓ</li>
                            <li>Lazítás → Sebesség azonnal CSÖKKEN → ✗ ROSSZ (túl puha)</li>
                        </ul>
                        
                        <h2>Szimmetrikus vs Aszimmetrikus</h2>
                        <p><strong>Szimmetrikus (KLF5, KLF25):</strong></p>
                        <p>Hasznos tömeg = Ellensúly</p>
                        <p><strong>Aszimmetrikus (KLF7, KLF15):</strong></p>
                        <p>Hasznos tömeg > Ellensúly (meghatározott különbség szükséges)</p>
                    </div>
                </div>
            `
        },
        'wfl-series': {
            title: 'WFL Sorozat - Tálrezgők (VIBROTEC AG)',
            content: `
                <div class="doc-content">
                    <h1>WFL SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek és Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Tányér Ø</th>
                                    <th>Tömeg</th>
                                    <th>Légrés</th>
                                    <th>Alaplemez</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WFL 150</td>
                                    <td>440 mm</td>
                                    <td>30-40 kg</td>
                                    <td>0.4 mm</td>
                                    <td>10 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 200</td>
                                    <td>470-500 mm</td>
                                    <td>-</td>
                                    <td>0.5 mm</td>
                                    <td>10 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 300</td>
                                    <td>~600 mm</td>
                                    <td>-</td>
                                    <td>0.6 mm</td>
                                    <td>15 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 450</td>
                                    <td>~800 mm</td>
                                    <td>-</td>
                                    <td>1.2 mm</td>
                                    <td>15 mm acél</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><strong>Közös jellemzők:</strong></p>
                        <ul>
                            <li>Tápfeszültség: 230V / 50Hz</li>
                            <li>Rugó-tömeg rendszer hangolással</li>
                            <li>Gumipuffer rezgéscsillapítás</li>
                        </ul>
                    </div>

                    <h1>2. BIZTONSÁGI ELŐÍRÁSOK</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS!</li>
                            <li>Csak képzett villanyszerelő végezheti!</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ FIGYELEM!</h3>
                        <ul>
                            <li>Soha ne működtesse védőburkolatok és fedőlapok nélkül!</li>
                            <li>Első bekapcsoláskor a tálca ÜRES legyen!</li>
                            <li>Ne működtesse robbanásveszélyes környezetben!</li>
                        </ul>
                    </div>

                    <h1>3. TELEPÍTÉS</h1>

                    <div class="doc-section">
                        <h2>3.1 Szállítás és Kicsomagolás</h2>
                        <p><strong>⚠️ FIGYELMEZTETÉS:</strong></p>
                        <ul>
                            <li>Ne emelje vagy mozgassa a tányért a szortírozó edénynél fogva</li>
                            <li>Ügyeljen arra, hogy ne ütközzön más tárgyakkal</li>
                            <li>Ellenőrizze az emelőberendezés teherbírását</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Mechanikai Rögzítés</h2>
                        <p><strong>FONTOS:</strong> Ha lehetséges, ne változtassa meg a gyárban beállított értékeket!</p>
                        <ol>
                            <li>Rögzítse a rezgőtányért az alaplapon lévő négy gumipuffer menetén keresztül</li>
                            <li>A szortírozó tálcát a központi csavar meglazítása után forgassa a kívánt pozícióba</li>
                            <li>Húzza meg újra a központi csavart</li>
                            <li>Ellenőrizze, hogy szomszédos géprészek ne érintkezzenek a rezgőtányérral</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért a vezérlőhöz</li>
                            <li>Csatlakoztassa a vezérlőt a hálózathoz (230V/50Hz)</li>
                            <li>Ellenőrizze a földelést</li>
                            <li>Csak megfelelő VIBROTEC vagy kompatibilis vezérlő használható!</li>
                        </ol>
                    </div>

                    <h1>4. ÜZEMBE HELYEZÉS</h1>

                    <div class="doc-section">
                        <h2>4.1 Első Bekapcsolás</h2>
                        <p>⚠️ A tálca legyen ÜRES az első bekapcsoláskor!</p>
                        <ol>
                            <li>Csatlakoztassa a vezérlőt a hálózathoz</li>
                            <li>Kapcsolja be a vezérlőt</li>
                            <li>Állítsa a vezérlő teljesítményét 0%-ról fokozatosan 100%-ra</li>
                            <li>Egyenletes zümmögésnek kell hallhatónak lennie</li>
                            <li><strong>Kemény, kopogó vagy kalapáló hangok hibát jeleznek - azonnal állítsa le!</strong></li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>4.2 Működés Ellenőrzése</h2>
                        <ol>
                            <li>Állítsa a vezérlőt kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>Szükség esetén növelje a teljesítményt</li>
                            <li>A gyári beállítások szerint 50-80% pozícióban kell elérni a kívánt teljesítményt</li>
                        </ol>
                        <p><strong>FONTOS:</strong> Ne tekerje fel a vezérlőt a szükségesnél jobban!</p>
                    </div>

                    <h1>5. BEÁLLÍTÁSOK ÉS HANGOLÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Légrés Ellenőrzése és Beállítása</h2>
                        <p><strong>⚠️ KRITIKUS PARAMÉTER!</strong></p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Légrés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WFL 150</td>
                                    <td>0.4 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 200</td>
                                    <td>0.5 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 300</td>
                                    <td>0.6 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 450</td>
                                    <td>1.2 mm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>5.2 Rugóállandó Megváltoztatása</h2>
                        <p>⚠️ FIGYELEM: Ez a művelet speciális szakértelmet igényel!</p>
                        <ol>
                            <li>Kapcsolja be a rezgőtányért és állítson be lassú sebességet</li>
                            <li>Óvatosan oldja meg egy rugócsomag alsó rögzítőcsavarját</li>
                            <li>Figyelje a szállítási sebesség változását:
                                <ul>
                                    <li>Ha a sebesség <strong>NŐ</strong> → el kell távolítani egy rugót</li>
                                    <li>Ha a sebesség <strong>CSÖKKEN</strong> → hozzá kell adni egy rugót</li>
                                </ul>
                            </li>
                        </ol>
                        <p><strong>FONTOS SZABÁLYOK:</strong></p>
                        <ul>
                            <li>Az egyes rugócsomagoknak azonos számú rugót kell tartalmazniuk</li>
                            <li>Két rugó között mindig köztes lemezeket kell beépíteni</li>
                            <li>Minden rugócsere után ellenőrizze a légrést!</li>
                        </ul>
                    </div>

                    <h1>6. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>6.1 Normális és Abnormális Hangok</h2>
                        
                        <div class="info-box">
                            <h4>✓ NORMÁLIS MŰKÖDÉS:</h4>
                            <ul>
                                <li>Egyenletes zümmögés</li>
                                <li>Enyhe mechanikus rezgés</li>
                                <li>Minimális zaj</li>
                            </ul>
                        </div>

                        <div class="danger-box">
                            <h4>✗ HIBÁS MŰKÖDÉS - AZONNAL ÁLLÍTSA LE!:</h4>
                            <ul>
                                <li>Kemény, kopogó hangok → Légrés túl kicsi vagy ütközés</li>
                                <li>Kalapáló zajok → Horgony ütközik a mágneshez</li>
                                <li>Csörgő hangok → Laza csavar vagy alkatrész</li>
                            </ul>
                        </div>
                    </div>

                    <div class="doc-section">
                        <h2>6.2 Gyakori Problémák</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges Okok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áram, Vezérlő hiba, Légrés túl nagy</td>
                                    <td>Ellenőrizze csatlakozást, Ellenőrizze vezérlőt, Állítsa be légrést</td>
                                </tr>
                                <tr>
                                    <td>Lassan mozog</td>
                                    <td>Rossz hangolás, Légrés túl nagy, Szennyezett tálca</td>
                                    <td>Hangolás újraállítása, Légrés beállítása, Tisztítás</td>
                                </tr>
                                <tr>
                                    <td>Erős alaprezgés</td>
                                    <td>Laza csavarok, Kopott gumipufferek</td>
                                    <td>Csavarok meghúzása, Pufferek cseréje</td>
                                </tr>
                                <tr>
                                    <td>Kopogó hang</td>
                                    <td>Légrés túl kicsi, Horgony ütközik</td>
                                    <td>Légrés növelése, Beállítás ellenőrzése</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>7. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>7.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés (repedések, sérülések)</li>
                            <li>Hang figyelése (csak egyenletes zümmögés)</li>
                            <li>Rezgés ellenőrzése</li>
                            <li>Tisztaság ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>7.2 Havi Karbantartás</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Rugók állapotának vizsgálata (repedések, deformáció)</li>
                            <li>Légrés ellenőrzése mérőlapkával</li>
                            <li>Gumipufferek ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>7.3 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Rezonancia újrahangolása</li>
                            <li>Gumipufferek cseréje</li>
                            <li>Elektromos csatlakozások ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>7.4 Rugócsere (2-5 évente)</h2>
                        <p>⚠️ A rugók kopó alkatrészek! Élettartam: normál használat mellett 2-5 év.</p>
                        <p><strong>Rugócsere jelei:</strong></p>
                        <ul>
                            <li>Látható repedések</li>
                            <li>Törött rugó</li>
                            <li>Erős deformáció</li>
                            <li>Rozsdafoltok (oxidáció)</li>
                            <li>Teljesítménycsökkenés</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>VIBROTEC AG</strong></p>
                        <p>Benzstraße 13<br>
                        71149 Bondorf, Németország</p>
                        <p>Tel: +49 74 57 / 73 29 80<br>
                        Fax: +49 74 57 / 73 29 81<br>
                        E-mail: info@vibrotec-ag.de<br>
                        Web: www.vibrotec-ag.de</p>
                    </div>
                </div>
            `
        },
        'rna-srcn-series': {
            title: 'RNA SRC-N Sorozat - Tálrezgők',
            content: `
                <div class="doc-content">
                    <h1>RNA SRC-N SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Műszaki Adatok</h2>
                        
                        <h3>SRC-N 400-2</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Méretek (Ø x H)</td>
                                    <td>440 x 228 mm</td>
                                </tr>
                                <tr>
                                    <td>Tömeg</td>
                                    <td>103 kg</td>
                                </tr>
                                <tr>
                                    <td>Teljesítményfelvétel</td>
                                    <td>786 VA</td>
                                </tr>
                                <tr>
                                    <td>Mágnes feszültség/frekvencia</td>
                                    <td>220V / 50Hz</td>
                                </tr>
                                <tr>
                                    <td>Mágnesek száma</td>
                                    <td>3 (WZAW 080 fekete)</td>
                                </tr>
                                <tr>
                                    <td>Légrés</td>
                                    <td>1.0 - 1.2 mm</td>
                                </tr>
                                <tr>
                                    <td>Rezgési frekvencia</td>
                                    <td>100 Hz</td>
                                </tr>
                                <tr>
                                    <td>Rugócsomagok</td>
                                    <td>3 db (2x10, 1x9 rugó)</td>
                                </tr>
                                <tr>
                                    <td>Max. rezgő tömeg</td>
                                    <td>35 kg</td>
                                </tr>
                                <tr>
                                    <td>Védelmi fokozat</td>
                                    <td>IP 54</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>SRC-N 630-1</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Méretek (Ø x H)</td>
                                    <td>660 x 225 mm</td>
                                </tr>
                                <tr>
                                    <td>Tömeg</td>
                                    <td>168 kg</td>
                                </tr>
                                <tr>
                                    <td>Teljesítményfelvétel</td>
                                    <td>1000 VA</td>
                                </tr>
                                <tr>
                                    <td>Mágnesek száma</td>
                                    <td>4 (YZAW 080 piros)</td>
                                </tr>
                                <tr>
                                    <td>Légrés</td>
                                    <td>2.3 - 2.8 mm</td>
                                </tr>
                                <tr>
                                    <td>Rezgési frekvencia</td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>Rugócsomagok</td>
                                    <td>4 db (4x8 rugó)</td>
                                </tr>
                                <tr>
                                    <td>Max. rezgő tömeg</td>
                                    <td>50 kg</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>SRC-N 800-1</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Méretek (Ø x H)</td>
                                    <td>805 x 315 mm</td>
                                </tr>
                                <tr>
                                    <td>Tömeg</td>
                                    <td>270 kg</td>
                                </tr>
                                <tr>
                                    <td>Teljesítményfelvétel</td>
                                    <td>1700 VA (8.5 A)</td>
                                </tr>
                                <tr>
                                    <td>Mágnesek száma</td>
                                    <td>4 (YZUW 090 piros)</td>
                                </tr>
                                <tr>
                                    <td>Légrés</td>
                                    <td>2.0 - 3.0 mm</td>
                                </tr>
                                <tr>
                                    <td>Rezgési frekvencia</td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>Rugócsomagok</td>
                                    <td>12 db (12x12 rugó)</td>
                                </tr>
                                <tr>
                                    <td>Max. rezgő tömeg</td>
                                    <td>80 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>2. BIZTONSÁGI ELŐÍRÁSOK</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS!</li>
                            <li>Csak képzett villanyszerelő végezheti!</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ Alapvető Biztonsági Követelmények</h3>
                        <ul>
                            <li>Soha ne működtesse védőburkolatok nélkül!</li>
                            <li>Ne üzemeltesse robbanásveszélyes környezetben!</li>
                            <li>Csak a gyártóval egyeztetett konfigurációban!</li>
                            <li>Szigorúan tilos a biztonsági eszközök kikapcsolása!</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.1 Rendeltetésszerű Használat</h2>
                        <ul>
                            <li>Válogatórendszerek meghajtása</li>
                            <li>Lineáris szállítás</li>
                            <li>Ömlesztett áruk helyes orientációval történő szállítása és adagolása</li>
                        </ul>
                        <p><strong>⚠️ Minden más használat nem rendeltetésszerű!</strong></p>
                    </div>

                    <h1>3. SZÁLLÍTÁS ÉS TELEPÍTÉS</h1>

                    <div class="doc-section">
                        <h2>3.1 Szállítás</h2>
                        <p>⚠️ FIGYELEM:</p>
                        <ul>
                            <li>Ne akassza vagy mozgassa az orientáló eszköznél fogva!</li>
                            <li>Ügyeljen arra, hogy ne ütközzön más tárgyakkal!</li>
                            <li>Mozgatás közben senki ne tartózkodjon a rezgőtányér alatt!</li>
                            <li>Ellenőrizze az emelőberendezés teherbírását!</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Telepítés</h2>
                        <p>A rezgőtányért speciálisan tervezett RNA tartóra kell felszerelni.</p>
                        <p><strong>Fontos:</strong> A tartót úgy kell méretezni, hogy a rezgőtányérből ne jussanak át rezgések.</p>
                    </div>

                    <h1>4. ÜZEMBE HELYEZÉS</h1>

                    <div class="doc-section">
                        <h2>4.1 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért a vezérlőhöz</li>
                            <li>Csatlakoztassa a vezérlő hálózati csatlakozását</li>
                            <li>Ellenőrizze a védőföldel's kötelező!</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>4.2 Első Bekapcsolás</h2>
                        <p>⚠️ A rezgőtányér tálcájának üresnek kell lennie!</p>
                        <ol>
                            <li>Kapcsolja be a rezgőtányért a vezérlőn keresztül</li>
                            <li>A vezérlő célérték potenciométerét 0%-ról 100%-ra fordítsa</li>
                            <li>Többé-kevésbé hangos zümmögésen kívül semmilyen hangot nem szabad hallani</li>
                        </ol>
                        <p><strong>⚠️ Kemény, kopogó vagy kalapáló hangok mindig hibákat jeleznek!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>4.3 Működésellenőrzés</h2>
                        <ol>
                            <li>Állítsa a vezérlő célérték potenciométerét kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>A gyárban a rezgőtányérokat 50-80%-os beállításnál hangolják</li>
                        </ol>
                        <p><strong>⚠️ Üzem közben ne fordítsa fel a potenciométert a szükségesnél jobban!</strong></p>
                    </div>

                    <h1>5. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés (repedések, sérülések, szennyeződés)</li>
                            <li>Hang figyelése (egyenletes zümmögés)</li>
                            <li>Rezgés megfigyelése (egyenletes működés)</li>
                            <li>Védőburkolatok épségének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.2 Heti Ellenőrzés</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Elektromos csatlakozások vizsgálata</li>
                            <li>Tálca tisztaságának ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.3 Havi Karbantartás</h2>
                        <ul>
                            <li>Rugók állapotának vizsgálata (repedések, deformáció)</li>
                            <li>Légrés ellenőrzése mérőlapkával</li>
                            <li>Lengéscsillapítók ellenőrzése</li>
                            <li>Védőburkolatok rögzítésének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.4 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Elektromos rendszer átfogó ellenőrzése</li>
                            <li>Lengéscsillapítók cseréje szükség esetén</li>
                            <li>Teljesítményteszt elvégzése</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                    </div>

                    <h1>6. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>6.1 Gyakori Problémák és Megoldások</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges Okok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áramellátás, Vezérlő hiba, Légrés túl nagy</td>
                                    <td>Ellenőrizze csatlakozást, Ellenőrizze vezérlőt, Állítsa be a légrést</td>
                                </tr>
                                <tr>
                                    <td>Gyenge szállítás</td>
                                    <td>Rossz hangolás, Túlterhelés, Légrés nem megfelelő</td>
                                    <td>Hangolás ellenőrzése, Terhelés csökkentése, Légrés beállítása</td>
                                </tr>
                                <tr>
                                    <td>Kopogó hang</td>
                                    <td>Légrés túl kicsi, Horgony ütközik</td>
                                    <td>Légrés növelése, Szakszerű beállítás</td>
                                </tr>
                                <tr>
                                    <td>Erős alaprezgés</td>
                                    <td>Laza csavarok, Kopott lengéscsillapítók</td>
                                    <td>Csavarok meghúzása, Csillapítók cseréje</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>6.2 Normális és Abnormális Hangok</h2>
                        
                        <div class="info-box">
                            <h4>✓ NORMÁLIS MŰKÖDÉS:</h4>
                            <ul>
                                <li>Egyenletes zümmögés (50 vagy 100 Hz)</li>
                                <li>A hangosság a vezérlő beállításától függ</li>
                                <li>Enyhe mechanikai rezgés</li>
                            </ul>
                        </div>

                        <div class="danger-box">
                            <h4>✗ HIBÁS MŰKÖDÉS - AZONNAL ÁLLÍTSA LE:</h4>
                            <ul>
                                <li>Kopogás, csattogás → Légrés probléma vagy ütközés</li>
                                <li>Kalapálás → Horgony ütközik a mágneshez</li>
                                <li>Csörgés → Laza csavar vagy alkatrész</li>
                                <li>Recsegés → Rugó probléma</li>
                            </ul>
                        </div>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>RNA Group - Központ</strong></p>
                        <p>Rhein-Nadel Automation GmbH<br>
                        Reichsweg 19-23<br>
                        D-52068 Aachen, Németország</p>
                        <p>Tel: +49 (0) 241-5109-0<br>
                        Fax: +49 (0) 241-5109-219<br>
                        E-mail: vertrieb@RNA.de<br>
                        Web: www.RNA.de</p>
                    </div>

                    <div class="warning-box">
                        <h2>Fontos Megjegyzések</h2>
                        <ul>
                            <li>A rezgőtányér csak rendeltetésszerű használatra alkalmas</li>
                            <li>Minden munkát csak képzett szakember végezhet</li>
                            <li>A biztonsági előírásokat mindig tartsa be</li>
                            <li>Védőburkolatok nélkül ne működtesse a berendezést</li>
                            <li>Rendszeres karbantartással meghosszabbítható az élettartam</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'rna-srhl-series': {
            title: 'RNA SRHL Sorozat - Tálrezgők',
            content: `
                <div class="doc-content">
                    <h1>RNA SRHL 400-1 ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Méretek (Ø x H)</td>
                                    <td>470 x 249 mm</td>
                                </tr>
                                <tr>
                                    <td>Tömeg</td>
                                    <td>140 kg</td>
                                </tr>
                                <tr>
                                    <td>Teljesítményfelvétel</td>
                                    <td>1140 VA (5.7 A)</td>
                                </tr>
                                <tr>
                                    <td>Mágnes feszültség/frekvencia</td>
                                    <td>220V / 50Hz</td>
                                </tr>
                                <tr>
                                    <td>Mágnesek száma</td>
                                    <td>2 (YZUW 090 piros)</td>
                                </tr>
                                <tr>
                                    <td>Légrés</td>
                                    <td>2.0 - 2.8 mm</td>
                                </tr>
                                <tr>
                                    <td>Rezgési frekvencia</td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>Rugócsomagok száma</td>
                                    <td>6 db</td>
                                </tr>
                                <tr>
                                    <td>Rugók száma csomagokban</td>
                                    <td>4x4, 2x3</td>
                                </tr>
                                <tr>
                                    <td>Rugó méretek (L x W)</td>
                                    <td>139 (116) x 40 mm</td>
                                </tr>
                                <tr>
                                    <td>Rugó vastagság</td>
                                    <td>2 mm</td>
                                </tr>
                                <tr>
                                    <td>Csavar húzónyomaték</td>
                                    <td>120 Nm</td>
                                </tr>
                                <tr>
                                    <td>Max. rezgő tömeg</td>
                                    <td>45 kg</td>
                                </tr>
                                <tr>
                                    <td>Védelmi fokozat</td>
                                    <td>IP 54</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Jellemzők</h2>
                        <ul>
                            <li>Nagy teljesítményű tálrezgő</li>
                            <li>Két YZUW 090 típusú mágnes</li>
                            <li>Hat rugócsomag az optimális teljesítményért</li>
                            <li>50 Hz üzemi frekvencia</li>
                            <li>IP 54 védelmi fokozat</li>
                        </ul>
                    </div>

                    <h1>2. BIZTONSÁGI ELŐÍRÁSOK</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS!</li>
                            <li>Csak képzett villanyszerelő végezheti!</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ Alapvető Biztonsági Követelmények</h3>
                        <ul>
                            <li>Győződjön meg róla, hogy a tápellátás védőföldjelése kifogástalan!</li>
                            <li>Soha ne működtesse a rezgőtányért védőburkolatok nélkül!</li>
                            <li>Ne működtesse robbanásveszélyes vagy nedves környezetben!</li>
                            <li>Csak a gyártóval egyeztetett konfigurációban használja!</li>
                        </ul>
                    </div>

                    <h1>3. TELEPÍTÉS ÉS ÜZEMBE HELYEZÉS</h1>

                    <div class="doc-section">
                        <h2>3.1 Szállítás</h2>
                        <p>A rezgőtányérok stabil fa ládákban érkeznek.</p>
                        <p><strong>⚠️ FIGYELEM:</strong></p>
                        <ul>
                            <li>Ne akassza vagy mozgassa a rezgőtányért az orientáló eszköznél fogva!</li>
                            <li>Ügyeljen arra, hogy mozgatás közben ne ütközzön más tárgyakkal!</li>
                            <li>Mozgatás közben senki ne tartózkodjon a rezgőtányér alatt!</li>
                            <li>Mozgatás előtt ellenőrizze az emelőberendezés megfelelő teherbírását!</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Telepítés</h2>
                        <p>A telepítési helyen a rezgőtányért a speciálisan tervezett RNA tartóra kell felszerelni.</p>
                        <p><strong>Más tartók használata esetén:</strong></p>
                        <ul>
                            <li>Győződjön meg azok megfelelő teherbírásáról!</li>
                            <li>A tartót úgy kell méretezni, hogy a rezgőtányérből ne jussanak át rezgések</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért közvetlenül vagy csatlakozón keresztül a vezérlőhöz</li>
                            <li>Létrehozza a vezérlő hálózati csatlakozását</li>
                            <li>Ellenőrizze a védőföldlést</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>3.4 Első Bekapcsolás</h2>
                        <p><strong>⚠️ A rezgőtányér tálcájának üresnek kell lennie!</strong></p>
                        <ol>
                            <li>Kapcsolja be a rezgőtányért a vezérlőn keresztül</li>
                            <li>A vezérlő célérték potenciométerét 0%-ról 100%-ra fordítsa</li>
                            <li>A potenciométer állásától függően többé-kevésbé hangos zümmögésen kívül semmilyen hangot nem szabad hallani</li>
                        </ol>
                        <p><strong>⚠️ Kemény, kopogó vagy kalapáló hangok mindig hibákat jeleznek, amelyeket el kell hárítani!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.5 Működésellenőrzés</h2>
                        <ol>
                            <li>Állítsa a vezérlő célérték potenciométerét kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>A gyárban a rezgőtányérokat az átvételkor úgy hangolják be, hogy célérték potenciométer 50-80%-os beállításánál érjék el a megígért szállítási teljesítményt</li>
                        </ol>
                        <p><strong>⚠️ Üzem közben ne fordítsa fel a célérték potenciométert a feltétlenül szükségesnél jobban!</strong></p>
                    </div>

                    <h1>4. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>4.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés (repedések, sérülések, szennyeződés)</li>
                            <li>Hang figyelése (egyenletes zümmögés)</li>
                            <li>Rezgés megfigyelése (egyenletes működés)</li>
                            <li>Védőburkolatok épségének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>4.2 Heti Ellenőrzés</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése (120 Nm)</li>
                            <li>Elektromos csatlakozások vizsgálata</li>
                            <li>Tálca tisztaságának ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>4.3 Havi Karbantartás</h2>
                        <ul>
                            <li>Rugók állapotának vizsgálata (repedések, deformáció)</li>
                            <li>Légrés ellenőrzése mérőlapkával (2.0 - 2.8 mm)</li>
                            <li>Lengéscsillapítók ellenőrzése</li>
                            <li>Védőburkolatok rögzítésének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>4.4 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Elektromos rendszer átfogó ellenőrzése</li>
                            <li>Lengéscsillapítók cseréje szükség esetén</li>
                            <li>Teljesítményteszt elvégzése</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                    </div>

                    <h1>5. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Gyakori Problémák és Megoldások</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges Okok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áramellátás, Vezérlő hiba, Légrés túl nagy</td>
                                    <td>Ellenőrizze csatlakozást, Ellenőrizze vezérlőt, Állítsa be a légrést</td>
                                </tr>
                                <tr>
                                    <td>Gyenge szállítás</td>
                                    <td>Rossz hangolás, Túlterhelés, Légrés nem megfelelő</td>
                                    <td>Hangolás ellenőrzése, Terhelés csökkentése, Légrés beállítása</td>
                                </tr>
                                <tr>
                                    <td>Kopogó hang</td>
                                    <td>Légrés túl kicsi, Horgony ütközik</td>
                                    <td>Légrés növelése, Szakszerű beállítás</td>
                                </tr>
                                <tr>
                                    <td>Erős alaprezgés</td>
                                    <td>Laza csavarok, Kopott lengéscsillapítók</td>
                                    <td>Csavarok meghúzása, Csillapítók cseréje</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>5.2 Normális és Abnormális Hangok</h2>
                        
                        <div class="info-box">
                            <h4>✓ NORMÁLIS MŰKÖDÉS:</h4>
                            <ul>
                                <li>Egyenletes zümmögés (50 Hz)</li>
                                <li>A hangosság a vezérlő beállításától függ</li>
                                <li>Enyhe mechanikai rezgés</li>
                            </ul>
                        </div>

                        <div class="danger-box">
                            <h4>✗ HIBÁS MŰKÖDÉS - AZONNAL ÁLLÍTSA LE:</h4>
                            <ul>
                                <li>Kopogás, csattogás → Légrés probléma vagy ütközés</li>
                                <li>Kalapálás → Horgony ütközik a mágneshez</li>
                                <li>Csörgés → Laza csavar vagy alkatrész</li>
                                <li>Recsegés → Rugó probléma</li>
                            </ul>
                        </div>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>RNA Group - Központ</strong></p>
                        <p>Rhein-Nadel Automation GmbH<br>
                        Reichsweg 19-23<br>
                        D-52068 Aachen, Németország</p>
                        <p>Tel: +49 (0) 241-5109-0<br>
                        Fax: +49 (0) 241-5109-219<br>
                        E-mail: vertrieb@RNA.de<br>
                        Web: www.RNA.de</p>
                    </div>

                    <div class="warning-box">
                        <h2>Fontos Megjegyzések</h2>
                        <ul>
                            <li>A rezgőtányér csak rendeltetésszerű használatra alkalmas</li>
                            <li>Minden munkát csak képzett szakember végezhet</li>
                            <li>A biztonsági előírásokat mindig tartsa be</li>
                            <li>Védőburkolatok nélkül ne működtesse a berendezést</li>
                            <li>Rendszeres karbantartással meghosszabbítható az élettartam</li>
                            <li>A rugókat SOHA ne olajozza vagy zsírozza</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'wfl-series': {
            title: 'WFL Sorozat - Tálrezgők (VIBROTEC AG)',
            content: `
                <div class="doc-content">
                    <h1>1. WFL SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek és Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Átmérő</th>
                                    <th>Tömeg</th>
                                    <th>Légrés</th>
                                    <th>Alaplemez min.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WFL 150</td>
                                    <td>440 mm</td>
                                    <td>30-40 kg</td>
                                    <td>0.4 mm</td>
                                    <td>10 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 200</td>
                                    <td>470-500 mm</td>
                                    <td>-</td>
                                    <td>0.5 mm</td>
                                    <td>10 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 300</td>
                                    <td>~600 mm</td>
                                    <td>-</td>
                                    <td>0.6 mm</td>
                                    <td>15 mm acél</td>
                                </tr>
                                <tr>
                                    <td>WFL 450</td>
                                    <td>~800 mm</td>
                                    <td>-</td>
                                    <td>1.2 mm</td>
                                    <td>15 mm acél</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Általános Jellemzők</h2>
                        <ul>
                            <li>Elektromágneses rezgőtányér meghajtás</li>
                            <li>230V / 50Hz tápfeszültség</li>
                            <li>Rugó-tömeg rendszer hangolással</li>
                            <li>Gumipuffereken keresztül rögzítés</li>
                            <li>Egyenletes zümmögés üzem közben</li>
                            <li>Védőföldelés kötelező</li>
                        </ul>
                    </div>

                    <h1>2. TELEPÍTÉS ÉS SZERELÉS</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS</li>
                            <li>Csak képzett villanyszerelő végezheti</li>
                            <li>Védőföldelés kötelező</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>2.1 Mechanikai Rögzítés</h2>
                        <p><strong>A rezgőtányért rezgésstabil helyre kell telepíteni:</strong></p>
                        <ul>
                            <li>Acél alaplap használata (10-15 mm vastagság)</li>
                            <li>Az alaplapot rezgésmentesen rögzíteni az aljzathoz</li>
                            <li>A rezgőtányér négy gumipufferen keresztül rögzül</li>
                            <li>Szomszédos géprészek NE érintkezzenek a rezgőtányérral</li>
                        </ul>
                        
                        <p><strong>FONTOS:</strong> Ha lehetséges, ne változtassa meg a gyári beállításokat!</p>
                    </div>

                    <div class="doc-section">
                        <h2>2.2 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért a vezérlőhöz (közvetlenül vagy csatlakozón keresztül)</li>
                            <li>Csatlakoztassa a vezérlőt a hálózathoz (230V/50Hz)</li>
                            <li>Ellenőrizze a földelést</li>
                            <li>Csak megfelelő VIBROTEC vagy kompatibilis vezérlő használható</li>
                        </ol>
                    </div>

                    <h1>3. ÜZEMBE HELYEZÉS</h1>

                    <div class="warning-box">
                        <h3>⚠️ Első Bekapcsolás</h3>
                        <p><strong>A tálca legyen ÜRES az első bekapcsoláskor!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.1 Bekapcsolási Folyamat</h2>
                        <ol>
                            <li>Csatlakoztassa a vezérlőt a hálózathoz</li>
                            <li>Kapcsolja be a vezérlőt</li>
                            <li>Állítsa a vezérlő teljesítményét 0%-ról fokozatosan 100%-ra</li>
                            <li>Egyenletes zümmögésnek kell hallhatónak lennie</li>
                            <li><strong>Kemény, kopogó vagy kalapáló hangok hibát jeleznek - azonnal állítsa le!</strong></li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Működés Ellenőrzése</h2>
                        <ol>
                            <li>Állítsa a vezérlőt kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>Szükség esetén növelje a teljesítményt</li>
                            <li>A gyári beállítások szerint 50-80% vezérlő pozícióban kell elérni a kívánt teljesítményt</li>
                        </ol>
                        
                        <p><strong>FONTOS:</strong> Üzem közben ne tekerje fel a vezérlőt a szükségesnél jobban!</p>
                    </div>

                    <h1>4. BEÁLLÍTÁSOK ÉS HANGOLÁS</h1>

                    <div class="doc-section">
                        <h2>4.1 Légrés Ellenőrzése és Beállítása</h2>
                        <p><strong>⚠️ KRITIKUS PARAMÉTER!</strong></p>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Légrés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>WFL 150</td>
                                    <td>0.4 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 200</td>
                                    <td>0.5 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 300</td>
                                    <td>0.6 mm</td>
                                </tr>
                                <tr>
                                    <td>WFL 450</td>
                                    <td>1.2 mm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>4.2 Rugóállandó Megváltoztatása</h2>
                        <p><strong>⚠️ FIGYELEM: Ez a művelet speciális szakértelmet igényel!</strong></p>
                        
                        <h3>Folyamat:</h3>
                        <ol>
                            <li>Kapcsolja be a rezgőtányért és állítson be lassú szállítási sebességet</li>
                            <li>Óvatosan oldja meg egy tetszőleges rugócsomag alsó rögzítőcsavarját</li>
                            <li>Figyelje a szállítási sebesség változását:
                                <ul>
                                    <li><strong>Ha a sebesség NŐ →</strong> el kell távolítani egy rugót</li>
                                    <li><strong>Ha a sebesség CSÖKKEN →</strong> hozzá kell adni egy rugót</li>
                                </ul>
                            </li>
                        </ol>
                        
                        <h3>Fontos Szabályok:</h3>
                        <ul>
                            <li>Az egyes rugócsomagoknak lehetőleg azonos számú rugót kell tartalmazniuk</li>
                            <li>Két rugó között mindig köztes lemezeket kell beépíteni</li>
                            <li>A rugócsomag belső oldalain fent és lent rugóblokk szükséges</li>
                            <li>Minden rugócsere után ellenőrizni kell a légrést!</li>
                        </ul>
                    </div>

                    <h1>5. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Normális vs Hibás Működés</h2>
                        
                        <h3>✓ NORMÁLIS MŰKÖDÉS:</h3>
                        <ul>
                            <li>Egyenletes zümmögés (potenciométer állástól függően halkabb vagy hangosabb)</li>
                            <li>Enyhe mechanikus rezgés</li>
                            <li>Minimális zaj</li>
                        </ul>
                        
                        <h3>✗ HIBÁS MŰKÖDÉS - AZONNAL ÁLLÍTSA LE:</h3>
                        <ul>
                            <li><strong>Kemény, kopogó hangok →</strong> Légrés túl kicsi vagy ütközés</li>
                            <li><strong>Kalapáló zajok →</strong> Horgony ütközik a mágneshez</li>
                            <li><strong>Csörgő hangok →</strong> Laza csavar vagy alkatrész</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.2 Gyakori Problémák és Megoldások</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges ok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Nincs áram / Vezérlő hiba / Légrés túl nagy</td>
                                    <td>Ellenőrizze csatlakozást / Ellenőrizze vezérlőt / Állítsa be légrést</td>
                                </tr>
                                <tr>
                                    <td>Lassan mozog</td>
                                    <td>Rossz hangolás / Légrés túl nagy / Szennyezett tálca</td>
                                    <td>Hangolás újraállítása / Légrés beállítása / Tisztítás</td>
                                </tr>
                                <tr>
                                    <td>Erős alaprezgés</td>
                                    <td>Laza csavarok / Kopott gumipufferek</td>
                                    <td>Csavarok meghúzása / Pufferek cseréje</td>
                                </tr>
                                <tr>
                                    <td>Kopogó hang</td>
                                    <td>Légrés túl kicsi / Horgony ütközik</td>
                                    <td>Légrés növelése / Beállítás ellenőrzése</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h1>6. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>6.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés (repedések, sérülések)</li>
                            <li>Hang figyelése (csak egyenletes zümmögés)</li>
                            <li>Rezgés ellenőrzése (egyenletes működés)</li>
                            <li>Tisztaság ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>6.2 Havi Karbantartás</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Rugók állapotának vizsgálata (repedések, deformáció)</li>
                            <li>Légrés ellenőrzése mérőlapkával</li>
                            <li>Gumipufferek ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>6.3 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Rezonancia újrahangolása</li>
                            <li>Gumipufferek cseréje</li>
                            <li>Elektromos csatlakozások ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                        <p>A rugók kopó alkatrészek! Élettartam: normál használat mellett 2-5 év.</p>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>VIBROTEC AG</strong></p>
                        <p>Benzstraße 13<br>
                        71149 Bondorf, Németország</p>
                        <p><strong>Tel:</strong> +49 74 57 / 73 29 80<br>
                        <strong>Fax:</strong> +49 74 57 / 73 29 81<br>
                        <strong>E-mail:</strong> info@vibrotec-ag.de<br>
                        <strong>Web:</strong> www.vibrotec-ag.de</p>
                    </div>
                </div>
            `
        },
        'rna-srcn-series': {
            title: 'RNA SRC-N Sorozat - Rezgőtányérok',
            content: `
                <div class="doc-content">
                    <h1>1. RNA SRC-N SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 Modellek és Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Modell</th>
                                    <th>Átmérő x Magasság</th>
                                    <th>Tömeg</th>
                                    <th>Légrés</th>
                                    <th>Frekvencia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SRC-N 400-2</td>
                                    <td>440 x 228 mm</td>
                                    <td>103 kg</td>
                                    <td>1.0-1.2 mm</td>
                                    <td>100 Hz</td>
                                </tr>
                                <tr>
                                    <td>SRC-N 630-1</td>
                                    <td>660 x 225 mm</td>
                                    <td>168 kg</td>
                                    <td>2.3-2.8 mm</td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>SRC-N 800-1</td>
                                    <td>805 x 315 mm</td>
                                    <td>270 kg</td>
                                    <td>2.0-3.0 mm</td>
                                    <td>50 Hz</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 SRC-N 400-2 Részletes Adatok</h2>
                        <ul>
                            <li><strong>Teljesítményfelvétel:</strong> 786 VA</li>
                            <li><strong>Áramfelvétel:</strong> 4.05 A</li>
                            <li><strong>Mágnes feszültség/frekvencia:</strong> 220V / 50Hz</li>
                            <li><strong>Mágnesek száma:</strong> 3 db (WZAW 080 típus)</li>
                            <li><strong>Rugócsomagok:</strong> 3 db (2x10, 1x9 rugó)</li>
                            <li><strong>Rugó méretek:</strong> 106 (86) x 35 mm, 2 mm vastagság</li>
                            <li><strong>Csavar húzónyomaték:</strong> 100 Nm</li>
                            <li><strong>Max. rezgő tömeg:</strong> 35 kg</li>
                            <li><strong>Védelmi fokozat:</strong> IP 54</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>1.3 SRC-N 630-1 Részletes Adatok</h2>
                        <ul>
                            <li><strong>Teljesítményfelvétel:</strong> 1000 VA</li>
                            <li><strong>Mágnesek száma:</strong> 4 db (YZAW 080 típus)</li>
                            <li><strong>Rugócsomagok:</strong> 4 db (4x8 rugó)</li>
                            <li><strong>Max. rezgő tömeg:</strong> 50 kg</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>1.4 SRC-N 800-1 Részletes Adatok</h2>
                        <ul>
                            <li><strong>Teljesítményfelvétel:</strong> 1700 VA</li>
                            <li><strong>Áramfelvétel:</strong> 8.5 A</li>
                            <li><strong>Mágnesek száma:</strong> 4 db (YZUW 090 típus)</li>
                            <li><strong>Rugócsomagok:</strong> 12 db (12x12 rugó)</li>
                            <li><strong>Rugó méretek:</strong> 180 (156) x 60 (30) mm</li>
                            <li><strong>Csavar húzónyomaték:</strong> 145 Nm</li>
                            <li><strong>Max. rezgő tömeg:</strong> 80 kg</li>
                            <li><strong>Kábelhossz:</strong> 1.4 m</li>
                        </ul>
                    </div>

                    <h1>2. BIZTONSÁGI ELŐÍRÁSOK</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS!</li>
                            <li>Csak képzett villanyszerelő végezheti!</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ Alapvető Biztonsági Követelmények</h3>
                        <ul>
                            <li>Győződjön meg róla, hogy a tápellátás védőföldjelése kifogástalan állapotban van</li>
                            <li>Soha ne működtesse a rezgőtányért védőburkolatok és fedőlapok nélkül</li>
                            <li>Ne működtesse robbanásveszélyes vagy nedves környezetben</li>
                            <li>Csak a gyártóval egyeztetett konfigurációban használja</li>
                        </ul>
                    </div>

                    <h1>3. SZÁLLÍTÁS ÉS TELEPÍTÉS</h1>

                    <div class="doc-section">
                        <h2>3.1 Szállítás</h2>
                        <p><strong>⚠️ FIGYELEM:</strong></p>
                        <ul>
                            <li>Ne akassza vagy mozgassa a rezgőtányért az orientáló eszköznél fogva!</li>
                            <li>Ügyeljen arra, hogy mozgatás közben ne ütközzön más tárgyakkal!</li>
                            <li>Mozgatás közben senki ne tartózkodjon a rezgőtányér alatt!</li>
                            <li>Mozgatás előtt ellenőrizze az emelőberendezés megfelelő teherbírását!</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Telepítés</h2>
                        <p>A telepítési helyen a rezgőtányért a speciálisan tervezett RNA tartóra kell felszerelni.</p>
                        <p>A tartót úgy kell méretezni, hogy a rezgőtányérből ne jussanak át rezgések.</p>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért közvetlenül vagy csatlakozón keresztül a vezérlőhöz</li>
                            <li>Csatlakoztassa a vezérlő hálózati csatlakozását</li>
                            <li>Ellenőrizze a földelést</li>
                        </ol>
                    </div>

                    <h1>4. ÜZEMBE HELYEZÉS</h1>

                    <div class="warning-box">
                        <h3>⚠️ A rezgőtányér tálcájának üresnek kell lennie!</h3>
                    </div>

                    <div class="doc-section">
                        <h2>4.1 Első Bekapcsolás</h2>
                        <ol>
                            <li>Kapcsolja be a rezgőtányért a vezérlőn keresztül</li>
                            <li>A vezérlő célérték potenciométerét 0%-ról 100%-ra fordítsa</li>
                            <li>A potenciométer állásától függően többé-kevésbé hangos zümmögésen kívül semmilyen hangot nem szabad hallani</li>
                        </ol>
                        
                        <p><strong>⚠️ Kemény, kopogó vagy kalapáló hangok mindig hibákat jeleznek, amelyeket el kell hárítani!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>4.2 Működésellenőrzés</h2>
                        <ol>
                            <li>Állítsa a vezérlő célérték potenciométerét kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>A gyárban a rezgőtányérokat úgy hangolják be, hogy célérték potenciométer 50-80%-os beállításánál érjék el a megígért szállítási teljesítményt</li>
                        </ol>
                        
                        <p><strong>⚠️ Üzem közben ne fordítsa fel a célérték potenciométert a feltétlenül szükségesnél jobban!</strong></p>
                    </div>

                    <h1>5. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Napi Ellenőrzés</h2>
                        <ul>
                            <li>Vizuális ellenőrzés (repedések, sérülések, szennyeződés)</li>
                            <li>Hang figyelése (egyenletes zümmögés)</li>
                            <li>Rezgés megfigyelése (egyenletes működés)</li>
                            <li>Védőburkolatok épségének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.2 Heti Ellenőrzés</h2>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Elektromos csatlakozások vizsgálata</li>
                            <li>Tálca tisztaságának ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.3 Havi Karbantartás</h2>
                        <ul>
                            <li>Rugók állapotának vizsgálata (repedések, deformáció)</li>
                            <li>Légrés ellenőrzése mérőlapkával</li>
                            <li>Lengéscsillapítók ellenőrzése</li>
                            <li>Védőburkolatok rögzítésének ellenőrzése</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>5.4 Éves Karbantartás</h2>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Elektromos rendszer átfogó ellenőrzése</li>
                            <li>Lengéscsillapítók cseréje szükség esetén</li>
                            <li>Teljesítményteszt elvégzése</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                    </div>

                    <h1>6. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>6.1 Gyakori Problémák és Megoldások</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges okok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NEM MOZOG</td>
                                    <td>Nincs áramellátás / Vezérlő hiba / Légrés túl nagy</td>
                                    <td>Ellenőrizze csatlakozást / Ellenőrizze vezérlőt / Állítsa be a légrést</td>
                                </tr>
                                <tr>
                                    <td>GYENGE SZÁLLÍTÁS</td>
                                    <td>Rossz hangolás / Túlterhelés / Légrés nem megfelelő</td>
                                    <td>Hangolás ellenőrzése / Terhelés csökkentése / Légrés beállítása</td>
                                </tr>
                                <tr>
                                    <td>KOPOGÓ HANG</td>
                                    <td>Légrés túl kicsi / Horgony ütközik</td>
                                    <td>Légrés növelése / Szakszerű beállítás</td>
                                </tr>
                                <tr>
                                    <td>ERŐS ALAPREZGÉS</td>
                                    <td>Laza csavarok / Kopott lengéscsillapítók</td>
                                    <td>Csavarok meghúzása / Csillapítók cseréje</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>6.2 Normális és Abnormális Hangok</h2>
                        
                        <h3>✓ NORMÁLIS MŰKÖDÉS:</h3>
                        <ul>
                            <li>Egyenletes zümmögés (50 vagy 100 Hz)</li>
                            <li>A hangosság a vezérlő beállításától függ</li>
                            <li>Enyhe mechanikai rezgés</li>
                        </ul>
                        
                        <h3>✗ HIBÁS MŰKÖDÉS - AZONNAL ÁLLÍTSA LE:</h3>
                        <ul>
                            <li><strong>Kopogás, csattogás →</strong> Légrés probléma vagy ütközés</li>
                            <li><strong>Kalapálás →</strong> Horgony ütközik a mágneshez</li>
                            <li><strong>Csörgés →</strong> Laza csavar vagy alkatrész</li>
                            <li><strong>Recsegés →</strong> Rugó probléma</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>RNA Group - Központ</strong></p>
                        <p>Rhein-Nadel Automation GmbH<br>
                        Reichsweg 19-23<br>
                        D-52068 Aachen, Németország</p>
                        <p><strong>Tel:</strong> +49 (0) 241-5109-0<br>
                        <strong>Fax:</strong> +49 (0) 241-5109-219<br>
                        <strong>E-mail:</strong> vertrieb@RNA.de<br>
                        <strong>Web:</strong> www.RNA.de</p>
                    </div>
                </div>
            `
        },
        'rna-srhl-series': {
            title: 'RNA SRHL Sorozat - Rezgőtányérok',
            content: `
                <div class="doc-content">
                    <h1>1. RNA SRHL SOROZAT ÁTTEKINTÉSE</h1>
                    
                    <div class="doc-section">
                        <h2>1.1 SRHL 400-1 Műszaki Adatok</h2>
                        <ul>
                            <li><strong>Méretek (Ø x H):</strong> 470 x 249 mm</li>
                            <li><strong>Tömeg:</strong> 140 kg</li>
                            <li><strong>Védelmi fokozat:</strong> IP 54</li>
                            <li><strong>Teljesítményfelvétel:</strong> 1140 VA</li>
                            <li><strong>Áramfelvétel:</strong> 5.7 A</li>
                            <li><strong>Mágnes feszültség/frekvencia:</strong> 220V / 50Hz</li>
                            <li><strong>Mágnesek száma:</strong> 2 db (YZUW 090 típus, piros)</li>
                            <li><strong>Légrés:</strong> 2.0-2.8 mm</li>
                            <li><strong>Rezgési frekvencia:</strong> 50 Hz</li>
                            <li><strong>Rugócsomagok száma:</strong> 6 db</li>
                            <li><strong>Rugók száma csomagokban:</strong> 4x4, 2x3</li>
                            <li><strong>Rugó méretek (L x W):</strong> 139 (116) x 40 mm</li>
                            <li><strong>Rugó vastagság:</strong> 2 mm</li>
                            <li><strong>Csavar húzónyomaték:</strong> 120 Nm</li>
                            <li><strong>Max. rezgő tömeg:</strong> 45 kg</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>1.2 Jellemzők</h2>
                        <ul>
                            <li>Nagy teljesítményű tálrezgő</li>
                            <li>50 Hz rezgési frekvencia</li>
                            <li>IP 54 védelmi fokozat</li>
                            <li>Robusztus konstrukció</li>
                            <li>6 rugócsomag megbízható működéshez</li>
                        </ul>
                    </div>

                    <h1>2. BIZTONSÁGI ELŐÍRÁSOK</h1>

                    <div class="danger-box">
                        <h3>⚠️ VESZÉLY - Áramütés!</h3>
                        <ul>
                            <li>Minden elektromos munka előtt: ÁRAMTALANÍTÁS!</li>
                            <li>Csak képzett villanyszerelő végezheti!</li>
                            <li>Védőföldelés kötelező!</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ Alapvető Biztonsági Követelmények</h3>
                        <ul>
                            <li>Győződjön meg róla, hogy a tápellátás védőföldjelése kifogástalan állapotban van</li>
                            <li>Soha ne működtesse a rezgőtányért védőburkolatok és fedőlapok nélkül</li>
                            <li>Ne működtesse robbanásveszélyes vagy nedves környezetben</li>
                            <li>Csak a gyártóval egyeztetett konfigurációban használja</li>
                        </ul>
                    </div>

                    <h1>3. TELEPÍTÉS ÉS ÜZEMBE HELYEZÉS</h1>

                    <div class="doc-section">
                        <h2>3.1 Telepítés</h2>
                        <p>A telepítési helyen a rezgőtányért a speciálisan tervezett RNA tartóra kell felszerelni.</p>
                        <p>A tartót úgy kell méretezni, hogy a rezgőtányérből ne jussanak át rezgések.</p>
                        
                        <p><strong>⚠️ FIGYELEM:</strong></p>
                        <ul>
                            <li>Ne akassza vagy mozgassa a rezgőtányért az orientáló eszköznél fogva</li>
                            <li>Ügyeljen arra, hogy mozgatás közben ne ütközzön más tárgyakkal</li>
                            <li>Mozgatás közben senki ne tartózkodjon a rezgőtányér alatt</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>3.2 Elektromos Csatlakoztatás</h2>
                        <ol>
                            <li>Csatlakoztassa a rezgőtányért közvetlenül vagy csatlakozón keresztül a vezérlőhöz</li>
                            <li>Csatlakoztassa a vezérlő hálózati csatlakozását (220V / 50Hz)</li>
                            <li>Ellenőrizze a védőföldelést</li>
                        </ol>
                    </div>

                    <div class="warning-box">
                        <h3>⚠️ Első Bekapcsolás</h3>
                        <p><strong>A rezgőtányér tálcájának üresnek kell lennie!</strong></p>
                    </div>

                    <div class="doc-section">
                        <h2>3.3 Működésellenőrzés</h2>
                        <ol>
                            <li>Állítsa a vezérlő célérték potenciométerét kb. 50%-ra</li>
                            <li>Töltse fel a tálcát maximum 1/3 magasságig alkatrészekkel</li>
                            <li>A gyári beállítások szerint 50-80% vezérlő pozícióban kell elérni a megígért szállítási teljesítményt</li>
                        </ol>
                        
                        <p><strong>⚠️ Üzem közben ne fordítsa fel a célérték potenciométert a feltétlenül szükségesnél jobban!</strong></p>
                    </div>

                    <h1>4. KARBANTARTÁS</h1>

                    <div class="doc-section">
                        <h2>4.1 Rendszeres Ellenőrzések</h2>
                        
                        <h3>Napi:</h3>
                        <ul>
                            <li>Vizuális ellenőrzés</li>
                            <li>Hang figyelése (egyenletes zümmögés)</li>
                            <li>Rezgés megfigyelése</li>
                        </ul>
                        
                        <h3>Heti:</h3>
                        <ul>
                            <li>Csavarok szorításának ellenőrzése</li>
                            <li>Elektromos csatlakozások vizsgálata</li>
                        </ul>
                        
                        <h3>Havi:</h3>
                        <ul>
                            <li>Rugók állapotának vizsgálata</li>
                            <li>Légrés ellenőrzése (2.0-2.8 mm)</li>
                            <li>Lengéscsillapítók ellenőrzése</li>
                        </ul>
                        
                        <h3>Éves:</h3>
                        <ul>
                            <li>Teljes tisztítás</li>
                            <li>Rugók alapos ellenőrzése és szükség esetén csere</li>
                            <li>Légrés újramérése és beállítása</li>
                            <li>Elektromos rendszer átfogó ellenőrzése</li>
                            <li>Teljesítményteszt</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>⚠️ KRITIKUS BIZTONSÁGI ELŐÍRÁS</h2>
                        <p><strong>SOHA NE OLAJOZZA VAGY ZSÍROZZA A RUGÓKAT!</strong></p>
                    </div>

                    <h1>5. HIBAELHÁRÍTÁS</h1>

                    <div class="doc-section">
                        <h2>5.1 Gyakori Problémák</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nem mozog</td>
                                    <td>Ellenőrizze áramellátást, vezérlőt, légrést</td>
                                </tr>
                                <tr>
                                    <td>Gyenge szállítás</td>
                                    <td>Hangolás ellenőrzése, terhelés csökkentése</td>
                                </tr>
                                <tr>
                                    <td>Kopogó hang</td>
                                    <td>Légrés növelése, szakszerű beállítás</td>
                                </tr>
                                <tr>
                                    <td>Erős alaprezgés</td>
                                    <td>Csavarok meghúzása, csillapítók cseréje</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h2>Műszaki Támogatás</h2>
                        <p><strong>RNA Group</strong></p>
                        <p>Rhein-Nadel Automation GmbH<br>
                        Reichsweg 19-23<br>
                        D-52068 Aachen, Németország</p>
                        <p><strong>Tel:</strong> +49 (0) 241-5109-0<br>
                        <strong>Fax:</strong> +49 (0) 241-5109-219<br>
                        <strong>E-mail:</strong> vertrieb@RNA.de<br>
                        <strong>Web:</strong> www.RNA.de</p>
                    </div>
                </div>
            `
        }
    };

    // Vezérlők dokumentációja következik
    const controllerDocs = {
        'irg1s': {
            title: 'IRG1-S Rezgővezérlő (Saventic)',
            content: `
                <div class="doc-content">
                    <h1>IRG1-S REZGŐVEZÉRLŐ</h1>
                    
                    <div class="doc-section">
                        <h2>Áttekintés</h2>
                        <p>Az IRG1-S elektronikus vezérlő induktív terhelések, mint rezgőtálcák és lineáris adagolók vezérlésére szolgál. Fázisszög-szabályozással működik és változtatható kimeneti feszültséget generál a meghajtó elektromágnes számára.</p>
                    </div>

                    <div class="info-box">
                        <h2>Beállítási Elemek</h2>
                        <p><strong>Az IRG1-S NEM használ numerikus kódokat, hanem TRIMMER POTENCIOMÉTEREKKEL állítható:</strong></p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Elem</th>
                                    <th>Funkció</th>
                                    <th>Tartomány</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Potenciométer (előlap)</td>
                                    <td>Kimeneti teljesítmény</td>
                                    <td>0-100%</td>
                                </tr>
                                <tr>
                                    <td>RT1 (Umin)</td>
                                    <td>Minimális feszültség</td>
                                    <td>Változtatható</td>
                                </tr>
                                <tr>
                                    <td>RT2 (Umax)</td>
                                    <td>Maximális feszültség</td>
                                    <td>Változtatható</td>
                                </tr>
                                <tr>
                                    <td>RT3</td>
                                    <td>Lágyindítás</td>
                                    <td>0-4 sec</td>
                                </tr>
                                <tr>
                                    <td>Kapcsoló</td>
                                    <td>Frekvencia választás</td>
                                    <td>50/100/60/120 Hz</td>
                                </tr>
                                <tr>
                                    <td>Jumper</td>
                                    <td>Engedélyezés inverziója</td>
                                    <td>BE/KI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="warning-box">
                        <p><strong>FONTOS:</strong> Az IRG1-S analóg beállítású vezérlő, nincs digitális menürendszere vagy numerikus paraméter kódjai. Minden beállítás fizikai trimmerekkel és kapcsolókkal történik.</p>
                    </div>

                    <div class="doc-section">
                        <h2>Frekvencia Beállítás</h2>
                        <ul>
                            <li><strong>100 Hz (6000 S/min)</strong> - Teljes hullám</li>
                            <li><strong>50 Hz (3000 S/min)</strong> - Fél hullám</li>
                            <li><strong>120 Hz (7200 S/min)</strong> - Teljes hullám (60 Hz hálózatra)</li>
                            <li><strong>60 Hz (3600 S/min)</strong> - Fél hullám (60 Hz hálózatra)</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>Beállítási Útmutató</h2>
                        <ol>
                            <li><strong>Alapteljesítmény beállítása:</strong> Forgassa az előlap potenciométerét a kívánt szintre (0-100%)</li>
                            <li><strong>Minimális feszültség (RT1):</strong> Belső trimmer - minimális kimeneti feszültség beállítása</li>
                            <li><strong>Maximális feszültség (RT2):</strong> Belső trimmer - maximális kimeneti feszültség beállítása</li>
                            <li><strong>Lágyindítás (RT3):</strong> Beállítható 0-4 másodperc között</li>
                            <li><strong>Frekvencia:</strong> Válassza ki a megfelelő üzemmódot a kapcsolóval</li>
                        </ol>
                    </div>

                    <div class="danger-box">
                        <h2>Biztonsági Előírások</h2>
                        <ul>
                            <li>A vezérlő telepítését csak szakképzett személyzet végezheti</li>
                            <li>Telepítés előtt kapcsolja ki a tápfeszültséget</li>
                            <li>Ellenőrizze a helyi tápfeszültség megfelelőségét</li>
                            <li>Földelés kötelező</li>
                            <li>Védőföldelés kötelező minden berendezésnél</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tápfeszültség</td>
                                    <td>230V/50Hz vagy 115V/60Hz</td>
                                </tr>
                                <tr>
                                    <td>Kimeneti szabályozás</td>
                                    <td>0-100% (fázisszög)</td>
                                </tr>
                                <tr>
                                    <td>Frekvencia opciók</td>
                                    <td>50/60/100/120 Hz</td>
                                </tr>
                                <tr>
                                    <td>Lágyindítás</td>
                                    <td>0-4 másodperc</td>
                                </tr>
                                <tr>
                                    <td>Üzemi hőmérséklet</td>
                                    <td>0...+45°C</td>
                                </tr>
                                <tr>
                                    <td>Védelem</td>
                                    <td>IP20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>Gyakori Problémák</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Probléma</th>
                                    <th>Lehetséges ok</th>
                                    <th>Megoldás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nincs kimenet</td>
                                    <td>Nincs tápfeszültség / Biztosíték égett</td>
                                    <td>Ellenőrizze tápfeszültséget / Cserélje biztosítékot</td>
                                </tr>
                                <tr>
                                    <td>Gyenge rezgés</td>
                                    <td>Alacsony amplitúdó beállítás</td>
                                    <td>Növelje a potenciométert</td>
                                </tr>
                                <tr>
                                    <td>Túl erős rezgés</td>
                                    <td>Túl magas amplitúdó / Rezonancia</td>
                                    <td>Csökkentse potenciométert / Változtassa frekvenciát</td>
                                </tr>
                                <tr>
                                    <td>Túlmelegedés</td>
                                    <td>Rossz szellőzés / Túlterhelés</td>
                                    <td>Javítsa szellőzést / Csökkentse terhelést</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        'reovib': {
            title: 'REOVIB MFS 168 Frekvenciavezérlő',
            content: `
                <div class="doc-content">
                    <h1>REOVIB MFS 168 FREKVENCIAVEZÉRLŐ</h1>
                    
                    <div class="doc-section">
                        <h2>Áttekintés</h2>
                        <p>A REOVIB MFS 168 rezgőadagolók professzionális frekvenciavezérlője. LED kijelzővel és érintőpanellel rendelkezik. Menüvezérlésű rendszer numerikus kódokkal.</p>
                    </div>

                    <div class="doc-section">
                        <h2>Kezelőelemek</h2>
                        <ul>
                            <li><strong>LED kijelző</strong> - Paraméterek és értékek megjelenítése</li>
                            <li><strong>▲ gomb</strong> - Érték növelése</li>
                            <li><strong>▼ gomb</strong> - Érték csökkentése</li>
                            <li><strong>F gomb</strong> - Vissza (Go back)</li>
                            <li><strong>P gomb</strong> - Program mód / Megerősítés</li>
                        </ul>
                    </div>

                    <div class="info-box">
                        <h2>Numerikus Paraméter Kódok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kód</th>
                                    <th>Paraméter</th>
                                    <th>Tartomány</th>
                                    <th>Gyári</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>000</td>
                                    <td>Feeder kimeneti alapérték</td>
                                    <td>0-100%</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2. alapérték amplitúdó (fine)</td>
                                    <td>0-100%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2. alapérték amplitúdó (line)</td>
                                    <td>0-100%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>Rezgési frekvencia</td>
                                    <td>30-140 Hz</td>
                                    <td>100 Hz</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>Lágyindítás</td>
                                    <td>0.1-4 Sec</td>
                                    <td>0.1 Sec</td>
                                </tr>
                                <tr>
                                    <td>I</td>
                                    <td>Bekapcsolási késleltetés</td>
                                    <td>0-15 Sec</td>
                                    <td>5 Sec</td>
                                </tr>
                                <tr>
                                    <td>E</td>
                                    <td>Kikapcsolási késleltetés</td>
                                    <td>0-15 Sec</td>
                                    <td>5 Sec</td>
                                </tr>
                                <tr>
                                    <td>E.S.P.</td>
                                    <td>Külső alapérték forrás</td>
                                    <td>0/I</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>P.A.C.</td>
                                    <td>Proporcionális szabályozás</td>
                                    <td>0-100</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>I.A.</td>
                                    <td>Automata frekvenciavezérlés</td>
                                    <td>0/I</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>A.F.C.</td>
                                    <td>Automata frekvencia keresés</td>
                                    <td>0/I</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>F.A.C.</td>
                                    <td>Gyári beállítások vissza</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>U.S.PA.</td>
                                    <td>Felhasználói beállítások</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>Beállítási Módszer</h2>
                        <p>A paraméter beállítása a következő lépésekkel történik:</p>
                        <ol>
                            <li>Nyomja meg a <strong>P gombot</strong> a programozási módba lépéshez</li>
                            <li>Válassza ki a kívánt kódot a kurzor gombokkal (▲ ▼)</li>
                            <li>Rövid nyomás: egységnyi változás</li>
                            <li>Hosszú nyomás: tízes nagyságrendű változás</li>
                            <li><strong>F gomb:</strong> vissza a menüben</li>
                            <li><strong>P gomb:</strong> megerősítés és mentés</li>
                            <li>Automatikus mentés 60 másodperc után</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>Futási Üzenetek</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Üzenet</th>
                                    <th>Jelentés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>OFF</td>
                                    <td>Engedélyezés BE</td>
                                </tr>
                                <tr>
                                    <td>FULL</td>
                                    <td>Pálya tele</td>
                                </tr>
                                <tr>
                                    <td>800</td>
                                    <td>Beállított pont %-ban (0-100%)</td>
                                </tr>
                                <tr>
                                    <td>STOP</td>
                                    <td>Leállítva "0" gombbal</td>
                                </tr>
                                <tr>
                                    <td>Error 04</td>
                                    <td>Rövidzárlat a kimeneten</td>
                                </tr>
                                <tr>
                                    <td>Error 05</td>
                                    <td>Bemeneti feszültség túl magas</td>
                                </tr>
                                <tr>
                                    <td>Error 5c</td>
                                    <td>Szenzor időtúllépés</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h2>Gyors Beállítási Útmutató</h2>
                        <h3>Alapvető paraméterek:</h3>
                        <ol>
                            <li><strong>Kod 000:</strong> Állítsa be a kimeneti teljesítményt (0-100%)</li>
                            <li><strong>Kód F:</strong> Állítsa be a lágyindítási időt (0.1-4 sec)</li>
                            <li><strong>Frekvencia:</strong> Állítsa be a rezgési frekvenciát (30-140 Hz)</li>
                            <li><strong>Kód I:</strong> Bekapcsolási késleltetés (0-15 sec)</li>
                            <li><strong>Kód E:</strong> Kikapcsolási késleltetés (0-15 sec)</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>Haladó Funkciók</h2>
                        <h3>Külső Alapérték (E.S.P.):</h3>
                        <p>Lehetővé teszi a rezgési amplitúdó külső jel (0-10V vagy 4-20mA) általi vezérlését.</p>
                        
                        <h3>Automata Frekvenciavezérlés (I.A.):</h3>
                        <p>Automatikusan optimalizálja a frekvenciát a maximális hatékonyság érdekében.</p>
                        
                        <h3>Automata Frekvencia Keresés (A.F.C.):</h3>
                        <p>Automatikusan megkeresi az optimális rezonancia frekvenciát.</p>
                    </div>

                    <div class="warning-box">
                        <h2>Fontos Megjegyzések</h2>
                        <ul>
                            <li>A paraméter változtatások automatikusan mentésre kerülnek 60 másodperc után</li>
                            <li>A gyári beállítások visszaállításához használja a F.A.C. funkciót (Menu 210)</li>
                            <li>Felhasználói beállítások mentéséhez használja a Menu C143 funkciót</li>
                            <li>Hibaüzenetek esetén ellenőrizze a kábelezést és a tápfeszültséget</li>
                        </ul>
                    </div>

                    <h1>6. RÉSZLETES MENÜSTRUKTÚRA</h1>

                    <div class="info-box">
                        <h2>6.1 Code 003 - Function Settings (Funkció Beállítások)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Paraméter</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ESP 0</td>
                                    <td>Alapérték használat kijelző panel</td>
                                    <td>0 = Beállított pont kijelző panel használatával<br>1 = Külső pont 0...+10V<br>0 = Külső pont 0...I</td>
                                </tr>
                                <tr>
                                    <td>ESP I</td>
                                    <td>Külső alapérték forrás</td>
                                    <td>I = Külső alapérték port I</td>
                                </tr>
                                <tr>
                                    <td>0/I</td>
                                    <td>Coarse/fine vezérlés</td>
                                    <td>0 = 0...10 V (0...I) - 20 mA Potenciométer</td>
                                </tr>
                                <tr>
                                    <td>0/I</td>
                                    <td>Pálya szabályozás</td>
                                    <td>0 = Pálya szabályozás<br>1 = Coarse/fine vezérlés két sebesség alapértékkel</td>
                                </tr>
                                <tr>
                                    <td>CA I</td>
                                    <td>Engedélyezés inverziója</td>
                                    <td>0 = Engedélyezés<br>1 = Invert enable</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="warning-box">
                            <p><strong>FONTOS:</strong> A külső alapérték használatához válassza az E.S.P. = I opciót a Menu C003-ban. Potenciométer használatakor válassza "Pot." = I opciót. A minimális rezgési szint beállításához: E.S.P. = 0, majd állítsa a rezgési szintet a kurzor gombokkal, végül E.S.P. = I.</p>
                        </div>
                    </div>

                    <div class="doc-section">
                        <h2>6.2 Code 096 - Feeder (Adagoló Beállítások)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Paraméter</th>
                                    <th>Tartomány</th>
                                    <th>Gyári</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>000</td>
                                    <td>Feeder alapérték</td>
                                    <td>0...100%</td>
                                    <td>-</td>
                                    <td>Feeder átbocsátás 0-100%</td>
                                </tr>
                                <tr>
                                    <td>020</td>
                                    <td>Maximum teszt</td>
                                    <td>100...5%</td>
                                    <td>5%</td>
                                    <td>Maximum teszt 100-5%</td>
                                </tr>
                                <tr>
                                    <td>020</td>
                                    <td>Rezgési frekvencia</td>
                                    <td>30...140 Hz</td>
                                    <td>100 Hz</td>
                                    <td>Rezgési frekvencia [Hz]</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>Lágyindítás</td>
                                    <td>0.1...4 Sec</td>
                                    <td>0.1 Sec</td>
                                    <td>Lágyindítás 0.1-4 Sec</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>Lágy leállítás</td>
                                    <td>0.1...4 Sec</td>
                                    <td>0.5 Sec</td>
                                    <td>Lágy leállítási idő 0.1-4 Sec</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>6.3 Code 167 - Track Control (Pálya Szabályozás)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Paraméter</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>020</td>
                                    <td>Bekapcsolási késleltetés</td>
                                    <td>0...15 Sec<br>Bekapcsolási késleltetési idő</td>
                                </tr>
                                <tr>
                                    <td>020</td>
                                    <td>Kikapcsolási késleltetés</td>
                                    <td>0...15 Sec<br>Kikapcsolási késleltetési idő</td>
                                </tr>
                                <tr>
                                    <td>SC 0</td>
                                    <td>Pályavezérlés funkció inverziója</td>
                                    <td>0 = SC funkció<br>1 = SC funkció invertált</td>
                                </tr>
                                <tr>
                                    <td>CA I</td>
                                    <td>Aktivitás időzítő funkció</td>
                                    <td>0 = Aktivitás időzítő engedélyezett<br>1 = Aktivitás időzítő letiltva</td>
                                </tr>
                                <tr>
                                    <td>E_</td>
                                    <td>Szenzor időtúllépés idő</td>
                                    <td>E_ = Szenzor késleltetési idő [sec]</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><strong>Track Control funkció:</strong> Bekapcsolási és kikapcsolási késleltetések beállítása a pálya szabályozáshoz. A szenzor bemenet használatakor engedélyezhető vagy letiltható az aktivitás időzítő. BE/KI késleltetések 0-15 másodperc tartományban állíthatók.</p>
                    </div>

                    <div class="doc-section">
                        <h2>6.4 Code 143 - Save Parameter Settings (Paraméter Mentés)</h2>
                        <p><strong>Felhasználói paraméter beállítások mentése:</strong></p>
                        <ol>
                            <li>Válassza a Menu C143 menüpontot</li>
                            <li>Válassza ki a "Save parameter settings" opciót</li>
                            <li>Nyomja meg a megerősítő gombot</li>
                            <li>A kijelzőn megjelenik: "All parameter settings are saved"</li>
                            <li>A paraméterek a felhasználói C 143 alatt mentésre kerülnek</li>
                        </ol>
                        <div class="info-box">
                            <p><strong>FONTOS:</strong> Az egyedi beállítások mentése lehetővé teszi a gyári beállítások visszaállítása után a korábban mentett konfiguráció gyors visszatöltését Menu C 210 segítségével.</p>
                        </div>
                    </div>

                    <div class="doc-section">
                        <h2>6.5 Code 210 - Recall Parameters (Paraméterek Visszatöltése)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Funkció</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FAC</td>
                                    <td>Gyári beállítások</td>
                                    <td>Gyári beállítások visszatöltése (Recall factory settings)</td>
                                </tr>
                                <tr>
                                    <td>USPA</td>
                                    <td>Felhasználói beállítások</td>
                                    <td>Felhasználói mentett beállítások visszatöltése<br>(Recall settings saved under C 143)</td>
                                </tr>
                                <tr>
                                    <td>USPA</td>
                                    <td>Felhasználói paraméterek</td>
                                    <td>Korábban C 143 alatt mentett paraméterek visszatöltése</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><strong>Visszatöltési eljárás:</strong></p>
                        <ol>
                            <li>Új készülék esetén először töltse vissza a gyári beállításokat: Menu C 210 "FAC"</li>
                            <li>Paraméterek mentése: Menu C 143</li>
                            <li>Későbbi visszatöltés: Menu C 210 "U.S.PA."</li>
                            <li>Megerősítés után a paraméterek azonnal aktívvá válnak</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>6.6 Code 117 - Hide Menus (Menük Elrejtése)</h2>
                        <p>A programozási menük elrejtése lehetővé teszi, hogy csak a beállított pont változtatható legyen, a többi menü nem lesz elérhető. Ez hasznos a véletlenszerű beállítás-módosítások elkerülésére.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Funkció</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hd.C 0</td>
                                    <td>Menük láthatók</td>
                                    <td>Paraméter beállítások elérhetők, csak alapérték változtatható</td>
                                </tr>
                                <tr>
                                    <td>Hd.C I</td>
                                    <td>Menük elrejtve</td>
                                    <td>Paraméter menük megnyithatók normál módon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>6.7 Code 008 - Regulation (Automata Szabályozás)</h2>
                        <p>Az automata frekvenciavezérlés és frekvenciakeresés funkciói lehetővé teszik a rezgés automatikus optimalizálását.</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kijelző</th>
                                    <th>Paraméter</th>
                                    <th>Leírás</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>000</td>
                                    <td>Feeder alapérték</td>
                                    <td>0...100%<br>Feeder átbocsátás százalékban</td>
                                </tr>
                                <tr>
                                    <td>020</td>
                                    <td>Maximum teszt</td>
                                    <td>100...5%<br>Maximális teszt tartomány</td>
                                </tr>
                                <tr>
                                    <td>020</td>
                                    <td>Rezgési frekvencia</td>
                                    <td>30...140 Hz<br>Beállítható rezgési frekvencia</td>
                                </tr>
                                <tr>
                                    <td>0</td>
                                    <td>Szabályozás bekapcsolva</td>
                                    <td>0 = Szabályozás letiltva<br>I = Szabályozás aktív</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h3>Automata frekvencia funkciók:</h3>
                        <ul>
                            <li><strong>I.A.</strong> - Automata frekvenciavezérlés (Automatic frequency control): 0/I kapcsoló</li>
                            <li><strong>A.F.C.</strong> - Automata frekvencia keresés (Automatic frequency search): 0/I kapcsoló</li>
                            <li><strong>A.F.S.</strong> - Automata frekvencia keresés indítás: PUSH gomb a keresés elindításához</li>
                        </ul>
                        
                        <div class="info-box">
                            <p><strong>MEGJEGYZÉS:</strong> A rezgési frekvencia beállítása a hálózati frekvenciához igazodik. Az eltérő rezgési frekvencia a pálya tervezésétől függ. Az állandó idő az, amikor egy rezgés elindítva van vagy le van állítva.</p>
                        </div>
                    </div>

                    <h1>7. MŰSZAKI ADATOK</h1>

                    <div class="doc-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tápfeszültség</td>
                                    <td>230V/50Hz</td>
                                </tr>
                                <tr>
                                    <td>Frekvencia tartomány</td>
                                    <td>30-140 Hz</td>
                                </tr>
                                <tr>
                                    <td>Kimeneti szabályozás</td>
                                    <td>0-100%</td>
                                </tr>
                                <tr>
                                    <td>Üzemi hőmérséklet</td>
                                    <td>0...+45°C</td>
                                </tr>
                                <tr>
                                    <td>Védelem</td>
                                    <td>IP20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        'fs26': {
            title: 'FS-26 Frekvenciavezérlő (Fimotec-Fischer)',
            content: `
                <div class="doc-content">
                    <h1>FS-26 FREKVENCIAVEZÉRLŐ</h1>
                    
                    <div class="doc-section">
                        <h2>Áttekintés</h2>
                        <p>Az FS-26 frekvenciavezérlő rezgőadagolók professzionális vezérlésére szolgál. Többszintű hozzáférés-szabályozással (Bedienercode) és fejlett menürendszerrel (Ebene 0, 1, 2, 3) rendelkezik.</p>
                    </div>

                    <div class="info-box">
                        <h2>Kezelői Kódok (Bedienercode)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kód</th>
                                    <th>Jogosultság</th>
                                    <th>Hozzáférés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kód nélkül</td>
                                    <td>Alapvető kezelő</td>
                                    <td>Csak amplitúdó (0A) állítható</td>
                                </tr>
                                <tr>
                                    <td>Kód A</td>
                                    <td>Berendezés vezető</td>
                                    <td>Alapvető paraméterek</td>
                                </tr>
                                <tr>
                                    <td>Kód B</td>
                                    <td>Berendezés üzembe helyező</td>
                                    <td>TELJES hozzáférés</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>EBENE 0 - Rezgőadagoló Alapparaméterek</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Kód</th>
                                    <th>Paraméter</th>
                                    <th>Tartomány</th>
                                    <th>Gyári</th>
                                    <th>Hozzáférés</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0A</td>
                                    <td>Rezgési amplitúdó</td>
                                    <td>1-230 V~</td>
                                    <td>30 V~</td>
                                    <td>Mindenki</td>
                                </tr>
                                <tr>
                                    <td>0A&gt;</td>
                                    <td>Min. kimeneti korlátozás</td>
                                    <td>1-230 V~</td>
                                    <td>30 V~</td>
                                    <td>Code B</td>
                                </tr>
                                <tr>
                                    <td>0A&lt;</td>
                                    <td>Max. kimeneti korlátozás</td>
                                    <td>1-230 V~</td>
                                    <td>230 V~</td>
                                    <td>Code B</td>
                                </tr>
                                <tr>
                                    <td>0St</td>
                                    <td>Áramkorlátozás</td>
                                    <td>0.1-6.0 A~</td>
                                    <td>6.0 A~</td>
                                    <td>Code B</td>
                                </tr>
                                <tr>
                                    <td>0F</td>
                                    <td>Rezgési frekvencia</td>
                                    <td>5.0-200 Hz</td>
                                    <td>50.0 Hz</td>
                                    <td>Code B</td>
                                </tr>
                                <tr>
                                    <td>0SA</td>
                                    <td>Lágyindítási rámpa</td>
                                    <td>0.1-5.0 s</td>
                                    <td>0.5 s</td>
                                    <td>Code A és B</td>
                                </tr>
                                <tr>
                                    <td>0SS</td>
                                    <td>Lágy leállítási rámpa</td>
                                    <td>0.1-5.0 s</td>
                                    <td>0.5 s</td>
                                    <td>Code A és B</td>
                                </tr>
                                <tr>
                                    <td>0AE</td>
                                    <td>Alapérték választás</td>
                                    <td>F/P/U/I/b</td>
                                    <td>F</td>
                                    <td>Code A és B</td>
                                </tr>
                                <tr>
                                    <td>0FO</td>
                                    <td>Hullámforma</td>
                                    <td>G/H</td>
                                    <td>G</td>
                                    <td>Code B</td>
                                </tr>
                                <tr>
                                    <td>0d</td>
                                    <td>Munkamód</td>
                                    <td>0/1/E</td>
                                    <td>E</td>
                                    <td>Code A és B</td>
                                </tr>
                                <tr>
                                    <td>0old</td>
                                    <td>Paraméter biztosítás</td>
                                    <td>0/bs/br/rE</td>
                                    <td>0</td>
                                    <td>Code A és B</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>Paraméter Részletek</h2>
                        
                        <h3>0AE - Alapérték választás lehetőségei:</h3>
                        <ul>
                            <li><strong>F</strong> - Folientastatur (Fólia billentyűzet)</li>
                            <li><strong>P</strong> - Potenciométer 10kΩ</li>
                            <li><strong>U</strong> - Analóg feszültség 0-10V</li>
                            <li><strong>I</strong> - Analóg áram 4-20mA</li>
                            <li><strong>b</strong> - Gyorsulás szenzor (Beschleunigungssensor)</li>
                        </ul>

                        <h3>0FO - Hullámforma:</h3>
                        <ul>
                            <li><strong>G</strong> - Vollwelle (Teljes hullám) ^^^^^^</li>
                            <li><strong>H</strong> - Halbwelle (Fél hullám) ^ ^ ^</li>
                        </ul>

                        <h3>0d - Munkamód:</h3>
                        <ul>
                            <li><strong>0</strong> - Meghajtás tartósan KI</li>
                            <li><strong>1</strong> - Meghajtás tartósan BE</li>
                            <li><strong>E</strong> - Meghajtás az Ebene 0 logika által vezérelve</li>
                        </ul>

                        <h3>0old - Paraméter biztosítás funkciók:</h3>
                        <ul>
                            <li><strong>0</strong> - Munkaparaméterek (normál állapot)</li>
                            <li><strong>bs</strong> - Backup paraméter mentése</li>
                            <li><strong>br</strong> - Backup paraméter betöltése</li>
                            <li><strong>rE</strong> - Gyári beállítások visszaállítása (Werkseinstellungen)</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h2>Biztonsági Kérdés</h2>
                        <p>Egyes paraméterek esetén a funkció végrehajtása előtt biztonsági megerősítés szükséges. A megerősítéshez nyomja meg újra az 5-ös gombot. A kilépéshez bármely más gombot (0-1-2-3-4-6-7) megnyomhat.</p>
                    </div>

                    <div class="info-box">
                        <h2>Időtúllépés (Time Out)</h2>
                        <ul>
                            <li>A programozási mód 60 másodperc után automatikusan lezárul</li>
                            <li>A változtatások elvetésre kerülnek, ha nem nyomja meg az 5-ös gombot</li>
                            <li>A második LED bal oldalán lévő pont villog 3-szor a kilépés előtt</li>
                            <li>A pont folyamatos világítása jelzi a programozási módot</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>Gyors Beállítási Útmutató</h2>
                        <ol>
                            <li><strong>Amplitúdó beállítása (0A):</strong> Állítsa be a kívánt rezgési amplitúdót (1-230V)</li>
                            <li><strong>Frekvencia (0F):</strong> Állítsa be a rezgési frekvenciát (5-200 Hz)</li>
                            <li><strong>Lágyindítás (0SA):</strong> Állítsa be az indulási időt (0.1-5.0 sec)</li>
                            <li><strong>Lágy leállítás (0SS):</strong> Állítsa be a leállítási időt (0.1-5.0 sec)</li>
                            <li><strong>Alapérték forrás (0AE):</strong> Válassza ki a vezérlési módot (F/P/U/I/b)</li>
                            <li><strong>Hullámforma (0FO):</strong> Válassza a teljes (G) vagy fél (H) hullámot</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>Érték</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tápfeszültség</td>
                                    <td>230V/50Hz</td>
                                </tr>
                                <tr>
                                    <td>Kimeneti amplitúdó</td>
                                    <td>1-230 V~</td>
                                </tr>
                                <tr>
                                    <td>Frekvencia tartomány</td>
                                    <td>5-200 Hz</td>
                                </tr>
                                <tr>
                                    <td>Áramkorlátozás</td>
                                    <td>0.1-6.0 A~</td>
                                </tr>
                                <tr>
                                    <td>Üzemi hőmérséklet</td>
                                    <td>0...+45°C</td>
                                </tr>
                                <tr>
                                    <td>Védelem</td>
                                    <td>IP20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="danger-box">
                        <h2>Fontos Biztonsági Tudnivalók</h2>
                        <ul>
                            <li>Csak szakképzett személyzet végezheti a telepítést és karbantartást</li>
                            <li>Telepítés előtt kapcsolja ki a tápfeszültséget</li>
                            <li>A paraméter változtatások előtt olvassa el a dokumentációt</li>
                            <li>A gyári beállítások visszaállítása (rE) előtt mentse el a beállításokat</li>
                            <li>Ellenőrizze a hozzáférési kódokat a paraméterek módosítása előtt</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'sdvc31': {
            title: 'SDVC31 Digitális Vezérlő (CUH)',
            content: `
                <div class="doc-content">
                    <h1>SDVC31 DIGITÁLIS VEZÉRLŐ</h1>
                    
                    <div class="doc-section">
                        <h2>Áttekintés</h2>
                        <p>Az SDVC31 digitális frekvenciavezérlő két modellben érhető el: <strong>SDVC31-S</strong> és <strong>SDVC31-M</strong>. Fejlett funkciókkal rendelkezik, mint távvezérlés, intelligens fotocella, gyorsítási index és hullámforma szabályozás.</p>
                    </div>

                    <div class="doc-section">
                        <h2>Alapparaméterek (Közvetlenül Elérhető)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Szimbólum</th>
                                    <th>Paraméter</th>
                                    <th>Tartomány</th>
                                    <th>Gyári</th>
                                    <th>LED Jelző</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>U</td>
                                    <td>Kimeneti feszültség</td>
                                    <td>0-260 V</td>
                                    <td>-</td>
                                    <td>Voltage</td>
                                </tr>
                                <tr>
                                    <td>F</td>
                                    <td>Kimeneti frekvencia</td>
                                    <td>40.0-400.0 Hz</td>
                                    <td>50.0 Hz</td>
                                    <td>Frequency</td>
                                </tr>
                                <tr>
                                    <td>t1</td>
                                    <td>Fotocella BE késleltetés</td>
                                    <td>0.0-10.0 s</td>
                                    <td>0.5 s</td>
                                    <td>On Delay</td>
                                </tr>
                                <tr>
                                    <td>t2</td>
                                    <td>Fotocella KI késleltetés</td>
                                    <td>0.0-20.0 s</td>
                                    <td>0.2 s</td>
                                    <td>Off Delay</td>
                                </tr>
                                <tr>
                                    <td>t3</td>
                                    <td>Kapcsoló BE késleltetés</td>
                                    <td>0.0-20.0 s</td>
                                    <td>0.2 s</td>
                                    <td>On Delay</td>
                                </tr>
                                <tr>
                                    <td>t4</td>
                                    <td>Kapcsoló KI késleltetés</td>
                                    <td>0.0-20.0 s</td>
                                    <td>0.5 s</td>
                                    <td>Off Delay</td>
                                </tr>
                                <tr>
                                    <td>S</td>
                                    <td>Lágyindítás idő</td>
                                    <td>0.0-20.0 s</td>
                                    <td>0.5 s</td>
                                    <td>Soft Start</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h2>Haladó Paraméterek (⚙ + ▲ Hosszú Nyomás)</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Szimbólum</th>
                                    <th>Paraméter</th>
                                    <th>Tartomány</th>
                                    <th>Gyári</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Γ1</td>
                                    <td>Fotocella logika</td>
                                    <td>NC/NO</td>
                                    <td>NC</td>
                                </tr>
                                <tr>
                                    <td>Γ2</td>
                                    <td>Kapcsoló szenzor logika</td>
                                    <td>NC/NO</td>
                                    <td>NC</td>
                                </tr>
                                <tr>
                                    <td>Γ3</td>
                                    <td>Vezérlőkimenet logika</td>
                                    <td>NC/NO</td>
                                    <td>NC</td>
                                </tr>
                                <tr>
                                    <td>Γ4</td>
                                    <td>Vezérlőjel logikai reláció</td>
                                    <td>or/And/Hor</td>
                                    <td>or</td>
                                </tr>
                                <tr>
                                    <td>Γ5</td>
                                    <td>Fő vezérlés szeparáció</td>
                                    <td>Separate/Related</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>h</td>
                                    <td>Max. kimeneti feszültség</td>
                                    <td>0-260 V</td>
                                    <td>260 V</td>
                                </tr>
                                <tr>
                                    <td>y</td>
                                    <td>Gyorsítási index</td>
                                    <td>100-150</td>
                                    <td>150</td>
                                </tr>
                                <tr>
                                    <td>r</td>
                                    <td>Hullámforma index</td>
                                    <td>0-100</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>Hőmérséklet kijelzés</td>
                                    <td>-20~+85°C</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Ut</td>
                                    <td>Fotocella érzékenység</td>
                                    <td>ut0/ut1</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>S_t</td>
                                    <td>C port szenzor típus</td>
                                    <td>nPn/PnP</td>
                                    <td>nPn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="doc-section">
                        <h2>Kezelési Útmutató</h2>
                        
                        <h3>Alapparaméterek állítása:</h3>
                        <ol>
                            <li><strong>⚙ gomb rövid nyomás</strong> - paraméter váltás</li>
                            <li><strong>▲ vagy ▼ gomb</strong> - érték állítása</li>
                            <li>Beállítások azonnal érvényesülnek</li>
                        </ol>

                        <h3>Haladó paraméterek elérése:</h3>
                        <ol>
                            <li><strong>⚙ + ▲ gombok egyidejű HOSSZÚ nyomása</strong></li>
                            <li><strong>⚙ gomb rövid nyomás</strong> - paraméter váltás</li>
                            <li><strong>▲ vagy ▼ gomb</strong> - érték állítása</li>
                            <li><strong>⚙ + ▲ hosszú nyomás</strong> - kilépés</li>
                        </ol>

                        <h3>Gyári beállítások visszaállítása:</h3>
                        <ol>
                            <li><strong>⚙ + ▲ hosszú nyomás</strong> → haladó paraméterek mód</li>
                            <li><strong>⚙ rövid nyomások</strong> → FULL kijelző (teljes villogás)</li>
                            <li><strong>▲ HOSSZÚ nyomás</strong> → ----- kijelző (sikeres reset)</li>
                            <li>Elengedés után → CUH → U (alapállapot)</li>
                        </ol>
                    </div>

                    <div class="doc-section">
                        <h2>Speciális Funkciók</h2>
                        
                        <h3>Gyorsítási index (y):</h3>
                        <p>A gyorsítási index határozza meg, hogy a kimeneti feszültség a bemeneti feszültség hány százalékáig emelkedhet. 150-es értéknél a kimenet 150%-ra növelhető, szinuszos jellemzők feláldozásával háromszög hullámformára váltva.</p>
                        <ul>
                            <li><strong>100:</strong> Standard szinuszos hullámforma</li>
                            <li><strong>150:</strong> Maximum teljesítmény, háromszög hullámforma</li>
                        </ul>

                        <h3>Hullámforma index (r):</h3>
                        <ul>
                            <li><strong>r=0:</strong> Legmagasabb hatékonyság, legkisebb rugófeszültség</li>
                            <li><strong>r=100:</strong> Maximum névleges teljesítmény, minimum zaj, nagyobb rugófeszültség</li>
                            <li>Értéktartomány: 0-100, folyamatosan állítható</li>
                        </ul>

                        <h3>Fotocella Funkciók:</h3>
                        <ul>
                            <li><strong>t1:</strong> BE késleltetés - Az alkatrész érzékelésekor mennyi idő után induljon a rezgés</li>
                            <li><strong>t2:</strong> KI késleltetés - Az alkatrész eltűnése után mennyi idő múlva álljon le</li>
                            <li><strong>Ut:</strong> Érzékenység - ut0 (folyamatos) vagy ut1 (egyedi impulzus)</li>
                        </ul>
                    </div>

                    <div class="warning-box">
                        <h2>Fontos Megjegyzések</h2>
                        <ul>
                            <li>A gyorsítási index (y) módosítása befolyásolja a hullámforma minőségét</li>
                            <li>A hullámforma index (r) módosítása befolyásolja a zajszintet és a rugó élettartamát</li>
                            <li>A fotocella és kapcsoló késleltetések optimalizálása csökkenti a felesleges energiafogyasztást</li>
                            <li>A haladó paraméterek módosítása előtt olvassa el a teljes dokumentációt</li>
                            <li>A gyári reset minden beállítást visszaállít az alapértékekre</li>
                        </ul>
                    </div>

                    <div class="doc-section">
                        <h2>Műszaki Adatok</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Paraméter</th>
                                    <th>SDVC31-S</th>
                                    <th>SDVC31-M</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tápfeszültség</td>
                                    <td>AC 85-265V, 50/60Hz</td>
                                    <td>AC 85-265V, 50/60Hz</td>
                                </tr>
                                <tr>
                                    <td>Kimeneti feszültség</td>
                                    <td>0-260V</td>
                                    <td>0-260V</td>
                                </tr>
                                <tr>
                                    <td>Frekvencia tartomány</td>
                                    <td>40-400 Hz</td>
                                    <td>40-400 Hz</td>
                                </tr>
                                <tr>
                                    <td>Gyorsítási index</td>
                                    <td>100-150</td>
                                    <td>100-150</td>
                                </tr>
                                <tr>
                                    <td>Üzemi hőmérséklet</td>
                                    <td>-20 ~ +85°C</td>
                                    <td>-20 ~ +85°C</td>
                                </tr>
                                <tr>
                                    <td>Védelem</td>
                                    <td>IP20</td>
                                    <td>IP20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="info-box">
                        <h2>Gyors Referencia</h2>
                        <ul>
                            <li><strong>U:</strong> Feszültség beállítása (0-260V)</li>
                            <li><strong>F:</strong> Frekvencia beállítása (40-400Hz)</li>
                            <li><strong>S:</strong> Lágyindítás (0-20 sec)</li>
                            <li><strong>y:</strong> Gyorsítási index (100-150)</li>
                            <li><strong>r:</strong> Hullámforma index (0-100)</li>
                            <li><strong>h:</strong> Max feszültség limit (0-260V)</li>
                        </ul>
                    </div>

                    <div class="danger-box">
                        <h2>Biztonsági Előírások</h2>
                        <ul>
                            <li>Csak szakképzett személyzet végezheti a telepítést</li>
                            <li>Telepítés előtt kapcsolja ki a tápfeszültséget</li>
                            <li>Ellenőrizze a helyi tápfeszültség megfelelőségét</li>
                            <li>Védőföldelés kötelező</li>
                            <li>Ne üzemeltesse a készüléket sérült burkolattal</li>
                            <li>Tartsa be a megengedett környezeti hőmérséklet határokat</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };

    // Kombináld a két objektumot
    return docs[type] || controllerDocs[type] || {
        title: 'Dokumentáció nem található',
        content: '<p>A kért dokumentáció nem található.</p>'
    };
}

// Dokumentáció letöltése
function downloadDoc(type) {
    const docFiles = {
        'bf': '01_BF_Sorozat_Taladagolok.docx',
        'hlf-m': '02_HLF-M_Sorozat_Linearis.docx',
        'klf': '03_KLF_Sorozat_Linearis.docx',
        'wfl': 'WFL_Sorozat_Hasznalati_Utasitas-1.docx',
        'rna-srcn': 'RNA_Sorozat_Hasznalati_Utasitas-1.docx',
        'rna-srhl': 'RNA_Sorozat_Hasznalati_Utasitas-1.docx',
        'irg1s': 'Rezgovezerlok_Teljes_Dokumentacio-1.docx',
        'reovib': 'Rezgovezerlok_Teljes_Dokumentacio-1.docx',
        'fs26': 'Rezgovezerlok_Teljes_Dokumentacio-1.docx',
        'sdvc31': 'Rezgovezerlok_Teljes_Dokumentacio-1.docx'
    };

    const filename = docFiles[type];
    if (filename) {
        // Létrehoz egy linket a letöltéshez
        const link = document.createElement('a');
        link.href = filename;
        link.download = filename;
        link.click();
    } else {
        alert('A dokumentáció letöltése nem érhető el.');
    }
}

// Scroll animáció megfigyelő
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Figyeljük az animálandó elemeket
    document.querySelectorAll('.category-card, .product-card').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}
