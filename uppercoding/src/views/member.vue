<template>
  <!-- 成员管理 -->
  <div class="mt-8 mx-10">
    <div class="flex justify-end">
      <a-input placeholder="请输入被邀请人的邮箱" style="width: 400px" />
      <a-button type="primary"> 邀请成员 </a-button>
    </div>
    <div class="mt-8 rounded-[8px] border">
      <!-- 标题 -->
      <div
        class="bg-[rgb(241,243,247)] py-[10px] pl-[10px] flex justify-between"
      >
        <div>仓库成员</div>
        <div>电子邮箱</div>
        <div>角色</div>
      </div>
      <div class="p-[10px] flex justify-between items-center">
        <div class="flex items-center">
          <div>
            <a-avatar size="large" icon="user" />
          </div>
          <div class="mx-4">HUANQT</div>
          <div>
            <a-tag color="blue"> 你自己 </a-tag>
          </div>
        </div>
        <div class="w-[250px]">1603731928@qq.com</div>
        <div>所有者</div>
      </div>
    </div>
  </div>
</template>
