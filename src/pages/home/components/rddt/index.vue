<template>
  <view>
    <view class="banner">
      <img src="../../../../static/images/home/tiananmen.png" />
      代表风采<span class="more"> 查看更多 > </span>
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
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title: '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    banner:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    banner:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title:
      '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
  },
  {
    banner:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
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
