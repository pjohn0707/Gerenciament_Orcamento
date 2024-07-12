import React, { useState } from 'react';
import "./App.css"
import Saldo from './Components/Saldo';
import ListaDespesas from './Components/ListaDespesas';
import FormularioDespesas from './Components/Formulario';
import CalculadoraOrcamento from './Components/CalculadoraOrcamento';

const App = () => {
    // Estado para armazenar o saldo inicial
    const [saldoInicial, setSaldoInicial] = useState(0); // Saldo inicial definido como 0 inicialmente
    // Estado para armazenar a lista de despesas
    const [despesas, setDespesas] = useState([]);

    // Função para adicionar uma nova despesa à lista
    const adicionarDespesa = (descricao, valor) => {
        setDespesas([...despesas, { descricao, valor }]);
    };

    // Função para atualizar o saldo inicial
    const atualizarSaldoInicial = (e) => {
        setSaldoInicial(parseFloat(e.target.value));
    };

    // Calcula o saldo atual subtraindo o total das despesas do saldo inicial
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
    const saldoAtual = saldoInicial - totalDespesas;

    return (
        <div className="app">
            <h1>Gerenciamento de Orçamento Pessoal</h1>
            <div className="saldo-inicial">
                <label>Saldo Inicial:</label>
                {/* Campo de input para o saldo inicial */}
                <input type="number" value={saldoInicial} onChange={atualizarSaldoInicial} />
            </div>
            <Saldo saldo={saldoAtual} />
            <FormularioDespesas adicionarDespesa={adicionarDespesa} />
            <ListaDespesas despesas={despesas} />
            <CalculadoraOrcamento saldoInicial={saldoInicial} despesas={despesas} />
        </div>
    );
};

export default App;
