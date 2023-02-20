import React, { useContext } from "react";
import Context from "../context/Context";

function Total() {
  const context = useContext(Context);
  const { total } = context;

  return (
    <div className="total">
      <p>Total a pagar: R$ {total.toFixed(2)}</p>
    </div>
  );
}

export default Total;
