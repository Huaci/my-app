import MainView from 'views/MainView'
import SyncView from 'views/SyncView'
import HomeView from 'views/HomeView'
import About from 'views/About'
import Loadable from 'react-loadable'

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/home',
        component: HomeView
      },
      {
        path: '/sync',
        component: SyncView
      },
      {
        path: '/login',
        component: SyncView
      },
      {
        path: '/async',
        component: Loadable({
          loader: () => import(`views/AsyncView`),
          // if you have your own loading component,
          // you should consider add it here
          LoadingComponent: () => null
        })
      }
    ]
  }, {
    path: '/about',
    component: About
  }
]
