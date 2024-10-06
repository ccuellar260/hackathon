import Vue from 'vue'
import App from './App.vue'
import router from './router';  // Importa el router
import './assets/tailwind.css';
import './registerServiceWorker'


Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app');

