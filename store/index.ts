import { callOrReturn } from '@tiptap/core'
import { defineStore } from 'pinia'
import { apiService } from '~/services/api.services'
import {
  LanguageData,
  ReadTypeData,
  AccountData,
  contributeData,
  bookStatusData,
  genreData,
  countryData,
} from '~/types/api'
import { WriteData } from '~/types/write'

export * from './authModule'
export * from './authorModule'
export * from './modalComponent'
export * from './userModule'
export * from './bookReadersModule'
export * from './newBookModule'
export * from './shelfModule'
export * from './backendModule'

export const useMainModule = defineStore({
  id: 'index',
  state: () => ({
    email: '',
    languages: {} as LanguageData,
    readTypes: {} as ReadTypeData,
    accountTypes: {} as AccountData,
    contributeTypes: {} as contributeData,
    bookStatusTypes: {} as bookStatusData,
    genres: {} as genreData,
    countries: {} as countryData,
    writeTypes: {} as WriteData,
    blurBackground: false,
    sidebar: {
      left: true,
      right: false,
    },
  }),
  getters: {
    getterLanguage: (state) => state.languages,
    getterBlurBackground: (state) => state.blurBackground,
    getterReadTypes: (state) => state.readTypes,
    getteraccountTypes: (state) => state.accountTypes,
    getterContributeTypes: (state) => state.contributeTypes,
    getterSidebarView: (state) => state.sidebar,
    getterGenres: (state) => state.genres,
    getterCountries: (state) => state.countries,
    getterWriteTypes: (state) => state.writeTypes,
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
    height() {
      const setViewHeight = () => {
        if (process.client) {
          let vh = window.innerHeight * 0.01
          document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
      }

      setViewHeight()
      if (process.client) {
        window.addEventListener('resize', () => {
          setViewHeight()
        })
      }
    },
    async nuxtServerInit() {
      if (this.$nuxt.app.$auth.loggedIn) {
        console.log('asdasd');
        await this.height()
        // await this.getApiLanguages()
        // await this.getApiReadTypes()
        // await this.getApiAccountTypes()
        // await this.getApiPositionTypes()
        // await this.getApiContributeTypes()
        // await this.getApiBookStatus()
        // await this.getApiCountries()
      }
    },
    // async getApiLanguages() {
    //   console.log('getApiLanguages');
    //   const res = await apiService.getApiLanguages()
    //   // try {
       
    //   //   console.log('getApiLanguages222');
    //   //   // this.languages = res
    //   //   // return res
    //   // } catch (error) {
    //   //   console.log('hata');
    //   //   // this.$nuxt.$sentry.captureException(error)
    //   // }
    // },
    async getApiReadTypes() {
      const res = await apiService.getApiReadTypes()
      this.readTypes = res
      return res
    },
    async getApiAccountTypes() {
      const res = await apiService.getApiAccountTypes()
      this.accountTypes = res
      return res
    },
    async getApiContributeTypes() {
      const res = await apiService.getApiContributeTypes()
      this.contributeTypes = res
      return res
    },
    async getApiBookStatus() {
      const res = await apiService.getApiBookStatus()
      this.bookStatusTypes = res
      return res
    },
    async getApiCountries() {
      const res = await apiService.getApiCountries()
      this.countries = res
      return res
    },
    async getApiWriteTypes() {
      const res = await apiService.getApiWriteTypes()
      this.writeTypes = res
      return res
    },
    async getApiPositionTypes() {},
  },
})
