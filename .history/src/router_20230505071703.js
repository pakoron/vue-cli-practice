import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomePage.vue';
import Users from './views/UsersPage.vue';


Vue.use(Router)

new Router({
    mode:"history",
    routes:[
        {path:'/',component:HomePage},
        {path:'/users',component:UsersPage},
        ]
});
