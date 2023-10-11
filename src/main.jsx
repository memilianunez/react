import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVn1Cx1nQkr3ngKlQeOkf9xTSjF89Lkuo",
  authDomain: "proyecto-final-coder-rea-3fcaf.firebaseapp.com",
  projectId: "proyecto-final-coder-rea-3fcaf",
  storageBucket: "proyecto-final-coder-rea-3fcaf.appspot.com",
  messagingSenderId: "288594795764",
  appId: "1:288594795764:web:2268e84f1c7a54d2a692a1"
};

const app = initializeApp(firebaseConfig);