<template>
  <div
    class="about"
    @mouseenter="aboutEnter"
    @mouseover="aboutOver"
    @mouseleave="aboutLeave"
    @mouseout="aboutOut"
  >
    <div class="item1" @click="itemClick">111</div>
    <div
      class="item2"
      @mouseenter="itemEnter"
      @mouseover="itemOver"
      @mouseleave="itemLeave"
      @mouseout="itemOut"
    ></div>
    <div v-if="isShow" class="item3"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  mounted() {
    // window.addEventListener(
    //   'mouseenter',
    //   (e) => {
    //     // console.log('我是大哥1', e);
    //     // console.log(e.target);
    //     // console.log(this.$el);
    //     // if(this.$el)
    //   },
    //   true
    // );
    // // true 事件在捕获阶段执行
    // // false 事件在冒泡阶段执行
    // window.addEventListener(
    //   'mouseover',
    //   (e) => {
    //     e.stopPropagation();
    //     // console.log('我是大哥2', e);
    //   },
    //   true
    // );
  },
  methods: {
    itemClick(e) {
      // console.log('点击', e);
    },
    aboutEnter(e) {
      // console.log('aboutEnter');
      // console.log(e);
    },
    aboutOver(e) {
      // e.preventDefault();
      // console.log('aboutOver');
      console.log(e);
    },
    aboutLeave(e) {
      // console.log('aboutLeave');
      console.log(e);
    },
    aboutOut(e) {
      // console.log('aboutOut');
      console.log(e);
    },
    itemEnter(e) {
      // console.log('itemEnter');
      console.log(e);
    },
    itemOver(e) {
      // e.stopPropagation();
      // console.log('itemOver');
      console.log(e);
    },
    itemLeave(e) {
      // console.log('itemLeave');
      console.log(e);
    },
    itemOut(e) {
      // console.log('itemOut');
      console.log(e);
    }
  }
};
</script>

<style scoped>
.about {
  height: 60px;
  display: flex;
  position: relative;
  background: #666;
}
.item1 {
  width: 20%;
}
.item2 {
  flex: 1;
  background: wheat;
}
.item3 {
  position: absolute;
  top: 60px;
  width: 100%;
  height: 100px;
  background: aquamarine;
}
</style>
