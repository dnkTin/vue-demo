import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Sortable from 'Sortable'

Vue.use(ElementUI);
Vue.use(Sortable)
new Vue({
  el: '#app',
  render: h => h(App)
})
