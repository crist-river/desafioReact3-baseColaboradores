import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alerta from "./components/Alerta";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ msg: "", color: "" });
  const [buscador, setBuscador] = useState("");

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(buscador.toLowerCase()) ||
      colaborador.email.toLowerCase().includes(buscador.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(buscador.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(buscador.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(buscador.toLowerCase())
    ) {
      return colaborador;
    }
  });

  return (
    <Container>
      <h1> Desafio lista de colaboradores </h1>
      <Row>
        <Col xs={6}>
          <Buscador buscador={buscador} setBuscador={setBuscador} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={9}>
          <Listado colaboradores={filteredColaboradores} />
        </Col>

        <Col xs={12} lg={3}>
          <Formulario
            setAlert={setAlert}
            setColaboradores={setColaboradores}
            colaboradores={colaboradores}
          />
          {alert.msg !== "" && <Alerta alert={alert} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
