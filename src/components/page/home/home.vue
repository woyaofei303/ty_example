<template>
  <div class="homeBox">
    <div class="bannerBox">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="noticeDiv">
      <div class="noticeBox">
        <p>天下娱乐国际拥有九大真人娱乐平台，95%百家乐玩家一致推荐 - AG旗舰厅，随时洗码，享受娱乐无须等待。</p>
      </div>
    </div>
    <div class="homeMain">
      <div class="homeBoxDivTop">
        <div class="homeLeftTop">
          <div class="prizeDiv">
            <div class="prizeBox poolBox">
              <h3>奖池 JACKPOTS</h3>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="MG" name="first">
                  <h1>CNY 24,281,935.99</h1>
                </el-tab-pane>
                <el-tab-pane label="PT" name="second">
                  <h1>CNY 34,281,935.99</h1>
                </el-tab-pane>
                <el-tab-pane label="AG" name="third">
                  <h1>CNY 14,281,935.99</h1>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="prizeBox">
              <h3>流水排行榜</h3>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="本月" name="first">
                  <ul>
                    <li>ari***88……………………总流水量 678,567.08…………………………………1</li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="本周" name="second">

                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div  class="gameBox">
            <el-tabs :tab-position="tabPosition" >
              <el-tab-pane label="PT">用户管理</el-tab-pane>
              <el-tab-pane label="MG">配置管理</el-tab-pane>
              <el-tab-pane label="TTG">角色管理</el-tab-pane>
              <el-tab-pane label="BBIN">定时任务补偿</el-tab-pane>
              <el-tab-pane label="AG">定时任务补偿</el-tab-pane>
              <el-tab-pane label="OPU">定时任务补偿</el-tab-pane>
              <el-tab-pane label="MG">定时任务补偿</el-tab-pane>
              <el-tab-pane label="更多"></el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="homeRightTop">
          <div class="winnerBox">
            <h3>中奖信息</h3><a href="">查看更多<i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="winnerMain"></div>
        </div>
      </div>
      <div class="homeBoxDivBottom">
        <div class="homeLeftBottom">
          <div class="gameBox">
            <div class="gameDiv liveGame">
              <el-tabs :tab-position="tabPosition" >
                <el-tab-pane label="MG厅 ">用户管理</el-tab-pane>
                <el-tab-pane label="AG国际厅">配置管理</el-tab-pane>
                <el-tab-pane label="波音厅 ">角色管理</el-tab-pane>
                <el-tab-pane label="HG厅">定时任务补偿</el-tab-pane>
                <el-tab-pane label="更多"></el-tab-pane>
              </el-tabs>
            </div>
            <div class="gameDiv fishGame">
              <el-tabs :tab-position="tabPosition" >
                <el-tab-pane label="PT馆">用户管理</el-tab-pane>
                <el-tab-pane label="AG馆 ">配置管理</el-tab-pane>
                <el-tab-pane label="GG馆">角色管理</el-tab-pane>
              </el-tabs>
            </div>
          </div>
          <div class="gameBox">
            <el-tabs :tab-position="tabPosition" >
              <el-tab-pane label="巴沙体育">用户管理</el-tab-pane>
              <el-tab-pane label="SBT体育">配置管理</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="homeRightBottom">
          <div class="appBox"></div>
          <div class="guideBox"></div>
        </div>
      </div>
    </div>
    <div class="operationBox">
      <div class="operationDiv" >
        <el-row>
          <el-col :span="8"><div class="safeDay"></div><p>已持续安全运营 <span>5,600</span> 天</p></el-col>
          <el-col :span="8"><div class="numReg"></div><p>累积注册 <span>1,000,000</span> 名用户</p></el-col>
          <el-col :span="8"><div class="numAward"></div><p>今日累积派奖 ￥<span>100,000</span> 万</p></el-col>
        </el-row>
        <el-row style="margin-top: 10px;">
          <el-col :span="8"><div class="rechargeTime"></div><p>平均充值到账时间 <span>3’ 23</span> 秒</p></el-col>
          <el-col :span="8"><div class="withdrawTime"></div><p>平均提现到账时间 <span>5.38</span> 秒</p></el-col>
          <el-col :span="8"><div class="withdrawTotal"></div><p>今日累积提现 ￥<span>100,000</span> 万</p></el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    // name: "homePage"
    data(){
      return{
        activeName: 'first',
        tabPosition: 'bottom',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
  }
</script>

<style lang="scss">

  .el-aside, .el-main{
    overflow: hidden;
  }
  .el-tabs__active-bar{
    background-color:transparent;
  }
  .el-tabs__nav-wrap::after{
    background: none;
  }
  .homeBoxDivTop{
    overflow: hidden;
    .homeLeftTop{
      width: 840px;
      float: left;
    }

  }
  .prizeBox{
    display: inline-block;
    position: relative;
    .el-tabs__content{
      width: 415px;
      height: 100px;
      background: #212121;
      li{
        color:#888 ;
      }
    }
    .el-tabs__header{
      margin-bottom: 12px;
    }
    h1{
      font-size: 32px;
      color: #FFFFFF;
      text-align: center;
      line-height: 100px;
    }
    h3{
      position: absolute;
      font-size: 18px;
      color: #BD8D4B;
    }

    .el-tabs__item{
      width: 44px;
      height: 18px;
      text-align: center;
      line-height: 18px;
      border: 1px solid #979797;
      border-radius: 2px;
      font-size: 12px;
      color: #999999;
      padding: 0;
      margin-right: 10px;
    }

    .el-tabs__item.is-active{
      border: 1px solid #FFCC66;
      border-radius: 2px;
      color: #FFCC66;
    }
    .el-tabs__nav{
      position: relative;
      left: 160px;
      top: 0px;
    }
  }
  .el-tabs__item{
    height: auto;
    line-height: normal;
  }
  .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2){
    padding-left: 12px;
  }
  .el-tabs--bottom .el-tabs__item.is-bottom:last-child{
    padding-right: 12px;
  }
  .gameBox{
    .el-tabs__content{
      width: 840px;
      height: 293px;
    }
    .el-tabs__item{
      padding: 7px 12px;
      text-align: center;
      font-size: 14px;
      color: #999;
      display: inline-block;
      margin-left: 10px;
      &:hover{
        color: #BD8D4B;
        background: #141414;
      }
    }

    .el-tabs__item.is-active{
      background: #BD8D4B;
      border-radius: 2px;
      color: #000;
    }
    .gameDiv{
      display: inline-block;
      .el-tabs__content{
        border: 1px solid red;
        width: 413px;
        height: 220px;
      }

    }
  }

</style>
<style lang="scss" scoped>
  .homeBox{
    width: 100%;
    .bannerBox{
      height: 405px;
    }
    .noticeDiv{
      width: 100%;
      background: #000;
      height: 34px;
      .noticeBox{
        width: 1200px;
        margin: 0 auto;
        color: #fff;
        font-size: 14px;
        line-height: 34px;
      }
    }
    .homeMain{
      width: 100%;
      background: #141414;
      padding-top: 20px;
      .homeBoxDivTop{
        width: 1200px;
        margin: 0 auto;
        .prizeDiv{
          width: 840px;
          .poolBox{
            margin-right: 5px;
          }
        }
        .gameBox{
          width: 840px;

        }
      }
      .homeRightTop{
        width: 350px;
        float: right;
        .winnerBox{
          h3{
            font-size: 18px;
            color: #BD8D4B;
            margin: 0;
            padding: 0;
            display: inline-block;
          }
          a{
            font-size: 14px;
            color: #666666;
            float: right;
            text-decoration: none;
            margin-top: 4px;
          }
        }
        .winnerMain{
          margin-top: 6px;
          height: 443px;
          background: #212121;
          border: 1px solid #313131;
        }
      }
    }
    .homeBoxDivBottom{
      width: 1200px;
      margin: 5px auto 0;
      padding-bottom: 80px;
      overflow: hidden;
      .homeLeftBottom{
        width: 840px;
        overflow: hidden;
        float: left;
      }
      .liveGame{
        margin-right: 5px;
      }
      .homeRightBottom{
        width: 350px;
        /*display: inline-block;*/
        float: right;
        .appBox{
          height: 407px;
          background: #212121;
        }
        .guideBox{
          height: 129px;
        }
      }
    }
    .operationBox{
      .operationDiv{
        width: 1200px;
        height: 250px;
        margin: 0 auto;
        .el-row>.el-col div{
          width: 58px;
          height: 58px;
          background: url('../../../assets/home/operationIcon.jpg') no-repeat ;
          opacity: 0.5;
          background-size:cover;
          border-radius: 50%;
          position: relative;
          top: 40px;
        }
        .safeDay{
          background-position: 0 0;
        }
        .numReg{
          background-position: 0 -80px !important;
        }
        .numAward{
          background-position: 0 -159px !important;
        }
        .rechargeTime{
          background-position: 0 -240px !important;
        }
        .withdrawTime{
          background-position: 0 -323px !important;
        }
        .withdrawTotal{
          background-position: 0 -402px !important;
        }
        p{
          margin: 0 0 0 80px;
          /*margin-left: 80px;*/
          font-size: 16px;
          color: #888;
        }
        span{
          color: #ba8b4a;

        }
      }
    }
  }

</style>
