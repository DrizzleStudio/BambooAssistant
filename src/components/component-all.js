import {ref} from "vue";

export default {
    DbNav: {
        id: "DbNav",
        // name: 'DbNav',
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
        // name: 'DbNav',
        title: 'Objects',
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
            name: "DbObjects",
            ref: new ref()
        },
    }
}