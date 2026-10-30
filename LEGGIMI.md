# Lista della spesa: configurazione

## 1. Pubblica l'app su GitHub Pages
1. Crea un repository pubblico (es. `spesa`) e carica nella radice tutti i file di questa cartella.
2. Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save.
3. Dopo un paio di minuti l'app è su `https://TUONOME.github.io/spesa/`.

## 2. Crea il progetto Firebase (serve una volta sola)
1. Vai su https://console.firebase.google.com → **Crea un progetto** (es. "spesa"). Google Analytics non serve.
2. **Authentication** → Inizia → *Metodo di accesso* → **Anonimo** → Attiva → Salva.
3. Sempre in Authentication → *Impostazioni* → **Domini autorizzati** → aggiungi `TUONOME.github.io`.
4. **Firestore Database** → Crea database → posizione in Europa (es. `europe-west8`, Milano) → modalità **produzione**.
5. Nella scheda **Regole** di Firestore sostituisci tutto con il contenuto del file `firestore.rules` → **Pubblica**.
6. ⚙️ **Impostazioni progetto** → *Le tue app* → icona Web `</>` → dai un nome → **Registra app**.
   Copia **solo** il blocco `const firebaseConfig = { ... };` (non le righe `import`).

## 3. Collega l'app a Firebase
1. Su GitHub apri `firebase-config.js` → matita ✏️ → incolla il blocco tra le righe "incolla qui" → *Commit changes*.
2. Riapri l'app sul telefono (con la rete).

## 4. Condividi la lista
1. Sul primo telefono tocca **Solo qui** (in alto a destra) → **Crea una lista condivisa** → **Condividi il codice**.
2. Sul secondo telefono installa l'app, tocca **Solo qui**, inserisci il codice → **Unisciti**.

Da quel momento lista, corsie e storico sono gli stessi su entrambi i telefoni.
Funziona anche senza rete: le modifiche vengono inviate appena torna il collegamento.

### Note
- Il piano gratuito di Firebase (Spark) è più che sufficiente per due persone.
- Il codice della lista è la chiave d'accesso: condividilo solo con chi deve usare la lista.
- Su iPhone apri sempre l'app dall'icona nella schermata Home (non da Safari).
