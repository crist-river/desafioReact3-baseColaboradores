
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alert from './components/Alert'


const App = () => {


  return (
    <>
      <Buscador />
      <Listado />
      <Formulario />
      <Alert/>
    </>
  );
};

export default App;
