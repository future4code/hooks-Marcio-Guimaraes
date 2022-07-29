import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CharacterListPage} from "../CharacterListPage/CharacterListPage"
import {CharacterDetailPage} from "../CharacterDetailPage/CharacterDetailPage"

export const Routers = () => {

    return (
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<CharacterListPage/>}/>
            <Route path="/detalhes/:nome" element={<CharacterDetailPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}