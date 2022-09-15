import {defineStore} from 'pinia'
import {ref} from 'vue'

export const userLeftSidebarStore = defineStore('leftSidebarStore', {
    state() {
        return {
            // 是否收起状态
            isOpen: true,
            width: 20,
            activeIndex: 0,
            activeComponentList: [{
                id: "DbNav",
                // name: 'DbNav',
                title: 'Databases',
                titleLeft: {
                    name: "",
                },
                titleRight: {
                    name: "",
                },
                bodyScrollbarTop: {
                    name: "DbNavSearch",
                    ref: new ref()
                },
                body: {
                    name: "DbNavTree",
                    ref: new ref()
                },
            }],
            componentListOne: [
                {
                    name: 'DatabaseManage',
                    title: 'DB Manage',
                }
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