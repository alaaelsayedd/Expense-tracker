import { useContext } from "react";
import { transactionContext } from "../Context/Transaction";

function Balance() {
  const { transcation } = useContext(transactionContext);
  let amounts = transcation.map(trans=>trans.amount)
  let balance = amounts.reduce((acc,amount)=>amount+acc,0)
  return (
    <>
      <h2 className="balance">Your Balance</h2>
      <p>${balance}</p>
    </>
  );
}

export default Balance;
