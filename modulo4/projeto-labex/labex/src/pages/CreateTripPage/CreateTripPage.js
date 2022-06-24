import { Header } from "../../Header";


export const CreateTripPage = () => {
  return (
    <div>
      <Header />
      <h1>CreateTripPage</h1>

      <input placeholder="Planeta" />
      <input placeholder="Descrição" />
      <input placeholder="Data" type="date"/>
      <input placeholder="Duração em dias" type="number"/>
      <button>Cadastrar</button>
    </div>
  );
};