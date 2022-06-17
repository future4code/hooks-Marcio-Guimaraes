import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 300px;
    border: 1px solid black;
  }
`;

export const Profile = () => {
  const [showProfile, setShowProfile] = useState({});

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-guimaraes-hooks/person"
      )
      .then((res) => {
        //  console.log(res.data.profile)
        setShowProfile(res.data.profile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const chosenProfile = (choice) => {
    const body = {
      id: showProfile.id,
      choice: choice
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-guimaraes-hooks/choose-person",
        body
      )
      .then((res) => {
        console.log(res);
      });
  };

  const onClickYes = () => {
    chosenProfile(true);
    console.log("yes");
  };

  const onClickNo = () => {
    chosenProfile(false);
    console.log("no");
  };

  return (
    <Container>
      <h1>Astomatch</h1>
      <h3>{showProfile.name}</h3>
      <img src={showProfile.photo} alt={showProfile.photo_alt} />
      <button onClick={onClickYes}>YES</button>
      <button onClick={onClickNo}>NO</button>
    </Container>
  );
};