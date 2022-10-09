import {defineStore} from 'pinia'

export const useCenterAreaStore = defineStore('centerAreaStore', {
    state() {
        return {
            size: 70,
            activeIndex: 0,
            activeComponentName: "SqlEdit",
            componentList: [
                {
                    name: "SqlEdit",
                    label: "sql 编辑器",
                    tabId: "SqlEdit-01",
                    data: null,
                },
                {
                    name: "DataTable",
                    label: "表视图",
                    tabId: "DataTable-01",
                    data: null,
                }
            ]
        }
    },
    getters: {},
    actions: {}
})