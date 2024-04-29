<template>
  <div
    class="w-full h-[100vh] pt-[90px] bg-[url('../../img/bj.png')] bg-cover relative"
  >
    <div class="absolute top-[10px] right-[50px]">
      <a-select default-value="zh" style="width: 120px" @change="handleChange">
        <a-select-option value="zh">简体中文</a-select-option>
        <a-select-option value="en">English</a-select-option>
      </a-select>
    </div>
    <div class="w-[1182px] h-[640px] m-auto flex">
      <div
        class="w-[649px] h-[640px] bg-[url('../../img/lan.png')] bg-cover relative"
      >
        <div class="w-[296px] h-[95px] absolute top-[170px] left-[100px]">
          <div class="h-[54px] flex items-center">
            <Icon
              icon="uil:gitlab"
              style="color: #fff"
              class="text-[53px] mr-[20px]"
            />
            <span class="text-[27px] text-white"
              ><span class="font-bold mr-[12px]">CODE</span>FEVER</span
            >
          </div>
          <div class="text-[14px] text-white mt-[18px]">
            不仅仅是Git代码库,更是研发管理写作系统
          </div>
        </div>
      </div>
      <div class="w-[538px] h-[640px] bg-white pt-[132px]">
        <div class="flex items-center m-auto justify-center mb-[30px]">
          <Icon
            icon="file-icons:gitlab"
            style="color: #043de3"
            class="text-[52px]"
          />
          <span class="text-[24px] ml-[20px]">欢迎登录</span>
        </div>
        <div class="w-[362px] m-auto">
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
                  'username',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ],
                  },
                ]"
                :placeholder="$t('login.username')"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Password!',
                      },
                    ],
                  },
                ]"
                type="password"
                :placeholder="$t('login.password')"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <div class="flex justify-between text-[#2052e6]">
                <a class="login-form-forgot" href=""> 忘记密码?</a>
                <a class="login-form-forgot" href=""> 手机验证码登录 </a>
              </div>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                {{ $t("login.login") }}
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginOAuth2 } from "@/service";
import config from "@/config";
import { mapMutations, mapState } from "vuex";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  computed: {
    ...mapState(["oauth"]),
  },
  methods: {
    ...mapMutations(["setState"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, { username, password }) => {
        if (err) return;
        const { client_id, client_secret, scope } = config;
        const res = await loginOAuth2({
          grant_type: "password",
          client_id,
          client_secret,
          scope,
          username,
          password,
        });
        // this.$store.commit("setState", { key: "oauth", value: res.data });
        this.setState({ key: "oauth", value: res.data });
      });
    },
    handleChange(lang) {
      // console.log(lang);
      this.$i18n.locale = lang;
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.ant-select-selection {
  border: none;
  border-top-width: 0px;
  background-color: #aecaff;
  box-shadow: none !important;
}
</style>
