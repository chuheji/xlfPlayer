//推荐
<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='item in recommends'>
        <img :src="item.imageUrl">
      </van-swipe-item>
    </van-swipe>
    <p class='recommendtitle'>推荐歌单</p>
    
      <van-list class='clearfix' v-for='k in songList'>
        <router-link :to="{
          path:'./songlistdetail',
          params:{
            id:k.id
          },
          query:{
            id:k.id
          }
        }">
          <img :src="k.picUrl" :alt="k.name">
            <ul>
              <li>播放量:  {{ parseInt(k.playCount) }}</li>
              <li>{{ k.name }}</li>
              <!-- <li>{{ k.id }}</li> -->
            </ul>
        </router-link>
        
      </van-list>
    
    <router-view></router-view>
  </div>


</template>
<script>
  import { Loading,Icon,Swipe,SwipeItem,List } from 'vant'
  import { getPersonalized,getBanner } from '../assets/api'
  
  export default {
    created(){
      getBanner().then(res=>{
        if(res.data.code == 200){
          this.recommends = res.data.banners
        }
        
      });
      getPersonalized().then(res=>{
        if(res.data.code == 200){
          this.songList = res.data.result
        }
        
      });
    },
    data(){
      return{
        recommends: [],
        songList: []
      }
    },
    components: {
      [Loading.name]: Loading,
      [Icon.name]: Icon,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [List.name]: List
    }
  }
</script>
<style scope>
  p{
    color: darkorange
  }
  .van-swipe{
    width: 100%;
    margin: 0 auto;
  }
  .van-swipe img{
    width: 100%;
  }
  .van-list{
    width: 100%;
    font-size: 12px;
    float: left;
    background-color: #eee;
    margin-bottom: .2rem;
  }
  .van-list img{
    width: 25%;
    position: relative;
    float: left;
    
  }
  .recommendtitle{
    height: 1rem;
    line-height: 1rem;
    /* margin: 0; */
    padding-left: 2rem;
    float: left;
    font-weight: 500;
  }
  .clearfix:after{
    display:table;
    clear:both;
    content:"";
  }
  .clearfix{
    zoom: 1;
  }
  ul{
    float: left;
    margin-bottom: .5rem;
    padding-left: .3rem;
    color: #666;
  }
  li{
    
    padding-top: 1rem;
  }
  
</style>
