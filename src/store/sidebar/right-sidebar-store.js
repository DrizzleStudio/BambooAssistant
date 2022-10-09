import {defineStore} from 'pinia'

export const useRightSidebarStore = defineStore('rightSidebarStore', {
    state() {
        return {
            size: 20,
            activeIndex: 0,
            activeComponentList: [
                "DbObjects"
            ],
            componentListOne: [
                "DbObjects"
            ],
            componentListTwo: [],
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