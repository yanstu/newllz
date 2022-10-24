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
          <van-icon :color="item.color" size="45" :name="item.icon" />
          <text>{{ item.text }}</text>
        </view>
      </view>
    </view>

    <van-config-provider :theme-vars="themeVars">
      <van-collapse v-model="activeNames">
        <van-collapse-item
          v-for="(item, index) in dataList"
          :key="index"
          :title="item.title"
          :name="item.title"
        >
          <view
            class="jc-list"
            v-for="(jieci, index) in item.datas"
            :key="index"
          >
            <view class="jc-title"
              ><van-icon name="chat-o" color="#ee0a24" />{{ jieci.title }}({{
                jieci.count
              }})</view
            >
            <view>
              <view v-for="(user, index) in jieci.userlist" :key="index">
                <img :src="user.avatar" /><text>{{ user.username }}</text>
              </view>
            </view>
          </view>
        </van-collapse-item>
      </van-collapse>
    </van-config-provider>

    <view class="list" v-for="(item, index) in dataList" :key="index">
      <view class="list-title">
        <text>{{ item.title }}</text>
        <text class="more">更多 > </text>
      </view>

      <view class="data">
        <view v-for="(data, index) in item.datas" :key="index">
          <view class="data-title"
            ><text class="text-red" v-if="index <= 2">[置顶]</text
            >{{ data.title }}</view
          >
          <view class="data-info">
            <view>
              <van-icon name="clock-o" />
              {{ data.date }}
            </view>
            <view>
              <van-icon name="eye-o" />
              {{ data.views }}
            </view>
            <view class="text-blue"
              >详情
              <van-icon name="arrow" />
            </view>
          </view>
          <view v-if="index != item.datas.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar';
import dataList from './dataList';
import changzhuList, { changzhu } from './changzhuList';
const activeNames = ref(['1']);
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
