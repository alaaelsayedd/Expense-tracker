import { useContext, useState } from "react";
import { transactionContext } from "../Context/Transaction";

function AddTransaction() {
  const { addTransaction } = useContext(transactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    let newTransaction = {
      id: Math.random() * 10000,
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount(0);
    setText("");
  }
  return (
    <>
      <h2 className="head">Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Text</label>
        <input
          type="text"
          id="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">
          Amount{" "}
          <span style={{ display: "block", fontSize: "12px" }}>
            {"\n {negative Expense-positive income}"}
          </span>
        </label>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
