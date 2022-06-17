import axios from "axios";
import React, { useState, useEffect } from "react";

export const Matches = () => {
  const [showMatches, setShowMatches] = useState([]);

  const getMaches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-guimaraes-hooks/matches"
      )
      .then((res) => {
        console.log(res);
        setShowMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMaches();
  }, []);

  return (
    <div>
      {showMatches.map((match) => {
        return (
          <div>
            <p>{match.name}</p>
            <img src={match.photo} alt="" />
          </div>
        );
      })}
    </div>
  );
};
