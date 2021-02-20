/* 路由对象模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由懒加载方式加载
const MSite = () => import('../pages/MSite/MSite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')
const Login = () => import('../pages/Login/Login.vue')
const Shop = ()=> import('../pages/Shop/Shop.vue')
const ShopGoods = ()=> import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopInfo = ()=> import('../pages/Shop/ShopInfo/ShopInfo.vue')
const ShopRatings = ()=> import('../pages/Shop/ShopRatings/ShopRatings.vue')

// 1.声明使用路由
Vue.use(VueRouter)

// 2.配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      component: MSite
    },
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ],
  mode: 'history'
})

// 3.导出路由
export default router