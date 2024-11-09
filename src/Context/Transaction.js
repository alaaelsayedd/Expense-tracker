import { createContext, useReducer } from "react";
import transactionReducer from "./transactionReducer";

let initialState = {
  transcation: [
    {
      id: 1,
      text: "book",
      amount: -300,
    },
    {
      id: 2,
      text: "payment",
      amount: -500,
    },
    {
      id: 3,
      text: "salary",
      amount: 5000,
    },
  ],
};

export let transactionContext = createContext(initialState);
export default function TransactionProvider({ children }) {
  let [state, dispacth] = useReducer(transactionReducer, initialState);
  function deleteTranscation(id) {
    dispacth({ type: "DELETE_TRANS", payload: id });
  }
  function addTransaction (newTrans)
  {
    dispacth({ type: "ADD_TRANS", payload: newTrans });
  }
  return (
    <transactionContext.Provider value={{ transcation: state.transcation,deleteTranscation ,addTransaction }}>
      {children}
    </transactionContext.Provider>
  );
}
