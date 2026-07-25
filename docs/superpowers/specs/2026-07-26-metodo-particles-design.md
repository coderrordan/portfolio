# Metodo: particelle e ritmo narrativo

## Obiettivo

Rendere la sezione Metodo più leggibile e memorabile, dando a ogni fase lo spazio necessario per attivare una trasformazione visiva significativa. L'animazione deve sostenere il racconto senza sembrare un'icona lineare o una decorazione separata.

## Layout

- Il campo di particelle inizia dalla linea divisoria sopra `Ricerca`, non dal titolo della sezione.
- La timeline occupa la parte sinistra; il canvas occupa la destra e si estende leggermente verso il centro.
- Ogni fase ha circa il doppio dello spazio verticale attuale, così la trasformazione resta visibile durante lo scroll.
- Numero e linea verticale rimangono fermi. Quando una fase è attiva si sposta verso destra soltanto il blocco con titolo e descrizione.
- Su mobile il canvas resta dietro agli step come fondale attenuato, senza compromettere contrasto e leggibilità.

## Comportamento

- All'ingresso nella sezione tutte le particelle sono sparse.
- La prima forma compare solo quando `Ricerca` entra nella zona attiva dello scroll.
- Il passaggio tra le fasi avviene per interpolazione continua delle stesse particelle, senza reset o dissolvenze complete.
- Il canvas si ferma quando non è visibile.
- Con `prefers-reduced-motion` viene mostrata direttamente la forma della fase attiva, senza interpolazione continua.

## Particelle

- Circa 300-340 punti, in base allo spazio disponibile.
- Ogni particella è un punto arancione circolare, non una stella.
- Il punto ha un nucleo luminoso e un bagliore radiale che si attenua verso l'esterno.
- Dimensioni e opacità variano leggermente per evitare un risultato meccanico.
- Le forme usano bordi multipli, superfici e dettagli interni: non devono sembrare icone monolinea.

## Forme

1. `Ricerca`: lente completa con bordo esterno e interno, area della lente, riflesso e manico spesso.
2. `Direzione`: bussola con anello esterno, rosa interna, ago pieno e riferimenti cardinali.
3. `Piano`: mappa piegata a tre pannelli, percorso e punti di passaggio.
4. `Esecuzione`: ingranaggi collegati, per rappresentare parti diverse che lavorano insieme.
5. `Ottimizzazione`: ciclo circolare attorno a un grafico crescente, per rappresentare lettura, correzione e avanzamento.

## Copy

- `Ricerca`: Studio mercato, domanda, margini e vincoli per capire dove si trova l'opportunità reale.
- `Direzione`: Metto in ordine ciò che emerge e scelgo dove competere, con una priorità chiara per il team.
- `Piano`: Traduco la direzione in attività, responsabilità e tempi che tengono insieme tutto il lavoro.
- `Esecuzione`: Faccio avanzare catalogo, contenuti e advertising come parti coordinate dello stesso sistema.
- `Ottimizzazione`: Leggo la risposta del mercato, correggo la rotta e trasformo ogni ciclo in una base più solida.

La versione inglese mantiene struttura, lunghezza e significato equivalenti. Prima dell'inserimento definitivo, il copy viene controllato con Humanizer senza cambiarne il senso.

## Implementazione

- `Process.jsx` gestisce uno stato iniziale senza fase attiva e applica lo spostamento solo al blocco testuale.
- `MethodParticles.jsx` genera proceduralmente punti di bordo, riempimento e dettaglio per ogni forma.
- Il canvas conserva le posizioni correnti tra un simbolo e il successivo.
- Il disegno usa cerchi e bagliori, evitando `fillRect` e asset SVG esterni.
- Le modifiche responsive restano in `src/index.css` e non alterano le altre sezioni.

## Verifica

- Stato sparso visibile prima dell'attivazione di `Ricerca`.
- Tutte e cinque le forme riconoscibili a desktop.
- Nessun movimento orizzontale del numero attivo.
- Descrizioni leggibili e senza sovrapposizioni a 390, 768, 1024, 1510 e 1920 px.
- Nessun overflow orizzontale.
- Contrasto sufficiente con canvas attenuato su mobile.
- Animazione sospesa fuori viewport e comportamento reduced-motion verificato.
- Test, build, controllo console e revisione visiva completati prima della chiusura.
