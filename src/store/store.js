import Vue from 'vue';
import Vuex from 'vuex';

//*表示将actions.js里所有内容都引入进来
// import * as actions from './actions';
// import * as getters from './getters';
// import * as mutations from './mutations';

//引入module文件中的三个属性文件
import menu from './module/menu';
import status from './module/status';
import users from './module/users';

Vue.use(Vuex)

export const store = new Vuex.Store({
   modules:{
       menu,status,users
   }
})