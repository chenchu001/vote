<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<style lang="stylus">
    html, body
        width: 100%
        height: 100%
    #app
        width: 100%
        max-width: 7.5rem
        margin: 0 auto
</style>
