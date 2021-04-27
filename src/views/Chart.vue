<template>
  <div id="chart">
    {{str}}
    <el-row>
      <el-button type="primary" @click="getData">点我试试</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        str:this.mock.mockData.test()
    };
  },
  methods: {
    getData() {
      // 假装要使用http_mock发送请求（#手动滑稽#）（mock自动拦截请求并生成数据）
      this.request
        .http_mock({
            url:"/api/newsList",
            params:{type:1}
        })
        .then((response) => {
          console.log(response);
          this.str = response;
        });
    },
  },
};
</script>