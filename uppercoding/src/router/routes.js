import Login from "@/views/login.vue";
import Index from "@/views/index.vue";
import Info from "@/views/information.vue";

export default [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/information",
    component: Info,
  },
];
