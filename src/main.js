import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import About from './components/about/About';
import Login from './components/Login';
import Register from './components/Register';

Vue.use(VueRouter)

//配置routes，路由的路径
const routes = [                
  {path:'/',name:'homeLink',component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',component:About},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'},      

]

const router = new VueRouter({
  routes,
  mode:"history"
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
