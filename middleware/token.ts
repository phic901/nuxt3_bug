import { defineNuxtMiddleware, computed, onMounted } from '@nuxtjs/composition-api'

export default defineNuxtMiddleware(async (context) => {
  if (context.app.$auth.$state.loggedIn) {
    // -- Authorized --
    // if (!login || insidePage(login) || pageIsInGuestMode) {
    // 	ctx.$auth.redirect('home');
    // }
    // Perform scheme checks.
    const { tokenExpired, refreshTokenExpired, isRefreshable } = context.app.$auth.check(true)
    // Refresh token has expired. There is no way to refresh. Force reset.
    if (refreshTokenExpired) {
      context.app.$auth.reset()
    } else if (tokenExpired) {
      // Token has expired. Check if refresh token is available.
      if (isRefreshable) {
        // Refresh token is available. Attempt refresh.
        await context.app.$auth.refreshTokens()
      } else {
        // Refresh token is not available. Force reset.
        context.app.$auth.reset()
      }
    }
    // -- Guest --
    // (Those passing `callback` at runtime need to mark their callback component
    // with `auth: false` to avoid an unnecessary redirect from callback to login)
  }
})
