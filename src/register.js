/**
 *  此文件为了后面插件能力预留
 *  由于暂时没有想好自动注册组件的方案，全局组件暂时通过该文件注册进入vue
 *
 *  这里的组件更像是插件（plugin）
 */

import DbNav from './components/sidebar/DbNav.vue';
import DbObjects from './components/sidebar/DbObjects.vue';

export default {
    install(Vue) {
        Vue.component("DbNav", DbNav);
        Vue.component("DbObjects", DbObjects);
    }
}