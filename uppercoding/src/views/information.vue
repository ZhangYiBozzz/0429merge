<template>
  <a-layout class="font-[system-ui]">
    <a-layout-header
      class="h-[66px] asideStyle box-border px-[24px] pt-[17px] bg-[#fff] text-[rgba(0, 0, 0, 0.87)] border-solid border-b-[1px] border-[#dedede]"
    >
      <ul class="h-[32px] w-[100%] flex items-center justify-between">
        <!-- 头部的左边 -->
        <li class="flex items-center h-[32px]">
          <img
            src="https://codefever.pgyer.com/static/00000000000000/images/logo-light.png"
            class="h-[32px] mr-[48px] ml-[24px] cursor-pointer"
          />
          <div class="flex items-center mr-[24px] h-[32px]">
            <a-button
              class="border-[0px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
            >
              <template>
                <div class="flex h-[32px] items-center justify-around">
                  <span class="text-[14px] mr-[8px]">仓库</span>
                  <Icon icon="icon-park:down" />
                </div>
              </template>
            </a-button>
          </div>
          <div class="flex items-center mr-[30px] h-[32px]">
            <a-button
              class="border-[0px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
            >
              <template>
                <div class="flex h-[32px] items-center justify-around">
                  <span class="text-[14px] mr-[8px]">仓库组</span>
                  <Icon icon="icon-park:down" />
                </div>
              </template>
            </a-button>
          </div>
          <Icon
            icon="fluent-mdl2:branch-pull-request"
            style="color: #303133"
            class="w-[35px] h-[28px] p-[5px] rounded-[3px] hover:bg-[#e5ebfd] hover:text-[#3455db]"
          />
        </li>
        <!-- 头部的右边 -->
        <li class="w-[266px] h-[32px]">
          <ul class="flex items-center justify-between w-[266px] h-[32px]">
            <li>
              <Icon
                icon="icon-park-solid:add"
                class="w-[35px] h-[35px] p-[5px] rounded-[3px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
                style="color: #395ad4"
              />
            </li>
            <li><span class="block bg-[#e0e0e0] h-[24px] w-[1.5px]"></span></li>
            <li>
              <Icon
                icon="material-symbols:notifications-active-outline-rounded"
                style="color: #1b1b1b"
                class="h-[35px] w-[35px] p-[5px] rounded-[3px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
              />
            </li>
            <li>
              <Icon
                icon="material-symbols:help-outline"
                style="color: #1b1b1b"
                class="h-[35px] w-[35px] p-[5px] rounded-[3px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
              />
            </li>
            <li>
              <Icon
                icon="pepicons-pencil:internet"
                style="color: #1b1b1b"
                class="h-[35px] w-[35px] p-[5px] rounded-[3px] hover:bg-[#e5ebfd] hover:text-[#3455db] cursor-pointer"
              />
            </li>
            <li class="flex items-center cursor-pointer">
              <a-avatar
                class="mr-[14px]"
                v-if="userName"
                :src="userName.avatar_url"
              ></a-avatar>
              <a-avatar class="mr-[14px]" v-else>A</a-avatar>
              <Icon
                icon="fa6-solid:sort-down"
                class="w-[18px] h-[14px]"
                style="color: #1b1b1b"
              />
            </li>
          </ul>
        </li>
      </ul>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        class="w-[300px] h-[90vh] bg-[#f1f4f6]"
        style="width: 300px; max-width: 300px; flex: 0 0 300px"
      >
        <a-menu
          mode="inline"
          :open-keys="openKeys"
          class="w-[300px] box-border py-[23px] pr-[24px] bg-[#f1f4f6]"
          @openChange="onOpenChange"
        >
          <a-menu-item
            key="1"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="fa-solid:file-alt"
                class="w-[18px] h-[16px] mr-[10px]"
                style="color: #747988"
              />
              <span>文件</span>
            </div>
            <span></span>
          </a-menu-item>
          <a-menu-item
            key="2"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="ic:round-gps-fixed"
                class="w-[18px] h-[16px] mr-[10px]"
                style="color: #747988"
              />
              <span>提交</span>
            </div>
            <span>{{ submitNum }}</span>
          </a-menu-item>
          <a-menu-item
            key="3"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="fluent-mdl2:branch-pull-request"
                style="color: #303133"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>合并请求</span>
            </div>
            <span>{{ pullsNum }}</span>
          </a-menu-item>
          <a-menu-item
            key="4"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="ri:git-branch-fill"
                style="color: #303133"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>分支</span>
            </div>
            <span>{{ selecrBranch.length }}</span>
          </a-menu-item>
          <a-menu-item
            key="5"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="mage:alarm-clock-fill"
                style="color: #747988"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>任务</span>
            </div>
            <span>{{ taskNum }}</span>
          </a-menu-item>
          <a-menu-item
            key="6"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="pajamas:label"
                style="color: #303133"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>标签</span>
            </div>
            <span>{{ labelNum }}</span>
          </a-menu-item>
          <a-menu-item
            key="7"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="tdesign:member"
                style="color: #303133"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>成员</span>
            </div>
            <span>{{ memberNum }}</span>
          </a-menu-item>
          <a-menu-item
            key="8"
            class="flex text-[#8c91a0] justify-between box-border menuList"
          >
            <div class="flex items-center">
              <Icon
                icon="icon-park-solid:announcement"
                style="color: #747988"
                class="w-[18px] h-[16px] mr-[10px]"
              />
              <span>动态</span>
            </div>
            <span></span>
          </a-menu-item>

          <a-sub-menu key="sub1" class="setChildren">
            <span slot="title"><a-icon type="setting" /><span>设置</span></span>
            <a-menu-item key="9">常规</a-menu-item>
            <a-menu-item key="10">分支</a-menu-item>
            <a-menu-item key="11">任务</a-menu-item>
            <a-menu-item key="12">Webhooxs</a-menu-item>
            <a-menu-item key="12">高级</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout-content class="w-[100%] h-[90vh] bg-[#fff]">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {
  branchAll,
  aBranch,
  submitAll,
  memberAll,
  labelAll,
  taskAll,
  pullsAll,
  userInfo,
} from "@/service";

export default {
  async created() {
    // 获取所有分支
    this.selecrBranch = (
      await branchAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data;
    // 获取默认分支名
    this.branch = this.selecrBranch.find((item) => item.name === "master").name;
    // 获取单个分支
    this.aBranch = (
      await aBranch({
        owner: this.owner,
        repo: this.repo,
        branch: this.branch,
      })
    ).data;
    // 获取提交次数
    this.submitNum = (
      await submitAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data.length;
    //获取仓库所有成员人数
    this.memberNum = (
      await memberAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data.length;
    // 获取仓库所有标签数
    this.labelNum = (
      await labelAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data.length;
    // 获取仓库所有任务数
    this.taskNum = (
      await taskAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data.length;
    // 获取仓库合并请求次数
    this.pullsNum = (
      await pullsAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data.length;
    // 获取仓库合并请求次数
    this.userName = (await userInfo()).data;
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1"],
      openKeys: [],
      selecrBranch: [], // 分支选择(所有分支)
      aBranch: [], // 单个分支
      owner: "zhangyibo111", // 仓库所属地址
      repo: "git-stuby", // 仓库路径
      branch: "master", //分支名称
      submitNum: 0,
      memberNum: 0,
      labelNum: 0,
      taskNum: 0,
      pullsNum: 0,
      userName: null,
    };
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style scoped>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

.menuList {
  padding-right: 0px 30px;
  z-index: 21;
}

.ant-menu-inline .ant-menu-selected::after,
.ant-menu-inline .ant-menu-item-selected::after {
  transform: scaleY(1);
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #fff;
}

::v-deep .setChildren > ul {
  background-color: #f1f4f6 !important;
  padding-right: 24px;
}

::v-deep .setChildren > div > i {
  padding-right: 24px;
}

::v-deep .setChildren > div > span {
  display: flex;
  align-items: center;
}
</style>
