<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
*, ::before, ::after {
    box-sizing: border-box;
}
body {
    padding: 0;
    margin: 0;
}
div#app {
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
}
</style>
