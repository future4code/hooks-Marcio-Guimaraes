import { Link, useNavigate } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io";

export const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div></div>
      <Link to="/">
        <button>Home</button>
      </Link>

      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
};