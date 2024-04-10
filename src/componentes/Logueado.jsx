import { getAuth, signOut } from "firebase/auth";
import Producto from "../contenedores/Producto";
import { useState, useEffect} from "react";
import '../assets/style/Logueado.css'
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from "react-router-dom";


function Logueado(props) {
    
    const {policia, usuario} = props
    //console.log("cliente libro es", cliente);
    //console.log("soy el usuario logueado -> ", usuario)
    const [clientelogueado, setClientelogueado] = useState({}); 
    //console.log("clientelogueado-> ", clientelogueado)
    
    useEffect(() => {
            if (usuario) {
                const db = getDatabase();
                const referencia = ref(db, `Usuarios/${usuario.uid}`);
                onValue(referencia, (snapshot) => {
                    const data = snapshot.val();
                    setClientelogueado(data);
                    //console.log("clientelogueado-> ", clientelogueado)
                });
            }
        }, [usuario]);
        
    const desloguear = (props)=>{
          
        const auth = getAuth();
        signOut(auth).then(() => {
            policia(false)
        }).catch((error) => {
            // An error happened.
        });
    }
    return ( 
    <>
    <div className="login">
    <p className="holamail">Holi {usuario.email}</p>
    <button onClick={desloguear} className="desloguear">Desloguear</button>
    </div>
    <div className="chamuyo">
        <p className="pchamuyo">¡Prepárate para sumergirte en cuatro décadas de pura energía metálica con el legendario Pepe Loco! <br></br>
            Desde sus humildes comienzos hasta conquistar escenarios globales, esta icónica banda ha forjado un legado imborrable en la historia del metal. <br></br>
            Ahora, en este disco de grandes éxitos, revive los momentos más intensos, los himnos inolvidables y los riffs que hicieron temblar al mundo. 
            <br></br>Incluye <strong>PONETE A ESTUDIAR</strong> y <strong>QUE BELLO REACT, PERO QUE DOLOR (Ballad Version).</strong>
            <br></br>Es hora de elevar el volumen y rendir homenaje a una trayectoria imparable.</p>
    </div>
    <div className="compraya">  
        {clientelogueado && clientelogueado.libro === true ? <Producto /> : 
        <> 
        <p className="parrafo">No te pierdas esta oportunidad única <br></br>Recibí la Versión Digital AHORA MISMO.</p>
        <Link to={"https://mpago.la/2izqP5k"} target="_blank">
        <button className="botoncomprar">COMPRAR AHORA</button> 
        </Link>
        </>}
    </div> 
   
    </>
    );
}

export default Logueado;