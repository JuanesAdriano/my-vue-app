import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import HelloWorldRouter from './components/HelloWorldRouter.vue'
import Card from './components/Card.vue'
import Buttons from './components/Buttons.vue'

//Após importar o Router, instanciei um novo objeto VueRouter
var router = new VueRouter({
   //no routes eu defino os caminhos da url para os componentes!!!!
    routes:[
        {path: '/', component: HelloWorldRouter},
        {path: '/card', component:Card },
        {path :'/buttons', component:Buttons }
    ]
});

Vue.use(VueResource);
//Puxando USE do router
Vue.use(VueRouter);

new Vue({
    el: '#app',
    //na criação do vue é passado o router criado como  objeto que instanciei lá em cima
    router: router,
    render: h => h(App)
})
