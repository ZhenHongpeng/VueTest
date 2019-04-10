//入口文件
import Vue from 'vue'

//1.1导入入口的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);

//2.1导入vue-resource的包
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource);

//导入样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入app根组件
import app from './App.vue'

//1.3导入自己的Router.js路由模块
import router from './router.js'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router // 1.4挂载路由对象到实例上
});




