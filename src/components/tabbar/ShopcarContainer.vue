<template>
    <div class="shopcar-container">

        <div class="goods-list">

            <!--商品列表项区域-->
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">

                        <mt-switch v-model="value" @change="turn"></mt-switch>
                        <img :src="item.thumb_path"
                             alt="">
                        <div class="info">
                            <h1>{{ item.title}}</h1>
                            <p>
                                <span class="price">${{ item.sell_price}}</span>
                                <numbox :initcount="$store.getters.getGoodsCount[item.id]"
                                        :goodsid="item.id"
                                ></numbox>
                                <!--问题:如何从购物车中获取商品的数量呢-->
                                <!--1.我们可以先创建一个空对象,然后循环购物车中所有商品的数据,
                                把当前循环这条商品的ID作为对象的属性名count值作为对象的属性值,这样,当把所有的商品循环一遍,就会得到一个对象:
                                {88:2,89:1
                                }-->
                                <a href="">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'

    export default {
        data() {
            return {
                value: false,
                goodslist: [] //购物车中所有商品的数据

            }
        }, created() {
            this.getGoodsList()
        },
        methods: {
            turn: function () {
                // console.log(this.value)
            },
            getGoodsList() {
                var idArr = [];
                if(this.$store.state.car){
                    this.$store.state.car.forEach(item => idArr.push(item.id));
                    if (idArr.length <= 0) {
                        return;
                    }
                }
                // 获取购物车商品列表
                this.$http.get('http://192.168.1.103:8080/goods/getshopcarlist?'+idArr.join(",")).then(result => {
                    if (result.body.status === 0) {
                        this.goodslist = result.body.message;
                    }
                })
            }
        },
        components: {
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .shopcar-container {
        background-color: #eee;
        overflow: hidden;

        .goods-list {
            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 13px;
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .price {
                    color: red;
                    font-weight: bold;
                }
            }

            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }
        }
    }
</style>