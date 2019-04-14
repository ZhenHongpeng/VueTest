<template>
    <div class="newsinfo-container">
        <!--大标题-->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!--子标题-->
        <p class="subtitle">
            <span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
            <span>点击:{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!--内容区-->
        <div class="content" v-html="newsinfo.content"></div>
        <!--评论区子组件-->
        <comment-box></comment-box>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    //1.导入评论子组件
    import comment from '../subcomponents/comment.vue'


    export default {
        data() {
            return {
                id: this.$route.params.id,
                newsinfo:''
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            getNewsInfo(){
                this.$http.get('http://192.168.1.103:8080/getnewsinfo?id='+this.id).then(result =>{

                    if(result.status === 200){
                        this.newsinfo = result.body.message[0]
                    }else{
                        Toast('加载新闻咨询失败')
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style lang="less" scoped>
    .newsinfo-container {
        padding: 0 4px;

        .title {
            color: red;
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            color: #226aff;
            display: flex;
            font-size: 13px;
            justify-content: space-between;
        }

        .container {
        }
    }
</style>