<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="$route.path"
            :collapse="collapsed"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
            >
            <el-menu-item index="/index">
                <i class="el-icon-location"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="/table">
                <i class="el-icon-menu"></i>
                <span slot="title">表格</span>  
            </el-menu-item>
            <el-menu-item index="/button">
                <i class="el-icon-document"></i>
                <span slot="title">文章</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>设置</span>
                </template>
                <el-menu-item index="/profile">基本资料 (空)</el-menu-item>
                <el-menu-item index="/password">修改密码 (空)</el-menu-item>
            </el-submenu>
            <el-menu-item index="/echarts">
                <i class="el-icon-share"></i>
                <span slot="title">图表</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {
            collapsed:false,
        };
    },
    //监听属性 类似于data概念
    computed: {
        
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
    //@import url(); 引入公共css类
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top:60px;
        bottom: 0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width:200px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>