<template>
  <div style="margin-bottom:100px;">
    <div class="header">
      <van-nav-bar title="标题" class="header-title" />
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" :show-indicators="true">
        <van-swipe-item class="activity-container" v-for="(item,index) in bannerList" :key="index">
          <a>
            <img :src="item" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="title">
      <img
        src="https://img11.360buyimg.com/cms/jfs/t4735/205/1487056244/2576/7657d147/58f0880aNe4a25ef1.jpg"
      /> Apple/苹果XR iPhone XR 手机美版【有锁激活】合约机移动联通 iPhone Xr 白色 64GB 美版有锁
    </div>
    <div style="margin:10px;">
      <div class="info">
        <div>
          <span class="ft">¥ 0</span>
          <span>天猫价:</span>
          <span class="s3">￥4600</span>
        </div>
        <div>月售21355</div>
      </div>
      <div class="coupon coupon-wave-left coupon-yellow">
        <div class="coupon-info coupon-hole coupon-info-right-dashed">
          <div class="coupon-price">元优惠券</div>
          <div class="coupon-expiry-date">有效期： -</div>
        </div>
        <div class="coupon-get coupon-get-already">立即领取</div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header mui-card-media">
        <img />
        <div class="mui-media-body"></div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">宝贝描述</a>
        <a class="mui-card-link">卖家服务</a>
        <a class="mui-card-link">物流服务</a>
      </div>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">
        <img
          src="https://img14.360buyimg.com/imgzone/jfs/t1/64567/22/1424/330809/5cfb6220E6037248e/b33a6c3792f51796.jpg!q70.dpg.webp"
        />
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/18916/27/5113/75223/5c396eb3E49c95cc3/6658873663bec6d3.jpg!q80.dpg",
        "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/7935/7/12735/67500/5c396eb3E9dc2cf88/cb83ac6427417c41.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/23220/1/5054/133410/5c396eb4Ec52ca7ef/e0d83e5c1f27a8c8.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/19535/11/5179/38943/5c396eb4Ec555201c/bbfc0476899a797f.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/20028/33/5022/21946/5c396eb3Ee73e3c4c/ce3048b82e6635f4.jpg!q70.dpg.webp"
      ],
      activeNames: ["1"]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../assets/goodsDetail.less";
</style>

