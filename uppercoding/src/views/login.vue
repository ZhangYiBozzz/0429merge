<template>
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
            rules: [{ required: true, message: 'Please input your username!' }],
          },
        ]"
        :placeholder="$t('login.username')"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your Password!' }],
          },
        ]"
        type="password"
        :placeholder="$t('login.password')"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href=""> Forgot password </a>
      <a-button type="primary" html-type="submit" class="login-form-button">
        {{ $t("login.login") }}
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { loginOAuth2 } from "@/service";
import config from "@/config";
import { mapMutations } from "vuex";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
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
</style>
