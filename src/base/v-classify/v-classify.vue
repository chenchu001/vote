<template>
    <div class="v-classify">
        <div class="item">
            <span class="text">参赛数</span>
            <span class="num">18</span>
        </div>
        <div class="item">
            <span class="text">投票数</span>
            <span class="num">36925</span>
        </div>
        <div class="item">
            <span class="text">访问量</span>
            <span class="num">142369</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-classify",
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .v-classify
        width: 100%
        display: flex
        height: 1.04rem
        background: #0255c7
        .item
            display: flex
            flex: 1
            flex-direction: column
            align-items: center
            justify-content: center
            color: #fff
            .text
                font-size: .26rem
            .num
                font-size: .26rem
                font-weight: 700
                margin-top: .1rem
</style>