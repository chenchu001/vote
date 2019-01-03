<template>
    <div class="v-shop">
        <div class="left">
            <span class="text">已选：<b>{{this.$store.state.total}}</b>个</span>
        </div>
        <div class="right">
            <span class="text" @click.stop="handleClickSubmit" :class="{'active':this.$store.state.total == 10}">投票</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-shop",
        data () {
            return {
                total: 0
            }
        },
        methods: {
            handleClickSubmit () {
                if (this.$store.state.total < 10) {
                    return
                }
            }
        },
        watch: {
            total (newVal) {
                console.log(newVal)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .v-shop
        position: fixed
        width: 7.5rem
        height: 1.14rem
        left: 50%
        margin-left: -3.75rem
        display: flex
        bottom: 0
        background: #0255c7
        padding: 0 .6rem
        box-sizing: border-box
        align-items: center
        justify-content: space-between
        color: #fff
        .right
            .text
                background: #ccc
                display: block
                width: 1.2rem
                height: .52rem
                line-height: .52rem
                text-align: center
                border-radius: 4px
                &.active
                    background: #e2c101
</style>