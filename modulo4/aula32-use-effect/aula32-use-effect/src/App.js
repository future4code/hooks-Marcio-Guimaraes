import React, {useEffect, useState} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";

const App = () => {
  const [pokeList, setPokelist] = useState ([]);
   const [pokeName, setPokename] = useState ("")
   
  

  // método que roda após a montagem do componente
  useEffect (()  => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokelist(  response.data.results );
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const changePokeName = event => {
    setPokename( event.target.value );
  };

  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
   
    );
  

      }
export default App;
