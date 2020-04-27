import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{`$${getIncomeExpense().income}`}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{`$${getIncomeExpense().expense}`}</p>
            </div>
        </div>
    )

    function getIncomeExpense() {
        const amounts = transactions.map(transaction => transaction.amount);

        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

        const income = amounts
            .filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2);

        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
        ).toFixed(2);

        return { income, expense };
    }
}
