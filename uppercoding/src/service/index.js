import request from "./request";

// oauth2登录
export const loginOAuth2 = (data) => request.post("/oauth/token", data);
// 获取仓库资料树
export const getRepoTree = ({ owner, repo, sha } = {}) =>
  request.get(`/api/v5/repos/${owner}/${repo}/git/trees/${sha}`);
