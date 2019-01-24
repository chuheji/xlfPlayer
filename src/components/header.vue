//顶部
<template>
  <div :state='true'>
    <!-- <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search> -->
    <div class="title">
      <!--<img src="../assets/img/logo.png" alt="">-->
      <p>xlfPlayer</p>
      <img :src='avatarUrl' class="avatar" alt="">
      <!-- <p class="nickname">{{ nickname }}</p> -->
      <router-link tag="div" to="/login">
        <span class="mine" @load="islogin()" v-show='showLogin'>登录</span>
      </router-link>  
      <span class="mine">{{ nickname }}</span>
    </div>
  </div>
    
</template>
<script>
  import { Icon,Search,Toast,Field,Button,Dialog  } from 'vant'
  import { login } from '../assets/api'
  export default{
    data(){
      return{
        nickname: this.$store.state.userinfo.profile.nickname,
        uid: '',
        avatarUrl: this.$store.state.userinfo.profile.avatarUrl,
        islogin : false
      }
    },
    methods: {
      islogin(){
        if(this.$store.state.userinfo){
          this.islogin = true
        }
        else{
          this.islogin = false
        }
      }
    },
    mounted(){
      if(this.islogin){
        this.showLogin = false
      }
      else{
        this.showLogin = true
      }
    },
    components: {
      [Icon.name]: Icon,
      [Search.name]: Search, 
      [Toast.name]: Toast,
      [Field.name]: Field,
      [Button.name]: Button,
      [Dialog .name]: Dialog ,
    }
  }
</script>
<style>
  .title{
    display: flex;
    justify-content:center;
    background-color: #666;
    height: 44px;
    line-height: 44px;
    text-align: center;
    padding-bottom: 20px;
  }
  p{
    text-align: center;
    color: darkorange;
    font-weight: 700
  }
  .mine{
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: darkorange;
    font-size: 12px
  }
  .nickname{
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: darkorange
  }
  span{
    cursor: pointer
  }
  .login{
    position: absolute;
    left: 50%;
    top:  50%;
    transform: translate(-50%,-50%);
    background-color: #555;
    border: 1px solid #aaa;
    padding: 1.5rem;
    display: none;
    z-index: 99
  }
  .close{
    position: absolute;
    right: .5rem;
    top: .5rem;
    z-index: 100;
    cursor: pointer;
    color: #fff;
  }
  .btn{
    cursor: pointer;
  }
  .help{
    display: none
  }
  .avatar{
    position: absolute;
    right: 5rem;
    top: 1.3rem;
    width: 30px;
    height: 30px;
    border-radius: 50%
  }
</style>
