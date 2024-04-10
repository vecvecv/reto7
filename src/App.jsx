import { useState, useEffect } from 'react'
import './App.css'
import { getDatabase, ref, onValue, onChildAdded, set, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import Logueado from './componentes/Logueado';
import Deslogueado from './componentes/Deslogueado';
import { getAuth, onAuthStateChanged } from "firebase/auth";






function App() {



    return (
      <>
 <p>lala</p>
      </>
    )
}

export default App
