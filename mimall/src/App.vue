<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'

export default {
  name:'app',
  data (){
    return {
      res:{}
    }
  },
  mounted(){
    //本地集成Mock
    this.axios.get('/user/login').then((res)=>{
      this.res = res;
    });
  } 
}
</script>
 
<style>
/**导入scss文件 */
@import './assets/scss/reset.scss'
</style>
