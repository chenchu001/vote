<template>
    <div class="detail">
        <div class="detail-title">
            <h5>事件名称</h5>
            <p>{{detailObj.title}}</p>
            <div class="title-info">
                <div class="left">
                    <span class="text">NO.{{detailObj.paiming}}</span>
                    <span class="piao">{{detailObj.vcount}}</span>票
                </div>
                <div class="right">
                    <span class="text" v-show="checked === 0" @click="handleClickCheck">选择</span>
                    <span class="text-checked" v-show="checked === 1" @click.stop="handleClickCancel">已选择</span>
                </div>
            </div>
        </div>
        <div class="detail-info">
            <h5>事件详情</h5>
            <img :src="detailObj.pic" alt="" />
            <p v-html="detailObj.content"></p>
        </div>
        <!-- return -->
        <a href="javascript:;" class="return" @click.stop="returnVote"></a>
        <v-shop v-on:clearDatas="clearDatas"></v-shop>
    </div>
</template>

<script>
    import VShop from 'base/v-shop/v-shop'
    import axios from 'axios'

    export default {
        name: "detail",
        data () {
            return {
                checked: 0,
                arr: [],
                id: 0,
                detailObj: {}
            }
        },
        methods: {
            clearDatas () {
                this.checked = 0
            },
            returnVote () {
                this.$router.go(-1)
            },
            handleClickCheck () {
                if (this.$store.state.total > 9) {
                    return
                }
                this.$store.commit('addTotal')
                this.$store.commit('addArr', this.id)
                this.arr = this.$store.state.arr
                this.checked = 1
            },
            handleClickCancel () {
                this.$store.commit('subTotal')
                this.$store.commit('subArr', this.id)
                this.arr = this.$store.state.arr
                this.checked = 0
            },
            // 获取数据
            _getDetailList () {
                axios.post('/api/index.php?actname=getvoteitem&id='+this.$route.params.id).then((res) => {
                    if (res.data.errcode == "0000") {
                        this.detailObj = res.data.data
                        // console.log(this.detailObj)
                    }
                }).catch(function (error) {
                    // 请求失败
                })
            }
        },
        created () {
            this._getDetailList()
            this.arr = this.$store.state.arr
            this.id = this.$route.params.id
            for (let i=0;i<this.arr.length;i++) {
                if (this.arr[i] === this.$route.params.id) {
                    this.checked = 1
                }
            }
        },
        components: {VShop}
    }
</script>

<style lang="stylus">
    .detail
        width: 100%
        height: 100%
        .detail-title
            padding: 0 .6rem
            box-sizing: border-box
            width: 100%
            overflow: hidden
            h5
                width: 1.54rem
                height: 0.46rem
                background: #006fed
                color: #fff
                font-size: 0.32rem
                text-align: center
                line-height: 0.46rem
                font-weight: 700
                margin-top: 0.34rem
                margin-bottom: 0.28rem
            p
                font-size: .3rem
                color: #000
                line-height: 150%
                padding-bottom: .14rem
                border-bottom: 1px solid rgba(7, 17, 27, .1)
            .title-info
                display: flex
                justify-content: space-between
                margin-top: .2rem
                .left
                    font-size: .3rem
                    color: #666
                    .piao
                        margin-left: .4rem
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
        .detail-info
            padding: 0 .6rem 3rem
            box-sizing: border-box
            width: 100%
            overflow: hidden
            h5
                width: 1.54rem
                height: 0.46rem
                background: #006fed
                color: #fff
                font-size: 0.32rem
                text-align: center
                line-height: 0.46rem
                font-weight: 700
                margin-top: 0.64rem
            img
                width: 100%
                margin-top: .3rem
            p
                line-height: 160%
                color: #666
                text-align: justify
                margin-top: .3rem
        .return
            position: fixed
            background: url('./return.png') no-repeat
            width: .8rem
            height: .8rem
            background-size: 100% 100%
            right: .18rem
            bottom: 1.5rem 
</style>