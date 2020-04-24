<template>
  <div id="app">
    <!-- <img :src="logImg" alt="" /> -->
    <div id="views">
      <NavMenu />
      <router-view id="firstRouterView" />
    </div>
  </div>
</template>

<script>
import NavMenu from '@/views/NavMenu';
export default {
  name: 'App',
  components: {
    NavMenu
  },
  data() {
    return {
      logImg: require('@/assets/img/logo.png')
    };
  },
  mounted() {
    // console.log(2);
    // async function timeout() {
    //   for (let index = 0; index < 3; index++) {
    //     console.log('async ' + index);
    //   }
    // }
    // console.log(timeout());
    // console.log('outer');
    // const res1 = this.getUserName();
    // console.log(res1);
    // console.log(3);
    // this.testExecutionFlow();
    // let a = 0;
    // let b = async () => {
    //   a = a + (await 10);
    //   console.log('2', a); // -> '2' 10
    // };
    // b();
    // a++;
    // console.log('1', a); // -> '1' 1
  },
  methods: {
    // testExecutionFlow() {
    //   console.log(1);
    //   setTimeout(() => {
    //     console.log(2);
    //   }, 0);
    //   new Promise((resolve, reject) => {
    //     console.log(5);
    //     resolve('p');
    //     console.log(6);
    //   }).then((res) => {
    //     console.log(9);
    //   });
    //   let fn = async () => {
    //     console.log(3);
    //     setTimeout(() => {
    //       console.log(4);
    //     }, 0);
    //     // await new Promise((resolve, reject) => {
    //     //   resolve();
    //     // }).then((res) => {
    //     //   console.log(12);
    //     // });
    //     // 下面接口可以为一个宏任务
    //     await this.$http
    //       .get('/api/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
    //       .then((res) => {
    //         console.log('m1');
    //       })
    //       .catch((err) => {
    //         console.log('m2');
    //       });
    //     console.log(8);
    //   };
    //   fn().then((res) => {
    //     console.log(10);
    //   });
    //   console.log(7);
    //   // 1 5 6 3 7 9 8 10 2 4
    // },
    // getHistoryData(data) {
    //   return new Promise((resolve, reject) => {
    //     this.$http
    //       .get('/api/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
    //       .then((res) => {
    //         resolve(res);
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    // },
    // async getUserName() {
    //   let arr = [1, 2, 3, 4, 5, 6, 7, 1, 2];
    //   for (let i = 0; i < arr.length; i++) {
    //     const res = await this.getHistoryData();
    //     let arr = [];
    //     arr.push(res);
    //   }
    //   console.log(arr);
    //   // 父组件 commit
    //   // 子组件 watch
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  width: 100%;
  height: 100%;
  background-image: url('assets/img/city.jpg');
  background-color: #cccccc;
  background-size: cover;
  background-attachment: fixed;
}
#views {
  display: flex;
  height: 100%;
}
#firstRouterView {
  flex: 1;
  margin: 20px;
}
</style>
