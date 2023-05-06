import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import UsersPage from './views/UsersPage.vue';


Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {path:'/',component:HomePage},
        {path:'/users',component:UsersPage},
        ]
});
