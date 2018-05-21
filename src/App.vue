<template>
  <div id="app">
    <div class="container">
       <app-header></app-header>
    </div>
    <div class="container">
      <!-- 使用<router-view>标签显示路由跳转页面的内容 -->
      <router-view></router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
      </div>
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
