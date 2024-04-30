import Login from "@/views/login.vue";
import Info from "@/views/information.vue";
import Index from "@/views/index.vue"; // 文件页面
import Submit from "@/views/submit.vue"; // 提交页面
import MergeRequest from "@/views/mergeRequest.vue"; // 合并请求页面
import Branch from "@/views/branch.vue"; // 分支页面
import Task from "@/views/task.vue"; // 任务页面
import Label from "@/views/label.vue"; // 标签页面
import Member from "@/views/member.vue"; // 成员页面
import Trends from "@/views/trends.vue"; // 动态页面
import ConventionSetting from "@/views/convention.vue"; // 设置的常规页面
import BranchSetting from "@/views/branchSetting.vue"; // 设置的分支页面
import TaskSetting from "@/views/taskSetting.vue"; // 设置的任务页面
import WebhooksSetting from "@/views/webhooksSetting.vue"; // 设置的Webhooks页面
import SeniorSetting from "@/views/seniorSetting.vue"; // 设置的高级页面

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
    path: "/information",
    component: Info,
    children: [
      {
        path: "/information/index",
        component: Index,
      },
      {
        path: "/information/submit",
        component: Submit,
      },
      {
        path: "/information/mergeRequest",
        component: MergeRequest,
      },
      {
        path: "/information/branch",
        component: Branch,
      },
      {
        path: "/information/task",
        component: Task,
      },
      {
        path: "/information/label",
        component: Label,
      },
      {
        path: "/information/member",
        component: Member,
      },
      {
        path: "/information/trends",
        component: Trends,
      },
      {
        path: "/information/convention",
        component: ConventionSetting,
      },
      {
        path: "/information/branchSetting",
        component: BranchSetting,
      },
      {
        path: "/information/taskSetting",
        component: TaskSetting,
      },
      {
        path: "/information/webhooksSetting",
        component: WebhooksSetting,
      },
      {
        path: "/information/seniorSetting",
        component: SeniorSetting,
      },
    ],
  },
];
