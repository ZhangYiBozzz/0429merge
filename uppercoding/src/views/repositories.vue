<template>
  <div>
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
            <a-button class="border-[0px]">
              <template>
                <div class="flex h-[32px] items-center justify-around">
                  <span class="text-[14px] mr-[8px]">仓库</span>
                  <Icon icon="icon-park:down" />
                </div>
              </template>
            </a-button>
          </div>
          <div class="flex items-center mr-[30px] h-[32px]">
            <a-button class="border-[0px]">
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
            class="w-[25px] h-[18px]"
          />
        </li>
        <!-- 头部的右边 -->
        <li class="w-[266px] h-[32px]">
          <ul class="flex items-center justify-between w-[266px] h-[32px]">
            <li>
              <Icon
                icon="icon-park-solid:add"
                class="w-[25px] h-[25px]"
                style="color: #395ad4"
              />
            </li>
            <li><span class="block bg-[#e0e0e0] h-[16px] w-[1px]"></span></li>
            <li>
              <Icon
                icon="material-symbols:notifications-active-outline-rounded"
                style="color: #1b1b1b"
                class="h-[25px] w-[18px]"
              />
            </li>
            <li>
              <Icon
                icon="material-symbols:help-outline"
                style="color: #1b1b1b"
                class="w-[25px] h-[25px]"
              />
            </li>
            <li>
              <Icon
                icon="pepicons-pencil:internet"
                style="color: #1b1b1b"
                class="h-[25px] w-[18px]"
              />
            </li>
            <li class="flex items-center">
              <a-avatar class="mr-[14px]">Z</a-avatar>
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
    <div class="py-[12px] px-[36px]">
      <div class="flex flex-wrap">
        <div class="p-[12px] basis-[100%]">
          <div class="flex justify-between items-center">
            <a-menu v-model="current" mode="horizontal">
              <a-menu-item key="allstore" @click="allstore"> 所有 </a-menu-item>
              <a-menu-item key="participation" @click="participation">
                我参与的
              </a-menu-item>
              <a-menu-item key="creation" @click="creation">
                我创建的
              </a-menu-item>
            </a-menu>
            <div>
              <button
                class="bg-[#3455db] text-[#fff] px-[24px] py-[2px] h-[32px] min-w-[104px] rounded-[4px]"
                @click="redirectToCreate"
              >
                新建仓库
              </button>
            </div>
          </div>
        </div>
        <div class="p-[12px] basis-[100%]">
          <div
            class="h-[72px] cursor-pointer border-t border-b px-[24px] py-[16px] content-center flex hover:bg-[#E9EDF4]"
            v-for="item in tableData"
            :key="item.id"
            @click="Jump(item)"
          >
            <div class="basis-[41.667%] flex">
              <div class="pr-[8px]">
                <a-avatar shape="square" :size="40" :src="item.avatar_url">
                  A
                </a-avatar>
              </div>
              <div class="pl-[8px] flex flex-wrap">
                <div
                  class="h-[22px] leading-[22px] text-[#2f354d] basis-[100%]"
                >
                  <span v-html="formatName(item.full_name)"></span>
                  <span
                    v-if="checkOwner(item.id)"
                    class="ml-[10px] bg-[#319FFC] text-[#fff] px-[4px] text-[12px] font-normal rounded-[4px]"
                    >所有者</span
                  >
                </div>
                <div class="text-[#b1b6c3] h-[18px] leading-[20px]">
                  {{ item.description }}
                </div>
              </div>
            </div>
            <div class="basis-[25%] flex items-center text-[#7a859e]">
              <div class="w-[48px]">
                <span class="flex items-center"
                  ><Icon icon="icon-park-outline:fork" />{{
                    item.stargazers_count
                  }}</span
                >
              </div>
              <div class="w-[48px]">
                <span class="flex items-center"
                  ><Icon icon="pajamas:merge-request" />{{
                    item.testers_number
                  }}</span
                >
              </div>
              <div class="w-[48px]">
                <span class="flex items-center"
                  ><Icon icon="mingcute:user-4-line" />{{
                    item.watchers_count
                  }}</span
                >
              </div>
            </div>
            <div class="basis-[25%] flex items-center text-[#7a859e]">
              更新于:<span>{{
                dayjs(item.updated_at).format("YYYY年MM月DD日 hh:mm:ss")
              }}</span>
            </div>
            <div class="basis-[8.333%]">
              <button class="px-[8px] py-[7px]">
                <Icon icon="uil:setting" width="18px" height="18px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserRepos } from "@/service";
import dayjs from "dayjs";
export default {
  name: "repositories",
  data() {
    return {
      current: ["allstore"],
      tableData: [], //表格数据
      ownerIds: [],
    };
  },
  async created() {
    const res = await getUserRepos();
    this.tableData = res.data;
    const res1 = await getUserRepos({ affiliation: "owner" });
    this.ownerIds = res1.data.map((repo) => repo.id); // 将所有者的id存储在ownerIds数组中
  },
  components: {},
  methods: {
    // ZYB
    Jump(item) {
      this.$router.push({
        path: "/information/files",
        query: { name: item.full_name },
      });
    },
    // ZYB
    dayjs,
    formatName(fullName) {
      const parts = fullName.split("/");
      const boldPart = parts[1]
        ? `<span class="font-bold">${parts[1]}</span>`
        : "";
      return parts[0] + (boldPart ? "/" + boldPart : "");
    },
    checkOwner(id) {
      return this.ownerIds.includes(id);
    },
    async allstore() {
      const res = await getUserRepos({
        visibility: "all",
      });
      this.tableData = res.data;
    },
    async participation() {
      const res = await getUserRepos({
        type: "member",
      });
      this.tableData = res.data;
    },
    async creation() {
      const res = await getUserRepos({
        type: "owner",
      });
      this.tableData = res.data;
    },
    redirectToCreate() {
      this.$router.push({ path: "/new" });
    },
  },
  mounted() {},
};
</script>

<style></style>
