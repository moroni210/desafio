import { Link } from "react-router-dom";

function CardUsuario({ usuario }) {
  return (
    <div className="card">
      <h2>{usuario.name}</h2>
      <p>{usuario.email}</p>

      <Link to={`/usuario/${usuario.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}

export default CardUsuario;