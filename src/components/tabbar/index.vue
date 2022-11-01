<template>
  <view>
    <router-view />
    <van-tabbar route v-model="active" @change="onChange">
      <van-tabbar-item
        replace
        :to="item.pagePath"
        :name="index"
        v-for="(item, index) in tabbarList"
        :key="index"
      >
        <template #icon="props">
          <lottie
            :active="props.active"
            :size="28"
            :src="props.active ? item.selectedIconPath : item.iconPath"
          ></lottie>
        </template>
        <text>{{ item.text }}</text>
      </van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup lang="ts">
import lottie from './lottie';
const homeNotSelected = require('./assets/home-notselected.json');
const homeSelected = require('./assets/home-selected.json');
const lianluoNotSelected = require('./assets/lianluo-notselected.json');
const lianluoSelected = require('./assets/lianluo-selected.json');
const meNotSelected = require('./assets/me-notselected.json');
const meSelected = require('./assets/me-selected.json');
const active = ref(0);

interface tabbarItem {
  pagePath: string;
  text: string;
  iconPath: JSON;
  selectedIconPath: JSON;
}

const tabbarList: Array<tabbarItem> = [
  {
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: homeNotSelected,
    selectedIconPath: homeSelected,
  },
  {
    pagePath: '/pages/llz/index',
    text: '联络站',
    iconPath: lianluoNotSelected,
    selectedIconPath: lianluoSelected,
  },
  {
    pagePath: '/pages/me/index',
    text: '我的',
    iconPath: meNotSelected,
    selectedIconPath: meSelected,
  },
];
</script>

<style lang="scss"></style>
