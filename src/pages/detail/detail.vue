<template>
    <div class="detail">
        <div class="detail-title">
            <h5>事件名称</h5>
            <p>省政府领导对我省食品药品安全工作作出重要批示</p>
            <div class="title-info">
                <div class="left">
                    <span class="text">NO.1</span>
                    <span class="piao">20000</span>票
                </div>
                <div class="right">
                    <span class="text" v-show="checked === 0">选择</span>
                    <span class="text-checked" v-show="checked === 1">已选择</span>
                </div>
            </div>
        </div>
        <div class="detail-info">
            <h5>事件详情</h5>
            <img src="https://p2.hbtv.com.cn/sketch3/js/plugins/umeditor/php2/upload/20180119/15163313303668.jpg" alt="" />
            <p>省委书记蒋超良对食品安全工作作出批示强调，“食品安全关系每个人的身体健康和生命安全，是全面建成小康社会的重要标志。面对当前依然十分严峻的食品安全形势，面对老百姓吃得放心、安心的期盼，各级党委、政府及有关部门要把食品安全作为一项重大政治任务和民生工程来抓，坚决贯彻落实习近平总书记关于食品安全工作的重要指示精神，牢固树立以人民为中心的发展理念，坚持党政同责、标本兼治，进一步夯实各方面、各环节的责任，落实‘四个最严’要求，不断提高食品安全监管水平和能力，切实保障人民群众‘舌尖上的安全’。”</p>
            <p>省委副书记、省长王晓东对食品安全工作作出批示强调，“食品安全关系国计民生，责任重于泰山，各地、各部门要认真贯彻落实习近平总书记重要指示、李克强总理重要批示精神，按照国务院食安委第四次全体会议要求，牢固树立以人民为中心的发展理念，始终把食品安全摆在突出重要的位置，时刻把责任记在心上、扛在肩上、抓在手上，下定决心、坚定信心、保持恒心，加快建立科学完善的食品安全治理体系。要突出问题导向，补齐发展短板，创新监管方式，加强能力建设，严格源头管控，坚持综合施策，在抓严、抓细、抓实上下功夫、见成效，严把从农田到餐桌的每一道防线，确保人民群众‘舌尖上的安全’，全面提升我省食品安全保障水平。”</p>
        </div>
        <!-- return -->
        <a href="javascript:;" class="return" @click.stop="returnVote"></a>
        <v-shop></v-shop>
    </div>
</template>

<script>
    import VShop from 'base/v-shop/v-shop'

    export default {
        name: "detail",
        data () {
            return {
                checked: 0
            }
        },
        methods: {
            returnVote () {
                this.$router.go(-1)
            }
        },
        created () {
            
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