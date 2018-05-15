<template>
  <!--<el-container>-->
  <div class="footerBox">
    <div class="footerDiv">
      <div class="footerTop">
        <img src="../../assets/footer/img1.png" alt="" class="img1">
        <img src="../../assets/footer/img2.png" alt="" class="img2">
      </div>
      <div  class="footerBottom">
        <div class="bottomL">
          <div class="payBox">
            <label>支付方式</label>
            <div class="bankBox"></div>
            <div class="zfbBox"></div>
            <div class="wxBox"></div>
          </div>
          <div class="browserBox">
            <label>推荐浏览器</label>
            <ul>
              <li v-for="item in browsers">
                <a @click="goBrowser(item.route)">{{item.text}}</a>
              </li>
            </ul>
          </div>
          <p>系统要求:最佳浏览器分辨率为(1280×700),使用IE7.0以上或谷歌浏览器 </p>
        </div>
        <div class="bottomR">
          <div>
            <img src="../../assets/footer/logoBottom.png" alt="">
          </div>
          <ul>
            <li v-for="item in links"><a >{{item.text}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p>© 2018天下娱乐国际版权所有 All rights reserved.</p>

  </div>
  <!--</el-container>-->


</template>

<script>
  export default {
    // name: "footer"
    data(){
      return{
        links:[
          {
            text: '关于我们',
            // route: '/home'
          },
          {
            text: '博彩责任',
            // route: '/page01'
          },
          {
            text: '牌照展示',
            // route: '/page02'
          },
          {
            text:'加盟合作',
            // route:'/mangGuo' //组件名称
          },
          {
            text: '游戏介绍',
            // route: '/page02'
          },

        ],
        browsers:[
          {
            text: '谷歌',
            route: 'https://www.google.cn/chrome/index.html'
          },
          {
            text: '火狐',
            route: 'http://www.firefox.com.cn/download/'
          },
          {
            text: 'IE',
            route: 'https://www.microsoft.com/zh-cn/download/internet-explorer.aspx'
          },
        ]
      }
    },
    methods:{
      goBrowser(e){
        window.open(e)
        window.history.back(-1)
        // window.location.href = e
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footerBox{
    ul{
      margin: 0;
      padding: 0;
      list-style: none;
      li{
        list-style: none;
        display: inline-block;
        a{
          text-decoration: none;
          color: #666;
        }
      }
    }
    width: 1200px;
    height: 347px;
    margin: 0 auto;
    font-size: 14px;
    color: #666666;
    .footerDiv{
      height: 311px;
    }
    .footerTop{
      height: 124px;
      border-bottom: 1px solid #444;
      opacity: 0.5;
      overflow: hidden;
    }
    .img1{
      float: left;
      margin: 48px 0;
    }
    .img2{
      float: right;
      margin: 41px 0;
    }
    .bottomL{
      padding: 35px 0;
      float: left;
      text-align: left;
      div{
        position: relative;
        label{
          position: relative;
        }
      }
      label{
        display: inline-block;
      }
      img{
        height: 32px;
      }
      .payBox{
        div{
          display: inline-block;
          cursor: pointer;
          background-size: cover;
          height: 32px;
        }
        label{
          width: 32px;
          top:-2px;
        }
        .bankBox{
          background: url(../../assets/footer/pay.png) no-repeat;
          width: 104px;
          &:hover{
            background: url(../../assets/footer/payHower.png) no-repeat;
            background-position: 0 -1px;
          }
        }
        .zfbBox{
          background: url(../../assets/footer/pay.png) no-repeat;
          width: 80px;
          background-position: -104px 0px;
          &:hover{
            background: url(../../assets/footer/payHower.png) no-repeat;
            background-position:  -104px -1px;
          }
        }
        .wxBox{
          background: url(../../assets/footer/pay.png) no-repeat;
          width: 100px;
          &:hover{
            background: url(../../assets/footer/payHower.png) no-repeat;
            background-position: 0 -1px;
          }
        }
      }
      .browserBox{
        ul{
          display: inline-block;
        }
        li{
          margin-left: 10px;
          a{
            width:73px ;
            height: 34px;
            line-height: 34px;
            cursor: pointer;
            display: inline-block;
          }
          &:first-child a{
            background: url(../../assets/footer/browser.png) right no-repeat;
            background-position:  36px 0;
            &:hover{
              background: url(../../assets/footer/browserHover.png) right no-repeat;
              background-position:  36px 0;
              color: #fff;
            }
          }
          &:nth-child(2) a{
            background: url(../../assets/footer/browser.png) right no-repeat;
            background-position:  -37px 0;
            &:hover{
              background: url(../../assets/footer/browserHover.png) right no-repeat;
              background-position:  -37px 0;
              color: #fff;
            }
          }
          &:nth-child(3) a{
            background: url(../../assets/footer/browser.png) right no-repeat;
            background-position:  -110px 0;
            &:hover{
              background: url(../../assets/footer/browserHover.png) right no-repeat;
              background-position:  -110px -1px;
              color: #fff;
            }
          }
        }
      }
    }
    .bottomR{
      float: right;
      div{
        margin-top: 40px;
        text-align: center;
        img{
          width: 112px;
          opacity: 0.5;
        }
      }
      ul{
        list-style: none;
        margin:0;
        padding: 0;
      }
      li{
        float: left;
        width: 84px;
        text-align: center;
        border-right: 1px solid #353535;
        list-style: none;
        text-decoration: none;
        cursor: pointer;
      }
    }
    .item {
      margin-top: 10px;
      margin-right: 40px;
    }
    p{
      text-align: center;
    }
  }
</style>
