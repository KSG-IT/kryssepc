<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import api from './api'

export default {
    name: 'App',

    mounted() {
        this.setProducts(api.getProducts())
    },

    methods: {
        ...mapMutations(['setProducts'])
    }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Lato';
    src: url('assets/fonts/Lato/Lato-Regular.ttf') format('truetype');
}

*, ::before, ::after {
    box-sizing: border-box;
}
body {
    padding: 0;
    margin: 0;
    background-color: black;
    font-family: 'Lato', arial, sans-serif;
}
div#app {
    width: 100vw;
    height: 100vh;
    color: white;
}
</style>
