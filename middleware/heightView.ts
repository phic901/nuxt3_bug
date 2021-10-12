import { defineNuxtMiddleware, computed, onMounted } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware((context) => {
  // const setViewHeight = () => {
  //   if (process.client) {
  //     let vh = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty('--vh', `${vh}px`)
  //   }
  // }

  // setViewHeight()
  // if (process.client) {
  //   window.addEventListener('resize', () => {
  //     setViewHeight()
  //   })
  // }
})
