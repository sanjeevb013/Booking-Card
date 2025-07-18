import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';

import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
        <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}
    />
  </StrictMode>,
)
