import {createApp} from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-ignore
import {Splitpanes, Pane} from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import '@wangeditor/editor/dist/css/style.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import './style/style.css'


const app = createApp(App);

app.component("Splitpanes", Splitpanes);
app.component("Pane", Pane);

app.use(ElementPlus, {size: 'small'})
    .use(VXETable)
    .mount("#app");