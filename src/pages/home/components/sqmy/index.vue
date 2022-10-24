<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/社情民意.png" />
      社情民意<span class="more"> 查看更多 > </span>
    </view>
    <view class="content">
      <view v-for="item in dataList" :key="item">
        <view class="content-neirong">
          <view class="biaoti">{{ item.title }}</view>
          <view class="shijian">
            <van-icon name="clock-o" />
            {{ item.date }}
          </view>
        </view>
        <view class="content-banner">
          <img :src="item.banner" />
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const dataList = ref([
  {
    banner:
      'http://www.gzrd.gov.cn/uploadfiles/202209/05/2022090509551964538672.jpg',
    title: '黔东南州人大常委会执法检查组到丹寨县开展执法检查',
    date: '2022-09-05 16:49',
  },
  {
    banner:
      'http://www.gzrd.gov.cn/uploadfiles/202209/29/2022092909231811135833.jpg',
    title:
      '“我捐10吨蔬菜”“我捐17万现金”“我捐22万现金”...... 文正友等赫章县各级人大代表向抗疫一线捐款捐物',
    date: '2022-09-29 16:49',
  },
  {
    banner: 'https://inews.gtimg.com/newsapp_bt/0/15315609517/1000',
    title: '贵州民政这十年|基层社会治理更加多元',
    date: '2022-09-12 16:49',
  },
]);
</script>

<style lang="scss">
.banner {
  margin-top: 30rpx;
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/贵州社情民意大背景.png') 45%
    45%;
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
    right: 5%;
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
