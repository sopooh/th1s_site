# th1s.prd — sito archivio

Sito statico. Un indice di 56 progetti video realizzati per brand di moda.
HTML, CSS e JS puri in un file per pagina. Nessun framework, nessun build step,
nessuna dipendenza npm.

## File

    index.html         pagina Work, l'indice. È il cuore del sito.
    index-dark.html    stessa pagina, palette scura. Variante in valutazione.
    THIS25-007.html    pagina progetto. Una per progetto, nominata con l'ID.
    _template.html     modello da duplicare per le nuove pagine progetto.
    video/             i loop, un file per variante.
    THIS_progetti.csv  i 56 progetti dell'indice.
    THIS_files.csv     i 73 file video, con la variante.

## Regole non negoziabili

- Niente framework. Se una modifica sembra richiedere React, Tailwind o un
  bundler, la risposta è no: si fa in CSS e JS puri.
- Niente librerie esterne oltre ai due font Google già collegati.
- Un file per pagina. CSS nel `<style>`, JS nel `<script>` in fondo.
- Le modifiche vanno fatte su entrambe le versioni, chiara e scura, salvo
  richiesta esplicita del contrario.

## Identità visiva

Archivio, non portfolio. Tipografia piccola, molta aria, nessun colore, nessuna
decorazione. Il contenuto sono i video, tutto il resto deve sparire.

Colori (variabili CSS in `:root`, unica fonte di verità):

    chiaro   --bg #FAFAF7  --ink #111110  --muted #8C8C86  --line #E2E1DB  --thumb #EFEEE9
    scuro    --bg #0B0B0A  --ink #EDEDE8  --muted #77766F  --line #242320  --thumb #1A1917

Nessun colore accento. L'unico colore in pagina è il video.

Tipografia: Archivo per il testo, JetBrains Mono per ID, codici mercato e
contatori. Pesi 400 e 500, più il 700 riservato al solo logo. Mai sotto gli 11px.

    etichette e metadati   11px, maiuscolo, letter-spacing .08em, muted
    righe indice           16px, ink
    titolo progetto        40-44px, peso 400
    logo th1s.prd          15px, peso 700, letter-spacing -.02em

Spaziature: solo 4, 8, 12, 16, 24, 48, 96.

Motion: solo dissolvenze da 200-300ms. Niente parallasse, niente easing
elaborati. Rispettare sempre `prefers-reduced-motion`.

## Dati

L'array `data` in fondo a `index.html` è la fonte di verità dell'indice.
Un elemento per progetto, dal più recente al più vecchio:

    [market, brand, titolo, id, anno, [file...], pagina]

`pagina` è il nome del file HTML del progetto, oppure stringa vuota se la pagina
non esiste ancora. Le righe con pagina diventano `<a>`, le altre restano
`<button>`: così non ci sono mai link rotti.

Gli ID sono `THIS{anno}-{progressivo}`, assegnati in ordine cronologico e mai
riusati. Le varianti di uno stesso progetto hanno il suffisso `_A`, `_B`, `_C`.
Un progetto resta una riga sola nell'indice anche quando ha più file.

## Struttura dell'indice

Nav, riga sottile, etichette di colonna, poi due colonne: a sinistra il blocco
che segue lo scorrimento, a destra la lista. Sotto, il blocco biografia, e in
fondo la riga con anno e numero di pagina.

Colonne della lista: Market, Brand, Project, Year.

Il blocco di sinistra è sticky. All'apertura mostra lo statement. Appena si
scorre mostra il progetto attivo: video verticale 9:16, ID in mono, brand
piccolo, titolo in grande. Tornando in cima riappare lo statement.

Il progetto attivo è determinato dallo scroll: la riga che attraversa la fascia
centrale del viewport diventa attiva. Implementato con IntersectionObserver e
`rootMargin: "-45% 0px -45% 0px"`, mai con un listener di scroll. Una sola riga
attiva per volta. Hover e focus da tastiera impostano la stessa riga attiva,
quindi sono una scorciatoia, non un meccanismo separato.

Quando il progetto attivo ha più di un file, sotto la miniatura compare una
riga con frecce e contatore `01 / 03`. Con un file solo non compare nulla.

## Struttura della pagina progetto

Briciola con l'ID, brand e titolo grande, video hero, striscia delle varianti,
tabellina metadati, credits per ruolo, rimando al progetto successivo.

Cliccando una variante nella striscia diventa l'hero. La corrente ha un contorno
sottile. Lo scorrimento automatico della striscia parte solo sopra le tre
varianti.

L'hero è 16:9 per i progetti orizzontali, 9:16 per i verticali: si cambia
`aspect-ratio` e `max-width` nella regola `.hero .media`.

Per creare una nuova pagina: duplicare `_template.html`, rinominarlo con l'ID
del progetto, aggiornare l'array `files`, l'ID nella briciola, il titolo, la
tabellina e il link Next. Poi aggiungere il nome del file nel campo `pagina`
della riga corrispondente in `index.html`.

## Video

Loop muti di 4 secondi, lato corto 540px, H.264, in `video/`, nominati come il
file dell'asset. Tag `<video muted loop playsinline preload="none">`.

Non parte tutto insieme: nell'indice esiste un solo elemento video, e cambia
`src` quando cambia il progetto attivo. Se il file non esiste il video non
compare e resta il riquadro col logo, senza errori visibili.

I loop si generano con `loops.sh`, che sta nella cartella dell'archivio, non qui.

## Accessibilità

Ogni riga è un `<button>` o un `<a>`, mai un `<div>`. Deve funzionare con Tab, e
il focus deve mostrare il progetto attivo esattamente come l'hover. Focus
sempre visibile.

## Mobile

Sotto gli 820px la colonna di sinistra sparisce e resta la sola lista, con
brand e titolo impilati. Il titolo grande scende a 26px. La logica di scroll
continua a marcare la riga attiva.

## Da fare

- Pagine Studio e Contact: la nav le linka ma non esistono.
- Scegliere fra chiaro e scuro ed eliminare l'altro file.
- Testi: biografia dello studio, descrizioni dei progetti.
- Favicon dal logo.
