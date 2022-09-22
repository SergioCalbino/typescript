(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downign Jr.',
        vision: 'Elizabeth Olsen',
        activo: true,
        poder: 1500
    }

    const { poder, vision } = avengers

    // console.log( poder, vision )

    const printAvenger = ( { ironman, ...resto }:Avengers  ) => {

        // console.log( ironman, resto )

    }

    // printAvenger( avengers )

    const avengerArr: [string, string, string] = [ 'Cap. America', 'Ironman', 'Hulk' ];

    const [, ironman] = avengerArr;
    console.log({ ironman })

    

})()