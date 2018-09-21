import Vue from 'vue'
import Vuex from 'vuex'

import drinkIcons from './drinkIcons'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drinkIcons,
        customer: null,
        products: [],
        basket: []
    },

    getters: {
        getBasketTotal(state) {
            let total = 0
            state.basket.forEach(item => {
                const product = state.products.find(p => p.id === item)
                if (product) total += product.price
            })
            return total
        }
    },
    mutations: {
        setCustomer(state, customer) {
            state.customer = customer
        },

        setProducts(state, products) {
            state.products = products
        },

        addToBasket(state, productId) {
            // Product doesn't exist
            if (!state.products.find(p => p.id === productId))
                throw Error(`Product with id ${productId} does not exist.`)

            state.basket.push(productId)
        },
        removeFromBasket(state, index) {
            state.basket.splice(index, 1)
        },
        emptyBasket(state) {
            state.basket = []
        },

        cancelTransaction(state) {
            state.customer = null
            state.basket = []
        }
    }
})
