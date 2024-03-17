import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Alerta from "./components/Alerta";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  return (
    <Container>
      <Row>
        <Col md={9}>
          <Buscador />
        </Col>
        <Col>
          <Listado colaboradores={colaboradores} />
        </Col>
        <Col>
          <Formulario
            setColaboradores={setColaboradores}
            colaboradores={colaboradores}
          />
        </Col>

        <Alerta />
      </Row>
    </Container>
  );
};

export default App;
