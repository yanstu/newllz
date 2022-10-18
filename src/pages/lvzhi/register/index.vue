<template>
  <view>
    <view class="head">
      <view class="search-bar">
        <van-icon class="search-icon" name="search" />
        <input
          class="search-input"
          v-model="searchValue"
          type="text"
          placeholder="请输入关键字"
          placeholder-color="#ccc"
        />
        <view class="search-btn"> 搜索 </view>
      </view>
      <view class="search-gaoji"> 高级 > </view>
    </view>
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
        <text>履职活动</text>
        <text class="more">更多 > </text>
      </view>
      <view class="data">
        <view v-for="(data, index) in dataList" :key="index">
          <view class="data-title">{{ data.title }}</view>
          <view class="imglist">
            <image v-for="img in data.imglist" :src="img" :key="img"> </image>
          </view>
          <view class="data-info">
            <view>
              <van-icon name="location-o" />
              {{ data.location }}
            </view>
            <view>
              <van-icon name="user-o" />
              {{ data.zuozhe }}
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

const dataList = ref([
  {
    title:
      '习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '张润林',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title:
      '习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '张润林',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title:
      '习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '张润林',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title:
      '习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '张润林',
    location: '贵州省人大',
    date: '2022-09-12 12:32',
    views: 1231,
  },
  {
    title:
      '习近平：心往一处想劲往一处使推动中华民族伟大复兴号巨轮乘风破浪扬帆远航',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '张润林',
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
.head {
  height: 100rpx;
  background: linear-gradient(to bottom, #47aaff, #53d0fc);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .search-bar {
    width: 80%;
    height: 70rpx;
    background: white;
    border-radius: 20rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .search-btn {
      border-left: 1px solid rgba(209, 208, 208, 0.8);
      color: #47aaff;
      padding: 0 10rpx;
      width: 15%;
      text-align: center;
      font-size: 30rpx;
    }
    .search-icon {
      text-align: center;
      width: 10%;
      font-size: 40rpx;
      padding-left: 8rpx;
    }
    .search-input {
      width: 75%;
    }
  }
  .search-gaoji {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 10rpx;
    font-size: 35rpx;
  }
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
      .imglist {
        margin-top: 10rpx;
        width: 100%;
        height: 200rpx;
        display: flex;
        > image {
          height: 100%;
          flex: 1;
          margin-right: 5rpx;
        }
        > image:last-child {
          margin-right: 0;
        }
      }
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
