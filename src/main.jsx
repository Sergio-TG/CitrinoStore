import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initializeApp } from "firebase/app";

{/* Conecto la base de datos Firebase a mi proyecto */ }
const firebaseConfig = {
  apiKey: "AIzaSyAn3FTPwhPPB6c9nSkVKPwcalXoEa_Boag",
  authDomain: "citrinostore-7cbca.firebaseapp.com",
  projectId: "citrinostore-7cbca",
  storageBucket: "citrinostore-7cbca.appspot.com",
  messagingSenderId: "818345931336",
  appId: "1:818345931336:web:11a122c6b78ab1e676de7d"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
