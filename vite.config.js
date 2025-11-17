import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { VitePWA } from 'vite-plugin-pwa';

// Cargar las variables de entorno desde .env
dotenv.config();

// Obtener las variables de entorno y asignarlas
const env = {
  REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'DvPsico',
        short_name: 'DvPsico',
        description: 'DvPsico',
        theme_color: '#020617', // Color slate-950 en hexadecimal
        background_color: '#020617', // Color purple en hexadecimal
        start_url: '.', // La URL de inicio, puede ser relativa
        display: 'standalone', // Define la visualización como una app sin la interfaz del navegador
        icons: [
          {
            src: '/favicon.png', // Usa tu favicon como ícono
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon.png', // El mismo favicon para el ícono grande
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      }
    })
  ],
  define: {
    'process.env': JSON.stringify(env),
  },
});