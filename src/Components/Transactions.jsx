// Components
import TransactionItem from "./TransactionItem";

// Hooks
import { useContext } from "react";

// Context
import Context from "../context";

const Transactions = () => {
  const { transactions } = useContext(Context);

  return (
    <div className="flex-1 overflow-scroll scrollbar-hide">
      <h1 className="text-slate-800 font-bold text-xl ">Transactions</h1>
      <ul className="mt-3">
        {transactions.map((transaction) => {
          return (
            <TransactionItem
              key={transaction.id}
              category={transaction.category}
              amount={transaction.amount}
              date={transaction.date}
            >
              {transaction.amount}
            </TransactionItem>
          );
        })}
      </ul>
    </div>
  );
};

export default Transactions;
