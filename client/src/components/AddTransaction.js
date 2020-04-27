import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('')
    const { addTransaction } = useContext(GlobalContext)

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e) => AddTransactionItem(e)}>Add transaction</button>
            </form>
        </div>
    )

    function AddTransactionItem(e) {

        e.preventDefault();

        if (text.trim() === '') {
            throw new Error('text is empty');
        }

        if (!Number(amount)) {
            throw new Error('invalid amount');
        }

        let newTransItem = {
            id: generateID(),
            text,
            amount: Number(amount)
        }

        //add to transaction list
        addTransaction(newTransItem);

        //cleat form
        setText('');
        setAmount(0);
    }

    // Generate random ID
    function generateID() {
        return Math.floor(Math.random() * 100000000);
    }
}
