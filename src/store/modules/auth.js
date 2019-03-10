import auth from '../../api/auth.js'

export default {
  state: {
    user: null,
    isLogin: false
  },
  getter: {},
  mutations: {
    setUser(state, data) {
      state.user = data.user
    },
    setLogin(state, data) {
      state.isLogin = data.isLogin
    }
  },
  actions: {
    async login({commit}, {username, password}) {
      let res = await auth.login({username, password})
      commit('setUser', {user: res.data})
      commit('setLogin', {isLogin: true})
    },
    async register({commit}, {username, password}) {
      let res = await auth.register({username, password})
      commit('setLogin', {isLogin: true})
      commit('setUser', {user: res.data})
    },
    async checkLogin({commit, state}) {
      if(state.isLogin) return true
      let res = await auth.getInfo()
      commit('setLogin', {isLogin: res.isLogin})
      if(!res.isLogin) return false
      commit('setUser', {user: res.data})
      return true
    },
    async logout({commit}) {
      await auth.logout()
      commit('setUser', {user: null})
      commit('setLogin', {isLogin: false})
    }
  }
}