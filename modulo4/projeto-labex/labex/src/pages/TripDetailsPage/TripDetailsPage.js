import React, { useState, useEffect } from "react";
import { Header } from "../../Header";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";
import useProtectedPage from "../../hooks/UseProtectedPage";

const ContainerDetailCard = styled.div`
  display: flex;
  width: 300px;
  border: 1px solid #ddd;
  margin: 10px;
  justify-content: center;
  flex-direction: column;

  p {
    display: flex;
    margin: 0 2px 5px 10px;
  }

  div {
    display: flex;
    width: 100vw;
  }

  span {
    margin-left: 100px;
  }
`;

export const TripDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  const [tripDetail, setTripDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcio-guimaraes/trip/${params.id}`,
        {
          headers: {
            auth: window.localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        console.log(res);
        setTripDetail(res.data.trip);
      })
      .catch((err) => {
        console.log("Viagem não encontrada");
      });
  }, []);
  return (
    <div>
      <Header />
      <h1>TripDetailsPage</h1>
      {loading ? (
        <BeatLoader color={"#9013FE"} loading={loading} size={30} />
      ) : (
        <div>
          <ContainerDetailCard>
            <h6>DETALHES DA VIAGEM</h6>
            <p>{tripDetail.name}</p>
            <p>{tripDetail.planet}</p>
            <p>{tripDetail.date}</p>
            <p>{tripDetail.description}</p>
          </ContainerDetailCard>
        </div>
      )}

      <ContainerDetailCard>
        <h6>LISTA DE CANDIDATOS</h6>
        <div>
          <p>Nome</p>
          <span>😁</span>
          <span>😔</span>
        </div>
      </ContainerDetailCard>
    </div>
  );
};
