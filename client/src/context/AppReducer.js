export default (state, { type, payload }) => {
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== payload
        )
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [payload, ...state.transactions]
      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: [...payload]
      };
    default:
      return state;
  }
};
