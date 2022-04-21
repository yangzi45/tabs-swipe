<template>
  <div id="app">
    <tabs-swipe :title-list="list" border-bo="1px solid red" @checkTab="checkTab"></tabs-swipe>
  </div>
</template>

<script>
  import tabsSwipe from "./components/tabs";
  export default {
    name: 'App',
    components: {
      tabsSwipe
    },
    data() {
      return {
        list:[
          {
            value: 0,
            title: '导航栏'
          }, {
            value: 1,
            title: '导航栏二'
          }, {
            value: 2,
            title: '导航栏三'
          }, {
            value: 3,
            title:'导航栏四'
          }, {
            value: 4,
            title: '导航栏一'
          }, {
            value: 5,
            title: '导航栏4'
          }]
      }
    },methods:{
      checkTab(val){
        console.log(val)
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

</style>
