import '../assets/style/Producto.css'
import pdf from '../assets/producto.pdf'


function Producto() {
    return (
      <>
    <div className="descarga">
    <h1 className="titulo2">GRACIAS POR TU COMPRA</h1>
    <p className="parrafo">Descargá ahora tu ejemplar digital, la copia física la estarás recibiendo en 30 días hábiles.<br></br>
    Recibirás las instrucciones en tu casilla de Mail.</p>
   
      <button className='descargarbtn'>
      <a href={pdf} target="_blank" rel="noopener noreferrer" download="producto.pdf"> 
      DESCARGAR
      </a>
      </button>
    </div>
    </>
      );
}

export default Producto;