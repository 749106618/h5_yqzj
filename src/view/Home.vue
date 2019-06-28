<template>
  <div id="home">
    <div class="header">
      <van-search placeholder="搜索宝贝 领券省钱 分享赚钱" shape="round" :readonly="true" background="#f23030"/>
      <div class="hot-search">
        <div class="hot-search-left">
          <van-icon name="fire-o"/>热门搜索:
        </div>
        <div class="hot-search-right" ref="personWrap">
          <ul ref="personTab">
            <li>女士连衣裙</li>
            <li>女士连衣裙</li>
            <li>女士连衣裙</li>
            <li>女士连衣裙</li>
            <li>女士连衣裙</li>
            <li>女士连衣裙</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menus">
      <ul>
        <li v-for="(item,index) in menus" :key="index">
          <img :src="item.imgSrc">
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="activity">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item class="activity-container" v-for="(item,index) in bannerList" :key="index">
          <img :src="item">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Home",
  data() {
    return {
      bannerList: [
        "https://www.yqzjw.com/res/upload/tqq/images/201901/002.png",
        "https://www.yqzjw.com/res/upload/tqq/images/201901/1546939879194_493.png",
        "https://www.yqzjw.com/res/upload/tqq/images/201901/1546940336838_678.png",
        "https://www.yqzjw.com/res/upload/tqq/images/201901/1546939879194_498.png",
        "https://www.yqzjw.com/res/upload/tqq/images/201901/001.png"
      ],
      menus: [
        {
          imgSrc: "../../static/home/jingxuan.png",
          name: "每日精选",
          searchType: "6"
        },
        {
          imgSrc: "../../static/home/baoping.png",
          name: "爆品榜",
          searchType: "2"
        },
        {
          imgSrc: "../../static/home/9.9.png",
          name: "9.9包邮",
          searchType: "1"
        },
        { imgSrc: "../../static/home/ju.png", name: "聚划算", searchType: "6" },
        {
          imgSrc: "../../static/home/xinyongka.png",
          name: "品牌券",
          searchType: "4"
        },
        {
          imgSrc: "../../static/home/muying.png",
          name: "母婴版",
          searchType: "9"
        },
        {
          imgSrc: "../../static/home/pintuan.png",
          name: "拼团",
          searchType: "8"
        },
        {
          imgSrc: "../../static/home/quan.png",
          name: "大额券",
          searchType: "3"
        },
        {
          imgSrc: "../../static/home/good.png",
          name: "有好货",
          searchType: "5"
        },
        {
          imgSrc: "../../static/home/chaoliu.png",
          name: "潮流范",
          searchType: "7"
        }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 6 * 80;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
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
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #f23030;
  .van-search {
    padding-bottom: 3px;
  }
  .hot-search {
    color: #fff;
    padding: 0 16px;
    display: flex;
    align-items: center;
    font-size: 12px;
    height: 25px;
    &-left {
      width: 25%;
      font-size: 13px;
      line-height: 25px;
    }
    &-right {
      width: 75%;
      height: 100%;
      overflow: hidden;
      ul {
        display: flex;
        li {
          flex: 1;
          height: 100%;
          text-align: center;
          line-height: 25px;
        }
      }
    }
  }
}
.banner {
  margin-top: 72px;
}
.menus {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 10px;
      width: 20%;
      font-size: 13px;
      img {
        width: 35px;
        height: 35px;
      }
      div {
        margin-top: 5px;
      }
    }
  }
  ul:after {
    content: "";
    width: 25%;
  }
}
.activity {
  padding: 10px 5%;
  border-top: 1px solid #f0f0f0;
  img {
    height: 60px;
    width: 100%;
    border-radius: 30px;
  }
}
</style>

