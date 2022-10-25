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
      <view class="tubiao">
        <view class="tongji">
          <view class="nan"> 男：62046人 </view>
          <view class="nv"> 女：23282人 </view>
        </view>
        <tubiao></tubiao>
      </view>
      <view class="table">
        <view class="table-title">
          <text>代表统计</text>
        </view>
        <view class="table-list">
          <view>
            <text class="text"> 全国人大代表： </text>
            <text class="num"> 37人 </text>
          </view>
          <view>
            <text class="text"> 省人大代表： </text>
            <text class="num"> 616人 </text>
          </view>
          <view>
            <text class="text"> 市（州）人大代表： </text>
            <text class="num"> 2830人 </text>
          </view>
          <view>
            <text class="text"> 区（县）人大代表： </text>
            <text class="num"> 18497人 </text>
          </view>
          <view>
            <text class="text"> 乡（镇）人大代表： </text>
            <text class="num"> 63330人 </text>
          </view>
        </view>
      </view>
    </view>

    <uni-collapse class="list" accordion v-model="activeNames">
      <uni-collapse-item
        class="list-item"
        v-for="(item, index) in dataList"
        :key="index"
        :title="item.title"
        :name="item.title"
        :background="'linear-gradient(to right, #1477D5, #A6D8F5)'"
      >
        <view class="jc-list" v-for="(jieci, index) in item.datas" :key="index">
          <view class="jc-title"
            ><img src="@img/other/guohui.png" />{{ jieci.title }}（{{
              jieci.count
            }}人）</view
          >
          <view class="jc-userlist">
            <van-config-provider :theme-vars="themeVars">
              <van-grid
                class="body-grid"
                gutter="0"
                clickable
                :border="false"
                :column-num="6"
                icon-size="55"
              >
                <van-grid-item
                  :key="user"
                  v-for="user in jieci.userlist"
                  :icon="user.avatar"
                  :text="user.username"
                />
              </van-grid>
            </van-config-provider>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar';
import tubiao from './components/tubiao';
import dataList from './dataList';
import changzhuList, { changzhu } from './changzhuList';
import uniCollapse from '@/components/uni/uni-collapse/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue';

const activeNames = ref('');
const themeVars = ref({
  gridItemContentBackgroundColor: 'transparent',
  gridItemContentPadding: '10rpx',
  gridItemTextFontSize: '28rpx',
});
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
  .tubiao {
    margin-top: 30rpx;
    .tongji {
      display: flex;
      > view {
        flex: 1;
        color: white;
        padding: 10rpx 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .nan {
        background: #61a9e2;
        margin-right: 0.5%;
      }
      .nv {
        background: #fe893c;
        margin-left: 0.5%;
      }
    }
  }
  .table {
    .table-title {
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
    .table-list {
      > view {
        display: flex;
        height: 50rpx;
        line-height: 50rpx;
        margin-top: 10rpx;
        text {
          height: 100%;
          padding-left: 20rpx;
        }
        .text {
          width: 60%;
          background: #e0eaf3;
        }
        .num {
          width: 40%;
          background: #f2f2f2;
        }
      }
    }
  }
}
.list {
  padding: 0 10rpx;
  margin-top: 30rpx;
  .list-item {
    margin-top: 10rpx;
    .jc-list {
      .jc-title {
        margin: 15rpx 0rpx;
        display: flex;
        height: 60rpx;
        align-items: center;
        font-size: 32rpx;
        img {
          height: 50rpx;
          margin-right: 10rpx;
        }
      }
      .jc-userlist {
        margin-bottom: 20rpx;
      }
    }
  }
}
</style>
