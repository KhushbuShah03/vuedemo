import Vue from 'vue';
import Router from 'vue-router';

import Login from './Login.vue';
import Notes from './Notes.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    }
  ]
});
