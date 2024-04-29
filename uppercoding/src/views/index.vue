<template>
  <div>index</div>
</template>
<script>
import { getRepoTree } from "@/service";
export default {
  async created() {
    const res = await getRepoTree({
      owner: "zhangyibo111",
      repo: "git-stuby",
      sha: "master",
    });
    console.log(res);
  },
};
</script>
