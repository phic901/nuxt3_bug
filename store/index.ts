import { callOrReturn } from '@tiptap/core'
import { defineStore } from 'pinia'



export const useMainModule = defineStore({
  id: 'index',
  state: () => ({
    email: '',
    blurBackground: false,
    sidebar: {
      left: true,
      right: false,
    },
  }),
  getters: {
    getterSidebarView: (state) => state.sidebar,
  },
  actions: {
    setSidebarLeft() {
      this.sidebar.left = !this.sidebar.left
    },
    setSidebarsOpen() {
      this.sidebar.left = true
      this.sidebar.right = true
    },
    setSidebarRight() {
      this.sidebar.right = !this.sidebar.right
    },
  },
})
