import {createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import UserPage from '@/pages/UserPage.vue';
import About from '@/pages/About.vue';
import PostIdPage from '@/pages/PostIdPage.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
//import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
     {
         path: '/posts',
         component: UserPage
     },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    //   {
    //      path: '/composition',
    //      component: PostPageCompositionApi
    //   },

]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;