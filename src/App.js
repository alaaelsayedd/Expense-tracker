import "./App.css";
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import IncomeExpense from "./Component/IncomeExpense";
import TransactionList from "./Component/TransactionList";
import AddTransaction from "./Component/AddTransaction";
import TransactionProvider from "./Context/Transaction";

function App() {
  return (
    <div className="conatiner">
      <TransactionProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </TransactionProvider>
    </div>
  );
}

export default App;
