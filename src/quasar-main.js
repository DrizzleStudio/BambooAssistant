import {Quasar} from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'

// Import icon libraries
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/dist/quasar.css'


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