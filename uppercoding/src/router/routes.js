import Login from "@/views/login.vue";
import Index from "@/views/index.vue";

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
];
