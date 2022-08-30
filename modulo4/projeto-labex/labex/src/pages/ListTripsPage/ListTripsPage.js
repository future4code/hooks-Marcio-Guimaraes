import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import BeatLoader from "react-spinners/BeatLoader";
// import useProtectedPage from "./hooks/useProtectedPage";

const ContainerTrip = styled.div`
  display: flex;
  width: 50vw;
  height: 30vh;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-content: center;
`;

export const ListTripsPage = () => {
  let navigate = useNavigate();

  const [showTrips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcio-guimaraes/trips"
      )
      .then((res) => {
        console.log(res.data.trips);
        setTrips(res.data.trips);
      });
  };
  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <Link to="/trips/application">
        <div>Cadastre-se para uma viagem inesquecível</div>
      </Link>

      <h1>ListTripsPage</h1>
      {loading ? (
        <BeatLoader color={"#9013FE"} loading={loading} size={30} />
      ) : (
        <div>
          {showTrips.map((trip) => {
            return (
              <ContainerTrip key={trip.id}>
                <Link to={`/admin/trips/${trip.id}`}>
                  <h4>{trip.name}</h4>
                  <p>{trip.planet}</p>
                </Link>
              </ContainerTrip>
            );
          })}
        </div>
      )}
    </div>
  );
};