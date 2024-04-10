import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; 
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import { useEffect } from "react";
import { getDatabase, ref, onValue, onChildAdded, set, push } from "firebase/database";
import '../assets/style/Deslogueado.css'

function Deslogueado(props) {
    const {handleLogin, crear, setCrear, usuario, setUsuario, pass, setPass} =useContext(Contexto)
    const {policia, guardarUsuario, cliente, setCliente} = props
    
    const handleCrear =()=>{
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, usuario, pass)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setCliente({ email: user.email, uid: user.uid, libro: false });
                guardarUsuario({email:user.email, uid:user.uid, libro: false});
                
                //console.log("Cliente después de crear usuario:", cliente);
                //console.log("guardarUsuario me da:", guardarUsuario);
                policia(user)
                

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
     }


    
     const handleNoTengo = ()=>{
        setCrear(!crear)
    }
    
    const handleTexto = (e)=>{
        if (e.target.name == "usuario"){
                setUsuario(e.target.value)
        }else{
                setPass(e.target.value)
        }
    }
   
  
   
   
    return ( 
        <>
        <div className="chamuyo">
        <p className="pchamuyo">¡Prepárate para sumergirte en cuatro décadas de pura energía metálica con el legendario Pepe Loco! <br></br>
            Desde sus humildes comienzos hasta conquistar escenarios globales, esta icónica banda ha forjado un legado imborrable en la historia del metal. <br></br>
            Ahora, en este disco de grandes éxitos, revive los momentos más intensos, los himnos inolvidables y los riffs que hicieron temblar al mundo. 
            <br></br>Incluye <strong>PONETE A ESTUDIAR</strong> y <strong>QUE BELLO REACT, PERO QUE DOLOR (Ballad Version).</strong>
            <br></br>Es hora de elevar el volumen y rendir homenaje a una trayectoria imparable.</p>
        </div>
        <div className="deslogueado">
            <h3 className="ingresatxt">Ingresá con tu Usuario y Contraseña <br></br>para seguir con tu compra</h3>
            <input type="text" name="usuario" onChange={handleTexto} placeholder="email" className="inputs"/>
            <input type="password" name="password" onChange={handleTexto} placeholder="password" className="inputs"/>

            {!crear ?(<> <button onClick={handleLogin} className="boton">Login</button> <p onClick={handleNoTengo} className="notengo">No tengo Cuenta</p></>):
            <> 
            <div className="contenedorCrear">
            <p className="ingresatxt">Ingresá el mail con el que te quieras registrar y elegí tu contraseña</p>
            
            <button onClick={handleCrear} className="boton">Crear Cuenta</button>
            </div>
            </> }
            
        </div>

        
        
        </>
     );
}

export default Deslogueado;