import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import JobsList from "@/pages/JobsList";
import JobCard from "@/pages/JobCard";
import UsersList from "@/pages/UsersList";
import UserCard from "@/pages/UserCard";
import ResponsesList from "@/pages/ResponsesList";
import ResponseCard from "@/pages/ResponseCard";

const routes = [
  {
    path: "/",
    component: Main,
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
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  props: true,
});

export default router;
