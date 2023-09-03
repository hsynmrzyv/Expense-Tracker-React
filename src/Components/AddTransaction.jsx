// Icons
import { GrFormClose } from "react-icons/gr";

// Components
import Types from "./Types";
import Categories from "./Categories";

// Hooks
import { useContext, useRef } from "react";

// Context
import Context from "../context";

const AddTransaction = () => {
  const {
    toggleLayout,
    addTransaction,
    type,
    category,
    transactions,
    setCategory,
  } = useContext(Context);

  const balance = transactions.reduce((acc, t) => acc + +t.amount, 0);

  const amountRef = useRef();

  if (type === "income") {
    setCategory("income");
  }

  const add = () => {
    if (!amountRef.current.value || !type || !category) {
      return;
    }

    if (Math.abs(amountRef.current.value) > balance && type === "expense") {
      return;
    }

    const transactionObject = {
      amount:
        type === "expense"
          ? `-${amountRef.current.value}`
          : amountRef.current.value,
      type: type,
      category: type === "income" ? "income" : category,
      id: Math.random().toString(),
      date: new Date(),
    };

    addTransaction(transactionObject);
    amountRef.current.value = "";
  };

  return (
    <div className="h-full relative flex items-center  flex-col ">
      <button
        onClick={toggleLayout}
        className="absolute top-0 right-0 border h-6 w-6 border-black rounded-full flex items-center justify-center"
      >
        <GrFormClose />
      </button>
      <h1 className="text-xl text-slate-500 font-bold mb-5 placeholder:text-slate-500">
        Add Transaction
      </h1>
      <form className="flex justify-center mb-5">
        <input
          ref={amountRef}
          type="text"
          placeholder="0"
          className="focus:outline-none p-5 rounded-xl text-2xl text-center inline-block w-1/2"
        />
      </form>

      <div className="w-full">
        <Types />
        {type === "expense" && <Categories />}
      </div>

      <button
        onClick={add}
        className="absolute bottom-10 w-full p-2 text-white rounded bg-gradient-to-r bg-pink from-pink to-lightblue"
      >
        Save
      </button>
    </div>
  );
};

export default AddTransaction;
