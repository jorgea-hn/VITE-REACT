import React from "react";
import Li from "../Li";
import "./navegacion.css"
function Navegacion(){
    return (
        <div>
            
        <nav>
            <ul className="nav-ul">
                <Li 
                text={"Home"}
                link="/"
                />
                <Li 
                text={"Pokedex"}
                link="/personajes"
                />
                <Li 
                text={"Episodios"}
                link="/episodios"
                />
                <Li 
                text={"Anime"}
                link="/citas"
                />
            </ul>
        </nav>
        </div>
    )
}

export default Navegacion