//登录
<template>
  <div>
    <van-dialog
      v-model="show"
      show-cancel-button
      :before-close="beforeClose"
    >
      <van-field
        required
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-field
        required
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-dialog>
    <van-button class='btn login-btn' @click='submit' type="default">登录</van-button>
    <van-button class='btn help-btn' @click='help' type="default">帮助</van-button>
    <van-button class='btn close-btn' @click='close' type="default">关闭</van-button>
  </div>
  
</template>
<script>
  import { Dialog,Field,Button,Toast  } from 'vant'
  import { login } from '../assets/api'
  export default {
    data() {
      return {
        show: false,
        phone: '',
        password: '',
        loginType: ''
      };
    },

    methods: {
      beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
      },
      submit(){
        let phone = this.phone
        let password = this.password
        let _this = this
        login(phone,password)
        .then(res=>{
          if(res.data.code == 200){
            Toast.success('登录成功')
            console.log(res.data)
            _this.$store.commit('SAVE_USERINFO',res.data)
            this.$router.push('/recommend')
          }
          else if(res.data.code == 400){
            Toast.fail('找不到用户')
          }
        })
      },
      created(){
        loginStatus()
        .then(res=>{
          if(res.code == 301){
          this.nickname == null
          console.log('请先登录')
        }
          else if(res.code == 502){
          console.log('请检查网络连接')
          Toast.fail('请检查网络连接')
          }
          else if(res.code == 200){
            this.nickname = res.data.profile.nickname
          }
        })
      }
    },
    components: {
      [Dialog.name]: Dialog,
      [Field.name]: Field,
      [Button.name]: Button,
      [Toast .name]: Toast 
    }
  }
</script>
<style scoped>
  .btn{
    cursor: pointer;
    margin: 1rem 1.9rem;
  }
</style>
