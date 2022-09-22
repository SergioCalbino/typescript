(() => {

    class Apocalipsis {

        static instance: Apocalipsis;

        private constructor( public name: string ) {}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis')
            }
            return Apocalipsis.instance
        }

        changeName(newName:string):void {
            this.name = newName
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    console.log(apocalipsis)

    apocalipsis.changeName('Xavier')
    console.log(apocalipsis)

})()