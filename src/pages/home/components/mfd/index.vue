<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/minfadian.png" />
      学习民法典<span class="more"> 查看更多 > </span>
    </view>
    <view class="content">
      <view v-for="item in dataList" :key="item">
        <van-icon color="black" style="margin-right: 5rpx" name="label-o" />{{
          item.title
        }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const dataList = ref([
  {
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
]);
</script>

<style lang="scss">
.banner {
  margin-top: 30rpx;
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/分布概况背景.png') 45%
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
    display: flex;
    padding: 5rpx 10rpx;
    border-radius: 10rpx;
    background: white;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    // text-decoration: underline;
    // color: #467cd4;
  }
}
</style>
