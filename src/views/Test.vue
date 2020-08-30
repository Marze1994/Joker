<template>
  <div class="test-case">
    <h1>测试用例</h1>
    <el-divider></el-divider>
    <div class="watch">
      <h6>This is my iWatch.</h6>
      <img class="watch-icon" src="../assets/img/watch.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
  }
};
</script>

<style scoped lang="scss">
.test-case {
  background-image: url('../assets/img/watch.svg');
  background-size: cover;
  background-attachment: fixed;
}
.watch {
  color: aquamarine;
  .watch-icon {
    width: 100px;
  }
}
</style>
