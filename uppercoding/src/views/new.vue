<template>
  <div>
    <div class="py-[24px] px-[48px]">
      <h2 class="p-[8px] text-[16px] text-[#2f354d] font-bold">新建仓库</h2>
      <div class="p-[8px]">
        <div class="p-[16px]">
          <a-form-model
            ref="ruleForm"
            :model="form"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="text-[14px] text-[#2f354d]"
          >
            <a-form-model-item prop="name" class="mb-0">
              <div class="text-[#2f354d] font-bold">仓库名称</div>
              <a-input
                v-model="form.name"
                placeholder="请输入仓库名称，只支持字母、数字、下划线(_)、中划线(-)和点(.)的组合"
              />
            </a-form-model-item>
            <div class="w-[58.3333%]">
              <div class="text-[#2f354d] font-bold leading-[40px]">仓库URL</div>
              <div class="flex items-start">
                <div class="w-[66.667%]">
                  <div
                    class="px-[14px] border rounded-[4px] text-[#000] flex items-center"
                  >
                    <div class="h-[30px] leading-[30px]">
                      https://gitee.com/
                    </div>
                    <div class="min-w-[32px]">
                      <a-select
                        style="width: 23vw"
                        @change="handleChange"
                        v-model="form.belong"
                      >
                        <!-- <a-select-option
                            v-for="item in belongs"
                            :key="item.id"
                            :value="item.login"
                          >
                          </a-select-option> -->
                      </a-select>
                    </div>
                    <div>
                      <p class="text-[#2f354d]">/</p>
                    </div>
                  </div>
                </div>
                <a-form-model-item
                  prop="store"
                  class="w-[33.333%] flex items-end mb-0 justify-between"
                >
                  <a-input
                    v-model="form.name"
                    placeholder="仓库表示串"
                    class="w-[136%]"
                  />
                </a-form-model-item>
              </div>
            </div>
            <a-form-model-item prop="desc" class="mb-0">
              <div class="text-[#2f354d] font-bold">仓库描述</div>
              <a-input
                v-model="form.desc"
                type="textarea"
                class="resize-none py-[6.5px] px-[16px] h-[108px]"
              />
            </a-form-model-item>
          </a-form-model>
          <div class="w-[58.333%] p-[8px]">
            <div
              class="text-right text-[#2f354d]"
              :class="{ 'text-red-500': form.desc.length > 200 }"
            >
              {{ form.desc.length }}/200
            </div>
          </div>
          <div class="w-[58.333%] p-[8px]">
            <button
              class="MuiButtonBase-root bg-[#3455db] text-[#fff]"
              @click="onSubmit"
            >
              确定
            </button>
            <button class="MuiButtonBase-root" @click="resetForm">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrganizations, createRepo } from "@/service";
export default {
  data() {
    return {
      organizations: [],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      form: {
        desc: "",
        name: "",
        belong: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入仓库名称",
            trigger: "blur",
          },
        ],
        // store: [
        //   {
        //     required: true,
        //     message: "请输入仓库标识",
        //     trigger: "blur",
        //   },
        // ],
        desc: [{ max: 200, message: "描述最多200字符", trigger: "blur" }],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const fd = new FormData();
          fd.append("access_token", this.$store.state.oauth.access_token);
          fd.append("name", this.form.name);
          fd.append("description", this.form.desc);

          const res = await createRepo(fd);
          console.log(res);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      this.redirectToCreate();
    },
    redirectToCreate() {
      this.$router.push({ path: "/repositories" });
    },
  },
  computed: {
    belongs() {
      console.log();
      return [this.$store.state.userInfo, ...this.organizations];
    },
    repoPath() {
      return `https://gitee.com/${this.form.belong}/${this.form.name}`;
    },
  },
  async created() {
    const res = await getOrganizations();
    console.log(res);
    this.organizations = res.data;
    console.log(this.organizations);
    console.log(this.$store.state.oauth.access_token);
  },
};
</script>
<style>
.ant-select-selection {
  border: none;
}
.MuiButtonBase-root {
  margin-left: 16px;
  color: #7a859e;
  border: 1px solid #dee2ec;
  padding: 2px 24px;
  height: 32px;
  line-height: 1.75;
  min-width: 104px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  align-items: center;
  float: right;
}
</style>
