<template>
  <div class="self">
    <div class="top">
      <div class="acc_manager">
        <van-icon class="setting" name="setting-o" />
      </div>
      <div class="top-info">
        <div id="go_photo" class="top-info-img">
          <img src="../../../static/self/img_default_avatar@3x.png" />
        </div>
        <div class="top-info-name">
          <div class="user-name-box">
            <a class="user-name"></a>
            <button class="user-lever">请先登录/注册</button>
          </div>
          <div class="user-id">
            邀请码:
            <textarea id="copy" rows="1" readonly="readonly"></textarea>
            <button type="button" class="copy">复制</button>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet">
      <div class="wallet-top">
        <div>
          可提现:
          <span class="ft">¥ 0</span>
        </div>
        <button type="button">提现</button>
      </div>
      <ul class="wallet-bottom">
        <li>
          <a>
            <span class="ft">¥ 0</span>
            <div>本月预收</div>
          </a>
        </li>
        <li>
          <a>
            <span class="ft">¥ 0</span>
            <div>今日收益</div>
          </a>
        </li>
        <li>
          <a>
            <span class="ft">0</span>
            <div>我的粉丝</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="members">
      <ul>
        <li>
          <a>
            <img src="../../../static/self/icon_my_60.png" alt />
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_298.png" alt />
          </a>
        </li>
      </ul>
    </div>
    <div class="order">
      <div class="order-top">我的订单</div>
      <ul>
        <li>
          <a>
            <img src="../../../static/self/icon_my_taobao@2x.png" alt />
            <div>淘宝</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_jd@2x.png" alt />
            <div>京东</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_pingduoduo.png" alt />
            <div>拼多多</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="order-redpack">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item class="activity-container" v-for="(item,index) in bannerList" :key="index">
          <a>
            <img :src="item" />
          </a>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menu">
      <ul>
        <li>
          <a>
            <img src="../../../static/self/icon_my_share@2x.png" />
            <div>我要分享</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_agency@2x.png" />
            <div>京东</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_help@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_collect@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_announcement@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_service@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_question@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
        <li>
          <a>
            <img src="../../../static/self/icon_my_us@2x.png" />
            <div>拼多多</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        "../../../static/self/orderQuery.jpg",
        "../../../static/self/yaoqing.jpg"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/self/self.less";
</style>
