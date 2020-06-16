<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-s-unfold"></i>
        </div>
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
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
            collapse: true,
            fullscreen: false,   
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        handleFullScreen(){
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        collapseChage(){
            this.collapse = !this.collapse
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        // if (document.body.clientWidth < 1500) {
        //     this.collapseChage();
        // }
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
    .header{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size:20px;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        background-color: #242f42;
        padding: 0 1%;
        .collapse-btn {
            float: left;
            padding: 0 5px;
            cursor: pointer;
            line-height: 60px;
        }
        .logo{
            float: left;
            width: 250px;
            line-height:60px;
        }
        .header-right {
            float: right;
            padding-right: 50px;
            .header-user-con{
                display: flex;
                height: 60px;
                align-items: center;
                .btn-fullscreen {
                    transform: rotate(45deg);
                    margin-right: 5px;
                    font-size: 24px;
                    position: relative;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    border-radius: 15px;
                    cursor: pointer;
                }
            }
            
        }
    }

</style>