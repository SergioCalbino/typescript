(() => {

    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAddress( id: string ):string
    }

    interface Address {
        id: number;
        zip: string;
        city: string
    }

    const client: Client = {
        name: 'Sergio',
        age: 25,
        address: {
            id: 125,
            zip: 'kuy',
            city: 'CABA'
        },
        getFullAddress(id:string) {
            return this.address.city
        }
    }

    console.log(client.getFullAddress('123'))

})()