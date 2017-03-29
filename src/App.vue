<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
  import layout from './views/layout/layout.vue'
  export default {
    name: 'app',
    components: {
      layout
    }
  }
</script>
