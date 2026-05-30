import CardUsuario from "../components/CardUsuario";

function Home() {
  const usuarios = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@gmail.com",
    },
    {
      id: 2,
      name: "Maria Souza",
      email: "maria.souza@gmail.com",
    },
    {
      id: 3,
      name: "Pedro Santos",
      email: "pedro.santos@gmail.com",
    },
    {
      id: 4,
      name: "Ana Oliveira",
      email: "ana.oliveira@gmail.com",
    },
    {
      id: 5,
      name: "Lucas Ferreira",
      email: "lucas.ferreira@gmail.com",
    },
    {
      id: 6,
      name: "Juliana Costa",
      email: "juliana.costa@gmail.com",
    },
    {
      id: 7,
      name: "Gabriel Almeida",
      email: "gabriel.almeida@gmail.com",
    },
    {
      id: 8,
      name: "Beatriz Lima",
      email: "beatriz.lima@gmail.com",
    },
    {
      id: 9,
      name: "Rafael Rocha",
      email: "rafael.rocha@gmail.com",
    },
    {
      id: 10,
      name: "Camila Martins",
      email: "camila.martins@gmail.com",
    },
  ];

  return (
    <div className="container">
      {usuarios.map((usuario) => (
        <CardUsuario
          key={usuario.id}
          usuario={usuario}
        />
      ))}
    </div>
  );
}

export default Home;