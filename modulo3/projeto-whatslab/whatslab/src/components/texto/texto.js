import React from "react";

class  texto extends React.Component {
    state = {
        inputUsuario : "",
        inputMensagem : "",
    }

render () {
    return(
        <div>
            <h3>WHATSLAB</h3>
          <input placeholder='Usuario'value={this.state.inputUsuario} />
          <input placeholder='mensagem' value={this.state.inputMensagem} />
           <button>Enviar</button>

        </div>
    )
}
}
export default texto