(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ):string => {

        return `${ firstName } ${ restArgs.join(' ') }`
    }

    const superMan = fullName( 'Clark', 'Joseph', 'Kent' );

    console.log({ superMan })

})()