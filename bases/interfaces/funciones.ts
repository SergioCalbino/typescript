(() => {


    interface addTwoNumbers {
        ( a:number, b:number ): number
    }

    let addHumbersFunction: addTwoNumbers;

    addHumbersFunction = (a:number, b:number) => {
        return a+b;
    } 

    console.log(addHumbersFunction)

})