import { useContext } from "react";
import { transactionContext } from "../Context/Transaction";

function IncomeExpense() {
  const { transcation } = useContext(transactionContext);
  let amounts = transcation.map((trans)=>trans.amount)
  let income = amounts.filter((amount)=>amount>0).reduce((acc,amount)=>acc+=amount,0)
  let expense = amounts.filter((amount)=>amount<0).reduce((acc,amount)=>acc+=amount,0)
 

  return (
    <div className="income-expunse">
      <div className="income">
        <p>Income</p>
        <span>{income}</span>
      </div>
      <div className="expense">
        <p>Expense</p>
        <span>{-expense}</span>
      </div>
    </div>
  );
}

export default IncomeExpense;
