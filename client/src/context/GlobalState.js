import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { axios } from "axios";

//Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

// { id: 1, text: 'Flower', amount: -20 },
// { id: 2, text: 'Salary', amount: 300 },
// { id: 3, text: 'Book', amount: -10 },
// { id: 4, text: 'Camera', amount: 150 }

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      });
    } catch (error) {}
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
