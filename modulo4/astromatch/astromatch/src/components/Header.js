import styled from "styled-components"

export const HeaderContainer = styled.div`
display: flex;
height: 100px;
align-items: center;
border: solid;
justify-content: space-around;`


const Header = (props) => {
    return(
        <HeaderContainer>
            <button onClick={()=>props.mudarPagina(true)} >Página Inicial</button>
            <h1>Astromatch</h1>
            <button onClick={()=>props.mudarPagina(false)}>Lista De Matches</button>
        </HeaderContainer>
    )

}

export default Header