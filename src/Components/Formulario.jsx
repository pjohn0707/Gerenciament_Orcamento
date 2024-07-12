import React, { useState } from 'react';

// Componente FormDespesas para adicionar novas despesas
const FormularioDespesas = ({ adicionarDespesa }) => {
    // Estado para armazenar a descrição da despesa
    const [descricao, setDescricao] = useState('');
    // Estado para armazenar o valor da despesa
    const [valor, setValor] = useState('');

    // Função que lida com o envio do formulário
    const Envio = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
        adicionarDespesa(descricao, parseFloat(valor)); // Adiciona a nova despesa através da função recebida por props
        setDescricao(''); // Limpa o campo de descrição após o envio
        setValor(''); // Limpa o campo de valor após o envio
    };

    return (
        <form onSubmit={Envio}>
            <div className="form-grupo">
                <label>Descrição:</label>
                <input type="texto" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            </div>
            <div className="form-grupo">
                <label>Valor:</label>
                <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
            </div>
            <button type="submit">Adicionar Despesa</button>
        </form>
    );
};

export default FormularioDespesas;