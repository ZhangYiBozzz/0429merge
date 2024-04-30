import Login from "@/views/login.vue";
import files from "@/views/files.vue";
import information from "@/views/information.vue";
import submit from "@/views/submit.vue";
import repositories from "@/views/repositories.vue";

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
    path: "/repositories",
    component: repositories,
  },
  {
    path: "/information/:name",
    name: "information",
    component: information,
    children: [
      {
        path: "/information/files",
        component: files,
      },
      {
        path: "/information/submit",
        component: submit,
      },
    ],
  },
];
