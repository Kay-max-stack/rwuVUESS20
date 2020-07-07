import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



//Komponenten Global registrieren um sie überall im Project verwenden zu können
import CardComp from './components/CardComp.vue';
import TitleComp from './components/TitleComp.vue';
import BeerCardComp from './components/BeerCardComp.vue';
import DropdownComp from './components/DropdownComp.vue';

Vue.component('CardComp', CardComp)
Vue.component('TitleComp',TitleComp)
Vue.component('BeerCardComp',BeerCardComp)
Vue.component('DropdownComp',DropdownComp)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
