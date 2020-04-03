<template>
  <div>
    这是子组件：
    <input type="text" v-on="inputListeners" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function(event) {
          vm.$emit('input', event.target.value);
        }
      });
    }
  },
  mounted() {
    console.log('this.$listeners', this.$listeners);
  }
};
</script>

<style></style>
