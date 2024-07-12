import React from 'react';

// Componente ListaDespesas para exibir a lista de despesas
const ListaDespesas = ({ despesas }) => {
    return (
        <div className="despesas">
            <h2>Despesas</h2>
            <ul>
                {despesas.map((despesa, index) => (
                    // Usa o índice como chave para cada item de lista
                    <li key={index}>
                        {despesa.descricao}: R$ {despesa.valor.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDespesas;
