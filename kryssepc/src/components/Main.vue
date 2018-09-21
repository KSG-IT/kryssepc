<template>
    <div id="main">
        <customer-info
            v-if="customer"
            :customer="customer"
            :price="getBasketTotal"
        />
        <shopping-basket
             v-if="customer"
            :items="basket"
        ></shopping-basket>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import api from '@/api'
import CustomerInfo from '@/components/CustomerInfo'
import ShoppingBasket from '@/components/ShoppingBasket'

export default {
    name: 'Main',

    components: {
        CustomerInfo,
        ShoppingBasket
    },

    computed: {
        ...mapState({
            customer: state => state.customer,
            products: state => state.products,
            basket: state => state.basket
        }),
        ...mapGetters(['getBasketTotal'])
    },

    created() {
        document.addEventListener('keyup', this.documentKeyUp)
    },
    destroyed() {
        document.removeEventListener('keyup', this.documentKeyUp)
    },
    mounted() {
        this.setCustomer(api.getCustomer())
    },

    methods: {
        documentKeyUp(evt) {
            const keycode = evt.keyCode

            // Backspace
            if (keycode === 8) {
                this.cancelTransaction()
                return
            }

            if (!this.customer) return

            const product = this.products.find(p => p.keycode === keycode)
            if (!product) return

            this.addToBasket(product.id)
        },

        ...mapMutations(['addToBasket', 'setCustomer', 'cancelTransaction'])
    }
}
</script>

<style lang="scss" scoped>
div#main {
    padding: 1.5em 2em;

    div#customer-info {
        margin-bottom: 2em;
    }
}
</style>
