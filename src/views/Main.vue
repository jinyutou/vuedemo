<template>
  <div id="main">
    <el-container style="border: 1px solid #eee; height: 100%">
      <el-header style="text-align: left; font-size: 20px"> vuedemo </el-header>

      <el-container style="padding-top: 60px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="openeds">
            <el-submenu :index="item.index" v-for="(item,index) in treeList" :key="index">
                <template slot="title">
                    <i :class="item.icon"></i>{{item.name}}
                </template>
                <el-menu-item v-for="(citem,cindex) in item.child" :key="cindex" :index="citem.index" @click="addTab(citem)">
                    <i :class="citem.icon"></i>{{citem.name}}
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <el-tabs
            v-model="editableTabsValue"
            type="border-card"
            editable
            @edit="handleTabsEdit"
          >
            <el-tab-pane
              :key="index"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
              :closable="item.close"
            >
              <!-- <keep-alive>
                <component :is="item.content">

                </component>
            </keep-alive> -->
              <iframe
                :src="'http://localhost:8080/#' + item.content"
                style="width: 100%; height: 100%; border: none;"
              ></iframe>
              <!-- <router-link :to="{path:item.content}" target="_blank">{{item.content}}</router-link> -->
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
    created() {
        this.initTree();
    },
    data() {
        return {
            openeds:['1'],
            treeList:[],
            editableTabsValue: "-1",
            editableTabs: [
                {
                    title: "首页",
                    name: "-1",
                    close: "closable",
                    content: "/chart",
                },
            ],
            tabIndex: 100//索引
        };
    },
    methods: {
        initTree(){
            this.request.http_mock({
                url:"/api/treeList",
                params:{}
            })
            .then((response) => {
                console.log(response);
                this.treeList = response;
            });
        },
        addTab(item) {
            var tabExists = false;
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            tabs.forEach((tab, index) => {
                if (tab.name === item.index) {
                    activeName = item.index;
                    tabExists = true;
                }
            });
            if (!tabExists) {
                this.editableTabs.push({
                    title: item.name,
                    name: item.index,
                    content: item.path,
                });
                activeName = item.index;
            }
            this.editableTabsValue = activeName;
        },
        handleTabsEdit(targetName, action) {
            if (action === "add") {
                let newTabName = ++this.tabIndex + "";
                this.editableTabs.push({
                    title: "New Tab",
                    name: newTabName,
                    content: "New Tab content",
                });
                this.editableTabsValue = newTabName;
            }
            if (action === "remove") {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
            }
        }
    }
};
</script>
<style>
#main {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.el-container {
  height: 100%;
  position: relative;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  position: fixed;
  width: 100%;
}

.el-aside {
  height: 100%;
  color: #333;
  text-align: left;
  overflow-y: scroll;
  overflow-x: hidden;
}
.el-main {
  width: 100%;
  overflow-y: hidden;
  padding: 0px;
  position: relative;
}
.el-tabs {
  height: 100%;
  position: relative;
  padding: 0;
  margin: 0;
}
.el-tabs--border-card > .el-tabs__header {
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
}
.el-tabs--border-card > .el-tabs__content {
  margin: 0;
  padding: 0;
  width: 100%;
  /* height: 100%; */
  position: absolute;
  top: 39px;
  bottom: 0;
  overflow-y: auto;
}
.el-tab-pane {
  height: 100%;
  overflow: hidden;
}
</style>
