<template>
  <view>
    <router-view />
    <van-tabbar route v-model="active" @change="onChange">
      <van-tabbar-item
        replace
        :to="item.pagePath"
        :name="item.text"
        v-for="item in tabbarList"
        :key="item"
      >
        <span>{{ item.text }}</span>
        <template #icon="props">
          <img :src="props.active ? item.selectedIconPath : item.iconPath" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script setup lang="ts">

const active = ref(0);

const tabbarList = [
  {
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: require('@img/tabBar/home.png'),
    selectedIconPath: require('@img/tabBar/selectedHome.png'),
  },
  {
    pagePath: '/pages/demo/index',
    text: 'Demo',
    iconPath: require('@img/tabBar/demo.png'),
    selectedIconPath: require('@img/tabBar/selectedDemo.png'),
  },
  {
    pagePath: '/pages/me/index',
    text: '我的',
    iconPath: require('@img/tabBar/about.png'),
    selectedIconPath: require('@img/tabBar/selectedAbout.png'),
  },
];

</script>

<style lang="scss"></style>
