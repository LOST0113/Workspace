import React from "react";

function nomeAluno(props) {
    return <>{props}</>;
}

let mensagem = (props) => {
    return (
        <h1>Calmô, {props.name}, não se vá</h1>
    );
}

export default mensagem;