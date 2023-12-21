import { useState } from "react";

export const AddPokemon = ({ onNewCategory }) => {
  const [inputvalue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputvalue.trim().length < 1) return;

    onNewCategory(inputvalue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="search..."
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  );
};
