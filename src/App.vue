<template>
    <div class="app-container">
        <!--1.顶部Header区域-->

        <mt-header fixed title="哈哈哈开始做项目了">
            <span slot="left" @click="goBack" v-show="flag">
                <mt-button icon="back">返回</mt-button>
            </span>
        </mt-header>


        <!--2.中间的路由 router-view 区域-->
        <transition>
            <router-view></router-view>
        </transition>


        <!--底部 tabbar 区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-zhp" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-zhp" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-zhp" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge"
                id="badge">{{ this.$store.getters.getAllCount }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-zhp" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>


    </div>
</template>

<script>
    export default {
        data(){
            return {
                flag:false
            }
        },
        created(){
            this.flag  = this.$route.path ==='/home'?false :true;
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        },
        watch:{
            '$route.path': function (newVal) {
                if(newVal === '/'){
                    this.flag = false;
                }else {
                    this.flag = true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 50px;
        overflow-x: hidden;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
        position: absolute;
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active {
        transition: all 0.6s ease;
    }
    //改类名,解决tabbar 无法点击的问题
    .mui-bar-tab .mui-tab-item-zhp.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item-zhp {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .mui-tab-item-zhp .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .mui-tab-item-zhp .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .mt-header {
        z-index: 999;
    }
</style>