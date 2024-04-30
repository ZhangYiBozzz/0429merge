import Login from "@/views/login.vue";
import Index from "@/views/index.vue";
import Info from "@/views/information.vue";
import Repositories from "@/views/repositories.vue";
import New from "@/views/new.vue";

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
  {
    path: "/repositories",
    component: Repositories,
    // children: [
    //   {
    //     path: "/new",
    //     component: New,
    //   },
    // ],
  },
  {
    path: "/new",
    component: New,
  },
];
