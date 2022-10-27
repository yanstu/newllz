<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/人大分布概况图.png" />
      代表风采<span class="more"> 查看更多 > </span>
    </view>
    <view class="content">
      <view v-for="item in dataList" :key="item">
        <view class="content-banner">
          <img :src="item.banner" />
        </view>
        <view class="content-neirong">
          <view class="biaoti">{{ item.title }}</view>
          <view class="shijian">
            <van-icon name="clock-o" />
            {{ item.date }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const dataList = ref([
  {
    banner: require('./1.jpg'),
    title: '黔西市人大代表杨威：热情为民服务 倾心履职尽责',
    date: '2021-08-18 16:49',
  },
  {
    banner: require('./2.jpg'),
    title: '毕节市人大代表赵玲：用心为民办实事',
    date: '2021-08-17 16:49',
  },
  {
    banner: require('./3.png'),
    title:
      '全国人大代表、贵州航天天马机电科技有限公司材料成型部有色金属焊接班班长姜涛：弘扬工匠精神 深耕工匠文化',
    date: '2021-08-16 16:49',
  },
]);
</script>

<style lang="scss">
.banner {
  margin-top: 30rpx;
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/贵州社情民意大背景.png') 55%
    55%;
  height: 90rpx;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30rpx;
  color: white;
  font-size: 35rpx;
  img {
    position: absolute;
    height: 90%;
    right: 0;
    bottom: 0;
  }
  .more {
    font-size: 22rpx;
    background: linear-gradient(to bottom, rgb(19, 81, 148), rgb(52, 140, 216));
    color: white;
    display: inline-block;
    border-radius: 15rpx;
    padding: 5rpx 10rpx;
    position: relative;
    margin-left: 30rpx;
  }
}
.content {
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
  > view {
    margin-bottom: 10rpx;
    width: 100%;
    height: 160rpx;
    display: flex;
    border-radius: 10rpx;
    background: white;
    overflow: hidden;
    .content-banner {
      width: 30%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .content-neirong {
      justify-content: center;
      margin-left: 15rpx;
      width: 70%;
      display: flex;
      flex-direction: column;
      .biaoti {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .shijian {
        margin-top: 15rpx;
        color: gray;
      }
    }
  }
}
</style>
