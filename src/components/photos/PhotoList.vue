<template>
    <div>
        <!--顶部滑动条-->

        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id == 0?' mui-active':'']" v-for="item in
                    cates" :key="item.id" @click="getPhotoListByCateId(item.id)">{{ item.title }}</a>
                </div>
            </div>
        </div>

        <!--图片列表区域-->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id"
                         :to="'/home/photoinfo/id=' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    //导入mui的jskon
    import mui from '../../lib/mui/js/mui.js'
    // import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                cates: [], //所有分类的列表
                list: [] //图片列表的数组
            }
        },
        created() {
            this.getAllCategory();
            this.getPhotoListByCateId(0)
        },
        mounted() {//当组件中的dom 结构被渲染好,并放到页面中后,会执行这个钩子函数
            //如果要操作元素了.最好放在mounted里面,因为这时的DOM元素是最新的
            //初始化 滑动控件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });

        },
        methods: {
            getAllCategory() { //所有的图片分类
                this.$http.get('http://192.168.1.103:8080/getimgcategory').then(result => {
                    if (result.status === 200) {
                        result.body.message.unshift({title: '全部', id: 0});
                        this.cates = result.body.message;
                    }
                })
            },
            getPhotoListByCateId(cateId){
                this.$http.get('http://192.168.1.103:8080/getimages?id='+this.cateId).then(result =>{
                    if (result.status === 200) {
                        this.list = result.body.message;
                    }
                })
            }
        },

    };
</script>

<style lang="less" scoped>
    * {
        touch-action: pan-y;
    }

    
    .photo-list {
        list-style: none;
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li {
            margin-bottom: 10px;
            background-color: #ccc;
            text-align: center;
            box-shadow: 0 0 10px #999;
            position: relative;
            img[lazy="loading"] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            img {
                width: 100%;
                vertical-align: bottom;
            }
            .info {
                color: #fff;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
                min-width: 355px;
                .info-title {
                    font-size: 14px;
                }
                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>