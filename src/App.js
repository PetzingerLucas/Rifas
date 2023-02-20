import { useState } from "react";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import ConfirmationButton from "./components/ConfirmationButton";
import Header from "./components/Header";
import RaffleContent from "./components/RaffleContent";
import Table from "./components/Table";
import Total from "./components/Total";
import Context from "./context/Context";
import Form from "./components/Form";
import RafflePage from "./pages/RafflePage";
import Path from "./pages/routes";

function App() {
  const [total, setTotal] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [price, setPrice] = useState(10);
  const [user, setUser] = useState({
    name: "",
    selection: [],
    selectionQty: 0,
  });
  const [state, setState] = useState({
    name: "",
    price: 10,
    promoPrice: 7.5,
    offset: 2,
    description: "",
    quantity: 0,
    type: "",
  });

  const store = {
    total,
    setTotal,
    price,
    setPrice,
    isConfirmed,
    setIsConfirmed,
    user,
    setUser,
    state,
    setState,
  };

  return (
    <Context.Provider value={store}>
      <Path />
    </Context.Provider>
  );
}

export default App;
