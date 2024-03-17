import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({colaboradores, setColaboradores}) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const envioFormulario = (e) => {
      e.preventDefault() 

      const colaborador_id={... nuevoColaborador, id: Date.now()}
      setColaboradores([...colaboradores, colaborador_id])
  }

  const cambioNuevoColaborador = (e) => {
    setNuevoColaborador({... nuevoColaborador, [e.target.name]:e.target.value})
  };

  return (
    <Form onSubmit={envioFormulario}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Nombre colaborador"
          value={nuevoColaborador.nombre}
          onChange={cambioNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          name="email"
          placeholder="Email colaborador"
          value={nuevoColaborador.email}
          onChange={cambioNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEdad">
        <Form.Control
          type="text"
          name="edad"
          placeholder="Edad colaborador"
          value={nuevoColaborador.edad}
          onChange={cambioNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
        <Form.Control
          type="text"
          name="cargo"
          placeholder="Cargo colaborador"
          value={nuevoColaborador.cargo}
          onChange={cambioNuevoColaborador}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Control
          type="text"
          name="telefono"
          placeholder="Telefono colaborado"
          value={nuevoColaborador.telefono}
          onChange={cambioNuevoColaborador}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );
};

export default Formulario;
