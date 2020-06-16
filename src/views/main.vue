<template>
   <div class="wrapper">
        <vHeader></vHeader>
        <vSidebar></vSidebar>
        <div class="content-box">
            <div class="content">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from '@/components/header'
import vSidebar from '@/components/sidebar'
// 这一大段JS就是为了做收缩/展开导航栏而用的！
export default {
    components:{
        vHeader,
        vSidebar
    },
    data: function () {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        
    }
}
</script>

<style scoped>
    
</style>