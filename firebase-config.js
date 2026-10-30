// Configurazione di Firebase per la lista condivisa.
//
// Incolla qui sotto la configurazione del tuo progetto
// (Console Firebase → Impostazioni progetto → Le tue app → Configurazione SDK).
// Va bene incollare direttamente il blocco "const firebaseConfig = { ... };"
// che ti mostra Firebase: l'app lo riconosce da sola.
//
// Questi valori non sono segreti: a proteggere i dati sono le regole di
// sicurezza di Firestore (file firestore.rules) e il codice della lista.

window.FIREBASE_CONFIG = null;

// ⬇︎ incolla qui ⬇︎

const firebaseConfig = {
  apiKey: "AIzaSyAJiLlbCxm_-wsOndkDowXMMVLs5G_Jaes",
  authDomain: "spesa-a3032.firebaseapp.com",
  projectId: "spesa-a3032",
  storageBucket: "spesa-a3032.firebasestorage.app",
  messagingSenderId: "609221457611",
  appId: "1:609221457611:web:bc301a3b451de063680d4e"
};


// ⬆︎ incolla qui ⬆︎

if (!window.FIREBASE_CONFIG && typeof firebaseConfig !== 'undefined') window.FIREBASE_CONFIG = firebaseConfig;
