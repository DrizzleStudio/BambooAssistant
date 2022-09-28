import {defineStore} from 'pinia'

export const useCenterAreaStore = defineStore('centerAreaStore', {
    state() {
        return {
            size: 70,
            activeIndex: 0,
            activeComponentName: "",
            componentList: [
                {
                    name: "SqlEdit",
                    label: "",
                    tabId: "SqlEdit-01",
                    data: null,
                }
            ]
        }
    },
    getters: {},
    actions: {}
})