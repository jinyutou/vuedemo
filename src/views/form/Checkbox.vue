<template>
    <div id="checkbox">
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            基础用法 单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
        </blockquote>
        <!-- `checked` 为 true 或 false -->
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <pre class="layui-code">
        //代码区域
        {{str1}}
        </pre>  
        
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            禁用状态
        </blockquote>
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>

        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            多选框组 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项
        </blockquote>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>

        
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            indeterminate 状态
            indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
        </blockquote>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>

        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            可选项目数量的限制
            使用 min 和 max 属性能够限制可以被勾选的项目的数量。
        </blockquote>
        <el-checkbox-group 
            v-model="checkedCities"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        
        <blockquote class="layui-elem-quote ex-layui-elem-quote" >
            按钮样式
            按钮样式的多选组合。
        </blockquote>
        <div>
            <el-checkbox-group v-model="checkboxGroup1">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
            <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
            <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>

    </div>
</template>
<script>
 const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['选中且禁用','复选框 A'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        str1:'<el-checkbox v-model="checked">备选项</el-checkbox>'
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<style>
body{
    width: 98%;
    margin: 0 auto;
    overflow-y: scroll;
}

</style>
