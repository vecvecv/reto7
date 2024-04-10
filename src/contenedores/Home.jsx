import { useState, useEffect } from 'react'
import '../App.css'
import { getDatabase, ref, onValue, onChildAdded, set, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import Logueado from '../componentes/Logueado';
import Deslogueado from '../componentes/Deslogueado';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import cdcompleto from '../assets/cdcompleto.png'
import '../assets/style/Home.css'



const firebaseConfig = {
  apiKey: "AIzaSyA44sVY25GbayeQpwSEIBoCbty8ytOW0eA",
  authDomain: "reto7vec.firebaseapp.com",
  projectId: "reto7vec",
  storageBucket: "reto7vec.appspot.com",
  messagingSenderId: "394824562894",
  appId: "1:394824562894:web:f14ba72d687d479b6d389f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Home() {
  const [usuariosPrueba, setUsuariosPrueba] = useState([])
  const [log, setLog] = useState(false)
  const [cliente, setCliente] = useState({}); 

  const db = getDatabase();
  const usuarios = ref(db, 'Usuarios/');
  

  useEffect(()=>{

    const auth = getAuth();
    const usuario = auth.currentUser;
    if (usuario) {
        const db = getDatabase();
        const referencia = ref(db, 'Usuarios/' + usuario.uid);
        onValue(referencia, (snapshot) => {
            const data = snapshot.val();
            setCliente(data);
            console.log("setclientesnuevo ->", data);
        });
    }
    
    //aca arriba la referencia llama al nodo que nos interese
    onValue(usuarios, (snapshot) => {
      const data = snapshot.val();
    //esta funcion saca una snapshot de la base digamos
      setUsuariosPrueba(data);
      //console.log("set cliente desde on value ", cliente)
      });

    //alternativa a on value, que muestra solo el dato q se modifica en consola, en vez de imprimir todo de nuevo
    onChildAdded(usuarios, (snapshot) => {
      const data = snapshot.val();
      // setCliente(data)
     setUsuariosPrueba(data)
     //console.log("usuarios desde onChildAdded ", cliente)

    //estos onChild son listeners que estan "escuchando" al servidor
    //tmb existe onChildRemoved que lee cuando se borra algo de la base  
    //onchildMoved y onChildChanged que avisa cuando un dato cambia.

   });

  },[])

  //const agregar = (user)=>{
    //set(referencia, {
    //  usuario: "vecvecdesdeboton",
    //  pass: "123456",
    //  profile_picture : imageUrl
    //});
// en este caso el SET borra toda la base y lo reemplaza con el array que le damos. Para que se sume a la base hay que usar PUSH.
//PARA UMODIFICAR UN DATO HAY QUE IMPORTAR UPDATE (ejemplo, agregarle a name y pass un fotoperfil:picture.jpg )


  const agregar = (user)=>{
      //set(referencia, {
      //  usuario: "vecvecdesdeboton",
      //  pass: "123456",
      //  profile_picture : imageUrl
      //});
// en este caso el SET borra toda la base y lo reemplaza con el array que le damos. Para que se sume a la base hay que usar PUSH.
//PARA UMODIFICAR UN DATO HAY QUE IMPORTAR UPDATE (ejemplo, agregarle a name y pass un fotoperfil:picture.jpg )
      update(usuarios, {
        usuario: "vecvecdesdeboton",
        pass: "123456",
      });
  }

  const guardarUsuario = (usuario)=> {
    
    const usuarios = ref(db, 'Usuarios/'+usuario.uid);
    set(usuarios, usuario);
    console.log("guardo el usuario", usuario);
    //setCliente(usuario);
    //console.log("guardo el setCliente", setCliente);
  }

 // useEffect((usuario)=>{
 //   const db = getDatabase();
 //   const referencia = ref(db, 'Usuarios/'+usuario.uid);
 ///   onValue(referencia, (snapshot)=>{
 //       const data = snapshot.val();
 //       setCliente(data)
 //       console.log("setclientesnuevo ->", cliente)
 //   });
 //  },[])

  

  //getauth esta escuchando si hay alguien logueado o no 
  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setLog(user)
        //si hay alguien logueado setlog avisa si no es false
      } else {
        // User is signed out
        setLog(false)
        // ...
      }
    });


    return ( 
        <>
        <div className="banner">
          <div className="imgbanner">
        <img src={cdcompleto} className='imgcdcomp' />
        </div>
        <div className="textosbanner">
        <h1 className='titulo'>¡Celebra 40 años <br></br>de Metal Salvaje con <br></br> <span className='pepelocotxt'>Pepe Loco!</span></h1>
        <h3 className='subtitulo'>{usuariosPrueba?.titulo}</h3>
        </div>
        </div>
        {!log ? <Deslogueado policia={setLog} guardarUsuario={guardarUsuario} setCliente={setCliente} cliente={cliente} ></Deslogueado>:
         <Logueado policia={setLog} usuario={log} cliente={cliente} setCliente={setCliente} ></Logueado>}
        </>
        );
}

export default Home;