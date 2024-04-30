import request from "./request";

// oauth2登录
export const loginOAuth2 = (data) => request.post("/oauth/token", data);
// 获取仓库资料树
export const getRepoTree = ({ owner, repo, sha } = {}) =>
  request.get(`/api/v5/repos/${owner}/${repo}/git/trees/${sha}`);

// 列出授权用户的所有仓库
export const getUserRepos = (params) =>
  request.get("/api/v5/user/repos", { params });

// 获取目录
export const directory = (owner, repo, sha, params, num) =>
  request.get(
    `/api/v5/repos/${owner}/${repo}/git/trees/${sha}?${params}&recursive=${num}`
  );

// 获取单个分支
export const aBranch = (owner, repo, params, branch) =>
  request.get(`/api/v5/repos/${owner}/${repo}/branches/${branch}?${params}`);

export const getlists = () =>
  request.get("api/v5/repos/simonhungchun/demo/commits");

// 创建一个仓库
export const createRepo = (data = {}) =>
  request.post("/api/v5/user/repos", data);

// 列出授权用户所属的组织
export const getOrganizations = (params) =>
  request.get("/api/v5/user/orgs", { params });
