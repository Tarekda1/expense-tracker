import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">{`$${getBalance()}`}</h1>
        </>
    )

    function getBalance() {
        const amounts = transactions.map(transaction => transaction.amount);
        const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
        return total;
    }
}
