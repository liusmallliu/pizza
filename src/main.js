import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter)

//配置axios的全局默认路径
axios.defaults.baseURL = 'https://wd7068517581xtlbvg.wilddogio.com/';

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
  render: h => h(App)
})
