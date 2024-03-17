const Buscador = ({ buscador, setBuscador }) => {
  const buscar = (e) => {
    let value = e.target.value;
    setBuscador(value);
  };
  return (
    <div className=" d-flex m-2" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Busca un colaborador"
        aria-label="Search"
        value={buscador}
        onChange={buscar}
      />
    </div>
  );
};

export default Buscador;
