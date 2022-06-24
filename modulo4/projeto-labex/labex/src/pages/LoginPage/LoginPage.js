import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";

export const LoginPage = () => {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  let navigate = useNavigate();

  const onClickLogin = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcio-guimaraes/login",
        body
      )
      .then((res) => {
        console.log(body);
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch(() => {
        console.log("E-mail ou senha invalida");
      });
  };

  return (
    <div>
      <button onClick={onClickLogin}>Home</button>

      <h1>LoginPage</h1>

      <input
        placeholder="E-mail"
        type="text"
        value={email}
        onChange={handleEmail}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={handlePassword}
      />

      <button onClick={() => navigate("/admin/trips/list")}>Acessar</button>
    </div>
  );
};
