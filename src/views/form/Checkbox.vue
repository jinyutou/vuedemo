<template>
    <div id="checkbox">
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            基础用法 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
        </blockquote>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>

        
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            禁用状态
        </blockquote>
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true
      };
    }
  };
</script>
<style>
body{
    width: 98%;
    margin: 0 auto;
}

</style>
