<template>
    <div class="index">
        <v-banner></v-banner>
        <v-classify></v-classify>
        <div class="index-info">
            <h5>活动目的</h5>
            <p class="desc">为展示新时代湖北药品监管工作取得的新成效，提升药品监管工作的公众参与度，更好地促进药品安全社会共享共治，湖北省药品监督管理局决定开展“2018年度药品监管十件大事”网络评选活动。</p>
            <h5>主办单位</h5>
            <p class="desc">湖北省药品监督管理局</p>
        </div>
        <div class="footer">
            <router-link to="/vote" tag="div" class="item active">
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
    </div>
</template>

<script>
    import VBanner from 'base/v-banner/v-banner'
    import VClassify from 'base/v-classify/v-classify'
    import axios from 'axios'

    export default {
        name: "index",
        data () {
            return {

            }
        },
        methods: {
            _getVisitList () {
                axios.post('/api/index.php?actname=addvisit').then((res) => {
                    
                }).catch(function (error) {
                    
                })
            }
        },
        components: {VBanner, VClassify},
        created () {
            this._getVisitList() 
        }
    }
</script>

<style lang="stylus" scoped>
    .index
        width: 100%
        height: 100%            
        .index-info
            width: 100%
            padding: 0 .4rem 2rem
            box-sizing: border-box
            h5
                width: 1.54rem
                height: .46rem
                background: #006fed
                color: #fff
                font-size: .32rem
                text-align: center
                line-height: .46rem
                font-weight: 700
                margin-top: .34rem
                margin-bottom: .28rem
            .desc
                font-size: .28rem
                line-height: 150%
                text-align: justify
        .footer
            width: 8.3rem
            height: 1.14rem
            background: #0255c7
            position: fixed
            bottom: 0
            left: 50%
            margin-left: -4.15rem
            display: flex
            .item
                display: flex
                flex: 1
                flex-direction: column
                align-items: center
                justify-content: center
                color: #fff
                &.active
                    background: #00379d
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