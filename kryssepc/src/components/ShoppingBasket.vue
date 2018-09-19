<template>
    <div id="shopping-basket">
        <div
            class="item"
            v-for="item in loadedItems"
            :key="item.id"
        >
            <!-- <i :class="item.icon" /> -->
            <img :src="getItemURL(item.icon)" :alt="item.name">
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
                const product = this.products.find(p => p.id === id)
                if (product) acc.push(product)
                return acc
            }, [])
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
    display: grid;
    grid-template-columns: repeat(12, minmax(8em, 12em));
    grid-auto-flow: column;
    grid-gap: 1em;

    div.item {
        img {
            width: 100%;
        }
    }
}
</style>
