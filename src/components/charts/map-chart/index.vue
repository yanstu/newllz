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
const { setOption, showLoading, IntervalMapShow } = useChart(
  chartEl as Ref<HTMLDivElement>,
  {
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
  }
);
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
  return {
    regionsData,
    MapRowsData,
  };
})();

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'RGBA(47,64,86,0.8)',
    formatter: function (data) {
      /*const info = data.data;
      const docment = `<div style="width: auto;font-size: 26rpx;line-height: 34rpx;padding: 6rpx !important;padding-left: 10rpx !important;padding-right: 10rpx !important;color: #efe2e2;border-radius: 4px;background-color: rgba(32, 32, 32, 0.8) !important;">
        <table border="1" borderColor="#8CE2F3" style="width: 60px;height:60px;border-collapse: collapse">
          <tr>
            <td colspan="6" style="height:20px;text-align: left;font-size:20rpx;font-weight: bold;padding-left: 5px;">${info.name}人大代表网上联络站</td>
          </tr>
        </table>
      </div>`;
      return docment;*/
    },
    position: function (point, params, dom, rect, size) {
      let x = 0; // x坐标位置
      let y = 0; // y坐标位置
      let pointX = point[0];
      let pointY = point[1];
      let boxWidth = size.contentSize[0];
      let boxHeight = size.contentSize[1];
      if (boxWidth > pointX) {
        x = 5;
      } else {
        x = pointX - boxWidth;
      }
      if (boxHeight > pointY) {
        y = 5;
      } else {
        y = pointY - boxHeight;
      }
      return [x, y];
    },
  },
  geo: {
    regions: mapHandle.regionsData,
    zoom: 1.2,
    zlevel: -1,
    map: 'GUIZHOU',
    mapType: 'GUIZHOU',
    label: {
      normal: {
        fontSize: '32rpx',
        textStyle: {
          color: '#000',
        },
        show: true,
      },
    },
    itemStyle: {
      normal: {
        borderWidth: 0,
      },
      emphasis: {
        areaColor: '#ffeb7b', //选中的颜色
        borderWidth: 0.1,
      },
    },
  },
  grid: {
    top: '0%',
    bottom: '10%',
  },
  series: [
    {
      type: 'map',
      zlevel: 1,
      zoom: 1.2,
      map: 'GUIZHOU',
      mapType: 'GUIZHOU',
      backgroundColor: '#fff',
      itemStyle: {
        normal: {
          color: '#fff',
          borderColor: 'rgba(255,255,255,0.6)',
          borderWidth: 0,
          areaColor: {
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
        },
      },
      data: mapHandle.MapRowsData,
    },
  ],
}));

const getData = async () => {
  showLoading();
  try {
    setOption(option.value);
    try {
      IntervalMapShow(option.value);
    } catch (error) {
      console.log(error);
    }
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
