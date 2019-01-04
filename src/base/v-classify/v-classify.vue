<template>
    <div class="v-classify">
        <div class="item">
            <span class="text">参赛数</span>
            <span class="num">20</span>
        </div>
        <div class="item">
            <span class="text">投票数</span>
            <span class="num">{{totalvote}}</span>
        </div>
        <div class="item">
            <span class="text">访问量</span>
            <span class="num">{{totalvisit}}</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "v-classify",
        data () {
            return {
                totalvisit: 0,
                totalvote: 0
            }
        },
        methods: {
            _getList () {
                axios.post('/api/index.php?actname=getvisitinfo').then((res) => {
                    if (res.data.errcode === "0000") {
                        res = res.data.data
                        this.totalvisit = res.totalvisit
                        this.totalvote = res.totalvote
                    }
                }).catch(function (error) {
                    
                })
            }
        },
        created () {
            this._getList()
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