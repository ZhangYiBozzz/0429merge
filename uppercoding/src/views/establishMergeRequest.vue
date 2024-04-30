<template>
  <!-- 创建合并请求 -->
  <div class="mt-8 mx-10">
    <div class="border-b text-[20px] text-[#000] pb-2">创建合并请求</div>
    <div class="flex justify-between mt-8">
      <div class="w-[49%] rounded-[8px] border">
        <!-- 标题 -->
        <div class="bg-[rgb(241,243,247)] py-[10px] pl-[10px]">原分支</div>
        <div class="p-[10px] flex justify-between">
          <a-select mode="tags" style="width: 49%" showArrow="true">
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
          <a-select
            mode="tags"
            style="width: 49%"
            placeholder="Tags Mode"
            showArrow="true"
          >
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <div class="w-[49%] rounded-[8px] border">
        <!-- 标题 -->
        <div class="bg-[rgb(241,243,247)] py-[10px] pl-[10px]">目标分支</div>
        <div class="p-[10px] flex justify-between">
          <a-select
            mode="tags"
            style="width: 49%"
            placeholder="Tags Mode"
            showArrow="true"
          >
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
          <a-select
            mode="tags"
            style="width: 49%"
            placeholder="Tags Mode"
            showArrow="true"
          >
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </div>
      </div>
    </div>
    <div class="absolute right-10 mt-8">
      <a-button type="primary" @click="$router.push('/mergeRequest')">
        Primary
      </a-button>
      <a-button type="primary" disabled> Primary(disabled) </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style>
.a-select {
  background-color: #fff;
}
</style>
