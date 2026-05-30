import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalhes() {
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }, [id]);

  if (!usuario) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div>
      <h1>{usuario.name}</h1>
      <p>Email: {usuario.email}</p>
      <p>Telefone: {usuario.phone}</p>
      <p>Site: {usuario.website}</p>
    </div>
  );
}

export default Detalhes;