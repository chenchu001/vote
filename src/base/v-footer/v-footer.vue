<template>
    <div class="v-footer">
        <router-link to="/vote" tag="div" class="item">
            <i class="icon"></i>
            <span class="text">全部参赛</span>
        </router-link>
        <router-link to="ranking" tag="div" class="item">
            <i class="icon"></i>
            <span class="text">当前排名</span>
        </router-link>
        <router-link to="rule" tag="div" class="item">
            <i class="icon"></i>
            <span class="text">活动规则</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "v-footer",
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus">
    .v-footer
        width: 7.5rem
        height: 1.14rem
        background: #0255c7
        position: fixed
        bottom: 0
        left: 50%
        margin-left: -3.75rem
        display: flex
        .item
            display: flex
            flex: 1
            flex-direction: column
            align-items: center
            justify-content: center
            color: #fff
            .icon
                background: url('./icon1.png') no-repeat
                width: .46rem
                height: .46rem
                background-size: 100% 100%
                display: block
                margin-bottom: .1rem
            &.router-link-active
                background: #00379d
            &:nth-child(2)
                .icon
                    background: url('./icon2.png') no-repeat
                    width: .51rem
                    height: .46rem
                    background-size: 100% 100%
            &:nth-child(3)
                .icon
                    background: url('./icon3.png') no-repeat
                    width: .47rem
                    height: .35rem
                    background-size: 100% 100%
</style>