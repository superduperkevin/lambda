import "./bootstrap"
import App from './App';
import router from "./router";
import {i18n} from 'lambda_platform/locale';
import {
    store
} from './store/store'

Vue.prototype.$init = window.init;
Vue.prototype.$user = window.init.user;
Vue.prototype.$logo = window.logo;

new Vue({
    components: {
        App
    },
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
