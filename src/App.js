// Components
import Container from "./Components/Container.jsx";
import Layout from "./Components/Layout.jsx";
import AddTransaction from "./Components/AddTransaction.jsx";

// Hooks
import { useState, useEffect } from "react";

// Context
import Context from "./context.js";

const App = () => {
  const [showLayout, setShowLayout] = useState(true);
  const [showType, setShowType] = useState(false);
  const [type, setType] = useState(null);
  const [category, setCategory] = useState(null);
  const [showCategory, setShowCategory] = useState(false);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("Transactions added");
    if (transactions.length !== 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  useEffect(() => {
    const fethcedTransactions = JSON.parse(
      localStorage.getItem("transactions")
    );

    setTransactions(fethcedTransactions);
  }, []);

  const toggleLayout = () => {
    setShowLayout(!showLayout);
    setShowType(false);
    setType(null);
    setCategory(null);
    setShowCategory(false);
  };

  const openType = () => {
    setShowType(true);
    setShowCategory(false);
  };

  const openCategory = () => {
    setShowCategory(true);
    setShowType(false);
  };

  const selectType = (value) => {
    setType(value);
    setShowType(false);
  };

  const selectCategory = (value) => {
    setCategory(value);
    setShowCategory(false);
  };

  const addTransaction = (transaction) => {
    const newTransactions = [transaction, ...transactions];
    setTransactions(newTransactions);
    setType(null);
    setCategory(null);
    setShowLayout(true);
  };

  console.log(transactions);

  return (
    <Container>
      <Context.Provider
        value={{
          toggleLayout: toggleLayout,
          selectType: selectType,
          selectCategory: selectCategory,
          openType: openType,
          openCategory: openCategory,
          showType: showType,
          type: type,
          category: category,
          showCategory: showCategory,
          addTransaction: addTransaction,
          transactions: transactions,
          setCategory: setCategory,
        }}
      >
        <div className="flex flex-col h-[600px] w-[350px] rounded-3xl bg-[#EDE9F0] pt-10 px-5 font-lato ">
          {showLayout && <Layout />}
          {!showLayout && <AddTransaction />}
        </div>
      </Context.Provider>
    </Container>
  );
};

export default App;
