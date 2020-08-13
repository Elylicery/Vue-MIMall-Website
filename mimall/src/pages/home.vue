<template>
  <!--主页面-->
  <div>
    home
    <nav-header>
      <router-view></router-view>
    </nav-header>
    <Index></Index>
    <nav-footer>
      <router-view></router-view>
    </nav-footer>
  </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
import Index from './index'
export default {
  name:'nav-home',
  components:{
    NavHeader,
    NavFooter,
    Index
  }
  
}
</script>

<style>

</style>