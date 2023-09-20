import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import JobsList from "@/pages/JobsList";
import JobCard from "@/pages/JobCard";
import UsersList from "@/pages/UsersList";
import UserCard from "@/pages/UserCard";
import ResponsesList from "@/pages/ResponsesList";
import ResponseCard from "@/pages/ResponseCard";
import InterviewsList from "@/pages/InterviewsList";
import InterviewCard from "@/pages/InterviewCard";
import TestTemplatesList from "@/pages/TestTemplatesList";
import TestTemplateCard from "@/pages/TestTemplateCard";
import TestTemplateCreateForm from "@/pages/TestTemplateCreateForm";
import JobCreateForm from "@/pages/JobCreateForm";
import ResponseCreateForm from "@/pages/ResponseCreateForm";
import UserCreateForm from "@/pages/UserCreateForm";

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
    path: "/test-templates",
    component: TestTemplatesList,
  },
  {
    path: "/test-template/:id",
    component: TestTemplateCard,
  },
  {
    path: "/test-template-create",
    component: TestTemplateCreateForm,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  props: true,
});

export default router;
