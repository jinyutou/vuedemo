<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name:"login",
  data(){
    return{
      // loginStatus:true
    }
  },
  methods:{
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin:0;
  padding:0;
  height: 100%;
}
body{
  margin:0;
  overflow:hidden;
  height: 100%;
  width:100%;
}

</style>
