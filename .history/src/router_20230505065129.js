import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router)

new Router({
    routes:[
        {path:'/',component:Home},
        {path:'users',component:Users},
        {}]
});
