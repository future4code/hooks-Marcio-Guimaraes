import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>HomePage</h1>

      <button onClick={() => navigate("/trips/list")}>Ver Viagens</button>
      <button onClick={() => navigate("/login")}>Administração</button>
    </div>
  );
};
