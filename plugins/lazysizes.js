import 'lazysizes'

export default ({ app }) => {
  app.router.afterEach((to, from) => {
    document.body.classList.add('lazyloaded')
  })
}
