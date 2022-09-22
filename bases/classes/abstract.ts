(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado'
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado'
        }
    }

    const wolwerine = new Xmen( 'Wolverine', 'Logan');
    const magneto = new Villian( 'Magneto', 'Eric Langer');

    // console.log(wolwerine.salvarMundo());
    // console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
        // console.log(character.realName)

    }

    printName( wolwerine )

})()