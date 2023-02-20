import React, { useContext, useState } from "react";
import Context from "../context/Context";

function NameContainer(props) {
  const { total, setTotal, price, user } = useContext(Context);
  const [isSelected, setIsSelected] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleClick = () => {
    if (user.length > 0) {
      setIsSelected(!isSelected);
      if (!isSelected) {
        setCurrentUser(user);
        setTotal(total + price);
      } else {
        setTotal(total - price);
        setCurrentUser("");
      }
    } else {
      alert("Por favor, preencha seus dados antes de escolher!");
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
      <p className="user-name-text">{currentUser.toUpperCase()}</p>
    </div>
  );
}

export default NameContainer;
