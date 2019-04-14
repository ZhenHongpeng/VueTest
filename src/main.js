//入口文件
import Vue from 'vue'

//1.1导入入口的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);

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
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

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
    router // 1.4挂载路由对象到实例上
});




