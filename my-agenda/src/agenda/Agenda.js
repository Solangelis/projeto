import React, { useEffect, useState } from "react";


function Agenda() {
    const [contatos, setContatos] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/contatos')
        .then(response => response.json())
        .then(data => setContatos(data))
        .catch(error => console.error('Error')
        )
    }, []);
    
    
    
    
    return(
        <div>
            <h1>Lista de Contatos</h1>
            <ul>
            {contatos.map(contato => (
                    <li key={contato.id}>
                        <p>ID: {contato.id}</p>
                        <p>Nome: {contato.nome}</p>
                        <p>Email: {contato.email}</p>
                        <p>Telefone: {contato.telefone}</p>
                    </li>
                ))}
                
            </ul>

        </div>
    )
}

export default Agenda;