<template>
    <div id="main">
        <shopping-basket
            :items="basket"
        ></shopping-basket>
    </div>
</template>

<script>
import ShoppingBasket from '@/components/ShoppingBasket'

export default {
    name: 'Main',

    components: {
        ShoppingBasket
    },

    data() {
        return {
            basket: [1, 2, 3, 4]
        }
    }
}
</script>

<style lang="scss" scoped>
div#main {
    padding: 1.5em 2em;

    img {
        color: white;
    }
}
</style>
