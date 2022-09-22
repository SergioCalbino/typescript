
namespace Validations { // Sirve para agrupar funciones y exportarlas para invocarlas donde sea necesario

    export const validateText = ( text: string ) => {
       return( text.length > 3) ? true : false

    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ) )
            ? false
            : true
    }

}

console.log( Validations.validateText('pepe') )