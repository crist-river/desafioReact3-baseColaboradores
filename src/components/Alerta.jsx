import Alert from "react-bootstrap/Alert";

const Alerta = ({ alert }) => {
  return <Alert variant={alert.color}>{alert.msg}</Alert>;
};

export default Alerta;
