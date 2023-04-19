import Navegacion from "./nav/Navegacion"
import { useEffect, useState } from "react"
function Citas() {
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
            <h1>Personajes Anime</h1>
            {person && (
                <div>
                    <h2>Nombre del Pokémon: {person.name}</h2>
                    
                    <img src={person.sprites.other.dream_world.front_default} alt={person.name} />
                </div>
            )}
            <button onClick={onRefresh}>Cambiar</button>
        </div>
    )
}

export default Citas