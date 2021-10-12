import { defineNuxtMiddleware } from '@nuxtjs/composition-api'
import * as store from '~/store'

export default defineNuxtMiddleware(async () => {
  // const modules = Object.keys(store)
  // const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key]

  // if (process.server) {
  //   for (const module of modules) {
  //     const useModuleFn: Function = getKeyValue(module)(store)
  //     // load nuxtServerInit no each module that it exists on
  //     if (useModuleFn().nuxtServerInit) {
  //       await useModuleFn().nuxtServerInit()
  //     }
  //   }
  // }
})
