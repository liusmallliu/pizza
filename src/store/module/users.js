const state = {
    currentUser: null
}
const getters = {
    currentUser: state => state.currentUser
}
const mutations = {
    
}
const actions = {
    //应用mutation
    setUser({ commit }, user) {
        commit("userStatus", user)
    }
}

export default {
    state, getters, mutations, actions
}