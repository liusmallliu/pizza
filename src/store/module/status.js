const state = {
    isLogin: false
}
const getters = {
    isLogin: state => state.isLogin
}
const mutations = {
    //更改用户的状态信息
    userStatus(state, user) {
        //判断user是不是null,因为null是假，所以这里直接写user即可
        if (user) {
            state.currentUser = user
            state.isLogin = true
        } else {
            state.currentUser = null
            state.isLogin = false
        }
    }
}
const actions = {

}

export default {
    state, getters, mutations, actions
}