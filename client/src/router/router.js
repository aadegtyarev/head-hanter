import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import JobsList from "@/pages/JobsList";
import JobCard from "@/pages/JobCard";
import UsersList from "@/pages/UsersList";
import UserCard from "@/pages/UserCard";
import ResponsesList from "@/pages/ResponsesList";
import ResponseCard from "@/pages/ResponseCard";
import InterviewsList from "@/pages/InterviewsList";
import InterviewCard from "@/pages/InterviewCard";
import TestDocsList from "@/pages/TestDocsList";
import TestDocCard from "@/pages/TestDocCard";
import TestDocCreateForm from "@/pages/TestDocCreateForm";
import JobCreateForm from "@/pages/JobCreateForm";
import ResponseCreateForm from "@/pages/ResponseCreateForm";
import UserCreateForm from "@/pages/UserCreateForm";
import store from "@/store"
import useAuth from "@/hooks/useAuth";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/jobs",
        component: JobsList,
    },
    {
        path: "/job/:id",
        component: JobCard,
    },
    {
        path: "/job-create",
        component: JobCreateForm,
    },
    {
        path: "/user-create",
        component: UserCreateForm,
    },
    {
        path: "/users",
        component: UsersList,
    },
    {
        path: "/user/:id",
        component: UserCard,
    },
    {
        path: "/responses",
        component: ResponsesList,
    },
    {
        path: "/response/:id",
        component: ResponseCard,
    },
    {
        path: "/response-create",
        component: ResponseCreateForm,
    },
    {
        path: "/interviews",
        component: InterviewsList,
    },
    {
        path: "/interview/:id",
        component: InterviewCard,
    },
    {
        path: "/test-docs",
        component: TestDocsList,
    },
    {
        path: "/test-doc/:id",
        component: TestDocCard,
    },
    {
        path: "/test-doc-create",
        component: TestDocCreateForm,
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
    props: true,
});

const { checkToken, deleteToken } = useAuth()

router.beforeEach((to, from, next) => {
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);

    const loggedIn = store.state.auth.isAuth

    if (authRequired && !loggedIn && checkToken(store.state.auth.user_id)) {
        return next('/login');
    }

    next();
})

export default router;
