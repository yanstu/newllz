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
          <van-icon size="45" color="#49AFFE" :name="item.icon" />
          <text>{{ item.text }}</text>
        </view>
      </view>
      <view class="tongjitu">
        <tubiao></tubiao>
      </view>
    </view>
    <view class="zhuanjia">
      <view class="zhuanjia-title">
        查看专家
        <text class="more">更多 > </text>
      </view>
      <view class="zhuanjia-list">
        <view :key="item" v-for="item in zhuanjiaList">
          <view class="avatar">
            <image :src="item.avatar" />
          </view>
          <view class="profile">
            <text>姓名：{{ item.name }}</text>
            <text>单位：{{ item.danwei }}</text>
            <view>专家简介 > </view>
          </view>
        </view>
      </view>
    </view>
    <view class="zixun">
      <view class="zixun-title">
        最新咨询
        <text class="more">更多 > </text>
      </view>
      <view class="zixun-list">
        <view :key="index" v-for="(item, index) in zixunList">
          <view class="wenti">
            Q：
            <text>{{ item.wenti }}</text>
          </view>
          <view class="daan">
            A：
            <text>{{ item.daan }}</text>
          </view>
          <view v-if="index != zixunList.length - 1" class="divider"> </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import changzhuList, { changzhu } from './changzhuList';

const zhuanjiaList = ref([
  {
    name: '张润林',
    danwei: '贵州省十方科技有限公司',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F04%2F20210504062111_d8dc3.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668668754&t=6ed92ef27c361ae623301c64e5b4b515',
  },
  {
    name: '张润林',
    danwei: '贵州省十方科技有限公司',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F04%2F20210504062111_d8dc3.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668668754&t=6ed92ef27c361ae623301c64e5b4b515',
  },
  {
    name: '张润林',
    danwei: '贵州省十方科技有限公司',
    avatar:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202105%2F04%2F20210504062111_d8dc3.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668668754&t=6ed92ef27c361ae623301c64e5b4b515',
  },
]);

const zixunList = ref([
  {
    wenti: '儿童矮小症接受治疗的最佳年龄段是什么时候？如果错过最佳治疗时',
    daan: '儿童矮小症治疗的最佳年龄是在13岁之前，如果做过了最佳治疗时期，即使使用再多的药物效果也是不好的，目前年龄是9',
  },
  {
    wenti: '每个孩子都有必要测骨龄吗？什么时候测最好？',
    daan: '因为骨龄是评估孩子身体发育手段，不需要每一个孩子都去测骨龄，如果在儿童保健，或是生长发育监测当中，医生评估或经',
  },
  {
    wenti: '小儿感冒后服药和输液比较推荐哪个？',
    daan: '感冒一般不输液，因为感冒大部分是病毒引起，即使是细菌感染引起，不是很严重的细菌感染，也不建议输液，现在医生和家',
  },
  {
    wenti: '家长应对孩子感冒的常见误区有哪些？',
    daan: '儿童矮小症治疗的最佳年龄是在13岁之前，如果做过了最佳治疗时期，即使使用再多的药物效果也是不好的，目前年龄是9',
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
.zhuanjia {
  margin-top: 30rpx;
  padding: 0 10rpx;
  .zhuanjia-title {
    background: linear-gradient(to right, #1876cf, #a7daf9);
    color: white;
    display: flex;
    height: 60rpx;
    padding: 0 15rpx;
    justify-content: space-between;
    align-items: center;
    font-size: 35rpx;
    .more {
      font-size: 26rpx;
      color: #1876cf;
      text-decoration: underline;
    }
  }
  .zhuanjia-list {
    margin-top: 30rpx;
    > view {
      padding: 10rpx;
      display: flex;
      height: 150rpx;
      border: 1px solid rgba(209, 208, 208, 0.8);
      border-bottom: none;
      .avatar {
        width: 15%;
        image {
          width: 100%;
          height: 100%;
        }
      }
      .profile {
        width: 85%;
        display: flex;
        flex-direction: column;
        padding-left: 10rpx;
        position: relative;
        > view {
          position: absolute;
          right: 10rpx;
          bottom: 10rpx;
          text-align: right;
          font-size: small;
          text-decoration: underline;
        }
      }
    }
    > view:last-child {
      border-bottom: 1px solid rgba(209, 208, 208, 0.8);
    }
  }
}
.zixun {
  margin-top: 20rpx;
  padding: 0 10rpx;
  .zixun-title {
    background: linear-gradient(to right, #2ba4da, #1fa840);
    color: white;
    display: flex;
    height: 60rpx;
    padding: 0 15rpx;
    justify-content: space-between;
    align-items: center;
    font-size: 35rpx;
    .more {
      font-size: 26rpx;
      color: #1876cf;
      text-decoration: underline;
    }
  }
  .zixun-list {
    margin-top: 20rpx;
    > view {
      > view {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .wenti {
        color: #00af80;
        > text {
          color: black;
        }
      }
      .daan {
        color: #ff8629;
        > text {
          color: #908988;
        }
      }
      .divider {
        height: 0.5px;
        background: rgba(209, 208, 208, 0.5);
        margin: 20rpx 0;
      }
    }
  }
}
</style>
