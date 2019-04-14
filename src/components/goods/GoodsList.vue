<template>
    <div class="goods-list">

        <!--<router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist"-->
        <!--:key="item.id" tag="div">-->
        <!--<img-->
        <!--:src="item.img_url"-->
        <!--alt=""-->
        <!--&gt;-->
        <!--<h1 class="title">{{ item.title }}</h1>-->
        <!--<div class="info">-->
        <!--<p class="price">-->
        <!--<span class="now">${{ item.sell_price }}</span>-->
        <!--<span class="old">${{ item.market_price }}</span>-->
        <!--</p>-->
        <!--<p class="sell">-->
        <!--<span>{{ item.zhaiyao }}</span>-->
        <!--<span>剩{{ item.stock_quantity }}件</span>-->
        <!--</p>-->
        <!--</div>-->
        <!--</router-link>-->

        <!--在网页中有两种跳转方式-->
        <!--方式1:↑  使用a标签的形式,叫做标签跳转-->
        <!--方式2:↓  使用window.location.href的形式,叫做编程式导航-->
        <div class="goods-item" v-for="item in goodslist"
             :key="item.id" @click="goDetail(item.id)">
            <img
                    :src="item.img_url"
                    alt=""
            >
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">${{ item.sell_price }}</span>
                    <span class="old">${{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>{{ item.zhaiyao }}</span>
                    <span>剩余{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <!--加载更多和获取更多评论一样,这里不做重复练习了-->
        <mt-button type="danger" size="large">加载更多</mt-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageindex: 1,
                goodslist: []
            }
        },
        methods: {
            getGoodsList() {
                this.$http.get('http://192.168.1.103:8080/getgoods?pageindex=' + this.pageindex).then(result => {
                    if (result.body.status === 0) {
                        this.goodslist = result.body.message
                    }
                })
            },
            goDetail(id){ //使用js的形式 进行路由导航

                //注意 一定要区分this.$route 和 this.$router 这两个对象
                // this.$route 是路由参数对象,所有路由中的参数,params, query 都属于它
                // this.$router 是路由导航对象,用它 可以方便的使用JS代码.实现路由的前进后退.跳转到新的url地址
                // this.$router.push('/home/goodsinfo/'+ id)   最简单的
                // this.$router.push({path:'/home/goodsinfo/'+ id})  传递对象
                this.$router.push({name:'goodsinfo',params:{ id } });
            }
        },
        created() {
            this.getGoodsList();
        }
    }
</script>

<style lang="less" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 8px;
        justify-content: space-between;

        .goods-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;

            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;

                p {
                    margin: 0;
                    padding: 5px;
                }

                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>