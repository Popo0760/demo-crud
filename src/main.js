// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment';

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI)
Vue.use(moment)
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/M/YYYY')
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})