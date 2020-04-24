<template>
  <div class="nav-menu">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <template v-for="item in menuList">
        <el-menu-item :index="item.index" :route="item.router">
          <i class="el-icon-lollipop"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          index: '1',
          title: '首页',
          router: {
            path: '/home'
          }
        },
        {
          index: '2',
          title: '关于',
          router: {
            path: '/about'
          }
        },
        {
          index: '3',
          title: 'AntV-G6',
          router: {
            path: '/graph'
          }
        },
        {
          index: '4',
          title: '测试用例',
          router: {
            path: ''
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.nav-menu {
  width: 200px;
}
.el-menu {
  border-right: none;
  height: 100%;
}
</style>
