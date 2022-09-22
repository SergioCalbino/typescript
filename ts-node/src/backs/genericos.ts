// import { Hero as SuperHeroe } from "./classes/Hero";
// import * as SuperClass from "./classes/Hero";

import { prtintObject, genericFunction, genericArrowFunction } from "../generics/generics";
import { Hero, Villain } from "../interfaces";


// import { Hero } from "./classes/Hero"

// import { powers } from "./data/powers";



// const ironman = new Hero('Tony', 1, 55)

// console.log(ironman)
// console.log(ironman.power)

// prtintObject( 123 )
// prtintObject( new Date() )
// prtintObject( { a:1, b:2, c:3 } )
// prtintObject( [1,2,3,4,5,6,7] )
// prtintObject( 'Hola Mundo' )
// const name: string = 'Sergio'

// console.log(genericArrowFunction(3.1416).toFixed(2))
// console.log(genericFunction(name).toUpperCase())
// console.log(genericFunction(new Date()).getFullYear())


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericArrowFunction<Hero>(deadpool).name )



