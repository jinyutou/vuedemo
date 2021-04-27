<template>
    <div id="login">
        <el-row>
            <el-button @click="toMain">登录</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
  methods:{
    toMain(){
      this.$message('登录跳转');
      this.$router.push({
        path:"/Main"
      })
    }
  }
}
</script>