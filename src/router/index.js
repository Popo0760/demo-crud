import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from '@/components/HelloWorld'
import ListUsers from '@/view/admin/DanhSachUser/UserList'
import UserDetail from '@/view/admin/DanhSachUser/UserForm'

Vue.use(VueAxios, axios)
Vue.use(Router)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ElementUI)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/users',
            name: 'ListUsers',
            component: ListUsers
        },
        {
            path: '/user/:id',
            name: 'UserDetail',
            component: UserDetail
        }
    ]
})