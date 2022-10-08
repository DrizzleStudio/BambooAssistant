const modules = import.meta.glob('/src/components/sidebar/**/index.js', {eager: true});
const centerModules = import.meta.glob('/src/components/center-area/*.vue', {eager: true});

export default (app) => {
    for (const path in modules) {
        for (let compName in modules[path]) {
            app.component(compName, modules[path][compName]);
        }
    }

    for (const path in centerModules) {
        // debugger
        // for (let compName in modules[path]) {
            app.component(centerModules[path].default.__name, centerModules[path].default);
        // }
    }
};