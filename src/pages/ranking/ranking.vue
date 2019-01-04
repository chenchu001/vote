<template>
    <div class="ranking">
        <v-banner></v-banner>
        <v-classify></v-classify>
        <div class="ranking-info">
            <div class="title">
                <i class="icon"></i>
                <span class="text">排行榜</span>
            </div>
            <ul class="content">
                <li v-for="(list, index) in rankArr" class="list">
                    <div class="left">
                        <span class="text">{{index+1}}</span>
                    </div>
                    <span class="middle">{{list.title}}</span>
                    <span class="right">{{list.vcount}}票</span>
                </li>
            </ul>
        </div>
        <!-- home -->
        <a href="javascript:;" class="home" @click.stop="returnHome"></a>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VBanner from 'base/v-banner/v-banner'
    import VClassify from 'base/v-classify/v-classify'
    import VFooter from 'base/v-footer/v-footer'
    import axios from 'axios'

    export default {
        name: "ranking",
        data () {
            return {
                rankArr: [
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    },
                    {
                        title: "省政府领导对我省食品药品安全工作作出重要批示",
                        number: 50000
                    }
                ]
            }
        },
        methods: {
            returnHome () {
                this.$router.push({path: '/index'})
            },
            _getRankList () {
                axios.post('/api/index.php?actname=getvotelist&order=vcount&sorts=desc').then((res) => {
                    if (res.data.errcode == "0000") {
                        this.rankArr = res.data.data
                    }
                }).catch(function (error) {
                    // 请求失败
                })
            }
        },
        components: {VBanner, VClassify, VFooter},
        created () {
            this._getRankList()
        }
    }
</script>

<style lang="stylus" scoped>
    .ranking
        width: 100%
        height: 100%
        .home
            position: fixed
            background: url('./home.png') no-repeat
            width: .8rem
            height: .8rem
            background-size: 100% 100%
            right: .18rem
            bottom: 1.5rem
        .ranking-info
            width: 100%
            padding: 0 .4rem 3rem
            box-sizing: border-box
            .title
                margin-top: .32rem
                width: 100%
                height: .7rem
                background: #025acf
                border-top-left-radius: 4px
                border-top-right-radius: 4px
                display: flex
                align-items: center
                justify-content: center
                .icon
                    background: url('./icon1.png') no-repeat
                    width: .29rem
                    height: .24rem
                    background-size: 100% 100%
                .text
                    font-size: .28rem
                    color: #fff
                    font-weight: 700
                    margin-left: .1rem
            .content
                width: 100%
                .list
                    width: 100%
                    display: flex
                    justify-content: center
                    align-items: center
                    padding: .3rem 0
                    box-siizng: border-box
                    background: #c3e3fb
                    &:nth-child(1)
                        .text
                            background: url('./icon2.png') no-repeat !important
                            background-size: 100% 100% !important
                    &:nth-child(2)
                        .text
                            background: url('./icon3.png') no-repeat !important
                            background-size: 100% 100% !important
                    &:nth-child(3)
                        .text
                            background: url('./icon4.png') no-repeat !important
                            background-size: 100% 100% !important
                    &:nth-child(even)
                        background: #fff
                    .left
                        flex: 0 0 1rem
                        width: 1rem
                        display: flex
                        justify-content: center
                        .text
                            width: .4rem
                            height: .4rem
                            border-radius: 3px
                            background: #016ae4
                            color: #fff
                            display: block
                            text-align: center
                            line-height: .4rem
                    .middle
                        flex: 1
                        line-height: 150%
                        font-size: .26rem
                    .right
                        flex: 0 0 1.5rem
                        width: 1.5rem
                        font-size: .26rem
                        display: flex
                        justify-content: center
</style>