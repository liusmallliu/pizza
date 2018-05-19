<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header.vue';       //这里一定要记得双引号，不然会报错
export default {
  components:{
    //名字用驼峰规则,可以不用引号
    appHeader:Header
  }
}
</script>

<style>

</style>
