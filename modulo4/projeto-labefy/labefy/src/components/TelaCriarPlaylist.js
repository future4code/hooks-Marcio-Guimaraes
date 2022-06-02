import axios from "axios";
import React from "react";

export default class TelaCriarPlaylist extends React.Component{
    state = {
        nome: ""
    }

    handleNome = (event) => {
     this.setState({nome:event.target.value})
     console.log(this.state.nome)
    }
    criarPlaylist = () => {
    const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const body = {
        name: this.state.nome
    }

    const headers = {
     headers: {
         Authorization: "marcio-guimaraes-hooks"
     }

    }
    
    axios.post(url, body, headers)
    .then((response)=>{
        alert("usuario criado com sucesso")
        this.setState({nome:""})
    })
    .catch((error)=>{
        alert(error.response.data.message)
    })
}
    
    render() {
        return(
            <div>
                <button onClick={this.props.IrParaPlaylist}>Ir para Playlist</button>
                <h2>Crie sua lista</h2>
                <input placeholder="Nome da playlist"
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
            </div>
        )

    
    }
}