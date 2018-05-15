<template>
  <div class="header">
    <div class="header_bar">
      <ul class="header_bar_left">
        <li>
          <a href="" @mouseenter="dotShow(1)" @mouseleave="dotHide(1)"><span class="dot" v-bind:class="{dot_bg_1: is_show_dot_1}"></span>论坛</a>
        </li>
        <li>
          <a href="" @mouseenter="dotShow(2)" @mouseleave="dotHide(2)"><span class="dot" v-bind:class="{dot_bg_2: is_show_dot_2}"></span>域名检测</a>
        </li>
        <li>
          <a href="" @mouseenter="dotShow(3)" @mouseleave="dotHide(3)"><span class="dot" v-bind:class="{dot_bg_3: is_show_dot_3}"></span>下载中心</a>
        </li>
        <li>
          <a href="" @mouseenter="dotShow(4)" @mouseleave="dotHide(4)"><span class="dot" v-bind:class="{dot_bg_4: is_show_dot_4}"></span>服务帮助</a>
        </li>
      </ul>
      <ul class="header_bar_right">
        <li>
          <el-row>
            <el-button type="warning" size="mini" class="login_btn" @click="loginDialogVisible = true">登录</el-button>
          </el-row>
        </li>
        <li>
          <el-row>
            <el-button type="warning" size="mini" class="reg_btn" @click="registerDialogVisible = true">注册</el-button>
          </el-row>
        </li>
      </ul>
    </div>

    <el-dialog title="账号登录" :visible.sync="loginDialogVisible" center class="login_dialog">
      <el-form :model="loginValidateForm" label-width="100px" ref="loginValidateForm">
        <el-form-item prop="username" label="" :rules="rules.username">
          <el-input v-model="loginValidateForm.username" placeholder="用户名" type="text" maxlength="11" clearable class="username_margin"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="" :rules="rules.password">
          <el-input v-model="loginValidateForm.password" placeholder="密码" maxlength="16" type="password" clearable class="same_margin"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="" :rules="rules.code">
          <el-input v-model="loginValidateForm.code" placeholder="验证码" maxlength="4" clearable class="same_margin code_width"></el-input>
        </el-form-item>
        <div class="code_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg" class="img_box" @click="getCaptchaCode">
        </div>
        <el-button type="primary" class="login_submit reg_submit" @click="submitLoginForm('loginValidateForm')">登 录</el-button>
        <el-button type="primary" class="reset_submit" @click="resetForm('loginValidateForm')">重 置</el-button>
        <a href="javascript:void(0);" class="login_reg" @click="tabLoginAndOpenReg()">免费注册</a>
        <a href="javascript:void(0);" class="login_forget_pwd">忘记密码</a>
      </el-form>
    </el-dialog>

    <el-dialog title="免费注册" :visible.sync="registerDialogVisible" center class="login_dialog reg_dialog">
      <el-form :model="registerValidateForm" label-width="100px" ref="registerValidateForm">
        <el-form-item prop="username" label="" :rules="rules.username">
          <el-input v-model="registerValidateForm.username" placeholder="用户名" type="text" maxlength="11" clearable class="username_margin"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="" :rules="rules.password">
          <el-input v-model="registerValidateForm.password" placeholder="密码" maxlength="16" type="password" clearable class="same_margin"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" label="" :rules="rules.checkPass">
          <el-input v-model="registerValidateForm.checkPass" placeholder="再次输入" maxlength="16" type="password" clearable class="same_margin"></el-input>
        </el-form-item>
        <!--<el-form-item prop="nickname" label="" :rules="rules.nickname">-->
          <!--<el-input v-model="registerValidateForm.nickname" placeholder="昵称" type="text" maxlength="16" clearable class="same_margin"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item prop="tel" label="" :rules="rules.tel">
          <el-input v-model="registerValidateForm.tel" placeholder="电话号码" type="tel" maxlength="11" clearable class="same_margin"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="" :rules="rules.email">
          <el-input v-model="registerValidateForm.email" placeholder="邮箱" type="email" maxlength="20" clearable class="same_margin"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="" :rules="rules.code">
          <el-input v-model="registerValidateForm.code" placeholder="验证码" maxlength="4" clearable class="same_margin code_width"></el-input>
        </el-form-item>
        <div class="code_img reg_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg" class="img_box" @click="getCaptchaCode">
        </div>
        <el-button type="primary" class="reg_submit" @click="submitRegisterForm('registerValidateForm')">注 册</el-button>
        <el-button type="primary" class="reset_submit" @click="resetForm('registerValidateForm')">重 置</el-button>
        <a href="javascript:void(0);" class="login_forget_pwd login_box" @click="tabLoginAndOpenReg()">已有账号，直接登录</a>
      </el-form>
    </el-dialog>

    <div class="header_line"></div>
    <div class="header_menu">

      <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
        <!--<el-menu-item index="1">处理中心</el-menu-item>-->
        <!--<el-submenu index="2">-->
          <!--<template slot="title">我的工作台</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-submenu>-->
        <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
        <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <!--</el-menu>-->

      <!--<el-menu-->
        <!--:default-active="activeIndex2"-->
        <!--class="el-menu-demo"-->
        <!--mode="horizontal"-->
        <!--@select="handleSelect"-->
        <!--background-color="#545c64"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b">-->
        <!--<el-menu-item index="1">处理中心</el-menu-item>-->
        <!--<el-submenu index="2">-->
          <!--<template slot="title">我的工作台</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
            <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-submenu>-->
        <!--<el-menu-item index="3" disabled>消息中心</el-menu-item>-->
        <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <!--</el-menu>-->

    </div>
  </div>
</template>

<script>
  import {getcaptchas, registerAccount, loginAccount} from '../../services/getData';

  export default {
    data() {
      // 用户名验证
      let validatePass1 = (rule, value, callback) => {
        // 5-11位, 数字或字母
        let reg = /^[a-zA-Z]\w{4,10}$/;
        if (!reg.test(value)) {
          callback(new Error('以字母开头，长度在5-11之间，字符、数字和下划线'))
        } else {
          callback()
        }
      };
      //密码验证
      let validatePass2 = (rule, value, callback) => {
        // 6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格
        let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
        if (!reg.test(value)) {
          callback(new Error('密码长度需6-16位，且包含字母和字符'))
        } else {
          callback()
        }
      };
      //监测两次密码是否相同
      let validatePass3 = (rule, value, callback) => {
        value === '' ? callback(new Error('请再次输入密码')) :
          value !== this.registerValidateForm.password ? callback(new Error('两次输入密码不一致!')) :
            callback()
      };
      //昵称
      let validatePass4 = (rule, value, callback) => {
        //只能中英文，数字，下划线，减号
        let reg = /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/;
        if (!reg.test(value)) {
          callback(new Error('只能中英文，数字，下划线，减号'))
        } else {
          callback()
        }
      };
      //电话号码
      let validatePass5 = (rule, value, callback) => {
        let reg = /^1[0-9]{10}/;
        if (!reg.test(value)) {
          callback(new Error('请输入11位数字的电话号码'))
        } else {
          callback()
        }
      };
      //验证邮箱
      let validatePass6 = (rule, value, callback) => {
        let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(value)) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
      };
      //验证码
      let validatePass7 = (rule, value, callback) => {
        let reg = /^\d{4}$/
        if (!reg.test(value)) {
          callback(new Error('请输入4位数字的验证码'))
        } else {
          callback()
        }
      };
      return {
        is_show_dot_1: false,
        is_show_dot_2: false,
        is_show_dot_3: false,
        is_show_dot_4: false,

        loginDialogVisible: false,
        registerDialogVisible: false,

        captchaCodeImg: null,

        activeIndex: '1',
        activeIndex2: '1',

        loginValidateForm: {
          username: '',
          password: '',
          code: '',
        },

        registerValidateForm: {
          username: '',
          password: '',
          checkPass: '',
          tel: '',
          email: '',
          code: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名',trigger: 'blur'},
            {validator: validatePass1, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {validator: validatePass2, trigger: 'blur'}
          ],
          checkPass: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validatePass3, trigger: 'blur'}
          ],
          nickname: [
            {required: true, message: '请输入昵称', trigger: 'blur'},
            {validator: validatePass4, trigger: 'blur'}
          ],
          tel: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {validator: validatePass5, trigger: 'blur'}
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {validator: validatePass6, trigger: 'blur'}
          ],
          code: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {validator: validatePass7, trigger: 'blur'},
          ]
        }

      }
    },
    created() {
      this.getCaptchaCode();
    },
    methods: {
       submitLoginForm(formName) {
         this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let opt = this.LoginValidateForm;
            let res = await loginAccount(opt);
            if(res.status === 200) {
              this.$message({
                type: 'success',
                message: `请登录`
              })
            } else {
              this.$message({
                type: 'info',
                message: '此账户不存在'
              })
            }
          } else {
            console.log('Error Submit!!');
            return false;
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitRegisterForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let opt = this.registerValidateForm;
            let res = await registerAccount(opt);
            if(res.status === 200) {
              this.$message({
                type: 'success',
                message: `注册成功，请登录`
              })
            } else {
              this.$message({
                type: 'info',
                message: '此账户已存在'
              })
            }
          } else {
            console.log('Error Submit!!');
            return false;
          }
        })
      },
      dotShow(index) {
        switch (index) {
          case 1: {
            this.is_show_dot_1 = !this.is_show_dot_1;
          }
            break;
          case 2: {
            this.is_show_dot_2 = !this.is_show_dot_2;
          }
            break;
          case 3: {
            this.is_show_dot_3 = !this.is_show_dot_3;
          }
            break;
          case 4: {
            this.is_show_dot_4 = !this.is_show_dot_4;
          }
            break;
          default:
            break;
        }
      },
      dotHide(index) {
        switch (index) {
          case 1: {
            this.is_show_dot_1 = !this.is_show_dot_1;
          }
            break;
          case 2: {
            this.is_show_dot_2 = !this.is_show_dot_2;
          }
            break;
          case 3: {
            this.is_show_dot_3 = !this.is_show_dot_3;
          }
            break;
          case 4: {
            this.is_show_dot_4 = !this.is_show_dot_4;
          }
            break;
          default:
            break;
        }
      },
      /**
       * 获取登录或注册验证码
       * @returns {Promise<void>}
       */
      async getCaptchaCode() {
        let res = await getcaptchas();
        this.captchaCodeImg = res.code_img;
      },
      /**
       * 切换登录和注册页
       */
      tabLoginAndOpenReg() {
        this.registerDialogVisible = !this.registerDialogVisible;
        this.loginDialogVisible = !this.loginDialogVisible;
      }
    }
  }
</script>
<style lang="scss">
  .login_btn, .reg_btn {
    span {
      font-family: MicrosoftYaHeiUI;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 14px;
    }
  }

  .login_dialog {
    div.el-dialog {
      background: #141414;
      border-radius: 4px;
      width: 430px;
      height: 395px;
      .el-dialog__header {
        .el-dialog__title {
          font-family: MicrosoftYaHeiUI-Bold;
          font-size: 24px;
          color: #FFFFFF;
          letter-spacing: 0;
          position: relative;
          top: 20px;
        }
        .el-dialog__headerbtn {
          .el-dialog__close {
            font-size: 28px;
            position: relative;
            left: 14px;
            bottom: 14px;
            &:hover {
              color: #ffcc66;
            }
          }
        }
      }
      .el-dialog__body {
        .el-input__inner {
          width: 270px;
          height: 36px;
          vertical-align: middle;
          font-family: MicrosoftYaHeiUI-Bold;
          font-size: 16px;
          color: #141414;
          letter-spacing: 0;
          font-weight: bold;
          background: #E9E9E9;
          border-radius: 4px;
        }
        .el-input__suffix {
          right: 62px;
          i {
            font-size: 22px;
          }
        }
        .username_margin {
          margin-top: 10px;
        }
        .same_margin {
          /*margin-top: 15px;*/
          position: relative;
        }
        .code_width {
          input {
            width: 155px;
            position: relative;
            right: 58px;
          }
          .el-input__suffix {
            right: 176px;
          }
        }
        .code_img {
          width: 106px;
          height: 36px;
          position: absolute;
          top: 217px;
          right: 72px;
          .img_box {
            width: 106px;
            height: 36px;
            border-radius: 4px;
            position: relative;
            right: 9px;
            cursor: pointer;
          }
        }
        .reg_img {
          top: 403px;
        }
        .el-form-item__content {
          margin-left: 0px!important;
          .el-form-item__error {
            left: 58px;
          }
        }
      }
      .login_submit, .reg_submit, .reset_submit {
        vertical-align: middle;
        background: #e4b35c;
        border: none;
        &:hover {
          background: #cd9c52;
        }
        span {
          color: #141414;
          font-size: 24px;
          line-height: 12px;
          font-family: "Microsoft YaHei";
          font-weight: bold;
        }
      }
      .login_submit {
        width: 270px;
        height: 36px;
      }
      .reg_submit, .reset_submit {
        width: 127px;
        height: 36px;
        span {
          font-size: 20px;
        }
      }
      .login_reg {
        position: absolute;
        left: 80px;
        bottom: 50px;
        font-family: MicrosoftYaHeiUI;
        font-size: 13px;
        color: #AAAAAA;
        letter-spacing: 0;
        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
      .login_forget_pwd {
        position: absolute;
        right: 80px;
        bottom: 50px;
        font-family: MicrosoftYaHeiUI;
        font-size: 13px;
        color: #AAAAAA;
        letter-spacing: 0;
        &:hover {
          color: #ffffff;
          text-decoration: underline;
        }
      }
    }
  }
  .reg_dialog {
    div.el-dialog {
      height: 580px;
    }
  }
</style>
<style lang="scss" scoped>
  @import "../../style/mixin";

  .header {
    height: 131px;
    .header_bar {
      height: 40px;
      line-height: 40px;
      @include wc;
      .header_bar_left {
        display: inline-block;
        float: left;
        width: 300px;
        li:nth-of-type(1) {
          width: 42px;
          margin-right: 6px;
        }
        li {
          width: 70px;
          display: inline-block;
          font-family: MicrosoftYaHeiUI;
          font-size: 14px;
          letter-spacing: 0;
          text-align: center;
          margin-right: 6px;
          a {
            color: #CCCCCC;
            &:hover {
              color: #ffcc66;
            }
            .dot {
              display: inline-block;
              width: 6px;
              height: 6px;
              background: #141414;
              border-radius: 10px;
              position: relative;
              right: 3px;
              bottom: 1px;
            }
            .dot_bg_1, .dot_bg_2, .dot_bg_3, .dot_bg_4 {
              background: #ffcc66;
            }
          }
        }
      }
      .header_bar_right {
        float: right;
        display: inline-block;
        width: 500px;
        text-align: right;
        li {
          display: inline-block;
          width: 100px;
          text-align: center;
          .login_btn, .reg_btn {
            width: 86px;
            height: 28px;
          }
        }
      }
    }
    .header_line {
      height: 1px;
      background: #222222;
    }
    .header_menu {
      height: 90px;
      @include wc;
    }
  }
</style>
