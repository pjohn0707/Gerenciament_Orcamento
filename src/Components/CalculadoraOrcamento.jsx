import React from 'react';

// Componente CalculadoraOrçamento para calcular o saldo após subtração das despesas
const CalculadoraOrcamento = ({ saldoInicial, despesas }) => {
  // Calcula o total das despesas somando o valor de cada despesa
  const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);

  // Calcula o saldo atual subtraindo o total das despesas do saldo inicial
  const saldoAtual = saldoInicial - totalDespesas;

  return (
    <div className="calculadora-orcamento">
      <h2>Calculadora de Orçamento</h2>
      <p>Total Despesas: R$ {totalDespesas.toFixed(2)}</p>
      <p>Saldo Atual: R$ {saldoAtual.toFixed(2)}</p>
    </div>
  );
};

export default CalculadoraOrcamento;