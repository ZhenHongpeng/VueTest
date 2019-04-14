var express = require('express');
var router = express.Router();
var Comment = require('./comment.js');

router.get('/carousel', function (req, res) {
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

router.get('/getnewslist', function (req, res) {

    res.status(200).json({
        status: 0,
        message: [
            {
                id: 1,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 10,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 2,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 31,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 3,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 15,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 4,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 11,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 5,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 13,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 6,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 7,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 8,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 9,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 10,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
            {
                id: 11,
                title: '1季度多家房企利润跌幅超50%,去库存促销战打响',
                add_time: '2015-04-16T03:50:28.000Z',
                zhaiyao: '房企一季度销售业绩已经陆续公布,客免入研究中心统计',
                click: 19,
                img_url: "https://tse1-mm.cn.bing.net/th?id=OIP.4UkavXHEic124cran35t4AHaHa&w=202&h=202&c=7&o=5&dpr=1.5&pid=1.7"
            },
        ]
    })
});

router.get('/getnewsinfo', function (req, res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                id: 1,
                title: "九国科学家联合公布第一张黑洞照片",
                add_time: "2019-4-10 21:00:00",
                click: 10086,
                content: `<p><span class="bjh-p">北京时间10日晚9时许，包括中国在内，全球多地天文学家同步公布首张黑洞真容。图片来自欧洲南方天文台（ESO）官网</span>
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

router.get('/getcomments', function (req, res) {
    var page = req.query.pageindex;
    Comment.find(function (err, data) {
        if (err) console.log(err);
        res.status(200).json({
            status: 0,
            messages: data[page]
        })
    })
});

router.post('/postcomment/', function (req, res) {
    // console.log(req.body);
    Comment.save(req.body, function (err) {
        if (err) {
            return res.status(500).json({
                status: 0,
                messages: '评论失败'
            })
        }

        res.status(200).json({
            status: 0,
            messages: '评论成功'
        })
    });

});

router.get('/getimgcategory', function (req, res) {
    res.status(200).json({
        status: 0,
        message: [
            {title: "小慧慧", id: 1},
            {title: "阿库娅", id: 2},
            {title: "艾米莉亚", id: 3},
            {title: "犬夜叉", id: 4},
            {title: "鸣人", id: 5},
            {title: "啥是gay", id: 6},
            {title: "雏田", id: 7},
            {title: "娜美", id: 8},
            {title: "琴女", id: 9},
        ]
    })
});

router.get('/getimages', function (req, res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                title: "小慧慧",
                id: 1,
                img_url: 'https://cn.bing.com/th?id=OIP.P8nEmnFOgyWLvRrcBDtYpQHaEo&pid=Api&rs=1&p=0',
                zhaiyao: '《为美好的世界献上祝福！》是轻小说作家晓枣著作，插画家三岛黑音负责插画，角川Sneaker文库所属的轻小说。'
            },
            {
                title: "阿库娅",
                id: 2,
                img_url: 'https://tse2-mm.cn.bing.net/th?id=OIP.cJ7YvUDz4qzcFda717O6rAHaEK&w=300&h=168&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '《为美好的世界献上祝福！》是轻小说作家晓枣著作，插画家三岛黑音负责插画，角川Sneaker文库所属的轻小说。'
            },
            {
                title: "艾米莉亚",
                id: 3,
                img_url: 'http://img.ecyss.com/medium/1/280/e2698dca3017441ba92df3ff6952f721.jpg',
                zhaiyao: '挺好看的,不过我不认识'
            },
            {
                title: "犬夜叉",
                id: 4,
                img_url: 'https://tse1-mm.cn.bing.net/th?id=OIP.0k0HFfs5C_9g33G8nDOD_QHaEK&w=292&h=168&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '犬夜叉是我们童年的记忆'
            },
            {
                title: "鸣人",
                id: 5,
                img_url: 'https://tse3-mm.cn.bing.net/th?id=OIP.jt6uwNtrPJK9TOj5isozJQHaF7&w=221&h=160&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '《火影忍者》改编自日本漫画家岸本齐史的同名漫画，2002年10月3日在东京电视台系列全6局、岐阜放送首播，共220话；第二季《火影忍者疾风传》自2007年2月开始播出，共500话；累计全720话。'
            },
            {
                title: "啥是gay",
                id: 6,
                img_url: 'https://tse2-mm.cn.bing.net/th?id=OIP.Yz8gUDWDsl22iQaxkDaFHQHaFQ&w=296&h=210&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '《火影忍者》改编自日本漫画家岸本齐史的同名漫画，2002年10月3日在东京电视台系列全6局、岐阜放送首播，共220话；第二季《火影忍者疾风传》自2007年2月开始播出，共500话；累计全720话。'
            },
            {
                title: "雏田",
                id: 7,
                img_url: 'https://tse4-mm.cn.bing.net/th?id=OIP._QXmJw3tbOsLXmF1slKs-gHaFj&w=276&h=204&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '我实在是懒得复制了'
            },
            {
                title: "娜美",
                id: 8,
                img_url: 'https://tse3-mm.cn.bing.net/th?id=OIP.qYr3WEhb70HVMdMKIpe5RAHaEK&w=254&h=160&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '海贼王里面的娜美也是很可爱呢'
            },
            {
                title: "琴女",
                id: 9,
                img_url: 'https://tse2-mm.cn.bing.net/th?id=OIP.Me3rqbk9X_Zg7-gwZWXtYwHaEh&w=300&h=183&c=7&o=5&dpr=1.5&pid=1.7',
                zhaiyao: '琴女是LOL中的一个辅助英雄,被称为移动的buff'
            },
        ]
    })
});

router.get('/getimageInfo', function (req, res) {
    res.status(200).json({
        status: 0,
        message: {
            title: "《为美好的世界献上祝福！》小慧慧",
            id: 1,
            click: 10086,
            add_time: '2019-04-13 14:46:00',
            img_url: 'https://cn.bing.com/th?id=OIP.P8nEmnFOgyWLvRrcBDtYpQHaEo&pid=Api&rs=1&p=0',
            content: '《为美好的世界献上祝福！》是轻小说作家晓枣著作，插画家三岛黑音负责插画，角川Sneaker文库所属的轻小说。'
        },

    })
});

router.get('/getthumbimages', function (req, res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                src: 'https://cn.bing.com/th?id=OIP.P8nEmnFOgyWLvRrcBDtYpQHaEo&pid=Api&rs=1&p=0',
                w: 474,
                h: 296,
            },
            {
                src: 'https://tse2-mm.cn.bing.net/th?id=OIP.cJ7YvUDz4qzcFda717O6rAHaEK&w=300&h=168&c=7&o=5&dpr=1.5&pid=1.7',
                w:459,
                h:252
            },
            {
                src: 'http://img.ecyss.com/medium/1/280/e2698dca3017441ba92df3ff6952f721.jpg',
                w:600,
                h:748
            },
            {
                src: 'https://tse3-mm.cn.bing.net/th?id=OIP.qYr3WEhb70HVMdMKIpe5RAHaEK&w=254&h=160&c=7&o=5&dpr=1.5&pid=1.7',
                w:381,
                h:240
            },
            {
                src: 'https://tse2-mm.cn.bing.net/th?id=OIP.Me3rqbk9X_Zg7-gwZWXtYwHaEh&w=300&h=183&c=7&o=5&dpr=1.5&pid=1.7',
                w:450,
                h:274
            }
        ]
    });
});

router.get('/getgoods',function (req,res) {
    res.status(200).json({
        status: 0,
        message: [
            {
                id:87,
                title:'华为 HUAWEI P30 麒麟980AI智能芯片全面屏屏内指纹超感光徕卡三摄手机8GB+64GB亮黑色全网通双4G手机双',
                add_time:'2019-4-13 18:46:01',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img14.360buyimg.com/n1/s450x450_jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg',
                sell_price:'3988',
                market_price:'6666',
                stock_quantity:44
            },
            {
                id:88,
                title:'Apple iPhone 8 Plus (A1864) 64GB 移动联通电信4G手机',
                add_time:'2019-4-13 18:43:00',
                zhaiyao:'【热卖中',
                click:'666',
                img_url:'https://img13.360buyimg.com/n1/s450x450_jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:40
            },
            {
                id:89,
                title:'热卖中',
                add_time:'2019-4-13 18:48:00',
                zhaiyao:'此商品将于2019-04-15,00点结束闪购特卖，趣你的生活',
                click:'666',
                img_url:'https://img14.360buyimg.com/n1/s450x450_jfs/t25198/337/1766166617/278019/a438435b/5bbc48ebN5db46709.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:250
            },
            {
                id:90,
                title:'Apple iPhone 8 Plus (A1864) 64GB 深空灰色 移动联通电信4G手机',
                add_time:'2019-4-13 18:46:55',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img10.360buyimg.com/n1/s450x450_jfs/t8107/37/1359438185/72159/a6129e26/59b857f8N977f476c.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:120
            },
            {
                id:91,
                title:'华为 HUAWEI P30 麒麟980AI智能芯片全面屏屏内指纹超感光徕卡三摄手机8GB+64GB亮黑色全网通双4G手机双',
                add_time:'2019-4-13 18:46:44',
                zhaiyao:'【热卖中》',
                click:'666',
                img_url:'https://img14.360buyimg.com/n1/s450x450_jfs/t1/28692/26/12501/332089/5c98cc90E6c89e802/9c3ceb43a54dcb93.jpg',
                sell_price:'3988',
                market_price:'6666',
                stock_quantity:80
            },
            {
                id:92,
                title:'Apple iPhone 8 Plus (A1864) 64GB 移动联通电信4G手机',
                add_time:'2019-4-13 18:46:33',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img13.360buyimg.com/n1/s450x450_jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:33
            },
            {
                id:93,
                title:'索尼（SONY） Xperia XZ3 H9493 HDR OLED显示屏 6GB+64GB 澈黑 新品上市 移动联通双4G手机',
                add_time:'2019-4-13 18:48:22',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img14.360buyimg.com/n1/s450x450_jfs/t25198/337/1766166617/278019/a438435b/5bbc48ebN5db46709.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:201
            },
            {
                id:94,
                title:'Apple iPhone 8 Plus (A1864) 64GB 移动联通电信4G手机',
                add_time:'2019-4-13 18:46:33',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img13.360buyimg.com/n1/s450x450_jfs/t8284/363/1326459580/71585/6d3e8013/59b857f2N6ca75622.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:33
            },
            {
                id:95,
                title:'热卖中',
                add_time:'2019-4-13 18:48:22',
                zhaiyao:'热卖中',
                click:'666',
                img_url:'https://img14.360buyimg.com/n1/s450x450_jfs/t25198/337/1766166617/278019/a438435b/5bbc48ebN5db46709.jpg',
                sell_price:'4699',
                market_price:'9999',
                stock_quantity:201
            },
        ]
    });

});

router.get('/goods/getinfo',function (req,res) {
   res.status(200).json({
       status:0,
       message:[
           {
               id:101,
               title:'Shinco/新科 S2300 无线麦克风',
               add_time:'2019-4-14 13:50:00',
               stock_quantity:38,
               market_price:269,
               sell_price:'199'
           }
       ]
   })
});

router.get('/goods/getdesc',function (req,res) {
    res.status(200).json({
        status:0,
        message:[
            {

                title:'Shinco/新科 S2300 无线麦克风',
                content:'<p><strong><span style="font-size: 18px; text-decoration: underline;"></span></strong></p><p style="text-align: left; white-space: normal;">&nbsp; &nbsp;&nbsp;<span style="font-size: 18px;"><strong>&nbsp;【</strong></span><span style="font-size: 18px; text-decoration: underline;"><strong>常见</strong><strong>接口形状】</strong></span></p><p style="text-align: left; white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;从接口形状来分，虽然每一篇Type-C科普都要列举好多，但实际上常用的USB接口的形状主要分为USB-A/B/C三类接口：</p><p style="text-align: center;"><span style="font-size:0;line-height:0;height:0;display:block;clear:both;"></span><img id="content-first-img" width="640" height="400"  onclick="window.open(\'/pic/6946681.html#id=19305126\');" style="cursor:pointer;border: 1px solid rgb(229, 229, 229); border-image: none;"  alt="没有了Type-C接口 你的笔记本会怎样？ " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/03/0D/ChMkJluefD6IJEc-AAEjcxovuvQAArwVADuIV0AASOL035.jpg"/></p><p style="white-space: normal;"><strong style="text-align: center;">&nbsp;&nbsp;&nbsp;&nbsp;TypeA</strong><span style="text-align: center;">：即我们常见的<strong>标准USB大口</strong>，主流的可以分为USB2.0速度（几十M/S）和USB3.0速度（上百M/S），事实上目前有少量Type-A为USB3.1 10Gbps速度，常见于新的台式机主板上。</span></p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;TypeB</strong>：常见于打印机以及带触摸和USB接口的显示器，日常使用频率低。</p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;<strong>&nbsp;Type-C</strong>：今天的主角，目前绝大多数手机的充电/数据接口，有些还同时是手机的耳机接口（乐视，小米）以及视频输出接口（华为Mate10、三星S8/S9、Lumia950、坚果R1、Pro2S）。同时也是2015款12英寸<a href="http://detail.zol.com.cn/notebook/index1171364.shtml" class="hui14_line">Macbook</a>后苹果全系新<a href="http://nb.zol.com.cn/" class="hui14_line">笔记本</a>的主要接口。</p><p style="white-space: normal;"><strong>&nbsp; &nbsp;</strong> 而除此之外，刚才提到的Type-B虽然应用场景很少。但是他的分支之一，<strong>Micro B</strong>，却是在USB-C到来之前统治着大多数移动设备的接口标准。至今仍有很多采用MicroB的设备服役，包括极个别新品手机。</p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;MircoB分为<strong>MicroB 2.0</strong>和<strong>MicroB 3.0</strong>，外观区别就是MircroB3.0是基于2.0接口更宽。<strong>MicroB 2.0的线可以插入MicroB 3.0的口</strong><strong>，反之则不行</strong>。</p><p style="text-align: center;"><a href="/pic/6946681.html#id=19305138" rel="nofollow"><img width="640" height="147" style="border: 1px solid rgb(229, 229, 229); border-image: none;" alt="没有了Type-C接口 你的笔记本会怎样？ " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/03/0D/ChMkJ1uejBSIERYQAAFuvkvzpRQAArwZgF2GxAAAW7W560.jpg"/></a><br/></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;接口较窄的MicroB 2.0的是USB2.0速度，常见于2014年及以前的大部分安卓和WP手机，以及目前极个别品牌的手机中。目前好多蓝牙耳机和充电宝等外设依旧有使用，目前在移动折别领域与Type-C可以说是互占半壁江山。</p><p style="text-align: center;"><a href="/pic/6946681.html#id=19305140" rel="nofollow"><img width="640" height="242" style="border: 1px solid rgb(229, 229, 229); border-image: none;" alt="没有了Type-C接口 你的笔记本会怎样？ " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/03/0D/ChMkJ1uejR6Iej_lAAETRNSHjvoAArwZwJp1sEAARNc298.jpg"/></a><br/></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;而接口较宽的MicroB 3.0在手机只存在了很短的时间就消失了，<strong>三星S5、三星Note3</strong>是手机里少有的搭载MicroB 3.0接口的智能手机。目前在<strong>USB3.0的移动硬盘中广泛采用</strong>。由于该接口过于扁长，多次插拔后故障率较高，预计未来会全面被USB-C接口取代。</p><p style="text-align: center;"><a href="/pic/6946681.html#id=19305139" rel="nofollow"><img width="640" height="322" style="border: 1px solid rgb(229, 229, 229); border-image: none;" alt="没有了Type-C接口 你的笔记本会怎样？ " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/03/0D/ChMkJ1uejQmIdsSPAADdMVGqo0sAArwZwIfYTEAAN1J825.jpg"/></a><br/></p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>而除了上述几种，其实还有好多USB接口类型。但是我们常见的就是这几种，因此不再赘述太小众的，感兴趣的可以看图自行了解。而由这张图以及上面对几种主流USB接口的描述，我们也可以看出Type-C接口的优势所在。</p><p style="text-align: center;"><a href="/pic/6946681.html#id=19305127" rel="nofollow"><img width="640" height="401" title="没有了Type-C接口 你的笔记本会怎样？ " style="border: 1px solid rgb(229, 229, 229); border-image: none; width: 640px; height: 401px;" alt="没有了Type-C接口 你的笔记本会怎样？ " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/03/0D/ChMkJ1uef86ILeQEAAB45tZ4P4MAArwWADIyFEAAHj-228.jpg"/></a><br/></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;<strong>&nbsp;首先</strong>，相比传统USB接口，Type-C的接口形态是正反面完全一致，因为无论是如何插入接口中都<strong>不会插错</strong>。相比于同样细长的MicroB系列接口，接口更简单，降低了故障率。</p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;其次</strong>，相对于其他的A/B接口，在USB-C<strong>没有Mini/Micro</strong>之分，所有的C型接口造型都是<strong>统一</strong>的，<strong>通用性</strong>很强。不过这个前提是USB-C设备足够普及，否则反而添乱。</p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;最后</strong>，从MicroB的2.0和3.0两种接口我们可以看出，传统USB接口在<strong>不同带宽和定义</strong>下，由于针脚需要，会呈现不同的外在形态。而USB-C型接口则无论USB2.0速度还是3.0（3.1Gen1)、3.1Gen2、雷电3，整个<strong>接口形状都不会改变</strong>。</p><p style="text-align: center; white-space: normal;"><a href="/pic/6946681.html#id=19226089" rel="nofollow"><img width="640" height="574" title="万金油还是摆设？起底笔记本Type-C现状 " style="border: 1px solid rgb(229, 229, 229); border-image: none; width: 640px; height: 574px;" alt="万金油还是摆设？起底笔记本Type-C现状 " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/05/06/ChMkJ1tgBruIeOgpAAGNFKNKZssAAqP7wLerq8AAY0s406.jpg"/></a><br/><strong>USB Type-C接口的公母口</strong></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;<strong>&nbsp;</strong><span style="color: rgb(192, 0, 0);"><strong>有关Type-C，它仅作为接口的作用，一句话：体积小通用强还可以正插反插都不纠结</strong>。</span>所以仅作为接口来看，Type-C接口的意义就在于<strong>更好的使用体验</strong>&nbsp;。&nbsp;</p><p style="white-space: normal;">.</p><hr/><p style="white-space: normal;">&nbsp; &nbsp; 【<span style="font-size: 18px; text-decoration: underline;"><strong>常见的USB速度、带宽水平（3.1 Gen1与3.1 Gen2）</strong></span><span style="font-size: 18px; text-decoration: none;"><strong>】</strong></span></p><p style="white-space: normal;">&nbsp; &nbsp; 虽然USB发展已经很久了，但是目前主流且在Type-C接口中存在过的就只有：<strong>USB2.0</strong>、<strong>USB3.0（3.1 Gen1）</strong>、<strong>USB3.1 Gen2</strong>。而我们过去和现在使用的大部分手机的数据接口基本为<strong>USB2.0</strong>标准的速度，理论带宽数为<strong>480Mbp</strong>s，换算成MB/S速度单位的过程如下：</p><p style="text-align: center; white-space: normal;">&nbsp;&nbsp;<strong>&nbsp;&nbsp;480&#10135;8&#10006;0.8=48</strong>&nbsp;<strong>MB/S</strong><br/></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;最后乘以0.8是<strong>8bit/10bit</strong><strong>传输折损值</strong>，在不考虑更精细误差情况下，我们为了大家更直观，之后的计算统一采用这个方法。说到USB2.0，现在很多人的老式U盘2.0就是。因而在对电脑拷贝数据时，读写一般不会超过40M/S，拷大文件很难受。</p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;而之后诞生的<strong>USB3.0（后被强行划归USB3.1 Gen1系列</strong>），其带宽提升到了<strong>5Gbps</strong>：<br/></p><p style="text-align: center; white-space: normal;"><strong>5&#10135;8&#10006;0.8=0.5GB/S</strong></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;<strong>500MB/S</strong>的传输速度相比2.0提升了10倍，这也就是很多厂商宣传3.1 Type-C接口时的小心思，“传输速度是上一代的10倍”，USB2.0被“强行上一代”。所以下次再有宣传3.1 10倍速度的文案，大家看看就好。<br/></p><p style="text-align: center; white-space: normal;"><a href="/pic/6946681.html#id=19226592" rel="nofollow"><img width="640" height="72" style="border: 1px solid rgb(229, 229, 229); border-image: none;" alt="万金油还是摆设？起底笔记本Type-C现状 " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/05/06/ChMkJltgIzWIP5bWAABNmJI7uQ8AAqQHwLdF78AAE2w392.jpg"/></a><br/></p><p style="white-space: normal;">&nbsp; &nbsp; 而真正意义的<strong>USB3.1（Gen2）</strong>带宽，则达到了<strong>10Gbps</strong>。按照上述换算理论上可以实现<strong>1GB/S</strong>的传输速度，可以说是相当惊人了。不过实际上，由于真USB3.1标准采用的是全新的<strong>128b/132b的编码传输方式</strong>，相比于USB3.0和2.0的8b/10b，<strong>传输中的折损大大降低！</strong>所以按照<strong>最理想情况</strong>，USB3.1 Gen2的传输速度计算为：</p><p style="text-align: center; white-space: normal;"><strong>10&#10135;8&#10006;128/132≈1.21GB/S</strong></p><p style="white-space: normal;">&nbsp; &nbsp; 而即使是由于线缆不过关等因素造成达不到这样的低折损，理论性能仍可以达到1GB/S。大家可以脑补，一部720P高清电影几秒内传完是怎样的体验。但是结合目前的硬件状态来看，3.1 Gen2的速度对于多数使用场景显得不上不下，有些鸡肋，这个稍后单独讲到。</p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;而去年刚刚亮相的<strong>USB3.2</strong>，理论带宽可以达到20Gbps，将全面采用USB-C接口而放弃其他形式存在。但是目前的3.2还处在概念阶段，展示出来的原型机还不成熟，没有成型的主控和其他配套方案，所以暂时不作讨论。</p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;所以<strong><span style="color: rgb(192, 0, 0);">从传输速度角度来看，USB-C只是设计上允许更高的带宽加入，并不代表所有Type-C设备一定是高速的</span></strong>。但在未来更高带宽的USB及其他传输标准中，Type-C接口将成为主要的承载方式。<br/></p><p style="white-space: normal;">.</p><hr/><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;说到这里，主流的接口形状和主流的USB速度全都齐活了。针对很多人误会的Type-C = USB3.1，我觉得简单的说“不是”已经没有什么澄清作用了，只好如下说明：</p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;1. Type-C接口有可能是USB2.0速度或者USB3.0/3.1速度：在手机上多数为USB2.0速度，而在PC上目前C口至少为USB3.0/3.1速度；<br/></strong></p><p style="white-space: normal;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;2. Type-A的标准USB接口在台式机部分主板上,也可以支持USB3.1 Gen2（10Gbps）的传输速度</strong></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;上述两条应该可以基本让大家明白，<strong>USB接口形态与其传输速度之间是没有绝对的绑定关系的</strong>。对Type-C感兴趣的朋友，以后请不要看到笔记本有<strong>Type-C</strong>，就兴奋地下单购买全能扩展坞，他<strong>有可能只是个变换了形态的USB3.0接口而已。</strong></p><p style="text-align: center; white-space: normal;"><a href="/pic/6946681.html#id=19226931" rel="nofollow"><img width="640" height="214" title="万金油还是摆设？起底笔记本Type-C现状 " style="border: 1px solid rgb(229, 229, 229); border-image: none; width: 640px; height: 214px;" alt="万金油还是摆设？起底笔记本Type-C现状 " src="https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/05/07/ChMkJ1tgLleIBfZCAABQKE99l2MAAqQLwM38f8AAFBA672.jpg"/></a><br/></p><p style="white-space: normal;">&nbsp;&nbsp;&nbsp;&nbsp;以上就是从常规的<strong>数据传输意义</strong>上，对常见<strong>USB带宽</strong>以及<strong>USB接口</strong>的情况介绍。下面我们将开始接触所谓”不常见“，但又是Type-C接口真正意义上区别于前几代接口的重要使用场景。之前对于笔记本Type-C无感的朋友，也许会因为下一部分描述而对这个神奇的接口种草，比如中了毒的我。<br/></p>',

            }
        ]
    })
});

// 导出
module.exports = router;