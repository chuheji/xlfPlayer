import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend'
import Rank from '@/components/rank'
import Love from '@/components/love'
import SongListDetail from '@/components/songlistdetail'
import Search from '@/components/search'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children: [
        {
          path: '/songlistdetail',
          name: 'SongListDetail',
          component: SongListDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/love',
      name: 'Love',
      component: Love
    },
    {
      path: '/songListDetail',
      name: 'SongListDetail',
      component: SongListDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
