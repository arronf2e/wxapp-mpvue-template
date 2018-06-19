// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/utils/api'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 2
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 2
    }
  },
  actions: {
    async getNewsList ({ state, commit }, init) {
      const news = await api.getNewsList()
      console.log(news, 'newsnews')
    },
  }
})

export default store
