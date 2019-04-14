<template>
    <div>

        <mt-swipe :auto="4000">
            <!--在组件中使用v-for循环,.一定要使用 :key-->
            <!--将来,谁使用此 轮播图组件,谁为我们传递 carouseList-->
            <!--此时,carouselList应该是父组件向子组件传值-->
            <mt-swipe-item v-for="item in carouselList" :key="item.img">
                <img :src="item.img" alt="" :class="{ full:isfull }">
            </mt-swipe-item>
        </mt-swipe>
    </div>


    <!--分析:为什么 商品评论中的轮播图那么丑-->
    <!--1.首页中的图片,他的宽和高都是使用了100%的宽度-->
    <!--2.在商品详情页面中,轮播图的图片,如果也使用宽高为100%的话,页面不好看-->
    <!--3.商品详情页面中的轮播图,期望 高度是100% 宽度为自适应-->
    <!--4.经过分析,得到问题的原因:首页中的轮播图 和详情页中的轮播图,分歧是 宽度是否为100%-->
    <!--5,既然这两个轮播图,其他方面都是没有问题的,只是宽度有分歧.,那么,我们可以定义一个属性.-->
    <!--让 使用轮播图的调用者,手动指定 是否为100%的宽度-->
</template>

<script>
    export default {
        props: ["carouselList", "isfull"]
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
        text-align: center;

        .mint-swipe-item {
            img {
                /*width: 100%;*/
                height: 100%;
            }

        }
    }

    .full {
        width: 100%;
    }
</style>