//插件写上面
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router.js'
import store from './store'
import env from './env'

//mock开关
const mock = true;
if(mock){
  require('./mock/api')
}

//组件写下面
import App from './App.vue'

//根据前端的跨域方式做调整 /a/b 访问时变成 /api/a/b
axios.defaults.baseURL = '/api';//接口代理方式
axios.defaults.timeout = 8000;//定义超时时间，提升用户体验

//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;//取到接口的值,response.data是axios规定的
  if(res.status == 0){
    //status 0 成功
    return res.data;//接口返回的具体值 status data
  }else if(res.status == 10){
    //status 10 未登录拦截
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
