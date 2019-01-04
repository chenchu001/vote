<template>
    <div class="v-shop">
        <div class="left">
            <span class="text">已选：<b>{{this.$store.state.total}}</b>个</span>
        </div>
        <div class="right">
            <span class="text" @click.stop="handleClickSubmit" :class="{'active':this.$store.state.total >0 && this.$store.state.total < 11}">投票</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    const start = Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime()))
    const end = Date.parse(new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 -1))
    export default {
        name: "v-shop",
        data () {
            return {
                total: 0,
                arr: []
            }
        },
        methods: {
            handleClickSubmit () {
                if (localStorage.getItem('endTime') && localStorage.getItem('endTime') < start) {
                    localStorage.clear()
                }
                let endTime = localStorage.getItem('endTime') || end
                let nowTime = Date.parse(new Date())
                if (nowTime < endTime) {
                    localStorage.setItem('endTime', nowTime)
                } else {
                    alert('您今天已经投过票啦!')
                    this.$store.commit('clearData')
                    this.$emit('clearDatas')
                    return
                }
                if (this.$store.state.total < 1) {
                    return
                }
                if (this.$store.state.total > 9) {
                    return
                }
                this.arr = this.$store.state.arr
                let ret = this.arr.join(",")
                axios.post('/api/index.php?actname=addvote',"ids="+ret).then((res) => {
                    if (res.data.errcode === "0000") {
                        alert('投票成功')
                        location.reload()
                    }
                })
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
        width: 8.3rem
        height: 1.14rem
        left: 50%
        margin-left: -4.15rem
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