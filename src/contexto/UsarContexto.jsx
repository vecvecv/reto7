import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function UsarContexto(props) {
    const {children} = props;
    const estadoInicial = {
        email:[""],
        pass:[""],
        uid:[""],
        libro:[false]
    }

const[state, dispatch] = useReducer(Reducer, estadoInicial)
//dipatch hace q la info este ondemand. lo pedis lo teness. hay q escribirlo asi si o si para qfuncione el reducerrr

const saludar = (nombre)=>{
    alert("hola"+nombre)
}


//deslogueado.jsx:

const [crear, setCrear] = useState(false)
const [usuario, setUsuario] = useState ("")
const [pass, setPass] = useState ("")
const {policia, guardarUsuario} = props

    const handleLogin =()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usuario, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            policia(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

    }
 



    return ( <>
       <Contexto.Provider value={{saludar, estadoInicial, handleLogin, crear, setCrear, usuario, setUsuario, pass, setPass, policia}}>
        {children}
       </Contexto.Provider>
    </> );
}

export default UsarContexto;