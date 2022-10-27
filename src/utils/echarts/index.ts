import { nextTick, onMounted, onUnmounted, unref } from 'vue';
import type { Ref } from 'vue';
import echarts from './lib';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';
import { RenderType, ThemeType, UseChartsOptionType } from './types';
export * from './types';

export default function useChart(
  elRef: Ref<HTMLDivElement>,
  option?: UseChartsOptionType
) {
  const { render, theme, autoChartSize, animation, registerMap } = option || {
    render: RenderType.SVGRenderer,
    autoChartSize: false,
    animation: {},
    theme: ThemeType.Default,
    registerMap: {},
  };
  // 渲染模式
  echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer);
  // echart实例
  let chartInstance: echarts.ECharts | null = null;
  try {
    registerMap &&
      echarts.registerMap(
        registerMap.mapName,
        registerMap.geoJson,
        registerMap.specialAreas
      );
  } catch (error) {
    console.error('registerMap ERROR', error);
  }

  // 初始化echart
  const initCharts = () => {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, theme);
  };

  // 更新/设置配置
  const setOption = (option: EChartsOption): void => {
    nextTick(() => {
      if (!chartInstance) {
        initCharts();
        if (!chartInstance) return;
      }

      chartInstance.setOption(option);
      hideLoading();
    });
  };

  // 获取echart实例
  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts();
    }
    return chartInstance;
  }

  // 更新大小
  function resize() {
    chartInstance?.resize();
  }

  // 监听元素大小
  function watchEl() {
    // 给元素添加过渡
    if (animation?.enable) {
      let styles = animation?.styles ?? {};
      for (let key in styles) {
        elRef.value.style[key] = styles[key];
      }
    }
    const resizeObserver = new ResizeObserver((entries) => resize());
    resizeObserver.observe(elRef.value);
  }

  // 显示加载状
  function showLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.showLoading();
  }
  // 显示加载状
  function hideLoading() {
    if (!chartInstance) {
      initCharts();
    }
    chartInstance?.hideLoading();
  }

  onMounted(() => {
    window.addEventListener('resize', resize);
    if (autoChartSize) watchEl();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  let currentMapIndex = 0;
  let mapTimer = 0;
  function IntervalMapShow(option: EChartsOption) {
    if (!chartInstance) {
      initCharts();
    }
    let seriesIndex = 0;
    // @ts-ignore
    const dataLen = option.series[seriesIndex].data.length;
    // 取消之前高亮的图形
    chartInstance?.dispatchAction({
      type: 'downplay',
      seriesIndex,
      dataIndex: currentMapIndex,
    });
    currentMapIndex = (currentMapIndex + 1) % dataLen;
    // 显示 tooltip
    chartInstance?.dispatchAction({
      type: 'showTip',
      seriesIndex,
      dataIndex: currentMapIndex,
    });
    // 高亮当前图形
    chartInstance?.dispatchAction({
      type: 'highlight',
      seriesIndex,
      dataIndex: currentMapIndex,
    });
    clearTimeout(mapTimer);
    mapTimer = setTimeout(function () {
      IntervalMapShow(option);
    }, 1000);
  }

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading,
    IntervalMapShow,
  };
}
