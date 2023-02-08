import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navegacion from "./componentes/Navegacion.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./vistas/Home.jsx";
import Contacto from "./vistas/Contacto.jsx";
import Notfound from "./vistas/Notfound.jsx";
import './Style/Style.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navegacion></Navegacion>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<Notfound />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
