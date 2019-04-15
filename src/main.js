//入口文件
import Vue from 'vue'

//1.1导入入口的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);

//注册Vuex
import  Vuex from 'vuex'
Vue.use(Vuex);
//每次刚进入网站,就从本地存储中把购物车的数据读出来,放到store中
var car = JSON.parse(localStorage.getItem('car' || '[]'));
var store = new Vuex.Store({
    state:{ //获取state中数据:  this.$store.state.***
        car:car //将购物车中商品的数据用一个数组存储起来,在car数组中存储一些商品的对象,可以暂时将商品对象设计成这样:
        // {id:商品的id,count:要购买的数量,price:商品的单价,selected:是否被选中(true:想要购买=>计算数量总价)}
    },
    mutations:{ //调用mutations中的方法:  this.$store.commit('方法的名称','按需传入唯一的参数')
        addToCar(state,goodsinfo){
            // 点击加入购物车.把商品信息保存到store中的car上
            // 分析:如何加入

            //假设在购物车中没有找到对应的商品信息
            var flag = false;

            //1.如果购物车中之前就已经有了商品数据,只需要更新数量
            if(state.car){
                state.car.some(item => {
                    if(item.id == goodsinfo.id){
                        item.count += parseInt(goodsinfo.count);
                        flag = true;
                        return true;
                    }
                });
            }

            //2.如果循环完毕,flag还是false,则直接把商品数据push到car中
            if(!flag) {
                if(state.car){
                    state.car.push(goodsinfo)
                }
            }

            //当 更新car 之后,把 car 数组存储到本地的loaclStorage中
            localStorage.setItem('car',window.JSON.stringify(state.car))

        },
        updateGoodsInfo(state,goodsinfo){
            //修改购物车中商品的数量值
            // 分析:
            if(state.car){
                state.car.some(item => {
                    if(item.id == goodsinfo.id){
                        item.count = parseInt(goodsinfo.count);
                        return true
                    }
                });
            }
            localStorage.setItem('car',window.JSON.stringify(state.car))
        }
    },
    getters:{ // this.$store.getters.***  相当于计算属性,也相当于filters
        getAllCount(state){
            var c = 0;
            if(state.car){
                state.car.forEach(item => {
                    c += item.count;
                });
            }
            return c
        },
        getGoodsCount(state){
            var o = {};
            if(state.car){
                state.car.forEach(item =>{
                    o[item.id] = item.count
                });
                return o
            }
        }
    }
});






import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
});

//2.1导入vue-resource的包
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource);

//设置请求的根路径
// Vue.http.options.root = 'http://127.0.0.1:3000';
//全局设置 post 时候表单数据格式形式:  application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//导入样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入组件
// import { Header,Swipe, SwipeItem,Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);



//安装图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview);


//导入app根组件
import app from './App.vue'

//1.3导入自己的Router.js路由模块
import router from './router.js'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router, // 1.4挂载路由对象到实例上
    store  //挂载store  状态管理对象
});




