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
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title: '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
    date: '2012-09-12 16:49',
  },
  {
    banner:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title: '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
    date: '2012-09-12 16:49',
  },
  {
    banner:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170924%2F05140ccba01c42858bf8f8de24d8b6f3.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668582927&t=bc8258c4727ed978811f799e5de5518a',
    title: '黔西市人大代表杨威：热情为群众考虑利率噜啦噜啦嘞',
    date: '2012-09-12 16:49',
  },
]);
</script>

<style lang="scss">
.banner {
  margin-top: 30rpx;
  border-radius: 15rpx;
  position: relative;
  background: url('../../../../static/images/home/贵州社情民意大背景.png') 45% 45%;
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
    top: 5rpx;
    margin-left: 20rpx;
  }
}
.content {
  margin-top: 20rpx;
  display: flex;
  flex-direction: column;
  > view {
    margin-bottom: 10rpx;
    width: 100%;
    height: 130rpx;
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
      margin-left: 10rpx;
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
        margin-top: 5rpx;
      }
    }
  }
}
</style>
