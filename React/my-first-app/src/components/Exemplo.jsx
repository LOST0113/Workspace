import React from "react";

let estilo = {color: "blue", backgroundColor: "pink", listStyle: "none"}

let Exemplo = () => {
    return (
        <>
            <h1>Sofrendo nessa sexta</h1>
            <h2>Reprovam</h2>
            <ul style={estilo}>
                <li>Aluno 1</li>
                <li>Aluno 2</li>
                <li>Aluno 3</li>
                <li>Todos alunos foram reprovados!</li>
            </ul>
        </>
    );
}

export default Exemplo;