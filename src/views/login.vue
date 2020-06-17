<template>
    <el-form :rules="loginFormRules" :model="loginForm" ref="loginForm" class="demo-ruleForm login-container">
        <h3 class="title">后台管理系统</h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="loginForm.username" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;">登录</el-button>
        </el-form-item>
    </el-form>
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
            loginForm:{
                username:'',
                password:''
            },
            loginFormRules:{
                username:[
                    {required: true, message: '账号不可为空', trigger: 'blur'}
                ],
                password:[
                    {required: true, message: '密码不可为空', trigger: 'blur'}
                ]
            }
        };
    },
    //监听属性 类似于data概念
    computed: {},
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

    //生命周期 - 创建之前
    beforeCreate() {},

    //生命周期 - 挂载之前
    beforeMount() {},

    //生命周期 - 更新之前
    beforeUpdate() {},

    //生命周期 - 更新之后
    updated() {},

    //生命周期 - 销毁之前
    beforeDestroy() {},

    //生命周期 - 销毁完成
    destroyed() {},

    //如果页面有keep-alive缓存功能，这个函数会触发
    activated() {},
}
</script>

<style lang="less" scoped>
    //@import url(); 引入公共css类
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0px 0px 30px 0px;
        }
    }
</style>