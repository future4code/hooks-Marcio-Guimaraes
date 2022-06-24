import { Header } from "../../Header";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApplicationFormPage = () => {
  const [apply, setApply] = useState([]);

  const showApplication = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/marcio-guimaraes/apply"
      )
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        console.log("erro");
      });
  };

  useEffect(() => {
    showApplication();
  }, []);

  return (
    <div>
      <Header />

      <h1>ApplicationFormPage</h1>

      <input placeholder="Nome" />
      <input placeholder="Idade" />
      <input placeholder="Motivos da Candidatura" />

      <div>
        <label>País de Origem</label>
        <select>
          <option value="brasil">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="brasil">Estados Unidos</option>
          <option value="brasil">França</option>
          <option value="brasil">Inglaterra</option>
        </select>

        <label>Planeta de Preferência</label>
        <select>
          <option value="brasil">Argentina</option>
          <option value="brasil">Brasil</option>
          <option value="brasil">Estados Unidos</option>
          <option value="brasil">França</option>
          <option value="brasil">Inglaterra</option>
        </select>
      </div>

      <button>Enviar</button>
    </div>
  );
};
