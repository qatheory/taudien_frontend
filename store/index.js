// import Cookies from "js-cookie"
// import axios from 'axios'
// import authenticate from "~/components/_services/authenticate.js"
// import categoryServices from "~/components/_services/categories.js"
// import Posts from "~/components/_services/posts"
// import Constant from "~/components/_helpers/constant"
// import moment from "moment"
import commonFunc from '@/_helpers/common.js'
export const state = () => ({
  // App state
  rightDrawer: false,
  // item state
  itemTags: [0, 1, 2],
})

export const getters = {
  getItemTags: (state) => commonFunc.getItemTags(state.itemTags),
}

export const mutations = {
  toggleRightDrawer(state) {
    state.rightDrawer = !state.rightDrawer
  },
  setRightDrawer(state, payload) {
    state.rightDrawer = payload
  },
}

export const actions = {
  toggleRightDrawer({ commit }) {
    commit('toggleRightDrawer')
  },
  setRightDrawer({ commit }, payload) {
    commit('setRightDrawer')
  },
}

// export const strict = false
