<template>
    <div>
        <!--//轮播图区-->
        <mt-swipe :auto="4000">
            <!--在组件中使用v-for循环,.一定要使用 :key-->
            <mt-swipe-item v-for="item in carouselList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--首页六宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link
                    to="/home/newslist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻咨询</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {

        data() {
            return {
                carouselList:[] //保存轮播图的数组
            }
        },
        created() {
            this.getCarousel();
        },
        methods: {
            getCarousel() {
                this.$http.get('http://127.0.0.1:8080/carousel').then(result => {
                    // console.log('发送请求');
                    // console.log(result.body);
                    if(result.body.status === 0){
                        this.carouselList = result.body.message;
                        // Toast('加载轮播图成功')
                    }else{
                        Toast('加载轮播图失败')
                    }
                })
            }
        },
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: orange;
            }

            &:nth-child(2) {
                background-color: pink;
            }

            &:nth-child(3) {
                background-color: cyan;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-table-view.mui-grid-9 {
        background-color: #fff;
        border:none;
        img{
            width: 60px;
            height: 60px;
        }

        .mui-media-body {
            font-size: 13px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-bottom: 0;
        border-right: 0;
    }
    
</style>