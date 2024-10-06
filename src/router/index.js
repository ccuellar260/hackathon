import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/SinfoniaS',
        name: 'SinfoniaS',
          component: () => import('../views/SinfoniaS.vue'),
      },
      {
        path: '/',
        redirect: '/SinfoniaS', // Redirige a la ruta de Dashboard
      },
      
      {
        path: '/PlanetaTierra',
        name: 'PlanetaTierra',
          component: () => import('../views/PlanetaTierra.vue'),
      },
      {
        path: '/Prueba',
        name: 'PruebaS',
          component: () => import('../views/Prueba.vue'),
      },
      {
        path: '/Video/create',
        name: 'VideoCreate',
          component: () => import('../views/VideoCreate.vue'),
      },
    
   
  ],
});
