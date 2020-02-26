import {
  AuthPage,
  CompleteSignup,
  DefaultLayout
} from './Loaders'

const routes = [
  /* *************** No Layout *************** */
  {
    path: '/',
    exact: true,
    component: DefaultLayout,
    title: 'Home',
    key: 'Home',
  },

  {
    path: '/auth',
    //   Layout: MainLayout,
    exact: true,
    component: AuthPage,
    title: 'welcome',
    key: 'welcome',
  },

  {
    path: '/auth/signup',
    exact: true,
    //   Layout: MainLayout,
    component: CompleteSignup,
    title: 'CompleteAuth',
    key: 'CompleteAuth',
  },
]
export default routes;