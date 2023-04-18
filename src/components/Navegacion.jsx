import React from "react";
import Li from "./Li";
function Navegacion(){
    return (
        <div>
            
        <nav>
            <ul>
                <Li 
                text={"Home"}
                link="/"
                />
                <Li 
                text={"Personajes"}
                link="/personajes"
                />
                <Li 
                text={"Episodios"}
                link="/episodios"
                />
                <Li 
                text={"Citas"}
                link="/citas"
                />
            </ul>
        </nav>
        </div>
    )
}

export default Navegacion