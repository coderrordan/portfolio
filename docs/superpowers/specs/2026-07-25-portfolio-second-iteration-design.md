# Portfolio, seconda iterazione

## Obiettivo

Rendere il portfolio piu immediato, leggibile e memorabile. La pagina deve far capire in pochi secondi per chi lavora Daniele, quale problema risolve e come affronta Amazon. Il testo sostiene le dimostrazioni visive senza sostituirle.

## Direzione

Il linguaggio resta quello di un manuale operativo Amazon, ma con meno densita editoriale. La nuova versione usa una rail desktop importante, una hero essenziale, animazioni in codice che mostrano costruzione e metodo, offerte confrontabili e casi leggibili a colpo d'occhio.

Il copy viene riscritto in italiano e inglese. La versione italiana segue la voice del workspace e passa attraverso una revisione Humanizer: frasi corte, parole concrete, niente corporate speak, formule artificiali o promesse non verificabili.

## Architettura

1. Hero
2. Cosa risolvo
3. Servizi
4. Metodo
5. Risultati
6. Il sistema
7. Chi sono
8. CTA finale

La sezione personale viene spostata verso la fine. Prima si dimostrano rilevanza, offerta, metodo e lavoro; poi si approfondisce la persona.

## Rail desktop

- Larghezza fluida pari al 15% della viewport, con minimo di 220 px e massimo di 280 px.
- Numero e voce stanno sulla stessa riga.
- Testo tra 16 e 18 px, senza uppercase obbligatorio.
- Stato attivo evidente attraverso colore, barra laterale e variazione di peso.
- Voci: `Cosa risolvo`, `Servizi`, `Metodo`, `Risultati`, `Il sistema`, `Chi sono`.
- CTA inferiore piu grande e leggibile.
- Sotto la soglia desktop resta il menu superiore accessibile.

## Hero

### Copy

Titolo:

> Il tuo brand su Amazon non si improvvisa.

Sottotitolo:

> Aiuto i brand europei a conquistare il loro spazio su Amazon con metodo, dati e una responsabilita unica sul canale.

CTA unica:

> Parlami del tuo brand

Il bottone secondario viene rimosso. La CTA principale misura almeno 64 px in altezza e usa testo da 17 o 18 px.

### Brand Builder

Il visual della hero e un'animazione in codice. Parte da cinque moduli separati: listing, PPC, catalogo, dati e mercati. I moduli entrano in scena, si allineano e costruiscono una struttura digitale unica. La struttura si stabilizza attorno al brand e apre connessioni verso piu mercati.

Il movimento comunica costruzione, coordinamento e crescita senza grafici o risultati inventati. Il ciclo dura circa 8-10 secondi, prevede una pausa nello stato completo e riparte senza stacchi. Con `prefers-reduced-motion` viene mostrato lo stato finale statico.

La vecchia Control Map viene rimossa per non ripetere lo stesso concetto.

## Cosa risolvo

La diagnosi passa da cinque blocchi prolissi a tre situazioni riconoscibili. Ogni situazione contiene un titolo, una frase e un effetto concreto. Il layout mostra le dipendenze tra problema ed effetto, senza un altro paragrafo introduttivo esteso.

Direzioni di contenuto:

- il canale cresce senza una direzione comune;
- advertising, contenuti e catalogo lavorano separati;
- i dati descrivono il passato ma non guidano la prossima decisione.

## Servizi

I servizi restano separati dal metodo. Il layout richiama una tabella prezzi, ma non mostra prezzi. Tre card rendono confrontabili le offerte:

1. Gestione continuativa, opzione principale.
2. Lancio o espansione, progetto con traguardo definito.
3. Intervento mirato, problema circoscritto.

Ogni card contiene soltanto:

- tipo di collaborazione;
- per chi e adatta;
- quattro responsabilita concrete al massimo;
- risultato operativo atteso;
- CTA coerente.

La prima card ha maggiore peso visivo. La consulenza operativa non rimane una quarta offerta equivalente: viene assorbita nell'intervento mirato o citata come variante, cosi la scelta resta semplice.

## Metodo

Il metodo usa una composizione verticale animata. A sinistra scorre una sequenza di cinque fasi. La fase attiva resta leggibile e le altre arretrano. A destra un campo di particelle forma un simbolo diverso per ogni fase:

1. Ricerca: lente.
2. Direzione: bussola.
3. Piano: griglia o blueprint.
4. Esecuzione: moduli che si incastrano.
5. Ottimizzazione: ciclo aperto che si ricompone.

Lo scroll controlla la transizione tra i simboli. Il canvas non contiene informazioni indispensabili: titolo e frase della fase restano nel DOM. Su mobile le fasi diventano una sequenza verticale e il simbolo compare sopra il testo. Con reduced motion i simboli cambiano senza interpolazione.

## Risultati

I casi non sono piu fascicoli pieni di testo. Ogni caso e una scena larga con:

- problema in una riga;
- visual specifico in codice;
- intervento in una riga;
- cambiamento osservato in una riga;
- indicazione chiara che brand e metriche sono riservati.

I tre visual rappresentano:

1. anatomia di una pagina prodotto prima e dopo il rifacimento;
2. sequenza coordinata di un lancio;
3. prodotto che passa da un mercato a una rete di mercati.

Non vengono aggiunte metriche finche non esistono dati verificabili.

## Il sistema

La sezione usa una griglia quasi paritaria:

- a sinistra lo screenshot di SkalebidOS occupa almeno meta della larghezza disponibile;
- a destra compaiono titolo e terminale;
- il lungo paragrafo e la lista di benefici vengono rimossi.

Il terminale racconta il valore attraverso stati operativi: contesto caricato, priorita ordinate, responsabilita assegnate, SOP collegate e revisione pronta. Il testo digitato sostituisce la spiegazione descrittiva.

## Chi sono

La sezione torna a raccontare Daniele oltre il ruolo professionale. Recupera dal vecchio sito il tono di:

> Un po' informatico. Un po' marketer.

Il testo collega in modo naturale:

- formazione informatica e studio del management;
- modo sistemico di affrontare problemi complessi;
- lavoro operativo su Amazon;
- abitudine a costruire strumenti e archivi di conoscenza;
- curiosita e identita personale, senza trasformare la sezione in una biografia completa.

La foto resta protagonista. Il copy usa due o tre paragrafi brevi e chiude con la domanda sul blocco che oggi costa piu opportunita al brand. La domanda diventa una firma del modo di lavorare, non l'apertura della biografia.

## CTA finale

La CTA chiude con un invito diretto e un solo percorso principale verso il calendario. Il testo non ripete tutta l'offerta e non promette una consulenza gratuita. La mail resta disponibile nel footer.

## Accessibilita e responsive

- Target interattivi di almeno 44 px; CTA principale da almeno 64 px.
- Animazioni decorative escluse dall'albero accessibile.
- Tutte le informazioni restano disponibili senza canvas o JavaScript animato.
- Focus visibile, menu da tastiera, Escape e focus trap restano invariati.
- Nessun overflow a 390, 768, 1440 e 1920 px.
- Le animazioni rispettano `prefers-reduced-motion`.

## Verifica

- Test strutturali per rail, ordine sezioni, CTA unica, tre servizi e assenza della Control Map.
- Test del contratto dati italiano e inglese.
- Build Vite e controllo console.
- Verifica browser alle quattro viewport previste.
- Controllo manuale delle transizioni del Brand Builder e del metodo.
- Revisione Humanizer del copy italiano prima della verifica finale.

## Fuori scope

- Prezzi pubblici.
- Metriche non verificate.
- Nuove fotografie o video.
- Pagine dedicate ai casi.
- Librerie di animazione aggiuntive.
