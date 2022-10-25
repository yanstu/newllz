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

const data = [
  { value: 62046, name: '男' },
  { value: 23282, name: '女' },
];

const option = computed<EChartsOption>(() => ({
  color: ['#61a9e2', '#fe893c'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    formatter: function (name: any) {
      let sss = data.find((item) => item.name == name);
      return name + ' | ' + sss.value;
    },
  },
  series: [
    {
      name: '男女比例',
      type: 'pie',
      radius: '50%',
      data,
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
