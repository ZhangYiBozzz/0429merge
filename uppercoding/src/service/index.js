import request from "./request";

// oauth2登录
export const loginOAuth2 = (data) => request.post("/oauth/token", data);
// 获取仓库资料树
export const getRepoTree = ({ owner, repo, sha } = {}) =>
  request.get(`/api/v5/repos/${owner}/${repo}/git/trees/${sha}`);

// 获取所有分支
export const branchAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/branches?${params}`);

// 获取单个分支
export const aBranch = ({ owner, repo, branch } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/branches/${branch}?${params}`);
