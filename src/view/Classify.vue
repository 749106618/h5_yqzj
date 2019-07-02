<template>
  <div>
    <div class="search">
      <van-search placeholder="搜索宝贝 领券省钱 分享赚钱" shape="round" :readonly="true" background="#f23030"/>
    </div>
    <div class="main">
      <div class="main-side" ref="tab">
        <van-sidebar :active-key="activeKey" @change="onChange">
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
          <van-sidebar-item title="标签名称"/>
        </van-sidebar>
      </div>
      <div class="main-content">
        <ul>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
          <li>
            <img
              src="https://img10.360buyimg.com/focus/s140x140_jfs/t12115/157/349067422/11364/28a9b89a/5a096b1bN0ef73ecd.jpg"
            >
            <div>净水壶</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Classify",
  data() {
    return {
      activeKey: 0
    };
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    onChange(key) {
      this.activeKey = key;
    },
    personScroll() {
      console.log(this.$refs.tabcontent);

      this.$refs.tab.style.height = window.screen.height - 96 + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.tab, {
            startX: 0,
            click: true,
            scrollX: false,
            scrollY: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/classify.less";
</style>

