import {createApp} from "vue";
import App from "./App.vue";
import {createPinia} from 'pinia';
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
// @ts-ignore
import compRegister from './components/comp-register.js'

import QuasarMain from './quasar-main.js'

// @ts-ignore
import globalComponentsRegister from '/src/config/global-components-register.js'


const app = createApp(App);
globalComponentsRegister(app);

app.component("Splitpanes", Splitpanes);
app.component("Pane", Pane);

app.use(ElementPlus, {size: 'small'})
    .use(createPinia())
    .use(VXETable)
    .use(compRegister)
    .use(QuasarMain)
    .mount("#app");
