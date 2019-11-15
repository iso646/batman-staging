import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import devtools from '@vue/devtools'

import Vuesax from 'vuesax' 
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//general vue app
if (process.env.NODE_ENV === "development") {
  devtools.connect(/* host, port */);
}

//cordova app
// function onDeviceReady() {
//   devtools.connect("http://192.168.xx.yy"); // use your IP
// }

// if (window.location.protocol === "file:") {
//   document.addEventListener("deviceready", onDeviceReady, false);
// } else {
//   onDeviceReady();
// }
//https://github.com/vuejs/vue-devtools/blob/dev/packages/shell-electron/README.md