import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./categories', false, /.*\.js$/));
const RouterView = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: '/categories',
    component: RouterView,
    meta: {
        breadcrumb: 'categories',
        route: 'administration.categories.index',
    },
    children: routes,
};
