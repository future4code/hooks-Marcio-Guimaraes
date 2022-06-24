import { Link } from "react-router-dom";
import { Header } from "../../Header";
import Labex from "../../img/labex.png";
import styled from "styled-components";

const ContainerAdm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 10px;
    width: 18rem;
    text-align: center;
    border-radius: 10px;
  }

  p {
    position: relative;

    bottom: 50px;
    font-size: 18px;
    margin-top: -5px;
    display: flex;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AdminHomePage = () => {
  return (
    <div>
      <Header />
      <h1>AdminHomePage</h1>

      <ContainerAdm>
        <Link to="/admin/trips/create" style={{ textDecoration: "none" }}>
          <img src={Labex} alt="" />
          <p>Crie as melhores viagens aqui</p>
        </Link>

        <Link to="/admin/trips/:id" style={{ textDecoration: "none" }}>
          <img src={Labex} alt="" />
          <p>Detalhes das melhores Viagens</p>
        </Link>
      </ContainerAdm>
    </div>
  );
};
