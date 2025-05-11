import router from './helpers/router';
import { getStore } from './helpers/helpers';

const Vue = () => import('vue');
Vue().then(VuePromise => {
    const VueClass = VuePromise.default
    const UIKit = () => import('uikit');
    const Vuex = () => import('vuex');
    const Icons = () => import('uikit/dist/js/uikit-icons');
    const vuelidationConfig = () => import('./helpers/vuelidationConfig');
    const handleServiceWorkers = () => import("./helpers/handleServiceWorkers");
    const initDeps = () => import("./helpers/dependencies");
    const App = () => import('./App')
    initDeps();
    handleServiceWorkers().then(x => x.serviceWorkerAdd());
    vuelidationConfig().then(validationInitPromise => validationInitPromise.validationInit());
    Icons().then(IconsPromise => {
        UIKit().then(UIKitPromise => {
            UIKitPromise.use(IconsPromise.default)
            VueClass.prototype.$uikit = UIKitPromise;
        });
    });
    VueClass.config.productionTip = false;
    Vuex().then(VuexPromise => {
        VueClass.use(VuexPromise);
        window.app = new VueClass({
            router,
            store: getStore(),
            render: h => h(App)
        }).$mount('#app');
    })
})
