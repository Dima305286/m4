import { createRouter, createWebHistory } from "vue-router";

let router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: () => import("./pages/Main.vue"),
        },
        {
            path: "/seasons",
            name: "seasons",
            component: () => import("./pages/Seasons.vue"),
        },
        {
            path:"/herous",
            name:"herous",
            component: () => import("./pages/Herous.vue"),
        },
    ],
});

export default router;