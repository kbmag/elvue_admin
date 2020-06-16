<template>
   <div class="wrapper">
        <vHeader></vHeader>
        <vSidebar></vSidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
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
            tagsList: [],
            collapse: false
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