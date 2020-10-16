import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
 
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
