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

<style lang="scss" scoped>
*, ::before, ::after {
    box-sizing: border-box;
}
html, body {
    padding: 0;
    margin: 0;
}
</style>
