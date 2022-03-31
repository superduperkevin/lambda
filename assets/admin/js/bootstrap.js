import Vue from 'vue';

import PortalVue from 'portal-vue'
import VueSlimScroll from 'vue-slimscroll'
import numeral from 'numeral'

import axios from "axios";
import {getDate} from "./utils/date";

window.Vue = Vue;
Vue.use(VueSlimScroll)
Vue.use(PortalVue)

// filters
Vue.filter('moment', function (value, type) {
    if (!value || Date.parse(value) === NaN) return '';
    const d = new Date(value);
    const date = d.toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];
    return type === 'date' ? `${date}` : type === 'time' ? `${time}` : `${date} ${time}`;
})

Vue.filter('empty', function (value) {
    return value || '--';
})

Vue.filter('currency', function (value, type, toFixed) {
    if (!value) return '0 ₮';
    var str = value.toFixed(toFixed).toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return type === 'number' ? str.join(".") : `${str.join(".")} ₮`;
})

Vue.filter('capitalize', function (value) {
    if (!value) return '0';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.filter('nameShort', function (value) {
    if (!value) return '';
    value = value.toString().split(' ');
    if (value.length < 2) return value[0].charAt(0).toUpperCase() + value[0].slice(1);
    return value[0].charAt(0).toUpperCase() + '. ' + value[1].charAt(0).toUpperCase() + value[1].slice(1);
})
Vue.filter("date", (value) => {
    return getDate(value);
});
Vue.filter("number", (value) => {
    let value2 = numeral(value);

    return value2.format('0,0');
});
Vue.filter("money", (value) => {
    let value2 = numeral(value);

    return value2.format('0,0.00');
});


window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.config.productionTip = false;

window.axios = axios;
