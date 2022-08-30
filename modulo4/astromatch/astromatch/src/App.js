import { useState } from "react";
import Header from "./components/Header";
import ListaMatchs from "./components/ListaMatchs";
import PaginaMatch from "./components/PaginaMatch";

const App = () => {
  const [pagina, setPagina] = useState(true);

  const mudarPagina = (booleano) => {
    setPagina(booleano);
  };
  
  return (
    <div>
      <Header mudarPagina = {mudarPagina}/>
      {pagina ? <><PaginaMatch/></> : <><ListaMatchs/></> }
    </div>
  );
};

export default App;
