(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            // console.log('Constructor Avenger Llamado!')
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName }`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string, //Se lo enviamos al padre
            realName: string, //Se lo enviamos al padre
            public mutant:boolean
        ) {
            super(name, realName)
            // console.log('Constructor Xmen LLamado')


        }

        get fullName() {
            return `${ this.name } - ${this.realName}`
        }

        set fullName( name:string ) {
            if (name.length < 3) {
                throw new Error( 'El nombre debe ser mayor a 3 caracteres' )
                
            }
            this.name = name;

        }

        // getFullNameDesdeXmen() {
        //     console.log( super.getFullName() )
        // }

    }

    const wolwerine = new Xmen( 'Wolverine', 'Logan', true)
    
    // console.log(wolwerine.fullName);

    // wolwerine.fullName = 'Ciclope';

    // console.log(wolwerine)

})()