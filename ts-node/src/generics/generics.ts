
export const prtintObject = ( argument: any ) => {
    console.log( argument );
}

export function genericFunction<T>( argument: T ):T { // Con esa t entre <> le decimos a la funcion que el tipo que recibe es igual al de salida. Sirve para que nos ayude a identificar el tipo de dato
    return argument

}

export const genericArrowFunction = <T>( argument: T ) => {
    return argument

}