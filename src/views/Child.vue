<template>
  <div class="child">
    <h3>这里是子组件</h3>
    <h4>父组件传过来的 str：{{ childStr }}</h4>
    <h4>父组件传过来的 str 子组件另起属性保存：{{ saveChildStr }}</h4>
    <p>str：<input type="text" :value="childStr" @input="changeStr" /></p>

    <el-divider></el-divider>

    <h4>父组件传过来的 obj：{{ childObj }}</h4>
    <h4>父组件传过来的 obj 子组件另起属性保存：{{ saveChildObj }}</h4>
    <p>name：<input type="text" :value="childObj.name" @input="changeObjName" /></p>
    <p>age：<input type="number" :value="childObj.age" @input="changeObjAge" /></p>

    <!-- <input type="text" v-on="inputListeners" /> -->
  </div>
</template>

<script>
import { cloneDeep } from 'lodash-es';
export default {
  // inheritAttrs: false,
  props: {
    childStr: String,
    childObj: Object
  },
  data() {
    return {
      saveChildStr: this.childStr,
      saveChildObj: this.childObj
    };
  },
  computed: {
    // inputListeners: function() {
    //   var vm = this;
    //   return Object.assign({}, this.$listeners, {
    //     input: function(event) {
    //       vm.$emit('input', event.target.value);
    //     }
    //   });
    // }
  },
  mounted() {
    // console.log('this.$listeners', this.$listeners);
  },
  methods: {
    changeStr(e) {
      // this.childStr = e.target.value;
      this.$emit('update:childStr', e.target.value);
    },
    changeObjName(e) {
      this.childObj.name = e.target.value;
    },
    changeObjAge(e) {
      this.childObj.age = e.target.value;
    }
  }
};
</script>

<style scoped lang="scss">
.child {
  border: 1px solid #dcdfe6;
  padding: 20px;
}
</style>
