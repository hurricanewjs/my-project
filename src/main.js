import App from './App.vue'
import i18n from '@/i18n/i18n.js'
import Vue from 'vue'
import router from '@/router/index.js'
// import Vconsole from 'vconsole';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// const vConsole = new Vconsole()
// Vue.use(vConsole)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(ViewUI);
new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
