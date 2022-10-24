<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/tiananmen.png" />
      人大动态<span class="more"> 查看更多 > </span>
    </view>
  </view>
  <view class="content"
    ><view v-for="item in dataList" :key="item">
      <view class="content-banner">
        <img :src="item.banner" />
      </view>
      <view class="content-title">
        <view class="title-text">
          {{ item.title }}
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const dataList = ref([
  {
    banner:
      'http://jgz.app.todayguizhou.com/data/upload/image/20221018/1666086726745459.jpg',
    title:
      '党的二十大贵州省代表团举行全体会议 学习贯彻习近平总书记在参加广西代表团讨论时的重要讲话精神',
  },
  {
    banner:
      'http://www.gzrd.gov.cn/uploadfiles/202210/20/2022102015400450545150-thumbnail.jpg',
    title: '慕德贵率队赴遵义市开展《中华人民共和国乡村振兴促进法》执法检查',
  },
  {
    banner:
      'http://www.gzrd.gov.cn/uploadfiles/202210/21/2022102115560930074913.jpg',
    title: '慕德贵在遵义市调研定点联系企业',
  },
  {
    banner:
      'http://www.gzrd.gov.cn/uploadfiles/202210/22/2022102216573792553650-thumbnail.jpg ',
    title: '慕德贵到正安县调研并看望省人大常委会机关驻村工作队',
  },
]);
</script>

<style lang="scss">
.banner {
  margin-top: 30rpx;
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/贵州人大动态大背景.png') 45%
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
    height: 100%;
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
  margin-top: 15rpx;
  display: grid;
  grid-row-gap: 15rpx;
  grid-column-gap: 15rpx;
  grid-template-columns: repeat(2, 49%);
  grid-template-rows: repeat(2, 49%);
  > view {
    height: 280rpx;
    width: 100%;
    border-radius: 10rpx;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    .content-banner {
      height: 70%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .content-title {
      height: 30%;
      width: 100%;
      padding: 5rpx 10rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .title-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
