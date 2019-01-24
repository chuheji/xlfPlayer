<template>
  <div id="app">

    <Header></Header>
    <keep-alive>
      <Tab></Tab>
    </keep-alive>
    
    
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/header'
  import Tab from './components/tab'
  export default {
    components: {
      Header,
      Tab
    }
  }
</script>

<style>
  #app {
  }
  body{
    background-color: #555;
  }
</style>
