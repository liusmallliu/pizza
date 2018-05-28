import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'

//如果store配置的js取名字是index.js，那么这里引入的时候直接写到./store就可以了，
// 否则要写到js的具体名称
import {store} from './store/store.js'

Vue.use(VueRouter)

//配置axios的全局默认路径
axios.defaults.baseURL = 'https://wd5762020806ywbquh.wilddogio.com/';

//配置Vue原型,下面这样配置后在任何一个页面都可以使用axios，不用每个页面都import导入axios了
Vue.prototype.http = axios

const router = new VueRouter({
  routes,
  mode:"history",
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:100}
    // return {selector : '.btn'}
    if(savedPosition){
      return savedPosition
    }else{
      return{x:0,y:0}
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
