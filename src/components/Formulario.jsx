import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Control type="text" placeholder="Nombre colaborador" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email colaborador" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEdad">
        <Form.Control type="text" placeholder="Edad colaborador" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCargo">
        <Form.Control type="text" placeholder="Cargo colaborador" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Control type="text" placeholder="Telefono colaborador" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar colaborador
      </Button>
    </Form>
  );
}

export default Formulario;