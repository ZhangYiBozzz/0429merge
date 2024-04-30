<template>
  <!-- 合并请求 -->
  <div class="mt-8 mx-10">
    <!-- 导航 -->
    <div class="flex justify-between">
      <div class="w-[450px]">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="所有">
            <div class="fixed top-[150px] left-[340px] w-[96.3rem]">
              <div class="border px-8 mt-8 flex justify-between items-center">
                <div class="py-4 flex flex-col items-center">
                  <div class="flex justify-between items-center">
                    <a-avatar icon="user" size="small" />
                    <div class="mx-2">HUANQT</div>
                    <div>创建仓库</div>
                  </div>
                  <div class="mt-1 text-[#319FFC]">121231/123</div>
                </div>
                <div>编辑于：今天 上午 9:51</div>
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="提交动态" force-render> </a-tab-pane>
          <a-tab-pane key="3" tab="合并请求动态"> </a-tab-pane>
          <a-tab-pane key="4" tab="成员动态"> </a-tab-pane>
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
      </div>
    </div>
  </div>
</template>
<script>
import { mergeRequest } from "@/service";

const { log } = console;

export default {
  async created() {
    const getMergeRequest = await mergeRequest("zhangyibo111", "git-stuby");
    log(getMergeRequest);
  },

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
