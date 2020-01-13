// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import { cube } from './math.js';
function component() {
    var element = document.createElement('pre');
  
     element.innerHTML = [
      'Hello webpack!',
       '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
  
      return element;
    }
  
    document.body.appendChild(component())
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
