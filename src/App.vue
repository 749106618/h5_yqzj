<template>
  <div id="app">
    <router-view/>
    <van-tabbar route active-color="#07c160"  inactive-color="#000" v-model="active" safe-area-inset-bottom>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/redpack" icon="bill-o">红包</van-tabbar-item>
      <van-tabbar-item replace to="/self" icon="contact">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      active:0
    }
  }
};
</script>

<style lang="less" scoped>
#app{
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
// Color variables
@black: #000;
@white: #fff;
@red: #f44;
@blue: #1989fa;
@orange: #ff976a;
@orange-dark: #ed6a0c;
@orange-light: #fffbe8;
@green: #07c160;
@gray: #c8c9cc;
@gray-light: #e5e5e5;
@gray-darker: #7d7e80;
@gray-dark: #969799;

// Default colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f8f8f8;
@background-color-light: #fafafa;
</style>
