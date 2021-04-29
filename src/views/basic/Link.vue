<template>
    <div id="link">
        <blockquote class="layui-elem-quote">基础用法</blockquote>
        <div>
            <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>
        <blockquote class="layui-elem-quote">禁用状态</blockquote>
        <div>
            <el-link disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </div>
        <blockquote class="layui-elem-quote">下划线</blockquote>
        <div>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
        </div>
        <blockquote class="layui-elem-quote">图标   带图标的文字链接可增强辨识度。</blockquote>
        <div>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </div>
    </div>
</template>
<style>
#link{
    padding: 5px;
}
</style>