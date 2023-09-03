import React from "react";

const context = React.createContext({
  toggleLayout: () => {},
  openCategory: () => {},
  openType: () => {},
  selectCategory: (value) => {},
  selectType: (value) => {},
  addTransaction: () => {},
  showType: false,
  showCategory: false,
  type: null,
  category: null,
  amount: 0,
  transactions: [],
  setCategory: () => {},
});

export default context;
