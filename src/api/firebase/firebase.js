
// Importa el cliente de Supabase
import { createClient } from '@supabase/supabase-js';

// Configuración con variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Inicializa el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth, DB y Storage se usan desde el mismo cliente
export const auth = supabase.auth;
export const db = supabase;       // para consultas a tablas
export const storage = supabase.storage;









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app)

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);

// // Initialize Cloud Storage and get a reference to the service
// export const storage = getStorage(app);
