import Vue from 'vue'
import Vuex from 'vuex'

import drinkIcons from './drinkIcons'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drinkIcons,
        products: [
            {
                id: 1,
                name: 'Øl',
                icon: 'can'
            },
            {
                id: 2,
                name: 'Brus',
                icon: 'rusbrus'
            },
            {
                id: 3,
                name: 'Shot',
                icon: 'shot'
            },
            {
                id: 4,
                name: 'Drink',
                icon: 'cocktail'
            }
        ]
    }
})
