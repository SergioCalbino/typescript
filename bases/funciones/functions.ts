(() => {
    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activaBatisignal = ():string => {
        return 'Batiseñal activada';
    }

    console.log(typeof activaBatisignal);

    const heroName = returnName();

})()