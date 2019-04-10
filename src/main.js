//入口文件
import Vue from 'vue'

import './lib/mui/css/mui.css'
//按需导入组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);





//导入app根组件
import app from './App.vue'



var vm = new Vue({
    el:'#app',
    render: c => c(app)
});




