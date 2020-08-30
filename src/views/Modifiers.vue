<template>
  <div>
    <h1>Vue 修饰符</h1>
    <p>
      <a href="https://cn.vuejs.org/v2/guide/forms.html#lazy" target="_blank">
        修饰符 - 表单输入绑定
      </a>
    </p>
    <p>
      <a
        href="https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6"
        target="_blank"
      >
        修饰符 - 事件处理
      </a>
    </p>
    <p>
      <a
        href="https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6"
        target="_blank"
      >
        .sync 修饰符
      </a>
    </p>
    <h3>.lazy：在“change”时而非“input”时更新</h3>
    <p>
      <span>没加lazy：</span>
      <input v-model="msg" />
      <span>加lazy：</span>
      <input v-model.lazy="msg" />
    </p>
    <p>{{ msg }}</p>
    <el-divider></el-divider>

    <h3>.number：将用户的输入值转为数值类型</h3>
    <input v-model.number="age" type="number" />
    <p>{{ age }}</p>
    <el-divider></el-divider>

    <h3>.trim：过滤首尾空白字符</h3>
    <p>
      <span>没加trim：</span>
      <input v-model="str" />
      <span>加trim：</span>
      <input v-model.trim="str" />
    </p>
    <p>“{{ str }}”</p>
    <el-divider></el-divider>

    <p>
      <a v-on:click.once="onceClick">点我：点击事件将只会触发一次</a>
    </p>
    <el-divider></el-divider>

    <h3>.exact：允许你控制由精确的系统修饰符组合触发的事件</h3>
    <p>
      <span>有且只有按下Enter键才会触发事件：</span>
      <input type="text" @keyup.enter.exact="keyboard1($event)" />
    </p>
    <el-divider></el-divider>

    <h3>事件修饰符：.stop .prevent .capture .self .once .passive</h3>
    <h3>
      按键修饰符：.enter .tab .delete (捕获“删除”和“退格”键) .esc .space .up .down .left .right
    </h3>
    <h3>系统修饰符：.ctrl .alt .shift .meta .exact</h3>
    <h3>鼠标按钮修饰符：.left .right .middle</h3>
    <h3>.sync修饰符</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '123',
      age: '18',
      str: '张国荣'
    };
  },
  mounted() {},
  methods: {
    onceClick() {
      alert(1);
    },
    keyboard1(event) {
      console.log(event);
      alert('你按了Enter键！');
    }
  }
};
</script>

<style scoped lang="scss"></style>
