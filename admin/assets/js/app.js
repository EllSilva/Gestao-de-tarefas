import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_menu from './components/menu/home.js'
Vue.component('c-menu', page_menu)

import page_footer from './components/footer/home.js'
Vue.component('c-footer', page_footer)
 

import page_home from './view/home/home.js'
Vue.component('p-home', page_home) 

import page_conta from './view/perfil/conta.js'
Vue.component('p-conta', page_conta) 

import page_conta_edita from './view/perfil/conta-edita.js'
Vue.component('p-conta-edita', page_conta_edita) 
 
import page_privacidade from './view/privacidade/home.js'
Vue.component('p-privacidade', page_privacidade)

import page_projecto_grupo from './view/projecto/projecto-grupo.js'
Vue.component('p-projecto-grupo', page_projecto_grupo) 

import page_projecto from './view/projecto/projecto.js'
Vue.component('p-projecto', page_projecto) 
 
import page_projecto_cadastra from './view/projecto/projecto-cadastra.js'
Vue.component('p-projecto-cadastra', page_projecto_cadastra) 

Vue.use(Router)
 
const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/perfil/conta', component: { template: '<p-conta></p-conta>' } },
    { path: '/perfil/conta/editar', component: { template: '<p-conta-edita></p-conta-edita>' } },
    { path: '/politica-privacidade', component: { template: '<p-privacidade></p-privacidade>' } },

    { path: '/projecto/grupo', component: { template: '<p-projecto-grupo></p-projecto-grupo>' } },
    { path: '/projecto', component: { template: '<p-projecto></p-projecto>' } },
    { path: '/projecto/cadastra', component: { template: '<p-projecto-cadastra></p-projecto-cadastra>' } },
    
    
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()