

export const PokemonGrid = ({category}) => {
  
const getPokemon= async()=>{
    const url= `https://pokeapi.co/api/v2/pokemon/${category}`
    const resp= await fetch(url)
    const {results.url} = await resp.json
    console.log(resp)

  

}
  
getPokemon()
    return (
   <>
  <h3>{category}</h3>
  <p>Hello</p> 
   </>
  )
}
