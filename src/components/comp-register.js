import SidebarFrame from './layout/SidebarFrame.vue';
import SidebarItemFrame from './layout/SidebarItemFrame.vue';
import CenterAreaFrame from './layout/CenterAreaFrame.vue'

export default {
    install(Vue) {
        Vue.component("SidebarFrame", SidebarFrame);
        Vue.component("SidebarItemFrame", SidebarItemFrame);
        Vue.component("CenterAreaFrame", CenterAreaFrame);
    }
}