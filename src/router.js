import {createRouter, createWebHistory} from "vue-router";
import store from './store/index';

import Dashboard from "@/pages/Dashboard.vue";
import Login from "@/pages/Login.vue";
import Message from "@/pages/Message.vue";
import Project from "@/pages/Project.vue";
import Team from "@/pages/Team.vue";
import Analitic from "@/pages/Analitic.vue";
import Order from "@/pages/Order.vue";
import Profile from "@/pages/Profile.vue";
import Projects from "@/pages/Projects.vue";
import Sprint from "@/pages/Sprint.vue";

const routes = [
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/',
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: '/sprint',
        name: "Sprint",
        component: Sprint
    },
    {
        path: '/message',
        name: "Message",
        component: Message
    },
    {
        path: '/project',
        name: "Projects",
        component: Projects,
    },
    {
        path: '/project/:id',
        name: "Project",
        component: Project,
    },
    {
        path: '/team',
        name: "Team",
        component: Team
    },
    {
        path: '/analitic',
        name: "Anatitic",
        component: Analitic
    },
    {
        path: '/order',
        name: "Order",
        component: Order
    },
    {
        path: '/profile',
        name: "Profile",
        component: Profile
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    // scrollBehavior: () => {
    //     return { top: 0 }
    // },
    routes
})

router.beforeEach( async (to, from, next) => {
    // console.log(store.state.isAuthenticated)
    const isAuthenticated = store.state.isAuthenticated;
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else if (to.name === 'Login' && isAuthenticated) next({ name: 'Dashboard' })
    else next()
})

export default router;