import React from "react";
import TelaCriarPlaylist from "./components/TelaCriarPlaylist";
import TelaPlaylists from "./components/TelaPlaylists";

class App extends React.Component {
  
  state = {
  telaAtual: "TelaPlaylists"
  

  }
  irParaCriarPlaylist = () => {

    this.setState({ telaAtual: "TelaCriarPlaylist" })
  }

  irParaPlaylist = () => {
    this.setState({ telaAtual: "TelaPlaylists" })
  }



  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "TelaCriarPlaylist":
        return <TelaCriarPlaylist irParaPlaylist={this.irParaPlaylist} />
      case "TelaPlaylists":
        return <TelaPlaylists irParaCriarPlaylist={this.irParaCriarPlaylist} />
      default:
        return <p>Erro! Página não encontrada</p>
    }
  }
  
  render () {
  return (
    <div>
      {this.escolheTela()}
    </div>
  );
}
}
export default App;
