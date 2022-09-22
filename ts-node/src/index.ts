// import { getPokemon } from './generics/get-pokemon';

import { Pokemon } from "./decorators/pokemon-class";




// getPokemon(4)
//     .then( pokemon => console.log( pokemon.sprites.front_default ) )
//     .catch( error => console.log( error ) )
//     .finally( () => console.log( 'Fin de getPokemon' ) )

 const charmander = new Pokemon('Charmander');

//  (Pokemon.prototype as any).customName = 'Pikachu'

charmander.publicApi = 'https//sergito.com'

 console.log(charmander)