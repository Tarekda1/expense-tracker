export default (state, { type, payload }) => {
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== payload
        )
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, payload]
      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: payload
      };
    case "TRANSACTION_ERROR": {
      return {
        ...state,
        error: payload
      };
    }
    default:
      return state;
  }
};
