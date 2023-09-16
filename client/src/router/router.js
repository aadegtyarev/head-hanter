import Main from "@/pages/Main"
import JobsList from "@/pages/JobsList"
import JobCard from "@/pages/JobCard"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/jobs",
        component: JobsList
    },
    {
        path: "/jobs/:id",
        component: JobCard
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    props: true
})

export default router;