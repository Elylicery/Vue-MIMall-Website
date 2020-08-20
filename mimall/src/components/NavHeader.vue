<template>
 <div class="header">
   <!--头部菜单条-->
   <div class="nav-topbar">
     <div class="container">
       <div class="topbar-menu">
         <a href="javascirpt:">小米商城</a>
         <a href="javascirpt:">MUI</a>
         <a href="javascirpt:">云服务</a>
         <a href="javascirpt:">协议规则</a>
       </div>
       <div class="topbar-user">
          <a href="javascirpt:">登录</a>
          <a href="javascirpt:">注册</a>
          <a href="javascirpt:" class="my-cart"><span class="icon-cart"></span>购物车</a>  
        </div> 
     </div>
   </div>
   <!--导航菜单-->
   <div class="nav-header">
     <div class="container">
      <!--logo-->
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <!--菜单-->
      <div class="header-menu">
        <div class="item-menu">
          <span>小米手机</span>
          <div class="children">
            <ul>
                
            </ul>
          </div>
        </div>
        <div class="item-menu">
          <span>RedMi红米</span>
          <div class="children">
            
          </div>
        </div>
        <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <!--搜索区域-->
      <div class="header-search">
        <div class="wrapper">
          <input type="text" name="keyword">
          <a href="javascipt:;"></a>
        </div>
     </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name:'nav-header',
  data(){
    return {
      username:'jack',
      phoneList:[],
    }
  },
  mounted(){
    this.getProductList();
  },
  methods:{
    /**
     * 获取菜单展开栏(手机)的商品列表
     */
    getProductList(){
      this.axios.get('/products',{
        //get传参用params,post传参直接写
        params:{
          categoryId:'10012'
        }
      }).then((res)=>{
        if(res.list.length>6){
          this.phoneList = res.list.slice(0,6);
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container{
      @include flex();
      a{
        display: inline-block;
        color:#b0b0b0;
        margin-right:17px;
      }
      .my-cart{
        width: 110px;
        background-color: #FF6600;
        text-align: center;
        color:#fff;
        .icon-cart{
          @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
          margin-right: 10px;
        }
      }
    }
  }
  .nav-header{
    .container{
      height: 112px;
      position: relative;
      @include flex();
      /*LOGO可视化区域 */
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #FF6600;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{//`&:before{}`是scss规定的伪类的简写
            content: ' ';//content是占位，不加的话伪类无法生效
            @include bgImg(55px,55px,'/imgs/mi-logo.png','55px');
            transition: margin .2s;
          }
          &:after{
            content: ' ';
            @include bgImg(55px,55px,'/imgs/mi-home.png','55px');
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2s;
          }
        }
      }
      /*展开菜单*/
      .header-menu{
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color:#333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top:112px;
            left: 0;
            width: 1226px;
            height: 220px;
            opacity: 0;
            overflow: hidden;//隐藏
            border-top:1px solid #E5E5E5;
            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
            z-index: 10;
            transition: all .5s;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;//a里嵌套div，要让他变为块级元素，被子元素自动撑满
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top:19px;
                margin-bottom: 8px;
                color:$colorB;
              }
              .pro-price{
                color:$colorA;
              }
              &:before{
              content: '';
              position: absolute;//绝对定位的元素相对于li标签进行定位，所以要给li标签加position：relative
              top: 28px;
              right: 0;
              border-left: 1px solid $colorF;
              height: 100px;
              width: 1px;
            }
            //去掉最后一个元素的分隔符
            &:last-child:before{
              display: none;
            }
            }
          }
        }
      }
      /**搜索框 */
      .header-search{
        width:319px;
        .wrapper{
          height:50px;
          border: 1px solid #E0E0E0;
          display: flex;
          align-items: center;
          input{
            border: none;
            box-sizing: border-box;//设置盒模型，宽固定为264，不会包括padding值
            border-right: 1px solid #E0E0E0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a{
            display: inline-block;//为标签设置背景一般都这样
            @include bgImg(18px,18px,'/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}

</style>