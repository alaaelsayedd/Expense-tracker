function transactionReducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANS":
      return {
        ...state,
        transcation: state.transcation.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    case "ADD_TRANS":
      return {
        ...state,
        transcation: [action.payload, ...state.transcation],
      };

    default:
      return state.transcation;
  }
}
export default transactionReducer;
