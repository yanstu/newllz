<template>
  <view>
    <div ref="chartEl" class="charts"></div>
  </view>
</template>

<script setup lang="ts">
import useChart from '@/utils/echarts';
import type { EChartsOption } from 'echarts';
const chartEl = ref<HTMLDivElement | null>(null);

const { setOption, showLoading } = useChart(chartEl as Ref<HTMLDivElement>, {
  autoChartSize: true,
  animation: {
    enable: true,
    styles: {
      transition: 'all 2s',
    },
  },
});

const option = computed<EChartsOption>(() => ({
  color: ['#5A9AD7'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '星期六',
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [3, 4, 1, 5, 7, 10, 4],
    },
  ],
}));

const getData = async () => {
  showLoading();
  try {
    setOption(option.value);
  } catch {
    setOption({
      title: {
        show: true,
        text: '获取数据失败',
        left: 'center',
        top: 'center',
        textStyle: {
          fontSize: 20,
        },
      },
    });
  }
};

onMounted(() => {
  nextTick(() => {
    getData();
  });
});
</script>

<style lang="scss">
.charts {
  width: 100%;
  height: 300rpx;
}
</style>
