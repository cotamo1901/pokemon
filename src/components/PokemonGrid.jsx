const getPokemon = async (category) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${category}`;
    const resp = await fetch(url);
    const data = await resp.json();
  
    // Verifica si la propiedad 'sprites' existe en la respuesta
    if (data.sprites) {
      const items = {
        id: data.id,
        name: data.name,
        url: data.sprites.front_default,
      };
  
      console.log(items);
      return items;
    } else {
      console.error("Sprites no encontrados en la respuesta");
      return null;
    }
  };
  
  export const PokemonGrid = ({ category }) => {
    const fetchData = async () => {
      const pokemonData = await getPokemon(category);
      if (pokemonData) {
        // Haz algo con los datos, por ejemplo, guárdalos en el estado
        console.log(pokemonData);
      }
    };
  
    fetchData();
  
    return (
      <>
        <h3>{category}</h3>
        {/* Renderiza los datos del Pokémon aquí */}
      </>
    );
  };
  