import wxApi, { getQueryObject, wxOAuth2 } from '@/utils/wx';
import { getAppIdAndAppSecret } from '@/services/api/auth';
import { Toast } from 'vant';
import { useAuthStore } from '@/state/modules/auth';

export default function chushihua(): void {
  wxApi.saveIosFirstLink();
  const { code } = getQueryObject(location.href);
  if (!wxApi.isWx) return;
  const authStore = useAuthStore();
  return;
  getAppIdAndAppSecret({ WXID_QYBH: '' })
    .then((res) => {
      if (res.data.Code != 0) {
        console.error('[ useWxApi ] >', res.data.Message);
        Toast('请求出错！');
        return;
      }
      if (!code) {
        wxOAuth2(res.data.Data.appId);
        return;
      }
      authStore.wxlogin(code).then((res) => {
        Toast.success('登录成功');
      });
    })
    .catch((error) => {
      console.error('[ useWxApi ] >', error);
      Toast('请求出错！');
    });
}
