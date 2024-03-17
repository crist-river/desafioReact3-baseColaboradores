
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from './components/Alert'
import {baseColaboradores } from "./BaseColaboradores";
import { useState } from "react";


const App = () => {

  const [colaboradores, setColaboradores] = useState(baseColaboradores)
  return (
    <>
      <Buscador />
      <Listado colaboradores = {colaboradores} />
      <Formulario setColaboradores={setColaboradores}/>
      <Alert/>
    </>
  );
};

export default App;
