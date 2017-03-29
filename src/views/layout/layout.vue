<template lang="html">
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
  // 样式仅做编程风格参考，并未确定
  .layout {
    width: 100vw;
    height: 100vh;
    margin-top: 60px;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
