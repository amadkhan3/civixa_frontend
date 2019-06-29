import Vue from 'vue'
import Router from 'vue-router'

import auth from './middleware/auth'
import log from './middleware/log'


import HomeView from './views/HomeView'
import ClientLoginView from './views/ClientLoginView'
import ClientSignupView from './views/ClientSignupView'
import AnnotatorSignupView from './views/AnnotatorSignupView'
import AnnotatorLoginView from './views/AnnotatorLoginView'
import ClientDashboard from './views/ClientDashboardView'
import ClientCreate from './views/ClientCreateView'
import ClientManage from './views/ClientManageView'
import ManageClientData from './views/ManageClientDataView.vue'

import { userInfo } from 'os'


Vue.use(Router)

const router =  new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
          middleware: log,
          title: 'Home'
          },
        },
        {
          path: 'client/login',
          name: "client_login",
          component: ClientLoginView,
          // meta: {
          //   middleware: log,
          // }
        },
        {
          path: '/client/signup',
          name: "client_signup",
          component: ClientSignupView
        },
    ]
    },
    {
      path: '/client/dashboard',
      name: "client_dashboard",
      component: ClientDashboard,
      props: true,
      meta: {
        middleware: [ auth, log ]
      }
    },
    {
      path: '/client/dataset/new',
      name: "client_create",
      component: ClientCreate,
      props: true,
      meta: {
        middleware: [ auth, log ]
      }
    },
    {
      path: '/client/data/manage',
      name: "client_manage",
      component: ClientManage,
      meta: {
        middleware: [ auth, log ]
      }
    },
    {
      path: '/client/manage/:id',
      name: "manage_client_data",
      component: ManageClientData,
      props: { default: true },
      meta: {
        middleware: [ auth, log ]
      }
    },
    {
      path: '/annotator/signup',
      name: "annotator_signup",
      component: AnnotatorSignupView
    },
    {
      path: '/annotator',
      name: "annotator_login",
      component: AnnotatorLoginView
    }
  ]
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if (!subsequentMiddleware) return context.next;
  
    return (...parameters) => {
      // Run the default Vue Router `next()` callback first.
      context.next(...parameters);
      // Then run the subsequent Middleware with a new
      // `nextMiddleware()` callback.
      const nextMiddleware = nextFactory(context, middleware, index + 1);
      subsequentMiddleware({ ...context, next: nextMiddleware });
    };
  }
  
  router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];
  
      const context = {
        from,
        next,
        router,
        to,
      };
      const nextMiddleware = nextFactory(context, middleware, 1);
  
      return middleware[0]({ ...context, next: nextMiddleware });
    }
  
    return next();
  });
  

export default router;

