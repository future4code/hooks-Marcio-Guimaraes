import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container } from "./CharacterStyles";


export const CharacterListPage = () => {

const [characterList,setCharacterList] = useState ("")
const [list,setList] = useState ([])
const getCharacters = () => {
 
    
    axios.get("https://swapi.dev/api/people")
    .then((res)=>{
        console.log(res.data.results)
        setList(res.data.results)
    }).catch((err)=>{
        console.log(err)
    })
}

useEffect (() => {
    getCharacters ()
}, [])
    return (
        <div>
            <h1>Personagens</h1>
         {list && list.map((item)=>{
         return (
         <Container>{item.name}</Container>
            )
         })}
        </div>
    )
}

