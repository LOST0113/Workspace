import React from "react";
import GirlInterrupted from "../GirlInterrupted.jpg"


let estilo = {fontSize: "2rem", color: "purple", backgroundColor: "orange"}

let Principal = () => {
    return (
        <>
            <p style={estilo}>Estou participando do curso de IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end. Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.</p>

            <ul style={{listStyle: "none"}}>
                <li>Girl Interrupted</li>
                <li>The Professional</li>
                <li>Club of fight</li>
                <li>Thirteen</li>
                <li>Requiem for a dream</li>
            </ul>

            <img src={GirlInterrupted} alt="Girl Interrupted" width={200} />
        </>
    );
}

export default Principal;