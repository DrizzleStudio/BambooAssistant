import {ref} from "vue";

export default {
    DbNav: {
        id: "DbNav",
        nav: {
            icon: "database",
            label: "" // 暂时不用文字
        },
        title: 'Databases',
        titleLeft: {
            name: "",
        },
        titleRight: {
            name: "",
        },
        scrollbarTop: {
            name: "DbNavSearch",
            ref: new ref()
        },
        scrollbarBody: {
            name: "DbNavTree",
            ref: new ref()
        },
    },
    DbObjects: {
        id: "DbObjects",
        nav: {
            icon: "dataset",
            label: "" // 暂时不用文字
        },
        title: 'Objects',
        titleLeft: {
            name: "",
        },
        titleRight: {
            name: "",
        },
        scrollbarTop: {
            name: "DbObjectsFilter",
            ref: new ref()
        },
        scrollbarBody: {
            name: "DbObjectsTree",
            ref: new ref()
        },
    }
}