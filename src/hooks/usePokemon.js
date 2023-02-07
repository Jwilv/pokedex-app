

export const usePokemon = async(pokemon)=>{


const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
const body = await res.json();
const { abilities,
    base_experience,
    name,
    sprites,
    id,
    types,
    stats,
    moves,
    species,
    weight,
    height,

} = body;
const {other:{dream_world:{front_default : img}}} = sprites
// console.log(body);
// console.log(abilities);
// console.log(name); //nombre pokemon
// console.log(img); //img de pokemon, algunas estan re cojidas 
// console.log(types);
// console.log(stats);
// console.log(species.name);

return({
    base_experience,
    name,
    img,
    id,
    moves,
    abilities,
    types,
    stats,
    species,
    weight,
    height,
})

}