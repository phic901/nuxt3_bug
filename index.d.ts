// index.d.ts
import { Auth as NuxtAuth } from '@nuxtjs/auth-next'
import { User } from './types/types';

enum DateFormats {
  toDate = 'D MMM YYYY',
  toTime = 'HH:mm',
  toDateTime = 'D MMM YYYY HH:mm',
  toTimeDate = 'HH:mm D MMM YYYY',
}


declare module 'vue/types/vue' {
  interface Auth extends NuxtAuth {
    user: User & typeof NuxtAuth.prototype.user
    fetchUser(): Promise<User>

  }

}

declare module '@nuxt/types' {
  interface Auth extends NuxtAuth {
    user: User & typeof NuxtAuth.prototype.user
    $dayjs: Dayjs;
    fetchUser(): Promise<User>
  }
}

declare module 'vuex/types/index' {
  interface Auth extends NuxtAuth {
    user: User & typeof NuxtAuth.prototype.user
  }
}

interface Window {
  store: any;
  __NUXT__: any;
  $workbox: any;
}
