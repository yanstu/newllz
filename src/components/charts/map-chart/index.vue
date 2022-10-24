<template>
  <view>
    <div
      ref="chartEl"
      class="charts"
      :style="{ height: chartHeight + 'rpx' }"
    ></div>
  </view>
</template>

<script setup lang="ts">
import useChart, { ThemeType } from '@/utils/echarts';
import type { EChartsOption } from 'echarts';
const chartEl = ref<HTMLDivElement | null>(null);
import geo from './geo.json';

const chartHeight = '500';
const { setOption, showLoading } = useChart(chartEl as Ref<HTMLDivElement>, {
  autoChartSize: true,
  animation: {
    enable: true,
    styles: {
      transition: 'all 2s',
    },
  },
  theme: ThemeType.Macarons,
  registerMap: {
    mapName: 'GUIZHOU',
    geoJson: geo,
  },
});
let mapHandle = ((): {
  regionsData: AnyObject;
  MapRowsData: AnyObject;
} => {
  let HaveData = false;
  let regionsData = [];
  let MapRowsData = [];
  const colors = [
    {
      name: '遵义',
      color: '#FFB980',
    },
    {
      name: '铜仁',
      color: '#BEBEBE',
    },
    {
      name: '黔东南',
      color: '#DDCFE6',
    },
    {
      name: '黔南',
      color: '#DC69AA',
    },
    {
      name: '黔西南',
      color: '#97B552',
    },
    {
      name: '六盘水',
      color: '#5AB1EF',
    },
    {
      name: '毕节',
      color: '#8D98B3',
    },
    {
      name: '贵阳',
      color: '#B6A2DE',
    },
    {
      name: '安顺',
      color: '#D87A80',
    },
  ];
  for (let i = 0; i < geo.features.length; i++) {
    const item = geo.features[i];
    const cityName = item.properties.name;
    const areaColor = colors.find((color) => color.name == cityName)?.color;
    if (String(item.XZBM) == String(item.properties.adcode)) {
      MapRowsData.push({
        name: cityName,
        value: i + 1,
        llzdata: O,
      });
      regionsData.push({
        name: cityName, //区块名称
        itemStyle: { areaColor },
        llzdata: item,
      });
      HaveData = true;
    }
    if (!HaveData) {
      MapRowsData.push({
        name: cityName,
        value: i + 1,
        llzdata: null,
      });
      regionsData.push({
        name: cityName, //区块名称
        itemStyle: { areaColor },
        llzdata: null,
      });
    }
  }
  console.log('[ regionsData ] >', regionsData);
  return {
    regionsData,
    MapRowsData,
  };
})();

const option = computed<EChartsOption>(() => ({
  title: {
    text: '石阡县人大代表网上联络站分布概况',
    show: false,
    left: '4%',
    textStyle: {
      //默认显示区域名称颜色
      color: '#245454',
      fontSize: '32rpx',
    },
  },
  geo: {
    regions: mapHandle.regionsData,
    zoom: 1.2,
    zlevel: 3,
    map: 'GUIZHOU',
    mapType: 'GUIZHOU',
    label: {
      normal: {
        fontSize: '32rpx',
        textStyle: {
          //默认显示区域名称颜色
          color: '#000',
        },
        show: true,
      },
      //鼠标移入后查看效果
      emphasis: {
        fontSize: 10,
        textStyle: {
          color: '#000',
        },
      },
    },
    itemStyle: {
      normal: {
        borderWidth: 0,
      },
      emphasis: {
        //areaColor: '#ffeb7b',//选中的颜色
        borderWidth: 0,
      },
    },
  },
  grid: {
    top: '0%',
    bottom: '10%',
  },
  series: [
    {
      name: '贵州省联络站分布概况',
      type: 'map',
      zoom: 1.2,
      zlevel: 1,
      map: 'GUIZHOU',
      mapType: 'GUIZHOU',
      mapLocation: {
        y: 100,
      },
      backgroundColor: '#fff',
      itemStyle: {
        normal: {
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.6)',
          borderWidth: 0,
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: 'RGBA(255,255,255,0)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'RGBA(255,255,255,0)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          },
          shadowColor: 'rgba(255,255,255,0)',
          shadowOffsetX: -2,
          shadowOffsetY: 2,
          shadowBlur: 0,
        },
        emphasis: {
          areaColor: '#ffeb7b',
          borderWidth: 0,
        },
      },
      label: {
        normal: {
          fontSize: '32rpx',
          textStyle: {
            //默认显示区域名称颜色
            color: '#000',
          },
          show: false,
        },
        //鼠标移入后查看效果
        emphasis: {
          fontSize: '32rpx',
          show: false,
        },
        data: mapHandle.MapRowsData,
      },
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
}
</style>
