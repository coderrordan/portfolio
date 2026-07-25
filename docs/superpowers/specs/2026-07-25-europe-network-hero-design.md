# Hero con rete europea

## Obiettivo

Sostituire il Brand Builder con una visualizzazione europea che mostra due concetti in sequenza: il brand attiva nuovi mercati e, una volta costruita la presenza, gli ordini iniziano a muoversi tra hub logistici e destinazioni.

La stessa iterazione corregge il passaggio prematuro alla navigazione mobile sui portatili compatti.

## Problema responsive

La rail desktop compare soltanto da `77.5rem`, cioe 1240 px. A 1180 e 1239 px la pagina mantiene gia la hero a due colonne ma mostra ancora header e menu mobile. Il risultato sembra una versione mobile allargata.

La correzione usa quattro stati, guidati dallo spazio disponibile:

1. Sotto 768 px: mobile, header superiore e hero a colonna singola.
2. Da 768 a 1023 px: tablet, header superiore e composizioni adattate.
3. Da 1024 px: desktop compatto, rail visibile e contenuto affiancato.
4. Da 1280 px: desktop ampio, rail e spaziature raggiungono le dimensioni complete.

Nel desktop compatto la rail usa una larghezza fluida inferiore rispetto alla versione ampia. Tipografia, padding e gap della hero si riducono senza cambiare gerarchia.

## Visual della hero

### Base geografica

La visualizzazione usa una mappa SVG europea locale. La geometria deriva dalla mappa Robinson di SimpleMaps, concessa per uso commerciale e personale. L'asset viene ottimizzato e mantenuto nel repository; il sito non effettua richieste esterne a runtime.

I confini non sono il visual principale. Ogni Stato viene reso come una costellazione di punti piccoli. I contorni restano appena visibili e servono solo a dare leggibilita geografica.

### Sequenza

Il ciclo dura circa 9 secondi:

1. La mappa compare come campo di punti spenti.
2. L'Italia si attiva in arancione.
3. Francia, Germania, Spagna, Regno Unito e altri mercati si accendono in gruppi successivi.
4. Compaiono alcuni hub logistici senza nomi commerciali o dati inventati.
5. Piccoli ordini percorrono archi dagli hub verso diverse destinazioni.
6. La rete resta completa per una breve pausa, poi il ciclo riparte con una dissolvenza morbida.

Gli hub sono elementi concettuali e non dichiarano infrastrutture possedute o risultati specifici. Le etichette restano generiche.

### Linguaggio visivo

- Punti avorio per la geografia inattiva.
- Punti arancioni per mercati attivi, hub e ordini.
- Confini sottili e poco contrastati.
- Archi di spedizione lineari, senza glow neon.
- Fondo scuro coerente con la hero.
- Nessuna card interna, metrica o dashboard simulata.

La mappa non ripete il claim con testo aggiuntivo. Una sola micro-label indica la progressione: `Mercati attivi / Rete europea`.

## Implementazione

Il nuovo componente `EuropeNetwork.jsx` sostituisce `BrandBuilder.jsx`.

Il componente contiene:

- SVG geografico locale;
- pattern di punti applicato ai path dei Paesi;
- classi per mercati attivi e inattivi;
- coordinate degli hub e delle destinazioni;
- archi SVG con animazione `stroke-dashoffset`;
- ordini rappresentati da piccoli punti con `animateMotion` lungo path dedicati.

Non vengono aggiunte librerie. React renderizza la struttura, CSS gestisce il ciclo e le varianti responsive.

## Mobile e tablet

### Mobile sotto 768 px

- Copy e CTA vengono prima.
- La mappa compare sotto in un pannello panoramico.
- La composizione mostra Europa centrale e occidentale con un ritaglio controllato.
- Restano due hub e un numero ridotto di rotte.
- La densita dei punti diminuisce per evitare rumore visivo e costo di rendering.
- La hero non deve superare inutilmente circa 1100 px sui telefoni da 390 px.

### Tablet da 768 a 1023 px

- Header superiore invariato.
- Hero a due colonne quando lo spazio lo consente.
- Mappa completa, con rotte ridotte rispetto al desktop.

### Desktop da 1024 px

- Rail persistente.
- Copy a sinistra e mappa a destra.
- Rail compatta tra 1024 e 1279 px.
- Rail completa da 1280 px.

## Accessibilita e prestazioni

- La mappa e decorativa e usa `aria-hidden="true"`.
- Il claim e il sottotitolo contengono tutto il significato necessario.
- `prefers-reduced-motion` mostra la rete completa senza movimento.
- Le animazioni usano soprattutto opacity, transform e stroke dash.
- L'SVG viene ottimizzato prima di entrare nel bundle.
- Nessuna animazione blocca interazioni o scroll.

## Verifica

- Test strutturale: `EuropeNetwork` presente e `BrandBuilder` assente.
- Test CSS: rail visibile da 1024 px e dimensione completa da 1280 px.
- Browser: 390x844, 768x1024, 1024x768, 1180x820, 1440x1000 e 1920x1080.
- Controllo overflow, console, menu mobile, rail e reduced motion.
- Build Vite, test Node, Impeccable e audit runtime.

## Fuori scope

- Dati reali sugli ordini.
- Geolocalizzazione o mappe interattive.
- Tooltip sui Paesi.
- Servizi cartografici esterni.
- Modifiche al copy della hero gia approvato.
