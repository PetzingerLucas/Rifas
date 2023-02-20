import React, { useContext, useState } from "react";
import Context from "../context/Context";

function NameContainer(props) {
  const { setTotal, user, state, setUser } = useContext(Context);
  const [isSelected, setIsSelected] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleClick = () => {
    calcTotal();
    if (user.name.length > 0) {
      setIsSelected(!isSelected);
      if (!isSelected) {
        setCurrentUser(user.name.toUpperCase());
        setUser({
          ...user,
          selectionQty: user.selectionQty + 1,
        });
      } else {
        setCurrentUser("");
        setUser({
          ...user,
          selectionQty: user.selectionQty - 1,
        });
      }
    } else {
      alert("Por favor, preencha seus dados antes de escolher!");
    }
  };

  const calcTotal = () => {
    if (user.selectionQty > state.offset) {
      setTotal(user.selectionQty * state.promoPrice);
    } else {
      setTotal(user.selectionQty * state.price);
    }
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={isSelected ? "selected-container" : "name-container"}
    >
      <p>{props.name}</p>
      <p className="user-name-text">{currentUser}</p>
    </div>
  );
}

export default NameContainer;
