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

function App() {
  const [total, setTotal] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [price, setPrice] = useState(10);
  const [user, setUser] = useState("");

  const store = {
    total,
    setTotal,
    price,
    setPrice,
    isConfirmed,
    setIsConfirmed,
    user,
    setUser,
  };

  return (
    <Context.Provider value={store}>
      <RafflePage />
    </Context.Provider>
  );
}

export default App;
