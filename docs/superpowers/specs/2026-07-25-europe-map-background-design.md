# Mappa europea come sfondo della hero

## Obiettivo

Trasformare la mappa europea da pannello separato a elemento ambientale della hero. La mappa deve raccontare la crescita del brand attraverso ordini che partono da Torino e attivano progressivamente nuovi Paesi.

## Composizione

- Nessuna cornice, barra, legenda o micro-label attorno alla mappa.
- La mappa occupa circa il 70% della hero e resta prevalentemente sul lato destro.
- La grafica parte dal bordo superiore della sezione; la parte nord della mappa viene tagliata intenzionalmente dal viewport.
- La mappa si estende dietro al copy, ma un gradiente scuro da sinistra verso destra protegge titolo, testo e CTA.
- Il copy resta sopra la grafica e mantiene il contrasto attuale.
- Sul desktop ampio la mappa puo uscire leggermente dal bordo destro e inferiore.

## Aspetto iniziale

La geografia europea usa punti piccoli color avorio. I contorni restano appena percepibili, con opacita massima del 6%. All'apertura della pagina, la mappa compare con un fade-in morbido di circa 700 ms.

Non compaiono aree arancioni generiche. Solo i Paesi effettivamente raggiunti dagli ordini cambiano colore.

## Sequenza animata

1. La mappa europea appare in avorio.
2. Torino si accende come origine.
3. L'Italia passa subito all'arancione.
4. Parte un gruppo di circa dieci pacchi verso diverse destinazioni francesi.
5. I pacchi sono distanziati tra 150 e 250 ms.
6. Ogni arrivo aumenta la porzione arancione della Francia.
7. Dopo l'ultimo arrivo, la Francia e completamente attiva.
8. Il processo riparte verso la Germania.
9. Seguono Spagna, Regno Unito e Polonia.
10. La rete completa resta visibile per alcuni secondi, poi dissolve e ricomincia.

I Paesi vengono gestiti in sequenza, senza sovrapporre due gruppi principali. Il ciclo completo dura circa 18-22 secondi.

## Pacchi e rotte

- Ogni pacco e un punto arancione piccolo ma piu luminoso dei punti geografici.
- I pacchi dello stesso gruppo seguono leggere variazioni della rotta principale, cosi non sembrano un unico punto ripetuto.
- Le rotte sono sottili e poco contrastate. Compaiono solo mentre il gruppo e in transito.
- Torino pulsa brevemente alla partenza di ogni gruppo.
- Gli ordini non mostrano numeri, metriche o etichette logistiche.

## Attivazione dei Paesi

Ogni Paese target usa una maschera SVG dedicata. La sua versione arancione viene rivelata in piu fasce o gruppi di punti sincronizzati con gli arrivi. L'ultimo pacco completa il riempimento.

L'Italia parte gia attiva. Gli altri Paesi restano avorio finche non vengono raggiunti.

## Mobile

- Copy e CTA restano nella parte alta.
- La mappa compare sotto e dietro al fondo della hero, senza diventare un pannello separato.
- La visualizzazione viene tagliata sui lati e mostra soprattutto Europa occidentale e centrale.
- Ogni Paese riceve 4-5 pacchi invece di dieci.
- La sequenza mobile si limita a Francia, Germania e Spagna per contenere durata e costo di rendering.
- Le rotte restano leggibili su 390 px e non creano overflow.

## Implementazione

- `EuropeNetwork.jsx` resta il componente responsabile della grafica.
- L'SVG europeo locale fornisce la geometria.
- Le maschere dei Paesi target vengono estratte dai path identificati da codice ISO.
- React genera gruppi di pacchi e timing da configurazioni statiche.
- SVG `animateMotion` muove i pacchi lungo le rotte.
- CSS gestisce fade-in, pulsi, opacita e rivelazione progressiva dei Paesi.
- Non vengono aggiunte librerie o richieste esterne a runtime.

## Accessibilita e prestazioni

- La grafica resta `aria-hidden="true"`.
- Con `prefers-reduced-motion`, la mappa appare statica con Italia e mercati principali gia attivi.
- Il significato commerciale resta nel copy della hero.
- Le animazioni usano opacity e transform; non modificano il layout.
- Su mobile vengono renderizzati meno pacchi.

## Verifica

- Assenza di cornice, label e legenda nel componente.
- Mappa posizionata come layer assoluto della hero.
- Test strutturali su origine Torino, gruppi di pacchi e reduced motion.
- Verifica a 390, 768, 1024, 1180, 1440 e 1920 px.
- Controllo del momento iniziale, di un gruppo in viaggio e dello stato finale.
- Nessun overflow o errore console.
- Test Node, build Vite, Impeccable e audit runtime.
