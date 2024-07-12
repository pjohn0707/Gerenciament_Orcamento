import React from 'react';

// Componente Saldo para exibir o saldo atual
const Saldo = ({ saldo }) => {
    return (
        <div className="saldo">
            <h2>Saldo Atual: R$ {saldo.toFixed(2)}</h2>
        </div>
    );
};

export default Saldo;