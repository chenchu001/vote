import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import Rule from 'pages/rule/rule'
import Ranking from 'pages/ranking/ranking'
import Vote from 'pages/vote/vote'
import Detail from 'pages/detail/detail'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/rule',
            component: Rule
        },
        {
            path: '/ranking',
            component: Ranking
        },
        {
            path: '/vote',
            component: Vote,
        },
        {
            path: '/detail/:id',
            component: Detail
        }
    ]
})
