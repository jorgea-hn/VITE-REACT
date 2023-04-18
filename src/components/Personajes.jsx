import Navegacion from "./nav/Navegacion"
import { useEffect, useState } from "react"

function Personajes() {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 151) + 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then(response => response.json())
      .then(data => setPerson(data))
  }, [])

  return (
    <div>
      <Navegacion />
      <h1>Personajes</h1>
      {person && (
        <div>
          <h2>Nombre del Pokémon: {person.name}</h2>
          <img src={person.sprites.front_default} alt={person.name} />
        </div>
      )}
    </div>
  )
}

export default Personajes
