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
    name: '唐晓旭',
    danwei: '北京浩博正义科技有限公司',
    avatar: 'https://testvideo.gzshifang.com:9007/HeadPortrait/defaultQZ.png',
  },
  {
    name: '张进飞',
    danwei: '海南拔得魁首科技有限公司',
    avatar: 'https://testvideo.gzshifang.com:9007/HeadPortrait/defaultQZ.png',
  },
  {
    name: '张润林',
    danwei: '上海市锦天城律师事务所',
    avatar: 'https://testvideo.gzshifang.com:9007/HeadPortrait/defaultQZ.png',
  },
]);

const zixunList = ref([
  {
    wenti: '乡镇人大代表的职责和义务是什么？',
    daan: '根据《宪法》规定，乡镇人大代表的权利：审议权、提案权、表决权、建议权、批评权、罢免权、选举权、人大代表在闭会期间活动的权利、询问权和质询权。',
  },
  {
    wenti: '土地确权过程中，土地证上的面积与争议土地面积不相符，应该怎么处理？',
    daan: '地证面积与实际面积不符,应找到有管辖权的国土资源局申请重新勘测,要求核实土地使用证上的面积和实际使用面积不符的情况,请求当地的国土资源局按照实地四至',
  },
  {
    wenti: '关于损害基层生态环境如何定责。',
    daan: '《民法典》第1234条规定违反国家规定造成生态环境损害,生态环境能够修复的,国家规定的机关或者法律规定的组织有权请求侵权人在合理期限内承担修复责任',
  },
  {
    wenti: '县人大代袁的职责及义务是什么？',
    daan: '县人大代表的职责与义务是：模范地遵守宪法和法律。保守国家秘密。联系群众。参加人民代表大会会议。具体的工作范围包括审查和批准本行政区域内的国民经济和社会发展计划、预算以及它们的执行情况的报告；有权改变或者撤销本级人民代表大会常务委员会不适当的决定。',
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
