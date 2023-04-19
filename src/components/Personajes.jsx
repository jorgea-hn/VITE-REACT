import Navegacion from "./nav/Navegacion"
import { useEffect, useState } from "react"

function Personajes() {
    const [person, setPerson] = useState(null)
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        if (!refresh){
               return     
        }
        const randomNum = Math.floor(Math.random() * 151) + 1
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
            .then(response => response.json())
            .then(data => {
                    setRefresh(false)
                    setPerson(data)
                });
    }, [refresh])


    function onRefresh(){
        console.log("Ejecuto el refresh")
        setRefresh(true)
    }

    return (
        <div>
            <Navegacion />
            <h1>Personajes Juego</h1>
            {person && (
                <div>
                    <h2>Nombre del Pokémon: {person.name}</h2>
                    <h3>Pokemon Numero: <b>{person.id}</b></h3>
                    <img src={person.sprites.front_default} alt={person.name} />
                    
                </div>

            )}

            <button onClick={onRefresh}>Cambiar</button>
        </div>
    )
}

export default Personajes
