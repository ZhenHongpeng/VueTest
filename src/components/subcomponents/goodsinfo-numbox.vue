<template>
    <!--问题:我们不知道什么时候能够拿到max值,但是总归有一刻,会得到真正的max值-->
    <!--我们可以使用watch 属性监听,来监听 父组件传递过来的max值,不管 watch会被触发几次,但是,最后一次,肯定是一个合法的max数值-->
    <div class="mui-numbox" data-numbox-min='1' data-numbox-step='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged"
               ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" >+</button>
    </div>
    <!--1.分析,子组件什么时候把数据传递给子组件-->
    <!---->
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        //初始化数字选择框
        mounted() {
            mui('.mui-numbox').numbox();
            // mui('.mui-btn ').numbox();

        },
        methods: {
            countChanged(){
                //每当 文本框的数据被修改的时候,立即把最新的数据,通过事件调用,传递给父组件
                // console.log(this.$refs.numbox.value);
                this.$emit('getcount',parseInt(this.$refs.numbox.value))
            }
        },
        props:["max"],
        watch:{
            'max':function (newVal,oldVal) {
                mui('.mui-numbox').numbox().setOption('max',newVal);
            }
        }
    }
</script>

<style lang="less" scoped>

</style>