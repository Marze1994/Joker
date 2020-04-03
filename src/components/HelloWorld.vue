<template>
  <div class="hello" @click.ctrl="handleHelloClick">
    <h1>Welcome to My Test-Vue2.x App</h1>
    <Child @focus.native="onFocus"></Child>
    <div>{{ handleStr1 }}</div>
    <div>{{ handleStr2 }}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import Child from './Child';

// import camelCase from 'lodash-es/camelCase';
// import kebabCase from 'lodash-es/kebabCase';
// 下面写法 结合 lodash-webpack-plugin 和 babel-plugin-lodash 插件可使优化结果最大化！
import { camelCase, kebabCase } from 'lodash-es';

export default {
  name: 'HelloWorld',
  components: {
    Child
  },
  data() {
    return {
      name: 'Marze',
      age: 18,
      str1: 'my-project',
      str2: 'fooBar'
    };
  },
  computed: {
    master: {
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
  created() {
    // let arr1 = ['a', 'b', 'c'];
    // let res = _.map(arr1, (item) => {
    //   return item.toUpperCase();
    // });
    // console.log(res);
  },
  mounted() {
    this.master = '武磊';
    console.log(this.name);
    // console.log(Vue.config.keyCodes);
    console.log('>> env.NODE_ENV', process.env.NODE_ENV);
  },
  methods: {
    handleHelloClick(e) {
      const target = e.target;
      console.log('qq');
    },
    onFocus() {
      alert(1);
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  text-align: left;
  padding-left: 40px;
}
</style>
