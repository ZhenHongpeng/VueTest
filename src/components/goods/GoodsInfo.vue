<template>
    <div class="goodsinfo-container">
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballflag" ref="ball"></div>
        </transition>

        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <carousel :carouselList="goodsCarousel" :isfull="false"></carousel>
                </div>
            </div>
        </div>


        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价 :
                        <del class="market_price">${{ goodsInfo.market_price}}</del> &nbsp;&nbsp;
                        销售价: <span
                            class="now_price">${{ goodsInfo.sell_price}}
                    </span>
                    </p>
                    <p>购买数量:
                        <numbox @getcount="getSelectedCount"
                                :max="goodsInfo.stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车
                        </mt-button>
                        <!--分析:如何实现加入购物车时候 拿到选择的数量-->
                        <!--1,按钮属于goodsinfo页面,数字属于numberbox组件-->
                        <!--2.由于涉及到了父子组件的嵌套,所以,无法直接在goodsinfo页面中获取到选择框里的值-->
                        <!--3.如何解决问题:涉及到了子组件向父组件传值(事件调用机制)-->
                        <!--4.事件调用的本质:父向子传递方法,子调用这个方法,同时把数据当做参数,传递给这个方法-->
                    </p>
                </div>
            </div>
        </div>

        <!--商品参数区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:89591659+{{ goodsInfo.id }}</p>
                    <p>库存情况:{{ goodsInfo.stock_quantity }} 件</p>
                    <p>上架时间:{{ goodsInfo.add_time | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComments(id)">商品评论</mt-button>
            </div>
        </div>


    </div>
</template>

<script>
    import carousel from '../subcomponents/carousel.vue'
    import numbox from '../subcomponents/goodsinfo-numbox.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id, //将路由参数对象中的id 挂载到data上,方便后期调用
                goodsCarousel: [], //轮播图的数据
                goodsInfo:{}, //获取到的商品信息
                ballflag:false, // 控制小球的显示和隐藏的标识符
                selectedCount:1 //保存用户选中的商品数量,默认,认为用户购买一个
            }
        },
        created() {
            this.getGoodsCarousel();
            this.getGoodsInfo();
        },
        methods: {
            getGoodsCarousel() {
                this.$http.get('http://192.168.1.103:8080/getthumbimages?id=' + this.id).then(result => {
                    if (result.body.status === 0) {
                        //先循环轮播图数组的每一项,为item添加img 属性,因为轮播图中只认识item.img
                        result.body.message.forEach(item => {
                            item.img = item.src
                        });
                        this.goodsCarousel = result.body.message;
                    }
                })
            },

            getGoodsInfo() {
                this.$http.get('http://192.168.1.103:8080/goods/getinfo?id=' + this.id).then(result=>{
                    if(result.body.status === 0 ) {
                        this.goodsInfo = result.body.message[0]
                    }
                })
            },

            goDesc(id){
                //点击使用编程式导航跳转到 图文介绍页面
                this.$router.push({name:'goodsdesc',params:{id} })
            },

            goComments(id){
                //点击使用编程式导航跳转到 商品评论页面
                this.$router.push({name:'goodscomments',params:{id} })
            },

            addToShopCar(){
                this.ballflag = !this.ballflag;
                // {id:商品的id,count:要购买的数量,price:商品的单价,selected:是否被选中(true:想要购买=>计算数量总价)}
                var goodsinfo = {  //拼接出一个要加入到store 中 car 数组里的商品信息对象
                    id:this.id,
                    count:this.selectedCount,
                    price:this.goodsInfo.sell_price,
                    selected:true
                };

                //调用 store 中的mutations来将商品加入购物车
                this.$store.commit('addToCar',goodsinfo)
            },

            beforeEnter(el){
                el.style.transform="translate(0, 0)"
            },

            enter(el,done){


                //小球动画优化思路
                //1.先分析 导致动画不准确的本质原因:我们把小球最终位移到的位置已经局限在了某一分辨率的滚动条未滚动的情况
                //2,只要分辨率和测试的时候不一样,或者 滚动条有一定的滚动距离的时候,问题就出现了
                //3.因此,我们经过分析,得到结论,不能把位置的横纵坐标 直接写死了,应该根据不同情况,动态计算这个坐标值
                //4.如何动态计算坐标值: 先得到徽标的横纵坐标,再得到小球的横纵坐标,用小球的坐标减去徽标的横纵坐标得出x,y
                //5.如何获取 徽标 和小球的位置?? domObject.getBoundingClientRect()

                //获取小球在页面中的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                //获取徽标在页面中的位置
                const badgePositon = document.getElementById('badge').getBoundingClientRect();

                const xDist = badgePositon.left - ballPosition.left;
                const yDist = badgePositon.top - ballPosition.top;
                el.offsetWidth;
                el.style.transform=`translate(${xDist}px, ${yDist}px)`;
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done()
            },

            afterEnter(el){
                this.ballflag=!this.ballflag
            },

            getSelectedCount(count){
                // 当子组件把选中的数据传递给父组件的时候,把选中的值保存到data 上
                this.selectedCount = count ;
                // console.log(this.selectedCount);
            }
        },
        components: {
            carousel,
            numbox
        }
    }
</script>

<style lang="less" scoped>
    .goodsinfo-container {
        background-color: #eee;
        overflow: hidden;

        .now_price {
            color: red;
            font-size: 16px;
            font-weight: bold;
        }

        .mui-card-footer {
            display: block;

            button {
                margin: 15px 0;
            }
        }
        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            z-index: 999;
            top: 390px;
            left: 142px;
        }
    }




</style>