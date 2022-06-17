import axios from "axios";
import { useEffect, useState } from "react";

const main = () => {
const [showProfile, setShowProfile] = useState({});

const GetProfileToChoose = () => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:marcio-guimaraes-hooks/person')
    .then((res) => {
    setShowProfile([res.data.profile]);
    })
    .catch((err) => {
        //console.log("erro na renderização")
})}
}
const PaginaMatch  = () => {
   
    useEffect(() => {
        GetProfileToChoose()
    }, [ ])
  
   
  return (
    <div>
        <h1>Página Match</h1>
    </div>
  );
}

export default PaginaMatch;
