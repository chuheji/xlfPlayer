//喜欢
<template>
  <div>
    <!-- <p v-for=''></p> -->
  </div>
</template>
<script>
	import { getUserLikelist } from '../assets/api'
	export default{
		created(){
			getUserLikelist(419702270)
			.then(res=>{
				console.log(res.data)
			})
		}
	}
</script>
<style scope>
  p{
    color: darkorange
  }
</style>
