import React from "react";

class exercicio1 extends React.Component {

    state = {
        listaUsuarios : [
            {
            nomeUsuario: "Paulinha",
            fotoUsuario: 'https://picsum.photos/50/50',
            fotoPost: 'https://picsum.photos/200/150'},

            {
              nomeUsuario: "Marcio",
              fotoUsuario: 'https://picsum.photos/50/51',
              fotoPost: 'https://picsum.photos/200/151'


            },

            {
               nomeUsuario: "Joaquim",
               fotoUsuario: 'https://picsum.photos/50/53',
               fotoPost: 'https://picsum.photos/200/153'
            }




        ]
    };
    render()
}

export default exercicio1;