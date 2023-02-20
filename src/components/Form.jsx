import React, { useContext, useState } from "react";
import Context from "../context/Context";

function Form() {
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const { setUser } = useContext(Context);
  const handleNameChange = ({ target }) => {
    setInputName(target.value);
    setUser(target.value);
  };

  const handlePhoneChange = ({ target }) => {
    setInputPhone(phoneMask(target.value));
  };

  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  return (
    <div className="form">
      <label htmlFor="name">Nome:</label>
      <input
        placeholder="Insira o seu PRIMEIRO e ÚLTIMO nome"
        onChange={handleNameChange}
        maxLength="15"
        value={inputName}
        id="name"
        type="text"
      />
      <label htmlFor="phone">Telefone:</label>
      <input
        placeholder="Insira seu telefone com o DDD"
        value={inputPhone}
        onChange={handlePhoneChange}
        type="tel"
        maxlength="15"
        onkeyup="handlePhone(event)"
        name="phone"
        id="phone"
      />
    </div>
  );
}

export default Form;
