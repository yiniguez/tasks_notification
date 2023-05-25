import { createRouter, createWebHashHistory} from 'vue-router'
import Index from "../views/Index.vue" 

const 
routes = [
    {
        path: "/",
        name: Index,
        component: Index
    }
],

router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        //allways scroll to top
        return { top: 0 }
    }
})

export default router;
