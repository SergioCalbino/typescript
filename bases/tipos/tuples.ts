(() => {

    const hero: [string, number] = ['Dr. Strange', 100]

    hero[0] = 'Ironman';
    hero[1] = 80;

    for (let i = 0; i < hero.length; i++) {
        console.log(hero[i])
        
    }
})()