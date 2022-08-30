import React from "react";
import { goToList } from "../Routers/coordinator"
import { useNavigate } from "react-router-dom"

export const CharacterDetailPage = () => {
const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToList(navigate)}>Voltar para lista</button>
            <h1>CharacterDetailsPage</h1>
        </div>
    )
}

