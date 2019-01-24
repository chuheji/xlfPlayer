<template>
	<div>
	  <!-- <keep-alive> -->
		<div v-for='item in tracks'>
		  <p class="songName">{{ item.name }}</p>
		</div>
	  <!-- </keep-alive> -->
		
		<!-- <img src="" alt=""> -->
	</div>
</template>
<script>
	import { getPlaylistDetail } from '../assets/api'
	// import utils from '../assets/utils'
	import qs from 'qs'
	export default{
		created(){
			// this.$router.go(0)
			let id = this.$route.query.id
			// console.log(id)
			getPlaylistDetail(id).then(res=>{
				// console.log(res.data)
				if(res.data.code == 200){
					this.creator = res.data.playlist.creator
					this.tracks = res.data.playlist.tracks
				}
				
			})  
			
		},
		activated: function() {
    	  this.getCase()
  		},
		data(){
			return {
				creator: [],
				tracks: []
			}
		},
		watch: {
		    '$route'(to, from) {
			    if(this.$route.params.id){// 判断条件1  判断传递值的变化
      				this.id = this.$route.query.id   
    			}
			}
		}
	}
</script>
<style scope>
	.songName{
		text-align: left;
		padding-top: 1rem;
		padding-left: 3rem;
	}
</style>