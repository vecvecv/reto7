import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "../contenedores/Home";
import Layout from "../componentes/Layout";
import UsarContexto from "../contexto/UsarContexto";

function App() {
    return ( 
        <BrowserRouter> 
            <UsarContexto>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Layout> 
            </UsarContexto>                           
        </BrowserRouter>

     );
}

export default App; 