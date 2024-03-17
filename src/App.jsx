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
  return (
    <Container>
      <Row>
        <Col>
          <Buscador buscador={buscador} setBuscador={setBuscador} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Listado colaboradores={colaboradores} />
        </Col>

        <Col>
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
