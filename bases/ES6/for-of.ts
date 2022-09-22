(() => {
    
    type Avenger = {
        name: string,
        waapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        waapon: 'Armorsuit'
    };

    const captainAmerica: Avenger = {
        name: 'Capitan America',
        waapon: 'Shield'
    };
    const thor: Avenger = {
        name: 'Thor',
        waapon: 'Mjolnir'
    };

    const avengers: Avenger[] = [ ironman, captainAmerica, thor ];

    for (const avenger of avengers) {
        // console.log(avenger.name)
        
    }

})()