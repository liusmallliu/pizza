<template>
  <div id="app">
    <div class="container">
       <app-header></app-header>
    </div>
    <div class="container">
      <!-- 使用<router-view>标签显示路由跳转页面的内容 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"; //这里一定要记得双引号，不然会报错
export default {
  components: {
    //名字用驼峰规则,可以不用引号
    appHeader: Header
  }
};
</script>

<style>

</style>
