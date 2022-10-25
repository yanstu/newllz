<template>
  <view>
    <navbar></navbar>
    <view class="map">
      <view class="map-title">人大代表网上联络站分布概况地图</view>
      <map-chart></map-chart>
    </view>
    <view class="list">
      <view class="list-title">
        <view>附近站点</view>
        <view @click="showPicker = !showPicker"
          >附近<text>{{ juli }}</text
          >公里<van-icon name="arrow"
        /></view>
      </view>
      <view class="data-list">
        <view v-for="item in dataList" :key="item.id">
          <view class="data-title">{{ item.name }}</view>
          <view class="data-info">
            <view>{{ item.location }}</view>
            <view class="text-blue">进入<van-icon name="arrow" /></view>
          </view>
        </view>
      </view>
    </view>
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :default-index="pickerIndex"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </view>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar';
import { Toast } from 'Vant';
import mapChart from '@/components/charts/map-chart';

const columns = ['1', '2', '3', '4', '5', '10'];
const pickerIndex = ref(1);
const showPicker = ref(false);
const juli = ref(10 );
const dataList = [
  {
    name: '八鸽岩街道人大代表网上联络站',
    location: '云岩区-八鸽岩',
  },
  {
    name: '艳山红镇人大代表网上联络站',
    location: '白云区-沙文镇',
  },
  {
    name: '泉湖道人大代表网上联络站',
    location: '白云区-沙文镇',
  },
];

const onConfirm = (value, index) => {
  pickerIndex.value = index;
  showPicker.value = false;
  juli.value = columns[pickerIndex.value];
};
</script>

<style lang="scss">
$background: linear-gradient(to right, #1876cf, #a7daf9);
.map {
  padding: 0 10rpx;
  margin-top: 10rpx;
  .map-title {
    background: $background;
    height: 60rpx;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15rpx;
    font-size: 35rpx;
  }
}
.list {
  padding: 0 10rpx;
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
    background: $background;
    font-size: 35rpx;
    text {
      margin: 0 5rpx;
      color: red;
    }
  }
  .data-list {
    margin-top: 20rpx;
    > view {
      border-radius: 15rpx;
      margin-bottom: 20rpx;
      padding: 15rpx;
      background: white;
      .data-title {
        font-size: 32rpx;
      }
      .data-info {
        margin-top: 25rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
