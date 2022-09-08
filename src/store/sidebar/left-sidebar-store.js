import {defineStore} from 'pinia'

export const userLeftSidebarStore = defineStore('leftSidebarStore', {
    state() {
        return {
            // 是否收起状态
            isOpen: true,
            width: 20,
            activeIndex: 0,
            componentList: [
                {
                    name: 'DatabaseManage',
                    title: 'DB Manage'
                }
            ]
        }
    },
    getters: {
        getActiveComponent(state){
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