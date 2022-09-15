const modules = import.meta.glob('/src/components/sidebar/**/index.js', {eager: true})

export default (app) => {
    for (const path in modules) {
        for (let compName in modules[path]) {
            app.component(compName, modules[path][compName]);
        }
    }
};