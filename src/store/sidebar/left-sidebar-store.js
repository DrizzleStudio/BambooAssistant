import {defineStore} from 'pinia'

export const useLeftSidebarStore = defineStore('leftSidebarStore', {
    state() {
        return {
            // 是否收起状态
            isOpen: true,
            width: 20,
            activeIndex: 0,
            activeComponentListOne: [
                "DbNav"
            ],
            activeComponentListTwo: [
                // "DbObjects"
            ],
            componentListOne: [
                "DbNav",
                "DbObjects",
            ],
            componentListTwo: []
        }
    },
    getters: {
        getActiveComponent(state) {
            return state.componentList[state.activeIndex];
        }
    },
    actions: {
        closeSidebar() {
            this.isClosed = false;
        },

        openSidebar() {
            this.isClosed = true;
        },
    }
})