import { useState } from "react";
import { AddPokemon } from "./components/AddPokemon";
import { PokemonGrid } from "./components/PokemonGrid";

export const Pokemon = () => {
  const [categories, setCategories] = useState(["charizard"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((e) => [...e, newCategory]);
  };
  return (
    <>
      {/* <h1>Pokemon</h1> */}
      <h1>Pokemon</h1>
      {/* input */}
      <AddPokemon
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* lista de pokemons */}

      {categories.map((category) => {
        return <PokemonGrid key={category} category={category} />;
      })}
    </>
  );
};
