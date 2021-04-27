<template>
    <div id="icon">
        <blockquote class="layui-elem-quote">
            直接通过设置类名为 el-icon-iconName 来使用即可。例如：class="el-icon-edit"  
            <i class="el-icon-edit"></i>
        </blockquote>
        <ul class="icon-list">
            <li v-for="(item,index) in iconList" :key="index">
                <span>
                    <i :class="item"></i>
                    <span class="icon-name">{{item}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    created(){
        this.initIcon();
    },
    data(){
        return{
            iconList:[]
        }
    },
    methods:{
        initIcon:function(){
            this.request.http_mock({
                url:"/api/iconList",
                params:{}
            })
            .then((response) => {
                this.iconList = response;
            });
        }
    }
}
</script>
<style>
body{
    overflow-y: scroll;
}
.icon-list{
    overflow: hidden;
    list-style: none;
    padding: 0!important;
    border: 1px solid #eaeefb;
    border-radius: 4px;
}
.icon-list li{
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    /* line-height: 120px; */
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
}
.icon-list li span {
    height: 100%;
    line-height: 100%;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    color: #99a9bf;
    transition: color .15s linear;
}
.icon-list li:hover i, .icon-list li:hover span {
    color: #5cb6ff;
}
.icon-list li .icon-name {
    display: inline-block;
    padding: 3px;
    height: 1em;
    font-size: 16px;
    bottom: 0px;
}
.icon-list li span i{
    display: block;
    font-size: 50px;
    padding-top: 10px;
    /* font-weight: 400; */
    margin-bottom: 15px;
    color:black;
    transition: color 0.15s linear;
}
</style>