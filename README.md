# Campo minato
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

---
## Procedimento 
- In `html e css` creo il layout del bottone e del contenitore della griglia di gioco;
- Genero dinamicamente in `js` le caselle che comporanno la mia griglia 10`x`10;
- Per generarle utilizzerò un ciclo `for` che assegnera anche un numero progressivo alla casella generata.
- Al click della casella, questa si colora di azzurro e stampo un console.log che indica il numero della casella stessa.
.
- Per il bonus predispongo una select vicino al ButtonStart, così da poter indicare il livello di difficoltà di gioco nel momento in cui si genera la griglia.
