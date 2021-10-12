# Lifecycle Hooks

beforeCreate = Not needed*
created = Not needed*
beforeMount = onBeforeMount
mounted = onMounted
beforeUpdate = onBeforeUpdate
updated = onUpdated
beforeUnmount = onBeforeUnmount
unmounted = onUnmounted
errorCaptured = onErrorCaptured
renderTracked = onRenderTracked
renderTriggered = onRenderTriggered

### Input Trim Ozelligi

trim="[^a-z0-9._]+"

https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf

### Flag - Bayraklar

https://flagpack.xyz/docs/development/vue/

### Bildirim

```

          this.app.$toast.show({
            type: 'success',
            title: 'Success',
            message: 'This is a successful login',
            timeout: 4,
          })


```

```
 // Languages
    const { result, loading: LanguageDataLoading, onResult } = useLanguagesQuery({ fetchPolicy: 'cache-and-network' })
    const dataLanguageSets = ref([])


    onResult((res) => {
      if (res.data) {
        dataLanguageSets.value = res.data.languages.page.edges.map((d: LanguagesQuery['languages']['page']['edges'][0]) => {
          return { value: d.node.id, label: d.node.name }
        })
      }
    })
```