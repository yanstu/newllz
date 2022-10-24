export enum RenderType {
  SVGRenderer = 'SVGRenderer',
  CanvasRenderer = 'SVGRenderer',
}
export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
  Default = 'default',
  Macarons = 'macarons'
}
export interface AnimationType {
  enable?: boolean;
  styles?: {
    [attr: string]: string;
  };
}
export interface registerMapType {
  mapName: string;
  geoJson: AnyObject;
  specialAreas?: AnyObject;
}
export interface UseChartsOptionType {
  autoChartSize?: boolean;
  animation?: AnimationType;
  render?: RenderType;
  theme?: ThemeType;
  registerMap?: registerMapType;
}
