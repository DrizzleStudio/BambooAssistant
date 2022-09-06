import SideBarFrame from './layout/SideBarFrame.vue';
import CenterAreaFrame from './layout/CenterAreaFrame.vue'

export default {
    install(Vue) {
        Vue.component("SideBarFrame", SideBarFrame);
        Vue.component("CenterAreaFrame", CenterAreaFrame);
    }
}