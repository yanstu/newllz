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
import navbar from '@/components/navbar';

const dataList = ref([
  {
    title:
      '云岩区第十八届人民代表大会第一次会议',
    imglist: [
      'http://www.yunyan.gov.cn/xwzx/jryy/202201/W020220107336907915629.jpg',
      'http://www.yunyan.gov.cn/xwzx/jryy/202201/W020220107336907945029.jpg',
      'http://www.yunyan.gov.cn/xwzx/jryy/202201/W020220107336907996959.jpg',
    ],
    zuozhe: '云岩区',
    location: '云岩区人大',
    date: '2022-09-12 12:32',
    views: 11231,
  },
  {
    title:
      '云岩区第十八届人民代表大会代表和黔灵镇第六届人民代表大会代表集中培训会',
    imglist: [
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202111/W020211129597720499280.jpg',
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202111/W020211129597720529226.jpg',
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202111/W020211129597720499280.jpg',
    ],
    zuozhe: '云岩区',
    location: '云岩区人大',
    date: '2022-09-12 12:32',
    views: 3231,
  },
  {
    title:
      '马王街道2021年上半年人大代表小组活动',
    imglist: [
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202207/W020220722464588706118.jpg',
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202207/W020220722464588758522.jpg',
      'https://www.gysrd.gov.cn/xwzx/qxrd/yyq/202207/W020220722464588809157.jpg',
    ],
    zuozhe: '云岩区',
    location: '云岩区人大',
    date: '2022-09-12 12:32',
    views: 2231,
  },
  {
    title:
      '杨惠街道组织开展区十七届人大代表2021年小组活动',
    imglist: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsc.people.com.cn%2FNMediaFile%2F2021%2F0705%2FLOCAL202107051100000031045127092.jpg&refer=http%3A%2F%2Fsc.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668665760&t=f4bfe2d0389016b7e3a7cf55d1074137',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
      'http://www.gov.cn/govweb/c1444/202003/5492188/images/05f013c2e11943ff92a774d559df3d1c.jpg',
    ],
    zuozhe: '云岩区',
    location: '云岩区人大',
    date: '2022-09-12 12:32',
    views: 5231,
  },
  {
    title:
      '金关街道：人大代表勤履职 出谋划策促振兴',
    imglist: [
      'https://p6.itc.cn/q_70/images03/20220721/6143364de4c34a3c8ec49a9d1bfcf9ec.jpeg',
      'https://p9.itc.cn/q_70/images03/20220721/3beaf4e1016e430797592237cdaa6054.jpeg',
      'https://p2.itc.cn/q_70/images03/20220721/e27349011cf34f3298ae6351e772e4bf.jpeg',
    ],
    zuozhe: '云岩区',
    location: '云岩区人大',
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
