import { useContext } from "react";
import { transactionContext } from "../Context/Transaction";

function TransactionList() {
  const { transcation ,deleteTranscation} = useContext(transactionContext);

  return (
    <>
      <h2 className="head">History</h2>
      <ul>
        {transcation.map((trans) => (
          <li className={trans.amount <0 ?"minus":"plus"} key={trans.id}>
            <span>{trans.text}</span>
            <span>
              {trans.amount < 0 ? `-$ ${-trans.amount}` : `+$ ${trans.amount}`}
            </span>
            <button onClick={()=>deleteTranscation(trans.id)}>x</button>
          </li>
        ))}

       
      </ul>
    </>
  );
}

export default TransactionList;
