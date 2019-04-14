<template>
    <div class="photoinfo-container">

        <h3>{{ photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{ photoinfo.add_time | dateFormat}}</span>
            <span>点击: {{ photoinfo.click}}次</span>
        </p>
        <hr>
        <!--缩略图区域-->
        <div class="thumbs">
            <vue-preview
                    :list="list"
                    :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
                    :previewBoxStyle="{border: '1px solid #eee'}"
                    :tapToClose="true"
                    @close="closeHandler"
                    @destroy="destroyHandler"
            />
        </div>

        <!--图片内容区-->
        <div class="content" v-html="photoinfo.content"></div>


        <!--放置评论子组件-->
        <comment-box></comment-box>
    </div>

</template>

<script>
    import comment from '../subcomponents/comment.vue'

    export default {
        data() {
            return {
                id: this.$route.params.id, //从路由中获取到的图片ID
                photoinfo: {},
                list: [
                    {
                        src: 'https://placekitten.com/600/400',
                        w: 600,
                        h: 600
                    },
                    {
                        src: 'https://placekitten.com/1200/900',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        components: {
            'comment-box': comment
        },
        methods: {
            getPhotoInfo() {//获取图片的详情
                this.$http.get('http://192.168.1.103:8080/getimageInfo?id=' + this.id).then(result => {
                    if (result.body.status === 0) {
                        this.photoinfo = result.body.message;
                    }
                })
            },
            getThumbs(){
                this.$http.get('http://192.168.1.103:8080/getthumbimages?id=' + this.id).then(result => {
                    if (result.body.status === 0) {
                        // result.body.message.forEach(item => {
                        //    item.w = 600;
                        //    item.h = 400;
                        // });
                        this.list = result.body.message;
                    }
                })
            },
            // 即将关闭的时候，调用这个处理函数
            closeHandler() {
                // console.log('closeHandler')
            },
            // 完全关闭之后，调用这个函数清理资源
            destroyHandler() {
                // console.log('destroyHandler')
            }
        },
        created() {
            this.getPhotoInfo();
            this.getThumbs();
        }
    }
</script>

<style lang="less" scoped>
    .photoinfo-container{
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content {
            font-size: 13px;
            line-height: 30px;
        }


    }

</style>