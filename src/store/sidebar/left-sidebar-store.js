import {defineStore} from 'pinia'

export const useLeftSidebarStore = defineStore('leftSidebarStore', {
    state() {
        return {
            size: 20,
            activeIndex: 0,
            activeComponentList: [
                "DbNav"
            ],
            componentListOne: [
                "DbNav",
            ],
            componentListTwo: [

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