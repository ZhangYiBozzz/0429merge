import axios from "axios";
import storejs from "storejs";

const request = axios.create({
  baseURL: "https://gitee.com",
  timeout: 3000,
});

request.interceptors.request.use(function (config) {
  if (typeof config.params === "undefined") config.params = {};
  config.params.access_token = storejs.get("upper_coding")?.oauth?.access_token;
  return config;
});

export default request;
