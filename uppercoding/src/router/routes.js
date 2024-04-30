import Login from "@/views/login.vue";
import Index from "@/views/index.vue";
import Info from "@/views/information.vue";
import mergeRequest from "@/views/mergeRequest.vue";
import establishMergeRequest from "@/views/establishMergeRequest.vue";
import member from "@/views/member.vue";

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
    children: [
      {
        path: "/mergeRequest",
        component: mergeRequest,
      },
      {
        path: "/establishMergeRequest",
        component: establishMergeRequest,
      },
      {
        path: "/member",
        component: member,
      },
    ],
  },
];
