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

// 获取仓库所有提交
export const submitAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/commits`, params);

// 获取仓库所有成员
export const memberAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/collaborators`, params);

// 获取仓库所有标签（任务）
export const labelAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/labels`, params);

// 获取仓库所有任务
export const taskAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/issues`, params);

// 获取仓库合并请求
export const pullsAll = ({ owner, repo } = {}, params) =>
  request.get(`/api/v5/repos/${owner}/${repo}/pulls`, params);

// 获取授权用户的资料
export const userInfo = (params) => request.get(`/api/v5/user`, params);
