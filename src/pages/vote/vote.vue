<template>
    <div class="vote">
        <v-banner></v-banner>
        <!-- 投票信息 -->
        <div class="vote-info">
            <div class="info-wrap">
                <div class="item">
                    <div class="top">
                        <i class="icon"></i>
                        <span class="text">参评事件</span>
                    </div>
                    <div class="bottom">
                        <span class="text">20</span>件
                    </div>
                </div>
                <div class="item">
                    <div class="top">
                        <i class="icon"></i>
                        <span class="text">投票数</span>
                    </div>
                    <div class="bottom">
                        <span class="text">0</span>票
                    </div>
                </div>
                <div class="item">
                    <div class="top">
                        <i class="icon"></i>
                        <span class="text">访问量</span>
                    </div>
                    <div class="bottom">
                        <span class="text">0</span>
                    </div>
                </div>
            </div>
            <div class="info-end">
                <i class="icon"></i>
                <p class="text">活动于<span class="time">2019</span>年<span class="time">1</span>月<span class="time">13</span>日<span class="time">24</span>时<span class="time">0</span>分<span class="time">0</span>秒</p>结束
            </div>
        </div>
        <!-- 投票规则 -->
        <div class="vote-rule">
            <h5>投票规则</h5>
            <div class="rule-wrap">
                <p class="desc">1. 投票规则：每个用户每天投1次，1次最多可选择10个事件进行投票（需投不同选项），每天可分别在省药监局官网、“楚天药闻”微信平台、长江云客户端及长江云全省110余个“云上系列”客户端每个渠道进行投票1次。</p>
                <p class="desc">2. 最终评选结果由网络投票票数决定。</p>
            </div>
        </div>
        <!-- 投票主体 -->
        <ul class="vote-main">
            <li class="list" v-for="(item, index) in voteArr" :key="index" @click="handleClickDetail(item.id, index)">
                <div class="num">{{index+1}}号</div>
                <img class="img" :src="item.pic" alt="" />
                <div class="main-bottom">
                    <p class="title">{{item.title}}</p>
                    <div class="bottom">
                        <div class="left">
                            <span class="piao">{{item.vcount}}</span>票
                        </div>
                        <div class="right">
                            <span class="text" @click.stop="handleClickCheck(index, item.id)">选择</span>
                            <!-- <span class="text" v-show="item.checked == 0" @click.stop="handleClickCheck(index, item.id)">选择</span> -->
                            <!-- <span class="text-checked" v-show="item.checked == 1" @click.stop="handleClickCancel(index, item.id)">已选择</span> -->
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <!-- home -->
        <a href="javascript:;" class="home" @click.stop="returnHome"></a>
        <v-shop></v-shop>
    </div>
</template>

<script>
    import VBanner from 'base/v-banner/v-banner'
    import VShop from 'base/v-shop/v-shop'
    import axios from 'axios'

    export default {
        name: "vote",
        data () {
            return {
                voteArr: [],
                arr: [],
                total: 0
            }
        },
        methods: {
            handleClickCheck (index, id) {
                for(let i=0;i<voteArr.length;i++) {
                    if (vateArr[i].id === id) {
                        
                    }
                }
                this.voteArr[index].checked = 1
                this.total++
                this.$store.commit('addTotal')
                this.$store.commit('addArr', id)
            },
            handleClickCancel (index, id) {
                this.voteArr[index].checked = 0
                this.total--
                this.$store.commit('subTotal')
                this.$store.commit('subArr', id)
            },
            returnHome () {
                this.$router.push({path: '/index'})
            },
            handleClickDetail (id, index) {
                this.$router.push({
                    path: '/detail/'+id
                })
            },
            // 获取数据
            _getVoteList () {
                axios.post('/api/index.php?actname=getvotelist').then((res) => {
                    console.log(res)
                    if (res.data.errcode == "0000") {
                        this.voteArr = res.data.data
                    }
                }).catch(function (error) {
                    // 请求失败
                })
            }
        },
        created () {
            Array.prototype.indexOf = function(val) { 
                for (var i = 0; i < this.length; i++) { 
                    if (this[i] == val) return i
                } 
                return -1
            }
            Array.prototype.remove = function(val) { 
                var index = this.indexOf(val) 
                if (index > -1) { 
                    this.splice(index, 1)
                } 
            }
            this._getVoteList()
        },
        watch: {
            arr (newVal) {
                
            }
        },
        components: {VBanner, VShop}
    }
</script>

<style lang="stylus" scoped>
    .vote
        width: 100%
        height: 100%
        .vote-info
            width: 100%
            height: 1.9rem
            background: #f5f5fa
            padding: 0 .15rem
            box-sizing: border-box
            overflow: hidden
            .info-end
                width: 100%
                display: flex
                margin-top: .2rem
                justify-content: center
                color: #9c0000
                font-weight: 700
                .icon
                    background: url('./icon4.png') no-repeat
                    width: .25rem
                    height: .25rem
                    background-size: 100% 100%
                .text
                    font-size: .26rem
                    color: #888
                    margin-left: .16rem
                    font-weight: 100
                    margin-right: .1rem
                    .time
                        color: #0255c7
                        font-weight: 700
                        margin: .06rem
            .info-wrap
                width: 100%
                height: 1.06rem
                background: #0255c7
                margin-top: .18rem
                display: flex
                align-items: center
                .item
                    flex: 1
                    display: flex
                    flex-direction: column
                    align-items: center
                    color: #fff
                    &:nth-child(1)
                        .icon
                            background: url('./icon1.png') no-repeat !important
                            width: .21rem !important
                            height: .26rem !important
                            background-size: 100% 100% !important
                    &:nth-child(3)
                        .icon
                            background: url('./icon3.png') no-repeat !important
                            width: .21rem !important
                            height: .26rem !important
                            background-size: 100% 100% !important
                    .top
                        .icon
                            background: url('./icon2.png') no-repeat
                            width: .26rem
                            height: .26rem
                            display: inline-block
                            vertical-align: middle
                            background-size: 100% 100%
                            margin-right: .1rem
                        .text
                            font-size: .26rem
                            display: inline-block
                            vertical-align: middle
                    .bottom
                        margin-top: .14rem
                        font-size: .26rem
                        .text
                            font-size: .3rem
                            font-weight: 700
                            margin-right: .1rem
        .vote-rule
            width: 100%
            padding: 0 .6rem
            box-sizing: border-box
            overflow: hidden
            h5
                width: 1.54rem
                height: .46rem
                background: #0256c9
                color: #fff
                border-radius: 4px
                text-align: center
                line-height: .46rem
                font-weight: 700
                margin: .3rem auto .24rem
            .rule-wrap
                width: 100%
                padding: .2rem .3rem
                border: 1px solid #ccddf4
                border-radius: 4px
                box-sizing: border-box
                .desc
                    text-align: justify
                    color: #666
                    line-height: 170%
                    font-size: .26rem
        .vote-main
            margin-top: .3rem
            width: 100%
            padding: 0 .6rem 3rem
            box-sizing: border-box
            overflow: hidden
            display: flex
            justify-content: space-between
            flex-wrap: wrap
            .list
                width: 48%
                margin-bottom: .3rem
                .num
                    width: 100%
                    height: .36rem
                    line-height: .36rem
                    color: #fff
                    background: #025ace
                    text-align: center
                img
                    width: 100%
                .main-bottom
                    height: 1.56rem
                    border: 1px solid #ccddf4
                    border-top: none
                    display: flex
                    padding: .14rem .15rem
                    box-sizing: border-box
                    flex-direction: column
                    justify-content: space-between
                    .title
                        font-size: .24rem
                        color: #000
                        line-height: 120%
                    .bottom
                        display: flex
                        justify-content: space-between
                        .left
                            font-size: .24rem
                            color: #666
                            .piao
                                font-size: .28rem
                                color: #0256c9
                                margin-right: .1rem
                        .right
                            .text,.text-checked
                               width: 1rem
                               height: .4rem
                               line-height: .4rem
                               background: #006eeb
                               color: #fff
                               text-align: center
                               display: block
                               border-radius: 4px
                               font-size: .26rem
                            .text-checked
                                background: #8eb200
        .home
            position: fixed
            background: url('./home.png') no-repeat
            width: .8rem
            height: .8rem
            background-size: 100% 100%
            right: .18rem
            bottom: 1.5rem   
</style>