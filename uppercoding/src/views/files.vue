<template>
  <div class="px-[24px] py-[24px]">
    <div class="w-full h-[112px]">
      <!-- 上 -->
      <div class="flex justify-between">
        <div class="w-[300px] h-[64px] flex items-center justify-around">
          <a-avatar style="color: #f56a00"> A </a-avatar>
          <div>
            <p>{{ fullName }}</p>
            <p>这是一个测试项目。</p>
          </div>
        </div>
        <div class="w-[270px] h-[64px] flex justify-around items-center">
          <a-button-group>
            <a-button>Fork</a-button>
            <a-button type="primary"> 1 </a-button>
          </a-button-group>
          <a-popover placement="topRight">
            <template slot="content">
              <a-tabs default-active-key="1" @change="callback">
                <a-tab-pane key="1" tab="HTTPS">
                  <span> HTTPS 与 SSH 有什么区别 ? 了解更多</span>
                  <div class="mt-[10px]">
                    <a-input-search
                      placeholder="input search text"
                      size="large"
                      @search="onSearch"
                    >
                      <a-button slot="enterButton">
                        <a-icon type="copy"
                      /></a-button>
                    </a-input-search>
                  </div>
                </a-tab-pane>
                <a-tab-pane key="2" tab="SSH" force-render>
                  <span>
                    请确认客户端的 SSH Key 已经生成并且在 CodeFever 上正确设置。
                    了解更多
                  </span>
                  <div class="mt-[10px]">
                    <a-input-search
                      placeholder="input search text"
                      size="large"
                      @search="onSearch"
                    >
                      <a-button slot="enterButton">
                        <a-icon type="copy"
                      /></a-button>
                    </a-input-search>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </template>
            <a-button type="primary">克隆</a-button>
          </a-popover>
        </div>
      </div>
      <!-- 下 -->
      <div class="flex">
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="gitlab" />
          <span>提交</span>
        </a-button>
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="branches" />
          <span>分支</span>
        </a-button>
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="tag" />
          <span>标签</span>
        </a-button>
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="file-text" />
          <span>958.5 k Bytes</span>
        </a-button>
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="pull-request" />
          <span>0 合并请求</span>
        </a-button>
        <a-button type="link" class="text-[#7a859e] flex items-center">
          <a-icon type="user" />
          <span>0 成员</span>
        </a-button>
      </div>
    </div>
    <!-- 分支与搜索 -->
    <div class="my-[16px]">
      <!-- 分支与搜索 -->
      <ul class="flex items-center justify-between h-[32px]">
        <li class="h-[32px] w-[132px] flex justify-between items-center">
          <div class="mr-[16px]">
            <a-select
              default-value="master"
              style="width: 120px"
              @change="handleChange"
            >
              <a-select-option
                v-for="(item, index) in selecrBranch"
                :key="index"
                :value="item.name"
              >
                {{ item.name }}
              </a-select-option>
            </a-select>
          </div>
        </li>
        <li class="h-[32px]">
          <a-input ref="userNameInput" class="w-[250px]">
            <a-icon slot="prefix" type="search" />
          </a-input>
        </li>
      </ul>
      <!-- 更新时间 -->
      <ul
        class="h-[83px] w-[100%] mt-[16px] border-[1px] flex justify-between items-center border-solid border-[#e3e3e3] box-border px-[16px] pt-[4px]"
      >
        <li>
          <p class="mb-[4px] text-[#5b82b6]">wertuio</p>
          <div class="flex items-center">
            <a-avatar size="small" icon="user" class="mr-[8px]" />
            <p
              class="mb-[4px]"
              v-if="aBranch && aBranch.commit && aBranch.commit.commit"
            >
              {{ aBranch.commit.commit.committer.email }}
            </p>
            <p class="mb-[4px]" v-else>加载中...</p>
            <Icon
              icon="material-symbols:help-outline"
              style="color: #5b82b6"
              class="w-[14px] h-[14px] mx-[8px]"
            />
            <p>编辑于:{{ formattedCommitDate }}</p>
          </div>
        </li>
        <li class="h-[32px]">
          <a-button>
            <template>
              <div class="relative flex w-[150px]">
                <p>aa3148d9</p>
                <div class="absolute flex right-0 top-[4px]">
                  <p
                    class="w-[1px] h-[33px] bg-[#e4e4e4] absolute left-[-13px] top-[-9px]"
                  ></p>
                  <Icon icon="zondicons:copy" style="color: #636e94" />
                </div>
              </div>
            </template>
          </a-button>
        </li>
      </ul>
    </div>
    <!-- 表 -->
    <div class="mt-[20px]">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 40 }"
        :scroll="{ y: 440 }"
      />
    </div>
  </div>
</template>

<script>
import { getRepoTree, getcommits, branchAll, aBranch } from "@/service";
import dayjs from "dayjs";

const columns = [
  {
    title: "名称",
    dataIndex: "name",
    width: 150,
  },
];

// console.log(this.trees);

export default {
  data() {
    return {
      data: [],
      columns,
      trees: [],
      rootSubmenuKeys: ["sub1"],
      openKeys: [],
      selecrBranch: [], // 分支选择(所有分支)
      aBranch: [], // 单个分支
      owner: "zhangyibo111", // 仓库所属地址
      repo: "git-stuby", // 仓库路径
      branch: "master", //分支名称
      warehousePath: "",
    };
  },
  async created() {
    console.log();
    // 仓库的目录
    const res = await getRepoTree({
      owner: "zhangyibo111",
      repo: "git-stuby",
      sha: "master",
    });
    this.trees = res.data.tree;
    // console.log(this.trees);

    this.data = this.trees.map((item) => ({
      key: item.size,
      name: item.path,
      submit: "",
      update: "",
    }));

    this.selecrBranch = (
      await branchAll({
        owner: this.owner,
        repo: this.repo,
      })
    ).data;
    this.branch = this.selecrBranch.find((item) => item.name === "master").name;
    this.aBranch = (
      await aBranch({
        owner: this.owner,
        repo: this.repo,
        branch: this.branch,
      })
    ).data;
    // 仓库的所以提交
    // const res2 = await getcommits({
    //   owner: "zhangyibo111",
    //   repo: "git-stuby",
    // });
    // console.log(res2);
  },
  // watch: {
  //   async branch() {
  //     this.aBranch = (
  //       await aBranch({
  //         owner: this.owner,
  //         repo: this.repo,
  //         branch: this.branch,
  //       })
  //     ).data;
  //     this.warehousePath = this.aBranch.name;
  //     console.log(this.aBranch.name);
  //   },
  // },
  watch: {
    async branch() {
      // 第一个异步操作：获取分支信息
      this.aBranch = (
        await aBranch({
          owner: this.owner,
          repo: this.repo,
          branch: this.branch,
        })
      ).data;
      this.warehousePath = this.aBranch.name;
      console.log(this.aBranch.name);

      // 使用获取到的分支信息作为参数执行第二个异步操作
      const res = await getRepoTree({
        owner: "zhangyibo111",
        repo: "git-stuby",
        sha: this.warehousePath,
      });
      this.trees = res.data.tree;
      this.data = this.trees.map((item, index) => ({
        key: index, // 使用数组索引作为 key
        name: item.path,
        submit: "",
        update: "",
      }));
      // 执行完毕后，可以根据需要处理res
      console.log(res);
      // 做其他相关的事情...
    },
  },
  computed: {
    fullName() {
      return this.$route.query.name;
    },
    formattedCommitDate() {
      // 确保aBranch.commit.commit.committer.date存在
      if (
        this.aBranch &&
        this.aBranch.commit &&
        this.aBranch.commit.commit &&
        this.aBranch.commit.commit.committer &&
        this.aBranch.commit.commit.committer.date
      ) {
        return dayjs(this.aBranch.commit.commit.committer.date).format(
          "YYYY-MM-DD HH:mm:ss"
        ); // 使用你想要的格式
      }
      return "No date available"; // 如果日期不存在，返回一个默认值
    },
  },
  methods: {
    handleChange(value) {
      this.branch = value;
    },
    callback(key) {
      console.log(key);
    },
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style></style>
