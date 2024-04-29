<template>
  <div>
    {{ oauth.access_token }}
    <h1>{{ $store.state.oauth.access_token }}</h1>
    <a-select default-value="zh" style="width: 120px" @change="handleChange">
      <a-select-option value="zh">简体中文</a-select-option>
      <a-select-option value="en">English</a-select-option>
    </a-select>
    <router-view />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["oauth"]),
  },
  methods: {
    handleChange(lang) {
      // console.log(lang);
      this.$i18n.locale = lang;
    },
  },
};
</script>
