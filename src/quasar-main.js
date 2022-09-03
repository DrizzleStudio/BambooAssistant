import {Quasar} from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import quasarIconSet from 'quasar/icon-set/material-symbols-outlined'

// Import icon libraries
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'

// Import Quasar css
import 'quasar/dist/quasar.css'
import './style/cover-quasar.css'


// export default (app) => {
//     app.use(Quasar, {
//         plugins: {}, // import Quasar plugins and add here
//         lang: quasarLang,
//         iconSet: quasarIconSet,
//     })
// }

export default {
    install(app) {
        app.use(Quasar, {
            plugins: {}, // import Quasar plugins and add here
            lang: quasarLang,
            iconSet: quasarIconSet,
        })
    }
}