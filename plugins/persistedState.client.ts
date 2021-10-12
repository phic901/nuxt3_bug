import type { Context } from '@nuxt/types'
import createPersistedState from 'vuex-persistedstate'

export default ({ store }: Context) => {
  createPersistedState({
    key: 'aa-new-aa',
    paths: ['newBookModule'],
  })(store)
}
