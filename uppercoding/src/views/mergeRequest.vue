<template>
  <!-- 合并请求 -->
  <div class="mt-8 mx-10">
    <!-- 导航 -->
    <div class="flex justify-between">
      <div class="w-[380px]">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="所有">
            <!-- 有数据 -->
            <div v-if="mergeglefa">123</div>
            <!-- 无数据 -->
            <div v-else class="fixed top-[20rem] left-[60rem]">
              <img
                src="https://codefever.pgyer.com/static/00000000000000/images/mergerequests-empty.png"
                alt=""
              />
              <div>未找到相关合并请求记录</div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="已打开" force-render>
            <!-- 有数据 -->
            <div v-if="mergeglefa">123</div>
            <!-- 无数据 -->
            <div v-else class="fixed top-[20rem] left-[60rem]">
              <img
                src="https://codefever.pgyer.com/static/00000000000000/images/mergerequests-empty.png"
                alt=""
              />
              <div>未找到相关合并请求记录</div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="3" tab="已合并">
            <!-- 有数据 -->
            <div v-if="mergeglefa">123</div>
            <!-- 无数据 -->
            <div v-else class="fixed top-[20rem] left-[60rem]">
              <img
                src="https://codefever.pgyer.com/static/00000000000000/images/mergerequests-empty.png"
                alt=""
              />
              <div>未找到相关合并请求记录</div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="4" tab="已关闭">
            <!-- 有数据 -->
            <div v-if="mergeglefa">123</div>
            <!-- 无数据 -->
            <div v-else class="fixed top-[20rem] left-[60rem]">
              <img
                src="https://codefever.pgyer.com/static/00000000000000/images/mergerequests-empty.png"
                alt=""
              />
              <div>未找到相关合并请求记录</div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="flex h-[35px] justify-between items-center">
        <!-- 搜索 -->
        <div>
          <a-input ref="userNameInput" v-model="userName">
            <a-icon slot="prefix" type="search" />
            <a-tooltip slot="suffix" title="Extra information"> </a-tooltip>
          </a-input>
        </div>
        <div class="ml-4 mr-8">
          <a-tooltip placement="top">
            <template slot="title">
              <span>排序</span>
            </template>
            <a-icon
              v-if="sortglefa"
              type="sort-ascending"
              class="text-[18px]"
            />
            <a-icon v-else type="sort-descending" class="text-[18px]" />
          </a-tooltip>
        </div>
        <a-button
          type="primary"
          @click="$router.push('/establishMergeRequest')"
        >
          创建合并并请求
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 搜索框
      userName: "",
      // 排序上下隐藏
      sortglefa: true,
      // 合并请求数据判断
      mergeglefa: false,
    };
  },
};
</script>
