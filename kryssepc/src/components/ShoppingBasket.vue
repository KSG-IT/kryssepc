<template>
    <div id="shopping-basket">
        <div
            class="item"
            v-for="(item, id) in loadedItems"
            :key="id"
        >
            <span class="count" v-text="'x' + item.count"></span>
            <img :src="getItemURL(item.product.icon)" :alt="item.product.name">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'ShoppingBasket',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        loadedItems() {
            return this.items.reduce((acc, id) => {
                const prod = this.products.find(p => p.id === id)
                if (prod) {
                    if (acc.hasOwnProperty(id)) acc[id].count++
                    else acc[id] = { product: prod, count: 1 }
                }
                return acc
            }, {})
        },

        ...mapState({
            products: state => state.products
        })
    },

    methods: {
        getItemURL(icon) {
            return `/static/img/icons/drinks/svg/${icon}.svg`
        }
    }
}
</script>

<style lang="scss">
div#shopping-basket {
    display: flex;
    flex-wrap: wrap;

    div.item {
        position: relative;
        max-width: 12%;
        margin: 12px 0;

        img {
            width: 100%;
        }
        span.count {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -120%);
            font-size: 1.2em;
        }
    }
}
</style>
