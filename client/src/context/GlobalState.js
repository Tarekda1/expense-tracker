import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { axios } from "axios";

//Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

const basePath = "/api/v1/transactions";

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
      const res = await axios.get(basePath);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`${basePath}/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const response = await axios.post(basePath, transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        addTransaction,
        error: state.error,
        loading: state.loading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
