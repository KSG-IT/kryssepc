export default {
    // GET
    // cardNumber
    getCustomer() {
        return {
            name: 'Magnus Hellebust Buvarp',
            saldo: 523
        }
    },
    getProducts() {
        return [
            {
                id: 1,
                name: 'Øl',
                icon: 'can',
                price: 25,
                keycode: 81
            },
            {
                id: 2,
                name: 'Brus',
                icon: 'rusbrus',
                price: 20,
                keycode: 87
            },
            {
                id: 3,
                name: 'Shot',
                icon: 'shot',
                price: 35,
                keycode: 69
            },
            {
                id: 4,
                name: 'Drink',
                icon: 'cocktail',
                price: 40,
                keycode: 82
            }
        ]
    }
}
