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
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
            <li><router-link to="/hotOrRecommend" style="color:#fff">女士连衣裙</router-link></li>
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
    <div class="goods">
      <div class="goods-title">
        <div class="goods-title-left">
          <img src="../../static/home/tuijan.png" alt>
          <span>为您推荐</span>
        </div>
        <div class="goods-title-right">
          <span>查看更多</span>
          <van-icon name="arrow"/>
        </div>
      </div>
      <div class="goods-list">
        <ul>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
          <li>
            <img class="img1" src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
            <div class="goods-list-top">
              <img src="https://www.yqzjw.com/res/upload/tqq/images/201901/002.png">
              <span>usb充电体重秤电子秤精</span>
            </div>
            <dir class="goods-list-mid">
              <div class="box1">券10</div>
              <div class="box2">预估佣金￥7.18</div>
            </dir>
            <div class="goods-list-bottom">
              <div class="left">
                <span class="s1">￥</span>
                <span class="s1 s2">68</span>
                <span class="s3">￥139</span>
              </div>
              <div class="right">月售 21355</div>
            </div>
          </li>
        </ul>
      </div>
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
      // 默认有六个li子元素，每个子元素的宽度为80px
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
@import "../assets/home.less";
</style>

