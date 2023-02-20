import React, { useContext } from "react";
import Context from "../context/Context";

function RaffleContent() {
  const state = useContext(Context).state;
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {
        <div className="content-container">
          <h2>{state.name.toUpperCase()}</h2>
          <h3>
            {`1 nome por R$${state.price},00 ou ${state.offset} nomes por `}
            <em style={{ color: "green", fontSize: "x-large" }}>
              R${state.promoPrice * state.offset},00
            </em>
          </h3>
          <h5>{state.description}</h5>
        </div>
      }
    </div>
  );
}

export default RaffleContent;
