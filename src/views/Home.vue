<template>
  <div class="home">
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
