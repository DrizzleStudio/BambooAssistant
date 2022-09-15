import {ref} from "vue";

export default {
    DbNav: {
        id: "DbNav",
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