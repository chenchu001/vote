<template>
    <div class="rule">
        <v-banner></v-banner>
        <v-classify></v-classify>
        <div class="rule-info">
            <h5>活动时间</h5>
            <p class="desc">2019年1月4日至13日</p>
            <h5>活动规则</h5>
            <p class="desc">1. 投票规则：每个用户每天投1次，1次最多可选择10个事件进行投票（需投不同选项），每天可分别在省药监局官网、“楚天药闻”微信平台、长江云客户端及长江云全省110余个“云上系列”客户端每个渠道进行投票1次。</p>
            <p class="desc" style="margin-top: .34rem;">2. 最终评选结果由网络投票票数决定。</p>
            <h5>活动流程</h5>
            <p class="desc">1.由省局推荐20项2018年全省药品监管工作的重要事件，具体素材要求为50字以内的工作总结和一张不低于1024*768像素的工作照片。</p>
            <p class="desc" style="margin-top: .34rem;">2.设计制作“湖北药品监管系统2018年十件大事等你来选”的专题（包含手机端专题和PC端专题），并对投票结果进行统计。</p>
            <p class="desc" style="margin-top: .34rem;">3.活动投票推广。活动在长江云客户端及长江云全省110余个“云上系列”客户端、“楚天药闻”微信平台和省局官网同步推广，扩大社会影响力，凝聚最大公约数。</p>
            <h5>投票方法</h5>
            <p class="desc">1.每个用户每天可分别在省药监局官网、“楚天药闻”微信平台、长江云客户端及长江云全省110余个“云上系列”客户端每个渠道进行投票，投票活动专题页面不设置在线评论推荐，投票票数在专题首页界面可视。</p>
            <p class="desc" style="margin-top: .34rem;">2.活动期间，将利用大数据对所有投票行为进行监控及研判，如发现恶意刷票行为，将记录相关行为的数据，并由省药监局进行处理。投票活动的最终解释权归省药监局所有。</p>
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

    export default {
        name: "rule",
        data () {
            return {

            }
        },
        methods: {
            returnHome () {
                this.$router.push({path: '/index'})
            }
        },
        components: {VBanner, VClassify, VFooter}
    }
</script>

<style lang="stylus" scoped>
    .rule
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
        .rule-info
            width: 100%
            padding: 0 .4rem 3rem
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
</style>