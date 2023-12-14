<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
#nprogress .bar {
  background: #24edb2;
}
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
</style>
