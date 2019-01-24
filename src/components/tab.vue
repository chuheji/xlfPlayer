<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/love">
      <span class="tab-link">喜欢</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<script>

</script>
<style>
  .tab{
    display: flex;
    height: 44px;
    line-height: 44px;
  }
.tab-link{
    color: #aaa;
  }
  .router-link-active .tab-link{
    color: darkorange;
    border-bottom:2px solid darkorange;
  }
  .tab-item{
    flex: 1;
    text-align: center;
    cursor: pointer
  }
  span:visited{
    text-decoration: underline
  }
</style>
