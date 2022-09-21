import {defineStore} from 'pinia'

export const useLeftSidebarStore = defineStore('leftSidebarStore', {
    state() {
        return {
            width: 20,
            activeIndex: 0,
            activeComponentList: [
                "DbNav", "DbObjects"
            ],
            componentListOne: [
                "DbNav",
            ],
            componentListTwo: [
                "DbObjects",
            ],
            addSidebarItem: null,
            removeSidebarItem: null
        }
    },
    getters: {
        getActiveComponent(state) {
            return state.componentList[state.activeIndex];
        }
    },
    actions: {}
})