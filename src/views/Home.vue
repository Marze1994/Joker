<template>
  <div class="home">
    <!-- assets -->
    <img width="80px;" src="../assets/img/logo.png" />
    <img width="80px;" src="~assets/img/logo.png" />
    <!-- only the one below does not work -->
    <img width="80px;" src="assets/img/logo.png" alt="m"/>
    <img width="80px;" src="@/assets/img/logo.png" />
    <img width="80px;" :src="logo1" />
    <img width="80px;" :src="logo2" />
    <img width="80px;" :src="logo3" />
    <!-- static -->
    <img width="80px;" src="/static/img/logo.png" />
    <img width="80px;" :src="logo4" />
    <img width="80px;" :src="logo5" />

    <h1>Welcome to Joker App</h1>
    <!-- <Child @focus.native="onFocus" :title="childStr"></Child> -->

    <!-- 测试 .sync 修饰符 -->
    <div>父组件准备要传的 str：{{ childStr }}</div>
    <div>父组件准备要传的 obj：{{ childObj }}</div>
    <!-- <Child v-bind.sync="childObj" :childObj="childObj"></Child> -->
    <Child :childStr.sync="childStr" :childObj="childObj"></Child>

    <!-- 测试 lodash -->
    <div>camelCase：{{ handleStr1 }}</div>
    <div>kebabCase：{{ handleStr2 }}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import Child from './Child';
// 下面写法 结合 lodash-webpack-plugin 和 babel-plugin-lodash 插件可使优化结果最大化！
import { camelCase, kebabCase } from 'lodash-es';

export default {
  components: {
    Child
  },
  data() {
    return {
      // 静态资源目录 src/assets 和 static/ 的区别
      logo1: require('../assets/img/logo.png'),
      logo2: require('assets/img/logo.png'), // "assets": resolve('src/assets') ——> src/assets/img/logo.png
      logo3: require('@/assets/img/logo.png'), // '@': resolve('src') ——> src/assets/img/logo.png
      logo4: '/static/img/logo.png',
      logo5: '../../static/img/logo.png',

      name: 'Marze',
      age: 18,
      str1: 'my-project',
      str2: 'fooBar',
      childStr: '这是一个字符串',
      childObj: {
        name: 'kaka',
        age: 19,
        sex: 'male'
      }
    };
  },
  computed: {
    handleName: {
      get() {
        return this.name + this.age;
      },
      set(newVal) {
        this.name = newVal;
      }
    },
    handleStr1() {
      return camelCase(this.str1);
    },
    handleStr2() {
      return kebabCase(this.str2);
    }
  },
  mounted() {
    console.log('NODE_ENV >>> ', process.env.NODE_ENV);
  },
  methods: {
    onFocus() {
      alert(1);
    }
  }
};
</script>

<style scoped lang="scss"></style>
