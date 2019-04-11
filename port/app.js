var express = require('express');
var app = express();
var fs = require('fs');
var path=require('path');

// 解决跨域
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);

app.get('/carousel', function (req, res) {
    // console.log('接收到请求');
    res.status(200).json({
        status: 0,
        message: [
            {img: "http://imgs.aixifan.com/live/1489911032446/1489911032446.png"},
            {img: "http://imgs.aixifan.com/live/1489910944120/1489910944120.png"},
            {img: "http://imgs.aixifan.com/live/1489911027633/1489911027633.png"}
        ]
    })
});

app.get('/getnewslist', function (req, res) {

    res.status(200).json({
        status: 0,
        message: [
            {
                id: 1,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:10,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 2,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:31,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 3,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:15,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 4,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:11,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 5,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:13,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 6,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 7,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 8,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 9,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 10,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 11,
                title:'1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time:'2015-04-16T03:50:28.000Z',
                zhaiyao:'房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click:19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
        ]
    })
});

app.get('/getnewsinfo',function (req,res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                id: 1,
                title: "九国科学家联合公布第一张黑洞照片",
                add_time: "2019-4-10 21:00:00",
                click:10086,
                content:`<p><span class="bjh-p">北京时间10日晚9时许，包括中国在内，全球多地天文学家同步公布首张黑洞真容。图片来自欧洲南方天文台（ESO）官网</span>
                        </p>
                        <p><span class="bjh-p">这是人类诞生以来，第一次见到黑洞的照片。<span
                                class="bjh-br"></span></span></p>
                        <p><span class="bjh-p">黑洞呈圆环形，中心灰暗，外围被一圈橙黄色的光晕包裹，下方比上方更明亮。有人说它像甜甜圈，有人说它像猫的眼睛，还有人说它像铸造中的魔戒。</span>
                        </p>
                        <p><span class="bjh-p">而在一年前，吴庆文见到它时，第一反应是：爱因斯坦的预言真的灵验了。</span></p>
                        <p><span class="bjh-p">吴庆文是华中科技大学物理学院的一名教授。2016年，他加入了“事件界面望远镜”项目，和来自全球的200多名科学家一起，计划为黑洞拍一张照片。</span>
                        </p>
                        <p><span class="bjh-p">从理论分析、实际观测到数据处理，他们分成数十个小组，花了三年多的时间，把黑洞的样子展现在了世人眼前，也终于证实了黑洞的存在。</span>
                        </p>
                        <p><span class="bjh-p">“在2016年发现引力波之后，人们寻找到了爱因斯坦广义相对论最后一块缺失的拼图”，吴庆文说。这意味着人类对黑洞的研究、对宇宙的探索迈入了全新的阶段。</span>
                        </p>
                        <p><span
                                class="bjh-p">4月11日，在黑洞照片发布的第二天，我们与这位在照片拍摄、冲洗过程中，承担理论分析工作的教授聊了聊。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">我们要给黑洞拍照片</span></span></p>
                        <p><span class="bjh-p"><span
                                class="bjh-strong">剥洋葱：你为什么会对黑洞感兴趣？</span></span></p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>我研究生在中科院上海天文台，期间一直做的课题就是黑洞，还有吸积盘。黑洞本身是大家关注的，它因贪婪闻名于世，是一个时空漩涡，由弯曲的空间和弯曲的时间构成。黑洞有一个视界，其内部时空高度扭曲，所有物质掉入它的范围，都会消失得无影无踪，奔向奇点，连光都不例外。我觉得这很好玩，就一直坚持下来了。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：你是什么时候加入“事件视界望远镜”项目的？这个项目的目标是什么？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>早在2015年，我们就开始陆陆续续讨论，怎么样才能够看到黑洞，需要用多大的望远镜来观测等等问题。大概是2016年左右我正式加入，参与项目的有来自全球的200多名科学家，中国有十几个人。</span>
                        </p>
                        <p><span class="bjh-p">这个项目提出来就是为了观测黑洞、给黑洞拍照。目前，有很多的间接证据已经证明了宇宙里有非常多黑洞，2016年，人类观测到了引力波，知道了黑洞“听上去是什么样子”，但我们更想知道，它“看上去是什么样子”。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：从理论上来说，黑洞是看不见的，为什么还能拍到黑洞的照片？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>虽然黑洞本身并不发光，但它具有强大的引力，可以将周围的物质吸引过来，形成绕其转动的吸积盘。吸积盘可以将吸积物质的引力能变成辐射，从而可以被我们看到。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：“事件视界望远镜”项目有200多名成员参与，你们是怎么分工、协作的？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>从数据处理、观测到后边理论分析，其实有各种各样的小组，分成了很多个科学工作组。我们中国大概有十几个人参与，大家做的事也不同。</span>
                        </p>
                        <p><span class="bjh-p">最早开始做的时候，我们200多人聚在台湾开过一次会，后面陆陆续续也在不同的地点开过。平时主要是通过电话、视频会议，或者邮件，来和其他人沟通进展。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：你主要负责哪些工作？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>我是做理论分析。拍摄之前，我研究的是黑洞里边会发生什么样的物理过程；拍摄之后，根据传回来的图像，我开始分析黑洞边上那些看到的光环大概是哪里来的？为什么是那样？做这种理论的计算。</span>
                        </p>
                        <p><span class="bjh-p">后期我们花了很长的时间，一直在算，一直在提高、比对：我们算的东西是不是正确的？跟看到的东西是不是完全一样的？</span>
                        </p>
                        <p><span class="bjh-p"><span
                                class="bjh-strong">剥洋葱：在理论分析的过程中，有没有遇到过什么困难？</span></span></p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>因为黑洞里的时空是弯曲的，是完全扭曲的，我们看到的这个黑洞，看上去它是那样，但和它真实的样子并不相同，那些光子是在弯曲的时空里走的，我们要把弯曲时空里边的一些东西算出来，这是有一点难度的。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：参与这次拍摄对你来说有什么意义？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>我感觉就是好玩，它本来就是人类比较好奇的东西，看到了就有趣了。</span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">被选中的黑洞</span></span></p>
                        <p><span class="bjh-p"><span class="bjh-strong">剥洋葱：既然科学家们很早之前就预测出了黑洞的样子，为什么直到2017年才成功拍到黑洞的照片？</span></span>
                        </p>
                        <p><span class="bjh-p"><span class="bjh-strong">吴庆文：</span>我们很早以前就可以算出来在什么条件下，才能用望远镜看到黑洞。2000年左右，就有科学家预测，经过技术的发展，十几年后我们可以看到黑洞。</span>
                        </p>`
            }
        ]
    })
});

app.get('/getcomments',function (req,res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:01',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:30',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:20',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:10:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 23:00:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:50:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 23:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:36:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:24:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:12:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:36',
                content:'我来评论第一个!'
            },
        ]
    })
});



app.get('/getcomments',function (req,res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 23:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:36:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:24:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:12:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:36',
                content:'我来评论第一个!'
            },
        ]
    })
});


app.get('/getcommentsmore',function (req,res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:01',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:30',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:00:20',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:10:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 23:00:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:50:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 23:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:36:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:24:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:12:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:30:36',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:20:01',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-10 21:10:30',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-20 21:00:20',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-11 21:01:00',
                content:'我来评论第一个!'
            },
            {
                uesr_name:'匿名用户',
                add_time:'2019-4-20 21:10:00',
                content:'我来评论第一个!'
            },
        ]
    })
});


app.listen(8080, function () {
    console.log('Running at port 8080........');
});

