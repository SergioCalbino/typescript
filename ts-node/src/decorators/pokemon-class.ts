function printToConsole( constructor: Function ) {
    console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false ):Function => { //Factoring constructor
    if ( print ) {
        return printToConsole
    } else {
        return () => {}
    }

}

const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor )
    // Object.seal( constructor.prototype )

}

function CheckValidPokemonId() { //Factorin decorator que retorna una funcion
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) { // esto es para los metodos
        
        const originalMethod = descriptor.value

        descriptor.value = (id: number) => {
            if ( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800')
                
            } else {
               return originalMethod( id )

            }

        }
    }
}

function readOnly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ) {

        const descriptor: PropertyDescriptor = {
            get() {
                return 'Sergio'

            },
            set( this, val ) {
                // console.log(this, val)
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                } )


            }

        }
        return descriptor;

    }

}

@bloquearPrototipo
@printToConsoleConditional( false )

 export class Pokemon {
    @readOnly(false)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()    
    savePokemonToDB( id: number ) {
        console.log( `Pokemon guardado a la base de datos ${ id }` )
    }
}