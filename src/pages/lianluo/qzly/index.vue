<template>
  <view>
    <navbar></navbar>
    <view class="body">
      <view class="changzhu">
        <view
          @click="changzhuClick(item)"
          :key="item"
          v-for="item in changzhuList"
        >
          <van-badge :show-zero="false" :content="item.badge">
            <van-icon size="45" color="#49AFFE" :name="item.icon" />
          </van-badge>
          <text>{{ item.text }}</text>
        </view>
      </view>
      <view class="tongjitu">
        <tubiao></tubiao>
      </view>
    </view>
    <view class="list">
      <view class="list-title">
        <text>最新留言</text>
        <text class="more">更多 > </text>
      </view>
      <view class="data">
        <view v-for="(data, index) in dataList" :key="index">
          <view class="data-title">{{ data.title }}</view>
          <view class="data-info">
            <view>
              <van-icon name="user-o" />
              {{ data.zuozhe }}
            </view>
            <view>
              <van-icon name="location-o" />
              {{ data.location }}
            </view>
            <view>
              <van-icon name="clock-o" />
              {{ data.date }}
            </view>
            <view>
              <van-icon name="eye-o" />
              {{ data.views }}
            </view>
          </view>
          <view v-if="index != dataList.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import changzhuList, { changzhu } from './changzhuList';
import tubiao from './components/tubiao';
import navbar from '@/components/navbar';

const dataList = ref([
  {
    title:
      '金海社区梦之星幼儿园邓园长居委会反映7栋有居民高空抛物，对幼儿园的小朋友有安全隐患',
    zuozhe: '张润林',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title: '金海社区居委会居民王丽娜申请公租房',
    zuozhe: '刘美熊',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title: '严重投诉化工路核酸检测',
    zuozhe: '李晗雨',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title: '孩子延时就学',
    zuozhe: '何忆雪',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title: '反映不知那来噪音太大影响休息',
    zuozhe: '甄谷兰',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
]);
</script>

<style lang="scss">
page {
  background: white;
}
.body {
  padding: 0 10rpx;
  margin-top: 20rpx;
  .changzhu {
    display: flex;
    justify-content: center;
    align-items: center;
    > view {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex: 1;
      text {
        margin-top: 5rpx;
      }
    }
  }
}
.list {
  margin-top: 30rpx;
  padding: 0 10rpx;
  .list-title {
    padding: 0 15rpx;
    display: flex;
    width: 100%;
    height: 60rpx;
    justify-content: space-between;
    align-items: center;
    color: white;
    background: linear-gradient(to right, #1876cf, #a7daf9);
    font-size: 35rpx;
    .more {
      text-decoration: underline;
      font-size: 30rpx;
    }
  }
  .data {
    margin-top: 20rpx;
    > view {
      display: flex;
      flex-direction: column;
      .data-title {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .data-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10rpx;
        > view {
          font-size: 25rpx;
          color: gray;
        }
      }
      .divider {
        height: 0.5px;
        background: rgba(209, 208, 208, 0.5);
        margin: 15rpx 0;
      }
    }
  }
}
</style>
