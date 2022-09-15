/**
 *  此文件为了后面插件能力预留
 *  由于暂时没有想好自动注册组件的方案，全局组件暂时通过该文件注册进入vue
 *
 *  这里的组件更像是插件（plugin）
 */

import DatabaseManage  from '/src/components/sidebar/database-manage/DatabaseManage.vue'

import DbNav  from '/src/components/sidebar/database-manage/DbNav.vue'
import DbObjects  from '/src/components/sidebar/database-manage/DbObjects.vue'

import DbNavTree  from '/src/components/sidebar/database-manage/DbNavTree.vue'
import DbNavSearch  from '/src/components/sidebar/database-manage/DbNavSearch.vue'

export default {
    install(Vue) {
        Vue.component("DatabaseManage", DatabaseManage);
        Vue.component("DbObjects", DbObjects);
        Vue.component("DbNav", DbNav);
        Vue.component("DbNavTree", DbNavTree);
        Vue.component("DbNavSearch", DbNavSearch);
    }
}