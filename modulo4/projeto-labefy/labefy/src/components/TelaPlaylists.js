
import axios from "axios";
import React from "react";
import styled from "styled-components"


const CardLista = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
display:flex;
justify-content: space-between;
`
export default class TelaPlaylists extends React.Component{
    state = {
     lista: []
    }
   
   
    componentDidMount() {
        this.pegarPlaylists()
    }
    
    pegarPlaylists =  () => {
     const url= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    
     const headers = {
        headers: {
            Authorization: "marcio-guimaraes-hooks"
        }
    }
    axios.get(url,headers)
    .then((response)=>{
        this.setState({listas: response.data})
        console.log(this.state.lista)
        
    })
    .catch((error)=>{
        alert("Algo deu errado!")
    })
}
    render() {
        const playlist = this.state.lista.map((list)=>{
         return(
             <CardLista>
                 {list.name}
                 <button>X</button>
                 </CardLista>
         )
        })
        
        return(
            <div> 
                <button onClick={this.props.IrParaCriarPlaylist}>Ir para CriarPlaylist</button>
             <h2>Minhas Playlists</h2>
              {playlist}
            </div>
        )

    
    }
}