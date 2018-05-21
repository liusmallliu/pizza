import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'


//配置routes，路由的路径
export const routes = [                
    {path:'/',name:'homeLink',components:{
        default : Home,
        'orderingGuide' : OrderingGuide,
        'history' : History,
        'delivery' : Delivery
    }},
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin},
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:'/about/contact',name:'contactLink',component:Contact},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/history',name:'historyLink',component:History},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
    ]},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'*',redirect:'/'},      
  
  ]
  
